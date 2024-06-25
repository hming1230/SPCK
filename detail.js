
    const packageDetails = document.querySelector('#package-details');
    const selectedPlace = JSON.parse(localStorage.getItem('selectedPlace'));
 
    if (selectedPlace) {
      packageDetails.innerHTML = `
        <h2>${selectedPlace.name}</h2>
         <div class="theimage">
        <img src="${selectedPlace.image}" alt="${selectedPlace.name}">
           </div>
        <div class="dis">
        <p>Price: ${selectedPlace.price}</p>
        <p>${selectedPlace.discribe}</p>
        <p><span><i class="fa fa-angle-right"></i> 5 days 6 nights</span></p>
        <p><span><i class="fa fa-angle-right"></i> 🌟🌟🌟🌟🌟</span></p>
            <div class="all-btn">
          <button class="special-btn " id="alert"> Book now</button>
          <button class="special-btn " id="back"> Back</button>
            </div>
        </div>
      `;
      document.querySelector('#alert').addEventListener('click', () => {
        alert('Booking confirmed!');
        window.location.href = "./index.html"
      });
    
      document.querySelector('#back').addEventListener('click', () => {
        window.location.href = "./index.html";
      })
    } else {
      packageDetails.innerHTML = `<p>No package details available.</p>`;
    }

