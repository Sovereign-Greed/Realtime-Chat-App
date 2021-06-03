import { InsertEmoticon, Mic } from '@material-ui/icons';
import React from 'react';
import { ChatFooterStyles } from './Styles';

export function ChatFooter({ input, handleChange, sendMessage }) {
    const classes = ChatFooterStyles();

    return (
        <div className={classes.footer}>
            <InsertEmoticon className={classes.icon}/>

            <form className={classes.messageForm}>
                <input 
                    value={input}
                    placeholder="Type a message"
                    type="text"
                    onChange={(e) => handleChange(e)}
                    className={classes.messageInput}
                />
                <button
                    className={classes.messageButton} 
                    onClick={sendMessage} 
                    type="submit">
					Send Message
				</button>
            </form>

            <Mic className={classes.icon}/>
        </div>
    )
}
