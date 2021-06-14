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
        [theme.breakpoints.down('xs')] : {
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
        }
    },
    sidePanelInfo: {
        marginLeft: 15,
        [theme.breakpoints.down('xs')] : {
            display: 'none'
        }
    },
    sidePanelName: {
        fontSize: 16,
        marginBottom: 8,
    },
    sidePanelMobileName: {
        fontSize: 12,
        textAlign: 'center',
        [theme.breakpoints.up('sm')] : {
            display: 'none'
        }
    }
}));
