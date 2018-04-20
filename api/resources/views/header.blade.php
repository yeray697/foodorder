<!DOCTYPE html>
<html>
    <head>
        <title>{{$title}}</title>
        <!--Import Google Icon Font-->
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <!--Import materialize.css-->
        <link type="text/css" rel="stylesheet" href="css/materialize.min.css"  media="screen,projection"/>      
        <!--Let browser know website is optimized for mobile-->
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    </head>
    <body>
        @if ($navbar)
        <nav>
            <div class="nav-wrapper">
            <a href="#" class="brand-logo">Logo</a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li class="{{Request::is('/')?'active':''}}"><a href="{{ url('/') }}">Sass</a></li>
                @if (Auth::id())
                <li class="{{Request::is('/signup')?'active':''}}"><a href="{{ url('/register') }}">Register</a></li>
                @else
                <li class="{{Request::is('/login')?'active':''}}"><a href="{{ url('/login') }}">Log In</a></li>
                @endif
                </ul>
            </div>
        </nav>
        @endif

