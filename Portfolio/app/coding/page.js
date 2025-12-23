/*Mahika Bagri*/
/*December 23 2025*/

import Link from "next/link";
import Image from "next/image";

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "Project",
      description: "Description.",
      image: ""
    },
    {
      id: 2,
      title: "Project",
      description: "Description.",
      image: ""
    },
    {
      id: 3,
      title: "Project",
      description: "Description.",
      image: ""
    },
    {
      id: 4,
      title: "Project",
      description: "Description.",
      image: ""
    }
  ];

  return (
    <div className="projects-container">
      <h2>Title</h2>
      
      <div className="project-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="card-header">
              <span>
                <img
                  src={project.image}
                />
              </span>
            </div>
            
            <div className="card-body">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              
              <div className="card-links">
                <Link href="#" className="btn btn-primary">
                  View Live
                </Link>
                <Link href="#" className="btn btn-outline">
                  GitHub
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
