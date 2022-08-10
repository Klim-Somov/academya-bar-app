import React, { useEffect, useState } from "react";
import "./Chat.scss";
import CreateIcon from "@mui/icons-material/Create";
import SendIcon from "@mui/icons-material/Send";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import EventIcon from "@mui/icons-material/Event";
import FeedIcon from "@mui/icons-material/Feed";
import { db } from "../../firebase/index";
import { onValue, ref, serverTimestamp, set } from "firebase/database";
import { useSelector } from "react-redux";
import Post from "../../components/Post/Post";
import FlipMove from "react-flip-move";
import InputOption from "../../components/InputOption/InputOption";

function Chat() {
  const user = useSelector((state) => state.user.user);

  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState("");
  // const [shareImage, setShareImage] = useState("");

  // const hendleChange = (e) => {
  //  ;
  //   setShareImage(e.target.files[0]);
  // };

  const postRef = ref(db, "posts");
  const getpostRefById = (id) => ref(db, `posts/${id}`);

  const sendPost = (e) => {
    e.preventDefault();
    const newPost = {
      name: user?.displayName,
      description: user.email,
      message: input,
      timestamp: serverTimestamp(),
      id: Date.now(),
    };

    setInput("");
    set(getpostRefById(newPost.id), newPost);
  };
  useEffect(() => {
    const unsubscribe = onValue(postRef, (snapshot) => {
      const val = snapshot.val();
      setPosts(Object.values(val || {}).reverse());
    });

    return unsubscribe;
  }, []);

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
            />
            <button onClick={sendPost} type="submit">
              <SendIcon />
            </button>
          </form>
        </div>
        <div className="feed__inputOption" style={{ position: "relative" }}>
          {/* <input
            type="file"
            name="image"
            id="file"
            exept="image/gif, image/jpeg, image/png"
            style={{
              display: "none",
            }}
            // onChange={hendleChange}
          /> */}
          {/* <label htmlFor="file"> */}
          <InputOption color="#70b5f9" Icon={PhotoLibraryIcon} text="photo" />
          {/* </label> */}
          <InputOption color="#e7a33E" Icon={VideoLibraryIcon} text="video" />
          <InputOption color="c0cbcd" Icon={EventIcon} text="Event" />
          <InputOption color="7fc15e" Icon={FeedIcon} text="Wright article" />
        </div>
        {/* {shareImage && <img src={URL.createObjectURL(shareImage)}/>} */}
      </div>

      <FlipMove>
        {posts.map((post) => (
          <Post
            key={post.id}
            name={post.name}
            msg={post.message}
            description={post.description}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Chat;
