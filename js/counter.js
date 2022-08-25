let counters = [];

const increment = (event) => {
  let id = event.target.getAttribute("data-name");
  if (counters[id].value < counters[id].maxValue) {
    counters[id].value++;
  }
  showCounters();
}

const decrement = (event) => {
  let id = event.target.getAttribute("data-name");
  if (counters[id].value > counters[id].minValue) {
    counters[id].value--;
    showCounters();
  }
}

const showCounters = () => {
  let counter_list = Object.keys(counters);
  let counter = ``;

  for (let x = 0; x < counter_list.length; x++) {
    let id = counter_list[x];
    counter += "<div class='counter'>" +
      "<div class='counter__block'>" +
      `<div class='decrement button' data-name='${id}' id='decrement'>-</div>` +
      `<div class='increment button' data-name='${id}' id='increment'>+</div>` +
      `<span>value: ${counters[id].value}</span>` +
      "</div>" +
      `<span>min: ${counters[id].minValue} max: ${counters[id].maxValue}</span>` +
      "</div>"
  }
  document.getElementById('counters').innerHTML = counter;

  let incrElements = document.getElementsByClassName('increment')
  for (let x = 0; x < incrElements.length; x++) {
    incrElements[x].addEventListener('click', increment);
  }

  let decrElements = document.getElementsByClassName('decrement')
  for (let x = 0; x < decrElements.length; x++) {
    decrElements[x].addEventListener('click', decrement);
  }
}

const addCounter = () => {
  let minValue = document.getElementById('minValue').value;
  let maxValue = document.getElementById('maxValue').value;

  if(minValue === '') minValue = 0
  if(maxValue === '') maxValue = 10

  if(maxValue > minValue) {
    counters[counters.length] = {
      value: minValue,
      minValue: minValue,
      maxValue: maxValue,
    };
    document.getElementById('error').innerHTML = ''
  } else document.getElementById('error').innerHTML = 'min value <= max value'

  showCounters();
  console.log(counters)
}

document.getElementById('add_counter').addEventListener('click', addCounter);
showCounters();

addCounter()
