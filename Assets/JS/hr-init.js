if(localStorage.getItem("websiteUuid_from_config")){
    window.hrq = window.hrq || [];
    hrq.push(['init',
        {
            websiteUuid: localStorage.getItem("websiteUuid_from_config")
        }
    ]);
}
