//  let p1 = new Promise((resolve , reject)=>{
//    setTimeout(()=>{
//      console.log("resolved after 2 seconds")
//      resolve(56)
//    },2000)
//  })

// p1.then((value)=>{
//   console.log(value)
//   let p2 = new Promise((resolve , reject)=>{
//     setTimeout(()=>{
//       resolve("promise 2")
//     },2000)
//   })
//   return p2
// }).then((value)=>{
//   console.log("we are done")
//   // return 2
// }).then((value)=>{
//   console.log("now we are pakka done")
// })



// LoadScript function
const loadScript = (src) =>{
  return new Promise(resolve =>{
  let script = document.createElement("script")
  script.src = src
  document.body.appendChild(script)
  script.onload = () =>{
    resolve(1)
  }
    script.onerror = () =>{
      reject(0)
    }
    })
}
let p1 = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1")
p1.then((value)=>{
  console.log(value)
  
}).catch((error) =>{
  console.log("we are sorry but we are having problems loading this script")
})