const section = document.getElementById("section-menu-items");


// Menüyü oluşturan fonksiyon
const menuList = (menuItem) => {
    let showMenu = menuItem.map((item) => {
        return `
 <div class="menu-items col-lg-6 ">
     <div>
        <img class="photo" src=${item.img} alt=${item.title}>
     </div>
        
    <div class="menu-info">
        <div class="menu-title">
            <h4>${item.title}</h4>
            <h4>${item.price}</h4>
            </hr>
        </div>
        <p class="menu-text">${item.desc}</p>
    </div>
</div>`;
    });
    showMenu = showMenu.join("");
    section.innerHTML = showMenu;

};


// Menüyü kategoriye göre gruplayan fonksiyon
const groupedByCategory = menu.reduce((acc, item) => {
    if (!acc[item.category]) {
        acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
}, {});


// Kategori butonlarını oluşturan fonksiyon
const createButtons = () => {
    const categories = Object.keys(groupedByCategory);
    const buttons = categories.map((category) => {
        return `<button type="button" class="btn btn-outline-dark btn-item" data-id=${category}>${category}</button>`;
    });
    buttons.unshift(`<button type="button" class="btn btn-outline-dark btn-item" data-id="all">All</button>`);
    const buttonsContainer = document.querySelector(".btn-container");
    buttonsContainer.innerHTML = buttons.join("");
    const btns = document.querySelectorAll(".btn-item");
    btns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            const category = e.currentTarget.dataset.id;
            const menuCategory = category === "all" ? menu : groupedByCategory[category];
            menuList(menuCategory);
        });
    });

    menuList(menu);
};
createButtons();
