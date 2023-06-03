import React from "react";
import { useForm } from 'react-hook-form';


const img_hosting_token = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN;

const AddItem = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  // image bb hosting ------------
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`

  const onSubmit = data => {
    // console.log(data);
const formData = new FormData();
formData.append('image', data.image[0])

    fetch(img_hosting_url,{
       method:'POST',
       body:formData
    })
    .then(res =>res.json())
    .then(imgResponse =>{
      // console.log(imgResponse);
      if(imgResponse.success){
        const imgURL = imgResponse.data.display_url;
        const {name,price,category,recipe} = data;
        // short korte gela string thekla parseFloat kore dite hba -------
          const newItem = {name,price: parseFloat(price),category,recipe, image: imgURL}
        console.log(newItem);

      }
    })
    
  }
  console.log(img_hosting_token);
  console.log(errors);
  return (
    <div>
      <div>
        <p className="text-center mb-4 text-yellow-600">
          ---From 11:00am to 10:00pm---
        </p>
        <h2 className="text-center text-3xl mb-8 border-y-4 w-96 mx-auto p-2">
          Add An Item
        </h2>
      </div>
      <form 
       onSubmit={handleSubmit(onSubmit)}
       className="bg-purple-500 p-12"
      >
        <div className="form-control w-full  ">
          <label className="label">
            <span className="label-text font-semibold">Recipe name*</span>
          </label>
          <input
            type="text"
            placeholder="Recipe Name"
            {...register("name", {required: true, maxLength: 120})}
            className="input input-bordered"
          />
        </div>
      <div className="flex ">
      <div className="form-control w-full ml-4">
          <label className="label">
            <span className="label-text">Category *</span>
           
          </label>
          <select
          defaultValue={"pick one"}
          {...register("category", { required: true })}
          className="select select-bordered ">
            <option disabled >
              Pick one
            </option>
            <option>Pizza</option>
            <option>Soup</option>
            <option>Salad</option>
            <option>Desert</option>
            <option>Drinks</option>
            <option>Deshi Item</option>
          </select>
        </div>
        <div className="form-control w-full ml-4 ">
          <label className="label">
            <span className="label-text font-semibold">Price*</span>
          </label>
          <input
            type="number"
            placeholder="Price"
            {...register("price", { required: true })}
            className="input input-bordered w-full mr-3"
          />
        </div>
      </div>
        <div className="form-control">
  <label className="label">
    <span className="label-text">Recipe Details * </span>
  </label>
  <textarea
  {...register("recipe", { required: true })}
  className="textarea textarea-bordered h-24" placeholder="Recipe Details"></textarea>
  
</div>
<div className="form-control w-full ">
  <label className="label">
    <span className="label-text">Item Image *</span>
  
  </label>
  <input
  {...register("image", { required: true })}
  type="file" className="file-input file-input-bordered w-full " />

</div>
<input 
type="submit" value="Add item" className="btn btn-outline btn-warning mt-4 text-center"/>
      </form>
    </div>
  );
};

export default AddItem;
