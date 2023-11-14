import { Link } from "react-router-dom";


const Brands = () => {
    return (
       <div className="mt-10">
       <h2 className="text-5xl font-bold text-center text-blue-600">Select a Brand</h2>
         <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 mt-10">

<Link to="/apple">
<div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure><img src="https://i.ibb.co/tYSPfRf/apple.jpg" alt="Shoes" /></figure>
      <div className="card-body">
          <h2 className="text-3xl font-bold text-center">Apple</h2>
          <p className="text-center font-bold text-lg">Think Different</p>
          <div className="card-actions justify-end">
              {/* <button className="btn btn-primary">Buy Now</button> */}
          </div>
      </div>
  </div>
</Link>

<Link to="/boAt">
<div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure><img src="https://i.ibb.co/1ns7bGM/boat.png" alt="Shoes" /></figure>
      <div className="card-body">
          <h2 className="text-3xl font-bold text-center">boAt</h2>
          <p className="text-center font-bold text-lg">Plug In to Nirvana</p>
          <div className="card-actions justify-end">
              {/* <button className="btn btn-primary">Buy Now</button> */}
          </div>
      </div>
  </div>
</Link>
<Link to="/dell">
<div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure><img src="https://i.ibb.co/VBsPD6X/dell.png" alt="Shoes" /></figure>
      <div className="card-body">
          <h2 className="text-3xl font-bold text-center">Dell</h2>
          <p className="text-center font-bold text-lg">Easy as Dell.</p>
          <div className="card-actions justify-end">
              {/* <button className="btn btn-primary">Buy Now</button> */}
          </div>
      </div>
  </div>
</Link>
<Link to="/hp">
<div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure><img src="https://i.ibb.co/z7xQSY1/hp.png" alt="Shoes" /></figure>
      <div className="card-body">
          <h2 className="text-3xl font-bold text-center">hp</h2>
          <p className="text-center font-bold text-lg">Make it Matter Keep Reinventing</p>
          <div className="card-actions justify-end">
              {/* <button className="btn btn-primary">Buy Now</button> */}
          </div>
      </div>
  </div>
</Link>
<Link to="/samsung">
<div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure><img src="https://i.ibb.co/qgXYZd8/samsung.png" alt="Shoes" /></figure>
      <div className="card-body">
          <h2 className="text-3xl font-bold text-center">SAMSUNG</h2>
          <p className="text-center font-bold text-lg">Better Normal For Allg</p>
          <div className="card-actions justify-end">
              {/* <button className="btn btn-primary">Buy Now</button> */}
          </div>
      </div>
  </div>
</Link>
<Link to="/sony">
<div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure><img src="https://i.ibb.co/BGM02GQ/sony.jpg" alt="Shoes" /></figure>
      <div className="card-body">
          <h2 className="text-3xl font-bold text-center">SONY</h2>
          <p className="text-center font-bold text-lg"> BE MOVED</p>
          <div className="card-actions justify-end">
              {/* <button className="btn btn-primary">Buy Now</button> */}
          </div>
      </div>
  </div>
</Link>
</div>
       </div>
    );
};

export default Brands;