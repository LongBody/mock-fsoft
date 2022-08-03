import { Table } from 'antd';
import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'types';
import { getListUserRequest } from 'app/pages/admin/admin-user-management/screen/action';

export const UserListTable: React.FC<any> = () => {
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state?.adminListUserReducer);

  console.log(state);

  const columns: any = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      align: 'center',
      render: (id) => <span>{id}</span>,
    },
    {
      title: 'User',
      dataIndex: 'username',
      key: 'username',
      align: 'center',
      render: (username, record, index) => <span>{username}</span>,
    },
    {
      title: 'Contact',
      dataIndex: 'contact',
      key: 'contact',
      align: 'center',
      render: (contact) => <span>{contact ? contact : ''}</span>,
    },
    {
      title: 'Status',
      dataIndex: 'isActive',
      key: 'isActive',
      align: 'center',
      render: (isActive) => <span>{isActive ? 'Active' : 'Deactive'}</span>,
    },
    {
      title: 'Verify Email',
      dataIndex: 'isEmailVerified',
      key: 'isEmailVerified',
      align: 'center',
      render: (isEmailVerified) => (
        <span>{isEmailVerified ? 'Yes' : 'No'}</span>
      ),
    },
    {
      title: 'Verify Contact',
      dataIndex: 'isContactVerified',
      key: 'isContactVerified',
      align: 'center',
      render: (isContactVerified) => (
        <span>{isContactVerified ? 'Yes' : 'No'}</span>
      ),
    },
  ];

  useEffect(() => {
    const body = {
      size: 10,
      page: 1,
    };

    dispatch(getListUserRequest(body));
  }, []);

  const onChangepage = (value: any) => {
    const body = {
      size: 10,
      page: value,
    };

    dispatch(getListUserRequest(body));
  };

  return (
    <Fragment>
      <Table
        rowKey="id"
        bordered
        className="mt-10 mb-10 table-cursor-pointer-row"
        columns={columns}
        loading={state.loading}
        pagination={{
          pageSize: 10,
          total: state?.total ? state?.total : 1,
          current: state?.dataResponse?.currentPage,
          onChange: onChangepage,
        }}
        dataSource={state?.dataResponse?.length > 0 ? state?.dataResponse : []}
      />
    </Fragment>
  );
};
