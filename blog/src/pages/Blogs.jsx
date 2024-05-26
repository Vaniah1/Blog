import Header from "../components/Header";
import Footer from "../components/Footer";
import BlogCard from "../components/BlogCard.jsx";
import blogsData from "/Users/HP/Bloggy/Blog-1/blog/src/pages/Blogs.jsx";

const Blogs = () => {
  return (
    <>
      <Header />
       <div className="bg-black text-white w-full p-6">
        <h1  className="animate-pulse  flex justify-center text-center text-white font-bold text-6xl m-5">Blog Page</h1>
       </div>
      <Footer />
    </>
  );
};

export default Blogs;
