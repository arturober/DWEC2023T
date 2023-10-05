"use strict";

const form = document.getElementById("form1");
const imgPreview = document.getElementById("imgPreview");
const tbody = document.querySelector("#tabla tbody");

form.photo.addEventListener("change", (e) => {
  const file = form.photo.files[0];
  if (file) {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.addEventListener("load", (e) => {
      imgPreview.src = fileReader.result;
    });
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = form.name.value;
  const lang = form.language.value;
  const hobbies = Array.from(form.hobbies)
    .filter((i) => i.checked)
    .map((i) => i.value);
  const food = form.food.value;
  const photo = imgPreview.src;

  const tr = document.createElement("tr");

  const tdImg = document.createElement("td");
  const img = document.createElement("img");
  img.src = photo;
  tdImg.append(img);

  const tdName = document.createElement("td");
  tdName.append(name);

  const tdHobbies = document.createElement("td");
  tdHobbies.append(hobbies.join(", "))

  const tdFood = document.createElement("td");
  tdFood.append(food);

  const tdLang = document.createElement("td");
  tdLang.append(lang);

  tr.append(tdImg, tdName, tdHobbies, tdFood, tdLang);
  tbody.append(tr);

  form.reset();
  imgPreview.src = "";
});
