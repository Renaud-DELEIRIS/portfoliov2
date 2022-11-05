const initStars = (ref: HTMLElement | null) => {
  if (!ref) return;
  const stars: Array<HTMLDivElement> = Array.from({ length: 15 }, () => {
    const star = document.createElement("div");
    star.classList.add("star");
    star.classList.add("hidden");
    star.classList.add("dark:block");
    star.style.left = `${Math.random() * (120 - 40)}%`;
    star.style.top = `${Math.random() * 60 + 80}px`;
    star.style.animationDelay = `${Math.random() * 3}s`;
    star.style.width = `${Math.random() * 2}px`;
    star.style.height = `${Math.random() * 2}px`;
    star.innerHTML = "⭐";
    return star;
  });
  ref.append(...stars);
};

const destroyStars = (ref: HTMLElement | null) => {
  if (!ref) return;
  // Get all div with class star
  const stars = ref.querySelectorAll(".star");
  stars.forEach((star) => star.remove());
};

export { initStars, destroyStars };
