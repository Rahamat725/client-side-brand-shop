import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";


const Details = () => {
    const loadedData = useLoaderData();
    const { _id, brand, description, photo, price, productName, rating, type } = loadedData
    console.log(loadedData)

    const handleAddToCart = () => {
        fetch("http://localhost:5000/mycarts", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(loadedData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    toast.success('Product Added to Cart Successfully !!');
                }
            })
        }

        return (
            <div className="text-center  mt-4">
                <h2 className="text-3xl">{productName}</h2>
                <div className=" ">
                    <img src={photo} alt="" className="w-1/2 mx-auto" />
                </div>
                <p className="font-bold ">{brand} {type}</p>
                <div className="flex justify-evenly mt-5 mb-5">
                    <p className="font-bold text-lg bg-amber-200 p-2 rounded-lg ">${price}</p>
                    <button onClick={handleAddToCart} className="btn btn-success">Add to Cart</button>
                    <div className="  rating rating-sm badge badge-warning text-xl py-3">{rating}
                        <input type="radio" name="rating-1" className="mask mask-star-2 bg-red-600 ml-1 " />
                    </div>
                </div>
                <p>{description}</p>
            
            </div>

        );
    };

    export default Details;