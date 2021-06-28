import React from 'react';
import { ChatFooterStyles } from './Styles';
import { useFormik } from 'formik';
import { MessageValidation } from './MessageValidation';

import { TextField } from '@material-ui/core'
// import { InsertEmoticon, Mic } from '@material-ui/icons';

export function ChatFooter({ handleSubmit }) {
    const classes = ChatFooterStyles();

    const MessageFormik = useFormik({
        initialValues: {
            message: ''
        },
        validationSchema: MessageValidation,
        onSubmit: handleSubmit
    })

    return (
        <div className={classes.footer}>
            {/* <InsertEmoticon className={classes.icon}/> */}
            <form className={classes.messageForm} onSubmit={MessageFormik.handleSubmit}>
                <TextField
                    className={classes.messageInput}
                    type="text"
                    name="message"
                    label="Type a Message"
                    variant="outlined"
                    fullWidth
                    value={MessageFormik.values.message}
                    onChange={MessageFormik.handleChange}
                    error={MessageFormik.touched.message && Boolean(MessageFormik.errors.message)}
                    helperText={MessageFormik.touched.message && MessageFormik.errors.message}
                />
                <button
                    className={classes.messageButton} 
                    type="submit">
					Send Message
				</button>
            </form>
            {/* <Mic className={classes.icon}/> */}
        </div>
    )
}
