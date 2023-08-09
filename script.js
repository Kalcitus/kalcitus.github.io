/* work in progress */
/*dynamic content setup*/

const handDrawnContent = {
	0:
		{
		name: "handmade/Bright_Idea.png",
		altText: "Drawing of a lit candle, melting, as it sits atop a skull.",
		description: "Ink and watercolor on mixed media paper."
		},
	1:
		{
		name: "handmade/Denouement_at_Idrakpur(sm).jpg",
		altText: "A painting depicting the stormy clash of the last two highlanders",
		description: "Acrylic paint on canvas."
		},
	2:
		{
		name: "handmade/EarElephant_Band_Logo_(wbg).png",
		altText: "EarElephant Band Logo (combines ear and elephant imagry).",
		description: "Black ink on mixed media paper."
		},
	3:
		{
		name: "handmade/Halo1_design.png",
		altText: "Concept drawing of powered armor.",
		description: "Digital art created using Photoshop."
		},
	4:
		{
		name: "handmade/Inktober011.png",
		altText: "A tree on the meadow edge ink drawing.",
		description: "Brush pen on mixed media paper."
		},
	5:
		{
		name: "handmade/Inktober023.png",
		altText: "Hugh Jackman as Logan (Wolverine), pen and ink drawing.",
		description: "Technical pen, and brush pen on mixed media paper."
		},
	6:
		{
		name: "handmade/Kaoru-2004.jpg",
		altText: "Drawing of Kaoru (guitarist of Dir En Grey) playing guitar.",
		description: "Colored pencil on hot press Bristol."
		},
	7:
		{
		name: "handmade/Mountain_Dragon.png",
		altText: "Drawing of a dragon atop a mountain peak.",
		description: "Technical and brush pen on mixed media paper."
		},
	8:
		{
		name: "handmade/Old_MH1_Comic.jpg",
		altText: "A Monster Hunter (original) drawn in comic book format.",
		description: "Pen and ink drawn on mixed media paper."
		},
	9:
		{
		name: "handmade/Philanthropy(book_cover).png",
		altText: "A mass of ghostly figures stand in a mass, staring at the viewer.",
		description: "Ink and brush work on cold pressed Bristol."
		},
	10:
		{
		name: "handmade/The_Flower.png",
		altText: "Drawing of a multicolored rose.",
		description: "Colored pencil and watercolor pencil on mixed media paper."
		},
	11:
		{
		name: "handmade/The_Old_Wall(book_cover_sm).png",
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
	img.alt = handDrawnContent[i].altText;
	document.getElementById('contentDiv').appendChild(img);
}

for (let i = 0; i < Object.keys(handDrawnContent).length; i++) {
	console.log("for loop " + i);
	loadImage(handDrawnContent[i].name, i);
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
		img.id = image.id;
		let imgNum = image.id.match(/\d+/g);
		console.log(image.id.match(/\d+/g));
		// get number from img ID to reference object parameters
		imgNum = parseInt(imgNum);
		console.log(imgNum);
		const p = document.createElement('p');
		p.id = "p " + imgNum;
		p.textContent = handDrawnContent[imgNum].description;
		while (lightbox.firstChild) {
			lightbox.removeChild(lightbox.firstChild);
		}
		lightbox.appendChild(img);
		lightbox.appendChild(p);
		console.log(p.textContent);
	})
})

lightbox.addEventListener('click', e => {
	if (e.target !== e.currentTarget) return;
	lightbox.classList.remove('active');
})