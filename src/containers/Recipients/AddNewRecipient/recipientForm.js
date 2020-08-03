import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers";

export const schema = yup.object().shape({
  payeeName: yup.string(),
  email: yup.string().email(),
  confirmEmail: yup.string().email(),
  phone: yup.string(),
});

export const payeeName = (register, formState, initalState, errors) => {
  return {
    type: "text",
    name: "payeeName",
    ref: register,
    placeholder: "Payee Name",
    isValid: formState.touched.payeeName && !errors.payeeName,
    isInvalid: formState.touched.payeeName && errors.payeeName,
    defaultValue: initalState && initalState.payeeName,
  };
};

export const emailAddress = (register, formState, initalState, errors) => {
  return {
    type: "text",
    name: "emailAddress",
    ref: register,
    placeholder: "Email Address",
    isValid: formState.touched.emailAddress && !errors.emailAddress,
    isInvalid: formState.touched.emailAddress && errors.emailAddress,
    defaultValue: initalState && initalState.emailAddress,
  };
};

export const confirmEmail = (register, formState, initalState, errors) => {
  return {
    type: "text",
    name: "confirmEmail",
    ref: register,
    placeholder: "Confirm Email Address",
    isValid: formState.touched.confirmEmail && !errors.confirmEmail,
    isInvalid: formState.touched.confirmEmail && errors.confirmEmail,
    defaultValue: initalState && initalState.confirmEmail,
  };
};

export const phoneNum = (register, formState, initalState, errors) => {
  return {
    type: "text",
    name: "phoneNum",
    ref: register,
    placeholder: "Phone Number",
    isValid: formState.touched.phoneNum && !errors.phoneNum,
    isInvalid: formState.touched.phoneNum && errors.phoneNum,
    defaultValue: initalState && initalState.phoneNum,
  };
};

export const formSettings = {
  mode: "onBlur",
  reValidateMode: "onChange",
  resolver: yupResolver(schema),
  criteriaMode: "firstErrorDetected",
  shouldFocusError: true,
  shouldUnregister: false,
};

const formObj = (register, formState, initalState) => {};
