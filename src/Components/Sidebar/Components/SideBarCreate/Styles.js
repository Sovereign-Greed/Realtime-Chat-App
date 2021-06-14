import { makeStyles } from '@material-ui/core';

export const SideBarCreateStyles = makeStyles((theme) => ({
    iconButton: {
        [theme.breakpoints.up('sm')] : {
            display: 'none',
        }
    },
    fullButton: {
        borderRadius: 30,
        // backgroundColor: 'red',
        [theme.breakpoints.down('xs')] : {
            display: 'none',
        }
    },
    dialog: {
        // backgroundColor: 'red'
    },
    dialogTitle: {
        textAlign: 'center'
    },
    dialogContent: {
        width: 500,
        [theme.breakpoints.down('xs')]: {
            width: 300
        },
        padding: 20
    },
    selectField: {
        width: '100%',
        marginTop: 20
    },
    search: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#f6f6f6',
        height: 39,
        padding: 10,
        [theme.breakpoints.down('xs')] : {
            justifyContent: 'center'
        }
    },
}));
