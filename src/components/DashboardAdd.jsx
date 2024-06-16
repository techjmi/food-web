import React, { useState } from "react";
import { PostFood } from "../service/api";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase";

const DashboardAdd = () => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "",
    description: "",
    image: "",
  });
  const [image, setImage] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);

  // Handle image selection
  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  // Upload image function
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
            console.log("File available at", downloadURL);

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

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const imageUrl = await handleUpload();
      //   Then submit food data with image URL
      const foodData = { ...formData, image: imageUrl };
      console.log("datata", foodData);
      await PostFood(foodData);
      // Clear form after submission
      setFormData({
        name: "",
        price: "",
        category: "",
        description: "",
        image: "",
      });
      setImage(null);
    } catch (error) {
      console.error("Error while adding food:", error);
      // Handle error state or display an error message
    }
  };
  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex flex-col justify-center items-center mx-auto">
      <h2 className="text-center font-extrabold my-4">Add Your Food Here</h2>
      <div className="form w-full flex justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className="w-4/5 md:w-auto flex flex-col gap-3 mx-auto"
        >
          {/* File input for image */}
          <input type="file" className="mb-2" onChange={handleImageChange} />

          {/* Price input */}
          <input
            type="number"
            placeholder="Enter The Price"
            onChange={handleChange}
            name="price"
            value={formData.price}
          />

          {/* Name and category inputs */}
          <div className="name flex flex-col md:flex-row gap-3">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name of food"
              required
            />
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
              className="text-center"
            >
              <option value="">Select Category</option>
              <option value="Non-veg">Non-Veg</option>
              <option value="Pure-veg">Pure-Veg</option>
              <option value="Cake">Cake</option>
              <option value="Pasta">Pasta</option>
              <option value="Rolls">Rolls</option>
              <option value="Noodles">Noodles</option>
              <option value="Sandwich">Sandwich</option>
            </select>
          </div>

          {/* Description textarea */}
          <textarea
            placeholder="Write Description Here"
            onChange={handleChange}
            name="description"
            value={formData.description}
          />

          {/* Submit button */}
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Add Food
          </button>
        </form>
      </div>
    </div>
  );
};

export default DashboardAdd;
