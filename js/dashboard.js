const role =
localStorage.getItem("role");

if(!role){

    location.href="index.html";

}

document.getElementById("userRole")
.innerHTML =
"<b>Login sebagai : "
+ role.toUpperCase()
+ "</b>";

let html = "";

if(role === "maintenance"){

    html = `

    <div class="menu-grid">

        <div class="menu-card"
            onclick="openPage('request.html')">
            📋 REQUEST
        </div>

        <div class="menu-card"
            onclick="openPage('order.html')">
            🛒 ORDER
        </div>

    </div>

    `;
}

if(role === "supervisor"){

    html = `

    <div class="menu-grid">

        <div class="menu-card"
            onclick="openPage('request.html')">
            📋 REQUEST
        </div>

        <div class="menu-card"
            onclick="openPage('order.html')">
            🛒 ORDER
        </div>

        <div class="menu-card"
            onclick="openPage('monitoring.html')">
            📊 MONITORING
        </div>

    </div>

    `;
}

document.getElementById(
"menuContainer"
).innerHTML = html;


function openPage(page){

    location.href = page;

}

function logout(){

    localStorage.clear();

    location.href =
    "index.html";

}