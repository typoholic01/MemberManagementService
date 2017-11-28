<?php 

function checkbox($name, $checked) {
  if ($checked) {
    echo '<input type="checkbox" name="$name" checked />';
  } else {
    echo '<input type="checkbox" name="$name" />';
  }
}

?>