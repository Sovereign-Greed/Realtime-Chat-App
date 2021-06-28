import { makeStyles } from '@material-ui/core';

export const ChatHeaderStyles = makeStyles((theme) => ({
    header: {
        padding: 20,
        display: 'flex',
        alignItems: 'center',
        borderBottom: '1px solid lightgray',
        [theme.breakpoints.down('xs')] : {
            justifyContent: 'center',
            alignContent: 'center',
            flexDirection: 'column'
        }

    },
    headerInfo: {
        flex: 1,
        paddingLeft: 20,
        [theme.breakpoints.down('sm')] : {
            fontSize: 12,
            paddingLeft: 0,
        }
    },
    timestamp: {
        [theme.breakpoints.down('xs')] : {
            display: 'none'
        }
    },
    headerRight: {
        display: 'flex',
        justifyContent: 'space-between',
        [theme.breakpoints.down('xs')] : {
            fontSize: 8
        }
        // minWidth: 100
    },
    iconButton: {
        [theme.breakpoints.down('sm')] : {
            fontSize: 16,
        }
    }
}));
