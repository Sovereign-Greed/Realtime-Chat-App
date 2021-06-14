import React, { useState } from 'react';
import { ChatBarStyles } from './Styles';
import { ChatHeader, ChatBody, ChatFooter } from './Components'

import { useStateValue } from "../../Redux/StateProvider";
import axios from '../../Redux/axios';

export function ChatBar({ messages, currentRoom }) {
    const classes = ChatBarStyles();

    const [input, setInput] = useState('');
	const [{ user }] = useStateValue();

    // input on change handle
    const handleChange = (e) => {
        setInput(e.target.value);
    }

    // message submit handle
    const sendMessage = async(e) => {
		e.preventDefault();
		
		let current = new Date();
		let timestamp = current.toUTCString().slice(0,28);
		
		await axios.post(`/${currentRoom._id}/messages/new`, {
			message: input,
			name: user.displayName,
			timestamp: timestamp,
			received: true,
		}) 
		
		setInput('');
	}

    if (currentRoom === null ) return (<div/>)
    return (
        <div className={classes.chatBar}>          
            <ChatHeader
                roomName={currentRoom.roomName}
                timestamp={currentRoom.lastTimestamp}
            />
            <ChatBody 
                messages={messages}
                username={user.displayName}
            />
            <ChatFooter 
                input={input}
                handleChange={handleChange}
                sendMessage={sendMessage}
            />
        </div>
    )
}
