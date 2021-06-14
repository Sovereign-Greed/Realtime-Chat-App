import React, { useState } from 'react';
import { SideBarStyles } from './Styles';
import { SideBarChats, SideBarHeader, SideBarSearch } from './Components';

import { useStateValue } from "../../Redux/StateProvider";
import axios from '../../Redux/axios';

export function SideBar({ rooms, updateCurrentRoom }) {
    const classes = SideBarStyles();

    const [input, setInput] = useState('');
    const [dialogStatus, setDialogStatus] = useState(false);
	const [{ user }] = useStateValue();

    const handleInputChange = (e) => {
        setInput(e.target.value);
    }

    const openDialog = () => {
        setDialogStatus(true);
    }

    const closeDialog = () => {
        setDialogStatus(false);
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
                openDialog={openDialog}
                closeDialog={closeDialog}
                dialogStatus={dialogStatus}
            />

            <SideBarChats 
                rooms={rooms}
                sendRoomID={sendRoomID}
            />
        </div>
    )
}
