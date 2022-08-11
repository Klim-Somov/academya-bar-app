// import {
//   ChatOutlined,
//   SendOutlined,
//   ShareOutlined,
//   ThumbUpAltOutlined,
// } from "@mui/icons-material";
// import InputOption from "../InputOption/InputOption";
// import InputOption from "./InputOption";
import { Avatar } from "@mui/material";
import React, { forwardRef } from "react";
import { useSelector } from "react-redux";
import "./Post.scss";

const Post = forwardRef(({ name, description, msg, img }, ref) => {
  const avatar = useSelector((state) => state.avatar.avatarUrl);
  return (
    <div ref={ref} className="post">
      <div className="post__header">
        <Avatar sx={{ bgcolor: "#BCBCBC" }} src={avatar}>
          {name[0]}
        </Avatar>
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="post__body">
        <p>{msg}</p>
        <img alt="" src={img} />
      </div>
      {/* <div className="post__btns">
        <InputOption text="Like" Icon={ThumbUpAltOutlined} color="gray" />
        <InputOption text="Comment" Icon={ChatOutlined} color="gray" />
        <InputOption text="Share" Icon={ShareOutlined} color="gray" />
        <InputOption text="Send" Icon={SendOutlined} color="gray" />
      </div> */}
    </div>
  );
});
export default Post;
