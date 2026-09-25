const role =
localStorage.getItem("role");

if(role !== "supervisor"){

    alert(
        "Akses hanya untuk Supervisor"
    );

    location.href =
    "dashboard.html";
}