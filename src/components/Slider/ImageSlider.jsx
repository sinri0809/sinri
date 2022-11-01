import { useState } from "react";

import IconLeft from 'assets/icons/direct_left.svg';
import IconRight from 'assets/icons/direct_right.svg';

const ImageSlider = ({ arrImages }) => {
  
  const [sliderIndex, setSliderIndex] = useState(0);
  
  return <div className="image-slider__wrapper">
    <SliderContainer arrImages={arrImages} sliderIndex={sliderIndex} />
    {
      arrImages.length > 1 && 
        <SliderController />
        // <SliderController sliderIndex={sliderIndex} setSliderIndex={setSliderIndex} /> 
    }
  </div>
}


const SliderContainer = ({ arrImages, sliderIndex }) => {
  return <div className="image-slider__container">
    <ul className="image-list">
      {
        arrImages.map((image, index) => {
          return <li 
            key={index}
            className="image__container"
            style={{ transform: `translateX(-${100 * sliderIndex}%)` }}
          >
            <img
              className="image"
              // src={require(`assets/image_slider/${image.name}.${image.fileExtension}`).default}
              // alt={image.name}
              // onLoad={onLoadImg}
            />
          </li> 
        })
      }
    </ul>
  </div> 
}

const SliderController = ({  }) => {
  return <div className="slider-controller_wrapper">
    <SliderController.Button icon={<IconLeft />} onClick />
    <SliderController.Button icon={<IconRight />} onClick />

    <SliderController.Pagination />
  </div>
}

SliderController.Button = ({ icon, onClick }) => {
  return <button 
    className="btn btn-slider-controller"
    onClick={onClick}
  >
    { icon }
  </button>
}

SliderController.Pagination = ({ length }) => {
  return <ul className="slider-pagination">

  </ul>
}

export default ImageSlider;