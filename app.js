const modal = document.querySelector(".modal");
const openModalButton = document.querySelector(".openModalButton");
const closeModalButton = document.querySelector(".close_modal");
const overlay = document.querySelector(".overlay");
const openModal = () => {
    modal.classList.remove("close");
    document.body.classList.add("overflowHidden");
}

const closeModal = () => {
    modal.classList.add("close");
    document.body.classList.remove("overflowHidden");
}

openModalButton.addEventListener("click", () => {
    openModal();
});

// closeModalButton.addEventListener("click", () => {
//     closeModal();
// });

// overlay.addEventListener("click", () => {
//     closeModal();
// });

modal.addEventListener("click", (e) => {
    const targetClassList = e.target.classList;
    if(
        targetClassList.contains("overlay") ||
        targetClassList.contains("close_modal")
    ){
        closeModal();
    }
});