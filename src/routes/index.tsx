import { $, component$, useStore } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import styles from "./index.module.css";

import Header from "../components/header/header";
import Workexp from "../components/workexp/workexp";
import Education from "../components/education/education";
import Faq from "../components/faq/faq";
import Portfolio from "~/components/portfolio/portfolio";

type Project = {
    name: string;
    type: string;
    dateStart: string;
    dateEnd: string;
    github: string;
    codepen?: string;
    thumbnail: string;
    imgs: string[];
    skills: string[];
    software: string[];
    teamSize: number;
    description: string;
    details: string[];
};

type State = {
    modalIsOpen: boolean;
    modalProject: Project | null;
};

export default component$(() => {
    const state = useStore<State>({
        modalProject: null,
        modalIsOpen: false,
    });

    const closeModal = $(() => {
        state.modalIsOpen = false;
        state.modalProject = null;
    });

    const openModal = $((project: Project): void => {
        state.modalIsOpen = true;
        state.modalProject = project;
        console.log(project);
    });

    return (
        <main>
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
            <Portfolio onOpenProject$={openModal} />

            {/* Education */}
            <h1 class={styles.sectionHeader}>
                <i class="icon fa fa-book" />
                Education
            </h1>
            <Education />

            {/* FAQs */}
            <Faq />

            {/* Download Button */}
            <section class={styles.downloadContainer}>
                <a
                    class={[styles.download, "btn btn--primary"]}
                    href="/David-Chung.pdf"
                    target="_blank"
                >
                    Download Resume
                </a>
            </section>

            {/* Footer */}
            <footer class={styles.footer} />
        </main>
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
