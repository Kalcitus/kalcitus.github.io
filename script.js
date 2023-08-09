/* work in progress */
/*dynamic content setup*/

const handDrawnContent = {
	"handmade/Bright_Idea.png":
		{
		altText: "Drawing of a lit candle, melting, as it sits atop a skull.",
		description: "Ink and watercolor on mixed media paper."
		},
	"handmade/Denouement_at_Idrakpur(sm).jpg":
		{
		altText: "Painting of the stormy clash of the last two highlanders",
		description: "Acrylic paint on canvas."
		},
	"handmade/EarElephant_Band_Logo_(wbg).png":
		{
		altText: "EarElephant Band Logo (combines ear and elephant imagry).",
		description: "Black ink on mixed media paper."
		},
	"handmade/Halo1_design.png":
		{
		altText: "Concept drawing of powered armor.",
		description: "Digital art created using Photoshop."
		},
	"handmade/Inktober011.png":
		{
		altText: "A tree on the meadow edge ink drawing.",
		description: "Brush pen on mixed media paper."
		},
	"handmade/Inktober023.png":
		{
		altText: "Hugh Jackman as Logan (Wolverine), pen and ink drawing.",
		description: "Technical pen, and brush pen on mixed media paper."
		},
	"handmade/Kaoru-2004.jpg":
		{
		altText: "Drawing of Kaoru (guitarist of Dir En Grey) playing guitar.",
		description: "Colored pencil on hot press Bristol."
		},
	"handmade/Mountain_Dragon.png":
		{
		altText: "Drawing of a dragon atop a mountain peak.",
		description: "Technical and brush pen on mixed media paper."
		},
	"handmade/Old_MH1_Comic.jpg":
		{
		altText: "A Monster Hunter (original) drawn in comic book format.",
		description: "Pen and ink drawn on mixed media paper."
		},
	"handmade/Philanthropy(book_cover).png":
		{
		altText: "A mass of ghostly figures stand in a mass, staring at the viewer.",
		description: "Ink and brush work on cold pressed Bristol."
		},
	"handmade/The_Flower.png":
		{
		altText: "Drawing of a multicolored rose.",
		description: "Colored pencil and watercolor pencil on mixed media paper."
		},
	"handmade/The_Old_Wall(book_cover_sm).png":
		{
		altText: "Painting of skeletons climbing over a wall as their flesh reforms.",
		description: "Mixed media on cold pressed Bristol."
		}
};
console.log("object loaded");

/* for loop and function to create/add images */
function loadImage(artWork, i) {
	console.log("function run " + i);
	let img = document.createElement('img');
	img.id = 'newImage ' + i;
	img.src = artWork; /* artwork URL */
	img.alt = handDrawnContent[artWork].altText;
	document.getElementById('contentDiv').appendChild(img);
}

for (let i = 0; i < Object.keys(handDrawnContent).length; i++) {
	console.log("for loop " + i);
	loadImage(Object.keys(handDrawnContent)[i], i);
}
console.log("end of image loading code");

/*lightbox operation*/
const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);

const images = document.querySelectorAll('img');
images.forEach(image => {
	image.addEventListener('click', e => {
		lightbox.classList.add('active');
		const img = document.createElement('img');
		img.src = image.src;
		while (lightbox.firstChild) {
			lightbox.removeChild(lightbox.firstChild);
		}
		lightbox.appendChild(img);
		console.log(img.src);
	})
})

lightbox.addEventListener('click', e => {
	if (e.target !== e.currentTarget) return;
	lightbox.classList.remove('active');
})