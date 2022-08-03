import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet-async';
import { Navbar } from 'app/pages/user/home-page/base/navbar';
import { SignInForm } from 'app/pages/user/sign-in/base/sign-in-form';

export const SignInPage: React.FC<any> = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Sign in page</title>
        <meta name="description" content="Sign in page" />
      </Helmet>

      <Navbar />
      <div className="container">
        <SignInForm />
      </div>
    </Fragment>
  );
};
