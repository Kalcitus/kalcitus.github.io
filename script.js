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
		altText: "EarElephant Band Logo (combines ear and elephant imagery).",
		description: "Black ink on mixed media paper then edited in photoshop for flat colors."
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
		description: "Brush pen on hot pressed Bristol."
		},
	5:
		{
		name: "handmade/Inktober023.png",
		altText: "Hugh Jackman as Logan (Wolverine), pen and ink drawing.",
		description: "Technical pen, and brush pen on hot pressed Bristol."
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
		},
	12:
		{
		name: "handmade/Cephalopod_Design.png",
		altText: "Design drawings of a submersible spaceship.",
		description: "Technical pen and marker on cold pressed Bristol."
		}
};

const photography = {
	0:
	{
		name: "photography/Animal_farm(sm).jpg",
		altText: "Photo of a farm animal staring at photographer from behind fence."
	},
	1:
	{
		name: "photography/Bee_Butt(sm).jpg",
		altText: "Photo of white flowers with a big hanging out of one as it collects pollen."
	},
	2:
	{
		name: "photography/Best_Mountains(sm).jpg",
		altText: "A photo of plains with mountains in the distance and an overcast sky."
	},
	3:
	{
		name: "photography/Black_Bird(sm).jpg",
		altText: "A side-view of a male red-winged black bird perched on cattail."
	},
	4:
	{
		name: "photography/Blackbird_Singing(sm).jpg",
		altText: "The back of a male red-winged black bird perched on cattail."
	},
	5:
	{
		name: "photography/Cloud_over_mountain(sm).jpg",
		altText: "A distant mountain with trees in the foreground, and a distinctly shaped cloud above."
	},
	6:
	{
		name: "photography/Cloudscape(sm).jpg",
		altText: "A photo of clouds in the sky on a sunny day."
	},
	7:
	{
		name: "photography/Cloudy_Day(sm).jpg",
		altText: "Mountains with a city in the foreground, darkened by heavy clouds."
	},
	8:
	{
		name: "photography/Crop_Duster(sm).jpg",
		altText: "A crop duster flying through the sky as it lines up another pass."
	},
	9:
	{
		name: "photography/Curious(sm).jpg",
		altText: "A scrub jay sits atop a fence, surveying the ground for food."
	},
	10:
	{
		name: "photography/Curvy_road(sm).jpg",
		altText: "A winding road passing by a dilapidated farm."
	},
	11:
	{
		name: "photography/Desert_Landscape(sm).jpg",
		altText: "A desert landscape with a bridge in the distance and cactus in the foreground."
	},
	12:
	{
		name: "photography/Distant_peak(sm).jpg",
		altText: "A distant mountain peak rising above the tops of tall trees."
	},
	13:
	{
		name: "photography/Dusting_Crops(sm).jpg",
		altText: "Cows grazing as a crop duster dusts nearby fields."
	},
	14:
	{
		name: "photography/Farmscape(sm).jpg",
		altText: "Hills against a cloudy sky, with a farm and horses in the foreground."
	},
	15:
	{
		name: "photography/Female_Blackbird_back(sm).jpg",
		altText: "A female blackbird, from the back."
	},
	16:
	{
		name: "photography/Female_Blackbird_front(sm).jpg",
		altText: "A female blackbird, from the front."
	},
	17:
	{
		name: "photography/House_on_the_hill(sm).jpg",
		altText: "A farmhouse atop a hill with a very overcast sky."
	},
	18:
	{
		name: "photography/Hovering_Bee(sm).jpg",
		altText: "A bee hovering as it collects pollen from white flowers."
	},
	19:
	{
		name: "photography/Into_the_forest(sm).jpg",
		altText: "Trees and road as it enters MODOC national forest, on a sunny spring day."
	},
	20:
	{
		name: "photography/Lakeside(sm).jpg",
		altText: "From up high, a distant lake side, with hills surrounding it."
	},
	21:
	{
		name: "photography/Lakeside2(sm).jpg",
		altText: "At water level, lakeside with tress and the foot of a mountain."
	},
	22:
	{
		name: "photography/Little_Bee(sm).jpg",
		altText: "Up close photo of a bee collecting pollen."
	},
	23:
	{
		name: "photography/Morning_Flower(sm).jpg",
		altText: "Flowers in a bush on a sunny day."
	},
	24:
	{
		name: "photography/Mountains_and_animals(sm).jpg",
		altText: "Mountains and clouds in the distant, with donkeys and a horse in the foreground 1."
	},
	25:
	{
		name: "photography/Mountains_and_animals2(sm).jpg",
		altText: "Mountains and clouds in the distant, with donkeys and a horse in the foreground 2."
	},
	26:
	{
		name: "photography/Near_the_forest(sm).jpg",
		altText: "Sunny day on the road into a forest."
	},
	27:
	{
		name: "photography/Old_Barn(sm).jpg",
		altText: "Farm with a red tractor sitting out among green fields."
	},
	28:
	{
		name: "photography/Old_Bus(sm).jpg",
		altText: "An old school bus and cement mixing truck sit abandoned in a field."
	},
	29:
	{
		name: "photography/Old_Red(sm).jpg",
		altText: "An old red fire truck sits on display outside."
	},
	30:
	{
		name: "photography/Old_shack(sm).jpg",
		altText: "An old barn sits infront of trees, with a forest in the distance."
	},
	31:
	{
		name: "photography/On_the_road(sm).jpg",
		altText: "A windy road curving through rolling hills."
	},
	32:
	{
		name: "photography/Out_for_a_stroll(sm).jpg",
		altText: "A crow strolls through low grass."
	},
	33:
	{
		name: "photography/Resting_tractor(sm).jpg",
		altText: "A farm with a red tractor, and mountains in the distance."
	},
	34:
	{
		name: "photography/Road_trip(sm).jpg",
		altText: "A road disappears into a mirage in the distance in a sunny forest."
	},
	35:
	{
		name: "photography/Rolling_Hills(sm).jpg",
		altText: "Cloudy and hilly landscape."
	},
	36:
	{
		name: "photography/Snowy_Peak(sm).jpg",
		altText: "A distant snow covered mountain peak in the spring."
	},
	37:
	{
		name: "photography/The_Collector(sm).jpg",
		altText: "A close view of a bee collecting pollen from white flowers."
	},
	38:
	{
		name: "photography/The_Tree(sm).jpg",
		altText: "An old, gnarly, tree sits at the edge of a farm."
	},
	39:
	{
		name: "photography/Wednesday_mydudes(sm).jpg",
		altText: "An amphibian floating in a pond 1."
	},
	40:
	{
		name: "photography/Wednesday_again_mydudes(sm).jpg",
		altText: "An amphibian floating in a pond 2."
	}
};

/* Set initial/default state to Line and Rendered Art */
let state = handDrawnContent;

console.log("object loaded");
console.log(state[0].altText);

/* for loop and function to create/add images */
function loadImage(artWork, i) {
	console.log("function run " + i);
	let img = document.createElement("img");
	img.id = "newImage " + i;
	img.src = artWork; /* artwork URL */
	img.alt = state[i].altText;
	console.log(state[i].altText);
	document.getElementById("contentDiv").appendChild(img);
}
for (let i = 0; i < Object.keys(state).length; i++) {
	console.log("for loop " + i);
	loadImage(state[i].name, i);
}

console.log("end of image loading code");

/* Line and Rendered Art Button -- remove current images and replace using function */
lnraButton.onclick = () => {
	let oldButton = document.querySelectorAll("button");
	console.log(oldButton);
	oldButton.forEach(button => {
	button.classList.remove("active");
	})
	state = handDrawnContent;
	lnraButton.classList.add("active");
	const remImg = document.getElementById("contentDiv");
	while (remImg.lastElementChild) {
		remImg.removeChild(remImg.lastElementChild);
	}
	for (let i = 0; i < Object.keys(state).length; i++) {
		console.log("for loop " + i);
		loadImage(state[i].name, i);
	}
	const element = document.getElementById("lightbox");
	element.parentNode.removeChild(element);
	initLightbox();
}

/* Photography Button -- remove current images and replace using function */
photoButton.onclick = () => {
	let oldButton = document.querySelectorAll("button");
	console.log(oldButton);
	oldButton.forEach(button => {
		button.classList.remove("active");
	})
	state = photography;
	photoButton.classList.add("active");
	const remImg = document.getElementById("contentDiv");
	while (remImg.lastElementChild) {
		remImg.removeChild(remImg.lastElementChild);
	}
	for (let i = 0; i < Object.keys(state).length; i++) {
		console.log("for loop " + i);
		loadImage(state[i].name, i);
	}
	const element = document.getElementById("lightbox");
	element.parentNode.removeChild(element);
	initLightbox();
}

/*lightbox operation*/
initLightbox();
function initLightbox() {
	const lightbox = document.createElement("div");
	lightbox.id = "lightbox";
	document.body.appendChild(lightbox);

	const images = document.querySelectorAll("img");
	images.forEach(image => {
		image.addEventListener("click", e => {
			lightbox.classList.add("active");
			const img = document.createElement("img");
			img.src = image.src;
			img.id = image.id;
			if (state === handDrawnContent) {
				// get number from img ID to reference object parameter description
				let imgNum = image.id.match(/\d+/g);
				console.log(image.id.match(/\d+/g));
				imgNum = parseInt(imgNum);
				console.log(imgNum);
				const p = document.createElement("p");
				p.id = "p " + imgNum;
				p.textContent = state[imgNum].description;
				while (lightbox.firstChild) {
					lightbox.removeChild(lightbox.firstChild);
				}
				lightbox.appendChild(img);
				lightbox.appendChild(p);
				console.log(p.textContent);
			} else {
				while (lightbox.firstChild) {
					lightbox.removeChild(lightbox.firstChild);
				}
				lightbox.appendChild(img);
            }
		})
	})

	lightbox.addEventListener("click", e => {
		if (e.target !== e.currentTarget) return;
		lightbox.classList.remove("active");
	})
}