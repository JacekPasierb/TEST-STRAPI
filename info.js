console.log("info dziala");
fetchData = () => {
  fetch("http://localhost:1337/api/restaurants")
    .then((response) => response.json())
      .then((data) => {
          
          const dataContainer = document.querySelector('.newInfo')
          data.data.forEach((item) => {
              
            const article = document.createElement("article");
            article.innerHTML = `<li>
          <h2>${item.attributes.Name}</h2>
          <p>${item.attributes.Description}</p></li>
        `;
            dataContainer.appendChild(article);
          });
    })
    .catch((error) => console.log("to jest bląd", error));
};
window.addEventListener("load", fetchData);

