import React from "react";
import { Link } from "react-router-dom";
import Like from "./Like";
import Comment from "./Comment";
import Seen from "./Seen";

const Card = (props) => {
  const { id, title, body, date, like, author } = props;
  return (
    <div className="col-4">
      <div className="card m-2">
        <img
          className="card-img-top"
          src="https://storage.googleapis.com/gd-wagtail-prod-assets/original_images/Google-design-2020_3X2.png"
          alt="Card cap"
          style={{ height: "150px" }}
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text" style={{ fontSize: "17px" }}>
            {body}
          </p>
          <Link to="#" className="btn btn-primary">
            Read More
          </Link>
        </div>
        <div className="row ml-1 mb-1">
          <div className="col">
            <img
              src="data:image/jpeg;base64,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"
              alt="Profile"
              style={{
                borderRadius: "50%",
                width: "60px",
                height: "60px",
                border: "2px solid red",
              }}
            />
          </div>
          <div className="col-8">
            <div className="row">
              <span className="card-text text-muted text-center pl-2">
                Author:
                <small>{author}</small>
              </span>
            </div>
            <div className="row">
              <span className="card-text text-muted text-center pl-2">
                Date:
                <small>{new Date(date).toLocaleDateString("en-US")}</small>
              </span>
            </div>
          </div>
        </div>
        <div className="card-footer">
          <div className="row">
            <div className="col-4">
              <Like id={id} like={like} />
            </div>
            <div className="col-4">
              <Comment />
            </div>
            <div className="col-4">
              <Seen />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
