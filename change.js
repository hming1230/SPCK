const inputname = document.querySelector('#name');
const inputprice = document.querySelector('#price');
const inputimage = document.querySelector('#image');
const inputid = document.querySelector('#ID');
const btn = document.querySelector(".btn");
const back = document.querySelector(".back1");
const deletebtn = document.querySelector(".delete")

btn.addEventListener('click', () => {
    const nameValue = inputname.value;
    const priceValue = inputprice.value;
    const imageValue = inputimage.value;
    const id = inputid.value;

    fetch(`https://657e76623e3f5b189463bb26.mockapi.io/project/special-package/${id}`, {
        method: 'PUT', // or PATCH
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            name: nameValue,    
            price: priceValue,
            image: imageValue,
            completed: true
        })
    })
    .then(res => {
        if (res.ok) {
            return res.json();
        }
        throw new Error('Network response was not ok.');
    })
    .then(updatedTask => {
        // Do something with the updated task
        console.log(updatedTask);
        window.location.href = "./index.html"
    })
    .catch(error => {
        // Handle error
        console.error('There was a problem with the fetch operation:', error);
    });
});

deletebtn.addEventListener('click', () => {
    const id = inputid.value;

    fetch(`https://657e76623e3f5b189463bb26.mockapi.io/project/special-package/${id}`, {
        method: 'DELETE'
    })
    .then(res => {
        if (res.ok) {
            return res.json();
        }
        throw new Error('Network response was not ok.');
    })
    .then(() => {
        // Do something after successful deletion
        console.log(`Item with ID ${id} deleted.`);
        window.location.href = "./index.html";
    })
    .catch(error => {
        // Handle error
        console.error('There was a problem with the fetch operation:', error);
    });
});

back.addEventListener('click',
    (a)=>{
        a.preventDefault()
        window.location.href = "./index.html"
    }
)

