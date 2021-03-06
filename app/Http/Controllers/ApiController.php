<?php

namespace App\Http\Controllers;

use App\Altrp\Column;
use App\Altrp\Model;
use App\Altrp\Relationship;
use App\Http\Controllers\Controller;
use App\Http\Requests\ApiRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

/**
 * Class ApiController
 * @package App\Http\Controllers
 * @property string $modelClass
 */
class ApiController extends Controller
{
    /**
     * @param ApiRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function index(ApiRequest $request)
    {
        $resources = $this->getModelsAndPageCount($request);
        return response()->json($resources, 200, [], JSON_UNESCAPED_UNICODE);
    }

    /**
     * Получить список ресурсов и количество страниц
     *
     * @param ApiRequest $request
     * @return array
     */
    private function getModelsAndPageCount(ApiRequest $request)
    {
        $search = $request->get('s');
        $page = $request->get('page');
        $limit = $request->get('pageSize');
        $parts = explode('\\', $this->modelClass);
        $modelName = array_pop($parts);
        $indexedColumns = $this->getIndexedColumns($modelName);
        $resource = \Str::lower(\Str::plural($modelName));
        $order_method = 'orderByDesc';
        $order_column = $request->get( 'order_by', 'id' );
        $filters = [];
        if( $request->get( 'filters') ){
          $_filters = json_decode( $request->get( 'filters' ), true );
          foreach ( $_filters as $key => $value ) {
            $filters[$key] = $value;
          }
        }
        if( $request->get( 'order' ) === 'ASC'){
          $order_method = 'orderBy';
        }
        if ($page && $limit) {
            $modelsCount = $search
                ? $this->modelClass::whereLike($indexedColumns, $search)->whereLikeMany( $filters )->toBase()->count()
                : $this->modelClass::toBase()->whereLikeMany( $filters )->count();
            $pageCount = ceil($modelsCount / $limit);
            $offset = $limit * ($page - 1);
            $$resource = $search
                ? $this->modelClass::whereLike($indexedColumns, $search)
                    ->whereLikeMany( $filters )
                    ->$order_method( $order_column )
                    ->skip($offset)
                    ->take($limit)
                    ->get()
                : $this->modelClass::$order_method( $order_column )
                    ->whereLikeMany( $filters )
                    ->skip($offset)
                    ->take($limit)
                    ->get();
        } else {
            $pageCount = 0;
            $$resource = $search
                ? $this->modelClass::whereLike($indexedColumns, $search)
                    ->whereLikeMany( $filters )->$order_method( $order_column )->get()
                : $this->modelClass::$order_method( $order_column )->whereLikeMany( $filters )->get();
        }
        $hasMore = $pageCount > $page;

        $model = Model::where('name', $modelName)->first();
        $relations = Relationship::where([['model_id',$model->id],['always_with',1]])->get()->implode('name',',');
        $relations = $relations ? explode(',',$relations) : false;
        if ($relations) {
            $$resource = $$resource->load($relations);
        }

        $res = compact('pageCount' ,'hasMore');
        $res['data'] = $$resource;


        return $res;
    }

    /**
     * Получить список индексируемых полей
     *
     * @param $modelName
     * @return array
     */
    private function getIndexedColumns($modelName)
    {
        $table = Model::where('name', $modelName)->first()->table;
        $columns = Column::where([['indexed', 1], ['table_id', $table->id]])->get();
        $columnsList = ['id'];
        for ($i = 0; $i < count($columns); $i++) {
            $columnsList[] = $columns[$i]->name;
        }
        return $columnsList;
    }

  /**
   * Список опций для селекта
   * @param ApiRequest $request
   */
  public function options( ApiRequest $request )
  {

    $filters = [];
    if( $request->get( 'filters') ){
      $_filters = json_decode( $request->get( 'filters' ), true );
      foreach ( $_filters as $key => $value ) {
        $filters[$key] = $value;
      }
    }
    /**
     * @var \App\AltrpModels\test $model
     */
    $model = new $this->modelClass();
    $label_name = $model->getLabelColumnName();
    $title_name = $model->getTitleColumnName();
    if( ! $request->get( 's' ) ){
      if( ! count( $filters ) ){
        $options = $model->all();
      } else {
        $options = $model->whereLikeMany( $filters );
      }
    } else {
      $options = $model->where( 'id', 'like', '%' . $request->get( 's' ) . '%' );

      if( $title_name !== 'id' ){
        $options->orWhere( $title_name, 'like', '%' . $request->get( 's' ) . '%' );
      }
      if( $title_name !== $label_name ){
        $options->orWhere( $label_name, 'like', '%' . $request->get( 's' ) . '%' );
      }
      $options = $options->whereLikeMany( $filters );
//      echo '<pre style="padding-left: 200px;">';
//      var_dump( $filters );
//      echo '</pre>';

      $options = $options->get();
    }
    $_options = [];

    foreach ( $options as $option ) {

      $_options[] = [
        'value' => $option->id,
        'label' => $option->$label_name ? $option->$label_name : $option->id,
      ];
    }
    return response()->json( $_options, 200, [], JSON_UNESCAPED_UNICODE );
  }
}
