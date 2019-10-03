window.document.title="Music";
function showDate()
    {
        let today = new Date();
        var hours="", minute="", tow;
        if(today.getHours()<10)
            hours="0"+today.getHours();
        else
            hours=today.getHours();

        if(today.getMinutes()<10)
            minute="0"+today.getMinutes();
        else
            minute=today.getMinutes();

        tow= hours + ":" +minute;
        document.getElementById('current-time').innerHTML= tow;
    }
showDate();
setInterval(function(){showDate();if(!aud.paused){ progressbar();}}, 1000);

var aud=document.getElementById('audio1');
function playpause() {
  if(aud.paused){
    aud.play();
    document.getElementById('button1').innerHTML="pause";

  }
  else{
  aud.pause();
  document.getElementById('button1').innerHTML="play";
}

}

function nextbutton() {
  document.getElementById('audio1').src="thor.mp3";
  playpause();
}
function backbutton(){
  aud.src="Pachtaoge.mp3"
  playpause();
}
function progressbar() {
  var total=document.getElementById('audio1').duration;
  var current=document.getElementById('audio1').currentTime;
  currentPer=(current*100)/total;
  currentPer=currentPer+'%';
  document.getElementById('currentTime').style.width=currentPer;
}
setInterval(progressbar(),100);
