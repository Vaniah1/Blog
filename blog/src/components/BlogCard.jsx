import "../blog.css";
import { Link } from "react-router-dom";

const BlogCard = ({
  image,
  title,
  category,
  author,
  publishedDate,
  readingTime,
}) => {
  return (
    <div className=" mt-6 w-64 py-4 px-4  relative flex-col flex">
      <Link to={`/blogs`}>
        <img
          src={image}
          alt={title}
          width={"300px"}
          height={"300px"}
          className="rounded border-blue-600 border-6"
        />
      </Link>
      <div className="rounded mt-6 bg-none py-4 relative overflow-hidden flex-auto border-solid text-sm">
        <div className="rounded mt-6 bg-none py-4 overflow-hidden flex-col border-solid text-sm align-middle">
          <span className="font-bold break-words">{title}</span>

          <div className="flex flex-wrap">
            <div className="flex flex-col">
              <span className="mr-2">{author}</span>
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

BlogCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  publishedDate: PropTypes.string.isRequired,
  readingTime: PropTypes.number.isRequired,
};

export default BlogCard;
