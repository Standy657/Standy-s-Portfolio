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
	win.addEventListener("mousedown", function(){
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
	
	function onTitleTouchStart(event){
		const touch = event.touches[0];
		const rect = win.getBoundingClientRect();
		offsetX = touch.clientX - rect.left;
		offsetY = touch.clientY - rect.top;
		dragging = true;
	}
	
	function onBodyMouseMove(event){
		if (dragging){
			win.style.left = event.clientX - offsetX + "px";
			win.style.top = event.clientY - offsetY + "px";
		}
	}
	
	function onBodyTouchMove(event){
		if (dragging){
			const touch = event.touches[0];
			win.style.left = touch.clientX - offsetX + "px";
			win.style.top = touch.clientY - offsetY + "px";
		}
	}
	
	function onBodyMouseUp(){
		dragging = false;
	}
	
	function onBodyTouchEnd(){
		dragging = false;
	}
	
	title.addEventListener("mousedown", onTitleMouseDown);
	title.addEventListener("touchstart", onTitleTouchStart);
	document.body.addEventListener("mousemove", onBodyMouseMove);
	document.body.addEventListener("touchmove", onBodyTouchMove);
	document.body.addEventListener("mouseup", onBodyMouseUp);
	document.body.addEventListener("touchend", onBodyTouchEnd);
	
	win.querySelector(".close").addEventListener("click", function(){
		document.body.removeEventListener("mousemove", onBodyMouseMove);
		document.body.removeEventListener("touchmove", onBodyTouchMove);
		document.body.removeEventListener("mouseup", onBodyMouseUp);
		document.body.removeEventListener("touchend", onBodyTouchEnd);
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
					<p>Adobe Photoshop, Adobe Illustrator, Blender, ibisPaint X, a pencil, and Geany</p>
				</div>
				<div id="middle">
					<h1>Dev.</h1>
					<p>Python, HTML, and CSS</p>
				</div>
				<div id="right">
					<h1>Projects!</h1>
					<p>It Started With a Crash (book), <a href="#" onclick="openWiki(); return false">HTML wiki for ISWaC</a>, and this website :3c</p>
				</div>
			</div>
			<h1>Drawings (paper and digital)</h1>
			<div class="gallery">
				<div class="art">
					<img src="img/IMG_8499.webp" class="winImg" alt="digital drawing of a lake at night"></img>
					Drawing of a lake at night I did in ibisPaint X
				</div>
				<div class="art">
					<img src="img/IMG_5205.webp" class="winImg" alt="a robot with a CRT as a head points behind her with a smile on her face"></img>
					Get a load of this guy! - Cordney
				</div>
				<div class="art">
					<img src="img/IMG_5197.webp" class="winImg" alt="flower with an eyeball"></img>
					Organ flower
				</div>
				<div class="art">
					<img src="img/IMG_5122.webp" class="winImg" alt="a robot with a CRT as a head sits on the ground with a keyboard, mouse, and a few floppy disks"></img>
					Cordney, again.
				</div>
				<div class="art">
					<img src="img/IMG_5120.webp" class="winImg" alt="an apartment with a door in front and a room to the right"></img>
					Enterance to Ashra's apartment, her room is behind the closed door and the kitchen to the right.
				</div>
				<div class="art">
					<img src="img/IMG_5336.webp" class="winImg" alt="a backrooms drawing with a chair"></img>
					The Backrooms doodle I did while summer-schooling to pass 10th grade
				</div>
				<div class="art">
					<img src="img/IMG_5363.webp" class="winImg" alt="a robot with a CRT as a head no-clips into the backrooms with tape as a border to the no-clip area, as if she found Captain Clark's furniture store and went into the basement"></img>
					Cordney no-clipping into the Backrooms
				</div>
				<div class="art">
					<img src="img/IMG_5966.webp" class="winImg" alt="flower with an eyeball digitally drawn"></img>
					Organ flower again, but more detailed! The latest update to this image was 8/30/24
				</div>
				<div class="art">
					<img src="img/IMG_4240.webp" class="winImg" alt="Pomni drawing"></img>
					This was the first time I drew Pomni, all the way back to 10/16/23, soon after the pilot came out.
				</div>
				<div class="art">
					<img src="img/IMG_5988.webp" class="winImg" alt="Pomni drawing, she sits down with her arms inside her legs, eyes of panic"></img>
					And this is the third time I drew Pomni, around 7/13/26
				</div>
			</div>
			<h1>3D renders</h1>
			<div class="gallery">
				<div class="art">
					<img src="img/untitled5.webp" class="winImg" alt="stop sign clipping through a pillar in the backrooms render"></img>
					Misremembered stop sign clipping through a pillar in the backrooms
				</div>
				<div class="art">
					<img src="img/untitled4.webp" class="winImg" alt="large backrooms area render"></img>
					Large room with a higher floor, backrooms
				</div>
				<div class="art">
					<img src="img/untitled6.webp" class="winImg" alt="backrooms render with a VHS filter"></img>
					My favorite backrooms render with a VHS look to it
				</div>
				<div class="art">
					<img src="img/untitled3.webp" class="winImg" alt="dark room backrooms render"></img>
					inside a dark room, made slightly more yellow tone, backrooms
				</div>
				<div class="art">
					<img src="img/untitled1.webp" class="winImg" alt="bright room close up on dark room, backrooms render"></img>
					close up on the dark room, backrooms
				</div>
				<div class="art">
					<img src="img/untitled.webp" class="winImg" alt="generic backrooms"></img>
					Generic backrooms
				</div>
				<div class="art">
					<img src="img/blenderhead.webp" class="winImg" alt="a CRT monitor with a bow"></img>
					Cordney's Head
				</div>
			</div>
			<h1>Photoshop</h1>
			<div class="gallery">
				<div class="art">
					<img src="img/eyebw.webp" class="winImg" alt="greyscale eye"></img>
					Before
				</div>
				<div class="art">
					<img src="img/eyecolor.webp" class="winImg" alt="colorful eye with makeup"></img>
					After, finished May 4th, 2026, I did this for Graphic Design VoTech.
				</div>
			</div>
			<h1>Illustrator</h1>
			<div class="gallery">
				<div class="art">
					<img src="img/logo.webp" class="winImg" alt="flower logo with an eye in the center with ETHAN MCDONALD around the eye, signifying who's logo it is"></img>
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
				<a href="https://www.youtube.com/@standy657" target="_blank" rel="noopener noreferrer"><img src="img/YouTube.png" width="100"></a>
				<a href="https://www.reddit.com/user/No-Enthusiasm3363/" target="_blank" rel="noopener noreferrer"><img src="img/Reddit.png" width="100"></a>
				<a href="https://x.com/Ethan1816792012" target="_blank" rel="noopener noreferrer"><img src="img/Twitter.png" width="100" class="twitter"></a>
				<a href="https://www.tiktok.com/@standard_mammoth_397" target="_blank" rel="noopener noreferrer"><img src="img/tiktok.png" width="100"></a>
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
				<a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=standy8675@gmail.com" target="_blank" rel="noopener noreferrer"><img src="img/Gmail.png" height="50"></a>
				<a href="https://discord.com/users/1076623487021621380" target="_blank" rel="noopener noreferrer"><img src="img/Discord.png" height="50"></a>
			</div>
		</div>
	`, "320px", "360px");
}

function openWiki(){
	createWindow("Wiki", `
		<iframe src="ISWaC/html/index.html" height="500" title="ISWaC Wiki"></iframe>

	`, "600px", "500px");
}
