import { LayoutAdmin } from 'app/components/admin-layout';
import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet-async';
import { UserListTable } from 'app/pages/admin/admin-user-management/base/list-user-datatable';

export const AdminUserManagementPage: React.FC<any> = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Admin Dashboard</title>
        <meta name="description" content="Admin Dashboard" />
      </Helmet>
      <LayoutAdmin content={<UserListTable />} />
    </Fragment>
  );
};
