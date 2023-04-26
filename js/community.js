document.addEventListener("DOMContentLoaded", function () {
    mapCommunityData();
});

function mapCommunityData() {

    let communities = [
        {
            "name": "IEEE CIS GHRCE, Nagpur",
            "role": "EXECOM",
            "session": "April 2022 - Present",
            "logo": "images/community/ieee-cis.png",
            "link": "https://ieee-cis-sbc.org/",
            "details": "IEEE CIS SBC - GHRCE is a Student Branch Chapter of vibrant IEEE members with the sole mission of promoting Computational Intelligence technologies that are of social importance benefit to humankind. By conducting several unique workshops and events, we not only work for the betterment of society but also for individual development from learning new technical skills to developing leadership quality."
        },
        {
            "name": "IEEE CS GHRCE, Nagpur",
            "role": "EXECOM",
            "session": "April 2021 - April 2022",
            "logo": "images/community/ieee-cs.png",
            "link": "https://ghrce.raisoni.net/ieee-computer-society",
            "details": "The IEEE Computer Society (IEEE CS) is the premier source for information, inspiration, and collaboration in computer science and engineering. Connecting members worldwide, the IEEE Computer Society empowers the people who advance technology by delivering tools for individuals at all stages of their professional careers. IEEE CS's trusted resources include SWEBOK, continuous learning opportunities, a robust digital library, international conferences, peer-reviewed publications, and globally recognized standards."
        },
    ];

    for (var i = 0; i < communities.length; i++) {
        var com = communities[i];
        var name = com.name;
        var role = com.role;
        var session = com.session;
        var logo = com.logo;
        var link = com.link;
        var details = com.details;

        var card = document.createElement("a");
        card.className = "community-card";

        var image = document.createElement('img');
        image.className = "community-logo";
        image.src = logo;
        image.alt = name;

        var info = document.createElement("div");
        info.className = "community-info";

        var cName = document.createElement("p");
        cName.className = "body1 c-title";
        cName.textContent = name;

        var cRole = document.createElement("span");
        cRole.className = "body2 c-position";
        cRole.innerHTML = role;

        var cSession = document.createElement("p");
        cSession.className = "label c-session";
        cSession.textContent = session;

        info.appendChild(cName);
        info.appendChild(cRole);
        info.appendChild(cSession);

        card.appendChild(image);
        card.appendChild(info);

        card.href = link;
        card.target = "_blank";

        var communitiesDiv = document.getElementById("communities");
        communitiesDiv.append(card);

        var point = document.createElement("li");
        point.className = "body2 cw-point";
        point.innerHTML = details;

        var points = document.getElementById("cw-points");
        points.appendChild(point);
    }
}