import './experience.css';

const experiences = [
    {
        role: 'Software Engineering & Architecture',
        tasks: [
            'Design and development of well-structured software systems with a strong focus on clean architecture and code organization.',
            'Application of modular design principles to build scalable, maintainable, and easy-to-evolve systems.',
            'Implementation of backend and frontend logic with attention to long-term sustainability and technical quality.',
        ],
    },
    {
        role: 'Frontend Development, UI & UX',
        tasks: [
            'Development of responsive and accessible user interfaces focused on clarity, usability, and user experience.',
            'Collaboration between design and engineering principles to translate ideas into intuitive digital interfaces.',
            'Attention to visual hierarchy, interaction feedback, and consistency across the user journey.',
        ],
    },
    {
        role: 'Security, Scalability & Product Thinking',
        tasks: [
            'Implementation of authentication flows and security-conscious features aligned with best practices.',
            'Design of solutions that consider performance, scalability, and real-world usage scenarios.',
            'Strong product-oriented mindset, aligning technical decisions with business goals and user needs.',
        ],
    },
];

function Experience() {
    return (
        <section className="experience" id="experience">
            <h2>Applied Software Engineering</h2>

            <div className="timeline">
                {experiences.map((exp, index) => (
                    <div className="timeline-item" key={index}>
                        <div className="timeline-left">
                            <span className="dot" />
                        </div>

                        <div className="timeline-right">
                            <h3>{exp.role}</h3>
                            <ul>
                                {exp.tasks.map((task, i) => (
                                    <li key={i}>{task}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Experience;
