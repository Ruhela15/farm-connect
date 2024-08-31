import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const Storecontext = createContext(null);

const Storecontextprovider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const [foodList, setFoodList] = useState([]);
  const [token, setToken] = useState("");

  const url = import.meta.env.VITE_API_URL || "http://localhost:4000";

  const addToCart = async (itemId) => {
    try {
      setCartItems((prev) => {
        const newQuantity = (prev[itemId] || 0) + 1;
        return { ...prev, [itemId]: newQuantity };
      });

      if (token) {
        await axios.post(`${url}/api/cart/add`, { itemId }, { headers: { Authorization: `Bearer ${token}` } });
      }
    } catch (error) {
      if (error.response?.status === 401) {
        console.error("Token is invalid or expired. Please log in again.");
        // Optionally: clear token and redirect to login page
        localStorage.removeItem("token");
        setToken("");
      } else {
        console.error("Error adding to cart:", error.response?.data || error.message);
      }
    }
  };

  const removeFromCart = async (itemId) => {
    try {
      setCartItems((prev) => {
        const newQuantity = (prev[itemId] || 0) - 1;
        if (newQuantity <= 0) {
          const { [itemId]: _, ...rest } = prev;
          return rest;
        }
        return { ...prev, [itemId]: newQuantity };
      });

      if (token) {
        await axios.post(`${url}/api/cart/remove`, { itemId }, { headers: { Authorization: `Bearer ${token}` } });
      }
    } catch (error) {
      if (error.response?.status === 401) {
        console.error("Token is invalid or expired. Please log in again.");
        localStorage.removeItem("token");
        setToken("");
      } else {
        console.error("Error removing from cart:", error.response?.data || error.message);
      }
    }
  };

  const getTotalAmount = () => {
    return Object.keys(cartItems).reduce((totalAmount, item) => {
      if (cartItems[item] > 0) {
        const itemInfo = foodList.find((product) => product._id === item);
        if (itemInfo) {
          return totalAmount + itemInfo.price * cartItems[item];
        }
      }
      return totalAmount;
    }, 0);
  };

  const fetchFoodList = async () => {
    try {
      const response = await axios.get(`${url}/api/food/list`);
      setFoodList(response.data.data || []);
    } catch (error) {
      console.error("Failed to fetch food list:", error.response?.data || error.message);
    }
  };

  const loadCartData = async (token) => {
    try {
      const response = await axios.post(`${url}/api/cart/get`, {}, { headers: { Authorization: `Bearer ${token}` } });
      setCartItems(response.data.cartData || {});
    } catch (error) {
      if (error.response?.status === 401) {
        console.error("Token is invalid or expired. Please log in again.");
        localStorage.removeItem("token");
        setToken("");
      } else {
        console.error("Failed to load cart data:", error.response?.data || error.message);
      }
    }
  };

  useEffect(() => {
    const loadData = async () => {
      await fetchFoodList();
      const storedToken = localStorage.getItem("token");
      if (storedToken) {
        setToken(storedToken);
        await loadCartData(storedToken);
      }
    };
    loadData();
  }, []); // Dependency array should be empty to avoid infinite loop

  const contextValue = {
    foodList,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalAmount,
    url,
    token,
    setToken
  };

  return (
    <Storecontext.Provider value={contextValue}>
      {props.children}
    </Storecontext.Provider>
  );
};

export default Storecontextprovider;
