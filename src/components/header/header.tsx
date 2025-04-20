import { component$ } from "@builder.io/qwik";
import headshot from "../../images/AniDave.jpg";
import "./header.css";

export default component$(() => {
    return (
        <header class="header">
            <img
                class="header__headshot"
                src={headshot}
                alt="Image of David Chung"
            />

            <div class="header__top">
                <h1 class="header__name">David Chung</h1>
                <ul class="header__social list-unstyled">
                    <li class="icon header__social-item">
                        <a
                            target="_blank"
                            rel="nofollow"
                            href="https://twitter.com/davidc4747"
                        >
                            <i class="fab fa-twitter" />
                        </a>
                    </li>
                    <li class="icon header__social-item">
                        <a
                            target="_blank"
                            rel="nofollow"
                            href="https://github.com/davidc4747"
                        >
                            <i class="fab fa-github" />
                        </a>
                    </li>
                    <li class="icon header__social-item">
                        <a
                            target="_blank"
                            rel="nofollow"
                            href="https://codepen.io/davidc4747/"
                        >
                            <i class="fab fa-codepen" />
                        </a>
                    </li>
                    <li class="icon header__social-item">
                        <a
                            target="_blank"
                            rel="nofollow"
                            href="https://www.linkedin.com/in/davidc4747/"
                        >
                            <i class="fab fa-linkedin-in" />
                        </a>
                    </li>
                    {/* <li class="icon header__social-item"><a target="_blank" rel="nofollow" href="https://www.youtube.com/user/MeNumber47/featured"><i class="fab fa-youtube"></i></a></li> */}
                </ul>
            </div>

            <ul class="header__contact list-unstyled">
                <li class="header__contact-item">
                    <span class="icon fa fa-phone" />
                    (908) 930 - 8054
                </li>
                <li class="header__contact-item">
                    <span class="icon fa fa-envelope" />
                    davidc4747@yahoo.com
                </li>
                <li class="header__contact-item">
                    <span class="icon fa fa-map-marker" />
                    San Francisco, CA
                </li>
            </ul>
        </header>
    );
});
