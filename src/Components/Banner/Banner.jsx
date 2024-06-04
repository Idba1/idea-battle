import './banner.css'
const Banner = () => {
 

  return (
    <section className="mt-10 bg-cover bg-center h-96 flex items-center justify-center banner">
      <div className="overlay">
        <div className="items-center text-white">
          <h1 className="title">Welcome to IDEA BATTLE</h1>
          <p className="subtitle">Find and participate in exciting contests</p>
          <div className="search-bar">
            <input
              type="text"
              value=""
              placeholder="Search contests by tags..."
            />
            <button>Search</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
