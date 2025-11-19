let cFormApply = document.querySelector('.js-form-apply');
let cFormClear = document.querySelector('.js-form-clear');

let cFormApply__inputWebsiteUuid = cFormApply.querySelector('.js-input-websiteUuid');
let cFormApply__inputTracking = cFormApply.querySelector('.js-input-tracking');
let cFormApply__response = cFormApply.querySelector(".js-response");

let cFormClear__response = cFormClear.querySelector(".js-response");

cFormApply.addEventListener('submit', (e) => {
    e.preventDefault();

    let helloRetailSettings = {
        websiteUuid: cFormApply__inputWebsiteUuid.value,
        trackingOptOut: !cFormApply__inputTracking.checked
    }

    if(!cFormApply__inputTracking.checked){
        document.cookie = "hello_retail_id" + "=; path=/; domain=" + window.location.hostname + "; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    }

    window.hrq = window.hrq || [];
    hrq.push(['init',
        helloRetailSettings
    ]);

    hrq.push(function () {
        localStorage.setItem("helloRetailSettings", JSON.stringify(helloRetailSettings));

        cFormApply__response.textContent = `Website Uuid: "${cFormApply__inputWebsiteUuid.value}" was comitted to localstorage. Hello Retail Script will be initialized with Website Uuid from localstorage on subsequent page navigations, until you overwrite or clear it.`;

        cFormClear__response.textContent = "";

        if (localStorage.getItem("helloRetailSettings")) {
            cFormClear.classList.remove("is-hidden");
        }
    });

    setTimeout(() => {
        if (!window.hrq.listenForEmailFields_eventListeners && !cFormApply__response.textContent) {
            cFormApply__response.textContent = `Website Uuid not recognized. Reload the page and try again`;
        }
    }, 750);
});

if (localStorage.getItem("helloRetailSettings")) {
    cFormClear.classList.remove("is-hidden");
};

cFormClear.addEventListener('submit', (e) => {
    e.preventDefault();

    cFormClear__response.textContent = `Website Uuid ${JSON.parse(localStorage.getItem("helloRetailSettings")).websiteUuid} was removed from localstorage. Reload page to initialize with new Website Uuid.`;
    localStorage.removeItem("helloRetailSettings");
    
    document.cookie = "hello_retail_id" + "=; path=/; domain=" + window.location.hostname + "; expires=Thu, 01 Jan 1970 00:00:00 UTC;";

    cFormApply__response.textContent = "";
});