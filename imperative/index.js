const $btn = document.getElementById('btn');
$btn.addEventListener('click', e => {
  $btn.classList.toggle('shining');
  if ($btn.classList.contains('shining')) {
    $btn.innerText = 'I am shining!';
  } else {
    $btn.innerText = 'Make me shine!';
  }
});