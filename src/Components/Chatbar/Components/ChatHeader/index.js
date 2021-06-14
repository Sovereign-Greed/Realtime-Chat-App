import React from 'react';
import { ChatHeaderStyles } from './Styles';
import { changeDate } from '../../../../Functions'

import { SearchOutlined, AttachFile, MoreVert } from "@material-ui/icons/";
import { Avatar, IconButton } from '@material-ui/core';
import { chatroomIcons } from '../../../../Functions';

export function ChatHeader({ roomName, roomIcon, timestamp }) {
    const classes = ChatHeaderStyles();
    
    return (
        <div className={classes.header}>
            <Avatar>
                {roomIcon ? chatroomIcons[roomIcon] : chatroomIcons.Camera}
            </Avatar>

            <div className={classes.headerInfo}>
                <h3>{roomName}</h3>
                <p className={classes.timestamp}>{timestamp && changeDate(timestamp.slice(0,25))}</p>
            </div>

            <div className={classes.headerRight}>
                <IconButton>
					<SearchOutlined className={classes.iconButton}/>
				</IconButton>
				<IconButton>
					<AttachFile className={classes.iconButton}/>
				</IconButton>
				<IconButton>
					<MoreVert className={classes.iconButton}/>
				</IconButton>
            </div>
        </div>
    )
}
