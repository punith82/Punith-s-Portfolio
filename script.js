addEventListener("DOMContentLoaded", () => {
  const about = document.getElementById("about");
  const projects = document.getElementById("projects");
  const skills = document.getElementById("skills");
  const getintouch = document.getElementById("getintouch");

  about.addEventListener("click", () => {
    document
      .getElementById("about-section")
      .scrollIntoView({ behavior: "smooth" });
  });

  projects.addEventListener("click", () => {
    document
      .getElementById("projects-section")
      .scrollIntoView({ behavior: "smooth" });
  });

  skills.addEventListener("click", () => {
    document
      .getElementById("skills-section")
      .scrollIntoView({ behavior: "smooth" });
  });

  getintouch.addEventListener("click", () => {
    document
      .getElementById("getintouch-section")
      .scrollIntoView({ behavior: "smooth" });
  });
});
