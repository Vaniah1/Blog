import Header from "../components/Header";
import Footer from "../components/Footer";
import "../Home.css";

const Contact = () => {
  return (
    <>
      <Header />

      <div className="bg-black text-white w-full p-6 banner">
        <h1  className="  flex justify-center text-center text-white font-bold text-6xl m-5">Contact Page</h1>
      </div>
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full border border-gray-400 p-2 rounded"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full border border-gray-400 p-2 rounded"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block font-bold mb-2">
              Message
            </label>
            <textarea
              id="message"
              className="w-full border border-gray-400 p-2 rounded"
              rows="4"
              placeholder="Enter your message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        </form>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
