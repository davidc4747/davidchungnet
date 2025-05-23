import { component$ } from "@builder.io/qwik";
import mypic from "/images/me.png";
import styles from "./header.module.css";

export default component$(() => {
    return (
        <header class={[styles.header, "page-container"]}>
            <img
                class={styles.headshot}
                src={mypic}
                alt="Photo of David Chung"
                width={200}
                height={200}
            />

            <h1 class={styles.myName}>David Chung</h1>
            <ul class={[styles.social, "list-unstyled"]}>
                <li>
                    <a
                        class={[styles.socialItem, "icon"]}
                        target="_blank"
                        rel="nofollow"
                        href="https://github.com/davidc4747"
                        aria-label="David's Github"
                    >
                        <i class="fab fa-github" />
                    </a>
                </li>
                <li>
                    <a
                        class={[styles.socialItem, "icon"]}
                        target="_blank"
                        rel="nofollow"
                        href="https://codepen.io/davidc4747/"
                        aria-label="David's Codepen"
                    >
                        <i class="fab fa-codepen" />
                    </a>
                </li>
                <li>
                    <a
                        class={[styles.socialItem, "icon"]}
                        target="_blank"
                        rel="nofollow"
                        href="https://www.linkedin.com/in/davidc4747/"
                        aria-label="David's Linkedin"
                    >
                        <i class="fab fa-linkedin-in" />
                    </a>
                </li>
            </ul>

            <ul class={["list-unstyled", styles.contact]}>
                <li class={styles.contactItem}>
                    <span class="icon fa fa-map-marker" />
                    San Francisco, CA
                </li>
            </ul>
        </header>
    );
});
