<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- CSRF Token -->
  <meta name="csrf-token" content="{{ csrf_token() }}">

  <title>Builder</title>

  <!-- Scripts -->

  <!-- Fonts -->
  <style>
    .editor-content > .sections-wrapper{
      width: {{ get_altrp_setting( 'container_width', '1440' ) }}px;
    }
  </style>
</head>

<body>
  <div id="editor-content">

  </div>
</body>

</html>