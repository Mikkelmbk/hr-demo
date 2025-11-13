let navUlElement = document.querySelector(".js-page-switcher");
let navHTML = [
    {
        name: "Front page",
        href: "/front-page/"
    },
    {
        name: "Category page",
        href: "/category-page/"
    },
    {
        name: "Product page",
        href: "/product-page/"
    },
    {
        name: "Config",
        href: "/config/"
    }
];

navHTML.forEach(function (item) {
    let li = document.createElement("li");
    li.classList.add("c-nav__li");

    let anchor = document.createElement("a");
    anchor.classList.add("c-nav__a");
    anchor.href = item.href;
    anchor.innerHTML = item.name;

    li.appendChild(anchor);
    navUlElement.appendChild(li);

    if (window.location.pathname === item.href) {
        anchor.classList.add("c-nav__a--active");
    }
});