<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class RestaurantController extends Controller
{
    public function show ($id)
    {
        return new RestaurantResource(Restaurant::find($id));
    }
}
