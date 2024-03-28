import React from 'react'

const HomeCarousel = () => {
  return (
    <>
    <div id="carouselExample" class="carousel slide">
    <div class="carousel-inner">
        <div class="carousel-item active">
            <img src="./img/home/echowebheader.jpg" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-md-block text-start position-absolute carousel-text-adjust  start-0 translate-middle-y" >
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 col-6">
                            <h4 class="banner-text"style={{fontSize: "1.6vw", fontWeight: "400"}}>The Future is Now</h4>
                            <h1 class="banner-text " style={{fontSize: "3.7vw", fontWeight: "600", lineHeight: "1.3"}}>The World’s Fastest <br />Digital Courses</h1>
                            <h5 class="banner-text" style={{fontSize: "1.3vw", fontWeight: "400"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum mi ut nunc pulvinar, sit amet tincidunt odio semper. Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget a libero.</h5>
                            <a href="#" class="btn btn-light mt-md-3 rounded-pill px-1 px-md-4 py-md-2 py-1 mb-5" style={{fontSize:'1vw'}}>Explore Now</a>
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