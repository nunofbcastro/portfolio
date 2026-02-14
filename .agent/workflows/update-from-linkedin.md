---
description: Update portfolio data from LinkedIn profile
---

1.  **Read LinkedIn Profile Data**
    - Access the user's LinkedIn profile: [https://www.linkedin.com/in/nunofbcastro/](https://www.linkedin.com/in/nunofbcastro/)
    - **Crucial Step:** You MUST click on "Show all [X] skills" in the Experience and Education sections to see the full list of technologies used. The main profile page often truncates this list.
    - Extract the following information:
        - **About:** Summary text.
        - **Experience:** Company, Role, Dates, Description, and ALL specific Skills/Technologies.
        - **Education:** Institution, Degree, Dates, Description, and ALL specific Skills/Technologies.
        - **Skills Section:** The full list of skills for categorization (Backend, Frontend, etc.).

2.  **Update `src/data/portfolio.ts`**
    - Open `src/data/portfolio.ts`.
    - **About Section:** Update `about.pt.description` and `about.en.description`. Update `about.pt.skills` and `about.en.skills` with the categorized global skills.
    - **Timeline Section:** Update the `items` array.
        - Locate the corresponding `experience` or `education` entry.
        - Update `company`/`institution`, `role`/`degree`, `period`, and `description`.
        - **Technologies:** Replace the `technologies` array with the FULL list of skills extracted from that specific LinkedIn entry.
            - *Example:* If LinkedIn shows "C#, .NET, Azure, SQL" for a job, the `technologies` array MUST include all of them: `[".NET", "C#", "Azure", "SQL"]`.

3.  **Verification**
    - Run the development server (`npm run dev`) to preview changes.
    - Verify that the skills in the "Timeline" bubbles match the LinkedIn data.
    - Verify that the "About" section reflects the current bio.
