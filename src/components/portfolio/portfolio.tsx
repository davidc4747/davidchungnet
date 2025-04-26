import { component$, useSignal } from "@builder.io/qwik";
import projects from "./portfolio.json";
import styles from "./portfolio.module.css";
import ProjectDialog from "../project-dialog/project-dialog";

export type Project = (typeof projects)[number];

export default component$(() => {
    const modalProject = useSignal<Project | null>();

    return (
        <>
            <ul class={[styles.projectList, "page-container"]}>
                {projects
                    .filter((p) => p.display)
                    .map((project, index) => (
                        <li class={styles.project} key={index}>
                            <h2>{project.name}</h2>
                            <img
                                class={styles.thumbnail}
                                src={project.thumbnail ?? project.imgs[0]}
                                alt={`${project.name} logo`}
                                width={420}
                                height={300}
                                draggable={false}
                            />
                            <button
                                class={styles.link}
                                onClick$={() => (modalProject.value = project)}
                            >
                                More &gt;&gt;
                            </button>
                        </li>
                    ))}
            </ul>

            <ProjectDialog
                project={modalProject.value}
                onClose$={() => (modalProject.value = null)}
            />
        </>
    );
});
