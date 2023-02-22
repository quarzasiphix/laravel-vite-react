<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel yo sup</title>

        <!-- Fonts -->
        <link href="https://fonts.bunny.net/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">

        @viteReactRefresh
        @vite(['./resources/css/App.css', './resources/js/App.tsx'])
    </head>
    <body>
        <div class="app">

        </div>
    </body>
</html>
