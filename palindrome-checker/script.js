const input = document.getElementById("input");
const result = document.getElementById("result");


const reverseString =(str)=>{
    return str.split("").reverse().join("");
};

const clearResult = () => {
  result.textContent = "";
};

const check=()=>{
      const value = input.value.trim().toLowerCase();
      const reverse = reverseString(value);
    if(value === ""){
        result.textContent = "Type something";
        return;
    }

    if(value === reverse){
        result.textContent = "Its a PALINDROME";
        
        
    }else{

         result.textContent = "No its not a PALINDROME";
        
    }
    input.value ="";
    
};