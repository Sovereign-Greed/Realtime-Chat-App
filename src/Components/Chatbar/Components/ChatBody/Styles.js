import { makeStyles } from '@material-ui/core';

export const ChatBodyStyles = makeStyles((theme) => ({
    body: {
        flex: 1,
        // background: 'rgb(96,217,143)',
        background: 'linear-gradient(180deg, rgba(96,217,143,1) 0%, rgba(0,134,158,1) 100%)',
        padding: 30,
        overflow: 'auto'
    },
    message: {
        position: 'relative',
        fontSize: 16,
        padding: 10,
        width: 'auto',
        borderRadius: 10,
        backgroundColor: '#ffffff',
        marginBottom: 30
    },
    reciever: {
        position: 'relative',
        fontSize: 16,
        padding: 10,
        width: 'auto',
        borderRadius: 10,
        backgroundColor: '#dcf8c9',
        marginBottom: 30,
        marginLeft: 'auto'
    },
    name: {
        position: 'absolute',
        top: -15,
        fontWeight: 800,
        fontSize: 'xx-small'
    },
    timestamp: {
        marginLeft: 10,
        fontSize: 'xx-small'
    }
}));
