const productos = [

    {
        id:"1",
        name: "Iphone x",
        price:10000,
        category: "celulares",
        img: "https://f.fcdn.app/imgs/04656b/www.corner.com.uy/cornuy/b81d/original/catalogo/IPX64GBGYCPO_ipx64gbgycpo_2/2000-2000/celular-iphone-x-5-8-3gb-64gb-gris-cpo-celular-iphone-x-5-8-3gb-64gb-gris-cpo.jpg",
        stock: 20,
        description: "Celular iphone x",
    },
    
    {
        id:"2",
        name: "Iphone 11",
        price:12000 ,
        category: "celulares",
        img: "https://f.fcdn.app/imgs/e55abe/www.zonatecno.com.uy/zoteuy/af05/original/catalogo/98136_98136_1/1500-1500/celular-apple-iphone-11-2020-128gb-4gb-white-celular-apple-iphone-11-2020-128gb-4gb-white.jpg",
        stock:20,
        description: "Celular Iphone 11",
    },
    {
        id:"3",
        name: "Iphone 12 mini",
        price: 15000,
        category: "celulares",
        img: "https://thumb.pccomponentes.com/w-530-530/articles/32/328962/2312-apple-iphone-12-mini-128gb-verde-libre-comprar.jpg",
        stock:15,
        description: "Celular Iphone 12 mini",
    },
    {
        id:"4",
        name: "Samsung s21",
        price:8000,
        category: "celulares",
        img: "https://images.samsung.com/is/image/samsung/p6pim/nz/galaxy-s21/gallery/nz-galaxy-s21-5g-g996-sm-g996bzvgxnz-thumb-368317961",
        stock: 5,
        description: "Celular Samsung s21",
    },
    {
        id:"5",
        name: "Samsung s22",
        price: 9000,
        category: "celulares",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9vMUSpTlmaaJebLZAsvtGM8LQdq5phG-5eg&s",
        stock: 12,
        description: "Celular Samsung s22",
    },
    {
        id:"6",
        name: "Ipad 10a generacion",
        price:11000 ,
        category: "tablets",
        img: "https://www.iplace.com.uy/ccstore/v1/images/?source=/file/v1689228967395403181/products/100002625.00-apple-ipad-10-decima-generacion-wi-fi-256gb-azul-mpq93cia.jpg",
        stock: 5,
        description: "Tablet Apple generacion 10",
    },
    {
        id:"7",
        name: "Ipad mini",
        price: 18000,
        category: "tablets",
        img: "https://www.iplace.com.uy/ccstore/v1/images/?source=/file/v9013725065492421652/products/100001875.00-apple-ipad-mini-6-generacion-a15-bionic-wifi-64gb-rosa-mlwl3ci-a.jpg",
        stock: 7,
        description: "Tablet Apple mini 6ta generacion",
    },
    
    {
        id:"8",
        name: "Tablet Samsung Galaxy tab A9",
        price:13500 ,
        category: "tablets",
        img: "https://http2.mlstatic.com/D_Q_NP_892038-MLU74328290469_012024-O.webp",
        stock: 3,
        description: "Tablet Samsung A9",
    },
    {
        id:"9",
        name: "Tablet Samsung A7",
        price:12700 ,
        category: "tablets",
        img: "https://f.fcdn.app/imgs/4bc5ba/www.zonatecno.com.uy/zoteuy/9b7f/original/catalogo/100662_100662_1/2000-2000/tablet-samsung-galaxy-tab-a7-lite-t225-32gb-3gb-silver-lte-tablet-samsung-galaxy-tab-a7-lite-t225-32gb-3gb-silver-lte.jpg",
        stock: 8,
        description: "Tablet Samsung A7",
    },
    {
        id:"10",
        name: "Tablet Xiaomi Redmi Pad SE",
        price: 12000,
        category: "tablets",
        img: "https://f.fcdn.app/imgs/c69c0e/www.zonatecno.com.uy/zoteuy/ae92/original/catalogo/104564_104564_1/2000-2000/tablet-xiaomi-redmi-pad-se-128gb-4gb-11-grey-tablet-xiaomi-redmi-pad-se-128gb-4gb-11-grey.jpg",
        stock: 18,
        description: "Tablet Redmi Xiaomi",
    },
    {
        id:"11",
        name: "Notebook Asus",
        price: 25000,
        category: "notebooks",
        img: "https://f.fcdn.app/imgs/4d93bc/www.zonatecno.com.uy/zoteuy/2c0b/original/catalogo/105871_105871_1/1500-1500/notebook-asus-vivobook-m1605ya-es74-ryzen-7-1tb-16gb-15-6-notebook-asus-vivobook-m1605ya-es74-ryzen-7-1tb-16gb-15-6.jpg",
        stock:16 ,
        description: "Notebook Asus",
    },
    {
        id:"12",
        name: "Notebook HP",
        price:17350 ,
        category: "notebooks",
        img: "https://f.fcdn.app/imgs/808900/www.zonatecno.com.uy/zoteuy/4831/original/catalogo/104839_104839_3/1500-1500/notebook-hp-240-g9-i5-1235u-256gb-8gb-14-notebook-hp-240-g9-i5-1235u-256gb-8gb-14.jpg",
        stock:6 ,
        description: "Notebook HP",
    },
    {
        id:"13",
        name: "Notebook Acer ASPIRE",
        price:12500 ,
        category: "notebooks",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0uI_8J0ahl480dSq0zqxUZz51kz_4LKP-oA&s",
        stock: 18,
        description: "Notebook Acer ASPIRE",
    },
    {
        id:"14",
        name: "Notebook MSI",
        price: 29000,
        category: "notebooks",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGQ3JWV9mwFyhtAOYRx_uqz_edxw4TL4GU-Q&s",
        stock: 3,
        description: "Notebook MSI",
    },
    {
        id:"15",
        name: "Notebook Apple Pro",
        price:18500 ,
        category: "notebooks",
        img: "https://www.apple.com/newsroom/images/product/mac/standard/Apple_MacBook-Pro_14-16-inch_10182021_big.jpg.slideshow-large_2x.jpg",
        stock: 9,
        description: "Notebook Apple Pro",
    },
    {
        id:"16",
        name: "Cable USB tipo C",
        price:1000 ,
        category: "cables",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnKQtrx7AMy-j1cpr_wmWAKc9bpvOxJmJLSw&s",
        stock: 100,
        description: "Cable USB tipo c",
    },
    {
        id:"17",
        name: "Cable USB Iphone",
        price: 1000,
        category: "cables",
        img: "https://http2.mlstatic.com/D_NQ_NP_914181-MLC46738150341_072021-O.webp",
        stock: 100,
        description: "Cable para Iphone",
    },
    {
        id:"18",
        name: "Cable micro USB ",
        price: 1000,
        category: "cables",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA4q7ImnFPRn_nAFxthAPze4zxuVn4SGftTw&s",
        stock: 100,
        description: "Cable micro USB",
    },
    {
        id:"19",
        name: "Mouse Logitech",
        price: 1500,
        category: "mouses",
        img: "https://m.media-amazon.com/images/I/61UxfXTUyvL._AC_SL1500_.jpg",
        stock: 20,
        description: "Mouse gamer Logitech",
    },
    {
        id:"20",
        name: "Mouse HP",
        price: 1350,
        category: "mouses",
        img: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c07944702.png",
        stock: 25,
        description: "Mouse HP",
    },
    {
        id:"21",
        name: "Mouse Razer",
        price: 1700,
        category: "mouses",
        img: "https://laaca.com.uy/wp-content/uploads/2021/05/Mouse-Razer-Deathadder-Essential9.jpg",
        stock: 30,
        description: "Mouse Razer",
    },




];


//para renderizar todos los productos
export  const getProducts = ()=>
    {   
       return new Promise ((resolve)=>{
        setTimeout(()=>{
            resolve(productos)
        },2500)
    })
};


//para renderizar los productos por categoria 
export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(productos.filter((prod)=> prod.category === categoryId));
      }, 2500);
    });
  };
//para renderizar un producto en base al ID

export const getProductsById=(productId)=>
    {
        return new Promise ((resolve) => {
            setTimeout(()=>{
                resolve(productos.find((prod)=>prod.id=== productId));
            }, 2500)
        })
    };
