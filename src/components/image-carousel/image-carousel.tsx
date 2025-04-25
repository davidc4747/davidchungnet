import {
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

    return (
        <>
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
                    onClick$={() =>
                        (currentImageIndex.value =
                            (currentImageIndex.value - 1 + images.length) %
                            images.length)
                    }
                    aria-label="Display Previous Image"
                >
                    <i class="fa fa-angle-left" />
                </button>
                <button
                    class={styles.next}
                    onClick$={() =>
                        (currentImageIndex.value =
                            (currentImageIndex.value + 1) % images.length)
                    }
                    aria-label="Display Next Image"
                >
                    <i class="fa fa-angle-right" />
                </button>
            </div>

            {/* Image List */}
            <div class={styles.imageList}>
                {images.map((img, index) => (
                    <img
                        key={img}
                        class={{
                            [styles.image]: true,
                            [styles.selected]: index == currentImageIndex.value,
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
        </>
    );
});
