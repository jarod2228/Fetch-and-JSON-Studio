// TODO: add code here
window.addEventListener("load", function () {
    const astronauts = fetch("https://handlers.education.launchcode.org/static/astronauts.json")
    astronauts.then(response => response.json()
    .then(json => {json.sort((a, b) => (b.hoursInSpace > a.hoursInSpace) ? 1 : -1);
        const container = document.getElementById("container");
        // let index = 0;
        for (let i = 0; i < json.length; i++) {
            container.innerHTML += `
            <div class="astronaut">
                <div class="bio">
                    <h3>${json[i].firstName} ${json[i].lastName}</h3>
                    <ul>
                        <li>Hours in space: ${json[i].hoursInSpace}</li>
                        <li>Active: ${json[i].active}</li>
                        <li>Skills: ${json[i].skills}</li>
                            </ul>
                        </div>
                        <img class="avatar" src=${json[i].picture}>
                    </div>
                    `
                        }
        }
        ));
});