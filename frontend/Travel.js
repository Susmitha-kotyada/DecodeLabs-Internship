function showSpiritual(){
	document.getElementById("spiritual").style.display="block";
    document.getElementById("heritage").style.display="none";
}
function showTirumala() {
    document.getElementById("spiritual").style.display = "none";
    document.getElementById("tirumala").style.display = "block";
    document.getElementById("tirumala").scrollIntoView({
        behavior: "smooth"
    });
}
function showMeenakshi() {
    document.getElementById("spiritual").style.display = "none";
    document.getElementById("meenakshi").style.display = "block";
    document.getElementById("meenakshi").scrollIntoView({
        behavior: "smooth"
    });
}
function showKashi() {
    document.getElementById("spiritual").style.display = "none";
    document.getElementById("kashi").style.display = "block";
    document.getElementById("kashi").scrollIntoView({
        behavior: "smooth"
    });
}
function showKedar() {
    document.getElementById("spiritual").style.display = "none";
    document.getElementById("kedar").style.display = "block";
    document.getElementById("kedar").scrollIntoView({
        behavior: "smooth"
    });
}
function showPuri() {
    document.getElementById("spiritual").style.display = "none";
    document.getElementById("puri").style.display = "block";
    document.getElementById("puri").scrollIntoView({
        behavior: "smooth"
    });
}
function backToSpiritual() {
    document.getElementById("tirumala").style.display = "none";
    document.getElementById("meenakshi").style.display="none";
    document.getElementById("puri").style.display="none";
    document.getElementById("kedar").style.display="none";
    document.getElementById("kashi").style.display="none";

    document.getElementById("spiritual").style.display = "block";

    document.getElementById("spiritual").scrollIntoView({
        behavior: "smooth"
    });
}

function backtoCategories() {
    document.getElementById("spiritual").style.display="none";
    document.getElementById("heritage").style.display="none";
    
}
function showHeritage(){
	document.getElementById("heritage").style.display="block";
    document.getElementById("spiritual").style.display="none";
}
function showTaj() {
    document.getElementById("heritage").style.display = "none";
    document.getElementById("taj").style.display = "block";
    document.getElementById("taj").scrollIntoView({
        behavior: "smooth"
    });
}
function showHampi() {
    document.getElementById("heritage").style.display = "none";
    document.getElementById("hampi").style.display = "block";
    document.getElementById("hampi").scrollIntoView({
        behavior: "smooth"
    });
}
function showKonark() {
    document.getElementById("heritage").style.display = "none";
    document.getElementById("konark").style.display = "block";
    document.getElementById("konark").scrollIntoView({
        behavior: "smooth"
    });
}
function showAjantha() {
    document.getElementById("heritage").style.display = "none";
    document.getElementById("ajantha").style.display = "block";
    document.getElementById("ajantha").scrollIntoView({
        behavior: "smooth"
    });
}
function showEllora() {
    document.getElementById("heritage").style.display = "none";
    document.getElementById("ellora").style.display = "block";
    document.getElementById("ellora").scrollIntoView({
        behavior: "smooth"
    });
}
function backToHeritage() {
    document.getElementById("taj").style.display = "none";
    document.getElementById("hampi").style.display="none";
    document.getElementById("konark").style.display="none";
    document.getElementById("ajantha").style.display="none";
    document.getElementById("ellora").style.display="none";

    document.getElementById("heritage").style.display = "block";

    document.getElementById("heritage").scrollIntoView({
        behavior: "smooth"
    });
}
function showHillStation(){
    alert("🚧 This category is under development. Please explore Spiritual India and Heritage in the meantime!");
}
function showNature() {
    alert("🚧 This category is under development. Please explore Spiritual India and Heritage in the meantime!");
}
function showBeach() {
    alert("🚧 This category is under development. Please explore Spiritual India and Heritage in the meantime!");
}
function showCity() {
    alert("🚧 This category is under development. Please explore Spiritual India and Heritage in the meantime!");
}

let mybutton=document.getElementById("topbtn");
window.onscroll=function(){
    if(document.body.scrollTop>500 || document.documentElement.scrollTop>500){
        mybutton.style.display="block";
    }
    else{
        mybutton.style.display="none";
    }
}
function topFunction(){
    window.scrollTo({
        top:0,
        behavior: "smooth"
    });
}

/*-----------------------------fade in----------------------------------------------------------------------*/
const faders = document.querySelectorAll(".fade");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.2
});

faders.forEach(item => {
    observer.observe(item);
});