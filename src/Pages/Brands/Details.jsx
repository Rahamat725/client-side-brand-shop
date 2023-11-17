import { useLoaderData } from "react-router-dom";


const Details = () => {
    const loadedData = useLoaderData();
const {_id,brand,description,photo,price,productName,rating,type} = loadedData
console.log(loadedData)    
return (
        <div className="text-center  mt-4">
            <h2 className="text-3xl">{productName}</h2>
            <div className=" ">
            <img src={photo} alt="" className="w-1/2 mx-auto" />
            </div>
            <p className="font-bold">{brand} {type}</p>
            <div className="flex justify-evenly mt-5 mb-5">
            <p className="font-bold text-lg bg-amber-200 p-2 rounded-lg ">${price}</p>
            <button className="btn btn-success">Add to Cart</button>
            <div className="  rating rating-sm badge badge-warning text-xl py-3">{rating}
                                        <input type="radio" name="rating-1" className="mask mask-star-2 bg-red-600 ml-1 " />
                                    </div>
            </div>
            <p>{description}</p>
            <div className="card-actions justify-end">
      {/* <button className="btn btn-primary">Add to Cart</button> */}
    </div>
        </div>
//         <div>
//             <div className="card  bg-base-100 shadow-xl">
//   <figure><img src={photo} alt="Movie"/></figure>
//   <div className="card-body">
//     <h2 className="card-title">{productName}</h2>
//     <p>{brand} {type}</p>
//     <div className="flex justify-evenly">
//          <p ><span className="font-bold text-lg bg-amber-200 p-2 rounded-lg ">${price}</span></p>
//              <div className="  rating rating-sm badge badge-warning text-xl py-3">{rating}
//                                          <input type="radio" name="rating-1" className="mask mask-star-2 bg-red-600 ml-1 " />
//                                     </div>
//              </div>
//     <p className="w-3/4">{description}</p>
//     <div className="card-actions justify-end">
//       <button className="btn btn-primary">Watch</button>
//     </div>
//   </div>
// </div>
//         </div>
    );
};

export default Details;