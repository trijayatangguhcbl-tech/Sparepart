function login(){

    const password =
    document.getElementById("password").value;

    if(password === "maintenance"){

        localStorage.setItem(
            "role",
            "maintenance"
        );

        location.href =
        "dashboard.html";
    }

    else if(password === "supervisor"){

        localStorage.setItem(
            "role",
            "supervisor"
        );

        location.href =
        "dashboard.html";
    }

    else{

        alert("Password salah");
    }

}