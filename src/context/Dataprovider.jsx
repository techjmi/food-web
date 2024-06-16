import React, { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";
import { getUserInfo } from "../service/api";

// Create the DataContext
export const DataContext = createContext(null);

const Dataprovider = ({ children }) => {
  const [food, setFood] = useState(food_list);
  const [addTocart, setAddTocart] = useState({});
  const [currentUser, setCurrentUser] = useState(null);

  const fetchUser = async () => {
    try {
      const token = localStorage.getItem("food_token");
      console.log(token);
      if (token) {
        const userDetails = await getUserInfo(token);
        console.log(userDetails);
        setCurrentUser(userDetails);
      }
    } catch (error) {
      console.log("Error fetching user info:", error.message);
    }
  };

  useEffect(() => {
    fetchUser();
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
