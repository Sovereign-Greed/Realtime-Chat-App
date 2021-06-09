import React, { useState } from 'react';
import { SideBarStyles } from './Styles';
import { SideBarChats, SideBarHeader, SideBarSearch } from './Components';

import { useStateValue } from "../../Redux/StateProvider";
import axios from '../../API/axios';

export function SideBar({ rooms, updateCurrentRoom }) {
    const classes = SideBarStyles();

    const [input, setInput] = useState('');
	const [{ user }] = useStateValue();

    const handleInputChange = (e) => {
        setInput(e.target.value);
    }

    const createNewChat = async(e) => {
		e.preventDefault()
		await axios.post('/rooms/new', {
			roomName: input,
		})
		setInput('');
	}
	
	const sendRoomID = (id) => {
		updateCurrentRoom(id);
	}
    
    return (
        <div className={classes.sideBar}>
            <SideBarHeader
                photoURL={user?.photoURL}
            />

            <SideBarSearch 
                input={input}
                handleChange={handleInputChange}
                createNewChat={createNewChat}
            />

            <SideBarChats 
                rooms={rooms}
                sendRoomID={sendRoomID}
            />
        </div>
    )
}
