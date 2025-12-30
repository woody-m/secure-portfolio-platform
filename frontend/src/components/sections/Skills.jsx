import './skills.css';

const skills = [
    { name: 'JavaScript', icon: '/src/assets/skills/js.svg', size: 70, top: '20%', duration: 18 },
    { name: 'React', icon: '/src/assets/skills/react.svg', size: 80, top: '40%', duration: 22 },
    { name: 'Node', icon: '/src/assets/skills/node.svg', size: 75, top: '60%', duration: 20 },
    { name: 'Python', icon: '/src/assets/skills/python.svg', size: 85, top: '30%', duration: 26 },
    { name: 'GitHub', icon: '/src/assets/skills/github.svg', size: 70, top: '55%', duration: 24 },
    { name: 'CSS', icon: '/src/assets/skills/css.svg', size: 65, top: '45%', duration: 19 },
];

function Skills() {
    return (
        <section className="skills-section" id="skills">
            <h2>Skills</h2>

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
