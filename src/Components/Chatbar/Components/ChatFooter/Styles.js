import { makeStyles } from '@material-ui/core';

export const ChatFooterStyles = makeStyles((theme) => ({
    footer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 62,
        borderTop: '1px solid lightgray',
        padding: 20,
    },
    messageForm: {
        flex: 1,
        display: 'flex'
    },
    messageInput: {
        backgroundColor: 'white',
    },
    messageButton: {
        display: 'none'
    },
    icon: {
        padding: 10,
        color: 'gray'
    }
}));
