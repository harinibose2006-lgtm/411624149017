console.log("A");
console.log("B");
console.log("C");
/*const promise = new Promise((resolve, reject) => {
    setTimeout(()=>{
        console.log("Hi")
    },2000)
    setTimeout(() => {
        resolve("Done");
    }, 0)
    const success = true;
    if(success){
        resolve("Done");
    } else {
        reject("No");
    }
});
promise
    .then(res => console.log(res))
    .catch(err => console.log(err));*/
    console.log(1)
    console.log(2)
    console.log("Hi")
    
    function example(){
        console.log("hello")
    }
    const examples =()=>{
        const a =3;
        const b =2;
        console.log(3+2);
    }
    setTimeout(examples(),3000)
    setTimeout(examples(),450)

    
