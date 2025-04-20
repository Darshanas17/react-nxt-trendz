import { Link } from "react-router-dom";
import "./index.css";

const UnderDevelopment = () => {
  return (
    <div className="under-development-container">
      <img
        src="https://img.freepik.com/free-vector/development-concept-illustration_114360-4458.jpg?t=st=1745152590~exp=1745156190~hmac=c0b8d39d63f2ca4a5f470a96125b96d1e3136db39fc7d76c35936f9635323ab9&w=1380"
        alt="under development"
        className="under-development-image"
      />
      <h1 className="under-development-heading">Page Under Development</h1>
      <p className="under-development-description">
        We're working hard to bring this feature to you soon.
      </p>
      <Link to="/">
        <button className="go-home-button">Go Back Home</button>
      </Link>

      {/* Contact Section */}
      <div className="contact-section">
        <h2 className="contact-heading">Contact Me</h2>
        <p className="contact-description">Feel free to reach out to me via:</p>
        <ul className="contact-list">
          <li>
            <strong>Email:</strong>{" "}
            <a href="mailto:darshanasatruval@gmail.com">
              darshanasatruval@gmail.com
            </a>
          </li>
          <li>
            <strong>LinkedIn:</strong>{" "}
            <a
              href="https://www.linkedin.com/in/darshan-a-s/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Darshan A S
            </a>
          </li>
          <li>
            <strong>Portfolio:</strong>{" "}
            <a
              href="https://darshanas17.github.io/darshan-as-17-portfolio/"
              target="_blank"
              rel="noopener noreferrer"
            >
              My Portfolio
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UnderDevelopment;
