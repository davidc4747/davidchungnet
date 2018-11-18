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
                        <ImageCarousel images={project.imgs || []} />
                    </div>
                    {/* <div className="project-modal__body">.</div> */}
                </div>
            </section>
        );
    }
}

export default ProjectModal;
