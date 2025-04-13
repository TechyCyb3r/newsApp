import React, { Component } from 'react';
import { FaUsers, FaFlag, FaHistory, FaRocket } from 'react-icons/fa';

export class About extends Component {
    render() {
        return (
            <>
                <div className="about-container" style={{ marginTop: "50px", padding: "20px" }}>
                    <h1 className="heading">About MyNewsApp</h1>

                    {/* Story */}
                    <section className="section story">
                        <div className="section-heading">
                            <FaFlag className="icon" /> <strong>Our Story</strong>
                        </div>
                        <p className="section-content" style={{marginLeft: "22px"}}>
                            The idea of <strong>MyNewsApp</strong> was born out of a personal frustration with biased news and cluttered interfaces. During a casual coffee chat in 2023, our founder, a passionate techie and media enthusiast, questioned, "Why is it so hard to find trustworthy, well-organized news?" That moment sparked a vision: to build a platform that combines clarity, speed, and truth — all in one place.
                            <br /><br />
                            Our mission began not just with a product idea, but a purpose — to provide accurate, concise, and unbiased news to the masses. That’s the story behind MyNewsApp — simple beginnings, powerful intentions.
                        </p>
                    </section>

                    {/* Founding Team */}
                    <section className="section team">
                        <div className="section-heading">
                            <FaUsers className="icon" /> <strong>Who We Are</strong>
                        </div>
                        <p className="section-content" style={{marginLeft: "22px"}}>
                            <strong>Himanshu Agarwal</strong>, our founder, comes from a background in Computer Applications and journalism ethics. With a deep understanding of technology and a passion for honest media, Himanshu brings leadership and innovation to the digital news space.
                            <br /><br />
                            Supported by a small team of developers, editors, and designers, we work collectively to bring a modern, trusted news experience to our users. Every line of code and every headline reflects our values.
                        </p>
                    </section>

                    {/* Evolution */}
                    <section className="section journey">
                        <div className="section-heading">
                            <FaHistory className="icon" /> <strong>Our Journey</strong>
                        </div>
                        <p className="section-content" style={{marginLeft: "22px"}}>
                            From the initial version with just headline cards and local feeds, MyNewsApp has come a long way.
                            <br /><br />
                            We faced technical challenges, content verification hurdles, and user experience redesigns. But with each obstacle, we improved: introducing real-time alerts, dark mode, regional filters, and integrating expert opinions into articles.
                            <br /><br />
                            Today, MyNewsApp is growing fast with thousands of daily users relying on our platform for meaningful news that matters.
                        </p>
                    </section>

                    {/* Mission & Vision */}
                    <section className="section mission">
                        <div className="section-heading">
                            <FaRocket className="icon" /> <strong>Our Mission & Vision</strong>
                        </div>
                        <p className="section-content" style={{marginLeft: "22px"}}>
                            Our mission is simple: <strong>Deliver trustworthy news, fast</strong>. In a world of clickbait and misinformation, we aim to be the platform people turn to for truth.
                        </p>
                        <p className="section-content" style={{marginLeft: "22px"}}>
                            Our vision is to become India’s most reliable digital news app — empowering readers, connecting communities, and raising the standard of journalism through technology and transparency. We're building tools for responsible media consumption — and we’re just getting started.
                        </p>
                    </section>

                    <p className="thank-you">
                        Thank you for being a part of our journey. <br />
                        <span className="highlight">Together, let’s redefine how news is delivered and experienced.</span>
                    </p>
                </div>
            </>
        );
    }
}

export default About;
