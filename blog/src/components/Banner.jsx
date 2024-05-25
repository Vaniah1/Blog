import { Link } from "react-router-dom";
import { TfiWrite } from "react-icons/tfi";

export default function Banner() {
  return (
    <div className="bg-black text-white w-full p-6 ">
      <h1 className="animate-pulse  flex justify-center text-center text-white font-bold text-6xl ">
        Welcome to Bloggy
      </h1>
      <h2 className="  text-white flex justify-center font-bold text-center m-5">
        Your go-to destination for insightful articles, engaging stories, and
        thought-provoking discussions. Bloggy is for everyone.
      </h2>
      <div>
        <Link
          to="/editor"
          className="text-center flex justify-center font-small hover:text-white text-blue-600"
        >
          Create Blog <TfiWrite />
        </Link>
      </div>
    </div>
  );
}
