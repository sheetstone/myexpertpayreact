import React from 'react';
import { Form } from 'react-bootstrap';

import classes from './formValidationError.module.scss';


const FormValidationError = (props) => {
    const {errors, formEle} = props
    if(errors[formEle]){
     return (
        <Form.Control.Feedback type="invalid">
            {errors[formEle].message}
        </Form.Control.Feedback>
      )
    }
    return null;
  }

export default FormValidationError