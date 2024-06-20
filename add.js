const btn = document.querySelector('.btn')
const back = document.querySelector('.back')
const inputname = document.querySelector ('#name')
// const inputdiscription =  document.querySelector ('#discription')
const inputprice = document.querySelector ('#price')
const inputimage = document.querySelector ('#image')

btn.addEventListener('click',
(e) =>{
   e.preventDefault()
const nameValue = inputname.value 
// const discriptionValue = inputdiscription.value
const priceValue = inputprice.value
const imageValue = inputimage.value

 
newTask= {
   name: nameValue,
//    discription: discriptionValue,
   price: priceValue,
   image: imageValue

}

  fetch('https://657e76623e3f5b189463bb26.mockapi.io/project/place', {
    method: 'POST',
    headers: {'content-type':'application/json'},
    // Send your data in the request body as JSON
    body: JSON.stringify(newTask)
  }).then(res => {
    if (res.ok) {
        return res.json();
    }
 
    // handle error
  }).then(task => {       window.location = "./index.html"

  
  }).catch(error => {
    // handle error
  })
;


})  
back.addEventListener("click",
(back)=>{
    back.preventDefault();
    window.location = "./index.html"
}
)