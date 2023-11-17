import { Link, useLoaderData } from "react-router-dom";
import Navbar from "../Navbar/Navbar";


const Boat = () => {
    const loaderData = useLoaderData();
    const products = loaderData.filter(product => product.brand == 'boAt');
    console.log(loaderData)
    console.log(products)
    return (
        <div className="">
        <Navbar></Navbar>
        <div className=" ">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2 ">
            {
                products.map(product =>
                    <div key={product._id} className="card lg:w-96  bg-base-100 shadow-xl">
                        <h2 className="text-center lg:text-2xl text-xl font-bold mb-5">
                            {product.productName}
                        </h2>
                        <figure><img src={product.photo} alt="Product image" /></figure>
                        <div className="card-body">
                            <h2 className="text-center font-bold">{product.brand}  {product.type}</h2>
                            <div className="flex">
                                <p className="font-bold"><span className="bg-gray-200 p-2 rounded">${product.price}</span></p>
                                {/* */}
                                <div className="  rating rating-sm badge badge-warning text-xl py-3">{product.rating}
                                    <input type="radio" name="rating-1" className="mask mask-star-2 bg-red-600 ml-1 " />
                                </div>
                            </div>
                            <p>{product.description.slice(0, 200)}...</p>
                            <div className="card-actions justify-end">
                                <Link to={`/details/${product._id}`}>
                                <div className="btn btn-neutral">Details </div>
                                </Link>
                                <Link to={`/productUpdate/${product._id}`}>
                                <button className="btn btn-success">Update</button>
                                </Link>
                            </div>
                        </div>
                    </div>

                )
            }
        </div>
        </div>
    </div>
    );
};

export default Boat;