<?php
namespace Codecademy;

// Write your code below:
function convertToShout($str){
  return strtoupper($str) . "!";
}

function tipGenerously($meal){
  return ceil($meal * 1.20);
}

function calculateCircleArea($diameter){
  return (($diameter/2)**2)*pi();
}

echo calculateCircleArea(25);
