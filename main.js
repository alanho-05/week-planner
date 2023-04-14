const $button = document.querySelector('#add');

$button.addEventListener('click', function () {
  $button.setAttribute('dark');

}
);

/* test */

const shut = document.querySelector('#no-button');

const background = document.querySelector('.row');

const shader = document.querySelector('.column-full');

$button.addEventListener('click', popp);

shut.addEventListener('click', closedpop);

function popp(event) {
  shader.setAttribute('class', 'dark');
  background.setAttribute('class', 'show');
}

function closedpop(event) {
  shader.setAttribute('class', 'overlay');
  background.setAttribute('class', 'noshow');
}
