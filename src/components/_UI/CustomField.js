import * as React from 'react';
import { TextField } from '@material-ui/core';

export const CustomField = ({ label, placeholder, name, touchedValues, errors, value, ...others }) => {
  return <TextField
    id={name}
    name={name}
    label={label}
    style={{ marginTop: '5px' }}
    fullWidth
    placeholder={placeholder}
    {...others}
    helperText={touchedValues && touchedValues.name ? errors.name : ""}
    error={((touchedValues && touchedValues.name) && (errors && errors.name)) ? true : false}
  />;
};
