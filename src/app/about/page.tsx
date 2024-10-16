import Navbar from "@/app/Navbar";

const About = () => {
  return (
    <>
      <Navbar /> {/* Place the Navbar at the top */}
      <div className="Data">
        <h1 className="Title">About Us</h1>
        <p className="About">This page contains information about us.</p>
      </div>
    </>
  );
};

export default About;
