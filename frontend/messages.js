const token = localStorage.getItem("adminToken");
if (!token) {
    window.location.href = "admin-login.html";
}

async function loadMessages(){
    try{
        const response = await fetch("http://localhost:5000/api/contact", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        const data=await response.json();
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
