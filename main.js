const input = document.getElementById('cpf')

input.addEventListener('keypress', () => {
	let inputlength = input.value.length
	const keyCode = event.which

	if (keyCode < 48 || keyCode > 57) {
		event.preventDefault()
	  }

	if (inputlength === 3 || inputlength === 7) {
		input.value += '.'
	} else if (inputlength === 11) {
		input.value += '-'
	}
})