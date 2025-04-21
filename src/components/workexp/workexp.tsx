import { component$ } from "@builder.io/qwik";
import pdhiLogo from "/images/pdhi/logo.jpg";
import styles from "./workexp.module.css";

export default component$(() => {
    return (
        <section class={styles.workexp}>
            <ul class="list-unstyled">
                <li>
                    <div class={styles.header}>
                        <img
                            class={styles.img}
                            src={pdhiLogo}
                            alt="PDHI Logo"
                            width={100}
                            height={100}
                        />
                        <h3>
                            <div class={styles.company}>PDHI</div>
                            <div class={styles.position}>
                                Full-Stack Developer
                            </div>
                            <div class={styles.date}>
                                June 2016 – September 2017
                            </div>
                        </h3>
                    </div>

                    <ul class={styles.details}>
                        <li>
                            <span class="highlight">Skills:</span>
                            <ul class="tag-list list-unstyled">
                                <li class="tag">HTML5</li>
                                <li class="tag">CSS3</li>
                                <li class="tag">Less</li>
                                <li class="tag">Bootstrap</li>

                                <li class="tag">JavaScript</li>
                                <li class="tag">knockout.js</li>
                                <li class="tag">jQuery</li>
                                <li class="tag">D3.js</li>
                                <li class="tag">Node.js</li>

                                <li class="tag">Restful APIs</li>

                                <li class="tag">SQL</li>
                                <li class="tag">C#</li>
                                <li class="tag">ASP.NET</li>

                                <li class="tag">Agile</li>
                                <li class="tag">Scrum</li>
                            </ul>
                        </li>
                        <li>
                            <span class="highlight">Software:</span>
                            <ul class="tag-list list-unstyled">
                                <li class="tag">Git</li>
                                <li class="tag">NPM</li>
                                <li class="tag">JIRA</li>
                                <li class="tag">BitBucket</li>
                                <li class="tag">Confluence</li>
                                <li class="tag">Visual Studio</li>
                                <li class="tag">VS Code</li>
                                <li class="tag">SSMS</li>
                            </ul>
                        </li>
                        <li>
                            Refactored our JS architecture, allowing the
                            creation of modular knockout components
                        </li>
                        <li>
                            Lead the initiative to convert our nested CSS
                            structures into a modular BEM standard
                        </li>
                        <li>
                            Helped design and implement the initial stages of
                            our Restful API
                        </li>
                        <li>
                            Created interactive charts using Google Maps API and
                            D3.js
                        </li>
                        <li>
                            Saved debug time by creating SQL scripts to
                            normalize test data
                        </li>
                        <li>
                            Helped reorganized entity framework domain object
                            structure
                        </li>
                        <li>Participated in regular agile team workflows</li>
                    </ul>
                </li>
            </ul>
        </section>
    );
});
