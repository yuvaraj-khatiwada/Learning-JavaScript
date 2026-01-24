// async function always returns a promise 
// await pauses the execution of its surrounding async 
// function until the promise is settled . await keyword is only used insid async funcion 
function api() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("weather data");
             resolve("success");
        },1000);
       
    });
}
async function getWeatherdata() {
    await api(); // 1st call 
    await api(); // 2nd call
}
getWeatherdata();

function getData(dataId) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("data " ,dataId);
            resolve("success");
        } , 2000);
    });
}
console.log("getting data 1");
async function getAllData() {
    await getData(1); 
    console.log("getting data 2");
    await getData(2);
    console.log("getting data 3");
    await getData(3);
    console.log("getting data 4");
    await getData(4);
    console.log("getting data 5");
    await getData(5);
    console.log("getting data 6");
    await getData(6);
}
// this is advance javascript concept iife that runs immediatley we dont have to call function but runs only one time 
// (async function() {
//     await getData(1); 
//     console.log("getting data 2");
//     await getData(2);
//     console.log("getting data 3");
//     await getData(3);
//     console.log("getting data 4");
//     await getData(4);
//     console.log("getting data 5");
//     await getData(5);
//     console.log("getting data 6");
//     await getData(6);
// }) ();
getAllData();

// this is very easy among promise and callback hell so we mostly use async await 