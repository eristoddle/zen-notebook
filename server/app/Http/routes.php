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
            return Response::json(['error' => 'token_expired'], 401);
        }
        return Response::json(compact('token'));
    });

    Route::get('auth', function () {
        $token = Input::only('token');
        if (!$user = JWTAuth::authenticate($token)) {
            // return 401 error response
        }
        return Response::json(compact('user'));
    });

    Route::post('auth', function () {

        try {
            $user = JWTAuth::parseToken()->toUser();
        } catch (Tymon\JWTAuth\Exceptions\TokenExpiredException $e) {
            // token has expired
            return Response::json(['error' => 'token_expired'], 401);
        }

        if (!$user) {
            // user not found
            return Response::json(['error' => 'user_not_found'], 404);
        }

        return Response::json(compact('user'));
    });

    Route::resource('users', 'UserController');

    Route::resource('notebooks', 'NotebookController');

});