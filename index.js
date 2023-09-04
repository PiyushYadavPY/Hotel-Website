const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-input");
searchButton.addEventListener("click" , searchHotel);
searchInput.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        searchHotel();
    }
})

// const searchTerm = "";
function searchHotel(){
    const searchTerm = searchInput.value.trim();
    if(searchTerm == ""){
        return;
    }

 const url = `https://hotels4.p.rapidapi.com/locations/v3/search?q=${searchTerm}&locale=en_US&langid=1033&siteid=300000001`;
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "20baedb54cmshae82579437c7bb5p147b16jsn6a00766f3720",
    "X-RapidAPI-Host": "hotels4.p.rapidapi.com",
  },
};
    


const hotelInfoElement = document.getElementById("hotel-info");

fetch(url, options)
  .then((response) => response.json())
  .then((data) =>{
    // console.log(data)
    const hotels = data.sr;
    hotels.forEach((hotelData, index) => {
        const hotelElement = document.createElement("div");
        hotelElement.classList.add("hotel", "hotel-card"); 
  
        const hotelNameElement = document.createElement("h2");
        hotelNameElement.innerText = "Property Name: " + hotelData.regionNames.fullName;
  
        const hotelAddressElement = document.createElement("p");
        hotelAddressElement.innerText = "Address: " + hotelData.regionNames.secondaryDisplayName;
  
        const hotelRatingElement = document.createElement("p");
        hotelRatingElement.innerText = "Rating: " + Math.floor(Math.random() * 4);
  

        hotelInfoElement.appendChild(hotelElement);
        hotelElement.appendChild(hotelNameElement);
        hotelElement.appendChild(hotelAddressElement);
        hotelElement.appendChild(hotelRatingElement);

       
      });
    })
    .catch((err) => console.log(err));

}



 