

const NewsSubscribe = () => {
    return (
        <div className="bg-blue-600 p-14 mt-10 mb-10 flex lg:flex-row flex-col justify-between">
          <div className="lg:w-1/2 w-full text-center">
          <h3 className="md:text-2xl text-xl text-white font-bold">SIGN UP FOR NEWSLETTERS</h3>
            <p className="text-white md:font-bold md:text-base text-sm">Be the First to Know. Sign up for newsletter today</p>
          </div>
          <div className="lg:w-1/2 w-full lg:mt-0 mt-4">
          <input type="email" placeholder="Email Address" className="input input-bordered w-3/4 " />
          <button className="input -ml-10 bg-amber-600 text-white">SUBSCRIBE</button>
          </div> 
            
        </div>
    );
};

export default NewsSubscribe;