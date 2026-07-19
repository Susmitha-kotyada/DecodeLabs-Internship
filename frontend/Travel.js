let allDestinations = [];


function showSpiritual(){
	document.getElementById("spiritual").style.display="block";
    document.getElementById("heritage").style.display="none";
     document.getElementById("beach").style.display = "none";
     document.getElementById("hillstation").style.display = "none";
     document.getElementById("city").style.display = "none";
    document.getElementById("nature").style.display = "none";
    document.getElementById("spiritual").scrollIntoView({
        behavior: "smooth"
    });
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
    document.getElementById("beach").style.display="none";
    document.getElementById("hillstation").style.display="none";
    document.getElementById("city").style.display = "none";
    document.getElementById("nature").style.display = "none";
    document.getElementById("search-section").style.display = "none";
    document.getElementById("searchInput").value = "";
    
}
function showHeritage(){
	document.getElementById("heritage").style.display="block";
    document.getElementById("spiritual").style.display="none";
     document.getElementById("beach").style.display = "none";
     document.getElementById("hillstation").style.display = "none";
     document.getElementById("city").style.display = "none";
    document.getElementById("nature").style.display = "none";
     document.getElementById("heritage").scrollIntoView({
        behavior: "smooth"
    });
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

function showBeach(){
    document.getElementById("spiritual").style.display = "none";
    document.getElementById("heritage").style.display = "none";
    document.getElementById("hillstation").style.display = "none";
    document.getElementById("city").style.display = "none";
    document.getElementById("nature").style.display = "none";
    document.getElementById("beach").style.display = "block";
    document.getElementById("beach").scrollIntoView({
        behavior: "smooth"
    });
}

function showGoa(){
    document.getElementById("beach").style.display = "none";
    document.getElementById("goa").style.display = "block";
    document.getElementById("goa").scrollIntoView({
        behavior:"smooth"
    });
}
function showMarina(){
    document.getElementById("beach").style.display = "none";
    document.getElementById("marina").style.display = "block";
    document.getElementById("marina").scrollIntoView({
        behavior:"smooth"
    });
}
function showRadhanagar(){
    document.getElementById("beach").style.display = "none";
    document.getElementById("radhanagar").style.display = "block";
    document.getElementById("radhanagar").scrollIntoView({
        behavior:"smooth"
    });
}
function backToBeaches(){
    document.getElementById("goa").style.display="none";
    document.getElementById("marina").style.display="none";
    document.getElementById("radhanagar").style.display="none";
    document.getElementById("beach").style.display="block";

    document.getElementById("beach").scrollIntoView({
        behavior: "smooth"
    });
}

function showHillStation(){
    document.getElementById("spiritual").style.display = "none";
     document.getElementById("heritage").style.display = "none";
    document.getElementById("beach").style.display = "none";
    document.getElementById("city").style.display = "none";
    document.getElementById("nature").style.display = "none";
    document.getElementById("hillstation").style.display = "block";
    document.getElementById("hillstation").scrollIntoView({
        behavior: "smooth"
    });
}

function showOoty(){
    document.getElementById("hillstation").style.display = "none";
    document.getElementById("ooty").style.display = "block";
    document.getElementById("ooty").scrollIntoView({
        behavior:"smooth"
    });
}

function showMunnar(){
    document.getElementById("hillstation").style.display = "none";
    document.getElementById("munnar").style.display = "block";
    document.getElementById("munnar").scrollIntoView({
        behavior:"smooth"
    });
}
function showDarjeeling(){
    document.getElementById("hillstation").style.display = "none";
    document.getElementById("darjeeling").style.display = "block";
    document.getElementById("darjeeling").scrollIntoView({
        behavior:"smooth"
    });
}
function backToHillStations(){
    document.getElementById("ooty").style.display="none";
    document.getElementById("munnar").style.display="none";
    document.getElementById("darjeeling").style.display="none";
    document.getElementById("hillstation").style.display="block";

    document.getElementById("hillstation").scrollIntoView({
        behavior: "smooth"
    });
}


function showCity(){
    document.getElementById("spiritual").style.display = "none";
     document.getElementById("heritage").style.display = "none";
    document.getElementById("beach").style.display = "none";
    document.getElementById("hillstation").style.display = "none";
    document.getElementById("nature").style.display = "none";
    document.getElementById("city").style.display = "block";
    document.getElementById("city").scrollIntoView({
        behavior: "smooth"
    });
}

function showVizag(){
    document.getElementById("city").style.display = "none";
    document.getElementById("vizag").style.display = "block";
    document.getElementById("vizag").scrollIntoView({
        behavior:"smooth"
    });
}

function showHyderabad(){
    document.getElementById("city").style.display = "none";
    document.getElementById("hyderabad").style.display = "block";
    document.getElementById("hyderabad").scrollIntoView({
        behavior:"smooth"
    });
}
function showDelhi(){
    document.getElementById("city").style.display = "none";
    document.getElementById("delhi").style.display = "block";
    document.getElementById("delhi").scrollIntoView({
        behavior:"smooth"
    });
}
function backToCity(){
    document.getElementById("vizag").style.display="none";
    document.getElementById("hyderabad").style.display="none";
    document.getElementById("delhi").style.display="none";
    document.getElementById("city").style.display="block";
    document.getElementById("city").scrollIntoView({
        behavior: "smooth"
    });
}

function showNature(){
    document.getElementById("spiritual").style.display = "none";
     document.getElementById("heritage").style.display = "none";
    document.getElementById("beach").style.display = "none";
    document.getElementById("hillstation").style.display = "none";
    document.getElementById("city").style.display = "none";
    document.getElementById("nature").style.display = "block";
    document.getElementById("nature").scrollIntoView({
        behavior: "smooth"
    });
}

function showDudhSagar(){
    document.getElementById("nature").style.display = "none";
    document.getElementById("dudhsagar").style.display = "block";
    document.getElementById("dudhsagar").scrollIntoView({
        behavior:"smooth"
    });
}

function showValleyofFlowers(){
    document.getElementById("nature").style.display = "none";
    document.getElementById("valleyofflowers").style.display = "block";
    document.getElementById("valleyofflowers").scrollIntoView({
        behavior:"smooth"
    });
}
function showRannofKutch(){
    document.getElementById("nature").style.display = "none";
    document.getElementById("rannofkutch").style.display = "block";
    document.getElementById("rannofkutch").scrollIntoView({
        behavior:"smooth"
    });
}
function backToNature(){
    document.getElementById("dudhsagar").style.display="none";
    document.getElementById("valleyofflowers").style.display="none";
    document.getElementById("rannofkutch").style.display="none";
    document.getElementById("nature").style.display="block";
    document.getElementById("nature").scrollIntoView({
        behavior: "smooth"
    });
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

/* ------------------------------------------destinations section---------------------*/

async function loadDestinations() {
    try {
        const response = await fetch("http://localhost:5000/api/destinations");
        const destinations = await response.json();
        const container = document.getElementById("destination-container");
        container.innerHTML = "";
        destinations.forEach(destination => {
            const card = document.createElement("div");
            card.className = "destination-card";
            card.innerHTML = `
                <img src="${destination.image}" alt="${destination.name}">
                <h3>${destination.name}</h3>
                <p><strong>Category:</strong> ${destination.category}</p>
                <p><strong>Location:</strong> ${destination.location}</p>
                <p>${destination.description}</p>
            `;
            container.appendChild(card);
        });
    } catch (error) {
        console.error("Error loading destinations:", error);
    }
}
loadDestinations();

/*-------------------------------------------------------------------------------------------------*/

function createRows(data, containerId, cardClass, clickHandler) {
    const container = document.getElementById(containerId);
    container.innerHTML = "";
    for (let i = 0; i < data.length; i += 3) {
        const row = document.createElement("div");
        row.className = cardClass + "-row";
        const rowItems = data.slice(i, i + 3);
        rowItems.forEach(place => {
            const card = document.createElement("div");
            card.className = cardClass;
            card.innerHTML = `
                <img src="${place.image}" alt="${place.name}">
                <h3>${place.name}</h3>
            `;
            card.onclick = () => clickHandler(place);
            row.appendChild(card);
        });
        container.appendChild(row);
    }
}

/*--------------------------------------------Load Category-----------------------------------*/
async function loadCategory(category, containerId, cardClass, clickHandler) {
    try {
        const response = await fetch(`http://localhost:5000/api/destinations/category/${category}`);
        const places = await response.json();
        displayPlaces(places, containerId, cardClass, clickHandler);
    } catch (error) {
        console.log(error);
    }
}

function displayPlaces(places, containerId, cardClass, clickHandler) {
    const container = document.getElementById(containerId);
    container.innerHTML = "";
    if (places.length === 0) {
        container.innerHTML = `
            <div class="no-results">
                <h2>No Results Found 😔</h2>
                <p>Try searching for another destination.</p>
            </div>
        `;
        return;
    }

    for (let i = 0; i < places.length; i += 3) {
        const row = document.createElement("div");
        row.className = cardClass.replace("card", "row");
        const currentRow = places.slice(i, i + 3);
        currentRow.forEach(place => {
            const card = document.createElement("div");
            card.className = cardClass;
            card.innerHTML = `
                <img src="${place.image}" alt="${place.name}">
                <h3>${place.name}</h3>
            `;
            card.onclick = () => clickHandler(place);
            row.appendChild(card);
        });
        container.appendChild(row);
    }
}


function openPlace(place){

    switch(place.name){

        case "Tirumala":
            showTirumala();
            break;
        case "Meenakshi Temple":
            showMeenakshi();
            break;
        case "Kashi":
            showKashi();
            break;
        case "Puri":
            showPuri();
            break;
        case "Kedarnath":
            showKedar();
            break;
        case "Taj Mahal":
            showTaj();
            break;
        case "Hampi":
            showHampi();
            break;
        case "KonarkSun Temple":
            showKonark();
            break;
        case "Ajantha Caves":
            showAjantha();
            break;
        case "Ellora Caves":
            showEllora();
            break;
        case "Goa Beach":
            showGoa();
            break;
        case "Marina Beach":
            showMarina();
            break;
        case "Radhanagar Beach":
            showRadhanagar();
            break;
        case "Ooty":
            showOoty();
            break;
        case "Munnar":
            showMunnar();
            break;
        case "Darjeeling":
            showDarjeeling();
            break;
        case "Visakhapatnam":
            showVizag();
            break;
        case "Hyderabad":
            showHyderabad();
            break;
        case "Delhi":
            showDelhi();
            break;
        case "Dudhsagar Falls":
            showDudhSagar();
            break;
        case "Valley of Flowers":
            showValleyofFlowers();
            break;
        case "Rann of Kutch":
            showRannofKutch();
            break;
    }
}
/*----------------------------------------Call for temples---------------------------------------------*/
loadCategory(
    "Temple",
    "temple-container",
    "spiritual-card",
    openPlace
);
/*----------------------------------------Call for heritage---------------------------------------------*/
loadCategory(
    "Heritage",
    "heritage-container",
    "heritage-card",
    openPlace
);

/*------------------------------------------Call for Beaches---------------------------------------------*/
loadCategory(
    "Beach",
    "beach-container",
    "beach-card",
    openPlace
);

/*-------------------------------Call for HillStation------------------------------------------*/
loadCategory(
    "Hill Station",
    "hillstation-container",
    "hillstation-card",
    openPlace
);


/*-------------------------------Call for City--------------------------------------------------*/
loadCategory(
    "City",
    "city-container",
    "city-card",
    openPlace
);
/*-------------------------------Call for Nature------------------------------------------------*/
loadCategory(
    "Nature",
    "nature-container",
    "nature-card",
    openPlace
);


/*---------------------------------------Load All Destinations-------------------------------------*/
async function loadAllDestinations(){
    const response = await fetch("http://localhost:5000/api/destinations");
    allDestinations = await response.json();
}
loadAllDestinations();

/*-------------------------------------Search Input--------------------------------------*/
const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("keyup", function () {
    const value = this.value.toLowerCase().trim();
    const results = allDestinations.filter(place =>
        place.name.toLowerCase().includes(value)
    );
    if (value === "") {
        document.getElementById("search-section").style.display = "none";
        return;
    }
    document.getElementById("search-section").style.display = "block";
    displayPlaces(
        results,
        "search-container",
        "nature-card",
        openPlace
    );
});
/*---------------------------------Contact Section--------------------------------------------------*/
const contactForm = document.getElementById("contactForm");
if (contactForm) {
    contactForm.addEventListener("submit", async function (e) {
        e.preventDefault();
        const contactData = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            subject: document.getElementById("subject").value,
            message: document.getElementById("message").value
        };
        try {
            const response = await fetch("http://localhost:5000/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(contactData)
            });
            const result = await response.json();
            alert(result.message);
            contactForm.reset();
        } catch (error) {
            console.log(error);
            alert("Something went wrong!");
        }
    });
}