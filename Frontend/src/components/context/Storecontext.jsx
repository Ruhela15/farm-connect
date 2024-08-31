import { createContext, useEffect, useState } from "react";
import { food_list } from "../../assets/assets";;

export const Storecontext = createContext(null);

const Storecontextprovider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const [food_list, setFoodList] = useState([]);
  const url = "http://localhost:4000";
  const [token, settoken] = useState("");

  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1
    }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      if (prev[itemId] > 1) {
        return { ...prev, [itemId]: prev[itemId] - 1 };
      } else {
        const { [itemId]: _, ...rest } = prev;
        return rest;
      }
    });
  };

  const getTotalAmount = () => {
    return Object.entries(cartItems).reduce((total, [item, quantity]) => {
      if (quantity > 0) {
        const itemInfo = food_list.find((product) => product._id === item);
        return total + (itemInfo ? itemInfo.price * quantity : 0);
      }
      return total;
    }, 0);
  };

  const fetchFoodList = async () => {
    try {
      const response = await axios.get(`${url}/api/food/list`);
      setFoodList(response.data.data);
    } catch (error) {
      console.error("Failed to fetch food list:", error);
    }
  };

  useEffect(() => {
    async function loadData() {
      await fetchFoodList();
      const storedToken = localStorage.getItem("token");
      if (storedToken) {
        settoken(storedToken);
      }
    }
    loadData();
  })
  useEffect(()=>{
    if(localStorage.getItem("token")){
      settoken(localStorage.getItem("token"));
    }
  },[])

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
