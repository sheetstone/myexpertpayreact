import React from 'react'
import * as yup from 'yup'
import validCaseNumber from 'utils/validCaseNumber'
import { yupResolver } from '@hookform/resolvers'

yup.addMethod(yup.string, 'isCaseNumber', validCaseNumber)

export const schema = yup.object().shape({
  caseNumber: yup
    .string()
    .required('Case Number is required')
    .min(6, 'Case Number is too short')
    .max(15, 'Case Number is too long')
    .test('isCaseNumber', 'Not a valid Case Number', validCaseNumber),
  ncpName: yup.string(),
  childName: yup.string()
})

export const formSettings = {
  mode: 'onBlur',
  reValidateMode: 'onChange',
  resolver: yupResolver(schema),
  criteriaMode: 'firstErrorDetected',
  shouldFocusError: true,
  shouldUnregister: false
}


export const formCreator = (register, formState, initalState, errors) => {
  return {
    caseNumber: {
      type: 'text',
      name: 'caseNumber',
      ref: register,
      placeholder: 'Case Number',
      isValid: formState.touched.caseNumber && !errors.caseNumber,
      isInvalid: formState.touched.caseNumber && errors.caseNumber,
      defaultValue: initalState && initalState.caseNumber,
      disabled: initalState && true,
      tooltip: {
        title: 'Case Number',
        content: (
          <>
            You can find your case number from the back of your case card:
            <li>Case number start with 0-5 Char</li>
            <li>follow with a dash,</li>
            <li>follow with 4-10 numbers,</li>
            <li>
              and the length of entire case number is 11 characters or less.
            </li>
          </>
        )
      }
    },
    ncpName: {
      type: 'text',
      name: 'ncpName',
      ref: register,
      defaultValue: initalState && initalState.ncpName,
      placeholder: 'NCP Name'
    },
    initalChildrenList: (() => {
      return initalState
        ? initalState.children.map(child => {
            return {
              type: 'text',
              name: 'childname',
              ref: register,
              defaultValue: child,
              placeholder: 'Child Name'
            }
          })
        : [
            {
              type: 'text',
              name: 'childname',
              ref: register,
              placeholder: 'Child Name'
            }
          ]
    })()
  }
}
