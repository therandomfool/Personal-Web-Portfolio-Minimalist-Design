// buttons selection
var boxArea = document.querySelector('.box-area');
var boxArea2 = document.querySelector('.box-area2');

// about panel selection
var aboutArea = document.querySelector('.aboutContainer');

// contact panel selection
var contactArea = document.querySelector('.contactContainer');

// linkedin panel selection
var linkedinArea = document.querySelector('.linkedinContainer');
var buttonContainer = document.querySelector('.buttonContainer');
var tabPanels = document.querySelectorAll('.tabPanel');
var btns = document.querySelectorAll('button');

// github panel selection
var githubArea = document.querySelector('.githubContainer');
var me = document.querySelector('.me');

// javascript selection
var javascriptArea = document.querySelector('.javascriptSection');
// java selection
var javaArea = document.querySelector('.javaSection');

// react selection
var reactArea = document.querySelector('.reactSection');

// p5.js selection
var p5jsArea = document.querySelector('.p5jsSection');

// css selection
var cssArea = document.querySelector('.cssSection');

// wordpress selection
var wordpressArea = document.querySelector('.wordpressSection');





// initial button animation 
// buttonview
// setTimeout(function(){
//     document.getElementById('buttonview').style.visibility = "visible";
//     },3000);

// placement of panels

// $(function () {
//     $("#nav-viewarea").load("about.html");
//     $("#nav-contactarea").load("contact.html");
//     $("#nav-linkedinarea").load("linkedin.html");
// });

// home toggle

function home() {
    // var boxArea = document.querySelector('.box-area');
    // var boxArea2 = document.querySelector('.box-area2');
    // var linkedinArea = document.querySelector('.linkedinContainer');
    // var githubArea = document.querySelector('.githubContainer');
    // var aboutArea = document.querySelector('.aboutContainer');
    // var contactArea = document.querySelector('.contactContainer');

    boxArea.style.display = 'block';
    boxArea2.style.display = 'none';
    me.style.display = 'block';
    contactArea.style.display = 'none';
    aboutArea.style.display = 'none';
    linkedinArea.style.display = 'none';
    githubArea.style.display = 'none';
    javascriptArea.style.display = 'none';
    javaArea.style.display = 'none';
    cssArea.style.display = 'none';
    reactArea.style.display = 'none';
    p5jsArea.style.display = 'none';
    wordpressArea.style.display = 'none';
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

    if (aboutArea.style.display == 'grid') {
        aboutArea.style.display = 'none';
        contactArea.style.display = 'none';
        me.style.display = 'none'
        linkedinArea.style.display = 'none';
        githubArea.style.display = 'none';
    } else {
        aboutArea.style.display = 'grid';
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

// javascript panel function
function javascript() {

    if (javascriptArea.style.display == 'flex') {

        javascriptArea.style.display = 'none';
        javaArea.style.display = 'none';
        cssArea.style.display = 'none';
        reactArea.style.display = 'none';
        p5jsArea.style.display = 'none';
        wordpressArea.style.display = 'none';
        me.style.display = 'none';
    } else {
        javascriptArea.style.display = 'flex';
        javaArea.style.display = 'none';
        cssArea.style.display = 'none';
        reactArea.style.display = 'none';
        p5jsArea.style.display = 'none';
        wordpressArea.style.display = 'none';
        me.style.display = 'none';
    }
}

// java panel function
function java() {

    if (javaArea.style.display == 'flex') {
        javaArea.style.display = 'none';
        javascriptArea.style.display = 'none';
        cssArea.style.display = 'none';
        reactArea.style.display = 'none';
        p5jsArea.style.display = 'none';
        wordpressArea.style.display = 'none';
        me.style.display = 'none';
    } else {
        javaArea.style.display = 'flex';
        javascriptArea.style.display = 'none';
        cssArea.style.display = 'none';
        reactArea.style.display = 'none';
        p5jsArea.style.display = 'none';
        wordpressArea.style.display = 'none';
        me.style.display = 'none';
    }
}

// css panel function
function css() {

    if (cssArea.style.display == 'flex') {
        cssArea.style.display = 'none';
        javaArea.style.display = 'none';
        javascriptArea.style.display = 'none';
        reactArea.style.display = 'none';
        p5jsArea.style.display = 'none';
        wordpressArea.style.display = 'none';
        me.style.display = 'none';
    } else {
        cssArea.style.display = 'flex';
        javaArea.style.display = 'none';
        javascriptArea.style.display = 'none';
        reactArea.style.display = 'none';
        p5jsArea.style.display = 'none';
        wordpressArea.style.display = 'none';
        me.style.display = 'none';
    }
}

// react panel function
function react() {

    if (reactArea.style.display == 'flex') {
        reactArea.style.display = 'none';
        cssArea.style.display = 'none';
        javaArea.style.display = 'none';
        javascriptArea.style.display = 'none';
        p5jsArea.style.display = 'none';
        wordpressArea.style.display = 'none';
        me.style.display = 'none';
    } else {
        reactArea.style.display = 'flex';
        cssArea.style.display = 'none';
        javaArea.style.display = 'none';
        javascriptArea.style.display = 'none';
        p5jsArea.style.display = 'none';
        wordpressArea.style.display = 'none';
        me.style.display = 'none';
    }
}

// p5js panel function
function p5js() {

    if (p5jsArea.style.display == 'flex') {
        p5jsArea.style.display = 'none';
        reactArea.style.display = 'none';
        cssArea.style.display = 'none';
        javaArea.style.display = 'none';
        javascriptArea.style.display = 'none';
        wordpressArea.style.display = 'none';
        me.style.display = 'none';
    } else {
        p5jsArea.style.display = 'flex';
        reactArea.style.display = 'none';
        cssArea.style.display = 'none';
        javaArea.style.display = 'none';
        javascriptArea.style.display = 'none';
        wordpressArea.style.display = 'none';
        me.style.display = 'none';
    }
}

// react panel function
function wordpress() {

    if (wordpressArea.style.display == 'flex') {
        wordpressArea.style.display = 'none';
        reactArea.style.display = 'none';
        cssArea.style.display = 'none';
        javaArea.style.display = 'none';
        javascriptArea.style.display = 'none';
        p5jsArea.style.display = 'none';
        me.style.display = 'none';
    } else {
        wordpressArea.style.display = 'flex';
        reactArea.style.display = 'none';
        cssArea.style.display = 'none';
        javaArea.style.display = 'none';
        javascriptArea.style.display = 'none';
        p5jsArea.style.display = 'none';
        me.style.display = 'none';
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