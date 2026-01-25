const url = "https://quoteslate.vercel.app/api/quotes/random";
// let proimse = fetch(url);
// console.log(proimse);
const para = document.querySelector("#para");
const btn = document.querySelector("#btn");
let getimg = async () => {
    console.log("getting image");
    let response = await fetch(url);
    console.log(response);
    console.log(response.status);
    let data = await response.json();
    para.innerText = data.text;
};
btn.addEventListener("click" , getimg);

// fetch api provides an interface for fetching(sending/receiving ) resources 
// it uses request and response obj  the fetch() method is used to fetch the resources(data)
// let promise = fetch(url, [options]);
// json is javascript object notation this method returns a second proimse that resolves with the result parsing the response body text at json
// request and response --> https verbs and response status code 
// heep response headers also contain details also the response such as content type , http and status code 

