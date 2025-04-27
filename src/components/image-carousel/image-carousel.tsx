import {
    $,
    component$,
    useTask$,
    useVisibleTask$,
    useSignal,
} from "@builder.io/qwik";
import styles from "./image-carousel.module.css";

/* ======================== *\
    # Image Carousel
\* ======================== */

interface ImageCarouselProps {
    images: string[];
    // onNextImage: Function;
    // onPrevImage: Function;
}
export default component$<ImageCarouselProps>(({ images }) => {
    const currentImageIndex = useSignal(1);

    useTask$(({ track }) => {
        track(() => images);
        currentImageIndex.value = 0;
    });

    // eslint-disable-next-line qwik/no-use-visible-task
    useVisibleTask$(({ track }) => {
        track(() => currentImageIndex.value);
        const selected = document.querySelector<HTMLImageElement>(
            `.${styles.image}.${styles.selected}`
        );
        selected?.scrollIntoView({ behavior: "smooth", inline: "center" });
    });

    const next = $(
        () =>
            (currentImageIndex.value =
                (currentImageIndex.value + 1) % images.length)
    );
    const prev = $(
        () =>
            (currentImageIndex.value =
                (currentImageIndex.value - 1 + images.length) % images.length)
    );

    const handleKeyPress = $((e: KeyboardEvent) => {
        switch (e.key) {
            case "ArrowLeft":
                prev();
                break;
            case "ArrowRight":
                next();
                break;
        }
    });

    return (
        <section onKeyUp$={handleKeyPress}>
            <div class={styles.container}>
                {/* Image List */}
                <img
                    class={styles.main}
                    src={images[currentImageIndex.value]}
                    alt=""
                    height={380}
                    draggable={false}
                />

                {/* Next & Prev */}
                <button
                    class={styles.prev}
                    onClick$={prev}
                    title="Previous Image (←)"
                >
                    <i class="fa fa-angle-left" />
                </button>
                <button
                    class={styles.next}
                    onClick$={next}
                    title="Next Image (→)"
                >
                    <i class="fa fa-angle-right" />
                </button>
            </div>

            {/* Image List */}
            {images.length > 1 && (
                <div class={styles.imageList}>
                    {images.map((img, index) => (
                        <img
                            key={img}
                            class={{
                                [styles.image]: true,
                                [styles.selected]:
                                    index == currentImageIndex.value,
                            }}
                            draggable={false}
                            src={img}
                            alt=""
                            width={110}
                            height={80}
                            onClick$={() => (currentImageIndex.value = index)}
                        />
                    ))}
                </div>
            )}
        </section>
    );
});
