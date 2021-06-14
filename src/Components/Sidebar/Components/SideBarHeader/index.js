import React from 'react';
import { SideBarHeaderStyles } from './Styles';

import { Avatar, IconButton } from "@material-ui/core";
import { DonutLarge, Chat, MoreVert } from "@material-ui/icons"

export function SideBarHeader({ photoURL }) {
    const classes = SideBarHeaderStyles();

    return (
        <div className={classes.header}>
            <Avatar src={photoURL} />
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
