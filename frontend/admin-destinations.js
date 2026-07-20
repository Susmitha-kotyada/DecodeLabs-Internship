let editingId = null;
const token = localStorage.getItem("adminToken");

if (!token) {
    window.location.href = "admin-login.html";
}

const logoutBtn = document.getElementById("logoutBtn");

logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminUsername");
    window.location.href = "admin-login.html";
});

/*------------------------Add Destinations-----------------------------------------------------------------*/
const form = document.getElementById("destinationForm");

form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const destination = {
        name: document.getElementById("name").value,
        category: document.getElementById("category").value,
        location: document.getElementById("location").value,
        image: document.getElementById("image").value,
        description: document.getElementById("description").value
    };

    try {

        let url = "http://localhost:5000/api/destinations";
        let method = "POST";

        if (editingId) {
            url = `http://localhost:5000/api/destinations/${editingId}`;
            method = "PUT";
        }

        const response = await fetch(url, {
            method: method,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(destination)
        });

        if (response.ok) {
            alert(editingId ? "Destination updated successfully!" : "Destination added successfully!");
            form.reset();
            editingId = null;
            document.getElementById("submitBtn").innerHTML =
                '<i class="fa-solid fa-plus"></i> Add Destination';
            loadDestinations();
        }
    } catch (error) {
        console.log(error);
    }
});

/*-------------------------------------------Load Destinations-----------------------------------*/
async function loadDestinations(){

    try{
        const response = await fetch("http://localhost:5000/api/destinations");
        const data = await response.json();
        const table = document.getElementById("destinationTable");
        table.innerHTML = "";
        data.forEach(destination => {
            table.innerHTML += `<tr><td>
                            <img class="destination-image" src="${destination.image}" alt="${destination.name}">
                                </td>
                        <td>${destination.name}</td>
                        <td><span class="category ${destination.category.toLowerCase().replace(/\s/g,'')}">${destination.category}</span></td>
                        <td>${destination.location}</td>
                        <td><button class="edit-btn" onclick="editDestination('${destination._id}')"><i class="fa-solid fa-pen"></i></button>
                            <button class="delete-btn" onclick="deleteDestination('${destination._id}')"><i class="fa-solid fa-trash"></i></button></td>
                        </tr>
                    `;
        });
    }
    catch(error){
        console.log(error);
    }
}

loadDestinations();

/*----------------------------------Edit Destinations------------------------------------------*/
async function editDestination(id) {

    console.log("Editing:", id);

    try {

        const response = await fetch(`http://localhost:5000/api/destinations/${id}`);

        console.log(response);

        const destination = await response.json();

        console.log(destination);

        document.getElementById("name").value = destination.name;
        document.getElementById("category").value = destination.category;
        document.getElementById("location").value = destination.location;
        document.getElementById("image").value = destination.image;
        document.getElementById("description").value = destination.description;

        editingId = id;

        document.getElementById("submitBtn").innerHTML =
            '<i class="fa-solid fa-pen"></i> Update Destination';

    } catch (error) {
        console.error(error);
    }

}
/*-----------------------------------Delete Destinations----------------------------------------*/
async function deleteDestination(id) {
    const confirmDelete = confirm("Are you sure you want to delete this destination?");
    if (!confirmDelete) {
        return;
    }
    try {
        const response = await fetch(`http://localhost:5000/api/destinations/${id}`, {
            method: "DELETE"
        });
        const data = await response.json();
        alert(data.message);
        loadDestinations();
    } catch (error) {
        console.log(error);
    }
}



const imageInput = document.getElementById("image");
imageInput.addEventListener("input", function(){
    const preview = document.getElementById("previewImage");

    if(this.value.trim() !== ""){
        preview.src = this.value;
    }
    else{
        preview.src = "https://placehold.co/500x250?text=Image+Preview";
    }
});