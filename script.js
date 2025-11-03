op1 = document.querySelector(".op1")
op2 = document.querySelector(".op2")
op3 = document.querySelector(".op3")
op4 = document.querySelector(".op4")

redop = document.querySelector(".redop")
greenop = document.querySelector(".greenop")
grayop = document.querySelector(".grayop")
brownop = document.querySelector(".brownop")
atualdiv = op1
atualimg = redop

imagens = ["img/vermelho-principal.webp","img/cinza-principal.webp","img/verde-principal.webp","img/marrom-principal.webp"]
princImg = document.querySelector(".princShoe")
backgroundColors = ["#301212ff","#070303","#19250eff","#302012ff"]
background = document.querySelector(".background")

slider = document.querySelector(".slider")

imageCollection = document.querySelector(".imageCollection")

op1.addEventListener("click",()=>{
    if(atualdiv == op1){
        return
    }
    atualdiv.style.backgroundColor = "transparent"
    atualimg.style.transform = "rotate(20deg) translateY(-10px)"

    atualdiv = op1
    atualimg = redop

    atualdiv.style.backgroundColor = "#a9a6a646"
    atualimg.style.transform = "translateX(-10px) rotate(-20deg)"

    princImg.src = imagens[0]
    background.style.backgroundColor = backgroundColors[0]
    slider.style.setProperty("--blur-color","var(--blur-red)")

    imageCollection.src = "img/COLLECTIONS-vermelho.png"
})

op2.addEventListener("click",()=>{
    if(atualdiv == op2){
        return
    }
    atualdiv.style.backgroundColor = "transparent"
    atualimg.style.transform = "rotate(20deg) translateY(-10px)"

    atualdiv = op2
    atualimg = grayop

    atualdiv.style.backgroundColor = "#a9a6a646"
    atualimg.style.transform = "translateX(-10px)"
    princImg.src = imagens[1]
    background.style.backgroundColor = backgroundColors[1]
    slider.style.setProperty("--blur-color","var(--blur-gray)")

    imageCollection.src = "img/COLLECTIONS-cinza.png"
})

op3.addEventListener("click",()=>{
    if(atualdiv == op3){
        return
    }
    atualdiv.style.backgroundColor = "transparent"
    atualimg.style.transform = "rotate(20deg) translateY(-10px)"

    atualdiv = op3
    atualimg = greenop

    atualdiv.style.backgroundColor = "#a9a6a646"
    atualimg.style.transform = "translateX(-10px)"
    princImg.src = imagens[2]
    background.style.backgroundColor = backgroundColors[2]
    slider.style.setProperty("--blur-color","var(--blur-green)")

    imageCollection.src = "img/COLLECTIONS-verde.png"
})

op4.addEventListener("click",()=>{
    if(atualdiv == op4){
        return
    }
    atualdiv.style.backgroundColor = "transparent"
    atualimg.style.transform = "rotate(20deg) translateY(-10px)"

    atualdiv = op4
    atualimg = brownop

    atualdiv.style.backgroundColor = "#a9a6a646"
    atualimg.style.transform = "translateX(-10px)"
    princImg.src = imagens[3]
    background.style.backgroundColor = backgroundColors[3]
    slider.style.setProperty("--blur-color","var(--blur-brown)")

    imageCollection.src = "img/COLLECTIONS-marrom.png"
})