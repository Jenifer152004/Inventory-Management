document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => {
        button.style.transform = "scale(1.1)";
        setTimeout(() => button.style.transform = "scale(1)", 200);
    });
});
