const btn = document.querySelector('.btn');
const back = document.querySelector('.back');
const inputName = document.querySelector('#name');
const inputPrice = document.querySelector('#price');
const inputImage = document.querySelector('#image');

btn.addEventListener('click', (e) => {
  e.preventDefault();
  
  const nameValue = inputName.value;
  const priceValue = inputPrice.value;
  const imageValue = inputImage.value;

  const newTask = {
    name: nameValue,
    price: priceValue,
    image: imageValue
  };

  fetch('https://657e76623e3f5b189463bb26.mockapi.io/project/special-package', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newTask)
  })
    .then(res => {
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      return res.json();
    })
    .then(task => {
      window.location = "./index.html";
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
});

back.addEventListener('click', (e) => {
  e.preventDefault();
  window.location = "./index.html";
});