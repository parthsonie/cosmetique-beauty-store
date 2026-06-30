const body = document.body;
const menuButton = document.querySelector(".menu-toggle");
const closeButton = document.querySelector(".close-nav");
const navbar = document.querySelector(".navbar");

function setMenu(open) {
  if (!navbar || !menuButton) return;
  navbar.classList.toggle("show", open);
  body.classList.toggle("hide-scroll", open);
  menuButton.setAttribute("aria-expanded", String(open));
}

menuButton?.addEventListener("click", () => setMenu(true));
closeButton?.addEventListener("click", () => setMenu(false));

document.querySelectorAll(".navbar a").forEach((link) => {
  link.addEventListener("click", () => setMenu(false));
  const current = window.location.pathname.split("/").pop() || "index.html";
  const target = link.getAttribute("href")?.split("#")[0];
  if (target === current) link.classList.add("active");
});

document.querySelectorAll("[data-auth-form]").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const button = form.querySelector("button");
    const oldText = button.textContent;
    button.textContent = "Saved";
    form.classList.add("submitted");
    setTimeout(() => {
      button.textContent = oldText;
      form.classList.remove("submitted");
    }, 1500);
  });
});

const revealItems = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("visible"));
}
