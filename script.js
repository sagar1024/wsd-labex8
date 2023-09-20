const sortByName = document.getElementById('byName');
const sortByPrice = document.getElementById('byPrice');

const mainContainer = document.getElementsByClassName('main_container')[0];

const search = document.getElementById('search');
const closeBtn = document.getElementsByClassName('close-btn');

let searchValue;
let jsonData;

search.addEventListener('input', (e) => {
  searchByName(e.target.value)
})

function searchByName(value) {
  searchValue = value
  const searchData = jsonData.filter((item) => {
    return item.name.toLowerCase().includes(value.toLowerCase());
  });
  displayData(searchData)
}

sortByPrice.addEventListener('click', () => {
  jsonData.sort((a, b) => {
    return a.price - b.price
  })
  displayData(jsonData)
})

sortByName.addEventListener('click', () => {
  console.log(jsonData);
  jsonData.sort((a, b) => {
    return a.name.localeCompare(b.name)
  })
  displayData(jsonData)
})


function displayData(data_json) {
  console.log(data_json);
  for (let i = 0; i < data_json.length; i++) {
    const existingDiv = mainContainer.querySelector(`#item-${i}`)
    if (existingDiv) {
      existingDiv.innerHTML = `<img src=${data_json[i].image_url} alt=${data_json[i].name} />
        <div>
          <h1>Name: ${data_json[i].name}</h1>
          <p>Description: ${data_json[i].description}</p>
          <h4>Price:<span id="price">${data_json[i].price}</span></h4>  
        </div>`
      console.log(data_json[i].image_url);
    } else {
      console.log(data_json[i]);
      const newDiv = document.createElement('div')
      newDiv.setAttribute('id', `item-${i}`)
      newDiv.classList.add('flex_container')
      mainContainer.appendChild(newDiv)
      newDiv.innerHTML = `<img src=${data_json[i].image_url} alt=${data_json[i].name} />
        <div>
          <h1>Name: ${data_json[i].name}</h1>
          <p>Description: ${data_json[i].description}</p>
          <h4>Price:<span id="price">${data_json[i].price}</span></h4>  
        </div>`
      console.log(existingDiv);
    }
  }
}

document.addEventListener('DOMContentLoaded', async () => {
  const response = await fetch('https://cynthiaesthermetilda.github.io/Xhrdemo/products.json');
  const data = await response.json();
  console.log(data);
  jsonData = data;
  displayData(jsonData)
})

