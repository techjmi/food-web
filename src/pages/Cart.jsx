import React, { useContext } from "react";
import { DataContext } from "../context/Dataprovider";
import BtnGroup from "../components/BtnGroup";
import { useNavigate } from "react-router-dom";
import { addInCart, removeFromCart } from "../service/api";

const Cart = () => {
  const { addTocart, food, setAddTocart } = useContext(DataContext);
const navigate = useNavigate()
  const itemCount = Object.keys(addTocart).length;

  // Function to calculate the total price
  const calculateTotalPrice = () => {
    return food.reduce((total, item) => {
      if (addTocart[item._id] > 0) {
        return total + item.price * addTocart[item._id];
      }
      return total;
    }, 0);
  };

  const totalPrice = calculateTotalPrice();
  const charge = () => {
    let finalPrice = totalPrice;

    if (totalPrice >= 200) {
      finalPrice += 80;
    }
    return finalPrice;
  };
  let applicablePrice = charge();
  const addCart = async (itemId) => {
    try {
      const token = localStorage.getItem('food_token');
  // console.log(itemId)
      // Call API to add item to cart
      const payload= {itemId}
      const response = await addInCart(payload, token);
  
      // Update local state with the new item count
      setAddTocart((prevState) => ({
        ...prevState,
        [itemId]: (prevState[itemId] || 0) + 1,
      }));
    } catch (error) {
      console.error('Error adding to cart:', error.message);
    }
  };
  
  //remove from cart
  const removeCart = async (itemId) => {
    try {
      const token = localStorage.getItem('food_token'); // Retrieve token from localStorage or wherever it's stored
  
      // Call API to remove item from cart
      const payload= {itemId}
      const response = await removeFromCart(payload, token);
  
      if (addTocart[itemId] === 1) {
        // If only one item, remove it from cart
        const updatedCart = { ...addTocart };
        delete updatedCart[itemId];
        setAddTocart(updatedCart);
      } else if (addTocart[itemId] > 1) {
        // Decrease quantity if more than one
        setAddTocart((prevState) => ({
          ...prevState,
          [itemId]: prevState[itemId] - 1,
        }));
      }
    } catch (error) {
      console.error('Error removing from cart:', error.message);
    }
  };
  
// handle navigate function
const handleNavigate=()=>{
  navigate('/placeorder')
}
  return (
    <div className="md:px-28 w-full flex flex-col md:flex-row pb-2 px-2">
      <div className="left w-full md:w-[70%] overflow-y-scroll md:max-h-[85vh] no-scrollbar border-r">
        <p className="border-b rounded-md py-2">My Cart &nbsp;({itemCount})</p>
        {food.map((item) => {
          if (addTocart[item._id] > 0) {
            return (
              <div key={item._id} className="flex border-b pb-2">
                <div className="image w-[50%] h-auto me-3 mt-1">
                  <img src={item.image} alt="x" className="w-full rounded-md" />
                </div>
                <div className="details ms-5 flex flex-col justify-between">
                  <div className="price">
                    <p>
                      <span className="font-bold">Name:</span> &nbsp;{item.name}
                    </p>
                    <p>
                      <span className="font-bold">Quantity:</span> &nbsp;
                      {addTocart[item._id]}
                    </p>
                    <p>
                      <span className="font-bold">Price:</span> &nbsp;
                      {item.price * addTocart[item._id]}
                    </p>
                  </div>
                  <div className="button">
                    <BtnGroup
                      removeCart={removeCart}
                      id={item._id}
                      addCart={addCart}
                    />
                  </div>
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>
    {/* price details */}
      <div className="right bg-slate-500 md:w-[30%] z-50 shadow-lg rounded-lg relative overflow-y-auto h-60 md:h-80">
        <p className="text-white border-b py-2 text-center">PRICE DETAILS</p>
        <div className="price ms-3 text-blue-50 mt-1">
          <div className="total flex justify-between me-2 border-b py-2">
            <p>
              Price ({itemCount} item{itemCount > 1 ? "s" : ""})
            </p>
            <p>{applicablePrice.toFixed(2)}</p>
          </div>
          {/* <br className='border-b text-white'/> */}
          <div className="charges flex justify-between me-2 border-b py-2">
            <p>
              Delivery ({itemCount} item{itemCount > 1 ? "s" : ""})
            </p>
            <p>50</p>
          </div>
          <div className="charges flex justify-between me-2 border-b py-2">
            <p className="font-semibold text-blue-950">
              Total Amount ({itemCount} item{itemCount > 1 ? "s" : ""})
            </p>
            <p className="font-semibold text-blue-950">{`${(
              applicablePrice + 50
            ).toFixed(2)}`}</p>
          </div>
          <button className="outline bg-white px-3 py-2 mt-1 absolute bottom-2 w-[92%] mx-auto rounded-lg text-black" onClick={handleNavigate}>
            PLACE ORDER
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
