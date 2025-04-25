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
            <h1 class={styles.header}>
                {project?.name}
                <button
                    onClick$={() => dialog.value?.close()}
                    aria-label="Close Project Modal"
                >
                    <i class="icon fa fa-times" />
                </button>
            </h1>

            <ImageCarousel images={project?.imgs ?? []} />

            <div class={styles.body}>
                {project?.description && (
                    <>
                        <span class="highlight">Description: </span>
                        {project.description}
                    </>
                )}

                <TagList title="Skills:" tags={project?.skills ?? []} />
                <TagList title="Software:" tags={project?.software ?? []} />

                {/* External Links */}
                <SocialLink
                    icon="github"
                    href={project?.github}
                    class={styles.link}
                />
                <SocialLink
                    icon="codepen"
                    href={project?.codepen}
                    class={styles.link}
                />
                {/* <SocialLink
                    icon="youtube"
                    href={project?.youtube}
                    class={styles.link}
                /> */}
            </div>
        </dialog>
    );
});

/* ======================== *\
    #Social Links 
\* ======================== */

type SocialLinkProps = {
    icon: "github" | "youtube" | "codepen";
    href?: string;
    class?: DOMAttributes<HTMLAnchorElement>["class"];
};
export const SocialLink = component$<SocialLinkProps>(
    ({ icon, href, ...props }) => {
        return (
            href && (
                <a
                    target="_blank"
                    rel="nofollow"
                    href={href}
                    class={props.class}
                >
                    <i class={`fab fa-${icon}`} />
                </a>
            )
        );
    }
);
