const allCategories = document.querySelector("#categories");

const listOfCategories = allCategories.querySelectorAll(".item");
console.log(`Number of categories: ${listOfCategories.length}`);


listOfCategories.forEach((item) => {
    console.log("Category:", item.firstElementChild.textContent);
    console.log("Elements:", item.lastElementChild.children.length);
})

