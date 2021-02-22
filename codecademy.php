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

===================================
  
<?php
namespace Codecademy;

$message = ["Oh hey", " You're doing great", " Keep up the good work!\n"];

$favorite_nums = [7, 201, 33, 88, 91];
// Write your code below:
echo implode("!", $message);

print_r($favorite_nums);

==================================
  
<?php
namespace Codecademy;

$round_one = ["X", "X", "first winner"];

$round_two = ["second winner", "X", "X", "X"];

$round_three = ["X", "X", "X", "X", "third winner"];

// Write your code below:

$winners = [$round_one[2], $round_two[0], $round_three[4]];

print_r($winners);

==================================

<?php
namespace Codecademy;

$change_me = [3, 6, 9];
// Write your code below:
$change_me[3] = "test";
$change_me[4] = 1;
$change_me[1] = "tadpole";
print_r($change_me);

==================================
  
<?php
namespace Codecademy;

$stack = ["wild success", "failure", "struggle"];
// Write your code below:

array_push($stack, "blocker", "impediment");

array_pop($stack);
array_pop($stack);
array_pop($stack);
array_pop($stack);


==================================

<?php
namespace Codecademy;
$record_holders = [];
// Write your code below:

array_unshift($record_holders, "Tim Montgomery",  "Maurice Greene", "Donovan Bailey", "Leroy Burrell", "Carl Lewis");

echo array_shift($record_holders);

array_unshift($record_holders, "Justin Gatlin", "Asafa Powell");

array_shift($record_holders);

array_unshift($record_holders, "Usain Bolt");
