import React, { Component } from "react";
// import Post from "./Post";
import InstaService from "../services/instaService";
import User from "./User";
import ErrorMassage from "./Error";
import Loading from "./Loading";
import AOS from "aos";
import "aos/dist/aos.css";

export default class Posts extends Component {
  InstaService = new InstaService();
  state = {
    posts: [],
    error: false,
    loading: true,
  };

  componentDidMount() {
    this.updatePosts();
    AOS.init({});
  }
  updatePosts() {
    this.InstaService.getAllPosts()
      .then(this.onPostsLoaded)
      .catch(this.onError);
  }

  onPostsLoaded = (posts) => {
    this.setState({
      posts,
      error: false,
      loading: false,
    });
  };

  onError = (err) => {
    this.setState({
      error: true,
    });
  };
  renderItems(arr) {
    return arr.map((item) => {
      const { name, altname, photo, src, alt, descr, id, likes } = item;
      return (
        <div
          key={id}
          className="post"
          data-aos="fade-right"
          data-aos-duration="500"
        >
          <User src={photo} alt={altname} name={name} min />
          <img src={src} alt={alt}></img>
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
          <div className="likes"> {likes} likes</div>
          <div className="post__descr">{descr}</div>
        </div>
      );
    });
  }

  render() {
    const { error, posts, loading } = this.state;
    if (error) {
      return <ErrorMassage posts />;
    }
    if (loading) {
      return <Loading />;
    }

    const items = this.renderItems(posts);
    return <div className="left">{items}</div>;
  }
}
