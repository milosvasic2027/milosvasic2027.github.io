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

  buttons: [
    { label: "Watch Offensive Film", url: "#film", primary: true },
    { label: "Email Milos", url: "mailto:Mvilos382@gmail.com", primary: false },
    { label: "Hudl Profile", url: "https://www.hudl.com/profile/23889377/Milos-Vasic", primary: false }
  ],

  /* ---------------- 2. STAT STRIP ---------------- */
  stats: [
    { value: "2027",   label: "Class" },
    { value: "6'9\"",  label: "Height" },
    { value: "200",    label: "Weight (lb)" },
    { value: "SF/PF",  label: "Position" },
    { value: "#39",    label: "New England 2027" },
    { value: "#0",     label: "Hotchkiss" }
  ],

  /* ---------------- 3. FILM ---------------- */
  filmIntro: "Offensive film plays below. Full games are available on request.",

  quote: {
    text: "Vasic is a tremendous prospect that has added a silky-smooth jumper to his long " +
          "frame and wingspan. He gives Hotchkiss balance inside and out.",
    source: "New England Recruiting Report, February 2026"
  },

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
      title: "Offensive Highlights 2026",
      note:  "Hotchkiss varsity. Two minutes forty seconds.",
      video: "video/milos-vasic-offense-2026.mp4",
      poster: "img/poster-offense.jpg"
    },
    {
      title: "Open Gym \u00b7 September 2026",
      note:  "Hotchkiss preseason, September 11, 2026. Ninety seconds, unedited, " +
             "no cuts and no commentary.",
      video: "video/milos-open-gym-sept-2026.mp4",
      poster: "img/poster-open-gym.jpg"
    },
    {
      title: "NEPSAC Final \u00b7 Steal and Dunk",
      note:  "Hotchkiss against Phillips Academy Andover, March 8, 2026. " +
             "Milos takes the ball away and finishes at the other end.",
      video: "video/milos-nepsac-final-dunk.mp4",
      poster: "img/poster-final-dunk.jpg"
    },
    {
      title: "Defensive Highlights 2026",
      note:  "Press defense, rim protection and multi-position coverage.",
      video: "",                       // [FILL IN] paste the unlisted YouTube link
      thumb: "img/serbia-dunk.jpg"
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
    ["Cumulative GPA",  "[FILL IN]"],
    ["SAT",             "[FILL IN]"],
    ["ACT",             "[FILL IN]"],
    ["Academic honors", "[FILL IN]"]
  ],
  academicsList: [
    "<b>Current courses:</b> [FILL IN]",
    "<b>Advanced work:</b> [FILL IN]",
    "<b>Intended major:</b> [FILL IN]",
    "<b>Languages:</b> English, Serbian",
    "<b>Nationality:</b> American and Serbian",
    "<b>Hometown:</b> New York, New York",
    "<b>Measurements:</b> 6'9\" and 200 lb (206 cm and 92 kg)"
  ],

  /* ---------------- 5. SERBIA U18 ---------------- */
  serbiaTitle: "Serbia U18 National Team Program",
  serbiaIntro: "In the summer of 2026 I trained with the Serbia men's U18 national team program. " +
               "The Basketball Federation of Serbia ran the control training sessions and " +
               "announced them on its official channel. The photographs are from those sessions.",
  serbiaVideo: "",                       // [FILL IN] optional clip
  serbiaPoster: "",
  serbiaList: [
    "<b>Program:</b> Serbia men's U18 national team, control training sessions",
    "<b>Governing body:</b> Basketball Federation of Serbia (KSS)",
    "<b>Dates:</b> [FILL IN]",
    "<b>Location:</b> [FILL IN — the team photo shows Hotel Crni Vrh]",
    "<b>Head coach:</b> [FILL IN]",
    "<b>Role:</b> [FILL IN]"
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
    { label: "[FILL IN the exact Instagram post about the U18 sessions]", url: "" }
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
  aauVideo: "",                      // [FILL IN] AAU clip
  aauPoster: "",
  aauList: [
    "<b>Team:</b> PSA Cardinals",
    "<b>Circuit:</b> Nike EYBL",
    "<b>Base:</b> New York, New York",
    "<b>Program director:</b> Terrance \"Munch\" Williams",
    "<b>Joined:</b> February 2025",
    "<b>2025 result:</b> Reached the Nike EYBL Peach Jam with the 16U team",
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
    { role: "Player",            name: "Milos Vasic",    detail: "Mvilos382@gmail.com" },
    { role: "Parent",            name: "Ninoslav Vasic", detail: "Ninoslav.vasic@gmail.com" },
    { role: "High School Coach", name: "Coach Busacca",  detail: "The Hotchkiss School · [FILL IN email and phone]" },
    { role: "AAU Program Director", name: "Terrance \"Munch\" Williams", detail: "PSA Cardinals · [FILL IN email and phone]" }
  ],

  footer: "Milos Vasic · Class of 2027 · The Hotchkiss School, Lakeville CT · Updated " +
          new Date().toLocaleDateString("en-US",{month:"long",year:"numeric"})
};
