const shareButton = document.querySelector("#shareButton");
const popupContainer = document.querySelector(".popup-container");
const popupClose = document.querySelector(".popup-close");

shareButton.addEventListener("click", () => {
    popupContainer.style.display = "flex";
});

popupClose.addEventListener("click", () => {
    popupContainer.style.display = "none";
});

// Copy video path when the copy button is clicked
const copyButton = document.querySelector(".copy-button");
const videoPathInput = document.querySelector(".video-path input");

copyButton.addEventListener("click", () => {
    videoPathInput.select();
    document.execCommand("copy");
});
