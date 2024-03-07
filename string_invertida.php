<?php
function inverterString($str) {
  $strInvertida = "";

  for ($i = strlen($str) - 1; $i >= 0; $i--) {
    $strInvertida .= $str[$i];
  }

  return $strInvertida;
}

$strOriginal = "Hello World";
$strInvertida = inverterString($strOriginal);

echo "String original: " . $strOriginal . "<br>";
echo "String invertida: " . $strInvertida;
?>