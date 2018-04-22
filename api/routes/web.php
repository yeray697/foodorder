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

// Route::get('/', function () {
//     return View::make('index');
// });

// Route::get('/home', function () {
//     return View::make('header',['title' => 'Home'
//                                 ,'navbar' => true
//                                 ,'navbarSelected' => 'home']);
// });


// Route::get('/login', function () {
//     return View::make('header',['title' => 'Home'
//                                 ,'navbar' => true
//                                 ,'navbarSelected' => 'home']);
// });

// Route::get('/signup', function () {
//     return View::make('header',['title' => 'Home'
//                                 ,'navbar' => true
//                                 ,'navbarSelected' => 'home']);
// });
Auth::routes();

// Route::get('/home', 'HomeController@index')->name('home');


Route::get('/bundles/{file}', function ($file) {
    if(File::exists(config('global.frontEndDeployPath') . $file)){
        return File::get(config('global.frontEndDeployPath') . $file);
    }
    else{
        return response()->json([
            'message' => 'Resource not found',
        ], 404);
    }
});

Route::get('/', function () {
    return File::get(config('global.frontEndDeployPath') . "index.html");
});

Route::get('/{any}', function ($any) {
    return File::get(config('global.frontEndDeployPath') . "index.html");
})->where('any', '.*');