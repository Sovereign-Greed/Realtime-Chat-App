import * as yup from 'yup';

export const ChatroomValidation = yup.object({
    chatroom_name: yup
    .string()
    .min(5, 'Chatroom name must be at least 5 characters.')
    .required('A name is required to create a chatroom.'),
    chatroom_icon: yup
    .string()
    .min(4, 'An icon is required to create a chatroom.')
    .required('An icon is required to create a chatroom.')
});
