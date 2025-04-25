import { component$ } from "@builder.io/qwik";
import jobs from "./workexp.json";
import styles from "./workexp.module.css";
import TagList from "../tag-list/tag-list";

export default component$(() => {
    const formatDate = (dateStr: string) =>
        new Date(dateStr).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
        });

    return (
        <ul class={[styles.workexp, "list-unstyled"]}>
            {jobs.map((job) => (
                <li key={job.company} class={styles.job}>
                    <div class={styles.header}>
                        {job.logo && (
                            <img
                                class={styles.img}
                                src={job.logo}
                                alt={`${job.company} Logo`}
                                width={100}
                                height={100}
                            />
                        )}
                        <h3>
                            <div class={styles.company}>{job.company}</div>
                            <div class={styles.position}>{job.position}</div>
                            <div class={styles.date}>
                                {formatDate(job.startDate)} —{" "}
                                {formatDate(job.endDate)}
                            </div>
                        </h3>
                    </div>

                    <ul class={styles.details}>
                        <li>
                            <TagList title="Skills:" tags={job.skills} />
                        </li>
                        <li>
                            <TagList title="Software:" tags={job.software} />
                        </li>
                        {job.details.map((det) => (
                            <li key={det}>{det}</li>
                        ))}
                    </ul>
                </li>
            ))}
        </ul>
    );
});
