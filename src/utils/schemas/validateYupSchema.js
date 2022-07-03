import * as Yup from 'yup';
const requiredErrorMessage = 'Vui lòng điền đầy đủ thông tin';
const validEmailMessage = 'Vui lòng điền đúng định dạng email';
const validNameMessage = 'Vui lòng điền đúng định dạng';

const validPasswordMessage =
  'Password phải có ít nhất 8 ký tự, 1 ký tự in hoa, 1 chữ số và 1 ký tự đặc biệt';
const minCharacterEmail = 'FullName không được quá 50 ký tự!';
const regexEmail =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const regexPassword = /^.*(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).*$/;
const confirmPasswordMessage = 'Password không trùng khớp';

const validateSignUpSchema = Yup.object().shape({
  email: Yup.string()
    .email(validEmailMessage)
    .required(requiredErrorMessage)
    .matches(regexEmail, validEmailMessage),
  password: Yup.string()
    .min(8, validPasswordMessage)
    .matches(regexPassword, validPasswordMessage)
    .required(requiredErrorMessage),
  fullname: Yup.string()
    .required(requiredErrorMessage)
    .matches(/^[A-Za-z ]*$/, validNameMessage)
    .max(50, minCharacterEmail),
});

const validateLoginSchema = Yup.object().shape({
  email: Yup.string()
    .matches(regexEmail, validEmailMessage)
    .required(requiredErrorMessage),
  password: Yup.string()
    .min(8, validPasswordMessage)
    .required(requiredErrorMessage),
});

const validateChangeAccountSchema = Yup.object().shape({
  firstName: Yup.string()
    .required(requiredErrorMessage)
    .matches(/^[A-Za-z ]*$/, validNameMessage)
    .max(50, minCharacterEmail),
  lastName: Yup.string()
    .required(requiredErrorMessage)
    .matches(/^[A-Za-z ]*$/, validNameMessage)
    .max(50, minCharacterEmail),
  email: Yup.string(),
});

const validateChangePasswordSchema = Yup.object().shape({
  oldPassword: Yup.string()
    .min(4, validPasswordMessage)
    .required(requiredErrorMessage, ''),
  newPassword: Yup.string()
    .min(4, validPasswordMessage)
    .required(requiredErrorMessage)
    .matches(regexPassword, validPasswordMessage),
  confirmPassword: Yup.string()
    .min(4, validPasswordMessage)
    .required(requiredErrorMessage)
    .oneOf([Yup.ref('newPassword'), null], confirmPasswordMessage),
});

const basicCreateCourseSchema = Yup.object().shape({
  title: Yup.string().required('Nội dung nhập vào không được trống!'),
  shortDescription: Yup.string().required(
    'Nội dung nhập vào không được trống!',
  ),
  description: Yup.string().required('Nội dung nhập vào không được trống!'),
  learn: Yup.string().required('Nội dung nhập vào không được trống!'),
  requirement: Yup.string().required('Nội dung nhập vào không được trống!'),
});

const validateForgotPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .email(validEmailMessage)
    .required(requiredErrorMessage)
    .matches(regexEmail, validEmailMessage),
});
export {
  validateSignUpSchema,
  validateLoginSchema,
  validateChangeAccountSchema,
  validateChangePasswordSchema,
  basicCreateCourseSchema,
  validateForgotPasswordSchema,
};
