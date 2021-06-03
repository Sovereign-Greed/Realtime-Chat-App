import React from 'react';
import { ChatBodyStyles } from './Styles';

export function ChatBody({ messages, username }) {
    const classes = ChatBodyStyles();

    return (
        <div className={classes.body}>
            {
                messages?.map((message, index) => (
					<p
                        className={message.name === username ? classes.reciever: classes.message}
                        key={`${message.name}-${message.timestamp}`}
                    >	
                        <span className={classes.name}>{message.name}</span>
						{message.message}
						<span className={classes.timestamp}>{message.timestamp}</span>
					</p>
                ))
            }
        </div>
    )
}
