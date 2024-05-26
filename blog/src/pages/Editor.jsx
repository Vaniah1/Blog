import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Editor = () => {
  const [formData, setFormData] = useState({
    title: "",
    image: "",
    category: "",
    author: "",
    authorPic: "",
    published_date: "",
    reading_time: "",
    content: "",
    tags: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const blogData = {
      id: Date.now(),
      title: formData.title,
      image: formData.image,
      category: formData.category,
      author: formData.author,
      authorPic: formData.authorPic,
      published_date: formData.published_date,
      reading_time: formData.reading_time,
      content: formData.content,
      tags: formData.tags.split(","),
    };

    fetch("http://localhost:5000/api/blogs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blogData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setFormData({
          title: "",
          image: "",
          category: "",
          author: "",
          authorPic: "",
          published_date: "",
          reading_time: "",
          content: "",
          tags: "",
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <Header />
      <div className="editor-container">
        <div className="bg-black text-white w-full p-6 ">
          <h1 className="animate-pulse  flex justify-center text-center text-white font-bold text-6xl m-5">
            Editor Page
          </h1>
        </div>
        <form
          onSubmit={handleSubmit}
          className="editor-form grid grid-cols-2 gap-4 m-5"
        >
          <div className="form-group">
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              name="title"
              id="title"
              value={formData.title}
              onChange={handleChange}
              className="border border-gray-400 rounded-md px-2 py-1 block"
            />
          </div>
          <div className="form-group">
            <label htmlFor="image">Image URL:</label>
            <input
              type="text"
              name="image"
              id="image"
              value={formData.image}
              onChange={handleChange}
              className="border border-gray-400 rounded-md px-2 py-1 block"
            />
          </div>
          <div className="form-group">
            <label htmlFor="category">Category:</label>
            <input
              type="text"
              name="category"
              id="category"
              value={formData.category}
              onChange={handleChange}
              className="border border-gray-400 rounded-md px-2 py-1 block"
            />
          </div>
          <div className="form-group">
            <label htmlFor="author">Author:</label>
            <input
              type="text"
              name="author"
              id="author"
              value={formData.author}
              onChange={handleChange}
              className="border border-gray-400 rounded-md px-2 py-1 block"
            />
          </div>
          <div className="form-group">
            <label htmlFor="authorPic">Author Picture URL:</label>
            <input
              type="text"
              name="authorPic"
              id="authorPic"
              value={formData.authorPic}
              onChange={handleChange}
              className="border border-gray-400 rounded-md px-2 py-1 block"
            />
          </div>
          <div className="form-group">
            <label htmlFor="published_date">Published Date:</label>
            <input
              type="text"
              name="published_date"
              id="published_date"
              value={formData.published_date}
              onChange={handleChange}
              className="border border-gray-400 rounded-md px-2 py-1 block"
            />
          </div>
          <div className="form-group">
            <label htmlFor="reading_time">Reading Time:</label>
            <input
              type="text"
              name="reading_time"
              id="reading_time"
              value={formData.reading_time}
              onChange={handleChange}
              className="border border-gray-400 rounded-md px-2 py-1 block"
            />
          </div>
          <div className="form-group col-span-2">
            <label htmlFor="content">Content:</label>
            <textarea
              name="content"
              id="content"
              value={formData.content}
              onChange={handleChange}
              className="border border-gray-400 rounded-md px-2 py-1 block"
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="tags">Tags:</label>
            <input
              type="text"
              name="tags"
              id="tags"
              value={formData.tags}
              onChange={handleChange}
              className="border border-gray-400 rounded-md px-2 py-1 block"
            />
          </div>
          <button
            type="submit"
            className="submit-btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded block"
          >
            Save
          </button>
        </form>
      </div>

      <Footer />
    </>
  );
};

export default Editor;
