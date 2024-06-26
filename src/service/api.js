import axios from 'axios'
const urlfood='https://food-backend-5zo6.onrender.com/api/food'
const userURl="https://food-backend-5zo6.onrender.com/api/user"
const cartUrl="https://food-backend-5zo6.onrender.com/api/cart"
const PaymentUrl="https://food-backend-5zo6.onrender.com/api/order"
// const urlfood='http://localhost:4000/api/food'
// const userURl='http://localhost:4000/api/user'
// const cartUrl='http://localhost:4000/api/cart'
// const PaymentUrl='http://localhost:4000/api/order'
// post food data code
export const PostFood=async(data)=>{
try {
    const response= axios.post(`${urlfood}/addfood`,data)
    return response
    
} catch (error) {
    console.log('The error While posting the food is', error.message)
}
}
//get food data code from database and show it in a home page or food page
export const getFood= async()=>{
    try {
        const res=await axios.get(`${urlfood}/foodlist`)
        // console.log(res)
        return res.data
    } catch (error) {
        console.log('The error While getting the food is', error.message)
    }
}
//user signup code
export const Signup=async(data)=>{
    try {
        const response= await axios.post(`${userURl}/signup`,data)
        return response
    } catch (error) {
        console.log('The error While Signup is', error.message)
    }
   
}
//user login code
export const LoginUser=async(data)=>{
    try {
        const response= await axios.post(`${userURl}/login`,data)
        return response.data
        
    } catch (error) {
        console.log('The error While posting the food is', error.message)
    }
    }
    //get user based on token system
    export const getUserInfo= async(token)=>{
        // console.log('tk', token)
        // console.log('function called')
        try {
            const response= await axios.get(`${userURl}/userinfo`,{
                headers:{
                    Authorization: `Bearer ${token}`,
                }
            })
            // console.log('api res', response.data)
            return response.data
            
        } catch (error) {
            console.log('The error While getting the user info is', error.message)
        }
    }
    //cart function logic
    //add to cart logic code
    export const addInCart= async(itemId, token)=>{
        try {
            const res= await axios.post(`${cartUrl}/add`,itemId,{
                headers:{
                    Authorization: `Bearer ${token}`,
                }
            })
            // console.log(res)
            return res
        } catch (error) {
            console.log('The error While adding to the cart', error.message)
        }
    }
    //remove cart item function
    export const removeFromCart= async(itemId, token)=>{
        console.log('removed called')
        try {
            const res= await axios.post(`${cartUrl}/remove`,itemId,{
                headers:{
                    Authorization: `Bearer ${token}`,
                }
            })
            // console.log(res)
            return res
        } catch (error) {
            console.log('The error While adding to the cart', error.message)
        }
    }
    //getcart item code or logic
    export const getCartData= async(token)=>{
        try {
            const res= await axios.get(`${cartUrl}/get`,{
                headers:{
                    Authorization:`Bearer ${token}`
                }
            })
            // console.log(res)
            return res
            
        } catch (error) {
            console.log('The error While getting the cart data is', error.message)
        }
    }

    //payment api
    
export const postOrder= async(data, token)=>{
    try {
        const res= await axios.post(`${PaymentUrl}/place`,data,{
            headers:{
                Authorization:`Bearer ${token}`
            }
        })
        // console.log('the payment res', res)
        return res
    } catch (error) {
        console.log('The error during making the payment is', error.message)
    }
}
//verify order code
export const PaymentVerify= async(success, orderId)=>{
    try {
        const res= await axios.post(`${PaymentUrl}/verify`,{success, orderId})
        return res
    } catch (error) {
        console.log('The error during verifying the payment is', error.message)
    }
}
//get order of user
export const getOrder=async(token)=>{
    try {
        return await axios.get(`${PaymentUrl}/user-order`,{
            headers:{
                Authorization:`Bearer ${token}`
            }
        })
    } catch (error) {
        console.log('The error While getting user order is', error.message)
    }
}

//get all order for admin panel
export const getAllorder=async(token)=>{
    try {
        const res= await axios.get(`${PaymentUrl}/all-order`,{
            headers:{
                Authorization:`Bearer ${token}`
            }
        })
        // console.log('order all', res)
        return res.data
    } catch (error) {
        console.log('The error While getting all order order is', error.message)
    }
}
//update the status of order for admin panel
export const update=async(orderId,status)=>{
try {
    return await axios.put(`${PaymentUrl}/status`, {orderId, status})
} catch (error) {
    console.log('The error While updating the order is', error.message)
}
}

//get user data and last mon user for admin dashboard
export const getAllUser= async(token)=>{
    try {
        const res= await axios.get(`${userURl}/getuser`,{
            headers:{
                Authorization:`Bearer ${token}`
            }
        })
        // console.log(res.data)
        return res.data
    } catch (error) {
        console.log('The error While getting the all user is', error.message)
    }
}

//top order api
export const fetchTopOrder= async(token)=>{
    try {
        const res =await axios.get(`${PaymentUrl}/top-order`
            ,{
                headers:{
                    Authorization:`Bearer ${token}`
                }
            }
        )
        // console.log('topodre', res)
        return res.data
    } catch (error) {
        console.log('The error While getting the top order is', error.message)
    }
}