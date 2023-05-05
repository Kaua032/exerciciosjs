let menuItems = [
    {
        class: "breakfast",
        title: "Buttermilk Pancakes",
        price: "R$15.99",
        description: "I'm baby woke milshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
        url: "./images/item-1.jpeg"
    },
    {
        class: "lunch",
        title: "Diner Double",
        price: "R$13.99",
        description: "Vaporware iphone mumnlecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing.",
        url: "./images/item-2.jpeg"
    },
    {
        class: "shakes",
        title: "Godzilla Milkshake",
        price: "R$6.99",
        description: "ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral",
        url: "./images/item-3.jpeg"
    },
    {
        class: "breakfast",
        title: "Country Delight",
        price: "R$20.99",
        description: "Shabby chic keffiyeh neutra snackwave pork belly shoreditch.Prism austin mlkshk truffaut.",
        url: "./images/item-4.jpeg"
    },
    {
        class: "breakfast",
        title: "Egg Attack",
        price: "R$22.99",
        description: "Franzen vegan pabst bicycle rights kickstater pinterest meditation farm-to-table 90's pop-up",
        url: "./images/item-5.jpeg"
    },
    {
        class: "shakes",
        title: "Oreo Dream",
        price: "R$18.99",
        description: "Portland chicharrones ethical edison, palo santo craft beer chia heirloom iphone everyday",
        url: "./images/item-6.jpeg"
    },
    {
        class: "lunch",
        title: "Bacon Overflow",
        price: "R$8.99",
        description: "Carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird",
        url: "./images/item-7.jpeg"
    },
    {
        class: "lunch",
        title: "American Classic",
        price: "R$12.99",
        description: "I'm baby woke milshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
        url: "./images/item-8.jpeg"
    },
    {
        class: "shakes",
        title: "Quarantine Buddy",
        price: "R$16.99",
        description: "I'm baby woke milshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
        url: "./images/item-9.jpeg"
    },
    {
        class: "lunch",
        title: "Stack Dinner",
        price: "R$39.99",
        description: "I'm baby woke milshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
        url: "./images/item-10.jpeg"
    }
]
let menuSection = document.getElementById("menu")
let btnBreakfast = document.getElementById("breakfast")
let btnLunch = document.getElementById("lunch")
let btnShakes = document.getElementById("shakes")

function write(item){
    menuSection.innerHTML +=` 
        <div class="item">
            <img src="${item.url}" alt="">
            <div class="informationsItem">
                <div class="topInformation">
                    <h2>${item.title}</h2>
                    <p>${item.price}</p>
                </div>
                <hr>
                <p class="description">${item.description}</p>
            </div>
        </div>`
}

function Loading(){
    menuSection.innerHTML = ""
    for(let i = 0; i < menuItems.length; i++){
        let presentItem = menuItems[i]
        write(presentItem)
    }
}
Loading()

btnBreakfast.addEventListener("click", ()=>{
    menuSection.innerHTML = ""
    for(let i = 0; i < menuItems.length; i++){
        let presentItem = menuItems[i]
        if(presentItem.class == "breakfast"){
            write(presentItem)
        }
    }
})

btnLunch.addEventListener("click", ()=>{
    menuSection.innerHTML = ""
    for(let i = 0; i < menuItems.length; i++){
        let presentItem = menuItems[i]
        if(presentItem.class == "lunch"){
            write(presentItem)
        }
    }
})

btnShakes.addEventListener("click", ()=>{
    menuSection.innerHTML = ""
    for(let i = 0; i < menuItems.length; i++){
        let presentItem = menuItems[i]
        if(presentItem.class == "shakes"){
            write(presentItem)
        }
    }
})