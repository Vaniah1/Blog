import "../blog.css";

const PostCard = ({
  image,
  title,
  category,
  content,
  publishedDate,
  readingTime,
}) => {
  return (
    <div className=" mt-6 w-64 py-4 px-4  relative flex-col flex">
      <img
        src={image}
        alt={title}
        width={"900px"}
        height={"300px"}
        className="rounded border-blue-600 border-6 "
      />
      <div className="rounded mt-6 bg-none py-4 relative overflow-hidden flex-auto border-solid text-sm">
        <div className="rounded mt-6 bg-none py-4 overflow-hidden flex-col border-solid text-sm align-middle">
          <span className="font-bold">{title}</span>

          <div className="flex flex-wrap">
            <div className="flex flex-col">
              <img src="blog\public\vite.svg"></img>
              <span className="mr-2">{content}</span>
              <span className="mr-2">{publishedDate}</span>
              <span>{readingTime} min read</span>
              <span className="mr-2 font-bold">({category})</span>
            </div>
          </div>
        </div>
      </div>
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
