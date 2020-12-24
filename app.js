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


    // if (boxArea.style.display = 'block') {
    //     boxArea.setAttribute('id', 'off')
    //     boxArea2.setAttribute('id', 'on')

    // } else {

    //     boxArea2.setAttribute('id', 'off')
    //     boxArea.setAttribute('id', 'on')
    // }

}