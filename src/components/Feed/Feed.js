import React from 'react'
import './Feed.css'
import CreateIcon from '@material-ui/icons/Create';
import InputOption from "./InputOption";
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import Post from './Post'

function Feed() {
    return (
        <div className="feed">
        <div className="feed_inputContainer">
            <div className="feed_input">
                <CreateIcon />
                <form>
                    <input  type="text" placeholder="Start a post" />
                    <button  type="submit">Send</button>
                </form>
            </div>
            <div className="feed_inputOptions">
                <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
                <InputOption Icon={SubscriptionsIcon} title="Video" color="#7FC15E" />
                <InputOption Icon={EventNoteIcon} title="Event" color="#E7A33E" />
                <InputOption Icon={CalendarViewDayIcon} title="Write article" color="#F5987E" />
            </div>
        </div>
        <hr/>
        <Post 
        name="Samar Jaoua"
        description="This is a test"
        message="I hope this is working"
        />
        </div>
       
    
    )
}

export default Feed
