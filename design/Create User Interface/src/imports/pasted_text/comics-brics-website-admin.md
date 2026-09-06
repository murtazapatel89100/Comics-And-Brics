# COMICS & BRICS — COMPLETE WEBSITE + ADMIN SYSTEM
## PHASE 1: UI/UX DESIGN AND INTERACTIVE PROTOTYPE ONLY

You are continuing an existing Figma Make project for the **COMICS & BRICS** website.

IMPORTANT:

The public-facing website has ALREADY been designed.

The existing pages are:

1. HOME
2. EXPLORE / COLLECTION
3. GAMES
4. VISIT

These existing pages are the approved visual and UX foundation.

DO NOT redesign the existing public website.

Your task is to extend the existing project into a complete **COMICS & BRICS website + administrative management system**, based on the supplied business requirements.

This phase is ONLY for:

- UI design
- UX design
- information architecture
- responsive layouts
- components
- navigation
- forms
- tables
- dashboards
- filters
- modals
- states
- prototype interactions
- realistic mock data

DO NOT implement a real backend yet.

---

# 1. MOST IMPORTANT RULE

## PRESERVE THE EXISTING PUBLIC WEBSITE

The current public website is already designed.

Do not replace it.

Do not redesign it.

Do not change its:

- layout
- section order
- navigation
- typography system
- image placement
- card structure
- button structure
- spacing system
- content hierarchy
- page structure
- visual language

The current public website should remain the visual source of truth.

You are adding functionality and additional UI around it.

---

# 2. EXISTING PUBLIC WEBSITE

The current public-facing site contains:

### HOME
- Hero
- Comics / Board Games / Community
- Games section
- Events
- Footer

### EXPLORE
- Comic collection
- Search
- Categories
- Comic cards

### GAMES
- Game categories
- Game cards
- Players
- Time
- Difficulty
- Game-related CTA

### VISIT
- Location
- Hours
- Games
- Comics
- Images
- Upcoming events
- RSVP
- Visit CTA

Keep these pages.

---

# 3. BUSINESS REQUIREMENTS

The system needs to eventually support:

## BOARD GAMES

- List of board games
- Categorization by:
  - type
  - number of players
  - complexity
  - popularity
  - franchise
- User reviews and ratings
- Review approval before public display
- New additions
- Unboxing
- Accessories
- Planned tournaments
- Getaways
- News
- Blogs
- Vlogs
- Reservations
- Table reservations
- Game reservations
- Game master reservations
- Request to join table/game

## COMICS

- Comic list
- New additions
- Movie universe connections
- Blogs
- Vlogs
- Reviews
- Reservations
- Maximum 3 comic reservations at a time

## LEGOS

- Complete sets
- Events
- Reservations

## ACTION FIGURES

- List
- New additions
- Unboxing

## FOOD

- Menu
- Fixed menu
- Daily specials
- Table reservations

## EVENTS

- Parties
- Events
- Event management

## FRANCHISE CONTENT

Examples:
- Harry Potter
- Lord of the Rings
- etc.

## SOCIAL / COMMUNITY

- Instagram
- Facebook
- Twitter/X
- WhatsApp community
- Email subscriptions
- User forums

---

# 4. USER ROLES

The requirements define multiple user levels.

Design the UI around these roles:

## SUPER ADMIN

Full system control.

Permissions include:

- Add
- Modify
- Delete
- Manage comic books
- Manage board games
- Manage food
- Manage blogs
- Manage ratings/reviews
- Manage distribution lists
- Manage users
- Manage admins
- Manage employees
- Manage events
- Manage stock
- Manage calendars
- Manage website content

---

## ADMIN

Operational management.

Permissions include:

- Add stock
- Approve events
- Create C&B blogs
- Create vlogs
- Create unboxing content
- Manage/block calendar
- Employee management
- Manage blogs
- Modify marquee
- Modify daily event flash

---

## MARKETING

Content and promotional management.

Permissions include:

- Add blogs
- Add vlogs
- Add unboxing content
- Announce events
- Manage promotional content
- Manage social/community announcements

---

## USER

Customer-facing capabilities:

- View board games
- View action figures
- View comics
- View menu
- Make reservations
- Submit reviews
- Submit ratings
- Request games
- Request to join tables/games
- Subscribe to email
- Access community features

---

# 5. IMPORTANT ROLE DESIGN PRINCIPLE

Do NOT create four completely different dashboards.

Create one coherent admin application with permissions determining what each role can see and do.

For example:

SUPER ADMIN
→ sees everything

ADMIN
→ sees operational sections

MARKETING
→ sees content/marketing sections

USER
→ does NOT access the admin dashboard

The prototype should demonstrate this concept visually.

---

# 6. ADMIN APPLICATION

Create a dedicated internal admin interface.

It should feel like a professional management system rather than a marketing website.

The public website is:

PLAYFUL + EDITORIAL + BRAND-DRIVEN

The admin dashboard is:

CLEAN + PRACTICAL + INFORMATION-DENSE + PROFESSIONAL

Still use the Comics & Brics brand identity.

---

# 7. ADMIN VISUAL SYSTEM

Use the existing Comics & Brics visual language.

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

Use colors semantically.

YELLOW:
- primary actions
- events
- important highlights

BLUE:
- games
- game requests
- informational content

CORAL:
- events
- community
- attention states

GREEN:
- confirmed
- approved
- active
- successful

RED:
- destructive actions
- rejected
- cancelled

Do not make the admin dashboard overly colorful.

---

# 8. TYPOGRAPHY

Use the established website typography system.

Headings:
Manrope ExtraBold

UI:
Manrope SemiBold / Bold

Body:
Inter

Do not introduce decorative comic fonts.

---

# 9. ICON SYSTEM

Use Phosphor Icons consistently.

Default:
Phosphor Regular / Medium

Use Bold only where appropriate.

Do not use emojis.

---

# 10. ADMIN SHELL

Create a persistent admin layout.

Desktop:

LEFT SIDEBAR
+
TOP BAR
+
MAIN CONTENT

Sidebar:

COMICS & BRICS
ADMIN

Then:

Dashboard

Content
- Comics
- Board Games
- Legos
- Action Figures
- Food
- Franchises

Operations
- Reservations
- Game Requests
- Events
- Calendar
- Stock

Content & Marketing
- Blogs
- Vlogs
- Unboxing
- Announcements
- Marquee / Daily Flash
- Distribution Lists

Community
- Reviews & Ratings
- Users
- Forums
- Social / Community

Administration
- Employees
- Admins
- Settings

At bottom:

View Website

Admin Profile

---

# 11. SIDEBAR BEHAVIOR

The sidebar should support grouped navigation.

Groups can collapse.

Show active section clearly.

Use icons.

Do not make every navigation item visually loud.

The current section should be immediately obvious.

---

# 12. TOP BAR

Create:

Breadcrumbs

Search

Notifications

Admin profile

Example:

COMICS & BRICS / EVENTS

Search the dashboard...

Notifications

ADMIN

Use appropriate Phosphor icons.

---

# 13. ADMIN DASHBOARD HOME

Create a useful overview dashboard.

Heading:

GOOD MORNING, COMICS & BRICS.

Supporting text:

Here's what's happening at the cafe today.

---

# 14. OVERVIEW STATISTICS

Create cards for:

TODAY'S RESERVATIONS

12

UPCOMING EVENTS

6

PENDING GAME REQUESTS

8

PENDING REVIEWS

5

ACTIVE GAMES

124

COMICS IN COLLECTION

2,000+

---

# 15. TODAY'S OPERATIONS

Create sections for:

Today's reservations

Upcoming events

Pending game requests

Pending reviews

Calendar conflicts

Use realistic mock data.

---

# 16. QUICK ACTIONS

Create quick-action buttons:

+ CREATE EVENT

+ ADD GAME

+ ADD COMIC

+ ADD FOOD ITEM

+ CREATE BLOG

+ ADD STOCK

These should open their respective UI flows.

---

# 17. EVENTS MANAGEMENT

Create a complete Events section.

Navigation:

Events

---

## EVENT LIST

Show:

Event
Date
Time
Category
Registrations
Capacity
Status
Actions

Statuses:

Draft
Published
Full
Cancelled
Pending Approval

Actions:

View
Edit
Delete

---

# 18. CREATE EVENT

Create a complete form.

Fields:

Event Name

Event Image

Event Category

Description

Date

Start Time

End Time

Location

Capacity

Registration Type

Registration URL

Price

Organizer

Status

Featured Event

---

# 19. EVENT CATEGORIES

Support:

Party

Tournament

Comic Meetup

Board Game Event

Workshop

Community

Getaway

Other

---

# 20. EVENT APPROVAL

Because Admin can approve events, create an approval workflow.

Example:

MARKETING CREATES EVENT

↓

PENDING APPROVAL

↓

ADMIN REVIEWS

↓

APPROVE

or

REJECT

Once approved:

PUBLISHED

---

# 21. EVENT EDITING

Create:

Edit Event

Save Changes

Save Draft

Publish

Delete

Include confirmation modal before deletion.

---

# 22. EVENT DETAIL PAGE

Show:

Event image

Title

Date

Time

Description

Capacity

Registrations

Status

Organizer

Registration information

Activity/history placeholder

Actions:

Edit

Publish

Cancel

Delete

---

# 23. RESERVATIONS

Create a dedicated Reservations section.

It must support:

TABLE RESERVATIONS

GAME RESERVATIONS

GAME MASTER RESERVATIONS

COMIC RESERVATIONS

LEGO RESERVATIONS

---

# 24. RESERVATION DASHBOARD

Create tabs:

All

Tables

Games

Game Master

Comics

Legos

---

# 25. RESERVATION FILTERS

Include:

Today

Upcoming

Past

Pending

Confirmed

Cancelled

Search

Date

Time

Customer

---

# 26. TABLE RESERVATIONS

Show:

Customer

Date

Time

Guests

Table

Special Request

Status

Actions

Example statuses:

Pending

Confirmed

Cancelled

Completed

---

# 27. TABLE RESERVATION DETAIL

Show:

Customer name

Contact

Date

Time

Party size

Table

Special requests

Created date

Status

Actions:

Confirm

Edit

Cancel

---

# 28. GAME RESERVATIONS

Show:

Customer

Game

Date

Time

Players

Game Master

Status

Actions

---

# 29. GAME RESERVATION DETAIL

Show:

Customer

Game

Number of players

Date

Time

Game Master

Experience level

Special request

Status

Actions:

Confirm

Assign Game Master

Edit

Cancel

---

# 30. GAME MASTER

Create a Game Master management concept.

Show:

Game Master

Availability

Games supported

Upcoming sessions

Status

Allow admin to assign a Game Master to a game reservation.

---

# 31. COMIC RESERVATIONS

Create comic reservation management.

Show:

Customer

Comic

Reserved on

Expiry

Status

Important business rule:

A user can have a maximum of 3 comic reservations at one time.

Make this visible in the UI.

Example:

2 / 3 ACTIVE RESERVATIONS

If a customer reaches 3:

LIMIT REACHED

---

# 32. LEGO RESERVATIONS

Create a simple reservation management interface.

Show:

Customer

LEGO Set

Date

Time

Status

Actions

---

# 33. GAME REQUESTS

Create a dedicated Game Requests section.

This is separate from confirmed game reservations.

A customer can request:

"I want to play Warhammer 40K."

Admin reviews the request.

---

# 34. GAME REQUEST LIST

Show:

Customer

Requested Game

Players

Preferred Date

Preferred Time

Experience

Status

Actions

Statuses:

Pending

Accepted

Rejected

Converted to Reservation

---

# 35. GAME REQUEST DETAIL

Show:

Customer

Contact

Game

Players

Preferred date

Preferred time

Experience level

Message

Status

Actions:

Accept

Reject

Contact Customer

Convert to Reservation

---

# 36. GAME REQUEST FLOW

Design this prototype flow:

USER REQUEST

↓

PENDING

↓

ADMIN REVIEWS

↓

ACCEPT

↓

GAME RESERVATION

OR

↓

REJECT

---

# 37. BOARD GAME MANAGEMENT

Create:

Board Games

---

## GAME LIST

Columns:

Game

Image

Players

Complexity

Type

Popularity

Franchise

Availability

Status

Actions

---

# 38. ADD BOARD GAME

Form:

Game Name

Image

Description

Players

Minimum Players

Maximum Players

Playing Time

Complexity

Type

Popularity

Franchise

Rules / Notes

Availability

Featured

---

# 39. GAME CATEGORIES

Allow UI for:

Type

Players

Complexity

Popularity

Franchise

Create filter controls.

---

# 40. GAME DETAILS

Create a detail page showing:

Game image

Description

Players

Duration

Complexity

Type

Popularity

Franchise

Availability

Reviews

Ratings

Related content

Upcoming events

Reservations

---

# 41. GAME REVIEWS

Create review management.

Show:

Customer

Game

Rating

Review

Date

Status

Actions

Statuses:

Pending

Approved

Rejected

---

# 42. REVIEW APPROVAL

Reviews submitted by users should NOT automatically appear publicly.

Create:

PENDING REVIEW

↓

ADMIN APPROVES

↓

PUBLICLY VISIBLE

or:

REJECT

↓

NOT PUBLIC

---

# 43. COMIC MANAGEMENT

Create:

Comics

---

## COMIC LIST

Show:

Comic

Cover

Author

Publisher

Genre

Franchise

Availability

Status

Actions

---

# 44. ADD COMIC

Fields:

Title

Cover Image

Author

Publisher

Description

Genre

Franchise

Movie Universe Connection

Availability

Featured

---

# 45. MOVIE UNIVERSE CONNECTIONS

Create a UI concept allowing comics to be associated with movie/franchise universes.

Example:

MARVEL

DC

OTHER

Use relationship-style UI.

---

# 46. COMIC RESERVATION LIMIT

Clearly communicate:

MAXIMUM 3 ACTIVE COMIC RESERVATIONS PER USER

This should be represented both in admin management and the eventual user-facing flow.

---

# 47. LEGO MANAGEMENT

Create:

LEGO Sets

List

Add Set

Edit

Delete

View

Reservation management

Events associated with LEGO

---

# 48. ACTION FIGURE MANAGEMENT

Create:

Action Figures

List

Add Figure

Edit

Delete

View

New Addition

Unboxing Content

---

# 49. FOOD MANAGEMENT

Create:

Food

---

## MENU

Show:

Item

Image

Category

Price

Availability

Featured

Status

Actions

---

# 50. FOOD CATEGORIES

Examples:

Coffee

Tea

Snacks

Meals

Desserts

Drinks

Other

---

# 51. FIXED MENU / DAILY SPECIALS

Create tabs:

FIXED MENU

DAILY SPECIALS

Allow UI to:

Add

Edit

Delete

Publish

Unpublish

---

# 52. BLOG MANAGEMENT

Create:

Blogs

---

## BLOG LIST

Show:

Title

Author

Category

Published Date

Status

Views

Actions

Statuses:

Draft

Pending Review

Published

Archived

---

# 53. CREATE BLOG

Fields:

Title

Cover Image

Content

Category

Author

Tags

Publish Date

Status

Featured

---

# 54. VLOGS

Create a similar management interface for:

Vlogs

Video thumbnail

Title

Description

Video URL

Category

Status

Publish date

---

# 55. UNBOXING CONTENT

Create management for:

New comic additions

New game additions

Action figure unboxing

LEGO additions

Board game unboxing

Allow:

Create

Edit

Delete

Publish

---

# 56. MARKETING DASHBOARD

Marketing should have access to:

Blogs

Vlogs

Unboxing

Events announcements

Social announcements

Marquee

Daily Event Flash

---

# 57. MARQUEE / DAILY EVENT FLASH

Create a simple content-management UI.

Example:

CURRENT MARQUEE

"GAME NIGHT EVERY THURSDAY"

Enable / Disable

Edit Message

Preview

Save

---

# 58. EVENT ANNOUNCEMENTS

Create a UI for Marketing to create announcements.

Fields:

Announcement

Image

Link

Start Date

End Date

Status

Preview

Publish

---

# 59. CALENDAR

Create a full calendar section.

Support:

Month

Week

Day

---

# 60. CALENDAR EVENTS

Display:

Table reservations

Game reservations

Game Master sessions

Events

Blocked periods

Staff availability

---

# 61. BLOCK CALENDAR

Admin should be able to block:

Tables

Times

Dates

Game Masters

Rooms / areas

Use:

BLOCK TIME

BLOCK DATE

BLOCK TABLE

---

# 62. STOCK MANAGEMENT

Create:

Stock

---

Show:

Item

Category

Current Stock

Minimum Stock

Status

Last Updated

Actions

Statuses:

In Stock

Low Stock

Out of Stock

---

# 63. ADD STOCK

Create:

+ ADD STOCK

Fields:

Item

Category

Quantity

Supplier

Cost

Date

Notes

---

# 64. EMPLOYEE MANAGEMENT

Create:

Employees

Show:

Employee

Role

Department

Availability

Status

Actions

---

# 65. ADMIN MANAGEMENT

Super Admin should be able to manage admin users.

Show:

Name

Role

Email

Status

Last Active

Actions

---

# 66. ROLE MANAGEMENT

Create a permissions UI.

Example:

                SUPER ADMIN   ADMIN   MARKETING

Events              ✓          ✓         ✓

Games               ✓          ✓

Comics              ✓          ✓

Food                ✓          ✓

Blogs               ✓          ✓         ✓

Reviews             ✓          ✓

Stock               ✓          ✓

Employees            ✓          ✓

Users                ✓

Settings             ✓

Use checkboxes/toggles.

This is UI only.

---

# 67. USER MANAGEMENT

Create:

Users

Show:

Name

Email

Phone

Reservations

Reviews

Game Requests

Comic Reservations

Status

Actions

---

# 68. USER DETAIL

Show:

Customer profile

Reservation history

Game requests

Comic reservations

Reviews

Activity

Status

---

# 69. COMMUNITY / FORUMS

Create a UI concept for user forums.

Show:

Discussion

Author

Replies

Date

Status

Moderation actions

---

# 70. SOCIAL / COMMUNITY

Create a management area for:

Instagram

Facebook

Twitter/X

WhatsApp Community

Email subscriptions

This can initially be a content/link management interface.

Do not integrate real APIs.

---

# 71. EMAIL SUBSCRIPTIONS / DISTRIBUTION LISTS

Create:

Distribution Lists

Show:

List Name

Subscribers

Status

Last Updated

Actions

Examples:

Events

Game Nights

Comic Updates

Marketing

General

---

# 72. USER-FACING RESERVATION EXPERIENCE

Although the admin system is the primary addition, also create the UI concept for the customer reservation flow where needed.

The user should be able to:

Choose reservation type

Choose date

Choose time

Choose people

Choose table/game/etc.

Submit request

Receive confirmation/pending state

---

# 73. USER GAME REQUEST EXPERIENCE

Create a customer-facing UI concept:

REQUEST A GAME

Fields:

Game

Players

Preferred Date

Preferred Time

Experience Level

Message

Submit Request

After submission:

REQUEST RECEIVED

STATUS:
PENDING

---

# 74. USER REVIEW EXPERIENCE

Create:

Rate Game

1–5 stars

Write Review

Submit

After submission:

THANK YOU

Your review is pending approval.

This makes the approval workflow clear.

---

# 75. PUBLIC WEBSITE CONNECTION

The admin system should conceptually control content that appears on the public website.

For example:

Admin creates event
→ event appears on HOME event section
→ event appears on VISIT page
→ event appears in Events area

Admin adds game
→ game appears in GAMES

Admin adds comic
→ comic appears in EXPLORE

Admin modifies menu
→ menu appears on public website

Admin publishes blog
→ blog appears publicly

Admin approves review
→ review becomes visible publicly

This relationship should be reflected in the prototype.

---

# 76. IMPORTANT — DO NOT CREATE DUPLICATE DATA

Do not create separate unrelated versions of:

Games

Events

Comics

Reservations

Users

Reviews

Instead, design the UI as though there is one central system.

For example:

One game record can have:

Game information
+
Reviews
+
Reservations
+
Events
+
Popularity
+
Availability

---

# 77. DASHBOARD SEARCH

Create global search.

Allow searching:

Games

Comics

Events

Users

Reservations

Blogs

Reviews

Stock

Use Phosphor MagnifyingGlass.

---

# 78. FILTERS

Use reusable filters throughout the dashboard.

Examples:

Status

Date

Category

Type

Popularity

Availability

User

Role

---

# 79. TABLE DESIGN

Use clean tables.

Do not make tables visually overwhelming.

Use:

- clear headers
- compact rows
- status badges
- subtle dividers
- action menus

On mobile, convert tables into stacked cards.

---

# 80. CRUD INTERACTIONS

Any management section that supports adding/editing/deleting should have:

CREATE

READ

UPDATE

DELETE

Represent these visually through prototype interactions.

Examples:

+ ADD

Edit

View

Delete

Delete confirmation

---

# 81. DELETE CONFIRMATION

Never make Delete immediately destructive.

Use:

DELETE [ITEM]?

Are you sure you want to delete this?

This action cannot be undone.

CANCEL

DELETE

---

# 82. EMPTY STATES

Create proper empty states.

Examples:

NO EVENTS YET

Create your first event.

NO GAME REQUESTS

You're all caught up.

NO REVIEWS PENDING

Nothing needs your attention.

NO RESERVATIONS

No upcoming reservations.

---

# 83. SUCCESS STATES

Create:

Saved successfully

Event published

Reservation confirmed

Game request accepted

Review approved

Stock updated

---

# 84. ERROR STATES

Create lightweight error states.

Examples:

Unable to save changes.

Please check the highlighted fields.

Do not over-design error states.

---

# 85. RESPONSIVE DESIGN

Everything must work on:

Desktop

Tablet

Mobile

Admin desktop should prioritize information density.

On mobile:

- sidebar becomes drawer/navigation
- tables become cards
- forms become one column
- actions remain accessible
- modals fit viewport
- no horizontal scrolling

---

# 86. PROTOTYPE INTERACTIONS

Make the prototype feel functional.

At minimum demonstrate:

Dashboard
→ Events

Events
→ Create Event

Create Event
→ Save Draft

Create Event
→ Publish

Events
→ Edit

Events
→ Delete
→ Confirmation

Dashboard
→ Reservations

Reservations
→ Details

Reservation
→ Confirm

Reservation
→ Cancel

Dashboard
→ Game Requests

Game Request
→ Details

Game Request
→ Accept

Game Request
→ Reject

Game Request
→ Convert to Reservation

Games
→ Add Game

Games
→ Edit Game

Reviews
→ Approve

Reviews
→ Reject

Blogs
→ Create

Stock
→ Add Stock

Calendar
→ Block Time

Users
→ User Details

---

# 87. MOCK DATA

Use realistic sample content throughout.

Examples:

Games:

Warhammer 40K

Twilight Imperium

D&D One-Shot

Catan

Wingspan

Ticket to Ride

Comics:

Batman: Year One

Watchmen

Akira Vol. 1

Saga Vol. 1

Sandman

Tintin

Events:

Magic: Draft Night

Indie Comic Meetup

Catan Tournament

D&D One-Shot

Use realistic customers and operational information.

This is sample data only.

---

# 88. NO REAL BACKEND

Do NOT implement:

Firebase

Supabase

SQL database

API

Authentication backend

Real email

Real payments

Real Google Forms

Real reservation processing

Real image storage

Real social integrations

Real external services

Everything is mock data.

---

# 89. AUTHENTICATION UI ONLY

You may create a login screen for the admin application.

Create:

COMICS & BRICS ADMIN

Email

Password

Remember me

LOGIN

Forgot password

But do not implement real authentication.

---

# 90. ROLE SWITCHING FOR PROTOTYPE

To demonstrate permissions, optionally create a prototype-only role switcher.

Example:

Viewing as:

SUPER ADMIN

ADMIN

MARKETING

This is only to demonstrate the UI differences.

Do not implement real permissions.

---

# 91. PUBLIC VS ADMIN

Make the distinction obvious.

PUBLIC WEBSITE:

COMICS & BRICS

HOME

EXPLORE

GAMES

VISIT

PLAN YOUR VISIT

ADMIN:

Dashboard

Events

Reservations

Games

Comics

Food

Content

Marketing

Users

etc.

---

# 92. DO NOT TURN THE PUBLIC WEBSITE INTO AN ADMIN PANEL

The existing public pages should remain visually expressive.

The admin system should be functional.

Do not put admin tables, dashboards or management controls on the public website.

Keep the two experiences separate.

---

# 93. DESIGN SYSTEM

Create reusable components.

Components should include:

Button

Icon Button

Input

Textarea

Select

Dropdown

Search

Filter

Tabs

Badge

Status Badge

Table

Card

Modal

Drawer

Toast

Pagination

Date Picker

Time Picker

Calendar

Sidebar

Topbar

Stat Card

Form Section

Empty State

Confirmation Dialog

---

# 94. VISUAL QUALITY

The dashboard must look like a real product that could eventually be developed.

Avoid:

- generic SaaS dashboard templates
- excessive gradients
- glassmorphism
- neon gaming aesthetics
- excessive rounded cards
- unnecessary illustrations
- excessive shadows
- excessive colors
- childish comic graphics

Use the existing Comics & Brics visual identity in a restrained professional way.

---

# 95. INFORMATION HIERARCHY

Every page should answer:

WHAT AM I LOOKING AT?

WHAT NEEDS MY ATTENTION?

WHAT CAN I DO?

WHAT IS THE CURRENT STATUS?

Design accordingly.

Pending actions should be immediately visible.

---

# 96. PRIORITY SYSTEM

Use visual hierarchy for:

HIGH PRIORITY:
Pending reservations
Pending game requests
Pending reviews
Pending event approvals
Low stock
Calendar conflicts

MEDIUM:
Upcoming events
Upcoming reservations
New content

LOW:
General statistics
Historical information

---

# 97. ADMIN DASHBOARD NAVIGATION

Final structure:

DASHBOARD

CONTENT
- Comics
- Board Games
- Legos
- Action Figures
- Food
- Franchises

OPERATIONS
- Reservations
- Game Requests
- Events
- Calendar
- Stock

CONTENT & MARKETING
- Blogs
- Vlogs
- Unboxing
- Announcements
- Marquee / Daily Flash
- Distribution Lists

COMMUNITY
- Reviews & Ratings
- Users
- Forums
- Social / Community

ADMINISTRATION
- Employees
- Admins
- Settings

---

# 98. WHAT TO BUILD NOW

Create the complete UI/UX prototype for:

1. Admin Login
2. Admin Dashboard
3. Events
4. Event Create
5. Event Edit
6. Event Delete confirmation
7. Reservations
8. Table Reservations
9. Game Reservations
10. Game Master
11. Comic Reservations
12. LEGO Reservations
13. Game Requests
14. Game Request Details
15. Accept / Reject Game Request
16. Board Games
17. Add/Edit Board Game
18. Comics
19. Add/Edit Comic
20. LEGO Sets
21. Action Figures
22. Food/Menu
23. Blogs
24. Vlogs
25. Unboxing
26. Reviews & Ratings
27. Calendar
28. Stock
29. Employees
30. Admins / Roles
31. Users
32. Forums
33. Marketing
34. Announcements
35. Marquee / Daily Flash
36. Distribution Lists
37. Settings
38. Relevant user-facing reservation/request states

---

# 99. DO NOT OVERBUILD

This is Phase 1.

Do NOT attempt to determine:

- database schema
- backend architecture
- API architecture
- hosting
- authentication implementation
- payment provider
- email provider
- image storage provider
- notification infrastructure

Those decisions will be made later.

Your job is to establish:

INFORMATION ARCHITECTURE
+
UI
+
UX
+
COMPONENT SYSTEM
+
PROTOTYPE FLOWS

---

# 100. FINAL OBJECTIVE

When finished, the project should feel like:

A complete Comics & Brics digital platform with:

PUBLIC WEBSITE

+

ADMIN MANAGEMENT SYSTEM

+

CUSTOMER RESERVATION FLOWS

+

GAME REQUEST SYSTEM

+

CONTENT MANAGEMENT

+

EVENT MANAGEMENT

+

COMMUNITY MANAGEMENT

+

INVENTORY MANAGEMENT

+

ROLE-BASED ADMIN UI

The public website remains the existing approved design.

The new admin system should feel like a natural extension of that brand.

Most importantly:

**DO NOT REDESIGN THE FOUR EXISTING PUBLIC PAGES.**

Extend the project.

Build the missing system around them.

This is a UI/UX prototype first.

Backend comes later.