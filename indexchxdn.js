const btn = document.querySelector(".book-btn");

btn.addEventListener("click", (event) => {
  event.preventDefault();
  window.location = "./dangnhap2.html";
});

const row = document.querySelector(".row-1");

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
            <img src="${place.image}" alt="package-place">
            <div class="single-package-item-txt">
                <h3>${place.name} <span class="pull-right">$50</span></h3>
                <div class="packages-para">
                    <p>
                        <span><i class="fa fa-angle-right"></i> 5 days 6 nights</span>
                        <i class="fa fa-angle-right"></i>  5 star accommodation
                    </p>
                    <p>
                        <span><i class="fa fa-angle-right"></i>  transportation</span>
                        <i class="fa fa-angle-right"></i>  food facilities
                    </p>
                </div><!--/.packages-para-->
                <div class="packages-review">
                    <p>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <span>2544 review</span>
                    </p>
                </div><!--/.packages-review-->
                <div class="about-btn">
                    <button class="about-view packages-btn">book now</button>
                </div><!--/.about-btn-->
            </div><!--/.single-package-item-txt-->
        `;
      row.appendChild(productitem);
    });
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
