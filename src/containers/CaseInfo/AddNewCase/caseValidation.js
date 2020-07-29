import * as yup from 'yup'
import validCaseNumber from 'utils/validCaseNumber'

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
