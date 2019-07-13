import { CustomField } from 'components/_UI/CustomField';
import useForm from 'hooks/useForm';
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { UserTypes } from 'store/users/types';

function UserCreate() {
  const dispatch = useDispatch();
  const { values, touchedValues, errors, handleChange, handleSubmit, handleBlur } = useForm({
    initialValues: {
      nomeUsuario: "",
    },
    onSubmit(values, errors) {
      alert(JSON.stringify({ values, errors, touchedValues }, null, 2));
      addUser(values);
    },
    validate(values) {
      const errors = {};
      if (values.username === "") {
        errors.username = "Please enter a name";
      }
      return errors;
    }
  });

  const addUser = user => {
    dispatch({ type: UserTypes.LOAD_REQUEST });
  }

  return (
    <form onSubmit={handleSubmit}>
      <CustomField
        name="username"
        label="Nome"
        placeholder="Nome"
        type="text"
        value={values.username}
        onChange={handleChange}
        onBlur={handleBlur}
        errors={errors}
        touchedValues={touchedValues}
      />
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default UserCreate;
