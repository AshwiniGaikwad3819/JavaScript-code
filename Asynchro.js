//in Asynchronous programming tasks can run independently of the main program flow. the program does not wait for a  task to finish and can continue executing other tasks while waiting for an asynchronous operation to complete

//using setTimeout
  /*console.log("Task 1: Start");
   setTimeout(()=>{
    console.log("Task 2: Delayed");
   },3000);
    console.log("Task 3:  End");*/

     // using promises
      // console.log("Task 1: Start");

      /*  const asyncTask =new  Promise((resolve) =>{
            setTimeout(() =>{
                resolve("Task 2: Resolved");

            },2000);
 });
  asyncTask.then ((message) =>console.log(message));
  console.log("Task 3:End");*/

  //using Async /Await(Asynchronous)

  async function asyncExample(params) {
    console.log("Task 1: Start");
    const asyncTask = new Promise((resolve) =>{
        setTimeout(()=>{
            resolve("Tesk 2: Awaited");
        },2000);

        });
        const result = await asyncTask;
        console.log(result);

        console.log("Task 3:End");

    }
    asyncExample();
    
  