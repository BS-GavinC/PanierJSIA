let articles = {
    pomme : 0.5,
    poire : 0.4,
    banane : 0.45,
    raisin : 0.05,
    melon : 2.5,
    ananas : 4,
    myrtille : 0.02,
    pasteque : 5,
    fraise : 0.2
}


let panier = {
}

let AddFruit = (name) => {
    if(panier[name]){
        panier[name]++;
    }
    else{
        panier[name] = 1
    }
    refreshPanier()
}

let removeFruit = (name) => {
    if(panier[name]){
        if(panier[name] > 1){
            panier[name]--
        }
        else{
            delete panier[name]
        }
    }
    refreshPanier()
}

let refreshPanier = () => {
    let ulPanier = document.getElementById("panier")
    ulPanier.innerHTML = ""
    let totalPanier = 0

    for (const key in panier) {

        let prixElement = panier[key] * articles[key]
        totalPanier += prixElement

        let li = document.createElement("li")
        li.innerText = `${key} : ${prixElement}€`
        ulPanier.appendChild(li)

    }

    let p = document.createElement("p")
    p.innerText = `Prix Total : ${totalPanier}€`
    ulPanier.appendChild(p)

}

let ul = document.getElementById("articles")

for (const fruitName in articles) {
    let li = document.createElement("li")

    let p = document.createElement("p")
    p.innerText = `${fruitName} : ${articles[fruitName]}€`
    li.appendChild(p)

    let btnAdd = document.createElement("button")
    btnAdd.onclick = () => {
        AddFruit(fruitName)
    }
    btnAdd.innerText = "Ajouter"
    li.appendChild(btnAdd)

    let btnRemove = document.createElement("button")
    btnRemove.onclick = () => {
        removeFruit(fruitName)
    }
    btnRemove.innerText = "Retirer"
    li.appendChild(btnRemove)

    ul.appendChild(li)
}
