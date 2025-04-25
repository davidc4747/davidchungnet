import { component$ } from "@builder.io/qwik";
import faqs from "./faq.json";
import styles from "./faq.module.css";

export default component$(() => {
    return (
        <ul class={[styles.faqList, "page-container"]}>
            {faqs.map((faq, index) => (
                <li class={styles.question} key={index}>
                    <h2 class={styles.title}>{faq.question}</h2>
                    <p class={styles.body}>{faq.answer}</p>
                </li>
            ))}
        </ul>
    );
});
