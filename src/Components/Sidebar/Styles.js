import { makeStyles } from '@material-ui/core';

export const SideBarStyles = makeStyles((theme) => ({
    sideBar: {
        display: 'flex',
        flexDirection: 'column',
        // flex: 0.35,
        flex: 1,
        [theme.breakpoints.down('xs')] : {
            flex: .075
        }
    }
}));
