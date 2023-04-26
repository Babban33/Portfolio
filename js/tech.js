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
            "name":"Java",
            "icon":"images/tech/Java.svg",
            "type":"language",
        },
        {
            "name": "C++",
            "icon": "images/tech/C++.svg",
            "type":"language",
        },
        {
            "name": "JavaScript",
            "icon":"images/tech/js.svg",
            "type":"language",
        },
        {
            "name": "HTML",
            "icon":"images/tech/html.svg",
            "type":"language",
        },
        {
            "name": "CSS",
            "icon":"images/tech/css.svg",
            "type":"language",
        },
        {
            "name": "Flutter",
            "icon":"images/tech/flutter.svg",
            "type":"framework",
        },
        {
            "name": "React",
            "icon":"images/tech/react.svg",
            "type":"framework",
        },
        {
            "name": "Flask",
            "icon":"images/tech/flask.svg",
            "type":"framework",
        },
        {
            "name": "Django",
            "icon":"images/tech/django.svg",
            "type":"framework",
        },
        {
            "name": "Tensorflow",
            "icon":"images/tech/tensorflow.svg",
            "type":"libs",
        },
        {
            "name": "Keras",
            "icon":"images/tech/keras.svg",
            "type":"libs",
        },
        {
            "name": "Scikit",
            "icon":"images/tech/Scikit.svg",
            "type":"libs",
        },
        {
            "name": "Pytorch",
            "icon":"images/tech/pytorch.svg",
            "type":"libs",
        },
        {
            "name": "OpenCV",
            "icon":"images/tech/opencv.svg",
            "type":"libs",
        },
        {
            "name": "OpenAiGym",
            "icon":"images/tech/openaigym.svg",
            "type":"libs",
        },
        {
            "name": "Numpy",
            "icon":"images/tech/numpy.svg",
            "type":"libs",
        },
        {
            "name": "Pandas",
            "icon":"images/tech/pandas.svg",
            "type":"libs",
        },
        {
            "name": "Matplotlib",
            "icon":"images/tech/matplotlib.svg",
            "type":"libs",
        },
        {
            "name": "Bootstrap",
            "icon":"images/tech/bootstrap.svg",
            "type":"libs",
        },
        {
            "name": "Selenium",
            "icon":"images/tech/selenium.svg",
            "type":"libs",
        },
        {
            "name": "Azure",
            "icon":"images/tech/azure.svg",
            "type":"tp",
        },
        {
            "name": "Docker",
            "icon":"images/tech/docker.svg",
            "type":"tp",
        },
        {
            "name": "Firebase",
            "icon":"images/tech/firebase.svg",
            "type":"tp",
        },
        {
            "name": "AppWrite",
            "icon":"images/tech/appwrite.svg",
            "type":"tp",
        },
        {
            "name": "Github",
            "icon":"images/tech/github.svg",
            "type":"tp",
        },
        {
            "name": "Kubernetes",
            "icon":"images/tech/kubernetes.svg",
            "type":"tp",
        },
        {
            "name": "Github Actions",
            "icon":"images/tech/github-actions.svg",
            "type":"tp",
        },
        {
            "name": "Git",
            "icon":"images/tech/git.svg",
            "type":"tp",
        },
        {
            "name": "Google colab",
            "icon":"images/tech/colab.svg",
            "type":"tp",
        },
        {
            "name": "Visual Studio Prof.",
            "icon":"images/tech/visual-studio.svg",
            "type":"tp",
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