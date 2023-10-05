"use strict";

const form = document.getElementById("form1");
const imgPreview = document.getElementById("imgPreview");
const tbody = document.querySelector("#tabla tbody");

form.photo.addEventListener("change", (e) => {
  const file = form.photo.files[0];
  if(file) imgPreview.src = URL.createObjectURL(file);
});

imgPreview.addEventListener('load', e => URL.revokeObjectURL(imgPreview.src));

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(form);

  const tr = document.createElement("tr");

  const tdImg = document.createElement("td");
  const img = document.createElement("img");
  img.src = URL.createObjectURL(formData.get("photo"));
  img.addEventListener("load", e => URL.revokeObjectURL(img.src));
  tdImg.append(img);

  const tdName = document.createElement("td");
  tdName.append(formData.get("name"));

  const tdHobbies = document.createElement("td");
  tdHobbies.append(formData.getAll("hobbies"))

  const tdFood = document.createElement("td");
  tdFood.append(formData.get("food"));

  const tdLang = document.createElement("td");
  tdLang.append(formData.get("language"));

  tr.append(tdImg, tdName, tdHobbies, tdFood, tdLang);
  tbody.append(tr);

  form.reset();
  imgPreview.src = "";
});
