var flag = localStorage.getItem('flag');

const darkModeToggle = document.querySelector('#moon_light');

const enableDarkMode = () => {
    $('link#styles').attr('href', '/css/dark.css');
    localStorage.setItem('flag', 'enabled');
};

const disableDarkMode = () => {
    $('link#styles').attr('href', '/css/light.css');
    localStorage.setItem('flag', null);
};

if (flag === 'enabled') {
    enableDarkMode()
}

darkModeToggle.addEventListener("click", () => {
    flag = localStorage.getItem('flag');
    if (flag !== 'enabled') {
        enableDarkMode();
    } else {
        disableDarkMode(flag);
    }
});