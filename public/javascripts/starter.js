
import $ from 'jquery'

import 'bootstrap'
import '../../bower_components/bootstrap/dist/css/bootstrap.css'

import '../javascripts/graph.js'
$(document).ready(function(){
  $('#login').click(function() {
    $('.vc-child').load('signin');
  });
});
