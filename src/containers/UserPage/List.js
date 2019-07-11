import MaterialTable from 'material-table';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as UserActions from 'store/users/actions';
import Feedback from 'components/_UI/Custom/Feedback';
import UsuarioForm from './Form';

class UserList extends Component {
  state = {
    editMode: false,
    deleteMode: false,
  }

  componentDidMount() {
    this.props.loadUsuariosRequest();
  }

  handleClose = () => {
    this.props.closeModal();
  }

  closeFeedback = () => {
    this.props.closeFeedback();
  }

  addUsuario = () => {
    this.setState({ editMode: false });
    this.props.openModalCreate();
  }

  render() {
    const { usuarios, loading, feedback, error, initialValues } = this.props;
    const headers = [
      { title: 'Id', field: 'idUsuario' },
      { title: 'Nome', field: 'nomeUsuario' },
      { title: 'Login', field: 'loginUsuario' },
      { title: 'E-mail', field: 'emailUsuario' },
    ];

    return (
      <div>
        <MaterialTable
          isLoading={loading}
          data={usuarios}
          columns={headers}
          title="Users"
          searchable={true}
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
        <UsuarioForm
          handleClose={this.handleClose}
          title={this.state.editMode ? 'Edit' : 'New User'}
          initialValues={initialValues}
        />
        <Feedback open={feedback} closeFeedback={this.closeFeedback} error={error}
          message={this.state.editMode ? 'User updated successfully' : 'User added successfully'}
          errorMessage="User already exists" />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  usuarios: state.users.data,
  initialValues: state.users.initialValues,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(UserActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
