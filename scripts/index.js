const handleCategory = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories"
  );
  const data = await res.json();

  const tabContainer = document.getElementById("tab-container");
  const loop = data.data.news_category.slice(0, 3);

  loop.forEach((category) => {
    const div = document.createElement("div");
    div.innerHTML = `<a class="tab tab-bordered">${category.category_name}</a>`;
    tabContainer.appendChild(div);
  });
};

handleCategory();
