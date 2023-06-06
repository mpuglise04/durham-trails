console.log("you have jquery!");
let heading = $("#hero h1");
console.log(heading);
heading.text("Goose Track Trail");
heading.addClass("darkmode");
heading.css('font-size', '200px');

let discover = $('#discover>div');

// let newIcon = $(`<a href="#fav">
// <div>
//     <div class="icon">
//         <img src="https://cdn.dribbble.com/userupload/7309854/file/original-2b296d32c12b4a5bf876bc39afbaca58.png?compress=1&resize=468x468"
//             alt="fav-icon" />
//     </div>
//     <h3>Feed Geese</h3>
// </div>
// </a>`);
// discover.append(newIcon);



let button = $('<button>CLICK ME!</button>');
discover.append(button);
button.on('click', () => {

    let newIcon = $(`<a href="#fav">
<div>
    <div class="icon">
        <img src="https://cdn.dribbble.com/userupload/7309854/file/original-2b296d32c12b4a5bf876bc39afbaca58.png?compress=1&resize=468x468"
            alt="fav-icon" />
    </div>
    <h3>Feed Geese</h3>
</div>
</a>`);
    newIcon.fadeIn(1000);
    discover.append(newIcon);
})