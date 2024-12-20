import React, { useState } from 'react';
import { assets } from '../assets/assets';
import axios from 'axios';
import { backendUrl } from '../App';

const Add = () => {
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);
  const [image4, setImage4] = useState(null);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('Men');
  const [subcategory, setSubcategory] = useState('Topwear');
  const [bestseller, setBestseller] = useState(false);
  const [sizes, setSizes] = useState([]);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
        const formData = new FormData()

        formData.append("name",name)
        formData.append("description",description)
        formData.append("price",price)
        formData.append("category",category)
        formData.append("subcategory",setCategory)
        formData.append("bestseller",bestseller)
        formData.append("sizes",JSON.stringify(sizes))

        image1 && formData.append("image1",image1)
        image2 && formData.append("image2",image2)
        image3 && formData.append("image3",image3)
        image4 && formData.append("image4",image4)

        const response = await axios.post(backendUrl + "/api/product/add",formData)
        console.log(response.data);
        

    } catch (error) {
        
    }
  }

  const handleSizeClick = (size) => {
    setSizes((prevSizes) => 
      prevSizes.includes(size) 
        ? prevSizes.filter((item) => item !== size) 
        : [...prevSizes, size]
    );
  };

  return (
    <form className="flex flex-col w-full items-start gap-3">
      <div>
        <p className="mb-2">Upload Image</p>
        <div className="flex gap-2">
          {[image1, image2, image3, image4].map((image, index) => {
            const imageKey = `image${index + 1}`;
            return (
              <label key={imageKey} htmlFor={imageKey}>
                <img 
                  className="w-20" 
                  src={image ? URL.createObjectURL(image) : assets.upload_area} 
                  alt={`Upload ${index + 1}`} 
                />
                <input 
                  onChange={(e) => { 
                    const file = e.target.files[0]; 
                    eval(`setImage${index + 1}(file)`); 
                  }} 
                  type="file" 
                  id={imageKey} 
                  hidden 
                />
              </label>
            );
          })}
        </div>
      </div>

      <div className="w-full">
        <p className="mb-2">Product Name</p>
        <input 
          onChange={(e) => setName(e.target.value)} 
          value={name} 
          className="w-full max-w-[500px] px-3 py-2" 
          type="text" 
          placeholder="Type here" 
          required 
        />
      </div>

      <div className="w-full">
        <p className="mb-2">Product Description</p>
        <textarea 
          onChange={(e) => setDescription(e.target.value)} 
          value={description} 
          className="w-full max-w-[500px] px-3 py-2" 
          placeholder="Write content here" 
          required 
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-2 w-full sm:gap-8">
        <div>
          <p className="mb-2">Product Category</p>
          <select onChange={(e) => setCategory(e.target.value)} className="w-full px-3 py-2">
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
          </select>
        </div>

        <div>
          <p className="mb-2">Sub Category</p>
          <select onChange={(e) => setSubcategory(e.target.value)} className="w-full px-3 py-2">
            <option value="Topwear">Topwear</option>
            <option value="Bottomwear">Bottomwear</option>
            <option value="Winterwear">Winterwear</option>
          </select>
        </div>

        <div>
          <p className="mb-2">Product Price</p>
          <input 
            onChange={(e) => setPrice(e.target.value)} 
            value={price} 
            className="w-full px-3 py-2 sm:w-[120px]" 
            type="number" 
            placeholder="25" 
          />
        </div>
      </div>

      <div>
        <p className="mb-2">Product Sizes</p>
        <div className="flex gap-3">
          {["S", "M", "L", "XL", "XXL"].map((size) => (
            <div key={size} onClick={() => handleSizeClick(size)}>
              <p 
                className={`${sizes.includes(size) ? "bg-pink-100" : "bg-slate-200"} px-3 py-1 cursor-pointer`}
              >
                {size}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-2 mt-2">
        <input 
          type="checkbox" 
          id="bestseller" 
          checked={bestseller} 
          onChange={() => setBestseller(!bestseller)} 
        />
        <label className="cursor-pointer" htmlFor="bestseller">Add to Bestseller</label>
      </div>

      <button type="submit" className="w-28 py-3 mt-4 bg-black text-white">ADD</button>
    </form>
  );
};

export default Add;
