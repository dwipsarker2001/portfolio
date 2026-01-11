/* ------------------------------------*/
/*          Selecting the DOM          */
/* ------------------------------------*/
const cursor = document.querySelector(".cursor");
const navItems = document.querySelectorAll(".nav_item");
const sectionIds = ["about", "experience", "project", "goal"];

/* ------------------------------------*/
/*          Intersection               */
/* ------------------------------------*/
function handleIntersection(entries, observer) {
  entries.forEach((entry) => {
    const index = sectionIds.indexOf(entry.target.id);
    if (entry.isIntersecting && index !== -1) {
      navItems.forEach((item, i) => {
        item.classList.toggle("active", i === index);
      });
    }
  });
}

const observer = new IntersectionObserver(handleIntersection, {
  root: null,
  threshold: 0.5,
});

sectionIds.forEach((id) => {
  const section = document.querySelector(`#${id}`);
  if (section) {
    observer.observe(section);
  }
});

/* ------------------------------------*/
/*        Scroll Animator Config       */
/* ------------------------------------*/
// AOS.init();

/* ------------------------------------*/
/*        Magic Mouse Config           */
/* ------------------------------------*/
options = {
  hoverEffect: "circle-move",
  hoverItemMove: false,
  defaultCursor: false,
  outerWidth: 30,
  outerHeight: 30,
};
magicMouse(options);

/* ------------------------------------*/
/*       hover background gradient     */
/* ------------------------------------*/
const move = (e) => {
  cursor.style.top = e.pageY - 250 + "px";
  cursor.style.left = e.pageX - 250 + "px";
};

document.addEventListener("mousemove", (e) => {
  move(e);
});

/* ------------------------------------*/
/*       Load Skills                   */
/* ------------------------------------*/
fetch("./data/skills.json")
  .then((response) => response.json())
  .then((skills) => {
    const section = document.getElementById("skills");

    skills.forEach((skill) => {
      section.innerHTML += `
        <div class="tooltip">
          <img src="./assets/icons/${skill.icon}" alt="${skill.name}">
          <span class="tooltip-text">${skill.name}</span>
        </div>
      `;
    });
  });
