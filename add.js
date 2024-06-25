document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.btn');
  const back = document.querySelector('.back');
  const inputname = document.querySelector('#name');
  const inputprice = document.querySelector('#price');
  const inputimage = document.querySelector('#image');
  const inputid = document.querySelector('#ID')

  btn.addEventListener('click', (e) => {
      e.preventDefault();

      const nameValue = inputname.value.trim();
      const priceValue = inputprice.value.trim();
      const imageValue = inputimage.value.trim();
      const IDvalue = inputimage.value.trim();

      // Basic validation
      if (!nameValue || !priceValue || !imageValue) {
          alert('Please fill out all fields');
          return;
      }

      const newTask = {
          name: nameValue,
          price: priceValue,
          image: imageValue
      };

      fetch('https://657e76623e3f5b189463bb26.mockapi.io/project/special-package/${IDvalue}', {
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
          window.location = './index.html';
      })
      .catch(error => {
          console.error('There was a problem with the fetch operation:', error);
          alert('There was an error submitting the form. Please try again later.');
      });
  });

  back.addEventListener('click', (e) => {
      e.preventDefault();
      window.location = './index.html';
  });
});
