const converter = document.querySelector('#converter')
const result = document.querySelector('.result')
const convBtn = document.querySelector('.conv')
const resetBtn = document.querySelector('.reset')
const changeBtn = document.querySelector('.change')
const one = document.querySelector('.one')
const two = document.querySelector('.two')

let fahrenheit
let celsius

const change = () => {
	if (one.textContent === '°C') {
		one.textContent = '°F'
		two.textContent = '°C'
		result.textContent = ''
	} else {
		one.textContent = '°C'
		two.textContent = '°F'
		result.textContent = ''
	}
}

const fahrToCelc = () => {
	fahrenheit = converter.value * 1.8 + 32
	result.textContent = `${converter.value}°C is ${fahrenheit.toFixed(1)}°F`
	converter.value = ''
}
const celcToFahr = () => {
	celsius = (converter.value - 32) / 1.8
	result.textContent = `${converter.value}°F is ${celsius.toFixed(1)}°C`
	converter.value = ''
}
const convertion = () => {
	if (converter.value !== '') {
		if (one.textContent === '°C') {
			fahrToCelc()
		} else {
			celcToFahr()
		}
	} else {
		result.textContent = 'Enter value'
	}
}
const reset = () => {
	result.textContent = ''
	converter.textContent = ''
}

changeBtn.addEventListener('click', change)

convBtn.addEventListener('click', convertion)

resetBtn.addEventListener('click', reset)
