const inputCpf = document.getElementById('cpf')
if (inputCpf) {
	inputCpf.addEventListener('keypress', () => {
		let inputlength = inputCpf.value.length
		const keyCode = event.which

		if (keyCode < 48 || keyCode > 57) {
			event.preventDefault()
		}

		if (inputlength === 3 || inputlength === 7) {
			inputCpf.value += '.'
		} else if (inputlength === 11) {
			inputCpf.value += '-'
		}
	});
}


const inputCel = document.getElementById('cel')
if (inputCel) {

	inputCel.addEventListener('input', () => {
		const inputValue = inputCel.value.replace(/\D/g, ''); // Remove caracteres não-numéricos
		const formattedValue = formatPhoneNumber(inputValue);
		inputCel.value = formattedValue;
	});

	function formatPhoneNumber(value) {
		const match = value.match(/^(\d{2})(\d{5})(\d{0,4})$/);
		if (match) {
			return `(${match[1]}) ${match[2]}${match[3] ? `-${match[3]}` : ''}`;
		}
		return value;
	}
}