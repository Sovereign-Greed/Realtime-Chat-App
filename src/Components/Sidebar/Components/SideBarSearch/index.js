import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, DialogContentText, TextField } from '@material-ui/core';
import { AddCircleOutline } from '@material-ui/icons';
import { SideBarSearchStyles } from './Styles';

export function SideBarSearch({ input, handleChange, createNewChat, dialogStatus, closeDialog, openDialog }) {
    const classes = SideBarSearchStyles();

    return (
        <div className={classes.search}>
            {/* <form className={classes.searchForm}>
                <input
                    value={input}
                    onChange={e => handleChange(e)}
                    placeholder="Create Chatroom: Enter Name"
                    type="text"
                    className={classes.searchInput}
                />
                <button 
                    onClick={(e) => createNewChat(e)}
                    type="submit"
                    className={classes.searchButton}
                >
                    Create Chat
                </button> 
            </form> */}
            <Button 
                variant="contained"
                color="secondary"
                // className={classes.button}
                startIcon={<AddCircleOutline />}
                fullWidth
                onClick={() => openDialog()}
            >
                Create New Chatroom
            </Button>
            <Dialog
                open={dialogStatus}
                onClose={() => closeDialog()}
                aria-labelledby="create-new-chatroom-dialog"
            >
                <DialogTitle>Create New Chatroom</DialogTitle>
                <DialogContent>
                    <TextField 
                        type="text"
                        label="Chatroom Name"
                    />
                </DialogContent>
            </Dialog>
        </div>
    )
}
