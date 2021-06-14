import { makeStyles } from '@material-ui/core';

export const ChatBarStyles = makeStyles((theme) => ({
    chatBar: {
        display: 'flex',
        flexDirection: 'column',
        // flex: 0.65,
        flex: 2,
        [theme.breakpoints.down('xs')] : {
            flex: .925
        }
    }
}));
