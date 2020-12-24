





// placement of about panel
// $(function () {
//     const newLocal = "#nav-viewarea";
//     $(newLocal).load("about.html");
// });
$(function () {
    $("#nav-viewarea").load("about.html");
});


// function to switch home button and portfolio button layer

function home() {
    // var x = document.getElementById("position");
    // if (x.style.display === "none") {
    //   x.style.display = "block";
    // } else {
    //   x.style.display = "none";
    // }
    const boxArea = document.querySelector('.box-area');
    const boxArea2 = document.querySelector('.box-area2');

    if (boxArea.style.display == 'none') {
        boxArea.style.display = 'block';
        boxArea2.style.display = 'none';
    } else {
        boxArea2.style.display = 'block';
        boxArea.style.display = 'none';
    } 

}