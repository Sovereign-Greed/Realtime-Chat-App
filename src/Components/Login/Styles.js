import { makeStyles } from '@material-ui/core';

export const LoginStyles = makeStyles((theme) => ({
    login: {
        backgroundColor: '#f8f8f8',
        height: '100vh',
        width: '100vw',
        display: 'grid',
        alignItems: 'center',
    },
    loginContainer: {
        padding: 100,
        width: '40vw',
        margin: '0 auto',
        textAlign: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 3px rgba(0,0,0,0.12)'
    },
    loginLogo: {
        objectFit: 'contain',
        height: 100,
        marginBottom: 40
    },
    loginButton: {
        marginTop: 50,
        '&&': {
            textTransform: 'inherit',
            backgroundColor: '#40E0D0'
        },
        color: 'white'
    }
}))