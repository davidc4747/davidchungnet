import {
    component$,
    useTask$,
    useSignal,
    type QRL,
    type DOMAttributes,
} from "@builder.io/qwik";
import styles from "./project-dialog.module.css";
import { type Project } from "../portfolio/portfolio";

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
        <dialog ref={dialog} class={styles.projectDialog} onClose$={onClose$}>
            <h1 class={styles.header}>
                {project?.name}
                <button onClick$={() => dialog.value?.close()}>
                    <i class="icon fa fa-times" />
                </button>
            </h1>

            <div>
                {/* <ImageCarousel images={project?.imgs ? project?.imgs : []} /> */}
            </div>
            
            <div class={styles.body}>
                <span class="highlight">Description: </span>
                {project?.description}

                <section class="v-center">
                    <span class="highlight">Skills:</span>
                    <ul class="tag-list list-unstyled">
                        {project?.skills.map((skill, index) => (
                            <li class="tag" key={index}>
                                {skill}
                            </li>
                        ))}
                    </ul>
                </section>

                <section class="v-center">
                    <span class="highlight">Software:</span>
                    <ul class="tag-list list-unstyled">
                        {project?.software.map((soft, index) => (
                            <li class="tag" key={index}>
                                {soft}
                            </li>
                        ))}
                    </ul>
                </section>

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
