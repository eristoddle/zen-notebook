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

    Route::post('attempt', function () {
        $credentials = Input::only('email', 'password');
        if (!$token = JWTAuth::attempt($credentials)) {
            return Response::json(['error' => 'user_not_found'], 404);
        }
        return Response::json(compact('token'));
    });

    Route::get('auth', function () {
        $token = Input::only('token')['token'];
        try {
            $user = JWTAuth::authenticate($token);
        } catch (Tymon\JWTAuth\Exceptions\TokenExpiredException $e) {
            return Response::json(['error' => 'token_expired'], 401);
        }
        if (!$user) {
            return Response::json(['error' => 'user_not_found'], 404);
        }
        return Response::json(compact('user'));
    });

    Route::resource('users', 'UserController');

    Route::resource('notebooks', 'NotebookController');

});