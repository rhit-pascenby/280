
main = function(){
    
    console.log("Ready!");

    document.querySelector("#decrementButton").onclick = (event) =>{
        counter = counter - 1;
        console.log("decrement!");
        updateView();
    }

    document.querySelector("#resetButton").onclick = (event) =>{
        counter = 0;
        console.log("reset!");
        updateView();
    }

    document.querySelector("#incrementButton").onclick = (event) =>{
        counter = counter + 1;
        console.log("increment!");
        updateView();
    }

    document.querySelector("#purpleButton").onclick = (event) =>{
        color = '#800080'
        c_name = 'Purple'
        console.log(color);
        updateView();
    }
    document.querySelector("#blueButton").onclick = (event) =>{
        color = "#0000ff"
        c_name = 'blue'
        console.log(color);
        updateView();
    }
    document.querySelector("#redButton").onclick = (event) =>{
        color = '#FF0000'
        c_name = 'Red'
        console.log(color);
        updateView();
    }
    document.querySelector("#greenButton").onclick = (event) =>{
        color = '#008000'
        c_name = 'Green';
        console.log(color);
        updateView();
    }
}

updateView = function(){
    document.querySelector("#counterText").innerHTML = ` ${counter}`
    favoriteColorBox.style.backgroundColor = color;
    document.querySelector("#favoriteColorBox").innerHTML = c_name;
}
let counter = 0;
var c_name = 'null';
var color = '#800000';
main();