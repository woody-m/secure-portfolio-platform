import './projects.css';

function Projects() {
    return (
        <section className="projects" id="projects">
            <h2>Projects</h2>

            <div className="projects-grid">
                <ProjectCard
                    title="E-commerce Platform"
                    stack="React, Node.js, MongoDB"
                />
                <ProjectCard
                    title="E-momone Platform"
                    stack="React, Node.js, MongoDB"
                />
                <ProjectCard
                    title="E-commerce Platform"
                    stack="React, Node.js, MongoDB"
                />
                <ProjectCard
                    title="Project Platform"
                    stack="React, Node.js, MongoDB"
                />
            </div>
        </section>
    );
}

function ProjectCard({ title, stack }) {
    return (
        <div className="project-card">
            <div className="project-image">
                <span>Image</span>
            </div>

            <div className="project-content">
                <h3>{title}</h3>
                <p>{stack}</p>
                <a>VIEW CASE STUDY</a>
            </div>
        </div>
    );
}

export default Projects;
