import Header from "./Header";

export default function ProjectsPage() {
  return (
    <div className="projects-page">
      <Header />
      <div className="project-container">
        {" "}
        <h2>Project 1 Name</h2>
        <p>Image of Project here</p>
        <div className="code-links">
          {" "}
          <p>Code</p>
          <p>Live</p>
        </div>
      </div>
    </div>
  );
}
