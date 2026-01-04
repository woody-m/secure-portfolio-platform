import './workHistory.css';

function WorkHistory() {
    return (
        <section className="work-history" id="experience">
            <div className="work-left">
                <h2>
                    Work <br />
                    <span>History</span>
                </h2>
                <p>
                    My professional experience spans software engineering and product development. I currently focus on building well-structured, secure, and scalable software, supported by a strong background in user experience, data analysis, and digital products.
                </p>
                <button className="read-more">Read More</button>
            </div>

            <div className="work-right">
                <div className="work-card">
                    <span className="period">2022 – Present</span>
                    <h3>Software Engineer (Applied Projects & Product Development)</h3>
                    <h4>Academic & Independent Projects · Remote</h4>
                    <p>
                        Design and development of software solutions with a strong focus on architecture, code organization, and security best practices.
                        Worked on frontend and backend projects, applying clean architecture principles, authentication flows, and scalable system design.
                    </p>
                </div>

                <div className="work-card">
                    <span className="period">2022 – 2024</span>
                    <h3>Digital Solutions Specialist (Paid Traffic & Web Design)</h3>
                    <h4>Freelance · Remote</h4>
                    <p>
                        Worked with paid traffic management and web design, planning and optimizing digital campaigns and interfaces with a strong focus on conversion and user experience.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default WorkHistory;
