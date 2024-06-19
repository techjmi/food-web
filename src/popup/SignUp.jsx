import { Button } from "flowbite-react";
import { useNavigate } from 'react-router-dom';
import React, { useContext, useState } from "react";
import { LoginUser, Signup } from "../service/api";
import { storage } from "../firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { DataContext } from "../context/Dataprovider";

const SignUp = () => {
  const[data, setData]= useState({
    name:'',
    email:"",
    password:"",
    profilePic:""
  })
  //image section upload image part
  const [image, setImage] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const { fetchUser } = useContext(DataContext);
  const navigate= useNavigate()

  // Handle image selection
  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };
  //image uplaod function
  const handleUpload = async () => {
    if (!image) {
      throw new Error("No image file selected");
    }

    try {
      const storageRef = ref(storage, `images/${image.name}`);
      const uploadTask = uploadBytesResumable(storageRef, image);

      // Track upload progress
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`Upload is ${progress}% done`);
          setUploadProgress(progress);
        },
        (error) => {
          console.error("Upload error:", error);
          throw error;
        },
        async () => {
          try {
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
            // console.log("File available at", downloadURL);
            // Set download URL to formData
            // setFormData({ ...formData, image: downloadURL });
          } catch (error) {
            console.error("Error getting download URL:", error);
            throw error;
          }
        }
      );

      return new Promise((resolve, reject) => {
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            // Progress
          },
          (error) => {
            console.error("Upload error:", error);
            reject(error);
          },
          async () => {
            try {
              const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
              resolve(downloadURL);
            } catch (error) {
              reject(error);
            }
          }
        );
      });
    } catch (error) {
      console.error("Error during image upload:", error);
      throw error;
    }
  };

  //handleChange function
  const handleChange= (e)=>{
    const name=e.target.name
    const value=e.target.value
    setData({
      ...data, [name]:value
    })
  }
  //hanle submit function
  const handleSubmit=async(e)=>{
    e.preventDefault();
    try {
      const imageUrl= await handleUpload()
      const singupData={...data, profilePic:imageUrl}
      const res=await Signup(singupData)
      localStorage.setItem('food_token', res.data.token)
      await fetchUser()
      navigate('/')
    } catch (error) {
      console.log('The error while submitting the form is', error.message)
    }
  }
  return (
    <form className="space-y-2 md:space-y-2 pt-0"onSubmit={handleSubmit}>
      <div className="image">
        <label htmlFor="Profile_Pic"className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
          Upload Pic
        </label>
        <input type="file" name="profile_Pic" onChange={handleImageChange}/>
      </div>
      <div>
        <label
          htmlFor="name"
          className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter your name"
          required
          onChange={handleChange}
          value={data.name}
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="name@company.com"
          required
          onChange={handleChange}
          value={data.email}
        />
      </div>
      <div>
        <label
          htmlFor="password"
          className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
        >
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="••••••••"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
          onChange={handleChange}
          value={data.password}
        />
      </div>
      
      <Button className="text-center mx-auto" gradientDuoTone='purpleToPink' type="submit">Create Account</Button>
    </form>
  );
};

export default SignUp;
