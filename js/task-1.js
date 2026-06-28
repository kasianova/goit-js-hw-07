const list = document.querySelector("#categories");
const items = list.querySelectorAll(".item");

console.log(`Numbers of categories: ${items.length}`);

items.forEach((item) => {
    const title = item.querySelector("h2").textContent;
    const count = item.querySelectorAll("li").length;
    console.log(`Category: ${title}`);
    console.log(`Elements: ${count}`);
}
);




