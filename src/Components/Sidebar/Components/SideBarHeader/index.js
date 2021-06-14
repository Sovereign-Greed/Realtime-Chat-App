import React from 'react';
import { SideBarHeaderStyles } from './Styles';

import { Avatar, IconButton } from "@material-ui/core";
import { DonutLarge, Chat, MoreVert } from "@material-ui/icons"

export function SideBarHeader({ photoURL, username }) {
    const classes = SideBarHeaderStyles();

    return (
        <div className={classes.header}>
            <div className={classes.headerLeft}>
                <Avatar src={photoURL || ''} />
                {username && <p className={classes.username}>{username}</p>}
            </div>
            <div className={classes.headerRight}>
                <IconButton className={classes.sidebarIcon}>
                    <DonutLarge />
                </IconButton>
                <IconButton className={classes.sidebarIcon}>
                    <Chat />
                </IconButton>
                <IconButton className={classes.sidebarIcon}>
                    <MoreVert />
                </IconButton>
            </div>
        </div>
    )
}
