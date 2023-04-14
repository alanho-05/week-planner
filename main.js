let data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};

const previousEntryJSON = localStorage.getItem('javascript-local-storage-project');

window.addEventListener('beforeunload', function (event) {
  const entryJSON = JSON.stringify(data);
  localStorage.setItem('javascript-local-storage-project', entryJSON);
});

if (previousEntryJSON !== null) {
  data = JSON.parse(previousEntryJSON);
}

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
    weekday: event.target.elements.day.value,
    time: event.target.elements.time.value,
    textarea: event.target.elements.textarea.value
  };
  data.entries.unshift(entry);
});
