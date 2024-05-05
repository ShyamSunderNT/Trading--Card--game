//!Promise task 1 is about fetch the data from the api ("https://api.tcgdex.net/v2/en/sets") and displaying Id, Name, Card Count by using Promise and Fetch.

//! The div tag is slected by getElementsByClassName
const divtag = document.getElementsByClassName("data-values");
function fetchPromise() {
  const url = "https://api.tcgdex.net/v2/en/sets";
  
  //! Fetch and promise
  fetch(url)
    .then((data) => {
      return data.json();
    })
    .then((values) => {

      //!forEach loop is used to display the contents
      values.forEach((content) => {
        let result = document.createElement("div");
        result.setAttribute("class", "card");
        result.setAttribute("style", "width: 18rem");
        result.innerHTML += ` 
    <img src= "${
      content.logo
    }.png" class="card-img-top" alt="Image Not Available">
    <div class="card-body">
      <p class="card-text"> ID : ${content.id.toUpperCase()} </p>
      <p>Name : ${content.name}</p>
      <p>Card-Count : ${content.cardCount.total}</p>
    </div>`;
        divtag[0].append(result);
      });
    })
    .catch((error) => console.log(error));
}

//!Function call
fetchPromise();