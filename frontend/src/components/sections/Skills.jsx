import './skills.css';

const skills = [
    { name: 'JavaScript', icon: '/src/assets/skills/javascript.svg', size: 140, top: '15%', duration: 34 },
    { name: 'React', icon: '/src/assets/skills/react.svg', size: 100, top: '35%', duration: 30 },
    { name: 'Node', icon: '/src/assets/skills/node.svg', size: 80, top: '70%', duration: 22 },
    { name: 'Python', icon: '/src/assets/skills/python.svg', size: 95, top: '55%', duration: 26 },
    { name: 'GitHub', icon: '/src/assets/skills/github.svg', size: 60, top: '65%', duration: 18 },
    { name: 'CSS', icon: '/src/assets/skills/css.svg', size: 65, top: '45%', duration: 24 },
    { name: 'HTML', icon: '/src/assets/skills/html.svg', size: 100, top: '35%', duration: 21 },
    { name: 'Vite', icon: '/src/assets/skills/vite.svg', size: 65, top: '45%', duration: 20 },
];

function Skills() {
    return (
        <section className="skills-section" id="skills">
            <h2 className="skills-title">
                Technical <span>Skills</span>
            </h2>


            <div className="skills-area">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="skill-bubble"
                        style={{
                            top: skill.top,
                            width: skill.size,
                            height: skill.size,
                            animationDuration: `${skill.duration}s`,
                        }}
                    >
                        <img src={skill.icon} alt={skill.name} />
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Skills;
