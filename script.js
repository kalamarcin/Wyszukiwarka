const search = document.querySelector('.search')
const ulList = document.querySelectorAll('li')

const searchEngine = e => {
	const text = e.target.value.toLowerCase()

	ulList.forEach(el => {
		const task = el.textContent

		if (task.toLowerCase().indexOf(text) !== -1) {
			el.style.sidplay = 'block'
		} else {
			el.style.display = 'none'
		}
	})
}

search.addEventListener('keyup', searchEngine)
