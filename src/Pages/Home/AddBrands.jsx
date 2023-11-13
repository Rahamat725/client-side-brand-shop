import Navbar from "../Navbar/Navbar";


const AddBrands = () => {
    const handleAddBrand = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.brand.value;
        const photo = form.photo.value;
        console.log(name,photo);
    }
    return (
        <div>
            <Navbar></Navbar>
            <h2 className="text-center text-2xl mt-10">Add Brands</h2>
            <form onSubmit={handleAddBrand} className="card-body ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Brand Name</span>
                </label>
                <input type="text" placeholder="Brand Name" name="brand" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Brand Image</span>
                </label>
                <input type="text" placeholder="Brand URL" name="photo" className="input input-bordered" required />
              
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary text-xl">Add</button>
              </div>
          
            </form>
        </div>
    );
};

export default AddBrands;