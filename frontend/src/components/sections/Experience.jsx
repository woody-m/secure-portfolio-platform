import './experience.css';

const experiences = [
    {
        period: '2023 - Present',
        role: 'Software Engineer',
        company: 'Company Name',
        tasks: [
            'Responsibilities to stimulate sequential cross-collaboration.',
            'Responsibilities to enhance blockchain and backend processes.',
            'Responsibilities to improve operational scalability.',
        ],
    },
    {
        period: '2020 - 2023',
        role: 'Software Engineer',
        company: 'Company Name',
        tasks: [
            'Responsibilities to implement workflows and core modules.',
            'Responsibilities to maintain security and privacy layers.',
            'Responsibilities to collaborate across teams.',
        ],
    },
    {
        period: '2018 - 2020',
        role: 'Software Engineer',
        company: 'Company Name',
        tasks: [
            'Responsibilities to analyze system architecture.',
            'Responsibilities to improve performance and maintainability.',
        ],
    },
];

function Experience() {
    return (
        <section className="experience" id="experience">
            <h2>Experience</h2>

            <div className="timeline">
                {experiences.map((exp, index) => (
                    <div className="timeline-item" key={index}>
                        <div className="timeline-left">
                            <span className="period">{exp.period}</span>
                            <span className="dot" />
                        </div>

                        <div className="timeline-right">
                            <h3>
                                {exp.company} – <span>{exp.role}</span>
                            </h3>
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
