import React from 'react'
import './Widget.css'
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widget ()  {
    const newsArticle = (heading,subtitle)=>(
        <div  className="widgets_article">
            <div className="widgets_articleLeft">
                <FiberManualRecordIcon/>
            </div>
        
        <div className="widgets_articleRight">
            <h4>{heading}</h4>
            <p>{subtitle}</p>
        </div>
        </div>
    );
    return (
        <div className="widgets">
            <div className="widgets_header">
            <h2>Linkedin News</h2>
        <InfoOutlinedIcon />
            </div>
            {newsArticle(
        "Elon Musk is now the richest person in the world",
        "Top news - 4296 readers"
      )}
      {newsArticle(
        "Study suggests Pfizer vaccine works against virus variant",
        "Top news - 3126 readers"
      )}
      {newsArticle(
        "YouTube Suspends Trump’s Channel for at Least Seven Days",
        "Top news - 2926 readers"
      )}
      {newsArticle(
        "EHang’s passenger-carrying drone a key step in Urban Air Mobility",
        "Top news - 4231 readers"
      )}
      <img
        src="https://static-exp1.licdn.com/scds/common/u/images/promo/ads/li_evergreen_jobs_ad_300x250_v1.jpg"
        alt="ad"
    />
            
        </div>
    );
}



export default Widget
