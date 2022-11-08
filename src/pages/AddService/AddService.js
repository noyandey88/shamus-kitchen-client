import { Label, Textarea, TextInput } from 'flowbite-react';
import React, { useState } from 'react';

const AddService = () => {
  const [dishInfo, setDishInfo] = useState({
    name: '',
    imageUrl: '',
    price: '',
    ratings: '',
    description: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    console.log(dishInfo);
    
    // add dish to databse
    fetch('http://localhost:5000/services', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      }
    })
  }
  return (
    <div className="w-3/4 mx-auto">
      <div className="text-center mt-4 mb-8">
        <h2 className="text-4xl text-orange-500 font-semibold uppercase">Add Dish as a Service</h2>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="grid grid-cols-2 gap-4">
          {/* name */}
          <div>
            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="name"
                  value="Dish Name"
                />
              </div>
              <TextInput
                onChange={(e)=> setDishInfo({...dishInfo, name: e.target.value})}
                id="name"
                type="text"
                name="name"
                required={true}
              />
            </div>
          </div>
          {/* image */}
          <div>
            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="image"
                  value="Dish Image URL"
                />
              </div>
              <TextInput
              onChange={(e)=> setDishInfo({...dishInfo, imageUrl: e.target.value})}
                id="image"
                type="text"
                name="image"
                required={true}
              />
            </div>
          </div>
          {/* price */}
          <div>
            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="price"
                  value="Dish Price"
                />
              </div>
              <TextInput
                onChange={(e)=> setDishInfo({...dishInfo, price: e.target.value})}
                id="price"
                type="text"
                name="price"
                required={true}
              />
            </div>
          </div>
          {/* rating */}
          <div>
            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="rating"
                  value="Rating"
                />
              </div>
              <TextInput
              onChange={(e)=> setDishInfo({...dishInfo, ratings: e.target.value})}
                id="rating"
                type="text"
                maxLength="3"
              />
            </div>
          </div>
        </div>
        {/* description */}
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="description"
              value="Dish Description"
            />
          </div>
          <Textarea
            onChange={(e)=> setDishInfo({...dishInfo, description: e.target.value})}
            id="description"
            placeholder="Dish description"
            name="description"
            required={true}
            rows={4}
          />
        </div>
        <button className="w-full bg-orange-500 hover:bg-orange-600 transition-colors text-white font-bold rounded-md py-2" type="submit">Add Dish</button>
      </form>
    </div>
  );
};

export default AddService;