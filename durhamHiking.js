console.log("hello, anyone here?");

let nav = document.getElementsByTagName("nav");
console.log(nav);

let hero = document.getElementById("hero");
console.log(hero);
console.log(hero.children);

let icons = document.getElementsByClassName("icon");
console.log(icons);

let firstIcon = document.querySelector("#discover .icon");
console.log(firstIcon);
// let allIcons = document.querySelectorAll("#discover .icon");
// console.log(allIcons);

let heading = document.querySelector("#hero h1");
console.log(heading);
console.log(heading.parentElement);

// hero.innerHTML = "<marquee><h1>Goose Track Trail!!!</h1></marquee>";
// hero.innerHTML = "<iframe></iframe>";
// console.log(hero);



// for(let index in allIcons){
//     console.log(index);
//     if (index !== "entries"){
//         allIcons[index].classList.remove("icon");
//     }
// }



let button = document.createElement("button");
button.textContent = "Click me!";
author.appendChild(button);

button.addEventListener('click', () => {
    alert("you clicked me!");
    let newIcon = document.createElement('a');
    let newH3 = document.createElement('h3');
    newH3.textContent = "Feed Geese";
    newIcon.appendChild(newH3);
    let discover = document.querySelector("#discover div");
    discover.appendChild(newIcon);


    heading.textContent = "Goose Track Trail!!!";
    heading.style.color = "#00FF00";

    let image = document.querySelector("#author img");
    image.src = "https://www.shutterstock.com/image-vector/goose-head-v36-patch-streetwear-260nw-2201843891.jpg"
    console.log(image);

    let author = document.querySelector("#author");
    author.classList.add("darkmode");
    console.log(author);


    let allIcons = document.querySelectorAll("#discover .icon");
    console.log(allIcons);
    for (let icon = 0; icon < allIcons.length; icon++) {
        allIcons[icon].classList.remove("icon");
    }
})
