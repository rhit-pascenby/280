
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

    document.querySelector("#orangeButton").onclick = (event) =>{
        color = '#FFA500'
        console.log(color);
        updateView();
    }
    document.querySelector("#redButton").onclick = (event) =>{
        color = '#FF0000'
        console.log(color);
        updateView();
    }
    document.querySelector("#greenButton").onclick = (event) =>{
        color = '	#7CFC00'
        console.log(color);
        updateView();
    }
}

updateView = function(){
    document.querySelector("#counterText").innerHTML = ` ${counter}`
    favoriteColorBox.style.backgroundColor = color;
    document.querySelector("#favoriteColorBox").innerHTML = color
}
let counter = 0;

var color = '#800000';
main();