import { createContext, useEffect, useState } from "react";
import axios from 'axios'

export const Storecontext = createContext(null);

const Storecontextprovider = (props) => {
  const [cartItems, setCartItems] = useState({});
<<<<<<< HEAD:Frontend/src/components/context/Storecontext.jsx
  const [food_list,setFoodList] = useState([])
=======
  
  const url = "http://localhost:4000"
  const [token , settoken] = useState("")

>>>>>>> e918f9ce7dc57083903bffc554d0a2d955475728:Frontend/src/components/content/Storecontext.jsx
  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
        totalAmount += itemInfo.price * cartItems[item];
      }
    }
    return totalAmount;
  }

<<<<<<< HEAD:Frontend/src/components/context/Storecontext.jsx
  const fetchFoodList = async() => {
    const response = await axios.get(url + "/api/food/list");
    setFoodList(response.data.data)
  }

  useEffect(()=>{
    async function loadData() {
      await fetchFoodList()
      if(localStorage.getItem("token")){
        setToken(localStorage.getItem("token"));
      }
    }
    loadData();
  })
=======
  useEffect(()=>{
    if(localStorage.getItem("token")){
      settoken(localStorage.getItem("token"));
    }
  },[])
>>>>>>> e918f9ce7dc57083903bffc554d0a2d955475728:Frontend/src/components/content/Storecontext.jsx

  const contextvalue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalAmount,
    url,
    token,
    settoken
  };
  return (
    <Storecontext.Provider value={contextvalue}>
      {props.children}
    </Storecontext.Provider>
  );
};

export default Storecontextprovider;
