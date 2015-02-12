<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', 'WelcomeController@index');

Route::get('home', 'HomeController@index');

Route::controllers([
    'auth' => 'Auth\AuthController',
    'password' => 'Auth\PasswordController',
]);

Route::group(['prefix' => 'api'], function () {

    Route::post('login', function () {
        $credentials = Input::only('email', 'password');

        if (!$token = JWTAuth::attempt($credentials)) {
            // return 401 error response
        }

        return Response::json(compact('token'));
    });

    Route::resource('user', 'ApiUserController', ['only' => ['index', 'show']]);

});