//  arr.forEach( callBackFunction) ;
//callbakc function : here, it is a function to execute for each element in the array 
//A callback is a function passed as an argument to another function
// this is only used for array not string 

arr = ['kathmandu' , 'bhaktapur', 'lalitpur', 'kaver'];

arr.forEach((city , index , arr)  => {
    console.log(city.toUpperCase(), index, arr);
});

// Q . what are higher order function or method 
// those those which take parameter as other function or reutn like foreach function 
