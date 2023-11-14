import Navbar from "../Navbar/Navbar";


const AddProduct = () => {
    const handleAddProduct = e => {
        e.preventDefault();
        const form = e.target;
        const brand = form.brand.value;
        const productName = form.productName.value;
        const type = form.type.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;
        const photo = form.photo.value;
        const product = {brand,productName,type,price,description,rating,photo};
        console.log(product);
    }
    return (
        <div className="">
            <Navbar></Navbar>
           <div className="-mt-8">
           <h2 className="text-center text-2xl text-blue-600 font-bold ">Add Products</h2>
           <form onSubmit={handleAddProduct}  className="  w-1/2 mx-auto  bg-amber-200 pr-4 pl-4">
              <div className="form-control">
                <label className="">
                  <span className="label-text">Brand Name</span>
                </label>
                <input type="text" placeholder="Brand Name" name="brand" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="lpabel-text">Product Name</span>
                </label>
                <input type="text" placeholder="Product Name" name="productName" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Type</span>
                </label>
                <input type="text" placeholder="Type" name="type" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input type="number" placeholder="Price" name="price" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Short Description</span>
                </label>
                <input type="text" placeholder="Short Description" name="description" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Rating</span>
                </label>
                <input type="text" placeholder="Rating" name="rating" className="input input-bordered" required />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Product Image</span>
                </label>
                <input type="text" placeholder="Product URL" name="photo" className="input input-bordered" required />
              
              </div>
              <div className="form-control mt-4">
                <button className="btn btn-primary text-xl">Add</button>
              </div>
          
            </form>
           </div>
        </div>
    );
};

export default AddProduct;