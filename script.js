document.querySelector('.search-icon').addEventListener('click', function () {
    const query = document.querySelector('.search-input').value;
    if (query) {
        window.location.href = `https://example.com/search?q=${encodeURIComponent(query)}`;
    }
});

document.querySelector('.search-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        const query = document.querySelector('.search-input').value;
        if (query) {
            window.location.href = `https://example.com/search?q=${encodeURIComponent(query)}`;
        }
    }
});
function toggleProfileDropdown() {
    const profileDropdown = document.querySelector('.profile-dropdown');
    profileDropdown.classList.toggle('active');
}
document.addEventListener('click', function (event) {
    const profileDropdown = document.querySelector('.profile-dropdown');
    if (!profileDropdown.contains(event.target)) {
        profileDropdown.classList.remove('active');
    }
});
const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
    const itemNumber = movieLists[i].querySelectorAll("img").length;
    let clickCounter = 0;

    arrow.addEventListener("click", () => {
        clickCounter++;

        if (itemNumber - (4 + clickCounter) >= 0) {
            movieLists[i].style.transform = `translateX(${
                movieLists[i].computedStyleMap().get("transform")[0].x.value - 300
            }px)`;
        } else {
            movieLists[i].style.transform = "translateX(0)";
            clickCounter = 0; // Reset the counter when reaching the end
        }

        console.log(movieLists[i].querySelectorAll("img").length);
    });
});