const boxArea = document.querySelector('.box-area');
const boxArea2 = document.querySelector('.box-area2');
const aboutArea = document.querySelector('.tabContainer');
const contactArea = document.querySelector('.contactContainer');

const linkedinArea = document.querySelector('.linkedinContainer');
const buttonContainer = document.querySelector('.buttonContainer');
const tabPanels = document.querySelectorAll('.tabPanel');

const btns = document.querySelectorAll('button');
const me = document.querySelector('.me');

// placement of panels

$(function () {
    $("#nav-viewarea").load("about.html");
    $("#nav-contactarea").load("contact.html");
    $("#nav-linkedinarea").load("linkedin.html");
});

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

// tab button navigation

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        buttonContainer.querySelector('.active').classList.remove('active');
        btn.classList.add('active');

        tabPanels.forEach(tab => {
            const dataAttr = btn.getAttribute('data-target');

            if (tab.id === dataAttr) {
                linkedinArea.querySelector('.tabPanel.active').classList.remove('active')
                tab.classList.add('active');
            }
        })
    });
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

    const aboutArea = document.querySelector('.tabContainer');
    const contactArea = document.querySelector('.contactContainer');
    const me = document.querySelector('.me');

    if (boxArea.style.display == 'none') {
        boxArea.style.display = 'block';
        boxArea2.style.display = 'none';
        contactArea.style.display = 'none';
        aboutArea.style.display = 'none';
        me.style.display = 'block'
    } else {
        boxArea2.style.display = 'block';
        boxArea.style.display = 'none';
        contactArea.style.display = 'none';
        aboutArea.style.display = 'none';
        me.style.display = 'block'
    }

}