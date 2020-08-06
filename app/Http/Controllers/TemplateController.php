<?php

namespace App\Http\Controllers;

use App\Constructor\Template;
use App\Constructor\TemplateSetting;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\URL;

class TemplateController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function index( Request $request )
    {
      $page_count = 1;
      if ( ! $request->get( 'page' ) ) {
        $_templates = Template::where( 'type', '!=', 'review' )->get()->sortByDesc( 'id' )->values();
      } else {
        $page_size = $request->get( 'pageSize', 10 );
        $area_name = $request->get( 'area', 'content' );
        $_templates = Template::where( 'type', '!=', 'review' )
          ->join( 'areas', 'areas.id', '=', 'templates.area' )
          ->where( 'areas.name', $area_name )
          ->offset( $page_size * ( $request->get( 'page' ) - 1 ) )
          ->limit( $page_size );
        $page_count = $_templates->toBase()->getCountForPagination();
        $_templates = $_templates->get( 'templates.*' )->sortByDesc( 'id' )->values();

        $page_count = ceil( $page_count / $page_size );
      }
      $templates = [];
      foreach ($_templates as $template) {
        /**
         * @var Template $template
         */
        $templates[] = [
          'user' => $template->user,
          'name' => $template->name,
          'title' => $template->title,
          'id' => $template->id,
          'author' => $template->user->name,
          'url' => '/admin/editor?template_id=' . $template->id,
          'area' => $template->area()->name,

        ];

      }
      return \response()->json([
        'templates' => $templates,
        'pageCount' => $page_count,
      ]);
    }

    /**
     * Send array for frontend <option> tags ({
     *     value,
     *    label
     * }).
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function options( Request $request )
    {
        $searchRequest = $request->s;
        if ($searchRequest) {
            $templates = Template::where('type', '!=', 'review')
                        ->where(function ($query) use ($searchRequest) {
                            $query->where('title', 'like', "%{$searchRequest}%")
                                ->orWhere('name', 'like', "%{$searchRequest}%")
                                ->orWhere('id', $searchRequest);
                        })->get();
        } else {
            $templates = Template::where('type', '!=', 'review')->get();
        }

        $options = [];

        foreach ($templates as $template) {
            $options[] = [
                'value' => $template->id,
                'label' => $template->title,
            ];
        }
        return \response()->json($options);
    }
    /**
     * Send array for frontend <option> tags ({
     *     value,
     *    label
     * }). Только для popup
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function popupsOptions( Request $request )
    {
        $searchRequest = $request->s;
        if ($searchRequest) {
            $templates = Template::where('type', '!=', 'review')
              ->join( 'areas', 'areas.id', '=', 'templates.area' )
              ->where( 'areas.name', '=', 'popup' )
              ->where(function ($query) use ($searchRequest) {
                  $query->where('title', 'like', "%{$searchRequest}%")
                      ->orWhere('name', 'like', "%{$searchRequest}%")
                      ->orWhere('id', $searchRequest);
              })->get( 'templates.*' );
        } else {
            $templates = Template::where('type', '!=', 'review')
              ->join( 'areas', 'areas.id', '=', 'templates.area' )
              ->where( 'areas.name', '=', 'popup' )
              ->get( 'templates.*' );
        }

        $options = [];

        foreach ($templates as $template) {
            $options[] = [
                'value' => $template->id,
                'label' => $template->title,
            ];
        }
        return \response()->json($options);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        //
        $template_data = $request->toArray();
        $template_data['data'] = json_encode($template_data['data']);
        $template = new Template($template_data);
        $template->user_id = Auth::user()->id;
        $template->type = 'template';
        if ($template->save()) {

            return \response()->json(
                [
                    'message' => 'Success',
                    'redirect' => true,
                    'url' => url('/admin/editor?template_id=' . $template->id)
                ]
            );
        }
        return \response()->json(['message' => 'Error Save'], 500);
    }

    /**
     * Display the specified resource.
     *
     * @param \App\Constructor\Template $template
     * @return \Illuminate\Http\Response
     */
    public function show(Template $template)
    {
      $res = $template->toArray();
      $res['template_type'] = $template->template_type;
      return response()->json( $res );
    }

    /**
     * Display the specified resource.
     *
     * @param string $template_id
     * @return \Illuminate\Http\Response
     */
    public function show_frontend(string $template_id)
    {
        $template = Template::find($template_id);

        return response()->json($template->toArray());
    }
    /**
     * Show the form for editing the specified resource.
     *
     * @param \App\Constructor\Template $template
     * @return \Illuminate\Http\Response
     */
    public function edit(Template $template)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Constructor\Template $template
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Template $template)
    {
        $old_template = $template;

        if (!$old_template) {
            return response()->json(trans("responses.not_found.template"), 404, [], JSON_UNESCAPED_UNICODE);
        }

        $review = new Template($old_template->toArray());
        $review->parent_template = $old_template->id;
        $review->type = 'review';
        if (!$review->save()) {
            return response()->json(trans("responses.dberror"), 400, [], JSON_UNESCAPED_UNICODE);
        }
        $old_template->name = $request->name;
        $old_template->title = $request->title;
        $old_template->data = json_encode($request->data);
        $old_template->type = 'template'; //1
        $old_template->user_id = auth()->user()->id;

        if ($old_template->save()) {
            return response()->json($old_template, 200, [], JSON_UNESCAPED_UNICODE);
        }

        return response()->json(trans("responses.dberror"), 400, [], JSON_UNESCAPED_UNICODE);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Constructor\Template $template
     * @return \Illuminate\Http\JsonResponse
     * @throws \Exception
     */
    public function destroy(Template $template)
    {
        //

        if ($template->delete()) {
            return \response()->json(['success' => true]);
        }
        return \response()->json(['success' => false], 500);
    }

    /**
     * @param string $template_id
     * @return \Illuminate\Http\JsonResponse
     */
    public function reviews($template_id)
    {
        $reviews = Template::where('parent_template', $template_id)
            ->where('type', 'review')
            ->get([
                'parent_template',
                'id',
                'title',
                'created_at',
                'updated_at',
            ])->toArray();
        return \response()->json($reviews);
    }

    /**
     * Удалить шаблоны по родителю с типом review
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function deleteReviews(Request $request)
    {
        $result = Template::where([
            ['parent_template', $request->template_id],
            ['type', 'review']
        ]);
      if( ! $result->count() ){
        $result = true;
      } else {
        $result = $result->forceDelete();
      }
        return response()->json(['success' => (bool) $result]);
    }

  /**
   * Удалить все review по
   *
   * @param Request $request
   * @return \Illuminate\Http\JsonResponse
   */
  public function deleteAllReviews()
  {
    $result = Template::where( 'type', 'review' );

    if( ! $result->count() ){
      $result = true;
    } else {
      $result = $result->forceDelete();
    }

    return response()->json(['success' => (bool) $result]);
  }
  /**
   * получить review по ID
   *
   * @param Request $request
   * @return \Illuminate\Http\JsonResponse
   */
  public function getAllReview(Request $request)
  {
      $result = Template::where([
          ['id', $request->review_id],
          ['type', 'review']
      ])->get();
      return response()->json($result);
  }

  /**
   * Обрабатываем запрос на получение настройки
   * @param string $template_id
   * @param string $setting_name
   * @return \Illuminate\Http\JsonResponse
   */
  public function settingGet( $template_id, $setting_name ){
    $setting = TemplateSetting::where( [
      'template_id' => $template_id,
      'setting_name' => $setting_name,
    ] )->first();
    if( ! $setting ){
      return response()->json( new \stdClass(), 200, [], JSON_UNESCAPED_UNICODE );
    }
    return response()->json( $setting->toArray(), 200, [], JSON_UNESCAPED_UNICODE );
  }

  /**
   * Обрабатываем запрос на сохранение настройки
   * @param string $template_id
   * @param string $setting_name
   * @param Request $request
   * @return \Illuminate\Http\JsonResponse
   */
  public function settingSet( $template_id, $setting_name, Request $request ){
    $setting = TemplateSetting::where( [
      'template_id' => $template_id,
      'setting_name' => $setting_name,
    ] )->first();
    if( ! $setting ){
      $setting = new TemplateSetting( [
        'template_id' => $template_id,
        'setting_name' => $setting_name,
        'data' => $request->get( 'data' ),
      ] );
    } else {
      $setting->data = $request->get( 'data' );
    }
    if( ! $setting->save() ){
      return response()->json( ['message' => 'Setting not Saved'], 500, [], JSON_UNESCAPED_UNICODE );
    }
    return response()->json( ['success' => true], 200, [], JSON_UNESCAPED_UNICODE );
  }

}
