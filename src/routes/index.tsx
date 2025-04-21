import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import Header from "../components/header/header";
import Workexp from "../components/workexp/workexp";
import Education from "../components/education/education";
import Faq from "../components/faq/faq";
import Portfolio from "~/components/portfolio/portfolio";

export default component$(() => {
    return (
        <main class="resume">
            <Header />

            {/* Work Experience */}
            <h1 class="home__header">
                <i class="icon fa fa-briefcase" />
                Work Experience
            </h1>
            <Workexp />

            {/* Projects */}
            <h1 class="home__header">
                <i class="icon fa fa-code" />
                Projects
            </h1>
            <Portfolio />

            {/* Education */}
            <h1 class="home__header">
                <i class="icon fa fa-book" />
                Education
            </h1>
            {/* <Education schools={data.allEduJson.edges} /> */}
            <Education />

            {/* Download Button */}
            <section class="resume__btn-holder">
                <a
                    class="btn btn--primary resume__download"
                    href="/David-Chung.pdf"
                    target="_blank"
                >
                    Download Resume
                </a>
            </section>

            {/* FAQs */}
            <Faq />

            {/* Footer */}
            <footer class="footer" />
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
