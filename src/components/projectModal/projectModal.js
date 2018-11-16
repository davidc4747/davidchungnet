import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './projectModal.css';

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
                    <h1 className="project-modal__header">{project.name}</h1>
                    <ul className="project-modal__carousel">
                        <li>
                            <img src="#" alt="" />
                        </li>
                    </ul>
                    <div className="project-modal__body">.</div>
                </div>
            </section>
        );
    }
}

export default ProjectModal;
