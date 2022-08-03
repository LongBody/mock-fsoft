import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet-async';
import { Navbar } from 'app/pages/user/home-page/base/navbar';
import { ProductCarousel } from 'app/pages/user/home-page/base/product-carousel';

export const HomePage: React.FC<any> = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Home page</title>
        <meta name="description" content="Home page" />
      </Helmet>

      <Navbar />
      <div className="container">
        <ProductCarousel />
      </div>
    </Fragment>
  );
};
