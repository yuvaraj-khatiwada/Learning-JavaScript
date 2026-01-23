let promise1 = new Promise((resolve, reject) => {
    console.log("i am a promies");
    resolve("success");
})
function getData(dataId, getNextData) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("Data" , dataId);
            resolve("success");
            if(getNextData) {
                getNextData();
            }
        }, 5000);
    });
}
// javascript promise can be pending : result is undefined , resolved : result is value (fulfilled)
// rejected : reuslt is an error . promise has state pending , fulfilled and some result ie. result for resolve etc
// let promise = getData(123); we give this in console to see output
// here before 5 sec of printing data 123 it will show pending but after 5sec it will success 
