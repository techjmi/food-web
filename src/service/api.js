import axios from 'axios'
const urlfood='http://localhost:4000/api/food'
//post food data code
export const PostFood=async(data)=>{
try {
    const response= axios.post(`${urlfood}/addfood`,data)
    return response
    
} catch (error) {
    console.log('The error While posting the food is', error.message)
}
}