import { makeStyles } from '@material-ui/core';

export const SideBarChatsStyles = makeStyles((theme) => ({
    chats: {
        flex: 1,
        background: 'white',
        overflow: 'auto',
    },
    sidePanel: {
        display: 'flex',
        padding: 20,
        cursor: 'pointer',
        borderBottom: '1px solid #f6f6f6',
        '&:hover': {
            background: "#ebebeb",
        },
    },
    sidePanelInfo: {
        marginLeft: 15
    },
    sidePanelName: {
        fontSize: 16,
        marginBottom: 8,
    }
}));
