import { makeStyles } from '@material-ui/core';

export const SideBarSearchStyles = makeStyles((theme) => ({
    search: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#f6f6f6',
        // height: 39,
        padding: 10,
    },
    searchForm: {
        display: 'flex',
        flex: 1,
    },
    searchInput: {
        flex: 1,
        borderRadius: 30,
        padding: 10,
        border: 'none',
        outlineWidth: 0,
    },
    searchButton: {
        display: 'none'
    }
}));
