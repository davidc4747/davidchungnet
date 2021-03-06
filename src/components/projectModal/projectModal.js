import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './projectModal.css';

import ImageCarousel from '../imageCarousel/imageCarousel';

class ProjectModal extends Component {
    render() {
        let { project, isOpen, closeModal } = this.props;
        return (
            <section
                className={`project-modal ${
                    isOpen ? 'project-modal--shown' : 'project-modal--hidden'
                }`}
            >
                <div className="project-modal__overlay" onClick={closeModal} />
                <div className="project-modal__content">
                    <h1 className="project-modal__header">
                        {project.name}
                        <i
                            className="project-modal__close icon fa fa-times"
                            onClick={closeModal}
                        />
                    </h1>
                    <div className="project-modal__carousel">
                        <ImageCarousel images={project.imgs ? project.imgs : []} />
                    </div>
                    <div className="project-modal__body">
                        <span className="highlight">Description: </span>
                        {project.description}
                        <section className="v-center">
                            <span className="highlight">Skills:</span>
                            <ul className="tag-list list-unstyled">
                                {project.skills &&
                                    project.skills.map((skill, index) => (
                                        <li className="tag" key={index}>
                                            {skill}
                                        </li>
                                    ))}
                            </ul>
                        </section>

                        <section className="v-center">
                            <span className="highlight">Software:</span>
                            <ul className="tag-list list-unstyled">
                                {project.software &&
                                    project.software.map((soft, index) => (
                                        <li className="tag" key={index}>
                                            {soft}
                                        </li>
                                    ))}
                            </ul>
                        </section>

                        {/* External Links */}
                        {project.github && (
                            <a
                                target="_blank"
                                rel="nofollow"
                                href={project.github}
                                className="project-modal__link"
                            >
                                <i className="fab fa-github" />
                            </a>
                        )}
                        {project.codepen && (
                            <a
                                target="_blank"
                                rel="nofollow"
                                href={project.codepen}
                                className="project-modal__link"
                            >
                                <i className="fab fa-codepen" />
                            </a>
                        )}
                        {project.youtube && (
                            <a
                                target="_blank"
                                rel="nofollow"
                                href={project.youtube}
                                className="project-modal__link"
                            >
                                <i className="fab fa-youtube" />
                            </a>
                        )}
                    </div>
                </div>
            </section>
        );
    }
}

export default ProjectModal;
