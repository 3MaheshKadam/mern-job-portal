import React, { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import mlImage from "../assets/ml.png"; // Import the image
import { Link } from "react-router-dom";
import PostCard from "../Components/PostCard";

const Home = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const res = await fetch("/api/post/getPosts"); // Fetch jobs from API
      const data = await res.json();
      setJobs(data.jobs);
    };
    fetchJobs();
  }, []);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 max-w-[1200px] md:h-[70vh] mx-auto py-8">
        <div className="col-span-1 my-auto mx-auto w-[200px] h-auto lg:w-[300px]">
          <img src={mlImage} alt="hero image" />
        </div>
        <div className="col-span-2 px-5 my-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-dosis">
            {/* {" "}
            bg-gradient-to-r from-orange-400 to-pink-600 */}
            <span className="text-transparent bg-clip-text bg-orange-400 inline-block">
              Welcome to Cogitix
            </span>{" "}
            <br />
            <TypeAnimation
              sequence={[
                "Your Career Starts Here!",
                1000,
                "Find Your Dream Job!",
                1000,
                "Join Our Talent Pool!",
              ]}
              wrapper="span"
              speed={300}
              repeat={Infinity}
              className="font-catamaran"
            />
          </h1>
          <p className="sm:text-lg my-6 lg:text-xl font-dosis">
            Explore job opportunities at Cogitix. We offer roles for Frontend
            Developers, Backend Engineers, Cloud Experts, and more!
          </p>
          <div className="links flex">
            <div className="my-8">
              <a
                href="/search"
                className="px-6 py-3 w-full rounded-xl mr-4 bg-white text-violet-600 border-2 border-violet-600 transition-colors duration-300 hover:bg-violet-600 hover:text-white"
              >
                Apply Now
              </a>
            </div>
            <div className="my-8">
              <a
                href="https://cogitix.in/contact.html"
                className="px-6 py-3 w-full rounded-xl mr-4 bg-violet-500 text-white transition-colors duration-300 hover:bg-white hover:text-violet-500 border-2 border-violet-500"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold lg:text-6xl font-dosis">
            Explore Job Vacancies
          </h1>
          <p className=" text-base sm:text-lg font-catamaran">
            Discover a wide range of job opportunities at Cogitix across
            multiple industries. Whether you're a skilled Software Developer, an
            experienced Engineer, or a Cloud Computing expert, we have the
            perfect role for you. At Cogitix, we believe in fostering growth and
            providing meaningful career paths that allow you to reach your full
            potential. Join us and be a part of a forward-thinking team that
            shapes the future of technology.
          </p>
          <Link
            to="/search"
            className="text-xs sm:text-sm text-teal-500 font-bold hover:underline font-catamaran"
          >
            View all job vacancies
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
