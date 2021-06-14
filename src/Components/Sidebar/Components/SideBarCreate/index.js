import React from 'react';
import { 
    Button, 
    Dialog, 
    DialogActions, 
    DialogContent, 
    DialogTitle, 
    TextField,
    FormControl,
    InputLabel,
    Select,
    MenuItem
} from '@material-ui/core';
import { AddCircleOutline } from '@material-ui/icons';
import { SideBarCreateStyles } from './Styles';
import { ChatroomValidation } from './ChatroomValidation'
import { useFormik } from 'formik';

export function SideBarCreate({ createNewChat, dialogStatus, closeDialog, openDialog, handleSubmit }) {
    const classes = SideBarCreateStyles();

    const iconsTypes = [
        { value: 'Camera' , label: 'Camera' },
        { value: 'Flare' , label: 'Flare' },
        { value: 'Fireplace', label: 'Fireplace' },
        { value: 'AcUnit' , label: 'Snowflake' },
        { value: 'OfflineBolt', label: 'Lightning Bolt'},
        { value: 'CloudCircle' , label: 'Cloud' }
    ]

    const CreateChatRoomFormik = useFormik({
        initialValues: {
            chatroom_name: '',
            chatroom_icon: ''
        },
        validationSchema: ChatroomValidation,
        onSubmit: handleSubmit
    })

    return (
        <div className={classes.search}>
            <Button 
                variant="contained"
                color="secondary"
                className={classes.button}
                startIcon={<AddCircleOutline />}
                fullWidth
                onClick={() => openDialog()}
            >
                Create New Chatroom
            </Button>
            <Dialog
                open={dialogStatus}
                onClose={() => closeDialog()}
                className={classes.dialog}
                aria-labelledby="create-new-chatroom-dialog"
            >
                <form onSubmit={CreateChatRoomFormik.handleSubmit}>
                    <DialogTitle className={classes.dialogTitle}>Create New Chatroom</DialogTitle>
                    <DialogContent className={classes.dialogContent}>                        
                        <TextField 
                            type="text"
                            name="chatroom_name"
                            label="Chatroom Name"
                            fullWidth
                            value={CreateChatRoomFormik.values.chatroom_name}
                            onChange={CreateChatRoomFormik.handleChange}
                            error={CreateChatRoomFormik.touched.chatroom_name && Boolean(CreateChatRoomFormik.errors.chatroom_name)}
                            helperText={CreateChatRoomFormik.touched.chatroom_name && CreateChatRoomFormik.errors.chatroom_name}
                        />
                        <FormControl className={classes.selectField}>
                            <InputLabel id="Chatroom-icon-select">Chatroom Icon</InputLabel> 
                            <Select
                                labelId="Chatroom-icon-select"
                                label="Chatroom Icon"
                                name="chatroom_icon"
                                fullWidth
                                value={CreateChatRoomFormik.values.chatroom_icon}
                                onChange={CreateChatRoomFormik.handleChange}
                                error={CreateChatRoomFormik.touched.chatroom_icon && Boolean(CreateChatRoomFormik.errors.chatroom_icon)}
                                helperText={CreateChatRoomFormik.touched.chatroom_icon && CreateChatRoomFormik.errors.chatroom_icon}
                            >
                                {iconsTypes.map((icon) => (
                                    <MenuItem key={`chatroom-icon-${icon.value}`} value={icon.value}>
                                        {icon.label}
                                    </MenuItem>
                                ))}
                            </Select>   
                        </FormControl>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => closeDialog()} color="primary">Cancel</Button>
                        <Button type="submit" color="primary" autoFocus>Confirm</Button>
                    </DialogActions>
                </form>
            </Dialog>
        </div>
    )
}
