import Header from "../components/Header";
import Footer from "../components/Footer";
import PostCard from "../components/PostCard";
import blogsData from "../assets/blogsData.json";

const Blogs = () => {
  return (
    <>
      <Header />
      <div className="bg-black text-white w-full p-6">
        <h1 className="animate-pulse  flex justify-center text-center text-white font-bold text-6xl m-5">
          Blog Page
        </h1>
      </div>
      <div className="mt-6 bg-white py-4 px-4 border-solid relative">
        {blogsData.map((blog) => (
          <PostCard
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
      </div>
      <Footer />
    </>
  );
};

export default Blogs;
