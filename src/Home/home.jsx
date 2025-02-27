
const Home = () => {
  return (
    <div className="container-fluid p-0">
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="3000"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://www.itl.cat/pngfile/big/9-97567_wallpapers-hd-theme-group-ship-on-sea-at.jpg"
              className="d-block w-100"
              alt="Slide 1"
              style={{
                height: "140vh",
                objectFit: "cover",
                width: "100%",
              }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://images.pexels.com/photos/1563355/pexels-photo-1563355.jpeg?cs=srgb&dl=pexels-thatguycraig000-1563355.jpg&fm=jpg"
              className="d-block w-100"
              alt="Slide 2"
              style={{
                height: "55vh",
                objectFit: "cover",
                width: "100%",
              }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1474767821094-a8fe9d8c8fdd?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bmF0dXJlJTIwaGR8ZW58MHx8MHx8fDA%3D"
              className="d-block w-100"
              alt="Slide 3"
              style={{
                height: "55vh",
                objectFit: "cover",
                width: "100%",
              }}
            />
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Home;
