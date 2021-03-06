import React, { useState } from 'react';
import { SideBarStyles } from './Styles';
import { SideBarChats, SideBarHeader, SideBarCreate } from './Components';

import { useStateValue } from "../../Redux/StateProvider";
import axios from '../../Redux/axios';

export function SideBar({ rooms, updateCurrentRoom }) {
    const classes = SideBarStyles();

    const [dialogStatus, setDialogStatus] = useState(false);
	const [{ user }] = useStateValue();

    const openDialog = () => {
        setDialogStatus(true);
    }

    const closeDialog = () => {
        setDialogStatus(false);
    }

    const handleChatroomSubmit = async (values) => {
        await axios.post('/rooms/new', {
			roomName: values.chatroom_name,
            roomIcon: values.chatroom_icon
		})
        closeDialog();
    }

	const sendRoomID = (id) => {
		updateCurrentRoom(id);
	}
    
    return (
        <div className={classes.sideBar}>
            <SideBarHeader
                photoURL={user?.photoURL}
                username={user?.displayName}
            />

            <SideBarCreate 
                handleSubmit={(values) => handleChatroomSubmit(values)}
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
