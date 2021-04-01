// menu
const menuBar = document.getElementById("menu-bar");
const menuList = document.getElementById("menu-list");
const menuTop = document.getElementById("menu-top");
const menuDesert = document.getElementById("menu-desert");
const menuArctic = document.getElementById("menu-arctic");
const menuRichat = document.getElementById("menu-richat");

menuBar.addEventListener("click", ()=> {
    menuBar.classList.toggle("active")
    menuList.classList.toggle("active")
});

menuTop.addEventListener("click", ()=> {
    menuBar.classList.remove("active")
    menuList.classList.remove("active")
})
menuDesert.addEventListener("click", ()=> {
    menuBar.classList.remove("active")
    menuList.classList.remove("active")
})
menuArctic.addEventListener("click", ()=> {
    menuBar.classList.remove("active")
    menuList.classList.remove("active")
})
menuRichat.addEventListener("click", ()=> {
    menuBar.classList.remove("active")
    menuList.classList.remove("active")
})




//title
const title = document.getElementById("title");
const titleSpot = document.getElementById("while");
const target = document.getElementById("desert")

window.addEventListener("scroll", ()=> {
    const getTitleSpot = target.getBoundingClientRect().top + target.clientHeight * .15;
    if(window.innerHeight > getTitleSpot) {
        titleSpot.classList.add("show-title");
        title.classList.add("remove-title");
    } else {
        titleSpot.classList.remove("show-title");
        title.classList.remove("remove-title");
    }
});


//sub-title
const subTitle = document.querySelectorAll(".sub-title");

window.addEventListener("scroll", ()=> {
    for(let i = 0; i < subTitle.length; i++) {
        const getSubtTitle = subTitle[i].getBoundingClientRect().top + subTitle[i].clientHeight * .3;
        if(window.innerHeight > getSubtTitle) {
            subTitle[i].classList.add("show");
        }else {
            subTitle[i].classList.remove("show");
        }
    }
});


//scroll animation
const showContents = document.querySelectorAll(".animation-target");
window.addEventListener("scroll", ()=> {
    for(let i = 0; i < showContents.length; i++) {
        const getAnimationTarget = showContents[i].getBoundingClientRect().top + showContents[i].clientHeight * .3;
        if(window.innerHeight > getAnimationTarget) {
            showContents[i].classList.add("text-animation")
        } else {
            showContents[i].classList.remove("text-animation")
        }
    }
});
