import React, { useEffect, useState } from "react";
import Keanu from "./Keanu";
import AOS from "aos";
import "aos/dist/aos.css";

const Post = () => {
  const [statepost, setStatepost] = useState([
    {
      id: Date.now(),
      src:
        "https://nighthelper.com/wp-content/uploads/2016/03/nature_waterfall_summer_lake_trees_90400_3840x2160.jpg",
      likes: "1116",
      descr: "call me!",
      date: "10/23/2020, 1:08:01 PM",
    },
    {
      id: Date.now() + 1,
      src:
        "https://cdn-7.nikon-cdn.com/Images/Learn-Explore/Photography-Techniques/2019/CA-Chris-Ogonek-Picture-Controls/Media/Chris-Ogonek-Picture-Controls-Vivid.jpg",
      likes: "16",
      descr: "call me!",
      date: "10/23/2020, 1:08:02 PM",
    },
    {
      id: Date.now() + 2,
      src: "https://eskipaper.com/images/high-resolution-photos-1.jpg",
      likes: "126",
      descr: "yooo",
      date: "10/23/2020, 1:08:03 PM",
    },
    {
      id: Date.now() + 3,
      src: "https://img2.goodfon.ru/wallpaper/nbig/3/c9/beautiful-scenery-tree-sea.jpg",
      likes: "2",
      descr: "yooo",
      date: "10/23/2020, 1:08:04 PM",
    },
  ]);
  var [value, setvalue] = useState("");
  var [img, setimg] = useState("");

  var [show, setshow] = useState(false);
  var [appear, setappear] = useState(false);
  var [opensortt, setopensort] = useState(true);

  var [sortt, setsortt] = useState(true);
  var [sortdate, setsortdate] = useState(false);

  const damateba = () => {
    setStatepost([
      ...statepost,
      {
        id: Date.now(),
        src: img,
        descr: value,
        likes: 0,
        date: new Date().toLocaleString(),
      },
    ]);

    setimg("");
    setvalue("");
  };

  const open = () => {
    setshow(false);
    setappear(true);
    setopensort(true);
  };

  const close = () => {
    setshow(true);
    setappear(false);
    setopensort(true);
  };
  
  const opensort = () => {
    setopensort(!opensortt);
    setshow(false);
    setappear(true);
  };
  useEffect(() => {
    AOS.init({});
  });

  const removePost = (id) => {
    setStatepost(statepost.filter((statepost) => statepost.id != id));
  };
  const sort = () => {
    setStatepost(
      statepost.sort((a, b) => {
        return a.likes - b.likes;
      })
    );
    setsortt(false);
    setsortdate(true);
  };
  const sortByDate = () => {
    setStatepost(
      statepost.sort((a, b) => {
        return a.id - b.id;
        //date = id
      })
    );
    setsortdate(false);
    setsortt(true);
  };
  const reversesort = () => {
    setStatepost(statepost.reverse());
    setsortt(true);
  };

  const reversesortByDate = () => {
    setStatepost(statepost.reverse());
    setsortdate(true);
  };

  return (
    <>
      <div className="add_btns">
        {show ? (
          <button className="btn" onClick={open}>
            დახურვა
          </button>
        ) : (
          <button className="btn" onClick={close}>
            პოსტის დამატება
          </button>
        )}
      </div>

      <div className="add_btns">
        <button className="btn" onClick={opensort}>
          sort
        </button>
      </div>

      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-anchor-placement="bottom-bottom"
        className={opensortt ? "post_input ds_none" : "post_input"}
      >
        <div className="sort">
          {sortt ? (
            <button className="btn" onClick={sort}>
              პოპულარული ⇑
            </button>
          ) : (
            <button className="btn" onClick={reversesort}>
              პოპულარული ⇓
            </button>
          )}
        </div>

        <div className="sort">
          {sortdate ? (
            <button className="btn" onClick={sortByDate}>
              ახალი ⇑
            </button>
          ) : (
            <button className="btn" onClick={reversesortByDate}>
              ახალი ⇓
            </button>
          )}
        </div>
      </div>

      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-anchor-placement="bottom-bottom"
        className={show ? "post_input " : "post_input ds_none"}
      >
        <input
          placeholder="შეიყვანეთ სურათის აღწერა"
          type="text"
          onChange={(e) => setvalue(e.target.value)}
          value={value}
        ></input>

        <input
          placeholder="ჩააგდეთ image address"
          type="text"
          onChange={(e) => setimg(e.target.value)}
          value={img}
        ></input>

        <button className="btn" onClick={damateba}>
          დამატება
        </button>
      </div>
      <div className="mypost" data-aos="flip-left" data-aos-duration="1000">
        {statepost.length == 0 ? "ყველა პოსტი წაშლილია" : ""}

        {statepost.map((item) => (
          <div
            key={item.id}
            data-aos="flip-left"
            data-aos-duration="1000"
            className="post"
          >
            <div className="remove_post">
              <p onClick={removePost.bind(null, item.id)}>x</p>
            </div>
            <Keanu state={statepost} flex date={item.date} />

            <img src={item.src} alt="alt"></img>
            <div className="icon_div">
              <img
                className="size_icon"
                src="https://icons-for-free.com/iconfiles/png/512/heart-131965017458786724.png"
                alt="hear_icon"
              ></img>
              <img
                className="size_icon"
                src="https://static.thenounproject.com/png/153178-200.png"
                alt="mess_icon"
              ></img>
              <img
                className="size_icon"
                src="https://www.clipartkey.com/mpngs/m/21-219017_instagram-paper-airplane-icon.png"
                alt="air_icon"
              ></img>
            </div>
            <div className="likes"> {item.likes} likes</div>
            <div className="post__descr">{item.descr}</div>
          </div>
        )).reverse()}
      </div>
    </>
  );
};
export default Post;