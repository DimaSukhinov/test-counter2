let counters = [];

const increment = (id) => () => {
  if (counters[id].value < counters[id].maxValue) {
    counters[id].value++;
  }
  showCounters();
}

const decrement = (id) => () => {
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
    incrElements[x].addEventListener('click', increment(x));
  }

  let decrElements = document.getElementsByClassName('decrement')
  for (let x = 0; x < decrElements.length; x++) {
    decrElements[x].addEventListener('click', decrement(x));
  }
}

const addCounter = () => {
  let minValue = document.getElementById('minValue').value;
  let maxValue = document.getElementById('maxValue').value;

  if (minValue === '') minValue = 0
  if (maxValue === '') maxValue = 10

  if (maxValue > minValue) {
    counters[counters.length] = {
      value: minValue,
      minValue: minValue,
      maxValue: maxValue,
    };
    document.getElementById('error').innerHTML = ''
  } else document.getElementById('error').innerHTML = 'min value <= max value'

  showCounters();
}

document.getElementById('add_counter').addEventListener('click', addCounter);
showCounters();


const testCounter = () => {
  addCounter()
  console.log(counters[0].value) // 0
  increment(0)()
  console.log(counters[0].value) // 1
}
// testCounter()
