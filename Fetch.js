let url="https://www.bing.com/";
async function getfacts(){
    try{
        let  res1 =await fatch (url);
        let data1=await res1.json();
        console.log("data 1-",data1);

        let res2 =await fetch (url);
        let data2=await res2.json();
        console.log ("data 2-",data2);
    }catch(e){
        console.log("error;",e);
    }
}