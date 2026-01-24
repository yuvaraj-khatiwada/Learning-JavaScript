const assynfnct1 = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("data 1");
            resolve("success");
        } , 4000);
        
    });
}
const assynfnct2 = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("data 2");
            resolve("found data")
        } , 4000);
        
    });
}
console.log("fetching data 1") ;
p1 = assynfnct1();
p1.then((res) => {
    console.log(res,"getting data 2");
    p2= assynfnct2();
    p2.then((res) => {
        console.log(res);
    });
})

// chain function here after 4 sec it will fetch data 1 and after 4 sec data 2 will be fethch 
















// const getPromise = () => {
//     return new Promise((resolve , reject) => {
//         console.log("I am a programmer");
//         resolve("success");
//         // reject ("networking error");
//     })
// }
// let promise = getPromise();
// promise.then( (res) => {
//     console.log("proimse fulfilled" ,res ); // here res carrys the data success
// })
// promise.catch((err) => {
//     console.log("error has occured" , err); // here err carrys the data networking error 
// })