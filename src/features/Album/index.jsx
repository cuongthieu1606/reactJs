import React from "react";
import PropTypes from "prop-types";
import Album from "./components/Album";
import AlbumList from "./components/AlbumList";

AlbumFeature.propTypes = {};

function AlbumFeature(props) {
  const albumList = [
    {
      id: 1,
      name: "Top 100 Bài Hát Nhạc Trẻ Hay Nhất",
      thumbnailUrl:
        "https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/cover/9/d/e/b/9deb423af41c5ef89dcb2965d1374e9d.jpg",
    },
    {
      id: 2,
      name: "Top 100 Pop Âu Mỹ Hay Nhất",
      thumbnailUrl:
        "https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/cover/6/0/6/4/606430a29783ea7f864de569bb8a45d0.jpg",
    },
    {
      id: 3,
      name: "Top 100 Nhạc Electronic/Dance Âu Mỹ Hay Nhất",
      thumbnailUrl:
        "https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/cover/c/5/f/c/c5fc615c43215c6b72676f42767855ee.jpg",
    },
  ];
  return (
    <div>
      <h2>Có thể bạn sẽ thích các bài hát</h2>
      <AlbumList albumList={albumList } />
    </div>
  );
}

export default AlbumFeature;
