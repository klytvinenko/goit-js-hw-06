
const elCategories = document.getElementById("categories");
const elItem = elCategories.querySelectorAll(".item");

console.log(`Number of categories: ${elItem.length}`);

elItem.forEach((item) => {
  const title = item.querySelector("h2");
  const itemList = item.querySelectorAll("li");
  console.log(`Categories: ${title.textContent} \n Elements:${itemList.length}`);
});
