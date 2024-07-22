"use strict"

render(provencie, ['option', 'item', innerHTML], $(".dropdown-btn"));

let selectedRegion = localStorage.getItem('region') || "Toshkent";



(function () {
    if (selectedRegion) {
        $("#region").textContent = selectedRegion
    } else {
        $("#region").textContent = "Toshkent"
    }


    setInterval(() => {
        let year = new Date().getFullYear();
        let month = new Date().getMonth();
        let hours = new Date().getHours();
        let minute = new Date().getMinutes();
        let seconds = new Date().getSeconds();
        let date = new Date().getDate();


        $("#year").textContent = `${date}-${monthArray[month]} ${year}`;
        $("#time").textContent = `${hours}:${minute < 10 ? "0" + minute : minute}:${seconds < 10 ? "0" + seconds : seconds}`;

    }, 1000)
})()


getDaily(baseURL, selectedRegion)

    .then((res) => {

        createCard(res, images).forEach((el) => {

    
            const div = createElement(
                'div',

                (CheckTime(el.time) ? "card active" : "card")
                ,

                `
                            
                            <h4>${el?.title}</h4>
                            <img src="${el.img}" alt="icon">
                            <h5>${el.time}</h5>
                        
            
                   `
            );

            $(".card-wrpper").appendChild(div)
        });
    });




$(".dropdown-btn").addEventListener("change", (e) => {

    $(".card-wrpper").innerHTML = "";
    $("#region").textContent = e.target.value;

    localStorage.setItem('region', e.target.value);

    getDaily(baseURL, e.target.value).then((res) => {
        createCard(res, images).forEach((el) => {

            const div = createElement('div', 'card', `
                
                            <h4>${el?.title}</h4>
                            <img src="${el.img}" alt="icon">
                            <h5>${el.time}</h5>
            
                `
            );

            $(".card-wrpper").appendChild(div)
        });
    });

})




