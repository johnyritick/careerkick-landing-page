import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import Image1 from "../../Assets/Images/image_1.jpg"
import Image2 from "../../Assets/Images/image-2.jpg"

import Image3 from "../../Assets/Images/image-3.jpg"
import Image4 from "../../Assets/Images/image-4.jpg"
import Image5 from "../../Assets/Images/image-5.jpg"
import Image6 from "../../Assets/Images/image-6.jpg"

const images: string[] = [
  Image1, Image2, Image3, Image4, Image5, Image6
  // Add more image paths
];
const scroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const CarouselContainer = styled.div`
  width: 100%;
  overflow: hidden;
  background-color: #000;
  padding: 20px 0;
`;

const Slider = styled.div`
  display: flex;
  animation: ${scroll} 20s linear infinite;
`;

const Slide = styled.div`
  min-width: 25%;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageWrapper = styled.div`
  background: #fff;
  padding: 2px;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const Image = styled.img`
  max-width: 100%;
  height: 150px;
  display: block;
`;

const Carousel = () => {
  return (
    <CarouselContainer>
      <Slider>
        {images.concat(images).map((image, index) => (
          <Slide key={index}>
            <ImageWrapper>
              <Image src={image} alt={`Slide ${index}`} />
            </ImageWrapper>
          </Slide>
        ))}
      </Slider>
    </CarouselContainer>
  );
};

export default Carousel;
