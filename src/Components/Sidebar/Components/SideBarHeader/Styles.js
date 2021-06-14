import { makeStyles } from '@material-ui/core';

export const SideBarHeaderStyles = makeStyles((theme) => ({
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: 20,
        borderRight: '1px solid lightgray'
    },
    headerRight: {
        display: 'flex',
        alignItems: 'center',
        // justifyContent: 'space-between',
        justifyContent: 'flex-end',
        minWidth: '10vw'
    },
    sidebarIcon: {
        // marginRight: '2vw',
        '&&': {
            fontSize: 24,
        }
    }
}));
