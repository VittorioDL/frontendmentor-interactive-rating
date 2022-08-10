const submitBtn = document.querySelector(".submit-btn");
const cardRating = document.querySelector(".card-rating");
const cardThankYou = document.querySelector(".card-thank-you");

const numbersRating = document.querySelectorAll(".btn-rating");
const ratingSelected = document.querySelector(".number-selected");

// listens for click on rating numbers and assign value to span in thank you card
numbersRating.forEach((rate) => {
    rate.addEventListener("click", () => {
        ratingSelected.innerHTML = rate.innerHTML;
    })
})

// hides main card and displays thank you card
submitBtn.addEventListener("click", () => {
    if(ratingSelected.innerHTML != ""){
        cardThankYou.style.display = "block";
        cardRating.style.display = "none";
    }
});




  
  
