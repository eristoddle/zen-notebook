<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/

Route::get('/', 'HomeController@showWelcome');

Route::api(['version' => 'v1', 'prefix' => 'api'], function(){

    Route::get('tests', function(){
        return array(
            'test' => 'here',
            'this' => 'that'
        );
    });

    Route::get('users', ['protected' => true, function(){
        return User::all();
    }]);
});
