const materials = [

{
 sap:"M001",
 description:"BAUT SS M10",
 program:"MATERIAL UMUM",
 notes:"STAINLESS"
},

{
 sap:"M002",
 description:"ELBOW PVC 2 INCH",
 program:"MATERIAL UMUM",
 notes:"PVC AW"
},

{
 sap:"M003",
 description:"CABLE TIES 30 CM",
 program:"MATERIAL UMUM",
 notes:"NYLON"
}

];

function searchMaterial(){

    const keyword =
    document.getElementById("searchInput")
    .value
    .toLowerCase();

    let html = "";

    materials.forEach(item=>{

        let text =
        JSON.stringify(item)
        .toLowerCase();

        if(text.includes(keyword)){

            html += `

            <div class="card">

                <b>${item.description}</b>

                <br><br>

                SAP : ${item.sap}

                <br><br>

                <button onclick="showDetail('${item.sap}')">
                Detail
                </button>

                <button onclick="addOrder('${item.sap}')">
                Tambah Order
                </button>

            </div>

            <br>
            `;
        }

    });

    document.getElementById("resultList").innerHTML = html;
}

function showDetail(sap){

    const item =
    materials.find(x=>x.sap===sap);

    document.getElementById("detailArea").innerHTML = `

    <div class="card">

    <h3>Detail Material</h3>

    SAP : ${item.sap}<br><br>

    Description : ${item.description}<br><br>

    Notes : ${item.notes}

    </div>

    `;
}

function addOrder(sap){

    const item =
    materials.find(x=>x.sap===sap);

    let cart =
    JSON.parse(
    localStorage.getItem("orderCart")
    || "[]"
    );

    cart.push(item);

    localStorage.setItem(
    "orderCart",
    JSON.stringify(cart)
    );

    alert("Material 