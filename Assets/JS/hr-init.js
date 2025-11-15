if(localStorage.getItem("helloRetailSettings")){
    let helloRetailSettings = JSON.parse(localStorage.getItem("helloRetailSettings"));

    window.hrq = window.hrq || [];
    hrq.push(['init',
        helloRetailSettings
    ]);
}
