import { TextInput } from "flowbite-react";
import React, { useContext } from "react";
import { DataContext } from "../context/Dataprovider";

const PlaceOrder = () => {
    const { addTocart, food, setAddTocart } = useContext(DataContext);
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
  //payment
  const handleNavigate=()=>{

  }
  return (
    <>
      <div className="main w-full px-2 md:px-28 flex md:flex-row flex-col md:pt-8 mt-2 justify-between">
        <div className="left md:w-1/2 border-r rounded-lg shadow-md md:pb-12 px-2 pb-2">
          <p className="text-center font-semibold text-black mb-2">
            Delivery Information
          </p>
          <div className="name flex flex-col md:flex-row justify-between gap-2 mb-2">
            <div className="first">
              <TextInput placeholder="Eneter Your First Name"type="text" />
            </div>
            <div className="last">
              <TextInput placeholder="Eneter Your Last Name"type="text" />
            </div>
          </div>
          <div className="email mb-2">
            <TextInput  placeholder="Enter Your Email Address"type="email"/>
          </div>
          <div className="address mb-2">
            <TextInput  placeholder="Enter Your  Address"type="email"/>
          </div>
          <div className="city flex  justify-between flex-row mb-2 gap-2">
            <TextInput placeholder="City" type="text" />
            <TextInput placeholder="State" type="text"/>
          </div>
          <div className="zip flex  justify-between flex-row">
            <TextInput placeholder="Zip Code" type="text" />
            <TextInput placeholder="Country" type="text"/>
          </div>
        </div>
        {/* payment summary */}
        <div className="right md:w-1/2 w-full relative bg-slate-800 h-60 md:h-80">
        <p className="text-white border-b py-2 text-center">Payment Summary</p>
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
            <p className="font-semibold text-white">
              Total Amount ({itemCount} item{itemCount > 1 ? "s" : ""})
            </p>
            <p className="font-semibold text-white">{`${(
              applicablePrice + 50
            ).toFixed(2)}`}</p>
          </div>
          <button className="outline bg-white px-3 py-2 mt-1 absolute bottom-2 w-[92%] mx-auto rounded-lg text-black" onClick={handleNavigate}>
            PROCEED TO PAYMENT
          </button>
        </div>
        </div>
      </div>
    </>
  );
};

export default PlaceOrder;
