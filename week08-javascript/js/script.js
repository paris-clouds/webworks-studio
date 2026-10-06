"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const difficultyToggle = document.querySelector("#difficulty-toggle");

  const difficultyPanel = document.querySelector("#difficulty-panel");

  if (difficultyToggle && difficultyPanel) {
    difficultyToggle.addEventListener("click", () => {
      const isOpen = difficultyToggle.getAttribute("aria-expanded") === "true";

      difficultyToggle.setAttribute("aria-expanded", String(!isOpen));

      difficultyPanel.hidden = isOpen;
    });
  }

  const hikeForm = document.querySelector("#hike-form");
  const feedback = document.querySelector("#form-feedback");

  if (hikeForm && feedback) {
    hikeForm.addEventListener("submit", (event) => {
      event.preventDefault();

      if (!hikeForm.checkValidity()) {
        hikeForm.reportValidity();
        feedback.textContent = "";
        return;
      }

      const trail = hikeForm.elements.trail.value;
      const experience = hikeForm.elements.experience.value;

      const hoursSelect = hikeForm.elements.hours;

      const timeAvailable = hoursSelect.options[hoursSelect.selectedIndex].text;

      feedback.replaceChildren();

      const heading = document.createElement("h3");
      heading.textContent = "Plan Ready";

      const trailLine = document.createElement("p");
      trailLine.textContent = `Trail: ${trail}`;

      const experienceLine = document.createElement("p");
      experienceLine.textContent = `Hiking experience: ${experience}`;

      const timeLine = document.createElement("p");
      timeLine.textContent = `Time available: ${timeAvailable}`;

      feedback.append(heading, trailLine, experienceLine, timeLine);
    });
  }

  const menuToggle = document.querySelector("#menu-toggle");

  const mobileNavigation = document.querySelector("#mobile-navigation");

  if (menuToggle && mobileNavigation) {
    menuToggle.addEventListener("click", () => {
      const isOpen = menuToggle.getAttribute("aria-expanded") === "true";

      menuToggle.setAttribute("aria-expanded", String(!isOpen));

      mobileNavigation.hidden = isOpen;

      menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Open menu" : "Close menu",
      );
    });

    mobileNavigation.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mobileNavigation.hidden = true;

        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open menu");
      });
    });

    window.addEventListener("resize", () => {
      if (window.matchMedia("(min-width: 681px)").matches) {
        mobileNavigation.hidden = true;

        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open menu");
      }
    });
  }
});
