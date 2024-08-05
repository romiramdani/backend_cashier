import mongoose from "mongoose";
import dotenv from "dotenv"

import Product from "./models/Product.js";
const env = dotenv.config().parsed;

mongoose.connect(`${env.MONGODB_URI}${env.MONGODB_HOST}:${env.MONGODB_PORT}/${env.MONGODB_DB}`)
    .then(() => {
        console.log('Connected to mongodb')
    }) .catch((err) => {
        console.log(err)
    });

const seedProducts = [
    {
        "title": "iPhone 14 Pro",
        "thumbnail": "iphone14pro.jpg",
        "brand": "Apple",
        "description": "The latest flagship from Apple with advanced features.",
        "categoryId": "66b03c2335e1ca26a004ec43",
        "price": 21999000
    },
    {
        "title": "Samsung Galaxy S22",
        "thumbnail": "galaxys22.jpg",
        "brand": "Samsung",
        "description": "Next-generation flagship with a stunning display and camera.",
        "categoryId": "66b03c2335e1ca26a004ec43",
        "price": 15999000
    },
    {
        "title": "Google Pixel 7",
        "thumbnail": "pixel7.jpg",
        "brand": "Google",
        "description": "Top-notch camera and the latest Android experience.",
        "categoryId": "66b03c2335e1ca26a004ec43",
        "price": 12999000
    },
    {
        "title": "OnePlus 10 Pro",
        "thumbnail": "oneplus10pro.jpg",
        "brand": "OnePlus",
        "description": "Premium flagship with even faster performance and a smoother display.",
        "categoryId": "66b03c2335e1ca26a004ec43",
        "price": 13999000
    },
    {
        "title": "Xiaomi Mi 12",
        "thumbnail": "mi12.jpg",
        "brand": "Xiaomi",
        "description": "High-performance smartphone with a sleek design and the latest features.",
        "categoryId": "66b03c2335e1ca26a004ec43",
        "price": 10999000
    },
    {
        "title": "Sony Xperia 5 IV",
        "thumbnail": "xperia5iv.jpg",
        "brand": "Sony",
        "description": "Photography-focused flagship with advanced camera features.",
        "categoryId": "66b03c2335e1ca26a004ec43",
        "price": 14999000
    },
    {
        "title": "Huawei P50 Pro",
        "thumbnail": "p50pro.jpg",
        "brand": "Huawei",
        "description": "Powerful camera system and elegant design in the latest flagship.",
        "categoryId": "66b03c2335e1ca26a004ec43",
        "price": 11999000
    },
    {
        "title": "Oppo Find X4 Pro",
        "thumbnail": "findx4pro.jpg",
        "brand": "Oppo",
        "description": "Innovative design and impressive camera capabilities in the latest model.",
        "categoryId": "66b03c2335e1ca26a004ec43",
        "price": 14999000
    },
    {
        "title": "Motorola Edge 2",
        "thumbnail": "edge2.jpg",
        "brand": "Motorola",
        "description": "Large display and improved battery life in the latest iteration.",
        "categoryId": "66b03c2335e1ca26a004ec43",
        "price": 9999000
    },
    {
        "title": "Asus ROG Phone 7",
        "thumbnail": "rogphone7.jpg",
        "brand": "Asus",
        "description": "Gaming-centric smartphone with the latest high-refresh-rate display.",
        "categoryId": "66b03c2335e1ca26a004ec43",
        "price": 15999000
    },
    {
        "title": "Nokia 10",
        "thumbnail": "nokia10.jpg",
        "brand": "Nokia",
        "description": "Reviving the Nokia series with a focus on camera capabilities.",
        "categoryId": "66b03c2335e1ca26a004ec43",
        "price": 8999000
    },
    {
        "title": "Realme GT 2",
        "thumbnail": "realme2.jpg",
        "brand": "Realme",
        "description": "Affordable flagship with upgraded performance and features.",
        "categoryId": "66b03c2335e1ca26a004ec43",
        "price": 7999000
    },
    {
        "title": "Vivo X70 Pro",
        "thumbnail": "vivox70pro.jpg",
        "brand": "Vivo",
        "description": "Slim and stylish smartphone with the latest camera advancements.",
        "categoryId": "66b03c2335e1ca26a004ec43",
        "price": 12999000
    },
    {
        "title": "LG G9 ThinQ",
        "thumbnail": "lgg9.jpg",
        "brand": "LG",
        "description": "Feature-packed smartphone with audio enhancements in the latest model.",
        "categoryId": "66b03c2335e1ca26a004ec43",
        "price": 8999000
    },
    {
        "title": "BlackBerry KEY3",
        "thumbnail": "blackberrykey3.jpg",
        "brand": "BlackBerry",
        "description": "Physical keyboard and security-focused smartphone in the latest version.",
        "categoryId": "66b03c2335e1ca26a004ec43",
        "price": 10999000
    },
    {
        "title": "MacBook Pro 14",
        "thumbnail": "macbookpro14.jpg",
        "brand": "Apple",
        "description": "High-performance laptop for professional users.",
        "categoryId": "66b03da04a3ada0dbf9ff2fb",
        "price": 24999000
    },
    {
        "title": "Dell XPS 15",
        "thumbnail": "dellxps15.jpg",
        "brand": "Dell",
        "description": "Slim and powerful laptop with InfinityEdge display.",
        "categoryId": "66b03da04a3ada0dbf9ff2fb",
        "price": 18999000
    },
    {
        "title": "HP Spectre x360",
        "thumbnail": "hpspectre.jpg",
        "brand": "HP",
        "description": "Convertible laptop with premium design and long battery life.",
        "categoryId": "66b03da04a3ada0dbf9ff2fb",
        "price": 16999000
    },
    {
        "title": "Lenovo ThinkPad X1 Carbon",
        "thumbnail": "thinkpadx1.jpg",
        "brand": "Lenovo",
        "description": "Business-oriented laptop with durable build and great keyboard.",
        "categoryId": "66b03da04a3ada0dbf9ff2fb",
        "price": 19999000
    },
    {
        "title": "Asus ROG Zephyrus G14",
        "thumbnail": "rogzephyrusg14.jpg",
        "brand": "Asus",
        "description": "Powerful gaming laptop with AMD Ryzen processor.",
        "categoryId": "66b03da04a3ada0dbf9ff2fb",
        "price": 17999000
    },
    {
        "title": "Acer Swift 5",
        "thumbnail": "acerswift5.jpg",
        "brand": "Acer",
        "description": "Ultralight laptop with a sleek design and long-lasting battery.",
        "categoryId": "66b03da04a3ada0dbf9ff2fb",
        "price": 12999000
    },
    {
        "title": "Microsoft Surface Laptop 4",
        "thumbnail": "surface4.jpg",
        "brand": "Microsoft",
        "description": "Premium laptop with a high-resolution PixelSense touchscreen.",
        "categoryId": "66b03da04a3ada0dbf9ff2fb",
        "price": 17999000
    },
    {
        "title": "Razer Blade 15",
        "thumbnail": "razerblade15.jpg",
        "brand": "Razer",
        "description": "Gaming laptop with a customizable RGB keyboard and powerful GPU.",
        "categoryId": "66b03da04a3ada0dbf9ff2fb",
        "price": 20999000
    },
    {
        "title": "LG Gram 17",
        "thumbnail": "lggram17.jpg",
        "brand": "LG",
        "description": "Ultra-lightweight laptop with a large 17-inch display.",
        "categoryId": "66b03da04a3ada0dbf9ff2fb",
        "price": 16999000
    },
    {
        "title": "Samsung Galaxy Book Pro",
        "thumbnail": "galaxybookpro.jpg",
        "brand": "Samsung",
        "description": "Sleek and slim laptop with AMOLED display.",
        "categoryId": "66b03da04a3ada0dbf9ff2fb",
        "price": 18999000
    },
    {
        "title": "Dell Inspiron 14",
        "thumbnail": "dellinspiron14.jpg",
        "brand": "Dell",
        "description": "Affordable and reliable laptop for everyday use.",
        "categoryId": "66b03da04a3ada0dbf9ff2fb",
        "price": 10999000
    },
    {
        "title": "HP Envy 13",
        "thumbnail": "hpenvy13.jpg",
        "brand": "HP",
        "description": "Stylish and portable laptop with a focus on multimedia.",
        "categoryId": "66b03da04a3ada0dbf9ff2fb",
        "price": 12999000
    },
    {
        "title": "Lenovo Legion 5",
        "thumbnail": "legion5.jpg",
        "brand": "Lenovo",
        "description": "Budget-friendly gaming laptop with AMD Ryzen processor.",
        "categoryId": "66b03da04a3ada0dbf9ff2fb",
        "price": 14999000
    },
    {
        "title": "Asus ZenBook 14",
        "thumbnail": "zenbook14.jpg",
        "brand": "Asus",
        "description": "Compact and powerful laptop with a sleek design.",
        "categoryId": "66b03da04a3ada0dbf9ff2fb",
        "price": 13999000
    },
    {
        "title": "Acer Predator Helios 300",
        "thumbnail": "predatorhelios300.jpg",
        "brand": "Acer",
        "description": "High-performance gaming laptop with a 144Hz display.",
        "categoryId": "66b03da04a3ada0dbf9ff2fb",
        "price": 17999000
    },
    {
        "title": "Dell UltraSharp U2719D",
        "thumbnail": "dellu2719d.jpg",
        "brand": "Dell",
        "description": "27-inch QHD IPS monitor with ultra-thin bezels.",
        "categoryId": "66b03db14a3ada0dbf9ff2fe",
        "price": 3499000
    },
    {
        "title": "LG 27GL83A-B",
        "thumbnail": "lg27gl83a.jpg",
        "brand": "LG",
        "description": "27-inch QHD Nano IPS gaming monitor with 144Hz refresh rate.",
        "categoryId": "66b03db14a3ada0dbf9ff2fe",
        "price": 4799000
    },
    {
        "title": "Samsung Odyssey G7",
        "thumbnail": "odysseyg7.jpg",
        "brand": "Samsung",
        "description": "32-inch QHD 1000R curved gaming monitor with 240Hz refresh rate.",
        "categoryId": "66b03db14a3ada0dbf9ff2fe",
        "price": 8799000
    },
    {
        "title": "Asus ROG Swift PG279Q",
        "thumbnail": "rogswiftpg279q.jpg",
        "brand": "Asus",
        "description": "27-inch WQHD IPS gaming monitor with G-Sync technology.",
        "categoryId": "66b03db14a3ada0dbf9ff2fe",
        "price": 5999000
    },
    {
        "title": "Acer Predator X34",
        "thumbnail": "predatorx34.jpg",
        "brand": "Acer",
        "description": "34-inch Ultrawide QHD curved gaming monitor with G-Sync.",
        "categoryId": "66b03db14a3ada0dbf9ff2fe",
        "price": 7999000
    },
    {
        "title": "ViewSonic VX3276-MHD",
        "thumbnail": "viewsonicvx3276.jpg",
        "brand": "ViewSonic",
        "description": "32-inch Full HD IPS monitor with slim profile.",
        "categoryId": "66b03db14a3ada0dbf9ff2fe",
        "price": 2799000
    },
    {
        "title": "BenQ EX2780Q",
        "thumbnail": "benqex2780q.jpg",
        "brand": "BenQ",
        "description": "27-inch QHD IPS entertainment monitor with HDRi.",
        "categoryId": "66b03db14a3ada0dbf9ff2fe",
        "price": 4299000
    },
    {
        "title": "HP Omen X 27",
        "thumbnail": "hpomenx27.jpg",
        "brand": "HP",
        "description": "27-inch Quad-HD gaming monitor with AMD FreeSync.",
        "categoryId": "66b03db14a3ada0dbf9ff2fe",
        "price": 5999000
    },
    {
        "title": "Dell Alienware AW3420DW",
        "thumbnail": "alienwareaw3420dw.jpg",
        "brand": "Dell",
        "description": "34-inch Ultrawide QHD curved gaming monitor with 120Hz refresh rate.",
        "categoryId": "66b03db14a3ada0dbf9ff2fe",
        "price": 9999000
    },
    {
        "title": "Philips 276E9QDSB",
        "thumbnail": "philips276e9qdsb.jpg",
        "brand": "Philips",
        "description": "27-inch Full HD IPS monitor with Ultra Narrow Borders.",
        "categoryId": "66b03db14a3ada0dbf9ff2fe",
        "price": 2399000
    },
    {
        "title": "LG 34WK95U-W",
        "thumbnail": "lg34wk95u.jpg",
        "brand": "LG",
        "description": "34-inch UltraWide 5K2K Nano IPS monitor for professionals.",
        "categoryId": "66b03db14a3ada0dbf9ff2fe",
        "price": 12999000
    },
    {
        "title": "AOC CQ32G1",
        "thumbnail": "aoccq32g1.jpg",
        "brand": "AOC",
        "description": "32-inch QHD curved gaming monitor with AMD FreeSync.",
        "categoryId": "66b03db14a3ada0dbf9ff2fe",
        "price": 4299000
    },
    {
        "title": "Samsung Space Monitor S32R750UEU",
        "thumbnail": "samsungspacemonitor.jpg",
        "brand": "Samsung",
        "description": "32-inch 4K UHD monitor with a unique space-saving design.",
        "categoryId": "66b03db14a3ada0dbf9ff2fe",
        "price": 6999000
    },
    {
        "title": "ASUS VG279Q",
        "thumbnail": "asusvg279q.jpg",
        "brand": "Asus",
        "description": "27-inch Full HD IPS gaming monitor with 144Hz refresh rate.",
        "categoryId": "66b03db14a3ada0dbf9ff2fe",
        "price": 3499000
    },
    {
        "title": "MSI Optix MAG321CQR",
        "thumbnail": "msioptixmag321cqr.jpg",
        "brand": "MSI",
        "description": "32-inch QHD curved gaming monitor with 165Hz refresh rate.",
        "categoryId": "66b03db14a3ada0dbf9ff2fe",
        "price": 4999000
    },
    {
        "title": "Sony WH-1000XM4",
        "thumbnail": "sonywh1000xm4.jpg",
        "brand": "Sony",
        "description": "Wireless over-ear headphones with industry-leading noise cancellation.",
        "categoryId": "66b03dc64a3ada0dbf9ff301",
        "price": 3499000
    },
    {
        "title": "Bose QuietComfort 35 II",
        "thumbnail": "boseqc35ii.jpg",
        "brand": "Bose",
        "description": "Comfortable wireless headphones with excellent noise reduction technology.",
        "categoryId": "66b03dc64a3ada0dbf9ff301",
        "price": 2999000
    },
    {
        "title": "Sennheiser HD 660 S",
        "thumbnail": "sennheiserhd660s.jpg",
        "brand": "Sennheiser",
        "description": "Open-back over-ear headphones with high-quality audio reproduction.",
        "categoryId": "66b03dc64a3ada0dbf9ff301",
        "price": 4399000
    },
    {
        "title": "Audio-Technica ATH-M50x",
        "thumbnail": "audiotechnicam50x.jpg",
        "brand": "Audio-Technica",
        "description": "Professional studio monitor headphones with exceptional sound clarity.",
        "categoryId": "66b03dc64a3ada0dbf9ff301",
        "price": 1999000
    },
    {
        "title": "JBL Live 650BTNC",
        "thumbnail": "jbllive650btnc.jpg",
        "brand": "JBL",
        "description": "Wireless over-ear headphones with active noise cancellation and JBL Signature Sound.",
        "categoryId": "66b03dc64a3ada0dbf9ff301",
        "price": 1799000
    },
    {
        "title": "Beyerdynamic DT 990 Pro",
        "thumbnail": "beyerdynamicdt990pro.jpg",
        "brand": "Beyerdynamic",
        "description": "Open-back over-ear headphones for critical listening and studio use.",
        "categoryId": "66b03dc64a3ada0dbf9ff301",
        "price": 2499000
    },
    {
        "title": "Shure AONIC 50",
        "thumbnail": "shureaonic50.jpg",
        "brand": "Shure",
        "description": "Wireless noise-cancelling headphones with customizable sound settings.",
        "categoryId": "66b03dc64a3ada0dbf9ff301",
        "price": 3799000
    },
    {
        "title": "AKG K701",
        "thumbnail": "akgk701.jpg",
        "brand": "AKG",
        "description": "Open-back over-ear reference-class headphones for precise audio reproduction.",
        "categoryId": "66b03dc64a3ada0dbf9ff301",
        "price": 2899000
    },
    {
        "title": "Sony WH-XB900N",
        "thumbnail": "sonywhxb900n.jpg",
        "brand": "Sony",
        "description": "Wireless over-ear headphones with extra bass and touch controls.",
        "categoryId": "66b03dc64a3ada0dbf9ff301",
        "price": 2199000
    },
    {
        "title": "Beats Solo Pro",
        "thumbnail": "beatssolopro.jpg",
        "brand": "Beats by Dre",
        "description": "On-ear wireless headphones with active noise cancellation and Apple H1 chip.",
        "categoryId": "66b03dc64a3ada0dbf9ff301",
        "price": 2799000
    },
    {
        "title": "SteelSeries Arctis Pro Wireless",
        "thumbnail": "steelseriesarctispro.jpg",
        "brand": "SteelSeries",
        "description": "Wireless gaming headset with dual-wireless technology and hi-res audio.",
        "categoryId": "66b03dc64a3ada0dbf9ff301",
        "price": 3499000
    },
    {
        "title": "Jabra Elite 85h",
        "thumbnail": "jabraelite85h.jpg",
        "brand": "Jabra",
        "description": "Wireless over-ear headphones with SmartSound and long battery life.",
        "categoryId": "66b03dc64a3ada0dbf9ff301",
        "price": 2999000
    },
    {
        "title": "Plantronics BackBeat PRO 2",
        "thumbnail": "plantronicsbackbeatpro2.jpg",
        "brand": "Plantronics",
        "description": "Wireless over-ear headphones with active noise cancellation and 24-hour battery life.",
        "categoryId": "66b03dc64a3ada0dbf9ff301",
        "price": 2399000
    },
    {
        "title": "Marshall Major III Bluetooth",
        "thumbnail": "marshallmajor3.jpg",
        "brand": "Marshall",
        "description": "On-ear wireless headphones with iconic Marshall design and 30+ hours of playtime.",
        "categoryId": "66b03dc64a3ada0dbf9ff301",
        "price": 1999000
    },
    {
        "title": "Anker Soundcore Life Q30",
        "thumbnail": "ankersoundcorelifeq30.jpg",
        "brand": "Anker",
        "description": "Wireless over-ear headphones with hybrid active noise cancellation and Hi-Res audio.",
        "categoryId": "66b03dc64a3ada0dbf9ff301",
        "price": 1499000
    },
    {
        "title": "Logitech G Pro X Mechanical Gaming Keyboard",
        "thumbnail": "logitechgprox.jpg",
        "brand": "Logitech",
        "description": "Tenkeyless mechanical gaming keyboard with customizable switches.",
        "categoryId": "66b03dd54a3ada0dbf9ff304",
        "price": 1299000
    },
    {
        "title": "Razer BlackWidow Elite",
        "thumbnail": "razerblackwidowelite.jpg",
        "brand": "Razer",
        "description": "Mechanical gaming keyboard with dedicated media controls and wrist rest.",
        "categoryId": "66b03dd54a3ada0dbf9ff304",
        "price": 1699000
    },
    {
        "title": "Corsair K95 RGB Platinum XT",
        "thumbnail": "corsairk95rgbplatinumxt.jpg",
        "brand": "Corsair",
        "description": "RGB mechanical gaming keyboard with dedicated macro keys and aluminum frame.",
        "categoryId": "66b03dd54a3ada0dbf9ff304",
        "price": 2499000
    },
    {
        "title": "SteelSeries Apex Pro",
        "thumbnail": "steelseriesapexpro.jpg",
        "brand": "SteelSeries",
        "description": "Adjustable mechanical gaming keyboard with customizable switches.",
        "categoryId": "66b03dd54a3ada0dbf9ff304",
        "price": 1999000
    },
    {
        "title": "Ducky One 2 Mini",
        "thumbnail": "duckyone2mini.jpg",
        "brand": "Ducky",
        "description": "60% compact mechanical keyboard with customizable RGB lighting.",
        "categoryId": "66b03dd54a3ada0dbf9ff304",
        "price": 1399000
    },
    {
        "title": "HyperX Alloy FPS Pro",
        "thumbnail": "hyperxalloyfpspro.jpg",
        "brand": "HyperX",
        "description": "Tenkeyless mechanical gaming keyboard with solid steel frame.",
        "categoryId": "66b03dd54a3ada0dbf9ff304",
        "price": 999000
    },
    {
        "title": "ASUS ROG Strix Scope RX",
        "thumbnail": "asusrogstrixscoperx.jpg",
        "brand": "Asus",
        "description": "RGB mechanical gaming keyboard with ROG RX Red switches.",
        "categoryId": "66b03dd54a3ada0dbf9ff304",
        "price": 1799000
    },
    {
        "title": "Keychron K6 Wireless Mechanical Keyboard",
        "thumbnail": "keychronk6.jpg",
        "brand": "Keychron",
        "description": "Compact wireless mechanical keyboard with hot-swappable switches.",
        "categoryId": "66b03dd54a3ada0dbf9ff304",
        "price": 899000
    },
    {
        "title": "Roccat Vulcan 121 AIMO",
        "thumbnail": "roccatvulcan121aimo.jpg",
        "brand": "Roccat",
        "description": "Mechanical gaming keyboard with AIMO RGB lighting and Titan switches.",
        "categoryId": "66b03dd54a3ada0dbf9ff304",
        "price": 1499000
    },
    {
        "title": "DAS Keyboard 4 Professional",
        "thumbnail": "daskeyboard4professional.jpg",
        "brand": "DAS Keyboard",
        "description": "Mechanical keyboard with Cherry MX switches and dedicated media controls.",
        "categoryId": "66b03dd54a3ada0dbf9ff304",
        "price": 1899000
    },
    {
        "title": "Fnatic Streak",
        "thumbnail": "fnaticstreak.jpg",
        "brand": "Fnatic",
        "description": "Pro gaming keyboard with Cherry MX switches and detachable wrist rest.",
        "categoryId": "66b03dd54a3ada0dbf9ff304",
        "price": 1299000
    },
    {
        "title": "Anne Pro 2 Wireless Mechanical Keyboard",
        "thumbnail": "annepro2.jpg",
        "brand": "Anne Pro",
        "description": "Compact wireless mechanical keyboard with customizable RGB lighting.",
        "categoryId": "66b03dd54a3ada0dbf9ff304",
        "price": 1099000
    },
    {
        "title": "Varmilo VA87M Sakura Pink Mechanical Keyboard",
        "thumbnail": "varmiloVA87M.jpg",
        "brand": "Varmilo",
        "description": "Mechanical keyboard with Cherry MX switches and pink aesthetic.",
        "categoryId": "66b03dd54a3ada0dbf9ff304",
        "price": 1599000
    },
    {
        "title": "Cooler Master CK550",
        "thumbnail": "coolermasterck550.jpg",
        "brand": "Cooler Master",
        "description": "RGB mechanical gaming keyboard with Gateron switches.",
        "categoryId": "66b03dd54a3ada0dbf9ff304",
        "price": 1199000
    },
    {
        "title": "Anne Pro 3 Wireless Mechanical Keyboard",
        "thumbnail": "annepro3.jpg",
        "brand": "Anne Pro",
        "description": "Compact wireless mechanical keyboard with customizable RGB lighting.",
        "categoryId": "66b03dd54a3ada0dbf9ff304",
        "price": 1299000
    }      
]

Product.insertMany(seedProducts)
    .then((result) => {
        console.log(result)
    }) .catch((err) => {
        console.log(err)
    })