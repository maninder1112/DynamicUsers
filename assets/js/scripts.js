function displayCocktail(data) {
  const dataVal = data.results;
  const divWrap = document.getElementById("wrap");

  for (let key in dataVal) {
    let value = dataVal[key];

    const item = document.createElement("div");
    item.setAttribute("class", "item");

    const itemHead = document.createElement("div");

    itemHead.setAttribute("class", "item-head");
    const itemBody = document.createElement("div");
    itemBody.setAttribute("class", "item-body");
    //image
    let image = document.createElement("img");
    image.setAttribute("src", value.picture.large);
    itemHead.appendChild(image);
    
    //name
    let name = document.createElement("h3");
    name.innerHTML = `Hey I'm <br/>` + value.name.first + " " + value.name.last;
    itemBody.appendChild(name);
    //address
    let addr = document.createElement("p");
    addr.innerHTML = `<i class="fa fa-map-marker"></i>` + value.location.city +
      ", " +
      value.location.state;
      itemBody.appendChild(addr);
    //email
    let email = document.createElement("a");
    email.setAttribute("href", "mailto:"+value.email);
    email.innerHTML = `<i class="fa fa-envelope"></i>` + value.email;
    itemBody.appendChild(email);
    //phone
    let phone = document.createElement("a");
    phone.setAttribute("href", "tel:"+value.phone);
    phone.innerHTML = `<i class="fa fa-phone"></i>` + value.phone;
    itemBody.appendChild(phone);
    divWrap.appendChild(item);
    item.appendChild(itemHead);
    item.appendChild(itemBody);
  }
}

function rg(m, n) {
  return Math.floor(Math.random() * (n - m + 1)) + m;
}

function hex(i) {
  return i.toString(16);
}

function randColor() {
  return (
    "#" +
    hex(rg(1, 15)) +
    hex(rg(1, 15)) +
    hex(rg(1, 15)) +
    hex(rg(1, 15)) +
    hex(rg(1, 15)) +
    hex(rg(1, 15))
  );
}
const bg = document.getElementById("body");
bg.style.setProperty('--color', randColor());
