const articles = [
	{
		title: "Ashra",
		file: "../html/char/ashra.html"
	},
	{
		title: "Ethan",
		file: "../html/char/ethan.html"
	},
	{
		title: "Anya",
		file: "../html/char/anya.html"
	},
	{
		title: "Tupon",
		file: "../html/places/tupon.html"
	},
	{
		title: "Akaria",
		file: "../html/places/akaria.html"
	},
	{
		title: "Yakinia",
		file: "../html/places/yakinia.html"
	},
	{
		title: "Dematsi",
		file: "../html/species/dematsi.html"
	},
	{
		title: "Kelwata Ledgi",
		file: "../html/species/kelwata.html"
	},
	{
		title: "Tydgo",
		file: "../html/species/tydgo.html"
	},
	{
		title: "Akarian Constitution",
		file: "../html/govt/akconst.html"
	},
	{
		title: "Standy",
		file: "../html/author.html"
	},
	{
		title: "Akari",
		file: "../html/lang/akari.html"
	},
	{
		title: "Yakini",
		file: "../html/lang/yakini.html"
	},
	{
		title: "Kaij",
		file: "../html/religion/kaij.html"
	},
	{
		title: "Kora",
		file: "../html/currency/kora.html"
	},
	{
		title: "Akarian",
		file: "../html/nat/akarian.html"
	},
	{
		title: "Yakinian",
		file: "../html/nat/yakinian.html"
	},
	{
		title: "Yakinian Government",
		file: "../html/govt/ykgovt.html"
	},
	{
		title: "Akarian Government",
		file: "../html/govt/akgovt.html"
	},
	{
		title: "Misc",
		file: "../html/misc.html"
	},
	{
		title: "History Book",
		file: "../html/history/akhist.html"
	},
	{
		title: "Development",
		file: "../html/dev.html"
	},
	{
		title: "Tech",
		file: "../html/tech/tech.html"
	},
	{
		title: "Escape Pod",
		file: "../html/places/pod.html"
	},
	{
		title: "?",
		file: "../html/?.html"
	}
];

document.getElementById("searchButton").onclick = function(){
	let search = 
		document.getElementById("searchBox").value.toLowerCase();
		document.getElementById("searchBox").value = "";

	for (let i = 0; i < articles.length; i++) {

		if (articles[i].title.toLowerCase() == search) {

			window.location.href = articles[i].file;
			return;
		}
	}

	alert("Sorry! No such article exists.");

};