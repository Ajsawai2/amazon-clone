const searchResult = document.getElementById("search-result");
const images = document.querySelector("img");

let page = 1;
async function searchImage() {
  const url = `https://api.unsplash.com/search/photos?page=1&query=Tech&client_id=0MTAZfSPWy9oNMtAzUKbPrugdlY8fHPAJ9eBYGuzGBo`;
  const responce = await fetch(url);
  const data = await responce.json();

  let result = data.results;

  result.map((result) => {
    const image = document.createElement("img");
    image.src = result.urls.small;
    const imageLink = document.createElement("a");
    imageLink.href = result.links.html;
    imageLink.target = "_blank";

    imageLink.appendChild(image);
    searchResult.appendChild(imageLink);
  });
}

searchImage();

const image = document.createElement("img");
image.src = result.urls.small;
const imageLink = document.createElement("a");
imageLink.href = result.links.html;
imageLink.target = "_blank";
imageLink.appendChild(image);
searchResult.appendChild(imageLink);
center.appendChild(imageLink);

///////////////////////////////////////////////////////////////////////////////////////////////////////
// Your Account signup page

let signupbln = document.querySelector("#signup");

signupbln.addEventListener("click", () => {
  const S1 = document.createElement("div");
  S1.innerHTML = "<span>  </span>";
});
