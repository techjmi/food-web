import React, { createContext, useEffect, useState } from "react";
import { getAllUser, getAllorder, getCartData, getUserInfo } from "../service/api";

// Create the DataContext
export const DataContext = createContext(null);
const Dataprovider = ({ children }) => {
  const [food, setFood] = useState([]);
  const [addTocart, setAddTocart] = useState({});
  const [currentUser, setCurrentUser] = useState(null);
  const[loading, setloading]= useState(false)
  const [users,setUsers]= useState([])
  const[orders,setOrders]= useState({})
  const token = localStorage.getItem("food_token");
  const fetchUser = async () => {
    const token = localStorage.getItem("food_token");
    try {
      setloading(true)
      if (token) {
        const userDetails = await getUserInfo(token);
        if (userDetails) { // Check if userDetails is not null or undefined
          // console.log(userDetails);
          // console.log(userDetails.isAdmin);
          setCurrentUser(userDetails);
          setloading(false)
        } else {
          console.log("No user details returned");
        }
      }
    } catch (error) {
      console.log("Error fetching user info:", error.message);
    }
  };
  
  //fecth cart data
  const fetchCart = async () => {
    const token = localStorage.getItem("food_token")
    try {
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
  //const get user adata for admin
  const getAdminuser= async()=>{
    try {
      setloading(true)
      const res= await getAllUser(token)
      if(res.success===true){
        setUsers(res)
        // console.log('...',res.users)
        setloading(false)
      }
      // console.log('the admin user',users)
    } catch (error) {
      console.error('Error fetching user data:', error.message);
      setloading(false)
    }
  }
   //fecth the order of user to show in admin panel
  const getOrder=async()=>{
    try {
      setloading(true)
      const res= await getAllorder(token)
      // console.log('order res', res.data)
      if(res.success===true){
        setOrders(res)
        setloading(false)
      }
    } catch (error) {
      console.error('Error fetching order is:', error.message);
      setloading(false)
    }
   }


  useEffect(() => {
    const token=localStorage.getItem('food_token')
    if(token){
      fetchUser();
      fetchCart()
      getAdminuser()
      getOrder()
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
        fetchUser,
        users,
        setUsers,
        loading,
        orders,setOrders
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default Dataprovider;
