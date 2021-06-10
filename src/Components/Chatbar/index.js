import React, { useState, useEffect } from 'react';
import { ChatBarStyles } from './Styles';

import { ChatHeader, ChatBody, ChatFooter } from './Components'
import { useSelector, useDispatch } from 'react-redux'
import { GetChatRoomThunk } from '../../Redux/ReduxStore'

import { useStateValue } from "../../StateProvider";
import axios from '../../axios';

export function ChatBar() {
    const classes = ChatBarStyles();
    const dispatch = useDispatch();
    const { action, currentRoom, currentMessages } = useSelector((state) => state.ReduxStore);

    const [input, setInput] = useState('');
	const [{ user }] = useStateValue();
	const [seed, setSeed] = useState('');
	
    useEffect(async () => {
		setSeed(Math.floor(Math.random() * 5000))
        await dispatch(GetChatRoomThunk({room_id: currentRoom._id}));
        await console.log(action)
	}, []);

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
                seed={seed} 
                roomName={currentRoom.roomName}
                timestamp={currentRoom.lastTimestamp}
            />
            <ChatBody 
                messages={currentMessages}
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
