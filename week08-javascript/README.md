# Week 8 — JavaScript Interaction Handoff

## Hill Country Trail Guide

**Primary User:** Maya Torres

## Required Behaviors

1. Accessible trail-difficulty disclosure
2. Hike-planning form validation/submission feedback

---

## JavaScript Decisions

### Decision 1 — DOM Selection

What elements did your script need to select, and why?

My script needed to select the difficulty button and its information panel, the mobile Menu button, and the Hiking Planning form and feedback. I used the document.querySelector() to choose those items so the JavaScript could respond to user actions on the correct parts.

### Decision 2 — Event Handling

What events did you listen for? Why were those events appropriate?

I listened for the click events on the Difficulty and Menu buttons using addEventListener(). I also listened for a submit event on the Hiking Planning form, and click events on the Mobile nav links. They were appropriate because they let users open and close the Difficulty information dropdown, submit the hiking choices, and open and close the Mobile Menu.

### Decision 3 — State / DOM Update

How did the interface change after user action?

After clicking on the Difficulty button, JavaScript shows and hides the information and updates the button's expanded state. The Menu button opens and closes the mobile nav, and clicking a link closes the menu bar. When the user completes all the fields, checks the “I understand” box, and clicks “Review My Plan,” JavaScript displays a “Plan Ready” message with the selected choices.

### Decision 4 — Accessibility

How did you preserve or improve keyboard/accessibility behavior?

I improved accessibility by using semantic HTML, clear form labels, and aria-controls and aria-expanded for the difficulty and Menu buttons. Using buttons also allows the interactive controls to work with keyboard activation. I used JavaScript to keep the expanded state in sync with whether the content is visible or not. I also preserved native HTML validation for the required fields and checkbox, used aria-live to announce plan feedback, and maintained the keyboard styles.

---

## Testing Notes

### Difficulty Disclosure

- Mouse: Clicking the “What Does Difficulty Mean?” button opens the info. Clicking it again hides the info.
- Keyboard: You can access the button using the Tab key and activate it using Enter or Space.
- `aria-expanded`: This changes from false to true when the info opens and back to false when closed
- Console errors: No errors are to be expected during use.

### Planning Form

- Empty/invalid submission: The browser's built-in form validation prevents submission when required fields are missing or the “I understand” checkbox is unchecked.
- Valid submission: Selecting a Trail, Hiking Experience, and Time available, then checking “I understand” and clicking “Review My Plan,” displays the “Plan Ready” with the selected choices.
- Keyboard: Users can navigate the form fields with Tab, choose options with the keyboard, check the confirmation box with Space, and submit using Enter.
- Console errors: No errors are to be expected during use.

---

## Live Site

[Add GitHub Pages URL here.]
