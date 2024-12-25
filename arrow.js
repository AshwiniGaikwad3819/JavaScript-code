// Symple Arrow function //

//1)
  const great= ()=> 
    console.log("Ashwini,omkar,priyanka") ;
  great();

/*
   1) great= function
   2)()=  is a paramitar
   3)console.log = print value
   4) great()= call function
   */

   //2)

    const seyHello = () =>
    console.log("123444");
    seyHello();  
    
                    //Multipal pRmitars//
//1)
     const Hii =( a,b) => a*b;
     console.log(Hii(12,13));
     console.log ("The End is Begning"); 
     
  //2)
       const ram =(a,b) => a+b;
       console.log(ram(10,20));


          //single paramiter//

       //1)
          
     const squre = (x) => x*x;
     console.log(squre(5));


     //2) 
     const sita=(w) => w*w/w-w+w;
     console.log( sita(100));


              //Multiline function//

    //1)
      const achive=(name) =>{
        const message= 'Hello,${name}!';
        return message;
      };   
      console.log(achive("Ashwini"));    