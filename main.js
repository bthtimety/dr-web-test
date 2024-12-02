document.getElementById("first-screen__button").addEventListener("click", function() {

    const secondScreen = document.getElementById("content__second-screen");

    secondScreen.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
});