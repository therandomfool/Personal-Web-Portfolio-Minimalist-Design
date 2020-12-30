var boxArea = document.querySelector('.box-area');
var boxArea2 = document.querySelector('.box-area2');
var aboutArea = document.querySelector('.aboutContainer');
var contactArea = document.querySelector('.contactContainer');

var linkedinArea = document.querySelector('.linkedinContainer');
var githubArea = document.querySelector('.githubContainer');
var buttonContainer = document.querySelector('.buttonContainer');
var tabPanels = document.querySelectorAll('.tabPanel');
var btns = document.querySelectorAll('button');

var me = document.querySelector('.me');


// initial button animation 
// buttonview
setTimeout(function(){
    document.getElementById('buttonview').style.visibility = "visible";
    },3000);

// placement of panels

// $(function () {
//     $("#nav-viewarea").load("about.html");
//     $("#nav-contactarea").load("contact.html");
//     $("#nav-linkedinarea").load("linkedin.html");
// });

// home toggle

function home() {
    var boxArea = document.querySelector('.box-area');
    var boxArea2 = document.querySelector('.box-area2');
    var linkedinArea = document.querySelector('.linkedinContainer');
    var githubArea = document.querySelector('.githubContainer');
    var aboutArea = document.querySelector('.aboutContainer');
    var contactArea = document.querySelector('.contactContainer');

    boxArea.style.display = 'block';
    boxArea2.style.display = 'none';
    me.style.display = 'block';
    contactArea.style.display = 'none';
    aboutArea.style.display = 'none';
    linkedinArea.style.display = 'none';
    githubArea.style.display = 'none';
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
    // const contactArea = document.querySelector('.contactContainer');
    // const aboutArea = document.querySelector('.aboutContainer');
    // var linkedinArea = document.querySelector('.linkedinContainer');
    // const me = document.querySelector('.me');
    // var githubArea = document.querySelector('.githubContainer');

    if (aboutArea.style.display == 'block') {
        aboutArea.style.display = 'none';
        contactArea.style.display = 'none';
        me.style.display = 'none'
        linkedinArea.style.display = 'none';
        githubArea.style.display = 'none';
    } else {
        aboutArea.style.display = 'block';
        me.style.display = 'none';
        contactArea.style.display = 'none';
        linkedinArea.style.display = 'none';
        githubArea.style.display = 'none';
    }

}

// function toggle contact panel

function contact() {
    // const contactArea = document.querySelector('.contactContainer');
    // const aboutArea = document.querySelector('.aboutContainer');
    // const me = document.querySelector('.me');
    // var githubArea = document.querySelector('.githubContainer');

    if (contactArea.style.display == 'block') {
        contactArea.style.display = 'none';
        aboutArea.style.display = 'none';
        me.style.display = 'none'
        linkedinArea.style.display = 'none';
        githubArea.style.display = 'none';
    } else {
        contactArea.style.display = 'block';
        me.style.display = 'none';
        aboutArea.style.display = 'none';
        linkedinArea.style.display = 'none';
        githubArea.style.display = 'none';
    }

}

// function to switch linkedin panel
function linkedin() {
    // const contactArea = document.querySelector('.contactContainer');
    // const aboutArea = document.querySelector('.aboutContainer');
    // const me = document.querySelector('.me');
    // const linkedinArea = document.querySelector('.linkedinContainer');

    if (linkedinArea.style.display == 'block') {
        linkedinArea.style.display = 'none';
        me.style.display = 'block'
        aboutArea.style.display = 'none';
        contactArea.style.display = 'none';
        githubArea.style.display = 'none';
    } else {
        linkedinArea.style.display = 'block';
        me.style.display = 'none';
        aboutArea.style.display = 'none';
        contactArea.style.display = 'none';
        githubArea.style.display = 'none';
    }

}

// function to switch github panel
function github() {
    // const contactArea = document.querySelector('.contactContainer');
    // const aboutArea = document.querySelector('.aboutContainer');
    // const me = document.querySelector('.me');
    // const linkedinArea = document.querySelector('.linkedinContainer');

    if (githubArea.style.display == 'block') {
        githubArea.style.display = 'none';
        me.style.display = 'block'
        aboutArea.style.display = 'none';
        contactArea.style.display = 'none';
        linkedinArea.style.display = 'none';
    } else {
        githubArea.style.display = 'block';
        me.style.display = 'none';
        aboutArea.style.display = 'none';
        contactArea.style.display = 'none';
        linkedinArea.style.display = 'none';
    }

}
// function to switch home button and portfolio button layer

function portfolio() {

    const aboutArea = document.querySelector('.aboutContainer');
    const contactArea = document.querySelector('.contactContainer');
    const me = document.querySelector('.me');

    if (boxArea.style.display == 'none') {
        boxArea.style.display = 'block';
        boxArea2.style.display = 'none';
        contactArea.style.display = 'none';
        aboutArea.style.display = 'none';
        linkedinArea.style.display = 'none';
        githubArea.style.display = 'none';
        me.style.display = 'block'
    } else {
        boxArea2.style.display = 'block';
        boxArea.style.display = 'none';
        contactArea.style.display = 'none';
        aboutArea.style.display = 'none';
        linkedinArea.style.display = 'none';
        githubArea.style.display = 'none';
        me.style.display = 'block'
    }

}

