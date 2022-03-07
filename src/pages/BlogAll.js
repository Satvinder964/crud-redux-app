import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { blogPost } from "../redux/action";
import { Link } from "react-router-dom";
export default function BlogAll() {
  let dispatch = useDispatch();
  const [loader, setLoader] = useState(true);
  const { blogs } = useSelector((state) => ({
    blogs: state.AllDataBlog.blogs,
  }));
  console.log(blogs, "blogsblogsblogsblogsblogsblogsblogsblogs");

  useEffect(async () => {
    setLoader(true);
    await dispatch(blogPost());
    setLoader(false);
  }, []);

  if (loader) {
    return (
      <h4 className="loding">
        <img src="https://wpamelia.com/wp-content/uploads/2018/11/ezgif-2-6d0b072c3d3f.gif" />
      </h4>
    );
  }

  return (
    <div>
    <div className="row space ">
          {blogs &&
            blogs.length > 0 &&
            blogs.map((item) => (
              <>
                <div className="col-lg-6 set" key={item.id}>
                  <div className="card">
                    <Link to={"/Content/" + item.id}>
                      {" "}
                      <img src={item.jetpack_featured_media_url} />
                    </Link>
                    <div className="card-body">
                      <div className="set-all">
                        <Link to={"/Content/" + item.id}>
                          {" "}
                          <h5 className="card-title">{item.title.rendered}</h5>
                        </Link>
                        <p className="card-text">
                          <span
                            className="content"
                            dangerouslySetInnerHTML={{
                              __html: item.excerpt.rendered,
                            }}
                          ></span>
                        </p>
                        <p className="Buttonset">
                          <Link to={"/Content/" + item.id}>
                            Continue Reading
                          </Link>
                          <span className="share_item share_sign">
                            <Link to={"/Content/" + item.id}>
                              {" "}
                              <i className="fa fa-share" aria-hidden="true"></i>
                            </Link>
                            <div className="icons">
                              <i className="fa fa-facebook"></i>
                              <i className="fa fa-instagram"></i>
                            </div>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ))}
        </div>
    </div>
  );
}
