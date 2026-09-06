# COMICS & BRICS — REDESIGN VISIT PAGE
## MULTI-LOCATION / FRANCHISE EXPERIENCE

Redesign ONLY the existing **VISIT** page of the Comics & Brics website.

The Explore page has already been redesigned and is FINISHED.

DO NOT modify:

- HOME
- EXPLORE
- GAMES
- global navigation
- global footer

The only page being redesigned in this task is:

**VISIT**

---

# IMPORTANT TERMINOLOGY

When this brief says "franchise", it means:

**different Comics & Brics cafe locations / branches.**

It does NOT mean entertainment franchises such as:

- Harry Potter
- Marvel
- DC
- Lord of the Rings
- Star Wars

Do NOT create franchise-world content.

The goal is to design the Visit page so that Comics & Brics can support **multiple physical cafe locations**.

---

# CORE IDEA

The current Visit page should evolve from a simple:

"Where are we?"

page into:

**"FIND YOUR NEAREST COMICS & BRICS."**

The user should be able to:

1. See that Comics & Brics has multiple locations.
2. Choose a location.
3. See that location's information.
4. See what's available there.
5. See events at that location.
6. Get directions.
7. Reserve a table/game at that location.

The design should also work if more locations are added in the future.

---

# PAGE STRUCTURE

Create this overall flow:

1. HERO
2. CHOOSE YOUR LOCATION
3. LOCATION DETAILS
4. WHAT'S AT THIS LOCATION
5. UPCOMING EVENTS
6. PLAN YOUR VISIT
7. FIND US / DIRECTIONS
8. FOOTER

---

# 1. HERO

Create a strong Visit hero.

Headline:

COME HANG OUT.

Supporting text:

Find a Comics & Brics near you and come read, play and hang out.

Use a strong image of the cafe.

The hero should feel:

- welcoming
- social
- energetic
- community-driven
- physical
- location-oriented

Primary CTA:

FIND A LOCATION →

Secondary CTA:

PLAN YOUR VISIT →

Use the existing Comics & Brics button style.

Primary accent:
Yellow

Secondary:
Cream / outlined

---

# 2. CHOOSE YOUR LOCATION

This should be the major new section.

Heading:

FIND YOUR C&B.

Supporting text:

Choose a location to see what's available and plan your visit.

Create a prominent location selector.

---

# LOCATION CARDS

Create a responsive grid of location cards.

Each location card should contain:

- location/city name
- location image
- short address
- opening hours
- availability/status
- small facilities indicators
- GET DIRECTIONS
- VIEW LOCATION

Example prototype locations:

PUNE

MUMBAI

COMING SOON

IMPORTANT:

These are placeholder examples for the UI.

Do NOT claim that Comics & Brics currently has these locations unless actual business information is provided.

If only one real location exists at the moment, design the component so that additional locations can be added later without changing the layout.

---

# LOCATION CARD DESIGN

Each card should feel like a physical destination.

Example:

PUNE

Koregaon Park

OPEN TODAY

12 PM — 11 PM

Games
Comics
Food
Events

VIEW LOCATION →

Use:

Green:
Open / available

Yellow:
Primary accent

Black:
Text / borders

Cream:
Background

Do not make every location card a different color.

---

# LOCATION SELECTION

When the user clicks a location:

PUNE

the page should update to show that location's details.

For the prototype, create a selected-location state.

Example:

Selected location:

PUNE

The selected card should have a clear visual state.

Possible treatment:

- thicker black border
- yellow highlight
- subtle shadow
- selected indicator

Do not use excessive effects.

---

# 3. LOCATION DETAILS

Once a location is selected, show its information.

Heading:

COMICS & BRICS — PUNE

Then show:

ADDRESS

OPENING HOURS

PHONE / CONTACT

AVAILABLE SERVICES

GET DIRECTIONS

RESERVE A TABLE

---

# LOCATION HERO / IMAGE

Use a large location image.

Beside or below it, display the key information.

Desktop:

IMAGE | INFORMATION

Mobile:

IMAGE
↓
INFORMATION

---

# ADDRESS

Show:

ADDRESS

[Location-specific address]

Do not invent the exact address.

Use the currently approved business information when available.

If the final address is not confirmed, use a placeholder.

---

# OPENING HOURS

Show:

TODAY

OPENING HOURS

Use location-specific hours.

The UI should support different opening hours for different branches.

For example:

Monday
12 PM — 11 PM

Tuesday
12 PM — 11 PM

etc.

Do not invent actual hours if they are not confirmed.

---

# CONTACT

Show:

PHONE

EMAIL

SOCIAL

Use appropriate icons.

Phosphor:

Phone
Envelope
InstagramLogo

---

# GET DIRECTIONS

Primary action:

GET DIRECTIONS →

This should be a prototype link/button only.

Do not integrate Google Maps yet.

---

# 4. WHAT'S AT THIS LOCATION

This section should show what a visitor can experience at the selected branch.

Heading:

WHAT'S HERE.

Create cards/items for:

COMICS

BOARD GAMES

LEGOS

ACTION FIGURES

FOOD & DRINKS

EVENTS

The content can vary by location.

This is important because different branches may eventually have different:

- collections
- games
- food
- events
- facilities

---

# LOCATION-SPECIFIC AVAILABILITY

Allow each category to show a small availability indicator.

Example:

COMICS
Available

BOARD GAMES
400+ games

FOOD
Available

EVENTS
3 upcoming

Use realistic mock data.

Do not claim these numbers are actual.

---

# 5. UPCOMING EVENTS

Events should be location-specific.

Heading:

WHAT'S HAPPENING.

Supporting text:

See what's happening at this location.

Create event cards.

Each event should contain:

EVENT NAME

DATE

TIME

LOCATION

DESCRIPTION

AVAILABLE SPOTS

RSVP

Example:

MAGIC: DRAFT NIGHT

Friday · 7 PM

Comics & Brics — Pune

18 / 24 spots

RSVP →

---

# LOCATION FILTER

If the user has not selected a location, allow:

ALL LOCATIONS

PUNE

OTHER LOCATIONS

Once a location is selected, prioritize events for that location.

---

# 6. PLAN YOUR VISIT

Create a strong CTA section.

Heading:

READY TO HANG OUT?

Supporting text:

Pick a location, bring your friends, and we'll take care of the rest.

Primary actions:

RESERVE A TABLE →

RESERVE A GAME →

REQUEST A GAME →

---

# RESERVE A TABLE

Prototype UI only.

Fields:

LOCATION

DATE

TIME

NUMBER OF PEOPLE

NAME

CONTACT

SPECIAL REQUEST

CTA:

REQUEST RESERVATION

After submission:

RESERVATION REQUEST RECEIVED

STATUS:

PENDING

---

# RESERVE A GAME

Prototype UI only.

Fields:

LOCATION

GAME

NUMBER OF PLAYERS

DATE

TIME

GAME MASTER

NAME

CONTACT

SPECIAL REQUEST

CTA:

REQUEST GAME RESERVATION

After submission:

GAME RESERVATION REQUEST RECEIVED

STATUS:

PENDING

---

# REQUEST A GAME

Keep this separate from a confirmed reservation.

Fields:

LOCATION

GAME

NUMBER OF PLAYERS

PREFERRED DATE

PREFERRED TIME

EXPERIENCE LEVEL

MESSAGE

CTA:

SUBMIT REQUEST

After submission:

GAME REQUEST RECEIVED

STATUS:

PENDING

---

# 7. LOCATION COMPARISON

If multiple locations exist, optionally provide a compact comparison section.

Heading:

WHICH C&B IS RIGHT FOR YOU?

Show:

LOCATION

COMICS

GAMES

FOOD

EVENTS

OPENING HOURS

This should NOT become a complicated comparison tool.

Keep it simple.

Example:

PUNE
✓ Comics
✓ Games
✓ Food
✓ Events

OTHER LOCATION
✓ Comics
✓ Games
— Food
✓ Events

This demonstrates that different branches can have different offerings.

---

# 8. FIND US

Create a final location section.

Heading:

FIND YOUR WAY TO C&B.

Show:

Selected location

Address

Opening hours

Contact

GET DIRECTIONS

Include a large map placeholder.

Do not integrate an actual map yet.

---

# 9. MULTI-LOCATION DESIGN SYSTEM

The design must support adding more locations later.

Do NOT hard-code the page around one location.

The UI should work for:

1 location

2 locations

5 locations

10+ locations

without requiring a redesign.

Location cards should be reusable.

Location detail sections should be reusable.

---

# 10. LOCATION DATA CONCEPT

Design the UI as if each location has its own information.

Each location may eventually have:

- name
- city
- address
- phone
- email
- opening hours
- images
- games available
- comics available
- LEGO availability
- action figures
- food/menu
- events
- table availability
- game availability
- facilities
- directions URL

Do NOT implement the database.

This is only the conceptual UI structure.

---

# 11. LOCATION-SPECIFIC EVENTS

Events should belong to a location.

For example:

MAGIC: DRAFT NIGHT
→ Pune

D&D ONE-SHOT
→ Mumbai

This means the public website can eventually show:

EVENT
+
LOCATION

instead of assuming every event happens at every branch.

---

# 12. LOCATION-SPECIFIC RESERVATIONS

Reservations must require a location.

For example:

RESERVE A TABLE

Location:
Pune

Date:
Saturday

Time:
7 PM

This is important for future backend architecture.

Do not implement backend now.

---

# 13. FRANCHISE / LOCATION SWITCHER

Create a reusable location switcher.

Possible UI:

CURRENT LOCATION

PUNE ▼

When clicked:

PUNE

MUMBAI

OTHER LOCATION

COMING SOON

The switcher can appear:

- near the location section
- near location-specific content
- or in a compact sticky/location selector

Do not put it into the global navigation unless it looks genuinely useful.

---

# 14. VISIT PAGE CONTENT HIERARCHY

The page should communicate in this order:

WHERE?

↓

WHAT'S THERE?

↓

WHAT'S HAPPENING?

↓

WHAT CAN I DO?

↓

HOW DO I GET THERE?

---

# 15. VISUAL STYLE

Use the existing Comics & Brics visual identity.

Colors:

Cream:
#FFF7E3

Ink:
#171717

Yellow:
#FFD447

Blue:
#5578F5

Coral:
#FF6B61

Green:
#7BC96F

Warm Gray:
#68645C

Warm Stone:
#D9D4C8

Semantic use:

LOCATION / OPEN:
Green

PRIMARY CTA:
Yellow

GAMES:
Blue

EVENTS:
Coral

GENERAL:
Cream + Black

Do not make the page overly colorful.

---

# 16. TYPOGRAPHY

Use:

Headings:
Manrope ExtraBold

UI:
Manrope SemiBold / Bold

Body:
Inter

Keep the existing strong editorial style.

---

# 17. ICONS

Use Phosphor Icons.

Recommended:

Location:
MapPin

Hours:
Clock

Phone:
Phone

Comics:
BookOpen

Games:
DiceFive

Food:
ForkKnife

Legos:
Cube

Events:
CalendarBlank

Reservations:
CalendarCheck

Directions:
ArrowSquareOut

Use consistent sizing and weight.

Do not use emojis.

---

# 18. IMAGERY

Prioritize actual Comics & Brics photography where available.

Location cards should use images that clearly distinguish branches.

For example:

Pune
→ Pune cafe interior

Another location
→ that branch's interior

Do not use random unrelated stock photography.

If images are unavailable, use neutral placeholders clearly designed to accept real location photography later.

---

# 19. ANIMATION

Use subtle interactions.

Location cards:

- slight hover elevation
- image scale
- arrow movement

Location switching:

- smooth content transition

Buttons:

- subtle hover transition

Do not use excessive animation.

---

# 20. RESPONSIVE DESIGN

Desktop:

Large hero

Location grid

Selected location detail

Experience grid

Events

CTA

Map

Mobile:

Hero stacks

Location cards become single column

Location switcher remains easy to access

Selected location information becomes vertical

Experience cards stack

Events stack

Reservation forms become single column

No horizontal overflow.

---

# 21. DO NOT DUPLICATE EXPLORE

Explore already contains:

COMICS

LEGOS

FOOD

EVENTS

Do not rebuild those listing experiences here.

Visit should provide:

- location-specific highlights
- links to Explore
- practical information
- reservation entry points

For example:

EXPLORE COMICS →

VIEW MENU →

SEE EVENTS →

These should link to the existing Explore experience.

---

# 22. DO NOT DUPLICATE GAMES

The existing Games page remains the complete game discovery experience.

On Visit:

PLAY GAMES →

should link to the existing Games page.

Do not recreate the entire game library.

---

# 23. FINAL VISIT PAGE FLOW

The final experience should be:

COME HANG OUT.
        ↓
FIND YOUR C&B.
        ↓
SELECT LOCATION
        ↓
LOCATION DETAILS
        ↓
WHAT'S HERE.
        ↓
COMICS / GAMES / LEGOS / FIGURES / FOOD
        ↓
WHAT'S HAPPENING.
        ↓
LOCATION-SPECIFIC EVENTS
        ↓
READY TO HANG OUT?
        ↓
RESERVE / REQUEST
        ↓
FIND YOUR WAY TO C&B.
        ↓
MAP / DIRECTIONS
        ↓
FOOTER

---

# 24. FINAL OBJECTIVE

Redesign Visit so it works as the central **location discovery and visit-planning page** for a growing Comics & Brics cafe franchise.

It should work beautifully with one location today and multiple locations in the future.

The user should finish the page knowing:

- Which C&B location they want to visit
- What's available there
- What's happening there
- How to reserve
- How to get there

The page should feel like:

**"Choose your C&B. We'll see you there."**

---

# PHASE 1 — UI/UX ONLY

Do NOT implement:

- database
- backend
- authentication
- real reservations
- real event registration
- Google Maps integration
- real location switching
- APIs
- CMS
- payment system

Use realistic mock data.

Design the complete UI, UX, responsive states and prototype interactions now.

The backend and data architecture will be decided later.