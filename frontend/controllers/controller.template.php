<?php

class TemplateController
{
  //MAIN VIEW TEMPLATE
  public function index()
  {
    include 'views/template.php';
  }

  //main route url
  static public function path()
  {
    if (!empty($_SERVER["HTTPS"]) && ('on' == $_SERVER["HTTPS"])) {
      return "https://" . $_SERVER['SERVER_NAME'] . '/';
    } else {
      return "http://" . $_SERVER['SERVER_NAME'] . '/';
    }
  }
}
