// let promiseOne = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("issue resolved")
//         resolve()
//     },1000)
// })
// promiseOne.then(function(){
//     console.log("async")
// })


// new Promise(function(resolve,reject){
//     setTimeout(function () {
//         console.log("resolved 1")
//         resolve()
//     },1000)
// }).then(function(){
//     console.log("async 2")
// })


// let PromiseThree =new Promise(function(resolve,reject){
//     setTimeout(function () {
//         console.log("resolved 1")
//         resolve({ name : "faizan" , email: "faizan@gmail"})
//     },1000)
// })
// PromiseThree.then(function(user){
//     console.log(user)
// })


// let promiseFour =new Promise(function(resolve,reject){
//     setTimeout(function () {
//         let error = false
//         if( ! error){
//             resolve({ username : "faizan" , email: "faizan@gmail"})
//         }
//         else{
//             reject("error : error is discoverd")
//         }
        
//     },1000)
// })
// promiseFour.then((user)=>{
//     console.log(user);
//     return user.username
// }).then((username)=>{
//     console.log(username);
    
// }).catch(function(err){
//     console.log(err)

// }).finally(()=> {
//     console.log("promis is solved or failed")
// })



let promiseFive =new Promise(function(resolve,reject){
    setTimeout(function () {
        let error = false
        if( ! error){
            resolve({ username : "faizan" , email: "faizan@gmail"})
        }
        else{
            reject("error : error in java script discoverd")
        }
        
    },1000)
})

async function catchPromiseFive() {
        try {
            let result = await promiseFive
            console.log(result);
            
        } catch (error) {
            console.log("erorrr");
            
        }    
}
catchPromiseFive()


// async function getuser() {
//     try {
//     let userdata = await fetch("" )
//     let data =  userdata.json
//     console.log(data);
//     } catch (error) {
//         console.log("E : EROOR")
//     }

// }
// getuser()


fetch('')
.then((getuser)=>{
    return  getuser.json
}).then((data)=>{
    console.log(data);
    
}).catch((error)=>{
    console.log(error);
    
})