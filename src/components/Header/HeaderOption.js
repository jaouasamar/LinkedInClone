import React from 'react'
import './HeaderOption.css'
import { Avatar } from "@material-ui/core";

function HeaderOption({avatar,Icon,title}) {
    return (
        <div className="headerOption">
            {Icon && <Icon className="headerOption__icon"/>}
            {avatar && <Avatar className="headerOption__icon"></Avatar>}
            <h3 className="headerOption_title">{title}</h3>
        </div>
    )
}

export default HeaderOption
