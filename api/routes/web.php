<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return View::make('index');
});

Route::get('/home', function () {
    return View::make('header',['title' => 'Home'
                                ,'navbar' => true
                                ,'navbarSelected' => 'home']);
});


Route::get('/login', function () {
    return View::make('header',['title' => 'Home'
                                ,'navbar' => true
                                ,'navbarSelected' => 'home']);
});

Route::get('/signup', function () {
    return View::make('header',['title' => 'Home'
                                ,'navbar' => true
                                ,'navbarSelected' => 'home']);
});
Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
