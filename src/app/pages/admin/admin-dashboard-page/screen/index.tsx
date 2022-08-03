import { LayoutAdmin } from 'app/components/admin-layout';
import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet-async';

export const AdminDashboardPage: React.FC<any> = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Admin Dashboard</title>
        <meta name="description" content="Admin Dashboard" />
      </Helmet>
      <LayoutAdmin content={''} />
    </Fragment>
  );
};
