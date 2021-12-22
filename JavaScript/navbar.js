navBar();
function navBar() {
    const blurTarget = document.querySelector(".container-body");
    const duplicate = blurTarget.cloneNode(true);
    const targetBlurred = document.createElement("div");
    targetBlurred.className = "blurred-content";
    targetBlurred.appendChild(duplicate);
    const navContainer = document.querySelector(".navbar");
    navContainer.appendChild(targetBlurred);

    const blurTargettwo = document.querySelector(".container-body");
    const duplicatetwo = blurTarget.cloneNode(true);
    const targetBlurredtwo = document.createElement("div");
    targetBlurredtwo.className = "blurred-content";
    targetBlurredtwo.appendChild(duplicatetwo);
    const ulContainer = document.querySelector(".nav-unlist");
    ulContainer.appendChild(targetBlurredtwo);

    const contentWrapper = document.querySelector(".blurred-content");
    window.addEventListener('scroll', function () {
        duplicate.style.marginTop = -this.scrollY + 'px';
        duplicatetwo.style.marginTop = -this.scrollY + 'px';
    });
}
