
import $ from 'jquery'

import 'bootstrap'
import '../../bower_components/bootstrap/dist/css/bootstrap.css'

import '../javascripts/graph.js'
$(document).ready(()=>{
  $('#login').click(()=>{
    $('.vc-child').load('signin');
  });
});
