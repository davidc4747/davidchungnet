import { component$ } from "@builder.io/qwik";
import mypic from "/images/me.png";
import {
    header,
    headshot,
    top,
    contact,
    contactItem,
    myName,
    social,
    socialItem,
} from "./header.module.css";

export default component$(() => {
    return (
        <header class={header}>
            <img class={headshot} src={mypic} alt="Image of David Chung" />

            <h1 class={myName}>David Chung</h1>
            <ul class={[social, "list-unstyled"]}>
                {/* <li class={[socialItem, "icon"]}>
                    <a
                        target="_blank"
                        rel="nofollow"
                        href="https://twitter.com/davidc4747"
                    >
                        <i class="fab fa-twitter" />
                    </a>
                </li> */}
                <li class={[socialItem, "icon"]}>
                    <a
                        target="_blank"
                        rel="nofollow"
                        href="https://github.com/davidc4747"
                    >
                        <i class="fab fa-github" />
                    </a>
                </li>
                <li class={[socialItem, "icon"]}>
                    <a
                        target="_blank"
                        rel="nofollow"
                        href="https://codepen.io/davidc4747/"
                    >
                        <i class="fab fa-codepen" />
                    </a>
                </li>
                <li class={[socialItem, "icon"]}>
                    <a
                        target="_blank"
                        rel="nofollow"
                        href="https://www.linkedin.com/in/davidc4747/"
                    >
                        <i class="fab fa-linkedin-in" />
                    </a>
                </li>
            </ul>

            <ul class={["list-unstyled", contact]}>
                <li class={contactItem}>
                    <span class="icon fa fa-phone" />
                    (908) 930 - 8054
                </li>
                <li class={contactItem}>
                    <span class="icon fa fa-envelope" />
                    davidc4747@yahoo.com
                </li>
                <li class={contactItem}>
                    <span class="icon fa fa-map-marker" />
                    San Francisco, CA
                </li>
            </ul>
        </header>
    );
});
