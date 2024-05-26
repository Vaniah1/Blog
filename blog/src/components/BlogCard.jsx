import "../blog.css"

const BlogCard = ({
  image,
  title,
  content,
  category,
  author,
  publishedDate,
  readingTime,
}) => {
  return (
    <>
      <div className="blog-card grid">
        <img src={image} alt={title} width={"300px"} />
      </div>
      <h2 className="font-bold">{title}</h2>
      <p className="max-w-10">{content}</p>
      <div className="blog-meta">
        <div>{category}</div>
        <div>{author}</div>
        <div>{publishedDate}</div>
        <div className="min-read">{readingTime} min </div>
      </div>
    </>
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
