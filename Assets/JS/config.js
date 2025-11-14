let websiteUuidClearButton = document.querySelector(".js-button-clear-localstorage");
let cForm = document.querySelector('.js-form');
cForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let cForm__inputWebsiteUuid = cForm.querySelector('.js-input-websiteUuid');
    let cForm__response = cForm.querySelector(".js-response");

    window.hrq = window.hrq || [];
    hrq.push(['init',
        {
            websiteUuid: cForm__inputWebsiteUuid.value
        }
    ]);

    hrq.push(function () {
        localStorage.setItem("websiteUuid_from_config", cForm__inputWebsiteUuid.value);

        cForm__response.textContent = `Website Uuid: "${cForm__inputWebsiteUuid.value}" was comitted to localstorage. Hello Retail Script will be initialized with Website Uuid from localstorage on subsequent page navigations, until you overwrite it.`;

        if (localStorage.getItem("websiteUuid_from_config")) {
            websiteUuidClearButton.classList.remove("is-hidden");
        }
    });

    setTimeout(() => {
        if (!window.hrq.listenForEmailFields_eventListeners && !cForm__response.textContent) {
            cForm__response.textContent = `Website Uuid not recognized. Reload the page and try again`;
        }
    }, 750);
});

if (localStorage.getItem("websiteUuid_from_config")) {
    websiteUuidClearButton.classList.remove("is-hidden");
};

websiteUuidClearButton.addEventListener("click",(e)=>{
    document.querySelector(".js-response").textContent = `Website Uuid ${localStorage.getItem("websiteUuid_from_config")} was removed from localstorage.`;
    localStorage.removeItem("websiteUuid_from_config");
    websiteUuidClearButton.classList.add("is-hidden");
});