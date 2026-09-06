# COMICS & BRICS — REDESIGN THE EXPLORE EXPERIENCE

Redesign the existing EXPLORE section of the Comics & Brics website.

IMPORTANT:
The existing HOME, GAMES and VISIT pages should remain unchanged.

Only redesign the EXPLORE experience.

The goal is to transform EXPLORE from a "comic collection page" into a broader **discovery hub for Comics & Brics**.

---

# NEW EXPLORE INFORMATION ARCHITECTURE

The Explore page should initially present four major categories:

1. COMICS
2. LEGOS
3. FOOD
4. EVENTS

Each category must be represented by a prominent visual card.

When the user clicks a category card, navigate to a dedicated listing page for that category.

Structure:

EXPLORE
│
├── COMICS
│   └── Comics listing page
│
├── LEGOS
│   └── LEGO listing page
│
├── FOOD
│   └── Food / Menu listing page
│
└── EVENTS
    └── Events listing page

Games should NOT be moved into Explore.

The existing GAMES page remains a separate primary navigation destination.

---

# EXPLORE LANDING PAGE

Create a new Explore landing page.

The page should feel like a **discovery hub**, not a generic category grid.

---

## HEADER

Keep the existing global Comics & Brics header.

Navigation:

HOME
EXPLORE
GAMES
VISIT
PLAN YOUR VISIT

EXPLORE should be the active navigation item.

Do not redesign the global header.

---

# HERO

Create a strong introduction.

Headline:

EXPLORE COMICS & BRICS.

Supporting copy:

Comics, collectibles, food, events, and plenty of things to discover.

Keep the typography bold and editorial.

Use the established Comics & Brics typography:

Headings:
Manrope ExtraBold

Body:
Inter

UI:
Manrope SemiBold / Bold

---

# CATEGORY GRID

The main focus of the page should be four large category cards.

Create:

COMICS
LEGOS
FOOD
EVENTS

Use a strong 2 × 2 desktop grid.

The cards should feel substantial and clickable.

Do NOT make them tiny generic navigation cards.

Each card should contain:

- large category title
- short description
- relevant image or visual
- small category label
- arrow / Explore CTA
- strong hover state

---

# CATEGORY CARD — COMICS

Title:

COMICS

Description:

Discover thousands of stories, characters and worlds.

Supporting label:

2000+ TITLES

CTA:

EXPLORE COMICS →

Primary accent:

YELLOW

Use a comic-related image.

The card should communicate:
stories / collection / discovery.

Clicking the card navigates to:

/explore/comics

---

# CATEGORY CARD — LEGOS

Title:

LEGOS

Description:

Explore complete LEGO sets and new additions.

Supporting label:

COLLECTION

CTA:

EXPLORE LEGOS →

Primary accent:

BLUE

Use a LEGO-related image.

Clicking navigates to:

/explore/legos

---

# CATEGORY CARD — FOOD

Title:

FOOD

Description:

Grab a drink, a bite, or check out today's specials.

Supporting label:

MENU

CTA:

VIEW MENU →

Primary accent:

GREEN

Use a food/cafe image.

Clicking navigates to:

/explore/food

---

# CATEGORY CARD — EVENTS

Title:

EVENTS

Description:

Tournaments, meetups, parties, workshops and more.

Supporting label:

WHAT'S HAPPENING

CTA:

SEE EVENTS →

Primary accent:

CORAL

Use an event/community image.

Clicking navigates to:

/explore/events

---

# CARD DESIGN

Keep the existing Comics & Brics design language:

- strong black borders
- controlled corner radius
- subtle hard shadow
- cream/light surfaces
- large typography
- strong imagery
- minimal decoration

Each card should have its own accent color, but do NOT make the entire interface overly colorful.

Use:

COMICS → Yellow
LEGOS → Blue
FOOD → Green
EVENTS → Coral

The four cards should feel like one system.

---

# HOVER INTERACTIONS

Create subtle hover states.

On hover:

- image can scale slightly
- arrow can move slightly
- accent area can become more prominent
- card can shift very slightly
- shadow can become slightly stronger

Keep interactions subtle and professional.

Do not add excessive animation.

---

# COMICS LISTING PAGE

Create a dedicated page reached by clicking COMICS.

Title:

THE COMICS

Supporting copy:

Pick a story. Start exploring.

Include:

Search

Category filters:

ALL
MARVEL
DC
MANGA
INDIAN COMICS
GRAPHIC NOVELS
EUROPEAN

Then create a comic collection grid.

Use the existing comic content/design language.

Example cards:

SAGA VOL 1
BATMAN: YEAR ONE
AKIRA VOL 1
WATCHMEN
AMAR CHITRA KATHA
SPIDER-MAN
TINTIN
SANDMAN

Each card should contain:

Image
Title
Publisher
Availability indicator

Add an optional:

RESERVE

action where appropriate.

---

# COMIC PAGE ADDITIONAL FEATURES

The requirements indicate comics also support:

- new additions
- movie universe connections
- blogs
- vlogs
- reviews

Do NOT overcrowd the primary listing page.

Create a clean listing experience first.

Below or alongside the collection, provide subtle entry points for:

NEW ADDITIONS

REVIEWS

RELATED CONTENT

MOVIE UNIVERSES

These can be prototype sections for now.

---

# LEGO LISTING PAGE

Create a dedicated LEGO page.

Title:

THE LEGO COLLECTION

Supporting text:

Explore complete sets and new additions.

Include:

Search

Filters such as:

ALL
NEW ADDITIONS
AVAILABLE
EVENTS

Create LEGO set cards.

Each card should show:

Image
Set name
Theme / franchise
Availability
Optional reservation action

Example content:

LEGO Harry Potter
LEGO Star Wars
LEGO Technic
LEGO Architecture

Use mock content only.

Do not imply these are actual C&B inventory items.

---

# LEGO PAGE SECTIONS

Include subtle sections for:

COMPLETE SETS

NEW ADDITIONS

LEGO EVENTS

RESERVATIONS

Keep these secondary to the main collection.

---

# FOOD / MENU PAGE

Create a dedicated Food page.

Title:

THE MENU

Supporting copy:

Something good to eat while you read, play and hang out.

Create two major tabs:

FIXED MENU
DAILY SPECIALS

---

# FOOD FILTERS

Optional categories:

ALL
DRINKS
COFFEE
SNACKS
MEALS
DESSERTS

Create clean menu item cards/list items.

Each should contain:

Item name
Description
Price
Category
Image where appropriate
Availability

---

# DAILY SPECIALS

Make Daily Specials visually distinct.

Use:

GREEN

for the primary accent.

Example:

TODAY'S SPECIAL

Item name

Description

Price

AVAILABLE TODAY

This should feel easy for staff to eventually update through the admin system.

---

# EVENTS LISTING PAGE

Create a dedicated Events page.

Title:

WHAT'S HAPPENING

Supporting copy:

There's always something happening at Comics & Brics.

Create event cards/list items.

Each event should show:

Date
Time
Event title
Description
Category
Availability / capacity
RSVP / Register CTA

Example:

MAGIC: DRAFT NIGHT
Friday, 7 PM

INDIE COMIC MEETUP
Saturday, 3 PM

CATAN TOURNAMENT
Sunday, 5 PM

---

# EVENT FILTERS

Use:

ALL

TOURNAMENTS

MEETUPS

WORKSHOPS

PARTIES

COMMUNITY

---

# EVENT STATES

Support visual states:

UPCOMING

FULL

CANCELLED

REGISTRATION OPEN

Use:

CORAL → event emphasis
GREEN → available / open
BLUE → informational
RED → cancelled only

---

# NAVIGATION

The Explore landing page should link to all four category pages.

Each category page should have:

- breadcrumb or back-to-explore link
- page title
- filters/search
- listings
- footer

Example:

EXPLORE / COMICS

EXPLORE / LEGOS

EXPLORE / FOOD

EXPLORE / EVENTS

---

# PUBLIC NAVIGATION

Keep the primary site navigation:

HOME
EXPLORE
GAMES
VISIT
PLAN YOUR VISIT

Do not add:

LEGOS
FOOD
EVENTS

as top-level navigation items.

They belong under Explore.

This keeps the primary navigation simple.

---

# COLOR SYSTEM

Use the established Comics & Brics palette:

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

Semantic usage:

COMICS → YELLOW
LEGOS → BLUE
FOOD → GREEN
EVENTS → CORAL

General UI → CREAM + BLACK

---

# ICON SYSTEM

Use Phosphor Icons.

Suggested:

Comics:
BookOpen

Legos:
Cube

Food:
ForkKnife

Events:
CalendarBlank

Search:
MagnifyingGlass

Explore:
ArrowRight

Reservation:
CalendarCheck

Use consistent icon sizing and weight.

Do not use emojis.

---

# RESPONSIVE DESIGN

Desktop:

2 × 2 category card grid.

Tablet:

2 × 2 or responsive layout depending on available width.

Mobile:

Single-column cards.

Each card should remain visually substantial.

Listing pages should become single-column or 2-column depending on content.

Filters should become horizontally scrollable or stacked appropriately.

No horizontal page overflow.

---

# DESIGN RELATIONSHIP

The redesigned Explore section must feel like it belongs to the existing Comics & Brics website.

Reuse:

- existing header
- existing footer
- existing typography
- existing border treatment
- existing buttons
- existing card language
- existing spacing principles
- existing image treatment

But the Explore page should now have a clearer purpose:

## EXPLORE = DISCOVER EVERYTHING C&B HAS TO OFFER

Comics
Legos
Food
Events

Games remains a dedicated section.

---

# IMPORTANT

Do not redesign HOME.

Do not redesign GAMES.

Do not redesign VISIT.

Only redesign/extend EXPLORE and create its child listing pages.

Do not implement backend.

Use mock data.

Do not connect databases, APIs, Google Forms, Firebase, Supabase or other external services.

The goal is to establish the final UI/UX and information architecture first.

---

# FINAL USER JOURNEY

The finished prototype should demonstrate:

HOME
→ EXPLORE

EXPLORE
→ COMICS
→ LEGOS
→ FOOD
→ EVENTS

COMICS
→ Browse comics

LEGOS
→ Browse LEGO sets

FOOD
→ Browse menu / daily specials

EVENTS
→ Browse upcoming events
→ RSVP / Register prototype state

GAMES remains independently accessible from the main navigation.

The result should feel like a polished discovery experience for Comics & Brics rather than simply a comic database.