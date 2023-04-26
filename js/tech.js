document.addEventListener("DOMContentLoaded", function () {
    mapTechData();
});

function mapTechData() {
    let tech = [
        {
            "name": "Python",
            "icon": "images/tech/python.svg",
            "type": "language"
        },
        {
            "name":"Dart",
            "icon": "images/tech/dart.svg",
            "type": "language",
        },
        {
            "name":"C",
            "icon":"images/tech/C.svg",
            "type":"language",
        },
        {
            "name": "C++",
            "icon": "images/tech/C++.svg",
            "type":"language",
        },
        {
            "name":"Java",
            "image":"images/tech/Java.png",
            "type":"language",
        },
    ];

    for (var i = 0; i < tech.length; i++) {
        // div
        var techDiv = document.createElement("div");
        techDiv.className = "tech";

        // icon
        var techIconImg = document.createElement("img");
        techIconImg.className = "tech-icon";
        if (tech[i]["name"] == "Node.js") {
            techIconImg.style.height = "20px";
        }

        // tech name
        var techName = document.createElement("span");
        techName.className = "tech-label";

        techIconImg.src = tech[i]["icon"];
        techIconImg.alt = tech[i]["name"];

        techName.innerHTML = tech[i]["name"];

        var relatedDiv = document.getElementById(tech[i]["type"]);

        techDiv.appendChild(techIconImg);
        techDiv.appendChild(techName);
        relatedDiv.appendChild(techDiv);
    }
}