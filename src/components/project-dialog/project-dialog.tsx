import {
    component$,
    useTask$,
    useSignal,
    type QRL,
    type DOMAttributes,
} from "@builder.io/qwik";
import styles from "./project-dialog.module.css";
import { type Project } from "../portfolio/portfolio";
import ImageCarousel from "../image-carousel/image-carousel";
import TagList from "../tag-list/tag-list";

/* ======================== *\
    # Project Dialog
\* ======================== */

interface ProjectDialogProps {
    project?: Project | null;
    onClose$?: QRL<(e: Event) => void>;
}
export default component$<ProjectDialogProps>(({ project, onClose$ }) => {
    const dialog = useSignal<HTMLDialogElement>();
    useTask$(({ track }) => {
        track(() => project);

        if (project) dialog.value?.showModal();
        else dialog.value?.close();
    });

    return (
        <dialog
            ref={dialog}
            class={styles.projectDialog}
            onClick$={(e) => {
                if (e.target === dialog.value) {
                    dialog.value.close();
                }
            }}
            onClose$={onClose$}
        >
            <section class={styles.header}>
                <h3>{project?.name}</h3>
                <button
                    onClick$={() => dialog.value?.close()}
                    aria-label="close dialog"
                >
                    <i class="icon fa fa-times" />
                </button>
            </section>

            <ImageCarousel images={project?.imgs ?? []} />

            <section class={styles.body}>
                {project?.description && (
                    <p>
                        <span class="highlight">Description: </span>
                        {project.description}
                    </p>
                )}

                <TagList title="Skills:" tags={project?.skills ?? []} />
                <TagList title="Software:" tags={project?.software ?? []} />

                {/* External Links */}
                <SocialLink
                    icon="github"
                    href={project?.github}
                    projectName={project?.name}
                    class={styles.link}
                />
                <SocialLink
                    icon="codepen"
                    href={project?.codepen}
                    projectName={project?.name}
                    class={styles.link}
                />
                {/* <SocialLink
                    icon="youtube"
                    href={project?.youtube}
                    class={styles.link}
                /> */}
            </section>
        </dialog>
    );
});

/* ======================== *\
    #Social Links 
\* ======================== */

type SocialLinkProps = {
    icon: "github" | "youtube" | "codepen";
    projectName?: string;
    href?: string;
    class?: DOMAttributes<HTMLAnchorElement>["class"];
};
export const SocialLink = component$<SocialLinkProps>(
    ({ icon, href, projectName, ...props }) => {
        return (
            href && (
                <a
                    target="_blank"
                    rel="nofollow"
                    href={href}
                    class={props.class}
                    aria-label={`${projectName ?? "project"}'s ${icon}`}
                >
                    <i class={`fab fa-${icon}`} />
                </a>
            )
        );
    }
);
