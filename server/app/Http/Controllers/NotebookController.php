<?php namespace App\Http\Controllers;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class NotebookController extends ApiController
{

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        $notebooks = [
            [
                'id' => '1',
                'name' => 'Sample1',
                'type' => 'notebook'
            ],
            [
                'id' => '2',
                'name' => 'Sample2',
                'type' => 'nanowrimo'
            ]
        ];

        return $this->respondWithCollection($notebooks, function ($notebook) {
            return [
                'id' => (integer)$notebook['id'],
                'name' => $notebook['name'],
                'type' => $notebook['type']
            ];
        });
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return Response
     */
    public function show($id)
    {
        $notebook = null;
        $notebooks = [
            [
                'id' => '1',
                'name' => 'Sample1',
                'type' => 'notebook'
            ],
            [
                'id' => '2',
                'name' => 'Sample2',
                'type' => 'nanowrimo'
            ]
        ];

        foreach ($notebooks as $n) {
            if($n['id'] == $id){
                $notebook = $n;
            }
        }

        return $this->respondWithItem($notebook, function ($notebook) {
            return [
                'id' => (integer)$notebook['id'],
                'name' => $notebook['name'],
                'type' => $notebook['type']
            ];
        });
    }

}