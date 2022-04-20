<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//Sign In Controller
Route::post('/sign-in', 'App\Http\Controllers\UserManagement\SignInController@signIn');

//Sign Up Controller
Route::post('/sign-up', 'App\Http\Controllers\UserManagement\SignUpController@signUp');

Route::group(['middleware' => 'auth:sanctum'], function () {
    // ImageController
    Route::get('/photos', 'App\Http\Controllers\ImageController@index');
    Route::post('/upload', 'App\Http\Controllers\ImageController@store');
});
