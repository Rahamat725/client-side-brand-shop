import { useLoaderData } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Swal from "sweetalert2";
import { useState } from "react";


const MyCarts = () => {
    const loadedData = useLoaderData();
    console.log(loadedData);
    const [products, setProducts] = useState(loadedData);
   
    const handleDelete = id => {
      console.log(id)
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`https://zentech-server.vercel.app/mycarts/${id}`, {
            method: 'DELETE'
          })
          .then(res => res.json())
          .then(data => {
            console.log(data)
            if(data.deletedCount === 1){
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            }
            const remaining = products.filter(pro => pro._id !== id);
            setProducts(remaining);

          })
        
        }
      });
    }
    return (
     
        <div className="mt-5">
           <Navbar></Navbar>
           <h2 className="text-center text-3xl mb-5">My Carts</h2>
            <div className="grid lg:grid-cols-2 gap-3">
              {
                products.map(product => 
                    <div key={product._id} className="card card-side bg-base-100 shadow-xl">
                    <figure><img className="w-40 md:p-8 p-10" src={product.photo} alt="Movie"/></figure>
                    <div className="card-body">
                      <h2 className="font-bold md:text-xl">{product.productName}</h2>
                      <p>{product.brand} {product.type}</p>
                      <div className="card-actions justify-end">
                        <button onClick={()=> handleDelete(product._id)} className="btn btn-warning">Delete</button>
                      </div>
                    </div>
                  </div>
                    )
              }
            </div>
        </div>
    );
};

export default MyCarts;