import axios from 'axios'
const urlfood='https://food-backend-5zo6.onrender.com/api/food'
const userURl="https://food-backend-5zo6.onrender.com/api/user"
//post food data code
export const PostFood=async(data)=>{
try {
    const response= axios.post(`${urlfood}/addfood`,data)
    return response
    
} catch (error) {
    console.log('The error While posting the food is', error.message)
}
}
//user signup code
export const Signup=async(data)=>{
    try {
        const response= axios.post(`${userURl}/signup`,data)
        return response
    } catch (error) {
        console.log('The error While Signup is', error.message)
    }
   
}
//user login code
export const LoginUser=async(data)=>{
    try {
        const response= axios.post(`${userURl}/login`,data)
        return response
        
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