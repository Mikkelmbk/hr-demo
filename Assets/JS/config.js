let cForm = document.querySelector('.js-form');
cForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    let cForm__inputWebsiteUuid = cForm.querySelector('.js-input-websiteUuid');
    let cForm__response = cForm.querySelector(".js-response");

    let cForm__applyButton = cForm.querySelector(".js-button-apply");

    window.hrq = window.hrq || [];
    hrq.push(['init',
        {
            websiteUuid: cForm__inputWebsiteUuid.value
        }
    ]);
    window.hrq = window.hrq || [];
    hrq.push(function () {
        cForm__response.textContent = `Website Uuid: "${cForm__inputWebsiteUuid.value}" was comitted to localstorage. Hello Retail Script will be initialized with Website Uuid from localstorage on subsequent page navigations, until you overwrite it.`;
    });

    setTimeout(() => {
        if (!window.hrq.listenForEmailFields_eventListeners && !cForm__response.textContent) {
            cForm__response.textContent = `Website Uuid not recognized. Reload the page and try again`;
        }
    }, 750);
});