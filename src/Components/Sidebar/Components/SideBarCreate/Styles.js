import { makeStyles } from '@material-ui/core';

export const SideBarCreateStyles = makeStyles((theme) => ({
    button: {
        borderRadius: 30
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
        // height: 39,
        padding: 10,
    },
    // searchForm: {
    //     display: 'flex',
    //     flex: 1,
    // },
    // searchInput: {
    //     flex: 1,
    //     borderRadius: 30,
    //     padding: 10,
    //     border: 'none',
    //     outlineWidth: 0,
    // },
    // searchButton: {
    //     display: 'none'
    // }
}));
