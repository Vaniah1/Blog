import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import BlogCard from "../components/BlogCard";
import blogsData from "../assets/blogsData.json";


const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <div className="mt-6 bg-white py-4 px-4 border-solid relative">
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
      </div>

      <BlogCard />
      <Footer />
    </>
  );
};

export default Home;
