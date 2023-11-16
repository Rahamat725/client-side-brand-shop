import { Link,  useLoaderData } from "react-router-dom";


const Apple = () => {
    const loaderData = useLoaderData();
    const products = loaderData.filter(product => product.brand == 'Apple');
    console.log(products)
    const handleUpdate = id => {
        console.log(id);
    }
    return (
        <div>
            <h2>Here are all Apple products: {products.length}</h2>
            <div className="grid grid-cols-2 gap-4">
                {
                    products.map(product =>
                        <div key={product._id} className="card w-96 bg-base-100 shadow-xl">
                            <h2 className="card-title ">
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
                                    <div className="btn btn-neutral">Details </div>
                                    <Link to={`/productUpdate/${product._id}`}>
                                    <div onClick={()=>handleUpdate(product._id)} className="btn btn-success">Update</div>
                                    </Link>
                                </div>
                            </div>
                        </div>

                    )
                }
            </div>
        </div>
    );
};

export default Apple;