/* ==========================================================================
   PROFILE.JS  —  THIS IS THE ONLY FILE YOU EDIT.
   --------------------------------------------------------------------------
   Change the text between the quote marks. Save the file. Reload the page.
   Do not remove the commas, the quote marks or the braces.

   Items marked [FILL IN] still need your data. Everything else came from the
   2026 basketball resume.

   TO ADD A VIDEO: paste the web address between the quote marks.
   The page accepts Hudl, YouTube, Vimeo and Google Drive addresses.
   It also plays a video file that sits in the video folder.
   ========================================================================== */

const PROFILE = {

  /* ---------------- 1. HEADER ---------------- */
  eyebrow: "Class of 2027 · Uncommitted",
  name: "Milos Vasic",
  tagline: "Small Forward / Power Forward · 6'9\" · The Hotchkiss School (CT)",
  intro: "I am a Class of 2027 forward at The Hotchkiss School in Lakeville, Connecticut. " +
         "I play club basketball for the PSA Cardinals on the Nike EYBL circuit. " +
         "I want a school with a high academic standard and a competitive program.",

  /* Hotchkiss team portrait. To change it, put the new file in the img
     folder and write its name here. The slot is 4 wide by 5 tall. */
  photo: "img/hero-milos.jpg",

  /* The action bar under the headline. Order is deliberate: a coach asks
     "when can I watch him" before anything else.
     url accepts a normal address, a "#section" jump, a "mailto:", or
     "film:<key>" which selects that reel in the film player below. */
  buttons: [
    { label: "Open Gym Schedule",   url: "#schedule", primary: true },
    { label: "Offensive Highlights", url: "film:offense" },
    { label: "Defensive Highlights", url: "film:defense" },
    { label: "Email Milos",          url: "mailto:Mvilos382@gmail.com" },
    { label: "Email Coach Busacca",  url: "mailto:jbusacca@hotchkiss.org" },
    { label: "Hudl Profile",         url: "https://www.hudl.com/profile/23889377/Milos-Vasic" }
  ],

  /* ---------------- 1b. VISIT TRACKER ----------------
     The campaign puts a short code on the link it emails to each coach:
       https://milosvasic2027.github.io/?c=a1b2c3d4
     When the page opens with that code, it tells the campaign sheet.
     Clear this address to turn the tracking off. */
  tracker: "https://script.google.com/macros/s/AKfycbwWImK7ZBrYjXaLaZrJWLFar8NESj1HKeJ8OGx2160twR6FIuWOhyRfy_bhW22YEIHF/exec",

  /* ---------------- 2. STAT STRIP ---------------- */
  stats: [
    { value: "2027",   label: "Class" },
    { value: "6'9\"",  label: "Height" },
    { value: "205",    label: "Weight (lb)" },
    { value: "SF/PF",  label: "Position" },
    { value: "U18",    label: "Serbia National Team" },
    { value: "#0",     label: "Hotchkiss" }
  ],

  /* ---------------- 2b. SCHEDULE ---------------- */
  /* type controls the colour of the tag: "Open Gym", "Game" or "Showcase".
     Add a row by copying one line. Keep the newest date at the top. */
  scheduleIntro: "Where to watch Milos play. Open gyms are listed alongside " +
                 "games, because a coach can see more in an open gym than in a blowout.",
  schedule: [
    { date: "September 21, 2026", type: "Open Gym", event: "Hotchkiss preseason open gym",
      location: "The Hotchkiss School, Lakeville, CT", time: "4:45 PM", note: "" },
    { date: "September 23, 2026", type: "Open Gym", event: "Hotchkiss preseason open gym",
      location: "The Hotchkiss School, Lakeville, CT", time: "1:00 PM", note: "" },
    { date: "September 24, 2026", type: "Open Gym", event: "Hotchkiss preseason open gym",
      location: "The Hotchkiss School, Lakeville, CT", time: "4:45 PM", note: "" },
    { date: "September 26, 2026", type: "Open Gym", event: "Hotchkiss preseason open gym",
      location: "The Hotchkiss School, Lakeville, CT", time: "1:00 PM", note: "" },
    { date: "September 27, 2026", type: "Open Gym", event: "Hotchkiss preseason open gym",
      location: "The Hotchkiss School, Lakeville, CT", time: "11:00 AM", note: "" },
    { date: "September 28, 2026", type: "Open Gym", event: "Hotchkiss preseason open gym",
      location: "The Hotchkiss School, Lakeville, CT", time: "4:45 PM", note: "" },
    { date: "September 30, 2026", type: "Open Gym", event: "Hotchkiss preseason open gym",
      location: "The Hotchkiss School, Lakeville, CT", time: "1:00 PM", note: "" }
  ],
  scheduleNote: "Open gym times come from the Hotchkiss September schedule. Dates can move. " +
                "Email before you travel and Milos will confirm. " +
                "The Hotchkiss athletics site carries the full varsity schedule.",

  /* ---------------- 3. FILM ---------------- */
  filmIntro: "Four reels: offensive highlights, defensive highlights, a September open gym, " +
             "and the steal and dunk from the NEPSAC final. Select a reel to play it. " +
             "Full games are available on request.",

  quote: {
    text: "Ghee is the offensive engine, while fellow returning starters Preston Merrick " +
          "and Milos Vasic give them balance inside and out.",
    source: "New England Recruiting Report \u00b7 Nick Cozzolino \u00b7 February 25, 2026"
  },

  /* ---------------- 3b. PUBLISHED COVERAGE ----------------
     Every entry here must be a real sentence from a real article.
     Keep the source and the date with the text. Do not edit the words. */
  press: [
    {
      text: "Hotchkiss 6'8 wing Milos Vasic takes the sixth spot as his versatility " +
            "on both ends of the floor is impressive.",
      source: "New England Recruiting Report \u2014 Connecticut 2027 Ranking Drop (No. 6 in Connecticut)",
      date:   "January 8, 2025",
      url:    "https://www.newenglandrecruitingreport.com/"
    },
    {
      text: "A new name to know in New England is Milos Vasic. His two-way play is impressive " +
            "as he shows great defensive intangibles, and has a smooth shooting stroke at his size.",
      source: "New England Recruiting Report",
      date:   "October 2, 2024",
      url:    "https://www.newenglandrecruitingreport.com/"
    },
    {
      text: "Vasic is the definition of what teams are looking for in this day in age as a big wing.",
      source: "Prep Hoops \u00b7 Mickey Parrella",
      date:   "September 8, 2024",
      url:    "https://prephoops.com/"
    }
  ],
  pressNote: "Reports from 2024 and 2025 list Milos at 6 feet 8 inches. " +
             "He measures 6 feet 9 inches in 2026.",

  /* ------------------------------------------------------------------
     FILM INDEX. The first entry with a "video" loads in the big player.
     Click a card to swap the player.

     video: an address the page can play — a YouTube link, a Vimeo link,
            a Google Drive link, or a file inside the video folder.
     link:  use this INSTEAD of video for a card that opens a new tab
            (Hudl profiles do not embed reliably).
     thumb: optional picture for the card. A YouTube thumbnail is automatic.
     ------------------------------------------------------------------ */
  films: [
    {
      key:   "offense",
      title: "Offensive Highlights 2026",
      note:  "Hotchkiss varsity. Two minutes forty seconds.",
      video: "video/milos-vasic-offense-2026.mp4",
      poster: "img/poster-offense.jpg"
    },
    {
      key:   "opengym",
      title: "Open Gym \u00b7 September 2026",
      note:  "Hotchkiss preseason, September 11, 2026. Ninety seconds, unedited, " +
             "no cuts and no commentary.",
      video: "video/milos-open-gym-sept-2026.mp4",
      poster: "img/poster-open-gym.jpg"
    },
    {
      key:   "final",
      title: "NEPSAC Final \u00b7 Steal and Dunk",
      note:  "Hotchkiss against Phillips Academy Andover, March 8, 2026. " +
             "Milos takes the ball away and finishes at the other end.",
      video: "video/milos-nepsac-final-dunk.mp4",
      poster: "img/poster-final-dunk.jpg"
    },
    {
      key:   "defense",
      title: "Defensive Highlights 2026",
      note:  "Hotchkiss varsity. One minute twenty seconds. Press work, " +
             "closeouts and rim protection.",
      video: "video/milos-vasic-defense-2026.mp4",
      poster: "img/poster-defense.jpg"
    },
    {
      title: "Full Game \u2014 [FILL IN opponent]",
      note:  "[FILL IN date and result.]",
      video: "",                       // [FILL IN] unlisted YouTube link
      thumb: ""
    },
    {
      title: "Hudl Profile",
      link:  "https://www.hudl.com/profile/23889377/Milos-Vasic",
      thumb: "img/milos-portrait.jpg",
      badge: "Hudl"
    }
  ],

  /* Cards under the film. Leave url empty and the card shows as 'Link to come'. */
  profileLinks: [
    { label: "Hudl",       url: "https://www.hudl.com/profile/23889377/Milos-Vasic", note: "Full highlight library" },
    { label: "Prep Hoops", url: "https://prephoops.com/player/milos-vasic",          note: "Scouting profile" },
    { label: "Instagram",  url: "https://instagram.com/vmilos13",                    note: "@vmilos13" },
    { label: "Field Level", url: "",                                                 note: "[FILL IN your Field Level address]" },
    { label: "Hudl Game Film", url: "",                                              note: "[FILL IN the Hudl game links]" }
  ],

  /* ---------------- 4. ACADEMICS ---------------- */
  academicsIntro: "Academics decide my list. Please ask for a transcript at any time.",
  academicsTable: [
    ["School",          "The Hotchkiss School, Lakeville, CT"],
    ["Graduation year", "2027"],
    ["Conference",      "Founders League / NEPSAC Class A"],
    ["Head coach",      "Coach Busacca"],
    ["Cumulative GPA",  "3.5"],
    ["SAT",             "Results pending"],
    ["ACT",             "Not taken"],
    ["Academic honors", "[FILL IN]"]
  ],
  academicsList: [
    "<b>Current courses:</b> [FILL IN]",
    "<b>Advanced work:</b> [FILL IN]",
    "<b>Intended major:</b> [FILL IN]",
    "<b>Languages:</b> English, Serbian",
    "<b>Nationality:</b> American and Serbian",
    "<b>Hometown:</b> New York, New York",
    "<b>Measurements:</b> 6'9\" and 205 lb (206 cm and 93 kg)"
  ],

  /* ---------------- 5. SERBIA U18 ---------------- */
  serbiaTitle: "Serbia U18 National Team Program",
  serbiaIntro: "In 2026 the Basketball Federation of Serbia called me up to the men's " +
               "U18 national team. I came through the invitational camp into the national " +
               "team training group. I trained with the squad in Belgrade in May and again " +
               "in June. The federation announced the sessions on its official channel.",
  serbiaVideo: "",                       // [FILL IN] optional clip
  serbiaPoster: "",
  serbiaList: [
    "<b>Program:</b> Serbia men's U18 national team",
    "<b>Governing body:</b> Basketball Federation of Serbia (KSS)",
    "<b>First call-up:</b> preparations in Belgrade, May 25 to 27, 2026, at the Institute of Sports and Sports Medicine",
    "<b>Second call-up:</b> two weeks of preparations from June 22, 2026, in Belgrade",
    "<b>Listed as:</b> Vasi\u0107 Milo\u0161 \u2014 Hotchkiss School, Connecticut (USA)",
    "<b>Called up by:</b> Nenad Krsti\u0107, Vice President of the Men's National Teams of Serbia",
    "<b>Selection:</b> came through the invitational camp into the national team training group",
    "<b>Named in:</b> the 18-player group for the European Championship preparations",
    "<b>Alongside:</b> players from Real Madrid, Bayern Munich, Partizan, Crvena zvezda and Mega",
    "<b>Standing:</b> among the top prospects of his age group in Serbia"
  ],

  /* The federation post that leads the section. A US coach cannot read Cyrillic,
     so the translation carries the meaning. */
  serbiaFeature: {
    src: "img/serbia-kss-post.jpg",
    alt: "Basketball Federation of Serbia announcement of the men's U18 control training sessions",
    source: "Basketball Federation of Serbia (KSS) · official announcement",
    headline: "МУШКА У18 РЕПРЕЗЕНТАЦИЈА ОДРЖАЛА КОНТРОЛНЕ ТРЕНИНГЕ",
    translation: "The men's U18 national team held control training sessions.",
    note: "Milos stands at the right end of the back row, beside the coaching staff."
  },

  serbiaLinks: [
    { label: "Basketball Federation of Serbia — official site", url: "https://kss.rs/" },
    { label: "@kssrbije on Instagram — federation account",     url: "https://instagram.com/kssrbije" },
    { label: "KSS \u00b7 \u201cMen\u2019s U18 national team started preparations for the European Championship\u201d, June 23, 2026",
      url: "https://kss.rs/muska-u18-reprezentacija-pocela-pripreme-za-evropsko-prvenstvo/" }
  ],
  /* Photo gallery. Edit the captions. Add or remove lines freely. */
  serbiaGallery: [
    { src: "img/serbia-dunk.jpg",          caption: "Milos finishes at the rim in a camp session." },
    { src: "img/serbia-elevate.jpg",       caption: "Milos rises to the basket during a drill." },
    { src: "img/serbia-team-photo.jpg",    caption: "The U18 squad and the national team staff at the camp hotel." },
    { src: "img/serbia-coaches.jpg",       caption: "Session briefing with the national team staff." },
    { src: "img/serbia-center-circle.jpg", caption: "The group at the center circle before a drill." },
    { src: "img/serbia-huddle.jpg",        caption: "Team huddle at the end of a session." }
  ],

  /* ---------------- 6. OPEN RUNS AND SHOWCASES ---------------- */
  /* COPY ONE BLOCK AND PASTE IT TO ADD AN EVENT. */
  showcaseIntro: "Open runs at Hotchkiss and showcase events. " +
                 "Each card holds a short note and a clip.",
  showcases: [
    {
      date: "July 2025",
      title: "Nike EYBL Peach Jam",
      text:  "PSA Cardinals 16U reached Peach Jam in North Augusta, South Carolina. " +
             "The event takes the top of the EYBL field. " +
             "I was named Defensive Player of the Game more than once.",
      tags:  ["Nike EYBL", "Peach Jam", "2025"],
      video: ""
    },
    {
      date:  "September 11, 2026",
      title: "Hotchkiss Open Gym",
      text:  "Preseason open gym at Hotchkiss, two weeks before the season. " +
             "The clip runs ninety seconds and is unedited, so you see the " +
             "possessions that do not work as well as the ones that do.",
      tags:  ["Open Gym", "Hotchkiss", "2026-27"],
      video: "video/milos-open-gym-sept-2026.mp4",
      poster: "img/poster-open-gym.jpg"
    },
    {
      date:  "[FILL IN month and year]",
      title: "[FILL IN the Hoop Group event name]",
      text:  "A Hoop Group showcase event. Undiscovered Hoops covered the field. " +
             "[FILL IN what you did there \u2014 a stat line, a team result, or a scout note.]",
      tags:  ["Hoop Group", "Showcase"],
      photo: "img/showcase-hoopgroup.jpg",
      focus: "center 12%",
      video: ""
    }
  ],

  /* ---------------- 7. AAU ---------------- */
  aauTitle: "PSA Cardinals · Nike EYBL",
  aauIntro: "I joined the PSA Cardinals in February 2025. " +
            "The program plays the Nike EYBL circuit out of New York.",
  aauVideo: "video/milos-nepsac-final-dunk.mp4",
  aauPoster: "img/poster-final-dunk.jpg",
  aauVideoNote: "Steal and dunk. Hotchkiss against Phillips Academy Andover, " +
                "NEPSAC Class A final, March 8, 2026.",
  aauList: [
    "<b>Team:</b> PSA Cardinals",
    "<b>Circuit:</b> Nike EYBL",
    "<b>Base:</b> New York, New York",
    "<b>Program director:</b> Terrance \"Munch\" Williams",
    "<b>Joined:</b> February 2025",
    "<b>2025 result:</b> Reached the Nike EYBL Peach Jam with the 16U team",
    "<b>2026 season:</b> On the PSA Cardinals roster alongside top United States prospects. " +
      "Milos missed Peach Jam because he was with the Serbia U18 national team.",
    "<b>Recognition:</b> Defensive Player of the Game, more than once at Peach Jam",
    "<b>Averages:</b> [FILL IN points, rebounds, assists]"
  ],

  /* ---------------- 8. HIGH SCHOOL SEASON ---------------- */
  seasonTitle: "Hotchkiss · 2026 NEPSAC Class A Champions",
  seasonIntro: "Hotchkiss entered the 2026 NEPSAC Class A tournament as the fifth seed " +
               "and won all three games.",
  champTitle: "2026 NEPSAC Class A Champion",
  champText:  "Hotchkiss beat Phillips Academy Andover 66-54 in the final at Worcester Academy " +
              "on March 8, 2026. The team entered as the fifth seed and won every tournament game.",
  /* Lead image for this section. Same shape as serbiaFeature.
     tall: true keeps an upright photograph from swallowing the page. */
  seasonFeature: {
    src: "img/nepsac-final-dunk.jpg",
    alt: "Hotchkiss finishes at the rim against Phillips Academy Andover in the 2026 NEPSAC Class A final",
    tall: true,
    source: "2026 NEPSAC Class A Final \u00b7 Worcester Academy \u00b7 March 8, 2026",
    headline: "Hotchkiss 66, Phillips Academy Andover 54",
    note: "Milos finishes at the rim in the championship final."
  },

  /* Game photographs for this section. Run tools/add-media.py on a folder of
     pictures and paste the lines it prints here. Every picture opens full size
     when a visitor clicks it. */
  seasonGallery: [
    { src: "img/game-handle-andover.jpg",
      caption: "Milos handles against two Andover defenders in the final." },
    { src: "img/game-drive-andover.jpg",
      caption: "Milos attacks the rim through contact against Andover." },
    { src: "img/game-number-zero.jpg",
      caption: "Milos wears number 0 for Hotchkiss." },
    { src: "img/nepsac-trophy-celebration.jpg",
      caption: "Hotchkiss lifts the 2026 NEPSAC Class A trophy. Milos is number 0, second from the left." },
    { src: "img/hotchkiss-team.jpg",
      caption: "The 2025-26 Hotchkiss squad. Milos stands in the back row, directly above number 4." }
    /* To add the two-player studio shot, delete the slashes on the next line:
    , { src: "img/hotchkiss-duo.jpg", caption: "Milos, number 0, with a teammate." } */
  ],

  seasonVideo: "video/milos-nepsac-final-dunk.mp4",
  seasonPoster: "img/poster-final-dunk.jpg",
  seasonList: [
    "<b>Title:</b> 2026 NEPSAC Class A Champion",
    "<b>Final:</b> Hotchkiss 66, Phillips Academy Andover 54",
    "<b>Site and date:</b> Worcester Academy, March 8, 2026",
    "<b>Seed:</b> Fifth. The team won all three tournament games.",
    "<b>My role:</b> Returning starter on the varsity team",
    "<b>Ranking:</b> Number 5 power forward and number 39 overall, New England Class of 2027 (Prep Hoops, January 2026)",
    "<b>Recognition:</b> Defensive Player of the Game, more than once in 2025-26",
    "<b>Head coach:</b> Coach Busacca",
    "<b>Jersey number:</b> 0",
    "<b>My averages:</b> [FILL IN points, rebounds, blocks]"
  ],

  /* ---------------- 9. CONTACT ---------------- */
  /* Head-and-shoulders picture beside the contact cards. */
  contactPhoto: "img/milos-headshot.jpg",

  contacts: [
    { role: "Player",               name: "Milos Vasic",
      detail: "Mvilos382@gmail.com \u00b7 929-418-5666" },
    { role: "Parent",               name: "Ninoslav Vasic",
      detail: "Ninoslav.vasic@gmail.com" },
    { role: "High School Coach",    name: "Coach Busacca",
      detail: "The Hotchkiss School \u00b7 jbusacca@hotchkiss.org" },
    { role: "AAU Program Director", name: "Terrance \"Munch\" Williams",
      detail: "PSA Cardinals \u00b7 psa.mitch@gmail.com" }
  ],

  footer: "Milos Vasic · Class of 2027 · The Hotchkiss School, Lakeville CT · Updated " +
          new Date().toLocaleDateString("en-US",{month:"long",year:"numeric"})
};
