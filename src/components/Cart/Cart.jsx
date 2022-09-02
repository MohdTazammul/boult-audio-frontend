import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./style.css"
var obj = [
  {
  "_id": "6310feb3ebb6eec18865946c",
  "user": "630fa8759d0ed3fb86ed3412",
  "product": {
  "_id": "630a5add6596cd109124df6d",
  "title": "Sound Maestro ",
  "category": "TWS",
  "tagline": "40 hrs battery powerhouse",
  "cover_image": "https://user-images.githubusercontent.com/90475607/187312353-902f6cf4-3b0b-4189-b20a-b93f5a70af67.png",
  "productModel": "Y1",
  "price": "5499",
  "discountedPrice": "1,499",
  "tags": [
  "BEST SELLER"
  ],
  "image": [
  "https://user-images.githubusercontent.com/93372275/187041753-8ce18966-88ae-47f0-9db1-ae6f886b9ce7.png",
  "https://user-images.githubusercontent.com/93372275/187837449-d4f54c7c-041b-4d20-8031-54a1238f6317.png"
  ],
  "colorName": [
  "black",
  "white"
  ],
  "FAQ_Ques": [
  "Can I Play or Pause the music?",
  "Can I switch to Next or Previous track?",
  "Do these headphones have an inbuilt microphone?",
  "Which Bluetooth version do these Headphones support?",
  "Can I charge my headphones with a Smartphone charger ?"
  ],
  "FAQ_Ans": [
  "Double tap any earbud to Play or Pause the track.",
  "Long press for 2 seconds on the left or right earbud to switch between Previous or Next track.",
  "Yes, you can accept calls via these headphones.",
  "Boult Audio Y1 supports Bluetooth 5.1 version",
  "Yes, you can use any 5 or 10 watt adapter to charge your product."
  ]
  },
  "quantity": 1,
  "color": "black",
  "createdAt": "2022-09-01T18:49:23.007Z",
  "updatedAt": "2022-09-01T18:49:23.007Z",
  "__v": 0
  },
  {
  "_id": "6310febdebb6eec188659474",
  "user": "630fa8759d0ed3fb86ed3412",
  "product": {
  "_id": "630a5f208fbf610811d8a7cc",
  "title": " Audio Renaissance",
  "category": "TWS",
  "tagline": "ANC | Gaming",
  "cover_image": "https://user-images.githubusercontent.com/93372275/187042753-25925488-1cf0-47e2-8a36-ae5621169bf5.png",
  "productModel": "Omega",
  "price": "9999",
  "discountedPrice": "2499",
  "tags": [
  "NEW",
  "BEST SELLER"
  ],
  "image": [
  "https://cdn.shopify.com/s/files/1/0548/8849/7221/files/TN_black_a43bddc1-9d11-4cc8-818c-53e0ef5b76fd_550x550.png?v=1655374562",
  "https://cdn.shopify.com/s/files/1/0548/8849/7221/files/TN_White_96744dbe-6f24-40a1-aa1d-d6872e0ccce3_550x550.png?v=1655374578"
  ],
  "colorName": [
  "black",
  "white"
  ],
  "FAQ_Ques": [
  "How do I reset my Boult Omega?",
  "Which Bluetooth version do these earbuds support?",
  "How can I Play/Pause or switch to Previous/next track?",
  "How can I activate Google Voice Assistant/Siri ?",
  "Are these earbuds compatible with IOS, Android, Macbook, Windows ?"
  ],
  "FAQ_Ans": [
  "Long press both the earbuds for 10 seconds to factory reset.",
  "These earbuds features the latest Bluetooth 5.1 version",
  "Double tap any earbud to Play/Pause track, Long press for 2 seconds left/right earbud to switch between Previous/Next track.",
  "Triple tap on any earbud to activate the Google voice assistant/Siri.",
  "Yes, the product is compatible with all the devices."
  ]
  },
  "quantity": 1,
  "color": "black",
  "createdAt": "2022-09-01T18:49:33.816Z",
  "updatedAt": "2022-09-01T18:49:33.816Z",
  "__v": 0
  },
  {
  "_id": "6310fec7ebb6eec18865947b",
  "user": "630fa8759d0ed3fb86ed3412",
  "product": {
  "_id": "630a65858fbf610811d8a7d0",
  "title": "Sound Dynamite",
  "category": "TWS",
  "tagline": "Featherweight earbuds",
  "cover_image": "https://user-images.githubusercontent.com/90475607/187312931-db399466-7a8d-443b-b3a7-4e565d7d005f.png",
  "productModel": "Z1",
  "price": "5499",
  "discountedPrice": "1299",
  "tags": [
  "BEST SELLER"
  ],
  "image": [
  "https://user-images.githubusercontent.com/93372275/187043612-7537fcb0-4c2d-495d-a763-204496ed1f68.png",
  "https://user-images.githubusercontent.com/93372275/187043706-2ad961ac-3008-4efc-8a59-7b5c2c662af4.png"
  ],
  "colorName": [
  "grey ",
  " green"
  ],
  "FAQ_Ques": [
  "How can I Play/Pause or switch to Previous/next track?",
  "Can I answer/reject the calls via these earbuds?",
  "How can I check if my product has been fully charged ?",
  " How long does it takes to fully charge the charging case ?",
  "Which Bluetooth version do these earbuds support?",
  "Can I charge my earbuds with a mobile charger ?"
  ],
  "FAQ_Ans": [
  "Double tap any earbud to Play/Pause track, Long press for 2 seconds left/right earbud to switch between Previous/Next track.",
  "Double tap on any earbud to answer the call, press for 1 second to reject the call.",
  "Place the earbuds into the charging case, the battery light present on the charging case will starting blinking, once the product will be fully charged the battery light will glow constantly. The earbuds takes up to 1.5 hours to completely charge.",
  "Place the earbuds into the charging case, the battery light present on the charging case will starting blinking, once the product will be fully charged the battery light will glow constantly. The earbuds takes up to 1.5 hours to completely charge.",
  "These earbuds features the latest Bluetooth 5.1 version",
  "Yes, you can use any 5V adapter to charge your product."
  ]
  },
  "quantity": 3,
  "color": "grey ",
  "createdAt": "2022-09-01T18:49:43.999Z",
  "updatedAt": "2022-09-01T18:49:43.999Z",
  "__v": 0
  },
  {
  "_id": "6310fedbebb6eec188659483",
  "user": "630fa8759d0ed3fb86ed3412",
  "product": {
  "_id": "630a6e808fbf610811d8a7d6",
  "title": "AUDIO PROWESS",
  "category": "TWS",
  "tagline": "Immersive Gaming",
  "cover_image": "https://user-images.githubusercontent.com/90475607/187312359-784bd7a8-0ecd-454b-a46b-39715597d75a.png",
  "productModel": "PROPODS-X",
  "price": "5999",
  "discountedPrice": "1299",
  "tags": [
  ""
  ],
  "image": [
  "https://user-images.githubusercontent.com/93372275/187044725-be5f55a1-52e0-46f8-9c92-ea074b51ad22.png",
  "https://user-images.githubusercontent.com/93372275/187044818-a9586d3a-1c92-403e-915b-8b9105d8df1e.png"
  ],
  "colorName": [
  "white",
  "red"
  ],
  "FAQ_Ques": [
  "Can I Play or Pause the music?",
  "Can I switch to Next or Previous track?",
  "Do these headphones have an inbuilt microphone?",
  "Which Bluetooth version do these Headphones support?",
  "Can I charge my headphones with a Smartphone charger ?"
  ],
  "FAQ_Ans": [
  "Double tap any earbud to Play or Pause track",
  "Long press for 2 seconds left or right earbud to switch between Previous or Next track.",
  "Yes, you can accept calls via these headphones.",
  "Boult Audio Propods-X supports Bluetooth 5.1 version",
  "Yes, you can use any 5 or 10 watt adapter to charge your product."
  ]
  },
  "quantity": 1,
  "color": "red",
  "createdAt": "2022-09-01T18:50:03.775Z",
  "updatedAt": "2022-09-01T18:50:03.775Z",
  "__v": 0
  }
  ]

function Cart() {

 
  const [totalProducts, setTotalProducts] = useState(0);
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(()=>{
    setCartProducts(obj);
  }, [])

  const navigate = useNavigate();

  return (
    <div className='cart-page'>
      <div className='navigation-img'>
        <img src='https://user-images.githubusercontent.com/90475607/188237099-9c643f71-9ea1-49e0-8440-b23833b04573.png' />
      </div>
      <div className='cart-haeding'>Your Cart <span>({totalProducts})</span></div>
      {cartProducts.length == 0
      ?
        <div className='no-item-in-cart'>
          <img src='https://user-images.githubusercontent.com/90475607/188237808-6fd15d2f-303e-48da-8d8b-0938eabf8926.jpg' /> <br />
          <button onClick={()=>navigate("/")}>Continue Shopping</button>
        </div>
      :
        <div className='cart-section'>
          <p>Selected Items</p>
          <div>
            <div className='products-section'>
              {cartProducts.map((el, i) =>
                <div key={i}>
                  <div  onClick={()=>navigate(`/details?id=${el.product._id}`)} style={{backgroundImage:`url(${el.product.image[el.product.colorName.indexOf(el.color)]})`}}></div>
                </div>
              )}
            </div>
            <div className='payment-section'>
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default Cart
