import { makeStyles } from '@material-ui/core';

export const SideBarHeaderStyles = makeStyles((theme) => ({
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: 20,
        borderRight: '1px solid lightgray',
        [theme.breakpoints.down('xs')] : {
            justifyContent: 'center'
        }
    },
    headerLeft: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        minWidth: '10vw',
        [theme.breakpoints.down('xs')] : {
            justifyContent: 'center'
        }
    },
    headerRight: {
        display: 'flex',
        alignItems: 'center',
        // justifyContent: 'space-between',
        justifyContent: 'flex-end',
        minWidth: '10vw',
        [theme.breakpoints.down('xs')] : {
            display: 'none'
        }
    },
    sidebarIcon: {
        // marginRight: '2vw',
        '&&': {
            fontSize: 24,
        }
    },
    username: {
        fontWeight: 700,
        marginLeft: 10,
        [theme.breakpoints.down('xs')] : {
            display: 'none'
        }
    }
}));
