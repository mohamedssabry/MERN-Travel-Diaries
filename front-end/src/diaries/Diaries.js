import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getAllPosts } from "../api-helpers/helpers";
import DiaryItem from "./DiaryItem";

function Diaries() {
  const [posts, setPosts] = useState();

  useEffect(() => {
    getAllPosts()
      .then((data) => {
        setPosts(data?.posts);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Box
      display="flex"
      flexDirection={"column"}
      padding={3}
      justifyContent="center"
      alignItems={"center"}
    >
      {posts &&
        posts.map((item) => (
          <DiaryItem
            date={new Date(`${item.date}`).toLocaleDateString()}
            description={item.description}
            image={item.image}
            id={item._id}
            location={item.location}
            title={item.title}
            key={item._id}
            user={item._id}
            name={item.name}
          />
        ))}
    </Box>
  );
}

export default Diaries;
