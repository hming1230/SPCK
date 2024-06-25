const btn = document.querySelector(".book-btn");
const change = document.querySelector("#btnchange");
const add = document.querySelector("#btnadd");
const row222 = document.querySelector(".row-1");

// Event listener for book button
btn.addEventListener("click", (event) => {
  event.preventDefault();
  window.location.href = "./indexchxdn.html";
});

// Fetch and display packages
fetch("https://657e76623e3f5b189463bb26.mockapi.io/project/special-package", {
  method: "GET",
  headers: {
    "content-type": "application/json",
  },
})
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((places) => {
    console.log(places);
    places.forEach((place) => {
      const productitem = document.createElement("div");
      productitem.classList.add("col-md-4", "col-sm-6");

      productitem.innerHTML = `
        <div class="image1">
          <img src="${place.image}" alt="package-place" class="image">
        </div>
        <div class="single-package-item-txt">
          <h3>${place.name} <span class="pull-right">${place.price}</span></h3>
          <div class="packages-para">
            <p>
              <span><i class="fa fa-angle-right"></i> 5 days 6 nights</span>
              <i class="fa fa-angle-right"></i> 5 star accommodation
            </p>
            <p>
              <span><i class="fa fa-angle-right"></i> transportation</span>
              <i class="fa fa-angle-right"></i> food facilities
            </p>
          </div>
          <div class="packages-review">
            <p>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <span>2544 review</span>
            </p>
          </div>
          <div class="about-btn">
            <button class="special-btn" data-id="${place.id}">book now</button>
          </div>
        </div>
      `;
      row222.appendChild(productitem);
    });

    // Event listeners for dynamically created "book now" buttons
    document.querySelectorAll('.special-btn').forEach(button => {
      button.addEventListener('click', (event) => {
        event.preventDefault();
        const placeId = event.target.getAttribute('data-id');
        const selectedPlace = places.find(place => place.id === placeId);
        localStorage.setItem('selectedPlace', JSON.stringify(selectedPlace));
        window.location.href = "./detail.html";
      });
    });
  })
  .catch((error) => {
    console.error('Error:', error);
  });

// Event listener for add button
add.addEventListener('click', (event) => {
  event.preventDefault();
  window.location.href = "./add.html";
});

// Event listener for change button
change.addEventListener('click',
  (x)=>{
    x.preventDefault();
    window.location.href = "./change.html"
  }
)