/* ---------------theme light - dark mode ------------ */
const dayNight = document.querySelector(".day-night"),
    dayNightLogo = document.querySelector(".day-night-logo");

dayNight.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark"))
        localStorage.setItem("theme", "dark");
    else
        localStorage.setItem("theme", "light");
    updateIconAndLogo();
});

function themeMode() {
    // checking if 'theme' key exists
    if (localStorage.getItem("theme") !== null) {
        if (localStorage.getItem("theme") === "light")
            document.body.classList.remove("dark");
        else
            document.body.classList.add("dark");
    }
    updateIconAndLogo();
}
themeMode();

function updateIconAndLogo() {
    if (document.body.classList.contains("dark")) {
        dayNight.querySelector("i").classList.remove("fa-moon");
        dayNight.querySelector("i").classList.add("fa-sun");
        // update logo
        dayNightLogo.querySelector("img:first-child").classList.add("deactivate");
        dayNightLogo.querySelector("img:first-child").classList.remove("active");
        dayNightLogo.querySelector("img:last-child").classList.add("active");
        dayNightLogo.querySelector("img:last-child").classList.remove("deactivate");
    } else {
        dayNight.querySelector("i").classList.remove("fa-sun");
        dayNight.querySelector("i").classList.add("fa-moon");
        // update logo
        dayNightLogo.querySelector("img:first-child").classList.remove("deactivate");
        dayNightLogo.querySelector("img:first-child").classList.add("active");
        dayNightLogo.querySelector("img:last-child").classList.remove("active");
        dayNightLogo.querySelector("img:last-child").classList.add("deactivate");
    }
}