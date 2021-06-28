import React from 'react';
import { ChatBarStyles } from './Styles';
import { ChatHeader, ChatBody, ChatFooter } from './Components'

import { useStateValue } from "../../Redux/StateProvider";
import axios from '../../Redux/axios';

export function ChatBar({ messages, currentRoom }) {
    const classes = ChatBarStyles();

	const [{ user }] = useStateValue();

    // message submit handle
    const sendMessage = async(values) => {
		let current = new Date();
		let timestamp = current.toUTCString().slice(0,28);

		await axios.post(`/${currentRoom._id}/messages/new`, {
			message: values.message,
			name: user.displayName,
			timestamp: timestamp,
			received: true,
		})

	}

    if (currentRoom === null ) return (<div/>)
    return (
        <div className={classes.chatBar}>          
            <ChatHeader
                roomName={currentRoom.roomName}
                roomIcon={currentRoom.roomIcon} 
                timestamp={currentRoom.lastTimestamp}
            />
            <ChatBody 
                messages={messages}
                username={user.displayName}
            />
            <ChatFooter 
                handleSubmit={sendMessage}
            />
        </div>
    )
}
