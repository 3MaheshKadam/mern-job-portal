import React from "react";

const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-2xl mx-auto p-3 text-center">
        <div>
          <h1 className="text-3xl font font-semibold text-center my-7">
            About Cogitix Job Portal Replica
          </h1>
          <div className="text-md flex flex-col gap-6">
            <p>
              Welcome to the Cogitix Job Portal Replica, developed by Mahesh
              Shrikrishna Kadam. This project is a sample job portal built for
              educational purposes, where I apply my skills in web development,
              particularly using the MERN stack (MongoDB, Express.js, React.js,
              and Node.js).
            </p>
            <p>
              This project demonstrates my ability to build robust, scalable web
              applications. The job portal simulates core features such as job
              listings, applicant tracking, and user management, providing
              insight into how a real-world job portal would function.
            </p>
            <p>
              I'm currently pursuing my final year in Computer Engineering and
              constantly seeking opportunities to enhance my expertise in
              full-stack development. In addition to the MERN stack, I have
              explored cloud computing with AWS, which I integrate into various
              projects to ensure scalability and performance.
            </p>
            <p>
              This project serves as a hands-on learning experience, showcasing
              my commitment to continuous learning and development in the field
              of software engineering. I look forward to leveraging these skills
              in real-world projects and collaborating on innovative solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
