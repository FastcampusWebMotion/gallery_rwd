window.addEventListener("load",()=>{
    const grid = new Isotope("section",{
        itemSelector: "article",
        columnWidth: "article",
        transitionDuration: "0.5s"
    })

    const btns = document.querySelectorAll("main ul li");

    btns.forEach((btn, index)=>{
        btn.addEventListener("click",e=>{
            e.preventDefault();

            const btn_a = e.currentTarget.querySelector("a");
            const a_href = btn_a.getAttribute("href");
            console.log(a_href);

            grid.arrange({filter: a_href});
        })
    })
})


