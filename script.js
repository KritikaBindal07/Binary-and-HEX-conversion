let button= document.getElementById("button");

display =() =>{

    p1.innerHTML = "Binary format: " + " "

    p2.innerHTML = "HEX format: " + " "

    let value= document.getElementById("number").value;
    let value1= parseInt(value)
    
    let value2= parseInt(value)

    //check prime number

    var c=0;
    para1= document.getElementById("para")

    if(value%1==0){
        


        for(i=2; i< value1; i++){
            if(value1%i == 0){
                c=c+1;
            
            }
           
            
            
        }
        if(c==0 && value1!=""){
            console.log("It’s a prime number")
            para1= document.getElementById("para")
            para1.innerHTML = "It’s a prime number"
    
        }
        if(c>0 && value1!=0){
            console.log("It’s not a prime number")
            para1= document.getElementById("para")
            para1.innerHTML = "It’s not a prime number"
         
        }
       
    }
    
    else{
        para1.innerHTML=" "
    }

   
    //decimal to binary conversion
    var binary= new Array()
    var i=0;
    p1= document.getElementById("p1")
    while(value1>=1){
        binary[i] = value1%2; 
        value1 = Math.trunc(value1/2);
        i++;

    }
    for(j=i-1;j>=0;j--){
        p1.innerHTML += binary[j] 

    }


    // to hexadecimal
    var hex= new Array()
    var k=0;
    p2= document.getElementById("p2")
    
    while(value2>0){
        hex[k]= value2%16;
        value2 = Math.trunc(value2/16)
        k++;

    } 

    
    for(l=k-1;l>=0;l--){
        if(hex[l]== 10 ){
            hex[l] = "A"
    
        }
        if(hex[l]== 11 ){
            hex[l] = "B"
    
        }
        if(hex[l]== 12 ){
            hex[l] = "C"
    
        }
        if(hex[l]== 13 ){
            hex[l] = "D"
    
        }
        if(hex[l]== 14 ){
            hex[l] = "E"
    
        }
        if(hex[l]== 15 ){
            hex[l] = "F"
    
        }

        p2.innerHTML += hex[l]
    }

    //for decimal points in binary

    decimal_value= document.getElementById("number").value
    var n=0
    decimal =  decimal_value%1
    b = decimal*2;
    
    if(decimal_value%1 !=0){
        trunc = Math.trunc(b)
   
        p1.innerHTML += "." + trunc
        while(n<=10){
           
            decimal = b%1
            b = decimal*2;
            
            trunc = Math.trunc(b)
            p1.innerHTML +=  trunc
            n++
            
    
        }

    }

    //for decimal point conversion in hexadecimal

    decimal_value1= document.getElementById("number").value
    var m=0
    decimal_hex =  decimal_value1%1
    d = decimal_hex*16;
    
    if(decimal_value1%1 !=0){
        trunc1 = Math.trunc(d)

        if(trunc1== 10 ){
            trunc1 = "A"
    
        }
        if(trunc1== 11 ){
            trunc1 = "B"
    
        }
        if(trunc1== 12 ){
            trunc1 = "C"
    
        }
        if(trunc1== 13 ){
            trunc1 = "D"
    
        }
        if(trunc1== 14 ){
            trunc1 = "E"
    
        }
        if(trunc1== 15 ){
            trunc1 = "F"
    
        }
   
        p2.innerHTML += "." + trunc1

        
        while(m<=10){
           
            
            decimal_hex = d%1
            d = decimal_hex*16;
            
            trunc1 = Math.trunc(d)

            if(trunc1== 10 ){
                trunc1 = "A"
        
            }
            if(trunc1== 11 ){
                trunc1 = "B"
        
            }
            if(trunc1== 12 ){
                trunc1 = "C"
        
            }
            if(trunc1== 13 ){
                trunc1 = "D"
        
            }
            if(trunc1== 14 ){
                trunc1 = "E"
        
            }
            if(trunc1== 15 ){
                trunc1 = "F"
        
            }

            p2.innerHTML +=  trunc1
            
            m++
            
        }

    }

}

button.addEventListener("click",display);

