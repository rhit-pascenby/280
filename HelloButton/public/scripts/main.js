
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
}

updateView = function(){
    document.querySelector("#counterText").innerHTML = `Count = ${counter}`
}
let counter = 0;
main();