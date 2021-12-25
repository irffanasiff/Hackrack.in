navBar();
function navBar() {
    const blurTarget = document.querySelector(".container-body");
    const duplicate = blurTarget.cloneNode(true);
    const targetBlurred = document.createElement("div");
    targetBlurred.className = "navbar__blurcontent";
    targetBlurred.appendChild(duplicate);
    const navContainer = document.querySelector(".navbar");
    navContainer.appendChild(targetBlurred);

    const blurTargettwo = document.querySelector(".container-body");
    const duplicatetwo = blurTarget.cloneNode(true);
    const targetBlurredtwo = document.createElement("div");
    targetBlurredtwo.className = "navbar__blurcontent";
    targetBlurredtwo.appendChild(duplicatetwo);
    const ulContainer = document.querySelector(".navbar__btn");
    ulContainer.appendChild(targetBlurredtwo);

    const contentWrapper = document.querySelector(".navbar__blurcontent");
    window.addEventListener('scroll', function () {
        duplicate.style.marginTop = -this.scrollY + 'px';
        duplicatetwo.style.marginTop = -this.scrollY + 'px';
    });
}
