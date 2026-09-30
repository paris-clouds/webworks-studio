# WebWorks Studio

Week 1 Studio Onboarding project for WebWorks Studio.

## Developer

Paris Lopez

## Role

Junior Web Developer

## Project

Studio Onboarding & GitHub Workspace Setup

## Live Site

https://paris-clouds.github.io/webworks-studio/

## Week 1 Requirements

- add developer information and studio status.
  Edit project files in Visual Studio Code.
- Replace `YOUR NAME` in `index.html` and this README.
- Change the Studio Status in `index.html` to `Ready for Client Work`.
- Test the site locally before and after editing.
- Commit and push your work to your public GitHub repository.
- Publish the site with GitHub Pages.
- Replace `GITHUB PAGES URL` above with the working published site URL.
- Commit and push the final README update.

## Important

Do not add private information such as a student ID, home address, phone number, personal email address, passwords, or authentication tokens to this public repository.

Week 2

1. Moved styling commands to the CSS page. Organized it to make the styling code easier to see and edit.

2. Added semantic elements to the HTML page. So to organize and group sections to see where everything is and how it's connected better.

3. Added alt descriptions to images on the HTML page. For accessibility, so website readers can understand what’s on the page.

What I Intentionally Did Not Change

I did not add flexbox or change colors. I did not make it responsive as well. I did not fix the layout of the page, such as changing where things would be better suited.

Next Sprint

Next, I’ll make the website responsive to all devices. Fix the layout of the text, like the font size, and images. Also to fix the spacing and padding as well.

WEEK 3, SPRINT 2
Updated September 2026 by Paris Lopez from NVC WebWorks

Problem 1
Site was not responsive. Made changes to make it responsive across all devices. Made that change so it would be accessible and easier to navigate.

Problem 2
Added grids to fix the page layout. Was overflowing in containers, so I added it to the visit, plants, content-layout, and hero sections.

Problem 3
Added flexbox to the about, nav, contact-info, and navcell sections so the overflow and poor spacing didn’t happen.

https://paris-clouds.github.io/legacy-modernization/

WEEK 4 Tailwind
Updated September 2026 by Paris Lopez Webworks Studio NVC

### Decision 1

Used Tailwind Flexbox flex, flex-col, and flex-row.
Used these utilities to fix the site and make it accessible across all platforms and responsive.

### Decision 2

Used Tailwind gaps.
Used it to fix the design layout so everything wasn't stacking.

### Decision 3

Used Tailwind alignments.
Used it to fix layout design to show what client wanted the site to look like.

## Live Site

https://paris-clouds.github.io/week04-tailwind/

WEEK 5 Bootstrap

## 1. Framework Choice

**Identify one feature Bootstrap made significantly faster to implement. Briefly explain what Bootstrap provided and why that helped this project.**

Using .img-fluid, I sped up the process of making the images responsive. It laid much of the groundwork, and I did not need to use a lot of CSS to style it, making the process much faster, in my opinion.

## 2. Adaptation

**Identify one Bootstrap default you intentionally changed for the client. Explain what you changed and how the adaptation better supports Cedar & Stone.**

I changed the default button styling; the links were plain HTML links without Bootstrap styling. I created custom Bootstrap button classes using the provided colors in the README.

The buttons make important actions like “Explore our services” and “Request a consultation” stand out more clearly. The colors also match the Cedar & Stone brand palette, giving the website a more professional appearance while making it easier for visitors to find everything.

## 3. Professional Judgment

**Identify one part of the project you would not rebuild from scratch because Bootstrap already provides an appropriate solution. Explain why keeping the framework solution is the better professional choice.**

I would not rebuild the responsive navigation bar from scratch. Bootstrap already provides a responsive navbar.
Keeping Bootstrap’s navbar solution is the better professional choice because it saves development time, works across different screen sizes, and reduces the chance of errors in the navigation. Then I can use custom CSS only for Cedar & Stone’s colors and appearance instead of recreating the entire navigation system from scratch.

## Live Site

(https://paris-clouds.github.io/week05-bootstrap/)

# Week 6 — UX Evaluation Brief

## Hill Country Trail Guide

**Primary User:** Maya Torres  
**Primary Task:** Choose a beginner-appropriate Saturday hike that can be completed in about three hours or less.

---

## 1. Task Walkthrough

Briefly describe what Maya would try to do first, what she would look for, and where she might hesitate.

Maya would skim the trail cards for beginner-friendly hikes, checking for things like difficulty, time, distance, and trip details. She’d pause whenever the difficulty labels aren’t clear, there’s no time estimate, or the planning info is too vague.

---

## 2. Five UX Findings

Document **exactly five meaningful findings**.

### Finding 1

**Observation:**  
You see labels like "Easy" and "Moderate," but there’s no breakdown of what those really mean.

**Evidence:**  
Trail cards show a difficulty, but don’t tell you what kind of terrain, elevation, or skills each level actually covers.

**User Impact:**  
Maya’s just starting out. Without clear explanations, she might end up on a trail that’s too hard for her.

**Principle:**  
Use plain, clear language.

**Priority:**
High

**Recommendation:**  
Add short, clear descriptions for every difficulty level. Spell out things like elevation, terrain, and how much effort is needed.

### Finding 2

**Observation:**  
Trail details are buried in long paragraphs instead of quick, scannable sections.

**Evidence:**  
Important stuff like conditions, parking, and warnings are lost in big paragraphs, not called out or listed.

**User Impact:**  
Maya just skims on her phone—she could easily miss the important details.

**Principle:**  
Make info easy to scan.

**Priority:**  
High

**Recommendation:**  
Break up trail info with clear sections or bullet points for things like distance, time, parking, fees, dog policy, and trail conditions.

### Finding 3

**Observation:**  
You get the mileage and elevation, but not how long the hike will actually take.

**Evidence:**  
There’s no estimate for how much time you need to finish any hike, on either the trail cards or the details pages.

**User Impact:**  
Maya needs to know if she can finish a hike in the time she has. Without time estimates, that’s tough.

**Principle:**  
Help people plan and decide.

**Priority:**  
High

**Recommendation:**  
Show hike time estimates on every trail card and detail page.

### Finding 4

**Observation:**  
There’s no quick way to compare trails side by side.

**Evidence:**  
You have to flip between different cards and pages just to see distance, elevation, and trail features.

**User Impact:**  
Maya likes to compare a few trails before picking. As it is, this takes way too much effort.

**Principle:**  
Make comparing trails easier.

**Priority:**  
Medium

**Recommendation:**  
Show all key trail info in a consistent way. Add comparison or summary features.

### Finding 5

**Observation:**  
Details on dogs, fees, and access are confusing or missing.

**Evidence:**  
The site says dogs "may be allowed" and fees/hours "could change," but doesn’t give real specifics.

**User Impact:**  
Maya wants to know about parking, fees, rules, and if she can bring her dog before she leaves. Unclear info means she has to dig around for answers.

**Principle:**  
Make key info obvious.

**Priority:**  
Low

**Recommendation:**  
Give clear, up-to-date info on dog rules, fees, parking, and access for every trail.

---

## 3. Top Three Priorities

Identify the three findings that should move forward into Week 7.

1. Difficulty Labels Aren’t Explained.
   Maya’s just starting out and needs to know if a trail fits her skill level. The site throws around labels like “Easy” and “Moderate,” but it doesn’t explain what they actually mean. Without clear definitions, Maya can’t tell if a trail is right for her—and picking a hike that’s too tough is the last thing she wants.

2. No Estimated Hiking Time.
   Maya’s got a three-hour window and wants a hike that’ll fit. But the site doesn’t give any time estimates—just distance and elevation—so she’s left guessing if she can finish in time. That’s a lot of uncertainty when all she wants is to plan her day.

3. Dog Rules, Fees, and Access Are Unclear.
   Before Maya heads out, she needs the basics—parking, fees, access, and whether her dog can come. The site is vague, saying things like dogs “may be allowed” and fees or hours “could change.” That means Maya’s got to dig around for answers somewhere else, which makes planning way harder than it should be.

For each, briefly explain why it matters to Maya's primary task.

---

## Week 7 Handoff

Week 7 will turn your top three priorities into interface requirements, wireframes, and a prototype.

# Week 7 — Wireframes & Prototype Handoff

## Hill Country Trail Guide

**Primary User:** Maya Torres  
**Primary Task:** Choose a beginner-appropriate Saturday hike that can be completed in about three hours or less.

---

## 1. Project Overview

Briefly summarize the Week 6 problem you are carrying forward.

Fixed the Week 6 problems of difficulty reading the labels and none-descriptive info on trails and such.

---

## 2. Three Design Requirements

Translate your **top three Week 6 priorities** into exactly three interface requirements.

### Requirement 1

**Week 6 problem:** Labels Aren’t Explained.
**Design requirement:** Make it easy to identify which trail suits a beginner like Maya.
**How this helps Maya:** By seeing the trail info right away, Maya can quickly identify which trail best suits her.

### Requirement 2

**Week 6 problem:** No Estimated Hiking Time.
**Design requirement:** Make the estimated hiking times easy to identify so Maya can see which trails she would like and can complete.
**How this helps Maya:** By seeing how long the trail she chose will take, Maya can plan her hiking trip. She can plan how much water or food to take based on the estimated time.

### Requirement 3

**Week 6 problem:** Dog Rules, Fees, and Access Are Unclear.
**Design requirement:** Make it clear whether dogs are allowed on the trails, whether you have to pay a fee for them, and whether that changes within certain days/hours.
**How this helps Maya:** Instead of searching the whole website and clicking through and scanning every piece of information to see whether dogs are allowed, which could discourage her from even going on the trail, she can quickly see whether dogs are allowed. By easily finding the info she needs, she’ll feel more comfortable and prepared to plan the hiking trip.

---

## 3. Figma Prototype Link

## https://www.figma.com/proto/lttpEL5iZX0S1Oyr52ZQHC/Hill-Country-Trail-Guide-Wireframe?node-id=2-2&t=qlZXj5pAXzv50dmy-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2%3A2&show-proto-sidebar=1

## 4. Required Wireframe Exports

1. ![(wireframes/desktop-primary.png)](wireframes/desktop-primary.png)
2. ![`wireframes/mobile-primary.png`](wireframes/mobile-primary.png)
3. ![`wireframes/task-state-01.png`](wireframes/task-state-01.png)
4. ![`wireframes/task-state-02.png`](wireframes/task-state-02.png)

---

## 5. Prototype Flow

Describe the user task your prototype demonstrates.

**Starting point:** On the home page, clicking on the “VIEW TRAIL DETAILS” button on Juniper Creek Loop.
**User action:** Clicking on the “VIEW TRAIL DETAILS” button.
**System/interface response:** Redirects you to a new page.
**End state:** Landing on a new page that goes more into detail about the trail you clicked on.

---

## 6. Design Rationale

Document approximately three important decisions.

### Decision 1

**Problem:** Maya couldn’t tell whether a trail was at her level of experience.
**Design response:** Clearly labeled each of the trails' difficulty with the rest of the info.
**Why:** Maya is a beginner and not familiar with hiking terms, so it should be clearly stated for comparing options.

### Decision 2

**Problem:** No clear time on how long a trail is.
**Design response:** Estimated completion time is included with the rest of the hiking info.
**Why:** One of Maya’s criteria is finding out how long a hike can take, so it should be clearly stated so she can compare trails.

### Decision 3

**Problem:** Unclear whether dogs are allowed, and any fees to pay.
**Design response:** Included info on whether dogs are allowed on trails, and that parking is only free for members.
**Why:** Maya’s criteria also includes whether dogs are allowed, and understanding parking and fees. So I made it visible for her to easily understand.

---

## 7. Accessibility Notes

Document at least two accessibility decisions you planned before development.

### Accessibility Decision 1

Made sure content is easily understood, such as text written using plain language.

### Accessibility Decision 2

Made sure all clickable or interactive elements are sized to allow users to easily activate them.

---

## Week 8 Handoff

In Week 8, the client moves into a common production starter. You will implement two JavaScript behaviors connected to Maya's needs:

1. an accessible explanation/disclosure for trail difficulty; and
2. form validation and user feedback for a hike-planning form.

Your Week 7 prototype may explore these or another related solution. The important continuity is the user need and interaction reasoning.
