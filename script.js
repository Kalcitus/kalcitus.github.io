/* work in progress
dynamic content operation
let state = 'handmade'

const newImage = document.createElement('img')
need to add url fetching for the img element
const contentDiv = document.getElementsByClassName('displayedContent')
newImage.id = 'newImage'
document.contentDiv.appendChild('newImage')*/


/*lightbox operation*/
const lightbox = document.createElement('div')
lightbox.id = 'lightbox'
document.body.appendChild(lightbox)

const images = document.querySelectorAll('img')
images.forEach(image => {
	image.addEventListener('click', e => {
		lightbox.classList.add('active')
		const img = document.createElement('img')
		img.src = image.src
		while (lightbox.firstChild) {
			lightbox.removeChild(lightbox.firstChild)
		}
		lightbox.appendChild(img)
	})
})

lightbox.addEventListener('click', e => {
	if (e.target !== e.currentTarget) return
	lightbox.classList.remove('active')
})