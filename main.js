document.addEventListener("DOMContentLoaded", () => {
  const flower = document.getElementById("flower");
  const bloomBtn = document.getElementById("bloomBtn");
  const introOverlay = document.getElementById("introOverlay");
  const enterBtn = document.getElementById("enterBtn");
  const bgMusic = document.getElementById("bgMusic");

  let hasStartedMusic = false;

  if (!flower || !bloomBtn) return;

  const restartAnimation = () => {
    const animatedParts = flower.querySelectorAll(
      ".petal, .stem, .leaf, .flower-center"
    );

    animatedParts.forEach((el) => {
      el.style.animation = "none";
      // force reflow so the browser restarts the animation
      // eslint-disable-next-line no-unused-expressions
      el.offsetHeight;
      el.style.animation = "";
    });
  };

  if (enterBtn && introOverlay) {
    enterBtn.addEventListener("click", () => {
      introOverlay.classList.add("hidden");

      if (!hasStartedMusic && bgMusic) {
        bgMusic.play().catch(() => {});
        hasStartedMusic = true;
      }

      restartAnimation();
    });
  }

  bloomBtn.addEventListener("click", () => {
    restartAnimation();

    if (!hasStartedMusic && bgMusic) {
      bgMusic.play().catch(() => {});
      hasStartedMusic = true;
    }
  });
});