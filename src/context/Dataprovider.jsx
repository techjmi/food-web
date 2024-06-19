import React, { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";
import { getCartData, getUserInfo } from "../service/api";

// Create the DataContext
export const DataContext = createContext(null);

const Dataprovider = ({ children }) => {
  const [food, setFood] = useState([]);
  const [addTocart, setAddTocart] = useState({});
  const [currentUser, setCurrentUser] = useState(null);
  // const[getCart, setGetCart] =useState({})

  const fetchUser = async () => {
    try {
      const token = localStorage.getItem("food_token");
      // console.log(token);
      if (token) {
        const userDetails = await getUserInfo(token);
        // console.log(userDetails);
        setCurrentUser(userDetails);
      }
    } catch (error) {
      console.log("Error fetching user info:", error.message);
    }
  };
  //fecth cart data
  const fetchCart = async () => {
    try {
      const token = localStorage.getItem('food_token');
      if (token) {
        const res = await getCartData(token);
        // console.log('res crat',res )
        if (res.data && res.data.cartData) {
          setAddTocart(res.data.cartData);
        } else {
          setAddTocart({});
        }
      }
    } catch (error) {
      console.error('Error fetching cart data:', error.message);
      // Handle error (e.g., setAddTocart({}) or show error message)
    }
  };
  

  useEffect(() => {
    const token=localStorage.getItem('food_token')
    if(token){
      fetchUser();
      fetchCart()
    }
  }, []);
 
  
  return (
    <DataContext.Provider
      value={{
        food,
        setFood,
        addTocart,
        setAddTocart,
        currentUser,
        setCurrentUser,
        fetchUser
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default Dataprovider;
