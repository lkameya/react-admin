import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as UserActions from 'store/users/actions';
import useForm from 'hooks/useForm';
import { CustomField } from 'components/_UI/CustomField';

function UserForm() {
  const {
    values,
    touchedValues,
    errors,
    handleChange,
    handleSubmit,
    handleBlur
  } = useForm({
    initialValues: {
      nomeUsuario: "",
    },
    onSubmit(values, errors) {
      alert(JSON.stringify({ values, errors, touchedValues }, null, 2));
    },
    validate(values) {
      const errors = {};

      if (values.nomeUsuario === "") {
        errors.nomeUsuario = "Please enter a name";
      }

      return errors;
    }
  });

  const addUser = (usuario) => {
    const { addUsuarioRequest, editUsuarioRequest } = this.props;
    usuario.idUsuario ? editUsuarioRequest(usuario) : addUsuarioRequest(usuario);
  }

  return (
    <form onSubmit={handleSubmit}>
      <CustomField
        name="nomeUsuario"
        label="Nome"
        placeholder="Nome"
        type="text"
        value={values.nomeUsuario}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

const mapStateToProps = state => ({
  users: state.users.data,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(UserActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(UserForm);
