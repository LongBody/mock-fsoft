import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

export const ProductCarousel: React.FC<any> = () => {
  return (
    <Fragment>
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide carousel__container"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src="..." alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="..." alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="..." alt="Third slide" />
          </div>
        </div>
      </div>
    </Fragment>
  );
};
