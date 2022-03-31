const name = 'Java';

function displayName() {
  const name = 'Script';
  logMessage(name);
}

function logMessage(name) {
  console.log(`Hello ${name}`);
}

displayName();

const linkElement = document.getElementById('link');
linkElement.setAttribute('target', '_blank');

document.querySelector('h1').style.color = '#5cdc5f';

document.addEventListener('click', function(event) {
  console.log(`Click detected x ${event.offsetX} y ${event.offsetY}`);
});