const boxArea = document.querySelector('.box-area');
const boxArea2 = document.querySelector('.box-area2');

const contactArea = document.querySelector('.contactContainer');
const me = document.querySelector('.me');


// home toggle

function home() {

    const aboutArea = document.querySelector('.tabContainer');
    const contactArea = document.querySelector('.contactContainer');
    
    boxArea.style.display = 'block';
    boxArea2.style.display = 'none';
    me.style.display = 'block';
    contactArea.style.display = 'none';
    aboutArea.style.display = 'none';
}

$(function () {
    $("#nav-contactarea").load("contact.html");

})


// placement of about & contact panel

$(function () {
    $("#nav-viewarea").load("about.html");

});

//  function to switch about panel on/off
function about() {
    const aboutArea = document.querySelector('.tabContainer');
    const contactArea = document.querySelector('.contactContainer');
    const me = document.querySelector('.me');

    if (aboutArea.style.display == 'block') {
        contactArea.style.display = 'none';
        aboutArea.style.display = 'none';
        me.style.display = 'block'
    } else {
        aboutArea.style.display = 'block';
        me.style.display = 'none';
        contactArea.style.display = 'none';
    }

}

// function toggle contact panel

function contact() {
    const contactArea = document.querySelector('.contactContainer');
    const aboutArea = document.querySelector('.tabContainer');
    const me = document.querySelector('.me');

    if (contactArea.style.display == 'block') {
        contactArea.style.display = 'none';
        me.style.display = 'block'
        aboutArea.style.display = 'none';
    } else {
        contactArea.style.display = 'block';
        me.style.display = 'none';
        aboutArea.style.display = 'none';
    }

}

// function to switch home button and portfolio button layer

function portfolio() {

    const navArea = document.querySelector('.tabContainer');

    if (boxArea.style.display == 'none') {
        boxArea.style.display = 'block';
        boxArea2.style.display = 'none';
        navArea.style.display = 'none';
        me.style.display = 'block'
    } else {
        boxArea2.style.display = 'block';
        boxArea.style.display = 'none';
        navArea.style.display = 'none';
        me.style.display = 'block'
    }

}