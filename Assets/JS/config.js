let cFormApply = document.querySelector('.js-form-apply');
let cFormClear = document.querySelector('.js-form-clear');

let cFormApply__inputWebsiteUuid = cFormApply.querySelector('.js-input-websiteUuid');
let cFormApply__inputTracking = cFormApply.querySelector('.js-input-tracking');
let cFormApply__response = cFormApply.querySelector(".js-response");

let cFormClear__response = cFormClear.querySelector(".js-response");

cFormApply.addEventListener('submit', (e) => {
    e.preventDefault();

    let Hello_Retail_Settings = {
        websiteUuid: cFormApply__inputWebsiteUuid.value,
        trackingOptOut: !cFormApply__inputTracking.checked
    }

    window.hrq = window.hrq || [];
    hrq.push(['init',
        Hello_Retail_Settings
    ]);

    // Convert localStorage to stringified object of selected values, and ensure rest of code accommodates that approach.
    hrq.push(function () {
        localStorage.setItem("websiteUuid_from_config", cFormApply__inputWebsiteUuid.value);

        cFormApply__response.textContent = `Website Uuid: "${cFormApply__inputWebsiteUuid.value}" was comitted to localstorage. Hello Retail Script will be initialized with Website Uuid from localstorage on subsequent page navigations, until you overwrite it.`;

        cFormClear__response.textContent = "";

        if (localStorage.getItem("websiteUuid_from_config")) {
            cFormClear.classList.remove("is-hidden");
        }
    });

    setTimeout(() => {
        if (!window.hrq.listenForEmailFields_eventListeners && !cFormApply__response.textContent) {
            cFormApply__response.textContent = `Website Uuid not recognized. Reload the page and try again`;
        }
    }, 750);
});

if (localStorage.getItem("websiteUuid_from_config")) {
    cFormClear.classList.remove("is-hidden");
};

cFormClear.addEventListener('submit', (e) => {
    e.preventDefault();

    cFormClear__response.textContent = `Website Uuid ${localStorage.getItem("websiteUuid_from_config")} was removed from localstorage.`;
    localStorage.removeItem("websiteUuid_from_config");

    cFormApply__response.textContent = "";

});