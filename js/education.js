document.addEventListener("DOMContentLoaded", function () {
    mapEducationData();
});


function mapEducationData() {

    let education = [
        {
            "institute": "G. H. Raisoni College of Engineering, Nagpur",
            "degree": "Bachelor of Technology in Artificial Intelligence",
            "duration": "2020 - 2024",
            "details": [
                "CGPA: 8.74/10.00",
                "Core courses: <ul><li>Machine Learning,</li> <li>Deep Learning,</li> <li>Natural Language Processing,</li> <li>Reinforcement Learning,</li> <li>OOP</li></ul>",
                "Final Year Project: Colon Cancer Detection"
            ],
            "image":"images/education/college.png",
        },
        {
            "institute": "G. H. Raisoni College of Engineering, Nagpur",
            "degree": "Minors B. Tech. in Electronics and Telecommunication",
            "duration": "2020 - 2024",
            "details": [
                "CGPA: 8.74/10.00",
                "Core courses:<ul><li>IOT System Design,</li> <li>Signals and System,</li> <li>Microprocessors & Interfacing</li></ul>",
                "Final Year Project: Smart Traffic System"
            ],
            "image":"images/education/college.png",
        },
        {
            "institute": "Rao Junior College of Science, Nagpur",
            "degree": "Higher Secondary School Certificate (HSSC) in Pre-Engineering",
            "duration": "2018 - 2020",
            "details": [
                "Score: 75%",
                "Courses: <ul><li>Mathematics,</li><li>Physics,</li> <li>Chemistry</li><li>Computer Science</li></ul>"
            ],
            "image":"images/education/hsc.jpg",
        },
        {
            "institute": "Jaycees Convent School, Bhandara",
            "degree": "Secondary School Certificate (SSC) in Science",
            "duration": "2018",
            "details": [
                "Score: 89%",
                "Courses:<ul><li>Mathematics,</li><li>Science</li> <li>English, etc</li></ul>"
            ],
            "image":"images/education/jc.jpg",
        }
    ];

    for (var i = 0; i < education.length; i++) {
        var eduCard = document.createElement("div");
        eduCard.className = "edu-card";

        var eduMetaDiv = document.createElement("div");
        eduMetaDiv.className = "edu-meta";

        var instituteName = document.createElement("h2");
        instituteName.className = "heading2 edu-institute";
        instituteName.innerHTML = education[i]["institute"];

        var degree = document.createElement("span");
        degree.className = "label edu-degree";
        degree.innerHTML = education[i]["degree"];

        var session = document.createElement("p");
        session.className = "body2 edu-session";
        session.innerHTML = education[i]["duration"];

        var coursesHeading = document.createElement("span");
        coursesHeading.className = "body2 edu-courses";
        coursesHeading.innerHTML = "Courses";

        var coursesList = document.createElement("ul");
        coursesList.className = "edu-courses-list";

        for (var k = 0; k < education[i]["details"].length; k++) {
            var courseName = document.createElement("li");
            courseName.className = "body2 edu-courses-item";
            courseName.innerHTML = education[i]["details"][k];
            coursesList.appendChild(courseName);
        }

        var eduImage = document.createElement("img");
        eduImage.src = education[i]["image"];
        eduImage.className = "edu-image";
        eduCard.appendChild(eduImage);

        
        eduMetaDiv.appendChild(instituteName);
        eduMetaDiv.appendChild(degree);
        eduMetaDiv.appendChild(session);
        eduMetaDiv.appendChild(coursesHeading);
        eduMetaDiv.appendChild(coursesList);
        eduCard.appendChild(eduMetaDiv);

        document.getElementById("education").appendChild(eduCard);
    }
}
