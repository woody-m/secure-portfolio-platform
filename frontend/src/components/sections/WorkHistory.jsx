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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Morbi eget ligula at lectus.
                </p>
                <button className="read-more">Read More</button>
            </div>

            <div className="work-right">
                <div className="work-card">
                    <span className="period">2015 - 2017</span>
                    <h3>UI/UX Designer</h3>
                    <h4>Company Name</h4>
                    <p>
                        Cras accumsan lacus pulvinar. Tincidunt, semper arcu non,
                        consequat arcu.
                    </p>
                    <a>Read More →</a>
                </div>

                <div className="work-card">
                    <span className="period">2017 - 2019</span>
                    <h3>UI/UX Designer</h3>
                    <h4>Company Name</h4>
                    <p>
                        Cras accumsan lacus pulvinar. Tincidunt, semper arcu non,
                        consequat arcu.
                    </p>
                    <a>Read More →</a>
                </div>
            </div>
        </section>
    );
}

export default WorkHistory;
