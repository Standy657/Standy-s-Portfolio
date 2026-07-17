function openInfo(){
	const variable = document.createElement("div");
	variable.className = "window moveWin";
	variable.style.width = "300px";
	variable.style.height = "400px";
	document.body.appendChild(variable);
	variable.innerHTML = `
		<div class="title">
			<span class="text">Info</span>
			<button onclick="closeButton()" class="close"><b>X</b></button>
		</div>
		<div>
			<p>Heya! I'm just gonna dump everything in one paragraph tag so I can sort it out later :3</p>
			<p>I draw on paper, draw on a device, design, code, 3D model, and other things. I'm autistic, so that means I have my hyperfixations: old technology, Geometry Dash, music, Toki Pona, and more!</p>
		</div>
	`;

	const closeButton = variable.querySelector(".close");

		closeButton.addEventListener("click", function() {
			variable.remove();
		});

	const title = variable.querySelector(".title");

	let dragging = false;
	let offsetX;
	let offsetY;

	title.addEventListener("mousedown", function(event) {
		event.preventDefault();
	
		const rect = variable.getBoundingClientRect();

		offsetX = event.clientX - rect.left;
		offsetY = event.clientY - rect.top;

		dragging = true;
	});

	document.body.addEventListener("mousemove", function(event) {
		if (dragging) {
			variable.style.left = event.clientX - offsetX + "px";
			variable.style.top = event.clientY - offsetY + "px";
		}
	});
	
	document.body.addEventListener("mouseup", function(event) {
			dragging = false;
	});
}
function openWork(){
	const variable = document.createElement("div");
	variable.className = "window moveWin";
	variable.style.width = "600px";
	variable.style.height = "400px";
	document.body.appendChild(variable);
	variable.innerHTML = `
		<div class="title">
			<span class="text">Work</span>
			<button onclick="closeButton()" class="close"><b>X</b></button>
		</div>
		<div class="content">
			<div class="topRow">
				<div id="left">
					<h1>Tools</h1>
					<p>Adobe Photoshop, Adobe Illustrator, Blender, ibisPaint X, and a pencil</p>
				</div>
				<div id="middle">
					<h1>Dev.</h1>
					<p>Python, HTML, and CSS</p>
				</div>
				<div id="right">
					<h1>Projects!</h1>
					<p>It Started With a Crash (book), HTML wiki for ISWaC, and this website :3c</p>
				</div>
			</div>
			<h1>Drawings (paper and digital)</h1>
			<div class="gallery">
				<div class="art">
					<img src="img/IMG_8499.png"m class="winImg"></img>
					Drawing of a lake at night I did in ibisPaint X
				</div>
				<div class="art">
					<img src="img/IMG_5205.jpeg"m class="winImg"></img>
					Get a load of this guy!
				</div>
			</div>
			<h1>3D renders</h1>
			<div class="gallery">
				<div class="art">
					<img src="img/untitled6.png"m class="winImg"></img>
					Backrooms render for fun
				</div>
				<div class="art">
					<img src="img/untitled5.png"m class="winImg"></img>
					Backrooms render for fun
				</div>
				<div class="art">
					<img src="img/untitled4.png"m class="winImg"></img>
					Backrooms render for fun
				</div>
			</div>
			<h1>Photoshop</h1>
			<div class="gallery">
				<div class="art">
					<img src="img/eyebw.bmp"m class="winImg"></img>
					Before
				</div>
				<div class="art">
					<img src="img/eyecolor.bmp"m class="winImg"></img>
					After, finished May 4th, 2026, I did this for Graphic Design VoTech.
				</div>
			</div>
			<h1>Illustrator</h1>
			<div class="gallery">
				<div class="art">
					<img src="img/logo.png"m class="winImg"></img>
					My logo :3
				</div>
			</div>
			</div>
		</div>
	`;

	const closeButton = variable.querySelector(".close");

		closeButton.addEventListener("click", function() {
			variable.remove();
		});

	const title = variable.querySelector(".title");

	let dragging = false;
	let offsetX;
	let offsetY;

	title.addEventListener("mousedown", function(event) {
		event.preventDefault();
	
		const rect = variable.getBoundingClientRect();

		offsetX = event.clientX - rect.left;
		offsetY = event.clientY - rect.top;

		dragging = true;
	});

	document.body.addEventListener("mousemove", function(event) {
		if (dragging) {
			variable.style.left = event.clientX - offsetX + "px";
			variable.style.top = event.clientY - offsetY + "px";
		}
	});
	
	document.body.addEventListener("mouseup", function(event) {
			dragging = false;
	});
}
function openLinks(){
	const variable = document.createElement("div");
	variable.className = "window moveWin";
	variable.style.width = "250px";
	variable.style.height = "200px";
	document.body.appendChild(variable);
	variable.innerHTML = `
		<div class="title">
			<span class="text">Links</span>
			<button onclick="closeButton()" class="close"><b>X</b></button>
		</div>
		<div>
		<a href="https://www.youtube.com/@standy657" target="_blank">Youtube</a>
		</div>
	`;

	const closeButton = variable.querySelector(".close");

		closeButton.addEventListener("click", function() {
			variable.remove();
		});

	const title = variable.querySelector(".title");

	let dragging = false;
	let offsetX;
	let offsetY;

	title.addEventListener("mousedown", function(event) {
		event.preventDefault();
	
		const rect = variable.getBoundingClientRect();

		offsetX = event.clientX - rect.left;
		offsetY = event.clientY - rect.top;

		dragging = true;
	});

	document.body.addEventListener("mousemove", function(event) {
		if (dragging) {
			variable.style.left = event.clientX - offsetX + "px";
			variable.style.top = event.clientY - offsetY + "px";
		}
	});
	
	document.body.addEventListener("mouseup", function(event) {
			dragging = false;
	});
}
function openFaq(){
	const variable = document.createElement("div");
	variable.className = "window moveWin";
	variable.style.width = "600px";
	variable.style.height = "400px";
	document.body.appendChild(variable);
	variable.innerHTML = `
		<div class="title">
			<span class="text">Frequently Asked Questions!</span>
			<button onclick="closeButton()" class="close"><b>X</b></button>
		</div>
		<div>
		<p>None :(</p>
		</div>
	`;

	const closeButton = variable.querySelector(".close");

		closeButton.addEventListener("click", function() {
			variable.remove();
		});

	const title = variable.querySelector(".title");

	let dragging = false;
	let offsetX;
	let offsetY;

	title.addEventListener("mousedown", function(event) {
		event.preventDefault();
	
		const rect = variable.getBoundingClientRect();

		offsetX = event.clientX - rect.left;
		offsetY = event.clientY - rect.top;

		dragging = true;
	});

	document.body.addEventListener("mousemove", function(event) {
		if (dragging) {
			variable.style.left = event.clientX - offsetX + "px";
			variable.style.top = event.clientY - offsetY + "px";
		}
	});
	
	document.body.addEventListener("mouseup", function(event) {
			dragging = false;
	});
}
function openMail(){
	const variable = document.createElement("div");
	variable.className = "window moveWin";
	variable.style.width = "400px";
	variable.style.height = "300px";
	document.body.appendChild(variable);
	variable.innerHTML = `
		<div class="title">
			<span class="text">Mail</span>
			<button onclick="closeButton()" class="close"><b>X</b></button>
		</div>
		<div>
		<h1>Contact me!</h1>
		<p>Contact me for commissions, partnerships, or aksing me for perms.</p>
		<a href="mailto:standy8675@gmail.com">Moi email :3</a>
		<p>Discord: jeeper1creeper</p>
		<p>Reddit: u/No-Enthusiasm3363</p>
		</div>
	`;

	const closeButton = variable.querySelector(".close");

		closeButton.addEventListener("click", function() {
			variable.remove();
		});

	const title = variable.querySelector(".title");

	let dragging = false;
	let offsetX;
	let offsetY;

	title.addEventListener("mousedown", function(event) {
		event.preventDefault();
	
		const rect = variable.getBoundingClientRect();

		offsetX = event.clientX - rect.left;
		offsetY = event.clientY - rect.top;

		dragging = true;
	});

	document.body.addEventListener("mousemove", function(event) {
		if (dragging) {
			variable.style.left = event.clientX - offsetX + "px";
			variable.style.top = event.clientY - offsetY + "px";
		}
	});
	
	document.body.addEventListener("mouseup", function(event) {
			dragging = false;
	});
}
