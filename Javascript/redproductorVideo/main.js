var video 	= document.getElementById('video'),
	play 	= document.getElementById('btnPlay'),
	icono 	= document.getElementById('icono'),
	tiempo 	= document.getElementById('tiempo'),
	volumen = document.getElementById('volumen'),
	mute 	= document.getElementById('mute'),
	fullscreenbtn = document.getElementById('fullscreenbtn'),
	curtimetext = document.getElementById("curtimetext"),
	durtimetext = document.getElementById("durtimetext");

tiempo.setAttribute('max', video.duration);

// -- Play and Pause
play.addEventListener('click', function(){
	if (icono.className == 'fa fa-play') {
		video.play();
		var intervalo = setInterval(barraTiempo, 1);
	}else{
		video.pause();
	}
	icono.classList.toggle('fa-play');
	icono.classList.toggle('fa-pause');
});

// -- Change time video
tiempo.addEventListener('change', function(){
	video.currentTime = tiempo.value;
});

function barraTiempo(){
	tiempo.value = video.currentTime;
	if (video.ended) {
		icono.className = 'fa fa-play';
	}
}

// -- Volume video
volumen.addEventListener('change', function(){
	video.volume = volumen.value;
});


// -- mute video
mute.addEventListener('click', function(){
	if(video.muted){
		video.muted = false;
		mute.className = 'fa fa-volume-up ico-volumen';
	} else {
		video.muted = true;
		mute.className = 'fa fa-volume-off ico-volumen';
	}
});


// -- fullScreen
fullscreenbtn.addEventListener('click', function(){
	if(video.requestFullScreen){
		video.requestFullScreen();
	} else if(video.webkitRequestFullScreen){
		video.webkitRequestFullScreen();
	} else if(video.mozRequestFullScreen){
		video.mozRequestFullScreen();
	}
});

// -- Set current time
video.addEventListener('timeupdate', function(){
	var nt = video.currentTime * (100 / video.duration);
	tiempo.value = nt;
	var curmins = Math.floor(video.currentTime / 60);
	var cursecs = Math.floor(video.currentTime - curmins * 60);
	var durmins = Math.floor(video.duration / 60);
	var dursecs = Math.floor(video.duration - durmins * 60);
	if(cursecs < 10){ cursecs = "0"+cursecs; }
	if(dursecs < 10){ dursecs = "0"+dursecs; }
	if(curmins < 10){ curmins = "0"+curmins; }
	if(durmins < 10){ durmins = "0"+durmins; }
	curtimetext.innerHTML = curmins+":"+cursecs;
	durtimetext.innerHTML = durmins+":"+dursecs;
});

