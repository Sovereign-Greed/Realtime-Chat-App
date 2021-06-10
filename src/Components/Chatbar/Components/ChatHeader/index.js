import React from 'react';
import { ChatHeaderStyles } from './Styles';
import { changeDate } from '../../../../Functions'

import { SearchOutlined, AttachFile, MoreVert } from "@material-ui/icons/";
import { Avatar, IconButton } from '@material-ui/core';

export function ChatHeader({ roomName, timestamp, seed}) {
    const classes = ChatHeaderStyles();

    return (
        <div className={classes.header}>
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>

            <div className={classes.headerInfo}>
                <h3>{roomName}</h3>
                <p>{changeDate(timestamp.slice(0,25))}</p>
            </div>

            <div className={classes.headerRight}>
                <IconButton>
					<SearchOutlined />
				</IconButton>
				<IconButton>
					<AttachFile />
				</IconButton>
				<IconButton>
					<MoreVert />
				</IconButton>
            </div>
        </div>
    )
}
