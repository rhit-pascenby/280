console.log("Script Loaded...");

function paint(color){
    console.log(color);
    const circle = document.getElementById('circleID');
    circle.style.backgroundColor = color;
    // = 'background-color:${color}';
    //^^this way was not working
    console.log(circle);
    
}