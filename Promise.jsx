let Promise = new Promise((resolve,reject)=>{
    let success=true
    if(success){
        resolve("Data connected")
    }
    else{
        reject("error in connection")
    }

})

//consuming promise

fetch("https://jsonplaceholder.typicode.com/users")
.then(response=>response.json())//multiple then but one catch
.then(data => {
    let names = data.map(user => user.name);
    console.log(names);
})
.catch(error=>console.log(error))


//use effect   useEffect(()=>{},[])