<?php


namespace App\Http\Controllers\Admin;


use App\Altrp\Builders\AccessorBuilder;
use App\Altrp\Builders\AccessorBuilder2;
use App\Altrp\Controller;
use App\Altrp\Generators\ControllerGenerator;
use App\Altrp\Generators\ModelGenerator;
use App\Altrp\Model;
use App\Http\Controllers\ApiController;
use App\User;
use Illuminate\Http\Request;

class GeneratorController extends ApiController
{
    /**
     * Создание и генерация новой модели
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     * @throws \App\Exceptions\CommandFailedException
     * @throws \App\Exceptions\RelationshipNotInsertedException
     * @throws \App\Exceptions\TableNotFoundException
     */
    public function createModel(Request $request)
    {
        $id = $request->table;
        
        $generator = new ModelGenerator(
            array_merge($request->all(), ['table_id' => $id])
        );

        $result = $generator->generate();

        if ($request) {
            return response()->json('Успешно сгенерировано', 200, [], JSON_UNESCAPED_UNICODE);
        }

        return response()->json('Ошибка генерации', 404, [], JSON_UNESCAPED_UNICODE);
    }

    /**
     * Создание и генерация нового контроллера (с маршрутами)
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function createController(Request $request)
    {
        $id = $request->table;

        $generator = new ControllerGenerator(
            array_merge($request->all(), ['table_id' => $id])
        );

        $result = $generator->generate();

        if ($request) {
            return response()->json('Успешно сгенерировано', 200, [], JSON_UNESCAPED_UNICODE);
        }

        return response()->json('Ошибка генерации', 404, [], JSON_UNESCAPED_UNICODE);
    }

    public function createAccessor(Request $request)
    {
        $id = $request->model;

        $model = Model::find($id);

        if (! $model) {
            return response()->json('Модель не найдена!', 404, [], JSON_UNESCAPED_UNICODE);
        }

        $modelAccessorBuilder = new AccessorBuilder($model, $request->all());

        $result = $modelAccessorBuilder->build();

        if ($request) {
            return response()->json('Success', 200, [], JSON_UNESCAPED_UNICODE);
        }

        return response()->json('Error', 404, [], JSON_UNESCAPED_UNICODE);
    }
}
