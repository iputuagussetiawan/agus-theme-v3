class Modal {
    constructor() {
        this.showTimeout = 30;
        this.hideTimeout = 600;
        this.el=document.querySelector('.cb-modal');
        this.dialog = this.el.querySelector("[data-modal-dialog]");
        this.bindCloses();
        this.bindOpens();
    }

    bindCloses() {
        this.el.querySelectorAll("[data-modal-close]").forEach((closeButton) => {
            closeButton.addEventListener("click", () => this.hide());
        });
    }

    bindOpens() {
        if (this.el && this.el.id) {
            document.querySelectorAll(`[data-modal-open='#${this.el.id}']`).forEach((openButton) => {
                console.log(openButton);
                openButton.removeAttribute("data-modal-open");
                openButton.addEventListener("click", () => this.show());
            });
        }
    }


    show() {
        this.el.classList.add("-show");
        document.documentElement.classList.add("modal");

        // Add visible class after timeout
        clearTimeout(this.visibleInt);
        this.visibleInt = setTimeout(() => {
            this.el.classList.add("-visible");
        }, this.showTimeout);

        // Play all videos in the modal
        this.el.querySelectorAll("video").forEach((video) => video.play());
    }

    // Hide the modal
    hide() {
        this.el.classList.remove("-visible");

        // Remove modal-related classes after timeout
        clearTimeout(this.visibleInt);
        this.visibleInt = setTimeout(() => {
            this.el.classList.remove("-show");
            document.documentElement.classList.remove("modal");
        }, this.hideTimeout);

        // Pause all videos in the modal
        this.el.querySelectorAll("video").forEach((video) => video.pause());
    }
}

export default Modal