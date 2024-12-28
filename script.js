let products = {
    data: [
    {
    productName: "Regular WhiteT-Shirt",
    category: "Topwear",
    price: "30",
    image: "",
    },
    {
    productName: "Beige short skirt",
    category: "Bottomwear",
    price: "49",
    image: "windowboys.jpg",
    },
    {
        productName: "Sporty smart watch",
        category: "Watvh",
        price: "99",
        image: "windowboys.jpg",
        },
        {
            productName: "Basic knitted top",
            category: "Topwear",
            price: "49",
            image: "windowboys.jpg",
            },
        {
            productName: "Black leather jacket",
            category: "Jacket",
            price: "129",
            image: "windowboys.jpg",
            },
            {
                productName: "Stylish pink trousers",
                category: "Bottomwear",
                price: "89",
                image:"windowboys.jpg",
                },
                {
                    productName: "Brown men's jacket",
                    category: "Jacket",
                    price: "189",
                    image: "windowboys.jpg",
                    },
                    {
                        productName: "Comfy gray pants",
                        category: "Bottomwear",
                        price: "49",
                        image: "windowboys.jpg",
                        },  
    ],
    };
     
    for (let i of products.data) {
        //Create Card
        let card = document.createElement("div");
        //Card should have category
        card.classList.add("card", "i.category");
        //image div
        let imgContainer = document.createElement("div");
        imgContainer.classList.add("image-container");
        //img tag
        let image = document.createElement("img");
        image.setAttribute("src", i. image);
        imgContainer.appendChild(image);
        card.appendChild(imgContainer);
        let container = document.createElement("div");
container.classList.add("container");
//product name
let name = document.createElement("h5");
name.classList.add("product-name");
name.innerText = i.productName.toUpperCase();
container.appendChild(name);


        document.getElementById("products").appendChild(card);

    }