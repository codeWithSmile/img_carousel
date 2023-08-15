// import React, { useState } from 'react'
// import "./Imageslider.css"
// import { images } from "./Innerdata"
// import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'



// function Imageslider() {
   
//     const [curImage, setCurImage] = useState(0);
    
//     const handleRightClick = () => {
        
         
//         setCurImage((curImage+1) % images.length);
//         console.log('handleRightClick', curImage);

//     }
//     const handleLeftClick = () => {

      
//         setCurImage(((curImage + images.length)-1) % images.length)
//         console.log('handleLeftClick', curImage)
//     }
//     console.log('curImage', curImage);
//     return (
//         <div className="image-container">

//             <div className="Image"
//                 style={{ backgroundImage: `url(${images[curImage].img})`}}>


//                 <div className="prev-btn" onClick={handleLeftClick}>
//                     <ArrowBackIosIcon />
//                 </div>
//                 <div className="center">
//                     <h1>{images[curImage].title}</h1>
//                 </div>
//                 <div className="next-btn" onClick={handleRightClick}>
//                     <ArrowForwardIosIcon />
//                 </div>

//             </div>
//         </div>


//     );
// }

// export default Imageslider;










import React, { useState } from 'react';
import "./Imageslider.css";
import { images } from "./Innerdata";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function Imageslider() {
    const [curImage, setCurImage] = useState(0);

    const handleRightClick = () => {
        setCurImage((curImage + 1) % images.length);
    }

    const handleLeftClick = () => {
        setCurImage((curImage - 1 + images.length) % images.length);
    }

    return (
        <div className="image-container">
            <div className="Image">
                <div className="slider-track" style={{ transform: `translateX(-${curImage * 100}%)` }}>
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className="slide"
                            style={{ backgroundImage: `url(${image.img})` }}
                        >
                            <div className="center">
                                <h1>{image.title}</h1>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="prev-btn" onClick={handleLeftClick}>
                    <ArrowBackIosIcon />
                </div>
                <div className="next-btn" onClick={handleRightClick}>
                    <ArrowForwardIosIcon />
                </div>
            </div>
        </div>
    );
}

export default Imageslider;
