import Header from "../components/Header";
import Footer from "../components/Footer";
import BlogCard from "../components/BlogCard.jsx";
import blogsData from "/Users/DirectEd Student/Blog/blog/blog-editor-backend/blogsData.json";

const Blogs = () => {
  return (
    <>
      <Header />
      {blogsData.map((blog) => (
        <BlogCard
          key={blog.id}
          image={blog.image}
          title={blog.title}
          content={blog.content}
          category={blog.category}
          author={blog.author}
          publishedDate={blog.published_date}
          readingTime={blog.reading_time}
        />
      ))}

      <Footer />
    </>
  );
};

export default Blogs;
