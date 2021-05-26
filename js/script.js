const notRegistered = document.querySelector(".not-registered");

const getResistrationData = async function() {
    const request = await fetch("https://gist.githubusercontent.com/skillcrush-curriculum/4bfa96d3762f86d2327d389063b3ea8d/raw/86e50e48e98c662ead6d9bd191ef7db381e9f4b4/fieldtrip.json");
    const data =  await request.json();
    displayContacttList(data);
};


const displayContacttList = function(data) {
    for (let kid of data) {
        if (kid.registered === "no") {
            let missingKid = document.createElement("li");
            missingKid.innerText = kid.name;
            notRegistered.append(missingKid);
        }
    }
};

getResistrationData();