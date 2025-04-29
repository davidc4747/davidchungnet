import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import styles from "./index.module.css";

import Header from "../components/header/header";
import Workexp from "../components/workexp/workexp";
import Education from "../components/education/education";
// import Faq from "../components/faq/faq";
import Portfolio from "~/components/portfolio/portfolio";

export default component$(() => {
    return (
        <>
            <Header />

            {/* Work Experience */}
            <h1 class={styles.sectionHeader}>
                <i class="icon fa fa-briefcase" />
                Work Experience
            </h1>
            <Workexp />

            {/* Projects */}
            <h1 class={styles.sectionHeader}>
                <i class="icon fa fa-code" />
                Projects
            </h1>
            <Portfolio />

            {/* Education */}
            <h1 class={styles.sectionHeader}>
                <i class="icon fa fa-book" />
                Education
            </h1>
            <Education />

            {/* Download */}
            <section class={styles.downloadContainer}>
                <a
                    class={styles.download}
                    href="/DavidGChung.pdf"
                    target="_blank"
                >
                    Download Resume
                </a>
            </section>

            {/* FAQs */}
            {/* <h1 class={styles.sectionHeader}>
                <i class="icon fa fa-compass" />
                FAQs
            </h1>
            <Faq /> */}

            {/* Footer */}
            <footer class={styles.footer} />
        </>
    );
});

export const head: DocumentHead = {
    title: "David G Chung",
    meta: [
        {
            name: "description",
            content: "David Chung website :)",
        },
    ],
};
