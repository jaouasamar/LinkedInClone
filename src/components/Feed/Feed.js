import React, { useState } from "react";
import "./Feed.css";
import CreateIcon from "@material-ui/icons/Create";
import InputOption from "./InputOption";
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import Post from "./Post";
import SendIcon from "@mui/icons-material/Send";
import WorkIcon from "@mui/icons-material/Work";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Avatar, Link, Select } from "@material-ui/core";
import CloseIcon from "@mui/icons-material/Close";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import PublicIcon from "@mui/icons-material/Public";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import PhotoOutlinedIcon from "@mui/icons-material/PhotoOutlined";
import OndemandVideoOutlinedIcon from "@mui/icons-material/OndemandVideoOutlined";
import StickyNote2OutlinedIcon from "@mui/icons-material/StickyNote2Outlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';

function Feed() {
  const style = {
    position: "absolute",
    top: "40%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    height: 350,
    bgcolor: "background.paper",
    border: "1px solid lightgrey",
    boxShadow: 24,
    pt: 2,
    pb: 2,
  };
  let postsData = [
    { name: "Mohamed", description: "mohamed@gmail.com", message: "Hello" },
    { name: "Samar", description: "samar@gmail.com", message: "Good" },
  ];

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // const handelAdd = (newpost) => {
  //   setPosts([...postsData, newpost]);
  // };

  const [posts, setPosts] = useState(postsData);
  const [input, setInput] = useState("");
  const sendPost = (e) => {
    e.preventDefault();
    setPosts([
      ...posts,
      {
        name: "Samar Jaoua",
        description: "jaoua.samar@gmail.com",
        message: input,
      },
    ]);
   
    setInput("");
  };
 
  return (
    <div className="feed">
      <div className="feed_inputContainer">
        <div className="avatar">
          <Avatar
            alt="Travis Howard"
            sx={{ width: 46, height: 46 }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt-KR6edMPNgONwMmebV9VKjVxFmidDYu2Zg&usqp=CAU"
          />
        </div>
        <Button style={{ justifyContent: "flex-start" }} onClick={handleOpen}>
        
          Start a post
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="ModalHearder">
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Create a post
              </Typography>
              <CloseIcon
                onClick={() => {
                  handleClose();
                }}
              />
            </div>
            {/* <hr/> */}
            <div className="modalBody">
              <div className="modalBodyHeader">
                <Avatar
                  alt="Remy Sharp"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt-KR6edMPNgONwMmebV9VKjVxFmidDYu2Zg&usqp=CAU"
                />
                <div className="modalBodyHeaderOption">
                  <p>Samar Jaoua</p>
                  <Button
                    startIcon={<PublicIcon />}
                    endIcon={<ArrowDropDownIcon />}
                  >
                    Anyone
                  </Button>
                </div>
              </div>
              <div className="textArea">
                <textarea placeholder="What do you want to talk about"  value={input}
    onChange={(e) => {
      setInput(e.target.value);
      // handelAdd({name:"Samar Jaoua",description:"jaoua.samar@gmail.com",message:input});
    }}>

    </textarea>
              </div>
              <div className="link">
                <Link underline="none" color="blue">
                  Add hashtag
                </Link>
              </div>
            <div className="postFooter">

            
              <div className="icons">
                
                  <PhotoOutlinedIcon className="icon" style={{color:"gray"}}/>
                  <OndemandVideoOutlinedIcon className="icon" style={{color:"gray"}}/>
                  <StickyNote2OutlinedIcon className="icon" style={{color:"gray"}}/>
                  <WorkIcon className="icon" style={{color:"gray"}}/>
                  <AcUnitIcon className="icon" style={{color:"gray"}}/>
                  <EqualizerIcon className="icon" style={{color:"gray"}}/>
                  <MoreHorizIcon className="iconLast" style={{color:"gray"}}/>
               
              </div>
              <div className="postPermission">
                <Button  style={{color:"grey"}}
                startIcon={<ChatOutlinedIcon />}>Anyone</Button>

              </div>
              <div className="postButton">
                <Button size="small" variant="contained" onClick={sendPost}>Post</Button>
              </div>
              </div>
            </div>
          </Box>
        </Modal>
      </div>
      <div className="feed_inputOptions">
        <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
        <InputOption Icon={SubscriptionsIcon} title="Video" color="#7FC15E" />
        <InputOption Icon={EventNoteIcon} title="Event" color="#E7A33E" />
        <InputOption
          Icon={CalendarViewDayIcon}
          title="Write article"
          color="#F5987E"
        />
      </div>

      <hr />
      {posts.map((post) => (
        <Post
          name={post.name}
          description={post.description}
          message={post.message}
        />
      ))} 
    </div>
  );
}

export default Feed;
