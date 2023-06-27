import React from 'react';

import Navbar from '@molecules/Navbar';
import Icon from '@atoms/Icon';
import Carousel from '@molecules/Carousel';
import { Link } from 'react-router-dom';
import Button from '@atoms/Buttons/Button';

const DetailHeader = () => {
  return (
    <>
      <Navbar isTransparent={true}>
        <Link to="/home">
          <Icon name="chevronLeft" />
        </Link>
        <Button onClick={() => console.log('modal page')} status="ghost">
          <Icon name="more" />
        </Button>
      </Navbar>
      <Carousel>
        <Carousel.Slide>
          <img
            src="https://images.unsplash.com/photo-1546527868-ccb7ee7dfa6a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt="carousel"
          />
        </Carousel.Slide>
        <Carousel.Slide>
          <img
            src="https://images.unsplash.com/photo-1593134257782-e89567b7718a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80"
            alt="carousel"
          />
        </Carousel.Slide>
      </Carousel>
    </>
  );
};

export default DetailHeader;
