let highestZ = 1;

function createWindow(titleText, contentHTML, width, height){
	const win = document.createElement("div");
	win.className = "window moveWin";
	win.style.width = width;
	win.style.height = height;
	
	win.innerHTML = `
		<div class="title">
			<span class="text">${titleText}</span>
			<button class="close"><b>X</b></button>
		</div>
		${contentHTML}
	`;
	
	document.body.appendChild(win);
	
	win.style.zIndex = highestZ++;
	win.addEventListener("mousedown", function (){
		this.style.zIndex = highestZ++;
	});
	
	const title = win.querySelector(".title");
	let dragging = false;
	let offsetX;
	let offsetY;
	
	function onTitleMouseDown(event){
		event.preventDefault();
		const rect = win.getBoundingClientRect();
		offsetX = event.clientX - rect.left;
		offsetY = event.clientY - rect.top;
		dragging = true;
	}
	
	function onBodyMouseMove(event){
		if (dragging) {
			win.style.left = event.clientX - offsetX + "px";
			win.style.top = event.clientY - offsetY + "px";
		}
	}
	
	function onBodyMouseUp(){
			dragging = false;
	}
	
	title.addEventListener("mousedown", onTitleMouseDown);
	document.body.addEventListener("mousemove", onBodyMouseMove);
	document.body.addEventListener("mouseup", onBodyMouseUp);
	
	win.querySelector(".close").addEventListener("click", function(){
		document.body.removeEventListener("mousemove", onBodyMouseMove);
		document.body.removeEventListener("mouseup", onBodyMouseUp);
		win.remove();
	});
}

function openInfo(){
	createWindow("Info", `
		<div style="border-bottom: 3px solid;">
			<h1>Ethan McDonald</h1>
			<p style="text-align: center; margin: 0;">Entry-level Graphic Designer</p>
			<br>
		</div>
		<div class="content">
			<p>Heya! I'm Standy, I do many things. I...</p>
			<ul>
				<li>draw characters on paper and digitally</li>
				<li>design logos/icons</li>
				<li>do frontend development</li>
				<li>3D model</li>
				<li>create Geometry Dash levels (someone got paid $1000 once)</li>
				<li>write books</li>
			</ul>

			<h1>Interests :D</h1>
			<ul>
				<li>Old technology</li>
				<li>actually playing Geometry Dash</li>
				<li>listening to music</li>
				<li>learning Toki Pona</li>
			</ul>
			
			<h1>Other</h1>
			<p>Oh, and commissions are free. I would say tips accepted, but I ain't 18 for Ko-fi. :C</p>
		</div>
	`, "360px", "480px");
}

function openWork(){
	createWindow("Work", `
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
					<img src="img/IMG_8499.webp" class="winImg"></img>
					Drawing of a lake at night I did in ibisPaint X
				</div>
				<div class="art">
					<img src="img/IMG_5205.webp" class="winImg"></img>
					Get a load of this guy! - Cordney
				</div>
				<div class="art">
					<img src="img/IMG_5197.webp" class="winImg"></img>
					Organ flower
				</div>
				<div class="art">
					<img src="img/IMG_5122.webp" class="winImg"></img>
					Cordney, again.
				</div>
				<div class="art">
					<img src="img/IMG_5120.webp" class="winImg"></img>
					Ashra's room
				</div>
				<div class="art">
					<img src="img/IMG_5336.webp" class="winImg"></img>
					The Backrooms doodle I did while summer-schooling to pass 10th grade
				</div>
				<div class="art">
					<img src="img/IMG_5363.webp" class="winImg"></img>
					Cordney no-clipping into the Backrooms
				</div>
				<div class="art">
					<img src="img/IMG_5966.webp" class="winImg"></img>
					Organ flower again, but more detailed! The latest update to this image was 8/30/24
				</div>
				<div class="art">
					<img src="img/IMG_4240.webp" class="winImg"></img>
					This was the first time I drew Pomni, all the way back to 10/16/23, soon after the pilot came out.
				</div>
				<div class="art">
					<img src="img/IMG_5988.webp" class="winImg"></img>
					And this is the third time I drew Pomni, around 7/13/26
				</div>
			</div>
			<h1>3D renders</h1>
			<div class="gallery">
				<div class="art">
					<img src="img/untitled5.webp" class="winImg"></img>
					Backrooms render for fun
				</div>
				<div class="art">
					<img src="img/untitled4.webp" class="winImg"></img>
					Backrooms render for fun
				</div>
				<div class="art">
					<img src="img/untitled6.webp" class="winImg"></img>
					Backrooms render for fun
				</div>
				<div class="art">
					<img src="img/untitled3.webp" class="winImg"></img>
					Backrooms render for fun
				</div>
				<div class="art">
					<img src="img/untitled1.webp" class="winImg"></img>
					Backrooms render for fun
				</div>
				<div class="art">
					<img src="img/untitled.webp" class="winImg"></img>
					Backrooms render for fun
				</div>
				<div class="art">
					<img src="img/blenderhead.webp" class="winImg"></img>
					Cordney's Head
				</div>
			</div>
			<h1>Photoshop</h1>
			<div class="gallery">
				<div class="art">
					<img src="img/eyebw.webp" class="winImg"></img>
					Before
				</div>
				<div class="art">
					<img src="img/eyecolor.webp" class="winImg"></img>
					After, finished May 4th, 2026, I did this for Graphic Design VoTech.
				</div>
			</div>
			<h1>Illustrator</h1>
			<div class="gallery">
				<div class="art">
					<img src="img/logo.webp" class="winImg"></img>
					My logo :3
				</div>
			</div>
			</div>
		</div>
	`, "600px", "500px");
}

function openLinks(){
	createWindow("Links", `
		<div>
			<div class="links">
				<a href="https://www.youtube.com/@standy657" target="_blank"><img src="img/YouTube.png" width="100"></a>
				<a href="https://www.reddit.com/user/No-Enthusiasm3363/" target="_blank"><img src="img/Reddit.png" width="100"></a>
				<a href="https://x.com/Ethan1816792012" target="_blank"><img src="img/Twitter.png" width="100" class="twitter"></a>
			</div>
		</div>
	`, "360px", "240px");
}

function openFaq(){
	createWindow("QnA time!", `
		<div>
		<p>Ask me questions via my contacts! If they're important questions that I just left out, then I'll put 'em here!</p>
		<hr>
		<p>Q: How many legitimate questions have you been asked?</p>
		<p>A: None :(</p>
		</div>
	`, "600px", "400px");
}

function openMail(){
	createWindow("Mail", `
		<div>
		<h1>Contact me!</h1>
		<p>Contact me for commissions, partnerships, or for permissions to use my art.</p>
		<div class="links">
			<a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=standy8675@gmail.com" target="_blank"><img src="img/Gmail.png" height="50"></a>
			<a href="https://discord.com/users/1076623487021621380" target="_blank"><img src="img/Discord.png" height="50"></a>
		</div>
		</div>
	`, "320px", "360px");
}
