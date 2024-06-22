const btn = document.querySelector(".book-btn");

btn.addEventListener("click", (event) => {
  event.preventDefault();
  window.location = "./indexchxdn.html";
});

const row222 = document.querySelector(".row-1");

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
    places.forEach((placez) => {
      const productitem = document.createElement("div");
      productitem.classList.add("col-md-4", "col-sm-6");

      productitem.innerHTML = `
        <img src="${placez.image}" alt="package-place">
        <div class="single-package-item-txt">
            <h3>${placez.name} <span class="pull-right">${placez.price}</span></h3>
            <div class="packages-para">
                <p>
                    <span><i class="fa fa-angle-right"></i> 5 days 6 nights</span>
                    <i class="fa fa-angle-right"></i>  5 star accommodation
                </p>
                <p>
                    <span><i class="fa fa-angle-right"></i>  transportation</span>
                    <i class="fa fa-angle-right"></i>  food facilities
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
                <button class="about-view packages-btn">book now</button>
            </div>
        </div>
      `;
      row222.appendChild(productitem);
    });
  })
  .catch((error) => {
    console.error("There was a problem with the fetch operation:", error);
  });

const add = document.querySelector("#btnadd");

add.addEventListener("click", (event) => {
  event.preventDefault();
  window.location = "./add.html";
});