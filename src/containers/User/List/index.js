import MaterialTable from 'material-table';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UserTypes } from 'store/users/types';

function UserList() {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users.data);
  const loading = useSelector(state => state.users.loading);

  const headers = [
    { title: 'Id', field: 'idUsuario' },
    { title: 'Name', field: 'username' },
  ];

  useEffect(() => {
    dispatch({ type: UserTypes.LOAD_REQUEST });
  }, []);

  return(
  <div>
        <MaterialTable
          isLoading={loading}
          data={users}
          columns={headers}
          title="Users"
          actions={[
            {
              icon: 'add',
              tooltip: 'Add',
              isFreeAction: true,
              onClick: () => this.addUsuario()
            },
            // {
            //   icon: 'edit',
            //   tooltip: 'Editar',
            //   onClick: (event, rowData) => this.editUsuario(rowData)
            // },
            // rowData => ({
            //   icon: 'delete',
            //   tooltip: 'Excluir',
            //   onClick: (event, rowData) => this.deleteUsuario(rowData),
            //   disabled: rowData.birthYear < 2000
            // })
          ]}
          options={{
            actionsColumnIndex: -1,
            search: false
          }}
        />
      </div>
  );
}

export default UserList;
