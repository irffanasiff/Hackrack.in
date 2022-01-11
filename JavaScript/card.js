class cardGen extends HTMLElement {
    connectedCallback () {
    
        const eventCard = document.createElement("div");
        eventCard.setAttribute('class','event__card');

        const cardImage = document.createElement("img");
        cardImage.src = this.hasAttribute('src')?this.getAttribute('src'):'img/default.png';
        
        const eventDetails = document.createElement("div");
        eventDetails.setAttribute('class','event__details');

        const heading = document.createElement("h3");
        const paragraph = document.createElement("p");
        const eventTime = document.createElement("div");
        eventTime.setAttribute('class','event__time');

        paragraph.textContent = this.getAttribute('data-text');
        heading.textContent = this.getAttribute('heading');

        const registerBtn = document.createElement("button");
        registerBtn.setAttribute('class','register__btn');
        registerBtn.innerHTML = "Register";

        eventTime.innerHTML = this.getAttribute('time') ;
        eventTime.appendChild(registerBtn);
        eventDetails.appendChild(heading);
        eventDetails.appendChild(paragraph);
        eventDetails.appendChild(eventTime);
        eventCard.appendChild(cardImage);
        eventCard.appendChild(eventDetails);
        this.appendChild(eventCard);
    }
}


customElements.define('card-akd',cardGen);