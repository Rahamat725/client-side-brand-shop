import { toast } from "react-toastify";
import Navbar from "../Navbar/Navbar";
import { useLoaderData } from "react-router-dom";


const Update = () => {
const loadedData = useLoaderData();
const {_id,brand,description,photo,price,productName,rating,type} = loadedData
console.log(loadedData)
    const handleUpdateProduct = e => {
        e.preventDefault();
        const form = e.target;
        const brand = form.brand.value;
        const productName = form.productName.value;
        const type = form.type.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;
        const photo = form.photo.value;
        const updateProduct = {brand,productName,type,price,description,rating,photo};
        console.log(updateProduct);

        fetch(`http://localhost:5000/brands/${_id}`, {
          method: 'PUT',
          headers:{
            'content-type':'application/json'
          },
          body: JSON.stringify(updateProduct)
        })
        .then(res => res.json())
        .then(data => {
          console.log(data);
        if(data.modifiedCount){
          toast.success('Product Updated Successfully !!');
        }
        // form.reset();
        })
    }
    return (
        <div className="">
        <Navbar></Navbar>
       <div className="-mt-8">
       <h2 className="text-center text-2xl text-blue-600 font-bold ">Update Products</h2>
       <form onSubmit={handleUpdateProduct}  className="  w-1/2 mx-auto  bg-amber-200 pr-4 pl-4">
          <div className="form-control">
            <label className="">
              <span className="label-text">Brand Name</span>
            </label>
            <input type="text" placeholder="Brand Name" name="brand" defaultValue={brand} className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="">
              <span className="lpabel-text">Product Name</span>
            </label>
            <input type="text" placeholder="Product Name" name="productName" defaultValue={productName} className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="">
              <span className="label-text">Type</span>
            </label>
            <input type="text" placeholder="Type" name="type" defaultValue={type} className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="">
              <span className="label-text">Price</span>
            </label>
            <input type="number" placeholder="Price" name="price" defaultValue={price} className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="">
              <span className="label-text">Short Description</span>
            </label>
            <input type="text" placeholder="Short Description" name="description" defaultValue={description} className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="">
              <span className="label-text">Rating</span>
            </label>
            <input type="text" placeholder="Rating" name="rating" defaultValue={rating} className="input input-bordered" required />
          </div>

          <div className="form-control">
            <label className="">
              <span className="label-text">Product Image</span>
            </label>
            <input type="text" placeholder="Product URL" name="photo" defaultValue={photo} className="input input-bordered" required />
          
          </div>
          <div className="form-control mt-4">
            <button className="btn btn-primary text-xl">Update</button>
          </div>
      
        </form>
       </div>
    </div>
    );
};

export default Update;