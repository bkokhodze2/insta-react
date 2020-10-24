import React, { useEffect, useState } from "react";
import Keanu from "./Keanu";
import AOS from "aos";
import "aos/dist/aos.css";

const Post = (props) => {
  const [statepost, setStatepost] = useState([
    {
      id: Date.now(),
      src:
        "https://nighthelper.com/wp-content/uploads/2016/03/nature_waterfall_summer_lake_trees_90400_3840x2160.jpg",
      likes: "1116",
      descr: "call me!",
      date: "10/23/2020, 6:08:57 PM",
    },
  ]);
  var [value, setvalue] = useState("");
  var [img, setimg] = useState("");
  var [show, setshow] = useState(false);
  var [hop, sethop] = useState(false);

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
    // setnamee("mesame");
    setshow(false);
    sethop(true);
  };
  useEffect(() => {
    AOS.init({
      
    });
  });

  const close = () => {
    setshow(true);
    sethop(false);
  };

  return (
    <>
      <div className="add_btns">
        {show ? (
          <button onClick={open}>დახურვა</button>
        ) : (
          <button onClick={close}>პოსტის დამატება</button>
        )}
      </div>

      <div
        data-aos="fade-up"
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
          placeholder="ჩააგდეთ სურათის ლინკი"
          type="text"
          onChange={(e) => setimg(e.target.value)}
          img={img}
        ></input>

        <button onClick={damateba}>დამატება</button>
      </div>
      <div className="mypost" data-aos="flip-left"
      data-aos-duration="1000">
        {statepost
          .map((item) => (
            <div key={item.id} data-aos="flip-left" data-aos-duration="1000" className="post">
              <Keanu flex date={item.date} />

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
          ))
          .reverse()}
      </div>
    </>
  );
};

export default Post;
