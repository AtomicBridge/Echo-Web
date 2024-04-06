import React from 'react'

const HomeCarousel = () => {
  return (
    <>
    <div id="carouselExample" className="carousel slide">
    <div className="carousel-inner">
        <div className="carousel-item active">
            <img src="./img/home/echowebheader.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-md-block text-start position-absolute carousel-text-adjust  start-0 translate-middle-y" >
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-6">
                            <h4 className="banner-text mb-md-4"style={{fontSize: "1.6vw", fontWeight: "400"}}>The Future is Now</h4>
                            <h1 className="banner-text " style={{fontSize: "3.7vw", fontWeight: "600", lineHeight: "1.3"}}>The World’s Fastest <br />Digital Courses</h1>
                            <h5 className="banner-text" style={{fontSize: "1.3vw", fontWeight: "400"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum mi ut nunc pulvinar, sit amet tincidunt odio semper. Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget a libero.</h5>
                            <a href="#" className="btn btn-light mt-md-4 rounded-pill px-1 px-md-4 py-md-2 py-1 mb-5" style={{fontSize:'1vw'}}>Explore Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    </>
  )
}

export default HomeCarousel