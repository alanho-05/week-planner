
const $form = document.querySelector('.form');

const $popup = document.querySelector('#my-button');

const shut = document.querySelector('#no-button');

const background = document.querySelector('.row');

const shader = document.querySelector('.column-full');

$popup.addEventListener('click', popp);

shut.addEventListener('click', closedpop);

function popp(event) {
  shader.setAttribute('class', 'dark');
  background.setAttribute('class', 'show');
}

function closedpop(event) {
  shader.setAttribute('class', 'overlay');
  background.setAttribute('class', 'noshow');
}

$form.addEventListener('submit', function (event) {
  event.preventDefault();
  const entry = {
    entryId: data.nextEntryId,
    weekday: event.target.elements.weekday.value,
    time: event.target.elements.time.value,
    textarea: event.target.elements.textarea.value
  };
  data.entries.shift(entry);
});
console.log(entry);
