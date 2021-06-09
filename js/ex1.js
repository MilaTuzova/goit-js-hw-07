const nav = document.querySelector(".js-nav");

nav.addEventListener("click", handleNavClick);

function handleNavClick(event) {
    event.preventDefault();

    const target = event.target;
    console.log("event target: ", target); // посмотрите что тут

    // Проверяем тип узла, если не ссылка выходим из функции
    if (target.nodeName !== "A") return;

    setActiveLink(target);
}

function setActiveLink(nextActiveLink) {
    const currentActiveLink = nav.querySelector("a.active");

    if (currentActiveLink) {
        currentActiveLink.classList.remove("active");
    }

    nextActiveLink.classList.add("active");
}