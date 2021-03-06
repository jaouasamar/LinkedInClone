import { Avatar } from '@material-ui/core'
import React from 'react'
import './Post.css'
import InputOption from './InputOption'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';

const Post = ({name,description,message,photoUrl}) => {
const handleLike=()=>{

}
    return (
        <div  className="post">
            <div className="post_header">
                <Avatar src={photoUrl}>{name[0]}</Avatar>
            <div className="post_info">
            <h2>{name}</h2>
            <p>{description}</p>
            </div>
            </div>
            <div className="post_body">
            <p>{message}</p>
            </div>
        <div className="post_buttons">
        <InputOption Icon={ThumbUpIcon} title="Like" color="gray"/>
        <InputOption Icon={ShareOutlinedIcon} title="Share" color="gray" />
        <InputOption Icon={SendOutlinedIcon} title="Send" color="gray" />
        </div>
        </div>
    )
}

export default Post