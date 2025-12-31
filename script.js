

 let a=87,b=68,c=79,d=86,e=78;

 
if (
    a >= 0 && a <= 100 &&
    b >= 0 && b <= 100 &&
    c >= 0 && c <= 100 &&
    d >= 0 && d <= 100 &&
    e >= 0 && e <= 100
){

 let total=a+b+c+d+e;

 console.log(total);

 let avg=total/5;
 console.log(avg);

 if(avg>=90){
    console.log("Grade A+");
 }
   else if(avg>=80){
    console.log("Grade A");
   }
    else if(avg>=70){
    console.log("Grade B");
   }
    else if(avg>=60){
    console.log("Grade C");
   }
    else if(avg>=50){
    console.log("Grade D");
   }
   else {
    console.log("Grade F");
   }

}

 

