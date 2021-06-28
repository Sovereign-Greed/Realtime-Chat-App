import * as yup from 'yup';

export const MessageValidation = yup.object({
    message: yup
    .string()
    // .min(1, '1 character is required to send a message')
    // .required('A message is required to submit.')
});
