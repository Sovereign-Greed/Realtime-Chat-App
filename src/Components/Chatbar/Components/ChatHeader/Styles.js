import { makeStyles } from '@material-ui/core';

export const ChatHeaderStyles = makeStyles((theme) => ({
    header: {
        padding: 20,
        display: 'flex',
        alignItems: 'center',
        borderBottom: '1px solid lightgray'
    },
    headerInfo: {
        flex: 1,
        paddingLeft: 20
    },
    headerRight: {
        display: 'flex',
        justifyContent: 'space-between',
        minWidth: 100
    }
}));
