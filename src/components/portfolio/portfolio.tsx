import { component$, type QRL } from "@builder.io/qwik";
import projects from "./portfolio.json";
import styles from "./portfolio.module.css";

interface ChildProps {
    onOpenProject$: QRL<(project: (typeof projects)[number]) => void>;
}
export default component$<ChildProps>(({ onOpenProject$ }) => {
    return (
        <ul class={[styles.projectList, "page-container"]}>
            {projects.map((project, index) => (
                <li
                    class={styles.project}
                    key={index}
                    onClick$={() => onOpenProject$(project)}
                >
                    <h2 class={styles.title}>{project.name}</h2>
                    <p>
                        <img
                            class={[styles.thumbnail, "full-width"]}
                            src={project.thumbnail}
                            alt={`${project.name} logo`}
                            width={100}
                            height={100}
                            draggable={false}
                        />
                    </p>
                    <button
                        class={styles.link}
                        onClick$={() => onOpenProject$(project)}
                    >
                        More &gt;&gt;
                    </button>
                </li>
            ))}
        </ul>
    );
});
