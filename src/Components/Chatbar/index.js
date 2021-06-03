import React, { useState, useEffect } from 'react';
import { ChatBarStyles } from './Styles';

import { ChatHeader, ChatBody, ChatFooter } from './Components'

import axios from '../../axios';
import { useStateValue } from "../../StateProvider";

export function ChatBar({ messages, currentRoom }) {
    const classes = ChatBarStyles();

    const [input, setInput] = useState('');
	const [{ user }] = useStateValue();
	const [seed, setSeed] = useState('');
	
    useEffect(() => {
		setSeed(Math.floor(Math.random() * 5000));
	}, []);

    const handleChange = (e) => {
        setInput(e.target.value);
    }

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

    return (
        <div className={classes.ChatBar}>          
            <ChatHeader
                seed={seed} 
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
