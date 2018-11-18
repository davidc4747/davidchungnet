import React, { Component } from 'react';
// import Link from 'gatsby-link'
import './index.css';

import Workexp from '../components/workexp/workexp.js';
import Education from '../components/education/education.js';
// import NavBar from '../components/navbar/navbar.js'
import Header from '../components/header/header.js';
import Footer from '../components/footer/footer.js';
import ProjectModal from '../components/projectModal/projectModal.js';

class Home extends Component {
    state = {
        modalProject: {},
        modalIsOpen: false
    };

    closeModal = () => {
        this.setState({
            modalIsOpen: false,
            modalProject: {}
        });
    };

    openModal = projectData => {
        this.setState({
            modalIsOpen: true,
            modalProject: projectData
        });
    };

    render() {
        let { data } = this.props;
        return (
            <section className="home">
                <ProjectModal
                    isOpen={this.state.modalIsOpen}
                    project={this.state.modalProject}
                    closeModal={this.closeModal}
                />
                {/* <NavBar /> */}
                <Header />

                {/* Work Experience */}
                <h1 className="home__header">
                    <i className="icon fa fa-briefcase" />Work Experience
                </h1>
                <Workexp />

                {/* Projects */}
                <h1 className="home__header">
                    <i className="icon fa fa-code" />Projects
                </h1>
                <ul className="list-unstyled page-container home__project-list">
                    {data.allProjectsJson.edges.map(({ node: project }, index) => (
                        <li
                            className="home__project"
                            key={index}
                            onClick={this.openModal.bind(this, project)}
                        >
                            <h2 className="home__project__title">{project.name}</h2>
                            <p className="home__project__body">
                                <img
                                    className="full-width home__project__thumbnail"
                                    src={project.thumbnail}
                                    alt={`${project.name} logo`}
                                />
                            </p>
                            <button
                                className="home__project__link"
                                onClick={this.openModal.bind(this, project)}
                            >
                                Learn More >>
                            </button>
                        </li>
                    ))}
                </ul>

                {/* Education */}
                <h1 className="home__header">
                    <i className="icon fa fa-book" />Education
                </h1>
                <Education schools={data.allEduJson.edges} />

                {/* Download Button */}
                <section className="resume__btn-holder">
                    <a
                        className="btn btn--primary resume__download"
                        href="/David-Chung.pdf"
                        target="_blank"
                    >
                        Download Resume
                    </a>
                </section>

                {/* FAQ  */}
                <h1 className="home__header">
                    <i className="icon fa fa-compass" />FAQs
                </h1>
                <ul className="list-unstyled page-container">
                    {data.allFaqJson.edges.map(({ node: faq }, index) => (
                        <li className="card" key={index}>
                            <h2 className="card__title">{faq.question}</h2>
                            <p
                                className="card__body"
                                dangerouslySetInnerHTML={{ __html: faq.answer }}
                            />
                        </li>
                    ))}
                </ul>

                <Footer />
            </section>
        );
    }
}

export default Home;

export const query = graphql`
    query homeQuery {
        allProjectsJson {
            edges {
                node {
                    name
                    type
                    thumbnail
                    imgs
                    dateStart
                    dateEnd
                    skills
                    software
                    description
                    details
                }
            }
        }
        allWorkexpJson {
            edges {
                node {
                    company
                    title
                }
            }
        }
        allEduJson {
            edges {
                node {
                    logo
                    name
                    url
                    skills
                }
            }
        }
        allFaqJson {
            edges {
                node {
                    question
                    answer
                }
            }
        }
    }
`;
