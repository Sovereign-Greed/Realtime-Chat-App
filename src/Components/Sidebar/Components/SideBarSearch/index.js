import React from 'react';
import { SideBarSearchStyles } from './Styles';

export function SideBarSearch({ input, handleChange, createNewChat }) {
    const classes = SideBarSearchStyles();

    return (
        <div className={classes.search}>
            <form className={classes.searchForm}>
                <input
                    value={input}
                    onChange={e => handleChange(e)}
                    placeholder="Create Chatroom: Enter Name"
                    type="text"
                    className={classes.searchInput}
                />
                <button 
                    onClick={(e) => createNewChat(e)}
                    type="submit"
                    className={classes.searchButton}
                >
                    Create Chat
                </button> 
            </form>
        </div>
    )
}
