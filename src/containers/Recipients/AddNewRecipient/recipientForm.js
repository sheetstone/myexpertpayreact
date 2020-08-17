import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers";

export const schema = yup.object().shape({
  payeeName: yup
    .string()
    .required('Recipient Name is required'),
  emailAddress: yup
    .string()
    .required('Email address is required')
    .email('Please input correct format of email address'),
  confirmEmail: yup
    .string()
    .required('Confirm email address is required')
    .email('Please input correct format of email address')
    .test("Email match", "Email address should match", function (value) {
      return this.parent.emailAddress === value;
    }),
  phoneNum: yup
    .string()
    .required('Phone number is required')
    .matches(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/, 'Please input correct format of phone number'),
});

export const formCreator = (register, formState, initalState, errors) => {
  return {
    payeeName: {
      type: "text",
      name: "payeeName",
      ref: register,
      errors: errors,
      label: "Recipient Name",
      isValid: formState.touched.payeeName && !errors.payeeName,
      isInvalid: formState.touched.payeeName && errors.payeeName,
      defaultValue: initalState && initalState.payeeName,
    },
    emailAddress: {
      type: "text",
      name: "emailAddress",
      ref: register,
      label: "Email Address",
      errors: errors,
      isValid: formState.touched.emailAddress && !errors.emailAddress,
      isInvalid: formState.touched.emailAddress && errors.emailAddress,
      defaultValue: initalState && initalState.emailAddress,
    },
    confirmEmail: {
      type: "text",
      name: "confirmEmail",
      ref: register,
      errors: errors,
      label: "Confirm Email Address",
      isValid: formState.touched.confirmEmail && !errors.confirmEmail,
      isInvalid: formState.touched.confirmEmail && errors.confirmEmail,
      defaultValue: initalState && initalState.confirmEmail,
    },
    phoneNum: {
      type: "text",
      name: "phoneNum",
      ref: register,
      label: "Phone Number",
      errors: errors,
      isValid: formState.touched.phoneNum && !errors.phoneNum,
      isInvalid: formState.touched.phoneNum && errors.phoneNum,
      defaultValue: initalState && initalState.phoneNum,
    }
  }
}

export const formSettings = {
  mode: "onBlur",
  reValidateMode: "onChange",
  resolver: yupResolver(schema),
  criteriaMode: "firstErrorDetected",
  shouldFocusError: true,
  shouldUnregister: false,
};

