/* 
Powered | CoderX ©2021 | Andrei Abd
█▀▀ █▀█ █▀▄ █▀▀ █▀█ ▀▄▀
█▄▄ █▄█ █▄▀ ██▄ █▀▄ █░█
CODER X |تم تصميم الموقع و برمجته من قبل اندريه عبد
mail      :  usr.g0a1@gmial.com
CoderX    :  https://coderx-project.blogspot.com/
Whatsapp  :  +963934820511
Pinterest :  https://www.pinterest.com/andreiabd93/
Instagram :  https://www.instagram.com/andrei_abd/
Linkeden  :  https://www.linkedin.com/in/andreiabd
Facebook  :  https://www.facebook.com/andreiaabd/
Github    :  https://github.com/AndreiAbd
*/
let
    textInput = document.getElementById('text2speech'),
    clearInput = document.getElementById('clear'),
    ControlsShow = document.getElementById('helpControlsShow'),
    autoPlay = document.getElementById('playBtn'),
    fullScreenBtn = document.getElementById('getFullScreen'),
    elem = document.getElementById('s2');


const url = 'http://api.voicerss.org/';
const apiKey = '2bffb2b44f814b378cd5a61788f46ea4';

const builUrl = (str) => `${url}?key=${apiKey}&src=${str}&f=48khz_16bit_stereo`;

//Get Text input Foucas
textInput.addEventListener("click", getInFocus);
textInput.addEventListener("mouseover", getInFocus);
textInput.addEventListener("mouseout", getInBlur);
//Clear All Text Input
clearInput.addEventListener("click", clearAlltext);
//Show Controls All
ControlsShow.addEventListener("click", showControls);
//play audio
autoPlay.addEventListener("click", playAudioText)
    //add full screen
fullScreenBtn.addEventListener("click", openFullscreen)

function showControls() {
    document.getElementById('showControlsAll').style.display = 'block';
    setTimeout(() => (document.getElementById('showControlsAll').style.display = 'none'), 5000)
}

function clearAlltext() {
    document.getElementById('msgBox').style = 'padding: 10px;text-align:center;background-color: yellowgreen;padding: 5 px;color: #222;border: green solid 1 px;border-radius: 5px;display:block;'
    document.getElementById('msgBox').innerHTML = 'Text Input Clear Successfully';
    textInput.value = '';
    setTimeout(() => (document.getElementById("msgBox").style.display = 'none'), 2000);
}

function playAudioText() {
    if (textInput.value != '') {
        document.getElementById('msgBox').style = 'padding: 10px;text-align:center;background-color: yellowgreen;padding: 5 px;color: #222;border: green solid 1 px;border-radius: 5px;display:block;'
        document.getElementById('msgBox').innerHTML = 'Running Auto Speech...';
        new Audio(builUrl(document.getElementById('text2speech').value)).play();
        setTimeout(() => (document.getElementById("msgBox").style.display = 'none'), 2000);
    } else {
        document.getElementById('msgBox').style = 'padding: 10px;text-align:center;background-color: tomato;padding: 5 px;color: #222;border: green solid 1 px;border-radius: 5px;display:block;'
        document.getElementById('msgBox').innerHTML = 'You Type Empty Value!';
        setTimeout(() => (document.getElementById("msgBox").style.display = 'none'), 2000);
    }

}

function getInFocus() {
    textInput.focus();
}

function getInBlur() {
    textInput.blur();
}

/* View in fullscreen */
function openFullscreen() {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
        document.getElementById('msgBox').style = 'padding: 10px;text-align:center;background-color: yellowgreen;padding: 5 px;color: #222;border: green solid 1 px;border-radius: 5px;display:block;'
        document.getElementById('msgBox').innerHTML = 'Full Screen Mode - Press ESC to exit';
        setTimeout(() => (document.getElementById("msgBox").style.display = 'none'), 2000);
    } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
    }
}

/* Close fullscreen */
function closeFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { /* Safari */
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE11 */
        document.msExitFullscreen();
    }
}

//access key
document.getElementById('playBtn').accessKey = 'r';
document.getElementById('clear').accessKey = 'c';
document.getElementById('helpControlsShow').accessKey = 'q';


//Get Full Year
const d = new Date();
document.getElementById("getCurrentYear").innerHTML = d.getFullYear();

//Loader Page
window.addEventListener("load", function() {
    const loader = document.querySelector(".loader");
    loader.className += " hidden";
});
//Disable Right Mouse Click
document.addEventListener('contextmenu', event => event.preventDefault());