//Globle scope==variable declare outside the function.

/*let globlevar ="i am global";
function showgloblevar(){
    console.log(globlevar);
}
  showgloblevar();
  console.log(showgloblevar);*/

  //Function scope= a variable declare inside the functionit is called function scope

 /* function myfunction(){
    var functionscope="i am inside a function";
    console.log(functionscope);
  }
    myfunction();
   // console.log(myfunction);*/


    //3)  Block scope= variable declare with const and let are block scope meaning they are  only acessable within the block{}where they are defined

    /*{
        let blockscope ="i am inside a block";
        const alsoBlockScope="me too!";
        console.log(blockscope);
        console.log(alsoBlockScope);
    }*/
       //4)  Lexicaal scope=  A function can access a variables from its outer function or block due to lexical scope.

        function outerfunction(){
            let outervar = "I am outer";
            function  innerfunction(){
                console .log(outervar);
            }
            innerfunction();
        }
          outerfunction();


          //5)Module Scope=  when using  module  ,variable defined within a module are scoped to that module and not accessible globally.

          //mymodule.js
          /*let moduleScope ="I am in a module ";
          export default moduleScope;

          import moduleScope  from './myModule.js';
          console.log(moduleScope);*/

          //6) Dynamic scope with this=  the value of this depends on how a function is called ,which can lead to dynamic scope-like behavior.
            
          /*const obj = {
            value: "i am Object";
            showThis (){
                console.log ("this.value");
            },

            };
           Object.showThis();
           const datached= "object showThis";
           datached();*/
          
  