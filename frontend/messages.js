const token = localStorage.getItem("adminToken");
if (!token) {
    window.location.href = "admin-login.html";
}

let contacts = [];

async function loadMessages(){
    try{
        const response = await fetch("http://localhost:5000/api/contact", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        const data=await response.json();
        contacts = data.contacts;
        displayMessages(contacts);
        const table=document.getElementById("messageTable");
        table.innerHTML="";
        data.contacts.forEach(contact=>{
            table.innerHTML += `
                    <tr>
                        <td>${contact.name}</td>
                        <td>${contact.email}</td>
                        <td>${contact.subject}</td>
                        <td>${contact.message}</td>
                        <td>${new Date(contact.createdAt).toLocaleDateString()}</td>
                        <td>
                            <button onclick="deleteMessage('${contact._id}')">Delete</button>
                        </td>
                    </tr>
            `;
            document.getElementById("totalMessages").innerText = data.contacts.length;
        });
    }
    catch(error){
        console.log(error);
    }
}
loadMessages();

/*----------------------------------------Display-------------------------------------------*/
function displayMessages(data) {
    const table = document.getElementById("messageTable");
    table.innerHTML = "";
    if (data.length === 0) {
        table.innerHTML = `
            <tr>
                <td colspan="6" style="text-align:center;">
                    No messages found
                </td>
            </tr>
        `;
        document.getElementById("totalMessages").innerText = 0;
        return;
    }
    data.forEach(contact => {
        table.innerHTML += `
            <tr>
                <td>${contact.name}</td>
                <td>${contact.email}</td>
                <td>${contact.subject}</td>
                <td>${contact.message.length > 40 ? contact.message.substring(0, 40) + "..."
                : contact.message}</td>
                <td>${new Date(contact.createdAt).toLocaleDateString()}</td>
                <td>
                    <button onclick="deleteMessage('${contact._id}')">
                        Delete
                    </button>
                </td>
            </tr>
        `;
    });
    document.getElementById("totalMessages").innerText = data.length;
}

/*----------------------------------------Delete-----------------------------------------------*/
async function deleteMessage(id){
    if(!confirm("Delete this message?")) return;
    await fetch(`http://localhost:5000/api/contact/${id}`,{
        method:"DELETE",
        headers: {
        Authorization: `Bearer ${token}`
        }
    });
    loadMessages();
}

const logoutBtn = document.getElementById("logoutBtn");
logoutBtn.addEventListener("click", function(){
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminUsername");
    alert("Logged out successfully!");
    window.location.href = "admin-login.html";
});


const search = document.getElementById("search");
search.addEventListener("keyup", function () {
    const value = this.value.toLowerCase();
    const filtered = contacts.filter(contact =>
        contact.name.toLowerCase().includes(value) ||
        contact.email.toLowerCase().includes(value) ||
        contact.subject.toLowerCase().includes(value)
    );
    displayMessages(filtered);
});