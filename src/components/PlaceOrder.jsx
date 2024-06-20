import { TextInput } from "flowbite-react";
import React, { useContext, useState } from "react";
import { DataContext } from "../context/Dataprovider";
import { postOrder } from "../service/api";

const PlaceOrder = () => {
  const { addTocart, food } = useContext(DataContext);

  // Initial state for form data
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    zipCode: "",
    state: "",
    country: "",
    phone: "",
  });

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };
  //count the item
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

  // Function to calculate applicable price
  const charge = () => {
    let finalPrice = totalPrice;
    if (totalPrice >= 200) {
      finalPrice += 80;
    }
    return finalPrice;
  };

  let applicablePrice = charge();

  // Function to handle navigation (proceed to payment)
  const handleNavigate = () => {
    // Handle navigation logic here
  };
  //handle submit function to submit the data or payment info
  const handleSubmit = async (e) => {
    // e.preventDefault()
    e.preventDefault();
    let orderItems = [];
    food.map((item) => {
      if (addTocart[item._id] > 0) {
        let itemInfo = item;
        itemInfo["quantity"] = addTocart[item._id];
        orderItems.push(itemInfo);
      }
      console.log(orderItems);
    });
    try {
      const orderData = {
        address: data,
        items: orderItems,
        amount: applicablePrice,
      };
      const token= localStorage.getItem('food_token')
      const res = await postOrder(orderData,token );
      console.log("the data after making paymt is ", res);
      if(res.data.success){
        const{session_url}=res.data
        window.location.replace(session_url)
      }else{
        alert('Error')
      }
    } catch (error) {
      console.log("the error from placeorder component is", error.message);
    }
  };

  return (
    <>
      <form
        className="main w-full px-2 md:px-28 flex md:flex-row flex-col md:pt-8 mt-2 justify-between"
        onSubmit={handleSubmit}
      >
        <div className="left md:w-1/2 border-r rounded-lg shadow-md md:pb-12 px-2 pb-2">
          <p className="text-center font-semibold text-black mb-2">
            Delivery Information
          </p>
          <div className="name flex flex-col md:flex-row justify-between gap-2 mb-2">
            <div className="first">
              <TextInput
                placeholder="Enter Your First Name"
                type="text"
                name="firstName"
                value={data.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="last">
              <TextInput
                placeholder="Enter Your Last Name"
                type="text"
                name="lastName"
                value={data.lastName}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="email mb-2">
            <TextInput
              placeholder="Enter Your Email Address"
              type="email"
              name="email"
              value={data.email}
              onChange={handleChange}
            />
          </div>
          <div className="address mb-2">
            <TextInput
              placeholder="Enter Your Address"
              type="text"
              name="address"
              value={data.address}
              onChange={handleChange}
            />
          </div>
          <div className="city flex justify-between flex-row mb-2 gap-2">
            <TextInput
              placeholder="City"
              type="text"
              name="city"
              value={data.city}
              onChange={handleChange}
            />
            <TextInput
              placeholder="State"
              type="text"
              name="state"
              value={data.state}
              onChange={handleChange}
            />
          </div>
          <div className="zip flex justify-between flex-row">
            <TextInput
              placeholder="Zip Code"
              type="text"
              name="zipCode"
              value={data.zipCode}
              onChange={handleChange}
            />
            <TextInput
              placeholder="Country"
              type="text"
              name="country"
              value={data.country}
              onChange={handleChange}
            />
          </div>
        </div>
        {/* payment summary */}
        <div className="right md:w-1/2 w-full relative bg-slate-800 h-60 md:h-80">
          <p className="text-white border-b py-2 text-center">
            Payment Summary
          </p>
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
              <p className="font-semibold text-white">
                {`${(applicablePrice + 50).toFixed(2)}`}
              </p>
            </div>
            <button
              className="outline bg-white px-3 py-2 mt-1 absolute bottom-2 w-[92%] mx-auto rounded-lg text-black"
              type="submit"
            >
              PROCEED TO PAYMENT
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default PlaceOrder;
