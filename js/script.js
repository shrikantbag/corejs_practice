


var helo = [
    {
        "name":"Sumnata Pradhan",
        "age":24,
        "address":{
            "homeaddress":"Antop hill,Mumbai-400037",
            "parmant":"Dadar,Mumbai-400022"
        },
        "hobby":["Pc-Game","Singing","Criket"]
    },
    {
        "name":"Shrikant Pradhan",
        "age":26,
        "address":{
            "homeaddress":"Wadala,Mumbai-400037",
            "parmant":"Dadar,Mumbai-400022"
        },
        "hobby":["Drawing","Singing","Criket"]
    },
    {
        "name":"Shrikant Pradhan",
        "age":26,
        "address":{
            "homeaddress":"Wadala,Mumbai-400037",
            "parmant":"Dadar,Mumbai-400022"
        },
        "hobby":["Drawing","Singing","Criket"]
    },
    {
        "name":"Shrikant Pradhan",
        "age":26,
        "address":{
            "homeaddress":"Wadala,Mumbai-400037",
            "parmant":"Dadar,Mumbai-400022"
        },
        "hobby":["Drawing","Singing","Criket"]
    },
    {
        "name":"Shrikant Pradhan",
        "age":26,
        "address":{
            "homeaddress":"Wadala,Mumbai-400037",
            "parmant":"Dadar,Mumbai-400022"
        },
        "hobby":["Drawing","Singing","Criket"]
    },
]



var main_container = document.getElementById("main-container");

helo.forEach((data)=>{
    var div = document.createElement("div");
    div.className = "col col-sm-6 col-md-3";
    div.innerHTML = "<div class='card'>"+
                    "<div class='card-body'>"+
                    "<h3 class='card-title'>"+data['name']+"</h3>"+
                    "</div></div>";
    

    main_container.append(div);
    console.log(data['name'])
})