import { component$ } from "@builder.io/qwik";
import schools from "./education.json";
import styles from "./education.module.css";
import TagList from "../tag-list/tag-list";

export default component$(() => {
    return (
        <section class="page-container">
            <div class={styles.schoolList}>
                {schools
                    .filter((s) => s.name != "Udacity")
                    .map((school, index) => (
                        <div class={styles.school} key={index}>
                            <a href={school.url} target="_blank" rel="nofollow">
                                <img
                                    class={styles.logo}
                                    src={`${school.logo}`}
                                    alt={`${school.name} logo`}
                                    width={100}
                                    height={100}
                                />
                            </a>

                            <h3 class={styles.name}>{school.name}</h3>
                            <TagList tags={school.skills} />
                        </div>
                    ))}
            </div>
        </section>
    );
});
