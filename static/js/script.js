const form = document.getElementById('form')
const url = document.getElementById('url')
const alias = document.getElementById('alias')
const result = document.getElementById('result')
const submit = document.getElementById('submit')

form.onsubmit = e => {
	e.preventDefault()
	
	const data = {
		url: url.value,
		alias: alias.value
	}
	
	$.post('/', data, response => {
		if (response.error)
		return alert(response.error)
		
		// hide everything
		url.style.display = 'none'
		alias.style.display = 'none'
		submit.style.display = 'none'
		
		// display result
		result.innerHTML = document.location.href + alias.value
		result.style.display = 'block'
	})
}
