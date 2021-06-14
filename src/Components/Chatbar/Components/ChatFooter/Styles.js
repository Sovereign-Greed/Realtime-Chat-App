import { makeStyles } from '@material-ui/core';

export const ChatFooterStyles = makeStyles((theme) => ({
    footer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 62,
        borderTop: '1px solid lightgray'
    },
    messageForm: {
        flex: 1,
        display: 'flex'
    },
    messageInput: {
        flex: 1,
        borderRadius: 30,
        padding: 10,
        border: 'none',
        outlineWidth: 0,
    },
    messageButton: {
        display: 'none'
    },
    icon: {
        padding: 10,
        color: 'gray'
    }
}));
