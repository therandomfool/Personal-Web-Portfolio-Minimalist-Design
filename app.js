





// placement of about panel

$(function () {
    $("#nav-viewarea").load("about.html");
});

//  function to switch about panel on/off
function about(){
    const navArea = document.querySelector('.tabContainer');
    const me = document.querySelector('.me');

    if (navArea.style.display == 'block'){
        navArea.style.display = 'none';
        me.style.display ='block'
    } else {
        navArea.style.display = 'block';
        me.style.display = 'none';
    }
   
}

// function to switch home button and portfolio button layer

function home() {
   
    const boxArea = document.querySelector('.box-area');
    const boxArea2 = document.querySelector('.box-area2');
    const navArea = document.querySelector('.tabContainer');
    const me = document.querySelector('.me');

    if (boxArea.style.display == 'none') {
        boxArea.style.display = 'block';
        boxArea2.style.display = 'none';
        navArea.style.display = 'none';
        me.style.display ='block'
    } else {
        boxArea2.style.display = 'block';
        boxArea.style.display = 'none';
        navArea.style.display = 'none';
        me.style.display ='block'
    } 

}