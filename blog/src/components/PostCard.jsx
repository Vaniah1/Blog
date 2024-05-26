import "../blog.css";
import { useState } from "react";

const PostCard = ({
  image,
  title,
  category,
  content,
  publishedDate,
  readingTime,
  details,
  author,
}) => {

 const [like, setLike] = useState(false);


 function toggleLike() {
  setLike(!like);
  
 }

  return (
    <div className=" mt-6 w-64 py-4 px-4  relative flex-col flex justify-center">
      <img
        src={image}
        alt={title}
        width={"900px"}
        height={"300px"}
        className="rounded border-blue-600 border-6 "
      />
      <div className="rounded mt-6 bg-none py-4 relative overflow-hidden flex-auto border-solid text-sm">
        <div className="rounded mt-6 bg-none py-4 overflow-hidden flex-col border-solid text-sm align-middle">
          <span className="postcard--title">{title}</span>

          <div className="flex flex-wrap">
            <div className="flex flex-col">
              <span className="mr-2 font-bold">({category})</span>
              <span className="mr-2">{publishedDate}</span>
              <span>{readingTime} min read</span>  
              <span className="mr-2 postcard--content">{content}</span>
              <span className="postcard--details">{details}</span>
            </div>  
          </div>
        </div>   
        <div onClick={toggleLike} className="postcard--like">
        <img src={like ? "../public/img/fullheart.png" : "../public/img/emptyheart.png"} alt="like" className="like--button" title="Like"/>
        
        {like && <span className="like--text animate-bounce">Thanks for Liking! </span> }
        </div>
          <span className="postcard--author">by {author}</span>       
      </div>
        
      <hr className="font-bold" />
    </div>
  );
};

import PropTypes from "prop-types";

PostCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  publishedDate: PropTypes.string.isRequired,
  readingTime: PropTypes.number.isRequired,
};

export default PostCard;
