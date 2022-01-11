navBar();
function navBar() {
    const blurTarget = document.querySelector(".container-body");
    const duplicate = blurTarget.cloneNode(true);
    duplicate.lastElementChild.removeAttribute('id');
    const targetBlurred = document.createElement("div");
    targetBlurred.className = "navbar__blurcontent";
    targetBlurred.appendChild(duplicate);
    const navContainer = document.querySelector(".navbar");
    navContainer.appendChild(targetBlurred);

    window.addEventListener('scroll', function () {
        duplicate.style.marginTop = -this.scrollY + 'px';
    });
}

  