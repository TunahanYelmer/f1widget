# F1 Widget Wireframes

This document contains wireframes for all F1 widgets in the application.

---

## 1. Drivers Championship Widget

### Layout Overview
```
┌─────────────────────────────────────────────────────────┐
│ Header (Black Background)                               │
│ ┌─────────────────────────────────────────────────────┐ │
│ │ Driver Standings          [ROUND 4]                 │ │
│ │ 2024 Season                                         │ │
│ └─────────────────────────────────────────────────────┘ │
├─────────────────────────────────────────────────────────┤
│ Scrollable Content (Dark Gray Background)              │
│ ┌─────────────────────────────────────────────────────┐ │
│ │ [1] [Photo] Max Verstappen #1          51 PTS      │ │
│ │             Red Bull Racing                         │ │
│ │     ████████████████████████████░░░░░░░ (progress)  │ │
│ ├─────────────────────────────────────────────────────┤ │
│ │ [2] [Photo] Charles Leclerc #16        47 PTS(-4)   │ │
│ │             Ferrari                                 │ │
│ │     ██████████████████████████░░░░░░░░░ (progress)  │ │
│ ├─────────────────────────────────────────────────────┤ │
│ │ [3] [Photo] Sergio Perez #11           36 PTS(-15)  │ │
│ │             Red Bull Racing                         │ │
│ │     ████████████████████░░░░░░░░░░░░░░░ (progress)  │ │
│ └─────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────┘
```

### Component Breakdown

**Header Section:**
- Background: Black (#000000)
- Title: "Driver Standings" (White, F1Regular900)
- Subtitle: "2024 Season" (Gray, F1Regular400)
- Round Badge: Red background (#F91536) with "ROUND 4"

**Scrollable List (Fixed height: 166 scale units for 3 visible items):**

**Each Driver Card:**
- Background: Dark gray (#1A1A1A)
- Left border: Team color (3 scale units wide)
- Height: 48 scale units
- Components:
  - Position badge (32x32, bordered):
    - Gold border for P1
    - Silver border for P2
    - Bronze border for P3
    - Gray border for others
  - Driver photo (32x32, white background padding)
  - Driver name (White, F1Regular700)
  - Driver number badge (team color background)
  - Team logo (12x12, with opacity)
  - Team name (Gray, F1Regular400)
  - Points (White, large font, F1Regular900)
  - Points difference from leader (Gray, small)
  - Progress bar (2 scale units height, team color fill)

---

## 2. Constructors Championship Widget

### Layout Overview
```
┌─────────────────────────────────────────────────────────┐
│ Header (Black Background)                               │
│ ┌─────────────────────────────────────────────────────┐ │
│ │ Constructor Standings     [ROUND 4]                 │ │
│ │ 2024 Season                                         │ │
│ └─────────────────────────────────────────────────────┘ │
├─────────────────────────────────────────────────────────┤
│ Scrollable Content (Dark Gray Background)              │
│ ┌─────────────────────────────────────────────────────┐ │
│ │ [1] [Logo] Red Bull Racing        87 PTS            │ │
│ │            [#1] [#11]                               │ │
│ │     ████████████████████████████░░░░░░░ (progress)  │ │
│ ├─────────────────────────────────────────────────────┤ │
│ │ [2] [Logo] Ferrari                49 PTS(-38)       │ │
│ │            [#16] [#55]                              │ │
│ │     ██████████████████░░░░░░░░░░░░░░░░░ (progress)  │ │
│ ├─────────────────────────────────────────────────────┤ │
│ │ [3] [Logo] McLaren                38 PTS(-49)       │ │
│ │            [#4] [#81]                               │ │
│ │     ████████████████░░░░░░░░░░░░░░░░░░░ (progress)  │ │
│ └─────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────┘
```

### Component Breakdown

**Header Section:**
- Identical to Drivers Championship
- Title: "Constructor Standings"

**Scrollable List (Fixed height: 166 scale units):**

**Each Constructor Card:**
- Background: Dark gray (#1A1A1A)
- Left border: Team color (3 scale units wide)
- Height: 48 scale units
- Components:
  - Position badge (32x32, same as driver widget)
  - Team logo (28x28, white background with padding)
  - Team name (White, F1Regular700)
  - Driver number badges (team color, showing both drivers)
  - Points (White, large font)
  - Points difference from leader (Gray)
  - Progress bar (2 scale units height, team color fill)

---

## 3. Next Event Widget (Simple Version)

### Layout Overview
```
┌─────────────────────────────────────────────────────────┐
│ Header (Black Background)                               │
│ ┌─────────────────────────────────────────────────────┐ │
│ │ Next Event                [ROUND 9]                 │ │
│ │ 2024 Season                                         │ │
│ └─────────────────────────────────────────────────────┘ │
├─────────────────────────────────────────────────────────┤
│ Event Card (Dark Background)                            │
│ ┌─────────────────────────────────────────────────────┐ │
│ │ [Flag] Spa-Francorchamps        [TAG Heuer Watch]  │ │
│ │        24-28 April                                  │ │
│ ├─────────────────────────────────────────────────────┤ │
│ │ FP1  ............. Fri 10:00                        │ │
│ │ FP2  ............. Fri 14:00                        │ │
│ │ FP3  ............. Sat 11:00                        │ │
│ │ Qualy ............ Sat 15:00                        │ │
│ │ Race ............. Sun 10:00                        │ │
│ └─────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────┘
```

### Component Breakdown

**Header Section:**
- Background: Black
- Title: "Next Event" (White, F1Regular900)
- Subtitle: "2024 Season" (Gray)
- Round badge: Red background with round number

**Event Card:**
- Background: Dark gray (#1A1A1A)
- Pressable component
- Top Section:
  - Country flag (60x40)
  - Circuit name (White, bold)
  - Date range (Gray)
  - TAG Heuer Watch component (60 size)
- Session Schedule:
  - Session name (Left aligned, white)
  - Session time (Right aligned, gray)
  - 5 rows: FP1, FP2, FP3, Qualy, Race

---

## 4. F1 Next Event Widget (Detailed Version)

### Layout Overview
```
┌─────────────────────────────────────────────────────────┐
│ Header (Black Background)                               │
│ ┌─────────────────────────────────────────────────────┐ │
│ │ [Flag] Suzuka Circuit         [Round 8]             │ │
│ │        Japanese Grand Prix                          │ │
│ └─────────────────────────────────────────────────────┘ │
├─────────────────────────────────────────────────────────┤
│ Main Section (Dark Background)                          │
│ ┌─────────────────────────────────────────────────────┐ │
│ │ ┌─────────────────┐ ┌───────────┐ ┌──────────────┐ │ │
│ │ │   COUNTDOWN     │ │   TRACK   │ │  TAG HEUER   │ │ │
│ │ │                 │ │    MAP    │ │    WATCH     │ │ │
│ │ │      03        │ │           │ │              │ │ │
│ │ │     Days       │ │           │ │              │ │ │
│ │ │                 │ │           │ │              │ │ │
│ │ │  12  45  32    │ │           │ │              │ │ │
│ │ │ HRS MIN SEC    │ │           │ │              │ │ │
│ │ └─────────────────┘ └───────────┘ └──────────────┘ │ │
│ ├─────────────────────────────────────────────────────┤ │
│ │ Sessions Schedule                                   │ │
│ │ FP1  .......... FRI 05:30 PM                        │ │
│ │ FP2  .......... FRI 09:00 PM                        │ │
│ │ FP3  .......... SAT 04:30 PM                        │ │
│ │ QUAL .......... SAT 08:00 PM                        │ │
│ │ RACE .......... SUN 08:00 PM                        │ │
│ └─────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────┘
```

### Component Breakdown

**Header Section:**
- Background: Black
- Left side:
  - Circuit name (White, F1Regular900)
  - Grand Prix name (Gray, F1Regular400)
  - Country flag (positioned next to text)
- Right side:
  - Round badge: Red background with round number

**Main Section:**
Three-column layout:

1. **Countdown Column:**
   - Large "Days" display (big number, prominent)
   - Smaller time units in grid below (HRS, MIN, SEC)
   - All values padded to 2 digits

2. **Track Map Column:**
   - Circuit layout image
   - Carbon fiber style background

3. **Watch Column:**
   - TAG Heuer Watch component (80 size)
   - Centered in column

**Sessions Schedule:**
- 5 rows showing all sessions
- Format: Session name (left), Day & Time (right)
- Time formatted as "DAY HH:MM AM/PM"

---

## 5. Previous Event Widget (Podium)

### Layout Overview
```
┌─────────────────────────────────────────────────────────┐
│ Header (Black Background)                               │
│ ┌─────────────────────────────────────────────────────┐ │
│ │ [Flag] Suzuka Circuit           [RACE]              │ │
│ │        Japanese Grand Prix                          │ │
│ └─────────────────────────────────────────────────────┘ │
├─────────────────────────────────────────────────────────┤
│ Podium Display (Dark Background)                        │
│ ┌─────────────────────────────────────────────────────┐ │
│ │      P3           P1           P2                   │ │
│ │   ┌──────┐    ┌──────┐    ┌──────┐                 │ │
│ │   │Carlos│    │ Max  │    │Sergio│                 │ │
│ │   │Sainz │    │Verst.│    │Perez │                 │ │
│ │   │[Flag]│    │[Flag]│    │[Flag]│                 │ │
│ │   │      │    │      │    │      │                 │ │
│ │   │Ferr. │    │ RBR  │    │ RBR  │                 │ │
│ │   │      │    │      │    │      │                 │ │
│ │   │[IMG] │    │[IMG] │    │[IMG] │                 │ │
│ │   │      │    │      │    │      │                 │ │
│ │   │+20.86│    │1:30.0│    │+12.53│                 │ │
│ │   └──────┘    └──────┘    └──────┘                 │ │
│ │    [🥉]        [🥇]        [🥈]                     │ │
│ └─────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────┘
```

### Component Breakdown

**Header Section:**
- Background: Black
- Left side:
  - Circuit name (White, F1Regular900)
  - Grand Prix name (Gray, F1Regular400)
  - Country flag (small, next to text)
- Right side:
  - Event type badge: Red background with "RACE" or "PRACTICE"

**Podium Display:**
Three columns arranged as 3rd, 1st, 2nd (podium style):

**Each Driver Column:**
- Driver first name (White, upper)
- Driver last name with flag (White, bold)
- Team name (Team color text)
- Driver image/photo (large, centered)
- Time display:
  - P1: Actual lap time (e.g., "1:30.067")
  - P2/P3: Time difference with + prefix in race mode
  - Practice mode shows actual times

**Position Badges:**
- Centered below each column
- P1: Gold border (#FFD700)
- P2: Silver border (#C0C0C0)
- P3: Bronze border (#CD7F32)
- Text shows "P1", "P2", "P3"

---

## Design System

### Color Palette

**Base Colors:**
- Background: #1A1A1A (Dark gray)
- Header Background: #000000 (Black)
- Border: #333333 (Medium gray)
- Text Primary: #FFFFFF (White)
- Text Secondary: #666666 (Gray)

**Team Colors:**
- Red Bull: #3671C6 (Blue)
- Ferrari: #F91536 (Red)
- McLaren: #FF8000 (Orange)
- Mercedes: #27F4D2 (Turquoise)
- Aston Martin: #358C75 (Green)
- Alpine: #FF87BC (Pink)
- Williams: #37BEDD (Light blue)
- Visa Cash App RB: #5E8FAA (Steel blue)
- Haas: #B6BABD (Silver)
- Kick Sauber: #52E252 (Lime green)

**Accent Colors:**
- Primary Accent: #F91536 (F1 Red)
- Gold: #FFD700 (1st place)
- Silver: #C0C0C0 (2nd place)
- Bronze: #CD7F32 (3rd place)

### Typography

**Font Family:**
- F1Regular900 (Extra Bold) - Headers, large numbers
- F1Regular700 (Bold) - Subheaders, driver names
- F1Regular400 (Regular) - Body text, subtitles

**Font Sizes (using moderateScale):**
- Large: 16 (Points, main data)
- Medium: 13-14 (Headers, driver names)
- Small: 10 (Subtitles, team names)
- Tiny: 8-9 (Labels, secondary info)

### Spacing System
- Small: 2-4 scale units
- Medium: 8 scale units
- Large: 12 scale units
- Container padding: 8-10 scale units
- Item margin: 8 scale units between list items

### Border Radius
- Cards: 12 scale units
- Components: 8 scale units
- Badges: 6 scale units
- Small elements: 3 scale units

### Common Components

**Position Badge:**
- Size: 32x32 scale units
- Border: 1.5 units
- Border radius: 6 units
- Background: Transparent
- Border color varies by position

**Progress Bar:**
- Height: 2 scale units
- Background: #333333
- Fill: Team color with 0.8 opacity
- Full width of container

**Round Badge:**
- Background: #F91536 (F1 Red)
- Padding: 8 horizontal, 2 vertical
- Border radius: 8 units
- Text: White, F1Regular900

**Driver/Team Photo:**
- Size: 28-32 scale units
- Background: White padding
- Border radius: 6-8 units
