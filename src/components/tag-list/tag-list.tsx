import { component$ } from "@builder.io/qwik";
import styles from "./tag-list.module.css";

/* ======================== *\
    # Tag List
\* ======================== */

interface TagListProps {
    title?: string;
    tags: string[];
}
export default component$<TagListProps>(({ title, tags }) => {
    return title ? (
        <section class={styles.container}>
            {title && <span class={styles.title}>{title}</span>}
            <ul class={styles.tagList}>
                {tags.map((tag, index) => (
                    <li class={styles.tag} key={index}>
                        {tag}
                    </li>
                ))}
            </ul>
        </section>
    ) : (
        // NOTE: There a little duplication here.
        //      Can probably pull this out into it's own
        //      private component later if I need to [DC]
        <ul class={styles.tagList}>
            {tags.map((tag, index) => (
                <li class={styles.tag} key={index}>
                    {tag}
                </li>
            ))}
        </ul>
    );
});
