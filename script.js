const search = document.querySelector('.search');
const ulList = document.querySelectorAll('li');

const searchEngine = e => {
	const text = e.target.value.toLowerCase().trim()

	ulList.forEach(el => {
		if (el.textContent.toLowerCase().indexOf(text) !== -1) {
			el.style.display = 'block'
		} else {
			el.style.display = 'none'
		}
	})
}

search.addEventListener('keyup', searchEngine)
