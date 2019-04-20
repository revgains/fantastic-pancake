import React from 'react';
import Carousel from 're-carousel';
import data from '../data/cabins.json';
import styled from 'styled-components';
import CarouselBtn from './CarouselBtn';

const CarouselImage = styled.img`
  height: 100%;
  width: calc(1vw * 53.8);

  @media (max-width: 800px) {
    width: 100%;
  }
`;

const ImageCarousel = () => {
  return (
    <Carousel loop auto widgets={CarouselBtn}>
      {data.cabins.map(cabin => {
        return (
          <CarouselImage
            src={require(`../images/${cabin.image}`)}
            alt={cabin.name}
          />
        );
      })}
    </Carousel>
  );
};

export default ImageCarousel;
