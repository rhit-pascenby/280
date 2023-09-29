var num = -1;
var name;
var image;
// var desc;
main = function(){
    
    console.log("Ready!");

    document.querySelector("#selectButton").onclick = (event) =>{
        num = num + 1;
        console.log(num);
        if (num == 1){
            console.log("test");
            num=-1;
            name = `Hedwig`;
            image = `images/Hedwig.jpg`;
            // desc = `We provide a mail and commercial services for Hogwarts`;
            updateView();
        }
        else{
            console.log("one")
        name = `Pigwidgeon`;
        image = `images/pigwidgeon.png`;
        desc = `Pigwidgeon, also known as Pig, was Ron Weasley's first pet owl. He was a miniature scops owl. Pig was responsible for the handling of Ron's mail starting in 1994, he was a gift from Sirius Black after the loss of Ron's pet rat.`;

        console.log("decrement!");
        console.log(num);
        updateView();}
    }

    // document.querySelector("#resetButton").onclick = (event) =>{
    //     counter = 0;
    //     console.log("reset!");
    //     updateView();
    // }

    // document.querySelector("#incrementButton").onclick = (event) =>{
    //     counter = counter + 1;
    //     console.log("increment!");
    //     updateView();
    // }

    // document.querySelector("#purpleButton").onclick = (event) =>{
    //     color = '#800080'
    //     c_name = 'Purple'
    //     console.log(color);
    //     updateView();
    // }
    // document.querySelector("#blueButton").onclick = (event) =>{
    //     color = "#0000ff"
    //     c_name = 'blue'
    //     console.log(color);
    //     updateView();
    // }
    // document.querySelector("#redButton").onclick = (event) =>{
    //     color = '#FF0000'
    //     c_name = 'Red'
    //     console.log(color);
    //     updateView();
    // }
    // document.querySelector("#greenButton").onclick = (event) =>{
    //     color = '#008000'
    //     c_name = 'Green';
    //     console.log(color);
    //     updateView();
    // }
}

updateView = function(){
  
   
        document.querySelector("#owl_name").innerHTML = `${name}`;
        document.querySelector('#owl_pic').src = `${image}`;
        // document.querySelector("#description").innerHTML = `${desc}`;
 
    
   
        // console.log("zerp");
        // document.querySelector("#owl_name").innerHTML = `Hedwig`;
        // document.querySelector('#owl_pic').src = `images/Hedwig.jpg`;
        // document.querySelector("#description").innerHTML = `hedwig text`;
    
   
    // document.querySelector("#counterText").innerHTML = ` ${counter}`
    // favoriteColorBox.style.backgroundColor = color;
    // document.querySelector("#favoriteColorBox").innerHTML = c_name;
}


main();