# TODO

## UX Improvement Roadmap

The application currently works mostly as a numerology calculator: users enter a name, birth date, or couple data, and the app returns the calculated numbers. The next UX goal is to turn those raw results into guided, contextual interpretations that help users understand what each number means.

## Name-Derived Numbers

Each person has 3 name-derived numbers:

- `Yo Exterior`: calculated from consonants.
- `Yo Interior`: calculated from vowels.
- `Yo Real`: calculated from all letters.

Each of these can result in a number from 1 to 9, so there are 27 interpretation possibilities in total.

Tasks:

- Add a short interpretation for each possible `Yo Exterior` number.
- Add a short interpretation for each possible `Yo Interior` number.
- Add a short interpretation for each possible `Yo Real` number.
- Show these interpretations only after the user calculates their own result.
- Keep the homepage descriptions general, while calculator results reveal the tailored interpretation.
- Replace plain result text with richer result cards.

Suggested result card content:

- Number.
- Calculation label, such as `Yo Exterior`, `Yo Interior`, or `Yo Real`.
- Short interpretation.
- Optional expanded explanation.
- Optional reflection question.

## Birthdate-Derived Numbers

Each person has 1 birthdate-derived number, usually shown as the life number.

Tasks:

- Add 9 short interpretations for birthdate-derived numbers.
- Explain what it means to have each life number, for example what it means to have a `4`.
- Show the interpretation together with the calculated number.
- Add a brief explanation of how the birthdate number was calculated.
- Consider auto-filling this calculator from saved profile data for logged-in users.

## Couples Numbers

The couples section can be expanded beyond showing each person's calculated numbers.

Tasks:

- Add interpretations for each person's name-derived and birthdate-derived numbers.
- Add a compatibility summary between both people.
- Add attraction analysis.
- Add communication style analysis.
- Add strengths and possible friction points.
- Compare repeated, similar, or complementary numbers between both people.
- Present results as a structured couple reading instead of plain rows of numbers.

Possible couple result sections:

- Person 1 summary.
- Person 2 summary.
- Shared strengths.
- Attraction dynamic.
- Compatibility score or compatibility level.
- Communication style.
- Growth opportunities.

## Vocational Analysis

The name-derived number section can include a vocational analysis.

Tasks:

- Add vocational interpretation content based on name-derived numbers.
- Decide whether the vocational reading should use `Yo Exterior`, `Yo Interior`, `Yo Real`, or a combination of all three.
- Show vocational tendencies after the main name interpretation.
- Include practical examples of talents, work styles, and professional environments.

Possible vocational themes:

- Leadership and initiative.
- Cooperation and mediation.
- Communication and creativity.
- Structure and organization.
- Freedom and adaptability.
- Service and responsibility.
- Research and introspection.
- Business and material achievement.
- Humanitarian or closing-cycle work.

## Result UI Improvements

Tasks:

- Replace `innerHTML` result rendering with React state and reusable components.
- Create reusable result card components for numerology outputs.
- Add empty states when the user has not calculated anything yet.
- Add validation feedback when inputs are incomplete or invalid.
- Add example placeholders, such as a sample full name.
- Add a "how this was calculated" explanation for transparency.
- Add a final summary sentence for each completed reading.

## Logged-In User Experience

Tasks:

- Use saved profile data to prefill name and birthdate calculators.
- Let users save completed readings to their history.
- Connect the existing backend `/api/history` route to the frontend.
- Add a profile section for viewing past numerology readings.
- Allow users to quickly recalculate previous readings.

## Content Structure

Suggested data structure:

```js
const nameInterpretations = {
  exterior: {
    1: "...",
    2: "..."
  },
  interior: {
    1: "...",
    2: "..."
  },
  real: {
    1: "...",
    2: "..."
  }
};

const birthdateInterpretations = {
  1: "...",
  2: "..."
};

const vocationalInterpretations = {
  1: "...",
  2: "..."
};
```

## Suggested Implementation Order

1. Add interpretation data for name-derived numbers.
2. Add interpretation data for birthdate-derived numbers.
3. Refactor calculator pages to use React state instead of direct DOM updates.
4. Create reusable result card components.
5. Update `/name-numbers` to show contextual interpretations.
6. Update `/birthdate-numbers` to show contextual interpretations.
7. Add vocational analysis to `/name-numbers`.
8. Expand `/couple-numbers` with structured compatibility sections.
9. Connect reading history to logged-in profiles.
