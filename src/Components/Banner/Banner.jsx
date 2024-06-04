const Banner = () => {


  return (
    <>
      <div className="hero min-h-96 mt-10" style={{ backgroundImage: 'url(https://i.ibb.co/gvBdPPZ/pexels-photo-1309408.jpg)' }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <div className="flex justify-center items-center">
              <label className="input input-bordered flex items-center gap-2">
                <input type="text" className="grow" placeholder="Search contests by tags..." />
                <button className="btn btn-primary">Search</button>
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
