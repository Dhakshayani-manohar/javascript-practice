const body = document.querySelector("body");

  

 const  setColor=(name) => {
    
     body.style.backgroundColor = name ;

 }

    const randomColor = () => {

    // rgb = 0 0 0 = black
    // rgb = 255 255 255 = white

    //  for creating random color we have multiple values within 0 to 255
    // math round function used to round of the floating values

    const red = Math.round(Math.random() * 255);
    const green = Math.round(Math.random() * 255);
    const blue = Math.round(Math.random() * 255);

    const color = `rgb(${red} , ${green}, ${blue})`

    body.style.backgroundColor = color;

    

 }