/* ════════════════════════════════════════════════════════════════
   CINEFIED · MASTER MOVIE LIST
   One entry per movie. Every game reads the parts it needs.

   Before uploading, always run:   node tools/check.js
   It finds typos, duplicates and missing pieces, checks this file
   against directors.js, and shows how many movies each game can use.

   ── "// check" ──
   A line ending in // check holds something filled in from memory that
   needs verifying. Fix it (or confirm it), then delete the // check.
   The checker counts how many are left.
   level and roles are first guesses for every movie: adjust freely.

   ── RULES ──
   • id      never change it, never reuse it. Lowercase title words
             joined by "-", e.g. 'pokiri'. Add the year only when two
             movies share a title ('kushi-2023').
   • year    0 means not known yet (Higher or Lower and Clue Pool skip it).
   • hero / heroine   one name, or a list for two-hero films:
             ['Jr NTR', 'Ram Charan']
   • director   must match a name in directors.js exactly.
   • Write people's names the SAME way every time.
   • Leave a field '' (or [] / 0) when you don't have it yet.
     A movie is simply skipped by any game that needs the empty part.
   • Comments (// like this) and a comma after the last item are fine.

   ── FIELDS ──
   id, title, aka, year ....... aka = other spellings accepted when typing
   level ...................... how well known: 'easy' 'medium' 'hard'.
                                Used only behind the scenes (e.g. Tier'd),
                                never shown to players as a difficulty choice.
   hero, heroine, director,
   music, villain, banner, genre
   roles ...................... Starring: character names, in this order:
                                hero's role, heroine's role, and a famous
                                third character (villain or comedian) if
                                there is one. 2 or 3 names. [] = not filled.
   stats ...................... Higher or Lower: imdb (0-10), songs, runtime (minutes)
   spoiler .................... Spoiler only: up to 2 story lines, each a full sentence (10+ words) that tells the plot. No vague hints.
                                One is picked at random; each line must work
                                on its own.
   dialogues .................. Dialogue Detective only
   clues ...................... Clue Pool only: job, location, song (title only), scene

   No levels in the games: Charades and Pictionary use every movie
   (Pictionary's drawer picks 1 of 3 random movies).

   Filled automatically from this file: Starring (mixes two kinds of
   round at random: STARRING = hero + heroine + music director, and
   THE CHARACTERS = the roles, with the director as the third clue when
   roles has only 2 names), Director's Cut (directors with 3+ movies),
   Memory Match (hero/heroine and movie pairs), and Clue Pool's genre,
   decade, year, music, villain, banner and director.
   ════════════════════════════════════════════════════════════════ */
(function (root) {
  const MOVIES = [

    /* ── SWITCHED OFF: movies before 2000 ───────────────────
       No game uses anything inside this comment. To bring a movie
       back, cut its whole { ... }, block and paste it below the
       2000s line. Delete this whole comment to bring them all back.

    // ── 1970s ─────────────────────────────────────────────

    {
      id: 'adavi-ramudu',
      title: 'Adavi Ramudu',
      aka: [],
      year: 1977,
      level: 'hard',

      hero: 'N. T. Rama Rao',
      heroine: 'Jaya Prada',
      director: 'K. Raghavendra Rao',
      music: 'K. V. Mahadevan',
      villain: '',   // check
      banner: 'Satya Chitra',   // check
      genre: 'Action drama',
      roles: [],

      stats: { imdb: 6.8, songs: 7, runtime: 180 },   // check

      spoiler: [
        'A forest officer fights a gang of smugglers who exploit tribal people in the jungle.',
        'A man who loves the forest goes undercover to protect its people and its animals.',
      ],
      dialogues: [],

      clues: {   // check
        job: 'Forest officer',
        location: 'A forest',
        song: 'Aaresukoboyi Paaresukunnanu',
        scene: 'The hero rides an elephant into the smugglers\' camp',
      },
    },

    // ── 1980s ─────────────────────────────────────────────

    {
      id: 'sankarabharanam',
      title: 'Sankarabharanam',
      aka: [],
      year: 1980,
      level: 'hard',

      hero: 'J. V. Somayajulu',
      heroine: 'Manju Bhargavi',
      director: 'K. Viswanath',
      music: 'K. V. Mahadevan',
      villain: '',
      banner: 'Poornodaya Movie Creations',
      genre: 'Musical drama',
      roles: ['Sankara Sastry', 'Tulasi'],   // check

      stats: { imdb: 8.8, songs: 10, runtime: 143 },   // check

      spoiler: [
        'A classical singer gives shelter to a dancer and her son, and is shunned by society.',
        'A Carnatic music maestro and a courtesan\'s daughter.',
      ],
      dialogues: [],

      clues: {   // check
        job: 'Classical singer',
        location: 'Rajahmundry',
        song: 'Sankara Naadha Sareera Para',
        scene: 'A great classical singer and a courtesan\'s daughter who reveres him',
      },
    },
    {
      id: 'khaidi',
      title: 'Khaidi',
      aka: [],
      year: 1983,
      level: 'hard',

      hero: 'Chiranjeevi',
      heroine: 'Madhavi',
      director: 'A. Kodandarami Reddy',
      music: 'K. Chakravarthy',
      villain: 'Rao Gopal Rao',
      banner: '',   // check
      genre: 'Action drama',
      roles: [],

      stats: { imdb: 7.6, songs: 6, runtime: 150 },   // check

      spoiler: [
        'A young man falsely accused of a crime escapes from jail to take revenge on the landlord who ruined his life.',
      ],
      dialogues: [],

      clues: {   // check
        job: 'Fugitive',
        location: 'A village',
        song: '',
        scene: '',
      },
    },
    {
      id: 'challenge',
      title: 'Challenge',
      aka: [],
      year: 1984,
      level: 'hard',

      hero: 'Chiranjeevi',
      heroine: 'Vijayashanti',
      director: 'A. Kodandarami Reddy',
      music: 'Ilaiyaraaja',
      villain: 'Rao Gopal Rao',   // check
      banner: '',   // check
      genre: 'Drama',
      roles: [],

      stats: { imdb: 7.6, songs: 6, runtime: 150 },   // check

      spoiler: [
        'An unemployed graduate bets a rich man that he can earn five lakh rupees honestly in five years.',
        'A poor graduate bets a businessman that he can become rich honestly.',
      ],
      dialogues: [],

      clues: {   // check
        job: 'Unemployed graduate',
        location: 'Hyderabad',
        song: '',
        scene: 'A poor graduate shakes hands on a bet with a businessman in front of everyone',
      },
    },
    {
      id: 'geethanjali',
      title: 'Geethanjali',
      aka: [],
      year: 1989,
      level: 'medium',

      hero: 'Nagarjuna',
      heroine: 'Girija Shettar',
      director: 'Mani Ratnam',
      music: 'Ilaiyaraaja',
      villain: '',
      banner: '',   // check
      genre: 'Romantic drama',
      roles: [],   // the character names give the title away, so this movie uses the STARRING round only

      stats: { imdb: 8.3, songs: 6, runtime: 140 },   // check

      spoiler: [
        'A friendly young man moves into a house haunted by a spirit, and the more he tries to ignore it, the more it follows him.',
        'Two young people with little time left fall in love in the hills.',
      ],
      dialogues: [],

      clues: {   // check
        job: 'College graduate',
        location: 'Ooty',
        song: 'O Priya Priya',
        scene: 'Two people who are terminally ill fall in love in Ooty',
      },
    },
    {
      id: 'shiva',
      title: 'Shiva',
      aka: [],
      year: 1989,
      level: 'medium',

      hero: 'Nagarjuna',
      heroine: 'Amala',
      director: 'Ram Gopal Varma',
      music: 'Ilaiyaraaja',
      villain: 'Raghuvaran',
      banner: 'Annapurna Studios',
      genre: 'Crime action',
      roles: [],   // the character names give the title away, so this movie uses the STARRING round only

      stats: { imdb: 8.2, songs: 5, runtime: 165 },   // check

      spoiler: [
        'A college student stands up to a gang leader who controls the student politics of Vijayawada.',
        'A student breaks a bicycle chain and starts a war with a gangster.',
      ],
      dialogues: [],

      clues: {   // check
        job: 'College student',
        location: 'Vijayawada',
        song: 'Botany Paatam Undi',
        scene: 'A college student fights a gangster with a cycle chain',
      },
    },

    // ── 1990s ─────────────────────────────────────────────

    {
      id: 'jagadeka-veerudu-athiloka-sundari',
      title: 'Jagadeka Veerudu Athiloka Sundari',
      aka: [],
      year: 1990,
      level: 'medium',

      hero: 'Chiranjeevi',
      heroine: 'Sridevi',
      director: 'K. Raghavendra Rao',
      music: 'Ilaiyaraaja',
      villain: 'Amrish Puri',
      banner: 'Vyjayanthi Movies',
      genre: 'Fantasy',
      roles: ['Raju', 'Indraja', 'Mahadrashta'],   // check

      stats: { imdb: 8, songs: 6, runtime: 165 },   // check

      spoiler: [
        'A goddess loses her magic ring on Earth, and a tourist guide who finds it refuses to give it back.',
        'An apsara comes down from heaven and lives with a kind-hearted guide and his orphans.',
      ],
      dialogues: [],

      clues: {   // check
        job: 'Tourist guide',
        location: 'Hyderabad and heaven',
        song: 'Abbanee Theeyani Debba',
        scene: 'A goddess loses her ring on earth',
      },
    },
    {
      id: 'kshana-kshanam',
      title: 'Kshana Kshanam',
      aka: [],
      year: 1991,
      level: 'hard',

      hero: 'Venkatesh',
      heroine: 'Sridevi',
      director: 'Ram Gopal Varma',
      music: 'M. M. Keeravani',
      villain: 'Paresh Rawal',
      banner: '',   // check
      genre: 'Thriller',
      roles: ['Chandu', 'Satya', 'Nayar'],   // check

      stats: { imdb: 7.9, songs: 5, runtime: 145 },   // check

      spoiler: [
        'A woman accidentally stumbles onto stolen money and goes on the run with a small-time thief.',
        'A chase through the forests with a girl and a thief.',
      ],
      dialogues: [],

      clues: {   // check
        job: 'Small-time thief',
        location: 'A forest',
        song: '',
        scene: '',
      },
    },
    {
      id: 'gharana-mogudu',
      title: 'Gharana Mogudu',
      aka: [],
      year: 1992,
      level: 'medium',

      hero: 'Chiranjeevi',
      heroine: 'Nagma',
      director: 'K. Raghavendra Rao',
      music: 'M. M. Keeravani',
      villain: 'Kaikala Satyanarayana',   // check
      banner: '',   // check
      genre: 'Action comedy',
      roles: ['Raju', 'Uma Devi'],   // check

      stats: { imdb: 7.1, songs: 6, runtime: 160 },   // check

      spoiler: [
        'A worker in a factory marries the arrogant daughter of its owner and tames her.',
        'A labourer teaches his proud boss-wife a lesson.',
      ],
      dialogues: ['Okkasaari face turning ichukondi.'],

      clues: {   // check
        job: 'Factory worker',
        location: 'Vizag',
        song: 'Bangaru Kodipetta',
        scene: 'A worker marries the arrogant owner of his company',
      },
    },
    {
      id: 'gaayam',
      title: 'Gaayam',
      aka: [],
      year: 1993,
      level: 'hard',

      hero: 'Jagapathi Babu',
      heroine: 'Urmila Matondkar',
      director: 'Ram Gopal Varma',
      music: 'Sri',
      villain: 'Kota Srinivasa Rao',
      banner: '',   // check
      genre: 'Crime drama',
      roles: [],

      stats: { imdb: 8.1, songs: 5, runtime: 145 },   // check

      spoiler: [
        'A young man is forced to take over his murdered brother\'s gang and fight a powerful politician.',
        'A brother becomes a gangster to avenge his family.',
      ],
      dialogues: [],

      clues: {   // check
        job: 'Student turned gangster',
        location: 'Vijayawada',
        song: '',
        scene: 'A brother takes over a gang after a murder',
      },
    },
    {
      id: 'hello-brother',
      title: 'Hello Brother',
      aka: [],
      year: 1994,
      level: 'medium',

      hero: 'Nagarjuna',
      heroine: 'Ramya Krishnan',
      director: 'E. V. V. Satyanarayana',
      music: 'Raj–Koti',
      villain: '',
      banner: '',   // check
      genre: 'Action comedy',
      roles: [],

      stats: { imdb: 7, songs: 6, runtime: 160 },   // check

      spoiler: [
        'Twins separated at birth feel each other\'s pain, which causes chaos when one is a thief and the other a singer.',
        'When one twin is hit, the other feels it.',
      ],
      dialogues: [],

      clues: {   // check
        job: 'Thief and singer',
        location: 'Hyderabad',
        song: '',
        scene: 'One twin gets hit and the other feels the pain',
      },
    },
    {
      id: 'baasha',
      title: 'Baasha',
      aka: [],
      year: 1995,
      level: 'medium',

      hero: 'Rajinikanth',
      heroine: 'Nagma',
      director: 'Suresh Krissna',
      music: 'Deva',
      villain: 'Raghuvaran',
      banner: 'Sathya Movies',
      genre: 'Action drama',
      roles: ['Manikyam', 'Priya', 'Mark Antony'],   // check

      stats: { imdb: 8.3, songs: 6, runtime: 165 },   // check

      spoiler: [
        'A humble auto-rickshaw driver hides a past as the most feared don of Bombay.',
        'A peaceful man takes beatings silently until his family is in danger and his old self returns.',
      ],
      dialogues: ['Nenu okkasari chepthe vanda saarlu cheppinattu.'],

      clues: {   // check
        job: 'Auto-rickshaw driver',
        location: 'Madras and Bombay',
        song: '',
        scene: 'An auto driver gets tied to a pole and beaten without fighting back',
      },
    },
    {
      id: 'gulabi',
      title: 'Gulabi',
      aka: [],
      year: 1995,
      level: 'hard',

      hero: 'J. D. Chakravarthy',
      heroine: 'Maheswari',
      director: 'Krishna Vamsi',
      music: 'Shashi Preetam',
      villain: '',
      banner: '',   // check
      genre: 'Romantic thriller',
      roles: [],

      stats: { imdb: 7.2, songs: 6, runtime: 140 },   // check

      spoiler: [
        'A young man falls for a girl and gets caught up in a human trafficking racket while trying to save her.',
        'A love story turns into a thriller about missing girls.',
      ],
      dialogues: [],

      clues: {   // check
        job: 'Unemployed young man',
        location: 'Hyderabad',
        song: 'Ee Vela Lo Neevu',
        scene: 'A young man chases a van that kidnapped his girlfriend',
      },
    },
    {
      id: 'rangeela',
      title: 'Rangeela',
      aka: [],
      year: 1995,
      level: 'hard',

      hero: 'Aamir Khan',
      heroine: 'Urmila Matondkar',
      director: 'Ram Gopal Varma',
      music: 'A. R. Rahman',
      villain: '',
      banner: '',   // check
      genre: 'Romantic comedy',
      roles: ['Munna', 'Mili'],   // check

      stats: { imdb: 7.4, songs: 7, runtime: 142 },   // check

      spoiler: [
        'A girl who dreams of being an actress is torn between a street-smart friend and a film star.',
      ],
      dialogues: [],

      clues: {   // check
        job: 'Ticket black-marketeer',
        location: 'Mumbai',
        song: 'Tanha Tanha',
        scene: 'A girl dances on a beach for a film shoot',
      },
    },
    {
      id: 'akkada-ammayi-ikkada-abbayi',
      title: 'Akkada Ammayi Ikkada Abbayi',
      aka: [],
      year: 1996,
      level: 'hard',

      hero: 'Pawan Kalyan',
      heroine: 'Supriya Yarlagadda',
      director: 'E. V. V. Satyanarayana',
      music: 'Koti',
      villain: '',
      banner: 'Annapurna Studios',   // check
      genre: 'Romantic drama',
      roles: [],

      stats: { imdb: 5.8, songs: 6, runtime: 150 },   // check

      spoiler: [   // check
        'A carefree young man falls for a girl and has to fight her family to marry her.',
        'A young man breaks bricks with his bare hands to prove his love.',
      ],
      dialogues: [],

      clues: {   // check
        job: 'College student',
        location: 'Hyderabad',
        song: '',
        scene: 'The hero breaks a stack of bricks with his bare hand',
      },
    },
    {
      id: 'ninne-pelladata',
      title: 'Ninne Pelladata',
      aka: [],
      year: 1996,
      level: 'medium',

      hero: 'Nagarjuna',
      heroine: 'Tabu',
      director: 'Krishna Vamsi',
      music: 'Sandeep Chowta',
      villain: '',
      banner: 'Annapurna Studios',
      genre: 'Romantic family drama',
      roles: ['Seenu', 'Maha Lakshmi'],   // check

      stats: { imdb: 8, songs: 6, runtime: 155 },   // check

      spoiler: [
        'A young man and a girl from two very different families fall in love and bring their families together.',
        'A wedding love story with two big joint families.',
      ],
      dialogues: [],

      clues: {   // check
        job: 'College student',
        location: 'Hyderabad',
        song: '',
        scene: '',
      },
    },
    {
      id: 'pelli-sandadi',
      title: 'Pelli Sandadi',
      aka: [],
      year: 1996,
      level: 'hard',

      hero: 'Srikanth',
      heroine: 'Ravali',
      director: 'K. Raghavendra Rao',
      music: 'M. M. Keeravani',
      villain: '',
      banner: '',   // check
      genre: 'Romantic musical',
      roles: [],

      stats: { imdb: 7, songs: 8, runtime: 155 },   // check

      spoiler: [
        'A young man falls for a girl he saw in a picture and searches for her, while another girl loves him.',
      ],
      dialogues: [],

      clues: {   // check
        job: '',
        location: 'Hyderabad',
        song: '',
        scene: '',
      },
    },
    {
      id: 'anaganaga-oka-roju',
      title: 'Anaganaga Oka Roju',
      aka: [],
      year: 1997,
      level: 'hard',

      hero: 'J. D. Chakravarthy',
      heroine: 'Urmila Matondkar',
      director: 'Ram Gopal Varma',
      music: 'Sri',   // check
      villain: '',
      banner: '',   // check
      genre: 'Thriller',
      roles: [],

      stats: { imdb: 7, songs: 5, runtime: 135 },   // check

      spoiler: [   // check
        'A young couple who eloped accidentally witness a murder and are chased by killers through one long day.',
        'Two runaway lovers stumble into a crime and become targets of a gang and the police at once.',
      ],
      dialogues: [],

      clues: {   // check
        job: 'Runaway lover',
        location: 'Hyderabad',
        song: '',
        scene: 'A couple hides in a car boot while killers search the area',
      },
    },
    {
      id: 'annamayya',
      title: 'Annamayya',
      aka: [],
      year: 1997,
      level: 'medium',

      hero: 'Nagarjuna',
      heroine: 'Ramya Krishnan',
      director: 'K. Raghavendra Rao',
      music: 'M. M. Keeravani',
      villain: '',
      banner: '',   // check
      genre: 'Devotional biographical',
      roles: [],   // the character names give the title away, so this movie uses the STARRING round only

      stats: { imdb: 8.2, songs: 12, runtime: 165 },   // check

      spoiler: [
        'The life of a 15th-century poet who wrote thousands of songs for Lord Venkateswara.',
        'A young man gives up worldly pleasures for devotion after a vision on the hills of Tirumala.',
      ],
      dialogues: [],

      clues: {   // check
        job: 'Poet and composer',
        location: 'Tirumala',
        song: 'Adivo Alladivo',
        scene: 'A young man climbs the seven hills to Tirumala barefoot',
      },
    },
    {
      id: 'gokulamlo-seeta',
      title: 'Gokulamlo Seeta',
      aka: [],
      year: 1997,
      level: 'hard',

      hero: 'Pawan Kalyan',
      heroine: 'Raasi',
      director: 'Muthyala Subbaiah',
      music: 'Koti',
      villain: '',
      banner: '',   // check
      genre: 'Romantic drama',
      roles: [],

      stats: { imdb: 5.8, songs: 6, runtime: 150 },   // check

      spoiler: [   // check
        'A rich playboy who treats girls as toys changes when he meets a simple, self-respecting girl.',
        'A spoilt rich man finds love with an orphan girl.',
      ],
      dialogues: [],

      clues: {   // check
        job: 'Rich playboy',
        location: 'Hyderabad',
        song: '',
        scene: 'A rich young man throws a party to impress girls',
      },
    },
    {
      id: 'master',
      title: 'Master',
      aka: [],
      year: 1997,
      level: 'hard',

      hero: 'Chiranjeevi',
      heroine: 'Sakshi Shivanand',
      director: 'Suresh Krissna',
      music: 'Deva',
      villain: '',
      banner: '',   // check
      genre: 'Action drama',
      roles: [],

      stats: { imdb: 6.5, songs: 6, runtime: 160 },   // check

      spoiler: [
        'A heavy-drinking professor takes a job at a juvenile school and goes up against a gangster who uses boys as pawns.',
        'A lecturer goes up against student gangs and a politician who uses them.',
      ],
      dialogues: [],

      clues: {   // check
        job: 'College lecturer',
        location: 'Hyderabad',
        song: '',
        scene: '',
      },
    },
    {
      id: 'sindhooram',
      title: 'Sindhooram',
      aka: [],
      year: 1997,
      level: 'hard',

      hero: 'Ravi Teja',   // check
      heroine: 'Sanghavi',   // check
      director: 'Krishna Vamsi',
      music: 'Srinivasa Chakravarthy',   // check
      villain: '',
      banner: '',   // check
      genre: 'Political drama',
      roles: [],

      stats: { imdb: 8.1, songs: 5, runtime: 150 },   // check

      spoiler: [
        'A police constable and a young man who joins the Naxals find themselves on opposite sides.',
        'Friends who join the police and the Naxal movement.',
      ],
      dialogues: [],

      clues: {   // check
        job: 'Naxalite',
        location: 'A village',
        song: '',
        scene: '',
      },
    },
    {
      id: 'choodalani-vundi',
      title: 'Choodalani Vundi',
      aka: [],
      year: 1998,
      level: 'hard',

      hero: 'Chiranjeevi',
      heroine: 'Soundarya',
      director: 'Gunasekhar',
      music: 'Mani Sharma',
      villain: 'Prakash Raj',   // check
      banner: '',   // check
      genre: 'Action drama',
      roles: [],

      stats: { imdb: 7, songs: 6, runtime: 160 },   // check

      spoiler: [
        'A man travels to Kolkata to find his missing wife and son, and takes on a gangster there.',
        'A father searches Calcutta for his child who was taken away.',
      ],
      dialogues: [],

      clues: {   // check
        job: 'Railway employee',
        location: 'Kolkata',
        song: '',
        scene: 'A man searches the streets of Kolkata for his son',
      },
    },
    {
      id: 'satya',
      title: 'Satya',
      aka: [],
      year: 1998,
      level: 'hard',

      hero: 'J. D. Chakravarthy',
      heroine: 'Urmila Matondkar',
      director: 'Ram Gopal Varma',
      music: 'Vishal Bhardwaj',
      villain: '',
      banner: '',   // check
      genre: 'Crime drama',
      roles: [],   // the character names give the title away, so this movie uses the STARRING round only

      stats: { imdb: 8.3, songs: 6, runtime: 170 },   // check

      spoiler: [
        'A newcomer to Bombay is drawn into the underworld and becomes a feared gangster.',
        'A man with no past rises in the Mumbai mafia with his friend Bhiku.',
      ],
      dialogues: [],

      clues: {   // check
        job: 'Gangster',
        location: 'Mumbai',
        song: '',
        scene: '',
      },
    },
    {
      id: 'suswagatham',
      title: 'Suswagatham',
      aka: [],
      year: 1998,
      level: 'hard',

      hero: 'Pawan Kalyan',
      heroine: 'Devayani',
      director: 'Bhimaneni Srinivasa Rao',
      music: 'S. A. Rajkumar',
      villain: '',
      banner: '',   // check
      genre: 'Romantic drama',
      roles: [],

      stats: { imdb: 6.5, songs: 6, runtime: 150 },   // check

      spoiler: [   // check
        'A young man waits for years for a girl to accept his love.',
        'A hero who keeps waiting for a reply.',
      ],
      dialogues: [],

      clues: {   // check
        job: 'College student',
        location: 'Hyderabad',
        song: '',
        scene: '',
      },
    },
    {
      id: 'tholi-prema',
      title: 'Tholi Prema',
      aka: [],
      year: 1998,
      level: 'medium',

      hero: 'Pawan Kalyan',
      heroine: 'Keerthi Reddy',
      director: 'A. Karunakaran',
      music: 'Deva',
      villain: '',
      banner: '',   // check
      genre: 'Romantic drama',
      roles: ['Balu', 'Anu'],   // check

      stats: { imdb: 8.3, songs: 6, runtime: 160 },   // check

      spoiler: [
        'A carefree young man falls in love at first sight and spends the whole film unable to tell her.',
        'A boy saves a girl\'s life but never says he loves her.',
      ],
      dialogues: [],

      clues: {   // check
        job: 'College student',
        location: 'Hyderabad',
        song: 'Emi Sodhara',
        scene: 'A carefree young man falls in love at first sight on a Diwali night',
      },
    },
    {
      id: 'narasimha',
      title: 'Narasimha',
      aka: [],
      year: 1999,
      level: 'medium',

      hero: 'Rajinikanth',
      heroine: 'Soundarya',
      director: 'K. S. Ravikumar',
      music: 'A. R. Rahman',
      villain: 'Ramya Krishnan',
      banner: '',   // check
      genre: 'Action drama',
      roles: [],   // the character names give the title away, so this movie uses the STARRING round only

      stats: { imdb: 8, songs: 6, runtime: 175 },   // check

      spoiler: [
        'A man rejected by a proud rich woman becomes a success, and she plans revenge for eighteen years.',
        'Neelambari waits years to take revenge on the hero.',
      ],
      dialogues: ['Athiga aashapade magavaadu, athiga aaveshapade aadadi sukhapadinattu charitralo ledu.', 'Naa daari rahadaari.'],

      clues: {   // check
        job: 'Engineer',
        location: 'A village',
        song: '',
        scene: '',
      },
    },
    {
      id: 'thammudu',
      title: 'Thammudu',
      aka: [],
      year: 1999,
      level: 'medium',

      hero: 'Pawan Kalyan',
      heroine: 'Preeti Jhangiani',
      director: 'P. A. Arun Prasad',
      music: 'Ramana Gogula',
      villain: '',
      banner: '',   // check
      genre: 'Sports drama',
      roles: ['Subhash', 'Janaki'],   // check

      stats: { imdb: 7.6, songs: 6, runtime: 160 },   // check

      spoiler: [
        'A careless younger brother trains as a kickboxer to win the championship his elder brother lost.',
        'A wayward brother finds his purpose in the ring.',
      ],
      dialogues: [],

      clues: {   // check
        job: 'College student',
        location: 'Hyderabad',
        song: '',
        scene: '',
      },
    },

    ── end of the switched-off movies ── */

    // ── 2000s ─────────────────────────────────────────────

    {
      id: 'annayya',
      title: 'Annayya',
      aka: [],
      year: 2000,
      level: 'hard',

      hero: 'Chiranjeevi',
      heroine: 'Soundarya',
      director: 'Muthyala Subbaiah',
      music: 'Mani Sharma',
      villain: '',
      banner: '',  
      genre: 'Family action drama',
      roles: [],

      stats: { imdb: 6.6, songs: 6, runtime: 157 },  

      spoiler: [   
        'An elder brother who sacrificed everything for his younger brothers is hurt when they turn against him.',
        'Rajaram loves his brothers and always forgives their offences but an ugly incident forces him to throw them out on the street. He secretly continues to help them but they harbour hatred towards him.',
      ],
      dialogues: ['Na Thammulu mechanical engineers, state first rank, character lo gems andi gems'],

      clues: {   
        job: 'Lorry Business owner and elder brother',
        location: '',
        song: 'Aata Kaavala',
        scene: '',
      },
    },
    {
      id: 'badri',
      title: 'Badri',
      aka: [],
      year: 2000,
      level: 'medium',

      hero: 'Pawan Kalyan',
      heroine: 'Amisha Patel',
      director: 'Puri Jagannadh',
      music: 'Ramana Gogula',
      villain: 'Prakash Raj',   
      banner: '',   
      genre: 'Romantic action',
      roles: [],   // the character names give the title away, so this movie uses the STARRING round only

      stats: { imdb: 7.3, songs: 6, runtime: 158 },   

      spoiler: ['A carefree guy with an arranged marriage bets he can make a stranger fall for him, but the game turns real and puts him up against her fiercely protective elder brother.'],
      dialogues: [''],

      clues: {  
        job: '',
        location: '',
        song: 'Bangala Kathamlo',
        scene: '',
      },
    },
    {
      id: 'daddy',
      title: 'Daddy',
      aka: [],
      year: 2001,
      level: 'hard',

      hero: 'Chiranjeevi',
      heroine: 'Simran',
      director: 'Suresh Krissna',
      music: 'S. A. Rajkumar',
      villain: '',
      banner: '',  
      genre: 'Family drama',
      roles: [],

      stats: { imdb: 6.6, songs: 6, runtime: 156 },  
       
      spoiler: [ 
         'After a tragic loss and misunderstandings drive his wife away, a heartbroken man spots a lookalike of his late daughter years later and tries to build a bond with her.',
        'Betrayed by friends, a wealthy dancer loses his fortune and daughter, separates from his wife, and later reunites his family.',
      ],
      dialogues: [],

      clues: {   
        job: 'Dancer and audio company owner',
        location: '',
        song: 'Gummaadi Gummaadi',
        scene: '',
      },
    },
    {
      id: 'kushi',
      title: 'Kushi',
      aka: [],
      year: 2001,
      level: 'easy',

      hero: 'Pawan Kalyan',
      heroine: 'Bhumika Chawla',
      director: 'S. J. Suryah',
      music: 'Mani Sharma',
      villain: '',
      banner: '',
      genre: 'Romantic comedy',
      roles: ['Siddhu', 'Madhu'],

      stats: { imdb: 8.1, songs: 6, runtime: 177 },  

      spoiler: [
        'College friends grow close while helping their friends unite in love, secretly fall for each other, let stubborn egos divide them',
        'Destined since childhood, Two college students turn rivals after a petty misunderstanding, fall in love while helping friends elope, and must overcome their stubborn egos to unite.',
      ],
      dialogues: ['meeru gudumba sathi garu kavachu thokkalo sathi kavachu, i dont care because im sidhu siddartha roy!',
                 'Jaya aunty mallum tereko, Lallu uncle mallum tereko ye sab mere piche hai'],

      clues: {   
        job: 'College student',
        location: 'Kolkata and Hyderabad',
        song: 'Ammaye Sannaga',
        scene: 'Despite their ongoing cold war Siddhu and Madhumitha agree to help their friends Babu and Shanti secretly get married',
      },
    },
    {
      id: 'murari',
      title: 'Murari',
      aka: [],
      year: 2001,
      level: 'medium',

      hero: 'Mahesh Babu',
      heroine: 'Sonali Bendre',
      director: 'Krishna Vamsi',
      music: 'Mani Sharma',
      villain: '',
      banner: '',   
      genre: 'Family drama',
      roles: [],   // the character names give the title away, so this movie uses the STARRING round only

      stats: { imdb: 7.8, songs: 7, runtime: 170 },   

      spoiler: [
        'A family is cursed by a goddess, and every generation one son dies young, until a young man defies it.',
      ],
      dialogues: [],

      clues: {  
        job: '',
        location: '',
        song: 'Alanati Ramachandrudu',
        scene: 'A family curse takes the life of an heir every 48 years',
      },
    },
   
    {
      id: 'nuvvu-naaku-nachav',
      title: 'Nuvvu Naaku Nachav',
      aka: [],
      year: 2001,
      level: 'medium',

      hero: 'Venkatesh',
      heroine: 'Aarthi Agarwal',
      director: 'K. Vijaya Bhaskar',
      music: 'Koti',
      villain: '',
      banner: '',
      genre: 'Family comedy',
      roles: ['Venky', 'Nandini'],  

      stats: { imdb: 8.8, songs: 6, runtime: 180 },   

      spoiler: [
        'A young man who stays with his father\'s friend\'s family falls for their daughter, who is engaged to someone else.',
      ],
      dialogues: [],

      clues: {  
        job: 'Unemployed young man',
        location: 'Hyderabad and Anakapalli',
        song: 'O priyathama',
        scene: 'Venky is caught eating without saying his prayers and lies to his strict uncle, leading to a moment where the uncle responds by reading a poem dedicated to his late mother.',
      },
    },
    
    {
      id: 'aadi',
      title: 'Aadi',
      aka: [],
      year: 2002,
      level: 'medium',

      hero: 'Jr NTR',
      heroine: 'Keerthi Chawla',   
      director: 'V. V. Vinayak',
      music: 'Mani Sharma',
      villain: '',   
      banner: '',   
      genre: 'Faction action drama',
      roles: [],

      stats: { imdb: 7.3, songs: 6, runtime: 162 },   

      spoiler: [
        '',
        '',
      ],
      dialogues: ['ammathodu addanga narikestha.'],

      clues: {   
        job: '',
        location: '',
        song: '',
        scene: '',
      },
    },
    {
      id: 'chennakesava-reddy',
      title: 'Chennakesava Reddy',
      aka: [],
      year: 2002,
      level: 'medium',

      hero: 'Balakrishna',
      heroine: 'Shriya Saran',
      director: 'V. V. Vinayak',
      music: 'Mani Sharma',
      villain: '',   
      banner: '',   
      genre: 'Faction action drama',
      roles: [],

      stats: { imdb: 6.1, songs: 6, runtime: 145 },   

      spoiler: [
        '',
        '',
      ],
      dialogues: [],

      clues: {  
        job: '',
        location: '',
        song: '',
        scene: '',
      },
    },
    {
      id: 'eeswar',
      title: 'Eeswar',
      aka: [],
      year: 2002,
      level: 'hard',

      hero: 'Prabhas',
      heroine: 'Sridevi Vijaykumar',
      director: 'Jayanth C. Paranjee',
      music: 'R. P. Patnaik',
      villain: '',
      banner: '',   
      genre: 'Action romance',
      roles: [],

      stats: { imdb: 5.4, songs: 6, runtime: 165 },   

      spoiler: [   
        '',
        
      ],
      dialogues: [],

      clues: {   
        job: '',
        location: '',
        song: '',
        scene: '',
      },
    },
    {
      id: 'idiot',
      title: 'Idiot',
      aka: [],
      year: 2002,
      level: 'medium',

      hero: 'Ravi Teja',
      heroine: 'Rakshita',
      director: 'Puri Jagannadh',
      music: 'Chakri',
      villain: 'Prakash Raj',
      banner: '',   
      genre: 'Action romance',
      roles: ['Chanti', 'Suchitra'],   

      stats: { imdb: 7.1, songs: 6, runtime: 133 },   

      spoiler: [
        'A carefree rowdy falls for a police commissioner\'s daughter, and her father will do anything to stop it.',
      ],
      dialogues: ['City ki entho mandi commissioners vasthuntaru pothuntaru... Chanti gaadu eppudu ikkade untadu, local.'],

      clues: {   
        job: '',
        location: '',
        song: 'Chupultho Guchi Guchi',
        scene: 'A student is beaten up by police for loving the commissioner\'s daughter',
      },
    },
    {
      id: 'indra',
      title: 'Indra',
      aka: [],
      year: 2002,
      level: 'easy',

      hero: 'Chiranjeevi',
      heroine: 'Sonali Bendre',
      director: 'B. Gopal',
      music: 'Mani Sharma',
      villain: '',
      banner: '',
      genre: 'Action drama',
      roles: [],   // the character names give the title away, so this movie uses the STARRING round only

      stats: { imdb: 7.5, songs: 5, runtime: 173 },   

      spoiler: [
        'A reformed man who once ruled rayalaseema hides his violent past while he lives peacefully in kashi.',
        'A taxi driver in Varanasi is really a former Rayalaseema faction leader who left to keep a promise.',
      ],
      dialogues: ['Veera Shankar Reddy... mokke kada ani peekesthe peeka kostha.', 'Tappu naa vaipu undi kabatti tala dinchukuni velthunna, ledante talalu teesukellevaadni.'],   

      clues: {   
        job: '',
        location: 'Varanasi and Rayalaseema',
        song: 'Radhe Govinda',
        scene: 'A taxi driver in Varanasi hides his past as a faction leader',
      },
    },
   
    {
      id: 'manmadhudu',
      title: 'Manmadhudu',
      aka: [],
      year: 2002,
      level: 'easy',

      hero: 'Nagarjuna',
      heroine: 'Sonali Bendre',
      director: 'K. Vijaya Bhaskar',
      music: 'Devi Sri Prasad',
      villain: '',
      banner: '',
      genre: 'Romantic comedy',
      roles: ['Abhiram', 'Harika'],   

      stats: { imdb: 8.3, songs: 6, runtime: 142 },   

      spoiler: [
        'A woman-hating ad agency boss tries driving away his new female assistant, only for her to slowly win him over completely.',
        'A man who hates women after a heartbreak is forced to work with a female assistant.',
      ],
      dialogues: ['akasam erraga undhi'],

      clues: {   
        job: 'Advertising manager',
        location: 'Hyderabad and Paris',
        song: 'gundello emundho',
        scene: 'An ad agency manager who cannot stand women',
      },
    },
    {
      id: 'nuvve-nuvve',
      title: 'Nuvve Nuvve',
      aka: [],
      year: 2002,
      level: 'hard',

      hero: 'Tarun',
      heroine: 'Shriya Saran',
      director: 'Trivikram Srinivas',
      music: 'Koti',
      villain: '',
      banner: '',   
      genre: 'Romantic comedy',
      roles: ['Rishi', 'Anjali'],  

      stats: { imdb: 7.5, songs: 6, runtime: 160 },   

      spoiler: [
        'A carefree young man falls for a rich girl, and her strict father says no.',
        'A father who loves his daughter too much clashes with her boyfriend.',
      ],
      dialogues: [],

      clues: {   
        job: '',
        location: '',
        song: '',
        scene: '',
      },
    },
    {
      id: 'amma-nanna-o-tamila-ammayi',
      title: 'Amma Nanna O Tamila Ammayi',
      aka: [],
      year: 2003,
      level: 'medium',

      hero: 'Ravi Teja',
      heroine: 'Asin',
      director: 'Puri Jagannadh',
      music: 'Chakri',
      villain: '',
      banner: '',   
      genre: 'Sports drama',
      roles: [],

      stats: { imdb: 7.4, songs: 6, runtime: 122 },   

      spoiler: [
        'A kickboxer who grew up away from his father meets him again and has to win his love and a big fight.',
        
      ],
      dialogues: [],

      clues: {   
        job: '',
        location: '',
        song: '',
        scene: '',
      },
    },
    {
      id: 'dil',
      title: 'Dil',
      aka: [],
      year: 2003,
      level: 'medium',

      hero: 'Nithiin',
      heroine: 'Neha Bamb',
      director: 'V. V. Vinayak',
      music: 'R. P. Patnaik',
      villain: 'Prakash Raj',
      banner: '',   
      genre: 'Action romance',
      roles: [],

      stats: { imdb: 7.1, songs: 6, runtime: 122 },   

      spoiler: [
        '',
      ],
      dialogues: [],

      clues: {  
        job: '',
        location: '',
        song: '',
        scene: '',
      },
    },
    
    {
      id: 'okkadu',
      title: 'Okkadu',
      aka: [],
      year: 2003,
      level: 'easy',

      hero: 'Mahesh Babu',
      heroine: 'Bhumika Chawla',
      director: 'Gunasekhar',
      music: 'Mani Sharma',
      villain: 'Prakash Raj',
      banner: '',   
      genre: 'Action romance',
      roles: ['Ajay', 'Swapna', 'Obul Reddy'],   

      stats: { imdb: 8, songs: 6, runtime: 169 },

      spoiler: [
        'A kabaddi player in Hyderabad rescues a girl from a forced marriage to a faction leader, and goes up against him in his own city.',
        'A kabaddi player rescues a girl from a faction leader and hides her in his home who wants to marry her .',
      ],
      dialogues: [],

      clues: {   
        job: 'Kabaddi player',
        location: 'Hyderabad and Kurnool',
        song: 'Cheppave Chirugali',
        scene: 'A kabaddi player rescues a girl from a faction leader in Kurnool',
      },
    },
    {
      id: 'shivamani',
      title: 'Shivamani',
      aka: [],
      year: 2003,
      level: 'hard',

      hero: 'Nagarjuna',
      heroine: 'Asin',   
      director: 'Puri Jagannadh',
      music: 'Chakri',
      villain: '',
      banner: '',   
      genre: 'Action romance',
      roles: [],

      stats: { imdb: 6.3, songs: 6, runtime: 143 },   

      spoiler: [
        '',
      ],
      dialogues: [''],

      clues: {  
        job: '',
        location: '',
        song: '',
        scene: '',
      },
    },
    {
      id: 'simhadri',
      title: 'Simhadri',
      aka: [],
      year: 2003,
      level: 'medium',

      hero: 'Jr NTR',
      heroine: 'Bhumika Chawla',
      director: 'S. S. Rajamouli',
      music: 'M. M. Keeravani',
      villain: '',
      banner: '',   
      genre: 'Action',
      roles: [],   // the character names give the title away, so this movie uses the STARRING round only

      stats: { imdb: 7.3, songs: 7, runtime: 169 },

      spoiler: [
        '',
        '',
      ],
      dialogues: [],

      clues: {   
        job: '',
        location: '',
        song: '',
        scene: '',
      },
    },
    {
      id: 'tagore',
      title: 'Tagore',
      aka: [],
      year: 2003,
      level: 'medium',

      hero: 'Chiranjeevi',
      heroine: 'Shriya Saran',
      director: 'V. V. Vinayak',
      music: 'Mani Sharma',
      villain: '',
      banner: '',   
      genre: 'Action drama',
      roles: [],

      stats: { imdb: 7.9, songs: 6, runtime: 176 },  

      spoiler: [
        'A professor teaches by day and fights corruption by night, with a network of students as his eyes and ears.',
        'A professor leads a secret group that kidnaps and punishes corrupt officials.',
      ],
      dialogues: ['Telugu bhashalo naaku nachani oke okka padam kshaminchadam.'],

      clues: {   
        job: 'Professor',
        location: '',
        song: '',
        scene: 'A professor runs a secret force against corruption',
      },
    },
   
    {
      id: 'arjun',
      title: 'Arjun',
      aka: [],
      year: 2004,
      level: 'medium',

      hero: 'Mahesh Babu',
      heroine: 'Shriya Saran',
      director: 'Gunasekhar',
      music: 'Mani Sharma',
      villain: 'Prakash Raj',   
      banner: '',   
      genre: 'Action drama',
      roles: [],

      stats: { imdb: 6.5, songs: 6, runtime: 131 },  

      spoiler: [
        'A brother goes to Madurai to protect his twin sister after she marries into a dangerous family.',
        'A man discovers that his sister\'s in-laws are planning to kill her for her property.',
      ],
      dialogues: [],

      clues: {   
        job: '',
        location: '',
        song: 'Madhura Madhura',
        scene: '',
      },
    },
    {
      id: 'arya',
      title: 'Arya',
      aka: [],
      year: 2004,
      level: 'easy',

      hero: 'Allu Arjun',
      heroine: 'Anuradha Mehta',
      director: 'Sukumar',
      music: 'Devi Sri Prasad',
      villain: '',
      banner: '',
      genre: 'Romantic drama',
      roles: [],   // the character names give the title away, so this movie uses the STARRING round only

      stats: { imdb: 7.8, songs: 6, runtime: 151 },

      spoiler: [
      ],
      dialogues: [],

      clues: {   
        job: '',
        location: '',
        song: '',
        scene: '',
      },
    },
    {
      id: 'gudumba-shankar',
      title: 'Gudumba Shankar',
      aka: [],
      year: 2004,
      level: 'medium',

      hero: 'Pawan Kalyan',
      heroine: 'Meera Jasmine',
      director: 'Veera Shankar',
      music: 'Mani Sharma',
      villain: '',
      banner: '',  
      genre: 'Romantic comedy',
      roles: [],   // the character names give the title away, so this movie uses the STARRING round only

      stats: { imdb: 5.8, songs: 6, runtime: 175 },  

      spoiler: [

      ],
      dialogues: [],

      clues: { 
        job: '',
        location: '',
        song: '',
        scene: '',
      },
    },
    {
      id: 'malliswari',
      title: 'Malliswari',
      aka: [],
      year: 2004,
      level: 'medium',

      hero: 'Venkatesh',
      heroine: 'Katrina Kaif',
      director: 'K. Vijaya Bhaskar',
      music: 'Koti',
      villain: '',
      banner: 'Suresh Productions',
      genre: 'Romantic comedy',
      roles: [],   // the character names give the title away, so this movie uses the STARRING round only

      stats: { imdb: 7.8, songs: 6, runtime: 155 },  

      spoiler: [
        'A desperate bachelor bank clerk falls for a seemingly ordinary maid, unaware she is actually a royal heiress hiding from scheming enemies plotting her murder',
      ],
      dialogues: [],

      clues: {   
        job: '',
        location: '',
        song: '',
        scene: '',
      },
    },
    {
      id: 'shankar-dada-m-b-b-s',
      title: 'Shankar Dada M.B.B.S.',
      aka: [],
      year: 2004,
      level: 'medium',

      hero: 'Chiranjeevi',
      heroine: 'Sonali Bendre',
      director: 'Jayanth C. Paranjee',
      music: 'Devi Sri Prasad',
      villain: 'Paresh Rawal',
      banner: '',   
      genre: 'Comedy drama',
      roles: [],   // the character names give the title away, so this movie uses the STARRING round only

      stats: { imdb: 7.6, songs: 7, runtime: 172 },  

      spoiler: [
        'A goon joins medical college to fulfil his father\'s dream and changes the hospital with kindness.',
        'A kind-hearted Hyderabad gangster enrolls in medical school to fulfill his father\'s dream and avenge an insult, using love and laughter to heal patients'
      ],
      dialogues: [],

      clues: {   
        job: 'Goon turned medical student',
        location: '',
        song: 'Chaila Chaila',
        scene: '',
      },
    },
    {
      id: 'sye',
      title: 'Sye',
      aka: [],
      year: 2004,
      level: 'medium',

      hero: 'Nithiin',
      heroine: 'Genelia D\'Souza',
      director: 'S. S. Rajamouli',
      music: 'M. M. Keeravani',
      villain: '',
      banner: '',  
      genre: 'Sports action',
      roles: ['Prithvi', 'Indu', 'Bikshu Yadav'],  

      stats: { imdb: 7.2, songs: 6, runtime: 163 }, 

      spoiler: [
        'Two rival college groups unite to play a rugby match against a gangster\'s team to save their college ground.',
        
      ],
      dialogues: [],

      clues: {   
        job: '',
        location: '',
        song: '',
        scene: '',
      },
    },
    {
      id: 'varsham',
      title: 'Varsham',
      aka: [],
      year: 2004,
      level: 'easy',

      hero: 'Prabhas',
      heroine: 'Trisha',
      director: 'Sobhan',
      music: 'Devi Sri Prasad',
      villain: 'Gopichand',
      banner: '',
      genre: 'Romantic action',
      roles: ['Venkat', 'Sailaja', 'Bhadranna'],  

      stats: { imdb: 7.2, songs: 6, runtime: 160 },  

      spoiler: [
      ],
      dialogues: [],

      clues: {   
        job: '',
        location: '',
        song: '',
        scene: '',
      },
    },
    {
      id: 'venky',
      title: 'Venky',
      aka: [],
      year: 2004,
      level: 'medium',

      hero: 'Ravi Teja',
      heroine: 'Sneha',
      director: 'Sreenu Vaitla',
      music: 'Devi Sri Prasad',
      villain: '',
      banner: '',   
      genre: 'Action comedy',
      roles: [],

      stats: { imdb: 7.5, songs: 6, runtime: 170 },  

      spoiler: [
        'A group of friends on a train journey get caught in a murder conspiracy.',
        'A carefree graduate traveling with friends to police training falls for a passenger, before getting framed for a train murder.',
      ],
      dialogues: [],

      clues: {   
        job: 'Police trainee',
        location: '',
        song: '',
        scene: '',
      },
    },
    {
      id: 'andarivaadu',
      title: 'Andarivaadu',
      aka: [],
      year: 2005,
      level: 'hard',

      hero: 'Chiranjeevi',
      heroine: 'Tabu',
      director: 'Sreenu Vaitla',  
      music: 'Devi Sri Prasad',
      villain: '',
      banner: '',   
      genre: 'Family comedy',
      roles: [],

      stats: { imdb: 5, songs: 6, runtime: 162 },   

      spoiler: [   
        'A carefree laborer and his disciplined television-host son bond closely until a vengeful woman marries into their family plotting division',
      ],
      dialogues: [],

      clues: {  
        job: '',
        location: '',
        song: '',
        scene: '',
      },
    },
    {
      id: 'athadu',
      title: 'Athadu',
      aka: [],
      year: 2005,
      level: 'easy',

      hero: 'Mahesh Babu',
      heroine: 'Trisha',
      director: 'Trivikram Srinivas',
      music: 'Mani Sharma',
      villain: 'Sonu Sood',
      banner: '',
      genre: 'Action thriller',
      roles: ['Nandu', 'Poori'],   

      stats: { imdb: 8.3, songs: 6, runtime: 172 },

      spoiler: [
        'A professional assassin on the run poses as a missing man to hide in a village, and slowly becomes part of the family he is pretending to belong to.',
        'A contract killer who is framed for a politician\'s murder hides by posing as a family\'s long-lost son.',
        'Framed for a politician\'s murder during a staged attack, hitman Nandu assumes a dead man\'s identity in a village while evading police and uncovering traitors.',
      ],
      dialogues: ['Gun choodalanuko tappu ledu, kaani bullet choodalanukoku, chachipothav.'],

      clues: {  
        job: 'Contract killer',
        location: 'Basarlapudi',
        song: 'Pillagali Allari',
        scene: 'A hitman hides in a village by pretending to be someone else',
      },
    },
    
    {
      id: 'balu',
      title: 'Balu',
      aka: [],
      year: 2005,
      level: 'medium',

      hero: 'Pawan Kalyan',
      heroine: 'Shriya Saran',
      director: 'A. Karunakaran',
      music: 'Mani Sharma',
      villain: '',   
      banner: '',
      genre: 'Action romance',
      roles: ['Ghani', 'Indu'],

      stats: { imdb: 6, songs: 6, runtime: 151 },   

      spoiler: [
      ],
      dialogues: [],

      clues: { 
        job: '',
        location: '',
        song: '',
        scene: '',
      },
    },
    {
      id: 'bhadra',
      title: 'Bhadra',
      aka: [],
      year: 2005,
      level: 'medium',

      hero: 'Ravi Teja',
      heroine: 'Meera Jasmine',
      director: 'Boyapati Srinu',
      music: 'Devi Sri Prasad',
      villain: '',  
      banner: '',
      genre: 'Action drama',
      roles: [],

      stats: { imdb: 6.9, songs: 7, runtime: 150 },   

      spoiler: [
        
      ],
      dialogues: [],

      clues: {  
        job: '',
        location: '',
        song: '',
        scene: '',
      },
    },
    {
      id: 'bunny',
      title: 'Bunny',
      aka: [],
      year: 2005,
      level: 'medium',

      hero: 'Allu Arjun',
      heroine: 'Gowri Munjal',
      director: 'V. V. Vinayak',
      music: 'Devi Sri Prasad',
      villain: '',   
      banner: '',   
      genre: 'Action drama',
      roles: [],   

      stats: { imdb: 6.6, songs: 6, runtime: 165 },   

      spoiler: [
        'A student in Visakhapatnam takes on a corrupt politician to protect a family he has come to love, hiding his own past in the process.',
        'A student marries a rich businessman\'s daughter as part of a plan to recover what her father took from his family.',
      ],
      dialogues: [],

      clues: {   
        job: '',
        location: '',
        song: '',
        scene: '',
      },
    },
    {
      id: 'chatrapathi',
      title: 'Chatrapathi',
      aka: [],
      year: 2005,
      level: 'easy',

      hero: 'Prabhas',
      heroine: 'Shriya Saran',
      director: 'S. S. Rajamouli',
      music: 'M. M. Keeravani',
      villain: 'Pradeep Rawat',
      banner: '',  
      genre: 'Action drama',
      roles: ['Sivaji', 'Neelu', 'Bajirao'],   

      stats: { imdb: 7.7, songs: 6, runtime: 165 },  

      spoiler: [
        'A refugee boy from Sri Lanka grows up in a harbour town and rises to take on those who treated his people as slaves.',
        'A Sri Lankan refugee boy separated from his mother grows into a leader of the refugees in Vizag.',
      ],
      dialogues: ['Oka adugu... oke okka adugu.'],

      clues: {  
        job: '',
        location: '',
        song: 'A Vachi B Pai Vaali',
        scene: '',
      },
    },
    {
      id: 'ghajini',
      title: 'Ghajini',
      aka: [],
      year: 2005,
      level: 'easy',

      hero: 'Suriya',
      heroine: 'Asin',
      director: 'A. R. Murugadoss',
      music: 'Harris Jayaraj',
      villain: '',
      banner: '',   
      genre: 'Psychological action thriller',
      roles: [],   // the character names give the title away, so this movie uses the STARRING round only

      stats: { imdb: 7.6, songs: 5, runtime: 175 },   

      spoiler: [
        'A businessman with short-term memory loss tattoos clues all over his body to hunt down the man who killed his beloved.',
        'A man who forgets everything every fifteen minutes uses tattoos and photos to hunt his girlfriend\'s killer.',
      ],
      dialogues: [],

      clues: {   
        job: '',
        location: '',
        song: 'Hrudayam Ekkadunnadi',
        scene: '',
      },
    },
    {
      id: 'jai-chiranjeeva',
      title: 'Jai Chiranjeeva',
      aka: [],
      year: 2005,
      level: 'hard',

      hero: 'Chiranjeevi',
      heroine: 'Sameera Reddy',
      director: 'K. Vijaya Bhaskar',
      music: 'Mani Sharma',
      villain: '',  
      banner: '',   
      genre: 'Action comedy',
      roles: [],

      stats: { imdb: 6.1, songs: 6, runtime: 165 },   

      spoiler: [   
        'A man goes to America to find the killers of his young niece.',
      ],
      dialogues: [],

      clues: {  
        job: '',
        location: '',
        song: '',
        scene: '',
      },
    },
    {
      id: 'nuvvostanante-nenoddantana',
      title: 'Nuvvostanante Nenoddantana',
      aka: [],
      year: 2005,
      level: 'medium',

      hero: 'Siddharth',
      heroine: 'Trisha',
      director: 'Prabhu Deva',
      music: 'Devi Sri Prasad',
      villain: '',
      banner: '',   
      genre: 'Romantic drama',
      roles: ['Santosh', 'Siri'], 

      stats: { imdb: 7.9, songs: 7, runtime: 165 },   

      spoiler: [
        'A rich NRI boy works as a farmhand for a year to prove to a girl\'s brother that he deserves her.',
       
      ],
      dialogues: [],

      clues: {   
        job: '',
        location: '',
        song: '',
        scene: '',
      },
    },
    {
      id: 'annavaram',
      title: 'Annavaram',
      aka: [],
      year: 2006,
      level: 'medium',

      hero: 'Pawan Kalyan',
      heroine: 'Asin',
      director: 'Bhimaneni Srinivasa Rao',
      music: 'Ramana Gogula',
      villain: '',   
      banner: '',  
      genre: 'Action drama',
      roles: [],

      stats: { imdb: 5, songs: 5, runtime: 174 },  

      spoiler: [
        
      ],
      dialogues: [],

      clues: {   
        job: '',
        location: '',
        song: '',
        scene: '',
      },
    },
    {
      id: 'bommarillu',
      title: 'Bommarillu',
      aka: [],
      year: 2006,
      level: 'easy',

      hero: 'Siddharth',
      heroine: 'Genelia D\'Souza',
      director: 'Bhaskar',
      music: 'Devi Sri Prasad',
      villain: '',
      banner: '',
      genre: 'Family romance',
      roles: ['Siddhu', 'Hasini'],  

      stats: { imdb: 8.2, songs: 6, runtime: 170 },

      spoiler: [
        'A young man raised under his controlling father\'s influence falls for a cheerful girl, forcing him to challenge family expectations and discover independence.',
        'A son whose father decides everything for him brings home his free-spirited girlfriend for a week.',
      ],
      dialogues: ['Anthena? Inkem kavali? Veelaithe naalugu maatalu, kudirithe cup coffee!'],

      clues: {   
        job: '',
        location: '',
        song: 'Appudo Ippudo',
        scene: 'A father makes every decision for his grown-up son',
      },
    },
    {
      id: 'happy',
      title: 'Happy',
      aka: [],
      year: 2006,
      level: 'medium',

      hero: 'Allu Arjun',
      heroine: 'Genelia D\'Souza',
      director: 'A. Karunakaran',
      music: 'Yuvan Shankar Raja',
      villain: 'Manoj Bajpayee',
      banner: '',
      genre: 'Romantic comedy',
      roles: ['Bunny', 'Madhumathi'],   

      stats: { imdb: 7.2, songs: 6, runtime: 152 }, 

      spoiler: [
        'A carefree pizza delivery boy unexpectedly marries a politician\'s daughter, leading to an unusual relationship',
        'A carefree young man helps a girl escape a forced marriage to a cop, by pretending to be her husband.',
      ],
      dialogues: [],

      clues: {   
        job: 'Pizza delivery boy',
        location: '',
        song: '',
        scene: 'A Pizza delivery boy pretends to be married to a girl he barely knows',
      },
    },
    {
      id: 'lakshmi',
      title: 'Lakshmi',
      aka: [],
      year: 2006,
      level: 'hard',

      hero: 'Venkatesh',
      heroine: 'Nayanthara',
      director: 'V. V. Vinayak',
      music: 'Ramana Gogula',
      villain: '',   
      banner: '',  
      genre: 'Family action drama',
      roles: [],

      stats: { imdb: 5.9, songs: 5, runtime: 155 },  

      spoiler: [
        
      ],
      dialogues: [],

      clues: {   
        job: '',
        location: '',
        song: '',
        scene: '',
      },
    },
    {
      id: 'pokiri',
      title: 'Pokiri',
      aka: [],
      year: 2006,
      level: 'easy',

      hero: 'Mahesh Babu',
      heroine: 'Ileana D\'Cruz',
      director: 'Puri Jagannadh',
      music: 'Mani Sharma',
      villain: 'Prakash Raj',
      banner: '',   
      genre: 'Action thriller',
      roles: ['Pandu', 'Shruti', 'Ali Bhai'],   

      stats: { imdb: 8, songs: 6, runtime: 164 },

      spoiler: [
        'A street thug who beats people up for a price turns out to be an undercover police officer hunting a powerful underworld don.',
      ],
      dialogues: ['Okka saari commit ayithe naa maata nene vinanu.', 'Evadu kodithe dimma thirigi mind block ayipothado aade Pandugaadu.', 'Builder handover chesesada, padmavathi happy ey na'],

      clues: {  
        job: '',
        location: '',
        song: 'Jagadame',
        scene: 'An undercover cop poses as a gangster',
      },
    },
    {
      id: 'rakhi',
      title: 'Rakhi',
      aka: [],
      year: 2006,
      level: 'hard',

      hero: 'Jr NTR',
      heroine: 'Ileana D\'Cruz',
      director: 'Krishna Vamsi',
      music: 'Devi Sri Prasad',
      villain: '',
      banner: '',  
      genre: 'Action drama',
      roles: [],

      stats: { imdb: 6.4, songs: 6, runtime: 173 },  

      spoiler: [
        'After his sister\'s dowry death, a young man becomes a vigilante fighting violence and injustice against women.',
        'A young man becomes a vigilante against men who harm women.',
      ],
      dialogues: [],

      clues: {   
        job: '',
        location: '',
        song: '',
        scene: '',
      },
    },
    {
      id: 'sainikudu',
      title: 'Sainikudu',
      aka: [],
      year: 2006,
      level: 'hard',

      hero: 'Mahesh Babu',
      heroine: 'Trisha',
      director: 'Gunasekhar',
      music: 'Harris Jayaraj',
      villain: '',
      banner: '',  
      genre: 'Political action',
      roles: [],

      stats: { imdb: 5.1, songs: 6, runtime: 169 },   

      spoiler: [
        
      ],
      dialogues: [],

      clues: {  
        job: '',
        location: '',
        song: '',
        scene: '',
      },
    },
    {
      id: 'sri-ramadasu',
      title: 'Sri Ramadasu',
      aka: [],
      year: 2006,
      level: 'hard',

      hero: 'Nagarjuna',
      heroine: 'Sneha',
      director: 'K. Raghavendra Rao',
      music: 'M. M. Keeravani',
      villain: '',
      banner: '',  
      genre: 'Devotional biographical',
      roles: [],

      stats: { imdb: 7.2, songs: 18, runtime: 156 },   
      spoiler: [
        'A devoted man builds Lord Rama\'s temple, faces imprisonment and finds divine grace through unwavering faith.',
      ],
      dialogues: [],

      clues: {   
        job: '',
        location: '',
        song: '',
        scene: '',
      },
    },
    {
      id: 'stalin',
      title: 'Stalin',
      aka: [],
      year: 2006,
      level: 'medium',

      hero: 'Chiranjeevi',
      heroine: 'Trisha',
      director: 'A. R. Murugadoss',
      music: 'Mani Sharma',
      villain: '',
      banner: '',
      genre: 'Action drama',
      roles: [],

      stats: { imdb: 6.1, songs: 6, runtime: 168 },  

      spoiler: [
        'A man helps others without expecting anything and asks them to pass on the favour to three more people.',
        'A former army man asks every person he helps to help three others, while fighting a corrupt minister.',
      ],
      dialogues: ['Okkariki sahayam cheyandi... aa okkarini maro mugguriki sahayam cheyamani cheppandi', 'Gunde meedha cheyi vesav... theliyaledha akkada unna naa power?', 'Nuvvu oka amma ki abba ki putti unte, mundhu naa meedha cheyi vesi aa tarvatha maa vaalla joliki vellu..'],

      clues: {   
        job: 'Ex-army officer',
        location: '',
        song: '',
        scene: '',
      },
    },
    {
      id: 'vikramarkudu',
      title: 'Vikramarkudu',
      aka: [],
      year: 2006,
      level: 'medium',

      hero: 'Ravi Teja',
      heroine: 'Anushka Shetty',
      director: 'S. S. Rajamouli',
      music: 'M. M. Keeravani',
      villain: '',
      banner: '',  
      genre: 'Action',
      roles: [],  

      stats: { imdb: 7.7, songs: 6, runtime: 161 },  

      spoiler: [
        'A small-time thief takes the place of his lookalike, a fearless cop, and takes care of the cop\'s daughter.',
      ],
      dialogues: ['Chaavu naa edhuruga unnapudu naa kallallo beruku undakudadhu, naa moothi meedha chirunavvu undali, naa cheyyi naa meesam meedha undali sir!'],

      clues: {   
        job: '',
        location: '',
        song: '',
        scene: 'A thief looks exactly like a fearless police officer',
      },
    },
    {
      id: 'athidhi',
      title: 'Athidhi',
      aka: [],
      year: 2007,
      level: 'medium',

      hero: 'Mahesh Babu',
      heroine: 'Amrita Rao',
      director: 'Surender Reddy',
      music: 'Mani Sharma',
      villain: '',
      banner: '', 
      genre: 'Action thriller',
      roles: [],

      stats: { imdb: 5.6, songs: 6, runtime: 172 }, 

      spoiler: [
       
      ],
      dialogues: [],

      clues: {  
        job: '',
        location: '',
        song: 'Khiladi Koona',
        scene: '',
      },
    },

    {
      id: 'chirutha',
      title: 'Chirutha',
      aka: [],
      year: 2007,
      level: 'medium',

      hero: 'Ram Charan',
      heroine: 'Neha Sharma',
      director: 'Puri Jagannadh',
      music: 'Mani Sharma',
      villain: '',  
      banner: '',
      genre: 'Action romance',
      roles: [],   
      stats: { imdb: 5.4, songs: 5, runtime: 151 },   
       
      spoiler: [
        
      ],
      dialogues: ['ee aadavi naade, veta naade'],

      clues: {   
        job: '',
        location: '',
        song: '',
        scene: '',
      },
    },
    {
      id: 'desamuduru',
      title: 'Desamuduru',
      aka: [],
      year: 2007,
      level: 'medium',

      hero: 'Allu Arjun',
      heroine: 'Hansika Motwani',
      director: 'Puri Jagannadh',
      music: 'Chakri',
      villain: '',   
      banner: '',
      genre: 'Action romance',
      roles: ['Bala Govind', 'Vaishali'],  

      stats: { imdb: 6.2, songs: 6, runtime: 148 },   

      spoiler: [
        'a TV reporter who is sent to Kullu Manali after clashing with a gangster\'s son, where he falls for a sanyasini named Vaishali and fights to save her from a ruthless villain',
        'A TV journalist falls in love with a young sanyasini at a Himalayan ashram.',
      ],
      dialogues: ['You know Guntur bolke ek sheher hai? Nenu ikkada kottaananuko, resound udhar aatha!'],

      clues: {  
        job: 'TV journalist',
        location: 'Kullu Manali',
        song: 'Ninne Ninne',
        scene: 'A TV reporter falls for a sanyasin in Manali',
      },
    },
    {
      id: 'dhee',
      title: 'Dhee',
      aka: [],
      year: 2007,
      level: 'medium',

      hero: 'Manchu Vishnu',
      heroine: 'Genelia D\'Souza',
      director: 'Sreenu Vaitla',
      music: 'Chakri',
      villain: '',
      banner: '',
      genre: 'Action comedy',
      roles: ['Bablu', 'Pooja', 'Shankar Goud'],   

      stats: { imdb: 7.3, songs: 6, runtime: 143 },   

      spoiler: [
        'A carefree youngster joins a gangster\'s organisation, falls for his sister and uses clever tricks to win approval.',
        'A carefree young man falls for the sister of a don who is very strict about her safety.',
      ],
      dialogues: ['Shankar Goud ni premisthe thappu kaani, vaadi chellilni premisthe thappenti?'],

      clues: {   
        job: '',
        location: '',
        song: '',
        scene: '',
      },
    },
    {
      id: 'dubai-seenu',
      title: 'Dubai Seenu',
      aka: [],
      year: 2007,
      level: 'medium',

      hero: 'Ravi Teja',
      heroine: 'Nayanthara',
      director: 'Sreenu Vaitla',
      music: 'Mani Sharma',
      villain: '',
      banner: '',   
      genre: 'Action comedy',
      roles: [],

      stats: { imdb: 6.6, songs: 6, runtime: 157 },  

      spoiler: [
        'A man cheated by an agent who promised him a job in Dubai ends up in Mumbai, where he falls in love.',
        'A jobless man dreams of Dubai and gets stuck in Mumbai with his friends instead.',
      ],
      dialogues: ['Appadam... appadam ayipodhi! '],

      clues: {   
        job: '',
        location: 'Mumbai',
        song: '',
        scene: 'Friends are cheated by a fake Dubai agent',
      },
    },
    {
      id: 'happy-days',
      title: 'Happy Days',
      aka: [],
      year: 2007,
      level: 'easy',

      hero: 'Varun Sandesh',
      heroine: 'Tamannaah',
      director: 'Sekhar Kammula',
      music: 'Mickey J. Meyer',
      villain: '',
      banner: '',
      genre: 'Coming-of-age drama',
      roles: ['Chandu', 'Madhu' ],   

      stats: { imdb: 7.9, songs: 7, runtime: 153 },   

      spoiler: [
        'A group of engineering college friends enjoy their college, falling in love, fighting and growing up together.',
        'Eight engineering students share four years of college, ragging, friendship and love.',
      ],
      dialogues: [],

      clues: {   
        job: '',
        location: '',
        song: 'Oh My Friend',
        scene: 'Four years in the life of eight engineering students',
      },
    },
    {
      id: 'jagadam',
      title: 'Jagadam',
      aka: [],
      year: 2007,
      level: 'hard',

      hero: 'Ram Pothineni',
      heroine: 'Isha Sahni',
      director: 'Sukumar',
      music: 'Devi Sri Prasad',
      villain: '',  
      banner: '',   
      genre: 'Crime drama',
      roles: [],

      stats: { imdb: 6.8, songs: 4, runtime: 163 },  

      spoiler: [
        
      ],
      dialogues: [],

      clues: {   
        job: '',
        location: '',
        song: '',
        scene: '',
      },
    },
    {
      id: 'munna',
      title: 'Munna',
      aka: [],
      year: 2007,
      level: 'hard',

      hero: 'Prabhas',
      heroine: 'Ileana D\'Cruz',
      director: 'Vamshi Paidipally',
      music: 'Harris Jayaraj',
      villain: 'Prakash Raj',
      banner: '',   
      genre: 'Action drama',
      roles: [],

      stats: { imdb: 5.6, songs: 6, runtime: 167 },   

      spoiler: [
        'A college student takes on a powerful gangster, only to discover the shocking truth that he is his father.',
        'A son hunts the man responsible for his mother\'s death.',
      ],
      dialogues: ['eroju nunchi veedu naa koduku ani nuvvu anukonela nenu ey pani cheyanu naa kodaka! anukunela chestha!'],

      clues: {   
        job: '',
        location: '',
        song: '',
        scene: '',
      },
    },
    {
      id: 'shankar-dada-zindabad',
      title: 'Shankar Dada Zindabad',
      aka: [],
      year: 2007,
      level: 'hard',

      hero: 'Chiranjeevi',
      heroine: 'Karishma Kotak', 
      director: 'Prabhu Deva',
      music: 'Devi Sri Prasad',
      villain: '',
      banner: '',   
      genre: 'Comedy drama',
      roles: [],

      stats: { imdb: 5.3, songs: 6, runtime: 152 },  

      spoiler: [
        'A goon starts seeing Mahatma Gandhi and learns to solve problems through non-violence.',
        'A lovable gangster embraces Gandhian principles, using nonviolence to fight injustice.',
      ],
      dialogues: ['ayana Gandhigiri ki thala vonchi mounam ga unnaru, adhe Dadagiri cheste meelo okadu kuda migalaru'],

      clues: {   
        job: '',
        location: '',
        song: 'Good Morning Hyderabad',
        scene: '',
      },
    },
    {
      id: 'shivaji',
      title: 'Shivaji',
      aka: [],
      year: 2007,
      level: 'medium',

      hero: 'Rajinikanth',
      heroine: 'Shriya Saran',
      director: 'Shankar',
      music: 'A. R. Rahman',
      villain: 'Suman',
      banner: '',
      genre: 'Action drama',
      roles: [],   // the character names give the title away, so this movie uses the STARRING round only

      stats: { imdb: 7.6, songs: 7, runtime: 188 },   

      spoiler: [
        'A software engineer returns from America to build free hospitals and schools, and corrupt officials try to ruin him.',
      ],
      dialogues: ['Nanna, pandulu gumpuga vasthayi... simham single ga vasthundi.'],

      clues: {   
        job: '',
        location: '',
        song: 'Vaaji Vaaji',
        scene: '',
      },
    },
    {
      id: 'tulasi',
      title: 'Tulasi',
      aka: [],
      year: 2007,
      level: 'hard',

      hero: 'Venkatesh',
      heroine: 'Nayanthara',
      director: 'Boyapati Srinu',
      music: 'Devi Sri Prasad',
      villain: '',
      banner: '',   
      genre: 'Action drama',
      roles: [],

      stats: { imdb: 0, songs: 0, runtime: 0 },  

      spoiler: [
       
      ],
      dialogues: [],

      clues: {   
        job: '',
        location: '',
        song: '',
        scene: '',
      },
    },
    {
      id: 'yamadonga',
      title: 'Yamadonga',
      aka: [],
      year: 2007,
      level: 'easy',

      hero: 'Jr NTR',
      heroine: 'Priyamani',
      director: 'S. S. Rajamouli',
      music: 'M. M. Keeravani',
      villain: '',
      banner: '',   
      genre: 'Fantasy action comedy',
      roles: [],   // the character names give the title away, so this movie uses the STARRING round only

      stats: { imdb: 7.2, songs: 7, runtime: 185 },   

      spoiler: [
        'A thief sent to the afterlife by mistake finds a loophole in the rules and tricks the god of death himself.',
        'A thief dies and goes to hell, where he steals the god of death\'s powers.',
      ],
      dialogues: ['Pulini dooram nunchi choodalanipinchindanuko choosko. Pulitho photo digalanipinchindanuko koncham risk ayina parvaledhu try cheyyochu. Sare chanuvu ichindi kadha ani pulitho aadukunte mathram.. vetadestadi!'],

      clues: {   
        job: '',
        location: '',
        song: 'Naachore',
        scene: 'A thief lands in the god of death\'s kingdom and steals his noose',
      },
    },
    {
      id: 'yogi',
      title: 'Yogi',
      aka: [],
      year: 2007,
      level: 'hard',

      hero: 'Prabhas',
      heroine: 'Nayanthara',
      director: 'V. V. Vinayak',
      music: 'Ramana Gogula',
      villain: '',
      banner: '',   
      genre: 'Action drama',
      roles: [],

      stats: { imdb: 4.7, songs: 6, runtime: 155 },   

      spoiler: [
       
      ],
      dialogues: [],

      clues: {   
        job: '',
        location: '',
        song: '',
        scene: '',
      },
    },
    {
      id: 'ashta-chamma',
      title: 'Ashta Chamma',
      aka: [],
      year: 2008,
      level: 'medium',

      hero: 'Nani',
      heroine: 'Colors Swathi',
      director: 'Mohan Krishna Indraganti',
      music: 'Kalyani Malik',
      villain: '',
      banner: '',   
      genre: 'Romantic comedy',
      roles: ['Rambabu', 'Lavanya'],

      stats: { imdb: 7.4, songs: 4, runtime: 126 },   

      spoiler: [
        'A girl obsessed with the name Mahesh wants to marry only a man called Mahesh, and a man pretends to be Mahesh.',
        'A Mahesh Babu fan insists on marrying someone named Mahesh, triggering romantic misunderstandings and unexpected revelations.',
      ],
      dialogues: ['Mahesh... aa perulo matthu undi, style undi, vibrations unnay!'],

      clues: {   
        job: '',
        location: '',
        song: 'Nammalo Ledo',
        scene: '',
      },
    },
    {
      id: 'bujjigadu',
      title: 'Bujjigadu',
      aka: [],
      year: 2008,
      level: 'medium',

      hero: 'Prabhas',
      heroine: 'Trisha',
      director: 'Puri Jagannadh',
      music: 'Sandeep Chowta',
      villain: '',   
      banner: '',   
      genre: 'Action comedy',
      roles: [],   // the character names give the title away, so this movie uses the STARRING round only

      stats: { imdb: 6.3, songs: 6, runtime: 150 },  

      spoiler: [
        'A youngster returns after twelve years, searching for his childhood sweetheart amid gang rivalries and mistaken identities.',
         
      ],
      dialogues: ['Tipper lorry velli scooter ni guddesthe ela untadho thelusa? Ala untadhi nenu guddithe!','Akkada oka Rajinikanth unnadu ikkada oka Rajinikanth unnadu Bus lo iddaru Rajinikanth-lu undaga bus ela ekkarra?!'],

      clues: {   
        job: '',
        location: '',
        song: 'Chitti Aayire',
        scene: '',
      },
    },
    {
      id: 'gamyam',
      title: 'Gamyam',
      aka: [],
      year: 2008,
      level: 'hard',

      hero: ['Sharwanand', 'Allari Naresh'],
      heroine: 'Kamalinee Mukherjee',
      director: 'Krish Jagarlamudi',
      music: 'E. S. Murthy',  
      villain: '',
      banner: '',   
      genre: 'Road drama',
      roles: ['Abhiram', 'Janaki', 'Gaali Seenu'],   

      stats: { imdb: 8.3, songs: 5, runtime: 128 },   

      spoiler: [
        'A wealthy young man searches for his love alongside a thief, discovering humanity, friendship and life\'s true meaning.',
      ],
      dialogues: [],

      clues: {  
        job: '',
        location: '',
        song: '',
        scene: 'A rich man and a small thief ride a motorbike across villages',
      },
    },
    {
      id: 'jalsa',
      title: 'Jalsa',
      aka: [],
      year: 2008,
      level: 'easy',

      hero: 'Pawan Kalyan',
      heroine: 'Ileana D\'Cruz',
      director: 'Trivikram Srinivas',
      music: 'Devi Sri Prasad',
      villain: 'Mukesh Rishi',
      banner: 'Geetha Arts',
      genre: 'Action comedy',
      roles: ['Sanjay Sahu', 'Bhagyamathi'],   

      stats: { imdb: 7.5, songs: 6, runtime: 163 },   

      spoiler: [
        'A former Naxalite settles into city life and gets entangled with the daughter of the cop who once hunted him.',
      ],
      dialogues: ['Yuddhamlo gelavadam ante shatruvuni odinchadam, champadam kaadu.', 'kkada kashtam gurinchi maatlaade hakku naaku maathrame undi, neeku ledhu!', 'Andhamga undatam ante manaki nachela undatam... edhutavaallaki nachinattu kaadhu!'],

      clues: {   
        job: '',
        location: '',
        song: 'Gaallo Thelinattunde',
        scene: 'A college student hides his past as a Naxalite',
      },
    },
    {
      id: 'kantri',
      title: 'Kantri',
      aka: [],
      year: 2008,
      level: 'hard',

      hero: 'Jr NTR',
      heroine: 'Hansika Motwani',
      director: 'Meher Ramesh',
      music: 'Mani Sharma',
      villain: '',
      banner: 'Vyjayanthi Movies',
      genre: 'Action drama',
      roles: [],

      stats: { imdb: 4.7, songs: 6, runtime: 159 },   

      spoiler: [
              ],
      dialogues: [],

      clues: {  
        job: '',
        location: '',
        song: '',
        scene: '',
      },
    },
    {
      id: 'king',
      title: 'King',
      aka: [],
      year: 2008,
      level: 'medium',

      hero: 'Nagarjuna',
      heroine: 'Trisha',
      director: 'Sreenu Vaitla',
      music: 'Devi Sri Prasad',
      villain: '',
      banner: '',
      genre: 'Action comedy',
      roles: [],

      stats: { imdb: 6.6, songs: 7, runtime: 174 },   

      spoiler: [
        'A gangster impersonates his murdered royal lookalike to protect his family and avenge his death.',
      ],
      dialogues: ['Memu ekkadiko teskelali anukuntam meeru ikkade untaru akkadiki raaru'],

      clues: {   
        job: '',
        location: '',
        song: 'Chupu Chaalu O Manmadhudaa',
        scene: '',
      },
    },
   {
      id: 'krishna',
      title: 'Krishna',
      aka: [],
      year: 2008,
      level: 'hard',

      hero: 'Ravi Teja',
      heroine: 'Trisha',
      director: 'V. V. Vinayak',
      music: 'Chakri',
      villain: '',   
      banner: '', 
      genre: 'Action comedy',
      roles: [],

      stats: { imdb: 6.3, songs: 6, runtime: 147 },   

      spoiler: [
        'In Vijayawada, unemployed youngster falls deeply for gangster\'s sister, only to protect her family from a ruthless, obsessive gangster',
 
      ],
      dialogues: ['Rey rowdyism puttindhe Bezawada lo, aa Bezawada ke rowdyism nerpadaaniki vachava nuvvu!'],

      clues: {   
        job: '',
        location: 'Vijayawada',
        song: 'Dil Mangey More',
        scene: '',
      },
    },
    {
      id: 'neninthe',
      title: 'Neninthe',
      aka: [],
      year: 2008,
      level: 'hard',

      hero: 'Ravi Teja',
      heroine: 'Siya Gautham',  
      director: 'Puri Jagannadh',
      music: 'Chakri',
      villain: '',
      banner: '',  
      genre: 'Drama',
      roles: [],

      stats: { imdb: 7, songs: 7, runtime: 156 },   

      spoiler: [
        'An assistant director tries to make his first film and faces the dark side of the industry.',
        'An ambitious assistant director struggles against industry politics, personal hardships while pursuing his filmmaking dream.'
      ],
      dialogues: ['Nenu entha yedhavano naake telidu... maaku telusu le raa', ],

      clues: {  
        job: 'Assistant director',
        location: '',
        song: '',
        scene: '',
      },
    },
    {
      id: 'parugu',
      title: 'Parugu',
      aka: [],
      year: 2008,
      level: 'medium',

      hero: 'Allu Arjun',
      heroine: 'Sheela',
      director: 'Bhaskar',
      music: 'Mani Sharma',
      villain: '',
      banner: '',   
      genre: 'Romantic drama',
      roles: ['Krishna', 'Meena'],   

      stats: { imdb: 7.1, songs: 6, runtime: 165 },   

      spoiler: [
        'A young man falls for a village headman\'s daughter while helping locate her missing sister after elopement.',
        'A young man is blamed when his friend elopes with a powerful man\'s daughter, and has to help find them.',
      ],
      dialogues: [],

      clues: {   
        job: '',
        location: '',
        song: 'Nammavemo Gaani',
        scene: '',
      },
    },
    {
      id: 'ready',
      title: 'Ready',
      aka: [],
      year: 2008,
      level: 'medium',

      hero: 'Ram Pothineni',
      heroine: 'Genelia D\'Souza',
      director: 'Sreenu Vaitla',
      music: 'Devi Sri Prasad',
      villain: '',
      banner: '',   
      genre: 'Action comedy',
      roles: ['Chandu', 'Pooja'], 

      stats: { imdb: 7.2, songs: 6, runtime: 165 },   

      spoiler: [
        'A young man rescues the wrong bride from a wedding and has to win over her two violent uncles.',
      ],
      dialogues: ['Nenu apara Brahmmi ni antaava? Innaallu naa shakthi naaku theliyaka, ee jaffa gaalla daggara anavasaramga pani chesaanantaava?!'],

      clues: {   
        job: '',
        location: '',
        song: 'Om Namaste Bolo',
        scene: '',
      },
    },
    {
      id: 'arya-2',
      title: 'Arya 2',
      aka: [],
      year: 2009,
      level: 'easy',

      hero: 'Allu Arjun',
      heroine: 'Kajal Aggarwal',
      director: 'Sukumar',
      music: 'Devi Sri Prasad',
      villain: '',  
      banner: '',
      genre: 'Romantic action drama',
      roles: [],   // the character names give the title away, so this movie uses the STARRING round only

      stats: { imdb: 7.5, songs: 6, runtime: 155 },   

      spoiler: [
        'An obsessive young man struggles to protect his best friend while both fall in love with one woman.',
        'An orphan who loves his best friend too much falls for the same girl as him.',
      ],
      dialogues: ['Edam chethi tho utharam raasinandhuku sorry... kudi chethi tho raase adrustham eppudisthav?!'],

      clues: {   
        job: '',
        location: '',
        song: 'Ringa Ringa',
        scene: '',
      },
    },
    {
      id: 'billa',
      title: 'Billa',
      aka: [],
      year: 2009,
      level: 'medium',

      hero: 'Prabhas',
      heroine: 'Anushka Shetty',
      director: 'Meher Ramesh',
      music: 'Mani Sharma',
      villain: '',
      banner: '',
      genre: 'Action thriller',
      roles: [],   // the character names give the title away, so this movie uses the STARRING round only

      stats: { imdb: 6.2, songs: 6, runtime: 149 },   

      spoiler: [
        'A stylish international don has a lookalike, and a policeman needs a petty thief to take his place and bring him down.',
        'A small-time thief who looks like a don is sent into the gang to bring it down.',
      ],
      dialogues: ['Trust no one, kill anyone, be only one!'],

      clues: {   
        job: '',
        location: 'Malaysia',
        song: 'Bommali',
        scene: 'A thief practises walking and talking like a don',
      },
    },
    {
      id: 'ek-niranjan',
      title: 'Ek Niranjan',
      aka: [],
      year: 2009,
      level: 'hard',

      hero: 'Prabhas',
      heroine: 'Kangana Ranaut',
      director: 'Puri Jagannadh',
      music: 'Mani Sharma',
      villain: '',   
      banner: '',   
      genre: 'Action romance',
      roles: [],

      stats: { imdb: 5.4, songs: 6, runtime: 143 },  

      spoiler: [
        'An orphan bounty hunter who catches criminals for money searches for his lost parents.',
        'A man nicknamed Chotu helps the police catch criminals while looking for his family.',
      ],
      dialogues: [],

      clues: {  
        job: 'Bounty hunter',
        location: '',
        song: '',
        scene: 'A man catches criminals for a police reward',
      },
    },
    {
      id: 'kick',
      title: 'Kick',
      aka: [],
      year: 2009,
      level: 'medium',

      hero: 'Ravi Teja',
      heroine: 'Ileana D\'Cruz',
      director: 'Surender Reddy',
      music: 'S. Thaman',
      villain: '',   
      banner: '',   
      genre: 'Action comedy',
      roles: ['Kalyan', 'Naina', 'Kalyan Krishna'],   

      stats: { imdb: 7.9, songs: 6, runtime: 160 },  

      spoiler: [
        'A man who does everything for a thrill is secretly a thief who steals to fund surgeries for poor children.', 
        'A thrill seeking youngster becomes a mysterious thief, while a determined police officer pursues him across countries.',

      ],
      dialogues: ['I\'m Raj Prakash Raj! Hi... I\'m Jigiri Jinganiya!'],

      clues: {   
        job: '',
        location: 'Hyderabad and Malaysia',
        song: 'Bossuu Manaki Memory Lossuu',
        scene: 'A man does everything only for the thrill of it',
      },
    },
    {
      id: 'magadheera',
      title: 'Magadheera',
      aka: [],
      year: 2009,
      level: 'easy',

      hero: 'Ram Charan',
      heroine: 'Kajal Aggarwal',
      director: 'S. S. Rajamouli',
      music: 'M. M. Keeravani',
      villain: 'Dev Gill',
      banner: 'Geetha Arts',
      genre: 'Fantasy action romance',
      roles: ['Harsha', 'Indu'],   

      stats: { imdb: 7.7, songs: 6, runtime: 158 },

      spoiler: [
        'A young man and a woman feel a bond they cannot explain. Four hundred years earlier, a fearless warrior and a princess were kept apart by a jealous commander.',
        'A bike racer meets a girl whose touch reminds him of a warrior\'s life 400 years ago.',
      ],
      dialogues: ['Okkokkadini kaadu Sher Khan... okesaari vanda mandini pampinchu.'],

      clues: {  
        job: '',
        location: '',
        song: 'Dheera Dheera',
        scene: 'One warrior fights off a hundred soldiers',
      },
    },
    {
      id: 'oy',
      title: 'Oy',
      aka: [],
      year: 2009,
      level: 'hard',

      hero: 'Siddharth',
      heroine: 'Shamili',
      director: 'Anand Ranga',
      music: 'Yuvan Shankar Raja',
      villain: '',
      banner: '',   
      genre: 'Romantic drama',
      roles: ['Uday', 'Sandhya'],

      stats: { imdb: 7.2, songs: 6, runtime: 164 },  

      spoiler: [
        'A carefree millionaire falls deeply in love with a disciplined girl, discovering her terminal illness and fulfilling wishes.',
      ],
      dialogues: [],

      clues: {   
        job: '',
        location: '',
        song: 'Sehri Sehari',
        scene: '',
      },
    },

    // ── 2010s ─────────────────────────────────────────────

    {
      id: 'adhurs',
      title: 'Adhurs',
      aka: [],
      year: 2010,
      level: 'medium',

      hero: 'Jr NTR',
      heroine: 'Nayanthara',
      director: 'V. V. Vinayak',
      music: 'Devi Sri Prasad',
      villain: 'Mahesh Manjrekar',
      banner: '',  
      genre: 'Action comedy',
      roles: [],

      stats: { imdb: 6.8, songs: 6, runtime: 150 },   

      spoiler: [
        'Twin brothers, one a timid priest and the other a brave guy, swap roles to protect a family from a don.',
        'Twins separated at birth, one a shy priest and one a fearless man, team up against a gangster.',
      ],
      dialogues: ['Nuvvantha harsh ga matladaku Chandu, nenu feel avuthanu'],

      clues: {  
        job: 'Temple priest',
        location: '',
        song: 'Chandrakala',
        scene: 'Twins separated at birth, one of them a priest\'s assistant',
      },
    },
    {
      id: 'brindavanam',
      title: 'Brindavanam',
      aka: [],
      year: 2010,
      level: 'medium',

      hero: 'Jr NTR',
      heroine: 'Samantha',
      director: 'Vamshi Paidipally',
      music: 'S. Thaman',
      villain: 'Prakash Raj',
      banner: '',
      genre: 'Family action comedy',
      roles: ['Krish', 'Indu', 'Bhoomi'],   

      stats: { imdb: 7.1, songs: 6, runtime: 170 },  

      spoiler: [
        'A young man pretends to be a girl\'s boyfriend to help her, and ends up fixing a family feud in her village.',
        'A city boy goes to a village as a fake lover and has to keep two families from fighting.',
      ],
      dialogues: ['City nunchi vachadu softga lover boy la unnadu anukuntunnavemo... character kothaga undani try chesa, lopala original alane undi. Danni bayataku techavanuko... racha rache!"'],

      clues: {   
        job: '',
        location: '',
        song: '',
        scene: 'A man poses as a girl\'s boyfriend and ends up uniting two feuding families',
      },
    },
    {
      id: 'darling',
      title: 'Darling',
      aka: [],
      year: 2010,
      level: 'medium',

      hero: 'Prabhas',
      heroine: 'Kajal Aggarwal',
      director: 'A. Karunakaran',
      music: 'G. V. Prakash Kumar',
      villain: '',
      banner: '',   
      genre: 'Romantic comedy',
      roles: ['Prabha', 'Nandhini'],

      stats: { imdb: 7.4, songs: 6, runtime: 151 },  

      spoiler: [
        'A man invents a fake Swiss romance with his childhood friend to escape a forced marriage.',
      ],
      dialogues: ['Dhammu anedi pradarsinchedi kaadu... avasaranni batti ade bayatikostundi.'],

      clues: {   
        job: '',
        location: 'Araku and Switzerland',
        song: 'Neeve',
        scene: 'A man invents a love story set in Switzerland to escape a forced marriage with a gangster\'s daughter',
      },
    },
    {
      id: 'don-seenu',
      title: 'Don Seenu',
      aka: [],
      year: 2010,
      level: 'hard',

      hero: 'Ravi Teja',
      heroine: 'Shriya Saran',
      director: 'Gopichand Malineni',
      music: 'Mani Sharma',
      villain: '',
      banner: '',   
      genre: 'Action comedy',
      roles: [],

      stats: { imdb: 6, songs: 5, runtime: 164 },   

      spoiler: [
        'Sent to Germany by his gangster boss, aspiring don accidentally woos his own boss\'s sister instead of their rival\'s',
        
      ],
      dialogues: [],

      clues: { 
        job: '',
        location: '',
        song: '',
        scene: '',
      },
    },
    {
      id: 'khaleja',
      title: 'Khaleja',
      aka: [],
      year: 2010,
      level: 'medium',

      hero: 'Mahesh Babu',
      heroine: 'Anushka Shetty',
      director: 'Trivikram Srinivas',
      music: 'Mani Sharma',
      villain: 'Prakash Raj',
      banner: '',   
      genre: 'Action comedy',
      roles: ['Alluri Seetarama Raju', 'Subhashini'],   

      stats: { imdb: 7.6, songs: 6, runtime: 170 },   

      spoiler: [
        'A taxi driver with a strange knack for being in the right place at the right time ends up as the saviour of a village.',
        'A taxi driver is mistaken for a god by a dying village, and finds out they may be right.',
      ],
      dialogues: ['ee navvu varam... nee kopam shaapam... nee maata shaasanam.'],

      clues: {  
        job: 'Taxi driver',
        location: 'Rajasthan desert',
        song: 'Sada Siva',
        scene: 'A taxi driver is believed to be a god by a dying village',
      },
    },
    {
      id: 'leader',
      title: 'Leader',
      aka: [],
      year: 2010,
      level: 'medium',

      hero: 'Rana Daggubati',
      heroine: 'Richa Gangopadhyay',
      director: 'Sekhar Kammula',
      music: 'Mickey J. Meyer',
      villain: 'Kota Srinivasa Rao',
      banner: '',   
      genre: 'Political drama',
      roles: [],

      stats: { imdb: 8, songs: 5, runtime: 169 },   

      spoiler: [
        'The young son of a murdered chief minister takes over the post and decides to clean up politics.',
        'An NRI becomes CM and finds corruption everywhere, including his own family.',
      ],
      dialogues: [],

      clues: {  
        job: '',
        location: '',
        song: '',
        scene: '',
      },
    },
    {
      id: 'maryada-ramanna',
      title: 'Maryada Ramanna',
      aka: [],
      year: 2010,
      level: 'medium',

      hero: 'Sunil',
      heroine: 'Saloni Aswani',
      director: 'S. S. Rajamouli',
      music: 'M. M. Keeravani',
      villain: 'Nagineedu',
      banner: 'Arka Media Works',
      genre: 'Action comedy',
      roles: ['Ramu', 'Aparna'],   

      stats: { imdb: 7.5, songs: 5, runtime: 125 },  

      spoiler: [
        'A man is safe from a family that wants to kill him as long as he stays inside their house, because they never harm a guest.',
        
      ],
      dialogues: ['Raatledha?'],

      clues: {  
        job: '',
        location: '',
        song: 'Ammayi Kitiki Pakkana',
        scene: '',
      },
    },
    {
      id: 'orange',
      title: 'Orange',
      aka: [],
      year: 2010,
      level: 'medium',

      hero: 'Ram Charan',
      heroine: 'Genelia D\'Souza',
      director: 'Bhaskar',
      music: 'Harris Jayaraj',
      villain: '',
      banner: 'Anjana Productions',
      genre: 'Romantic comedy',
      roles: ['Ram', 'Jaanu'],   

      stats: { imdb: 6.7, songs: 6, runtime: 163 },  
      spoiler: [
        'A man who believes love is a not permanent meets a girl who believes it is everything, and neither of them quite keeps to their rules.',
       
      ],
      dialogues: ['prema konthakaalam maathrame baaguntundi."'],

      clues: {  
        job: '',
        location: 'Sydney',
        song: 'Rooba Rooba',
        scene: 'painting graffiti on a wall in Sydney',
      },
    },
    {
      id: 'ragada',
      title: 'Ragada',
      aka: [],
      year: 2010,
      level: 'hard',

      hero: 'Nagarjuna',
      heroine: 'Anushka Shetty',
      director: 'Veeru Potla',   
      music: 'S. Thaman',
      villain: '',
      banner: '',   
      genre: 'Action comedy',
      roles: [],

      stats: { imdb: 6, songs: 6, runtime: 146 },  

      spoiler: [   
       
      ],
      dialogues: [],

      clues: {  
        job: '',
        location: '',
        song: 'Bholo Ashta Lakshmi',
        scene: '',
      },
    },
    {
      id: 'rama-rama-krishna-krishna',
      title: 'Rama Rama Krishna Krishna',
      aka: [],
      year: 2010,
      level: 'hard',

      hero: 'Ram Pothineni',
      director: 'Srivas',
      music: 'M. M. Keeravani',
      villain: '',
      banner: 'Sri Venkateswara Creations',
      genre: 'Action drama',
      roles: [],

      stats: { imdb: 5.5, songs: 6, runtime: 154 }, 

      spoiler: [
      ],
      dialogues: [],

      clues: {   
        job: '',
        location: '',
        song: '',
        scene: '',
      },
    },
    {
      id: 'robo',
      title: 'Robo',
      aka: [],
      year: 2010,
      level: 'easy',

      hero: 'Rajinikanth',
      heroine: 'Aishwarya Rai',
      director: 'Shankar',
      music: 'A. R. Rahman',
      villain: 'Rajinikanth',
      banner: 'Sun Pictures',
      genre: 'Sci-fi action',
      roles: ['Vaseegaran', 'Sana', 'Chitti'],   

      stats: { imdb: 7.1, songs: 6, runtime: 174 },   

      spoiler: [
        'A scientist builds a human-like machine that falls in love with his fiancée and turns violent when it is rejected.',
        
      ],
      dialogues: ['Happy Diwali folks...'],

      clues: {   
        job: '',
        location: '',
        song: 'Kilimanjaro',
        scene: 'Chitti replicates into hundreds, forming a giant ball-shaped fighting army.',
      },
    },
    {
      id: 'simha',
      title: 'Simha',
      aka: [],
      year: 2010,
      level: 'medium',

      hero: 'Balakrishna',
      heroine: 'Nayanthara',
      director: 'Boyapati Srinu',
      music: 'Chakri',
      villain: '',
      banner: '',   
      genre: 'Action drama',
      roles: [],

      stats: { imdb: 6, songs: 6, runtime: 133 },   

      spoiler: [
        
      ],
      dialogues: ['Choodu, oka vaipe choodu... rendo vaipu chudali anukoku, tattukolev.'],

      clues: {   
        job: '',
        location: '',
        song: '',
        scene: '',
      },
    },
    {
      id: 'yamudu',
      title: 'Yamudu',
      aka: [],
      year: 2010,
      level: 'medium',

      hero: 'Suriya',
      heroine: 'Anushka Shetty',
      director: 'Hari',
      music: 'Devi Sri Prasad',
      villain: 'Prakash Raj',
      banner: '',
      genre: 'Action',
      roles: ['Narasimham', 'Kavya'], 

      stats: { imdb: 7, songs: 5, runtime: 153 },   

      spoiler: [
        'Narasimha, an honest inspector, clashes with gangster Purushottam and gets transferred to Vizag, where the ruthless criminal controls everything.',
      ],
      dialogues: [],

      clues: {  
        job: '',
        location: '',
        song: '',
        scene: '',
      },
    },
  
    {
      id: '100-love',
      title: '100% Love',
      aka: [],
      year: 2011,
      level: 'medium',

      hero: 'Naga Chaitanya',
      heroine: 'Tamannaah',
      director: 'Sukumar',
      music: 'Devi Sri Prasad',
      villain: '',
      banner: 'Geetha Arts',   
      genre: 'Romantic comedy',
      roles: ['Balu', 'Mahalakshmi'],  

      stats: { imdb: 7, songs: 9, runtime: 141 },  

      spoiler: [
        'A college topper and his cousin from the village turn their rivalry over exam marks into an ego war that hides their love.',
        'A proud topper cannot bear it when the girl staying in his house starts beating him in every exam.',
      ],
      dialogues: [],

      clues: {
        job: '',
        location: '',
        song: 'A Square B Square',
        scene: 'The hero quietly sabotages his cousin before an exam to stay the topper',
      },
    },
    {
      id: '7th-sense',
      title: '7th Sense',
      aka: [],
      year: 2011,
      level: 'medium',

      hero: 'Suriya',
      heroine: 'Shruti Haasan',
      director: 'A. R. Murugadoss',
      music: 'Harris Jayaraj',
      villain: '',
      banner: '',   
      genre: 'Sci-fi action',
      roles: [],   

      stats: { imdb: 6.5, songs: 6, runtime: 159 },   

      spoiler: [
        'A Chinese agent uses hypnosis to spread a virus in India, and the answer lies with a 5th-century martial artist.',
      ],
      dialogues: [],

      clues: {
        job: '',
        location: '',
        song: '',
        scene: 'The villain hypnotises an entire street of people into attacking the hero',
      },
    },
    {
      id: 'ala-modalaindi',
      title: 'Ala Modalaindi',
      aka: [],
      year: 2011,
      level: 'medium',

      hero: 'Nani',
      heroine: 'Nithya Menen',
      director: 'B. V. Nandini Reddy',
      music: 'Kalyani Malik',
      villain: '',
      banner: '',   
      genre: 'Romantic comedy',
      roles: ['Gautham', 'Nitya'], 

      stats: { imdb: 7.6, songs: 5, runtime: 135 },   

      spoiler: [
        'Two heartbroken strangers meet at a wedding, become friends and slowly realise they are perfect for each other.',

      ],
      dialogues: [],

      clues: {   
        job: '',
        location: '',
        song: '',
        scene: '',
      },
    },
    {
      id: 'badrinath',
      title: 'Badrinath',
      aka: [],
      year: 2011,
      level: 'medium',

      hero: 'Allu Arjun',
      heroine: 'Tamannaah',
      director: 'V. V. Vinayak',
      music: 'M. M. Keeravani',
      villain: '',
      banner: '',
      genre: 'Action drama',
      roles: [],   // the character names give the title away, so this movie uses the STARRING round only

      stats: { imdb: 0, songs: 0, runtime: 0 },   

      spoiler: [
         
      ],
      dialogues: [],

      clues: {   
        job: '',
        location: '',
        song: '',
        scene: '',
      },
    },
    {
      id: 'dookudu',
      title: 'Dookudu',
      aka: [],
      year: 2011,
      level: 'easy',

      hero: 'Mahesh Babu',
      heroine: 'Samantha',
      director: 'Sreenu Vaitla',
      music: 'S. Thaman',
      villain: 'Sonu Sood',
      banner: '14 Reels Entertainment',
      genre: 'Action comedy',
      roles: ['Ajay', 'Prashanthi', 'Padmasri'],   

      stats: { imdb: 7.4, songs: 6, runtime: 171 },

      spoiler: [
        
        'A cop stages a fake political life around his father, who just woke from a coma, to protect him from shock.',
      ],
      dialogues: ['Kallu unnodu mundhu matrame choosthadu, kaani dimaag unnodu duniya motham choosthadu.'],

      clues: {
        job: '',
        location: '',
        song: 'Poovai Poovai',
        scene: 'A cop makes his father believe he has become an MLA',
      },
    },
    {
      id: 'gaganam',
      title: 'Gaganam',
      aka: [],
      year: 2011,
      level: 'hard',

      hero: 'Nagarjuna',
      heroine: '',   
      director: 'Radha Mohan',
      music: 'Pravin Mani',  
      villain: '',
      banner: '',   
      genre: 'Hijack thriller',
      roles: [],

      stats: { imdb: 0, songs: 0, runtime: 0 },   

      spoiler: [
        'A National Security Guard commando negotiates with terrorists who have hijacked a plane.',
        
      ],
      dialogues: [],

      clues: {  
        job: '',
        location: '',
        song: '',
        scene: '',
      },
    },
    {
      id: 'golconda-high-school',
      title: 'Golconda High School',
      aka: [],
      year: 2011,
      level: 'hard',

      hero: 'Sumanth',
      heroine: 'Swati Reddy',
      director: 'Mohan Krishna Indraganti',
      music: 'Kalyani Malik',
      villain: '',
      banner: '',   
      genre: 'Sports drama',
      roles: [],

      stats: { imdb: 7, songs: 4, runtime: 127 },   

      spoiler: [
        'A former cricketer trains a team of schoolboys to save their school ground from being sold.',
        
      ],
      dialogues: [],

      clues: {   
        job: '',
        location: '',
        song: '',
        scene: '',
      },
    },
    {
      id: 'kandireega',
      title: 'Kandireega',
      aka: [],
      year: 2011,
      level: 'hard',

      hero: 'Ram Pothineni',
      heroine: 'Hansika Motwani',
      director: 'Santosh Srinivas',
      music: 'S. Thaman',
      villain: 'Sonu Sood',
      banner: '',  
      genre: 'Action comedy',
      roles: [],   

      stats: { imdb: 6.2, songs: 5, runtime: 160 },   
      spoiler: [
      ],
      dialogues: [],

      clues: {   
        job: '',
        location: '',
        song: '',
        scene: '',
      },
    },
    {
      id: 'mirapakay',
      title: 'Mirapakay',
      aka: [],
      year: 2011,
      level: 'medium',

      hero: 'Ravi Teja',
      heroine: 'Richa Gangopadhyay',
      director: 'Harish Shankar',
      music: 'S. Thaman',
      villain: '',
      banner: '',   
      genre: 'Action comedy',
      roles: [],

      stats: { imdb: 6.5, songs: 6, runtime: 150 },  

      spoiler: [
        'A Hindi lecturer in a college is secretly an undercover cop hunting a terrorist.',
        
      ],
      dialogues: [],

      clues: {   
        job: 'Hindi lecturer',
        location: '',
        song: 'Silakaa',
        scene: '',
      },
    },
    {
      id: 'mr-perfect',
      title: 'Mr. Perfect',
      aka: [],
      year: 2011,
      level: 'medium',

      hero: 'Prabhas',
      heroine: 'Kajal Aggarwal',
      director: 'Dasaradh',
      music: 'Devi Sri Prasad',
      villain: '',
      banner: '',
      genre: 'Romantic family drama',
      roles: ['Vicky', 'Priya', 'Maggie'],  

      stats: { imdb: 7.1, songs: 6, runtime: 145 },   

      spoiler: [
        'A self assured young man rejects compromise in relationships, but love and unexpected experiences teach him that adjustment is essential for happiness.',
      ],
      dialogues: ['Gelavaalante longaali vongaali ante nenu nammanu… Mundu manalo matter undaali'],

      clues: {   
        job: 'Game designer',
        location: '',
        song: 'Rao Gari Abbai',
        scene: 'Vicky wins a "Made for Each Other" chocolate contest that matches him with Maggie.',
      },
    },
    {
      id: 'oosaravelli',
      title: 'Oosaravelli',
      aka: [],
      year: 2011,
      level: 'hard',

      hero: 'Jr NTR',
      heroine: 'Tamannaah',
      director: 'Surender Reddy',
      music: 'Devi Sri Prasad',
      villain: '',
      banner: '',
      genre: 'Action thriller',
      roles: ['Tony', 'Niharika'],   

      stats: { imdb: 6.5, songs: 7, runtime: 162 },   

      spoiler: [
        
      ],
      dialogues: [],

      clues: {   
        job: '',
        location: '',
        song: 'Love Ante Caring',
        scene: '',
      },
    },
    {
      id: 'panjaa',
      title: 'Panjaa',
      aka: [],
      year: 2011,
      level: 'medium',

      hero: 'Pawan Kalyan',
      heroine: 'Anjali Lavania',
      director: 'Vishnuvardhan',
      music: 'Yuvan Shankar Raja',
      villain: 'Jackie Shroff',
      banner: '',  
      genre: 'Action thriller',
      roles: ['Jai', 'Sandhya'],  

      stats: { imdb: 6.4, songs: 5, runtime: 156 },   

      spoiler: [
        
        'A loyal gangster\'s henchman kills his boss\'s son after witnessing a brutal crime, forcing him to flee and confront dangerous enemies.',
      ],
      dialogues: ['Saayam pondina vaadu kruthagnatha chupinchakapovadam entha thappo… saayam chesina vaadu kruthagnatha korukovadam kuda anthe thappu'],

      clues: {   
        job: '',
        location: '',
        song: 'Veyira Cheyyi Veyira',
        scene: '',
      },
    },
    {
      id: 'shakthi',
      title: 'Shakthi',
      aka: [],
      year: 2011,
      level: 'hard',

      hero: 'Jr NTR',
      heroine: 'Ileana D\'Cruz',
      director: 'Meher Ramesh',
      music: 'Mani Sharma',
      villain: 'Jackie Shroff',
      banner: 'Vyjayanthi Movies',
      genre: 'Fantasy action',
      roles: [],

      stats: { imdb: 3.6, songs: 6, runtime: 166 },

      spoiler: [
        
      ],
      dialogues: [],

      clues: {   
        job: '',
        location: '',
        song: '',
        scene: '',
      },
    },
    {
      id: 'solo',
      title: 'Solo',
      aka: [],
      year: 2011,
      level: 'hard',

      hero: 'Nara Rohit',
      heroine: 'Nisha Agarwal',
      director: 'Parasuram',
      music: 'Mani Sharma',
      villain: '',
      banner: '',   
      genre: 'Romantic drama',
      roles: [],

      stats: { imdb: 0, songs: 0, runtime: 0 },  

      spoiler: [
        'An orphan wants to marry into a big family, and his girlfriend\'s father wants her husband to have a family.',
      ],
      dialogues: [],

      clues: {   
        job: '',
        location: '',
        song: '',
        scene: '',
      },
    },
    {
      id: 'teen-maar',
      title: 'Teen Maar',
      aka: [],
      year: 2011,
      level: 'hard',

      hero: 'Pawan Kalyan',
      heroine: 'Trisha',
      director: 'Jayanth C. Paranjee',
      music: 'Mani Sharma',
      villain: '',
      banner: '',   
      genre: 'Romantic drama',
      roles: [],   

      stats: { imdb: 5.5, songs: 6, runtime: 150 },   

      spoiler: [
      ],
      dialogues: ['Kaaranam leni kopam, gauravam leni prema, badhyatha leni yavvanam, gnaapakam leni vruddhapyam anavasaram.'],

      clues: {  
        job: '',
        location: '',
        song: 'Aale Baale',
        scene: '',
      },
    },
    {
      id: 'businessman',
      title: 'Businessman',
      aka: [],
      year: 2012,
      level: 'easy',

      hero: 'Mahesh Babu',
      heroine: 'Kajal Aggarwal',
      director: 'Puri Jagannadh',
      music: 'S. Thaman',
      villain: 'Prakash Raj',
      banner: '',
      genre: 'Crime action',
      roles: ['Surya', 'Chitra'],   

      stats: { imdb: 7.2, songs: 5, runtime: 133 }, 

      spoiler: [
        'A man comes to Mumbai to build his own underworld empire, with a secret plan.',
      ],
      dialogues: ['Yuddham chethakaanode dharmam gurinchi maatladathaadu sir.', 'Nenu mellaga elagola bathikeyyadaaniki raaledu… Mumbai ni ucha poyinchadaaniki vachaanu.'],

      clues: {  
        job: 'Gangster',
        location: 'Mumbai',
        song: 'Sir Osthara',
        scene: '',
      },
    },
    {
      id: 'cameraman-gangatho-rambabu',
      title: 'Cameraman Gangatho Rambabu',
      aka: [],
      year: 2012,
      level: 'medium',

      hero: 'Pawan Kalyan',
      heroine: 'Tamannaah',
      director: 'Puri Jagannadh',
      music: 'Mani Sharma',
      villain: 'Prakash Raj',
      banner: '',
      genre: 'Political action drama',
      roles: [],   // the character names give the title away, so this movie uses the STARRING round only

      stats: { imdb: 5.7, songs: 6, runtime: 155 },   

      spoiler: [
        'A hot-headed mechanic becomes a journalist and exposes a dangerous politician.',
        'A mechanic with a temper joins a TV channel to fight a corrupt politician.',
      ],
      dialogues: ['Pakka raashtraalante gouravam leni neeku jandaavandanam chese hakku ledu, Jana Gana Mana paade arhatha ledu.'],

      clues: {  
        job: 'Mechanic turned journalist',
        location: '',
        song: 'Joramochindhi',
        scene: 'A camerawoman recruits a hot headed mechanic as a reporter.',
      },
    },
    {
      id: 'damarukam',
      title: 'Damarukam',
      aka: [],
      year: 2012,
      level: 'hard',

      hero: 'Nagarjuna',
      heroine: 'Anushka Shetty',
      director: 'Srinivasa Reddy',
      music: 'Devi Sri Prasad',
      villain: 'Ravi Shankar',   
      banner: '',  
      genre: 'Fantasy action',
      roles: [],

      stats: { imdb: 5.5, songs: 6, runtime: 157 },  

      spoiler: [
        'A man who does not believe in God is chosen to stop a demon who wants to marry the woman he loves.',
        
      ],
      dialogues: [],

      clues: {   
        job: '',
        location: '',
        song: '',
        scene: '',
      },
    },
    {
      id: 'dammu',
      title: 'Dammu',
      aka: [],
      year: 2012,
      level: 'hard',

      hero: 'Jr NTR',
      heroine: 'Trisha',
      director: 'Boyapati Srinu',
      music: 'M. M. Keeravani',
      villain: '',  
      banner: '',   
      genre: 'Action drama',
      roles: [],

      stats: { imdb: 5.3, songs: 6, runtime: 155 },   

      spoiler: [
        'An orphan adopted by a royal family as their heir has to fight their sworn enemies.',
        
      ],
      dialogues: [],

      clues: {   
        job: '',
        location: '',
        song: 'Vaastu Bagunde',
        scene: '',
      },
    },
    
    {
      id: 'eega',
      title: 'Eega',
      aka: [],
      year: 2012,
      level: 'easy',

      hero: 'Nani',
      heroine: 'Samantha',
      director: 'S. S. Rajamouli',
      music: 'M. M. Keeravani',
      villain: 'Sudeep',
      banner: 'Vaaraahi Chalana Chitram',
      genre: 'Fantasy comedy thriller',
      roles: [],   

      stats: { imdb: 7.7, songs: 4, runtime: 134 },

      spoiler: [
        'A young man murdered by a ruthless businessman is reborn as a fly and sets out to take his revenge.',
        
      ],
      dialogues: ['Meeru loose ye… jadaina tight ga kattukondi.'],

      clues: {   
        job: '',
        location: '',
        song: 'Nene Nanine',
        scene: 'A murdered man is reborn as a housefly',
      },
    },
    {
      id: 'gabbar-singh',
      title: 'Gabbar Singh',
      aka: [],
      year: 2012,
      level: 'easy',

      hero: 'Pawan Kalyan',
      heroine: 'Shruti Haasan',
      director: 'Harish Shankar',
      music: 'Devi Sri Prasad',
      villain: 'Abhimanyu Singh',
      banner: 'Parameswara Art Productions',
      genre: 'Action comedy',
      roles: [],   // the character names give the title away, so this movie uses the STARRING round only

      stats: { imdb: 7.1, songs: 6, runtime: 153 },

      spoiler: [
        
        'A police officer who names himself after a famous Hindi villain cleans up a town and falls for a pot-maker\'s daughter.',
      ],
      dialogues: ['Naaku konchem thikka undi, daaniko lekka undi.', 'Nenu trend ni follow avvanu, trend set chestha'],

      clues: {  
        job: 'Police inspector',
        location: 'Kondaveedu',
        song: 'Kevvu Keka',
        scene: 'A cop plays antakshari',
      },
    },
    {
      id: 'ishq',
      title: 'Ishq',
      aka: [],
      year: 2012,
      level: 'medium',

      hero: 'Nithiin',
      heroine: 'Nithya Menen',
      director: 'Vikram Kumar',
      music: 'Anup Rubens',  
      villain: '',
      banner: '',
      genre: 'Romantic action',
      roles: ['Rahul', 'Priya'],   

      stats: { imdb: 7.4, songs: 5, runtime: 160 },   

      spoiler: [
        'A young man falls for a girl at an airport, but her short-tempered brother does not approve.',

      ],
      dialogues: [],

      clues: {  
        job: '',
        location: '',
        song: 'Oh Priya Priya',
        scene: '',
      },
    },
    {
      id: 'julayi',
      title: 'Julayi',
      aka: [],
      year: 2012,
      level: 'easy',

      hero: 'Allu Arjun',
      heroine: 'Ileana D\'Cruz',
      director: 'Trivikram Srinivas',
      music: 'Devi Sri Prasad',
      villain: 'Sonu Sood',
      banner: 'Haarika & Hassine Creations',
      genre: 'Action comedy',
      roles: ['Ravi', 'Madhu', 'Bittu'],   

      stats: { imdb: 7.3, songs: 6, runtime: 160 },   

      spoiler: [
       
        'A smart young man who believes in quick money prevents a bank robbery and makes an enemy of the gangster behind it.',
      ],
      dialogues: ['Cheppali sir... nannu gelakoddu, chastharu ani cheppakapothe ela?'],

      clues: {   
        job: '',
        location: '',
        song: 'O Madhu',
        scene: '',
      },
    },
    
    {
      id: 'racha',
      title: 'Racha',
      aka: [],
      year: 2012,
      level: 'medium',

      hero: 'Ram Charan',
      heroine: 'Tamannaah',
      director: 'Sampath Nandi',
      music: 'Mani Sharma',
      villain: '',
      banner: '',
      genre: 'Action drama',
      roles: ['Raj', 'Chaitra'],
       
      stats: { imdb: 4.6, songs: 5, runtime: 142 },  

      spoiler: [
        
        'A betting expert in Hyderabad makes a bet to make a mine owner\'s daughter fall for him.',
      ],
      dialogues: [],

      clues: {   
        job: '',
        location: '',
        song: 'oka padam',
        scene: 'A man accepts a bet to make a girl love him',
      },
    },
    {
      id: 'rebel',
      title: 'Rebel',
      aka: [],
      year: 2012,
      level: 'medium',

      hero: 'Prabhas',
      heroine: 'Tamannaah',
      director: 'Raghava Lawrence',
      music: 'Raghava Lawrence',
      villain: '',
      banner: '',   
      genre: 'Action drama',
      roles: ['Rishi', 'Nandini'],  

      stats: { imdb: 5.1, songs: 4, runtime: 157 }, 
       
      spoiler: [
        'After his parents are murdered, a vengeful son hunts down the ruthless gangsters responsible, uncovering a shocking family betrayal.',
      ],
      dialogues: [],

      clues: {   
        job: '',
        location: '',
        song: '',
        scene: '',
      },
    },
    {
      id: 'sarocharu',
      title: 'Sarocharu',
      aka: [],
      year: 2012,
      level: 'hard',

      hero: 'Ravi Teja',
      heroine: 'Kajal Aggarwal',
      director: 'Parasuram',
      music: 'Devi Sri Prasad',
      villain: '',
      banner: '',   
      genre: 'Romantic comedy',
      roles: [],

      stats: { imdb: 4.7, songs: 5 , runtime: 137 },  

      spoiler: [
        'A young woman travels from Italy to India with her beloved, only to discover his complicated romantic past and hidden truth.',
        
      ],
      dialogues: [],

      clues: {  
        job: '',
        location: '',
        song: '',
        scene: '',
      },
    },
    {
      id: 'thuppakki',
      title: 'Thuppakki',
      aka: [],
      year: 2012,
      level: 'medium',

      hero: 'Vijay',
      heroine: 'Kajal Aggarwal',
      director: 'A. R. Murugadoss',
      music: 'Harris Jayaraj',
      villain: 'Vidyut Jammwal',
      banner: '',
      genre: 'Action thriller',
      roles: ['Jagadish', 'Nisha'],   

      stats: { imdb: 8, songs: 6, runtime: 169 },   

      spoiler: [
        'An army officer on leave in Mumbai discovers sleeper cells planning bomb blasts and hunts them.',
      ],
      dialogues: ['Oka second kuda theda lekunda 12 mandini okesaari shoot cheyaali.'],

      clues: {  
        job: 'Army captain',
        location: '',
        song: '',
        scene: 'Twelve officers simultaneously shoot twelve sleeper agents across Mumbai.',
      },
    },
    {
      id: 'attarintiki-daredi',
      title: 'Attarintiki Daredi',
      aka: [],
      year: 2013,
      level: 'easy',

      hero: 'Pawan Kalyan',
      heroine: 'Samantha',
      director: 'Trivikram Srinivas',
      music: 'Devi Sri Prasad',
      villain: '',
      banner: 'Sri Venkateswara Cine Chitra',
      genre: 'Family comedy drama',
      roles: ['Gautham', 'Sasi', 'Sunanda'],   

      stats: { imdb: 7.4, songs: 6, runtime: 166 },

      spoiler: [
        
        'A billionaire\'s grandson works as a driver in his aunt\'s home in India to bring her back to his grandfather.',
      ],
      dialogues: ['Choodappa Siddhappa… nenu simham laantodini. Adi gaddam geesukoledu, nenu geesukuntaanu… anthe theda. Migathadantha same to same.'],

      clues: {   
        job: 'Driver',
        location: '',
        song: 'Ninnu Chudagaane',
        scene: 'A billionaire heir joins his estranged aunt\'s house as driver.',
      },
    },
    {
      id: 'baadshah',
      title: 'Baadshah',
      aka: [],
      year: 2013,
      level: 'medium',

      hero: 'Jr NTR',
      heroine: 'Kajal Aggarwal',
      director: 'Sreenu Vaitla',
      music: 'S. Thaman',
      villain: 'Ashish Vidyarthi',   
      banner: 'Parameswara Art Productions',
      genre: 'Action comedy',
      roles: ['Rama Rao', 'Janaki', 'Saadhu Bhai'],   

      stats: { imdb: 6.3, songs: 6, runtime: 164 },   

      spoiler: [
        'An aspiring police officer becomes a feared underworld figure after tragedy strikes, infiltrating a criminal empire to avenge his brother\'s death.',
      ],
      dialogues: [],

      clues: {  
        job: '',
        location: '',
        song: 'Banthi Poola Janaki',
        scene: 'A fake dream sequence is staged to fool a character',
      },
    },
    {
      id: 'greeku-veerudu',
      title: 'Greeku Veerudu',
      aka: [],
      year: 2013,
      level: 'hard',

      hero: 'Nagarjuna',
      heroine: 'Nayanthara',
      director: 'Dasaradh',
      music: 'S. Thaman',
      villain: '',
      banner: '',   
      genre: 'Family drama',
      roles: [],

      stats: { imdb: 4.5, songs: 6, runtime: 155 },   

      spoiler: [
        'A wealthy, commitment-avoiding businessman returns from America to claim his family inheritance, discovering love, responsibility and the importance of relationships.',
        
      ],
      dialogues: [],

      clues: {  
        job: '',
        location: '',
        song: 'I Hate Love Stories',
        scene: '',
      },
    },
    {
      id: 'gunde-jaari-gallanthayyinde',
      title: 'Gunde Jaari Gallanthayyinde',
      aka: [],
      year: 2013,
      level: 'hard',

      hero: 'Nithiin',
      heroine: 'Nithya Menen',
      director: 'Vijay Kumar Konda',
      music: 'Anup Rubens',
      villain: '',
      banner: 'Sresht Movies',
      genre: 'Romantic comedy',
      roles: ['Karthik', 'Sravani'],  

      stats: { imdb: 7.1, songs: 5, runtime: 150 },  

      spoiler: [
        'A man falls in love over the phone with a girl who is not the one he thinks she is.',
       
      ],
      dialogues: [],

      clues: {   
        job: '',
        location: '',
        song: '',
        scene: '',
      },
    },
    {
      id: 'iddarammayilatho',
      title: 'Iddarammayilatho',
      aka: [],
      year: 2013,
      level: 'hard',

      hero: 'Allu Arjun',
      heroine: 'Amala Paul',
      director: 'Puri Jagannadh',
      music: 'Devi Sri Prasad',
      villain: '',
      banner: 'Universal Media',
      genre: 'Action romance',
      roles: [],   

      stats: { imdb: 5.9, songs: 5, runtime: 141 },   

      spoiler: [
        'A young woman discovers a diary revealing a musician\'s tragic romance, investigates his past and becomes entangled in a political conspiracy.',
      ],
      dialogues: [],

      clues: {   
        job: '',
        location: '',
        song: 'Top Lechipoddi',
        scene: 'A girl reads an old diary in a her flat',
      },
    },
    {
      id: 'mirchi',
      title: 'Mirchi',
      aka: [],
      year: 2013,
      level: 'easy',

      hero: 'Prabhas',
      heroine: 'Anushka Shetty',
      director: 'Koratala Siva',
      music: 'Devi Sri Prasad',
      villain: 'Sampath Raj',
      banner: 'UV Creations',
      genre: 'Action drama',
      roles: ['Jai', 'Vennela', 'Manasa'],   

      stats: { imdb: 7.5, songs: 7, runtime: 155 },

      spoiler: [
       'A man from a feuding family goes to his enemies\' house in disguise to end the feud forever.',
      ],
      dialogues: ['Kathi vaadatam modalupedithe naakanna baaga evaru vaadaleru.'],

      clues: {   
        job: '',
        location: '',
        song: 'Pandagala Digivachavu',
        scene: '',
      },
    },
    {
      id: 'naayak',
      title: 'Naayak',
      aka: [],
      year: 2013,
      level: 'medium',

      hero: 'Ram Charan',
      heroine: 'Kajal Aggarwal',
      director: 'V. V. Vinayak',
      music: 'S. Thaman',
      villain: 'Rahul Dev',
      banner: 'Universal Media',
      genre: 'Action comedy',
      roles: [],   // the character names give the title away, so this movie uses the STARRING round only

      stats: { imdb: 5.7, songs: 6, runtime: 153 },

      spoiler: [
        'A Hyderabad software engineer encounters his lookalike, a vigilante fighting a corrupt minister, and becomes involved in a dangerous mission for justice.',
      ],
      dialogues: [],

      clues: {   
        job: '',
        location: '',
        song: 'Laila O Laila',
        scene: '',
      },
    },
    {
      id: 'ramayya-vasthavayya',
      title: 'Ramayya Vasthavayya',
      aka: [],
      year: 2013,
      level: 'hard',

      hero: 'Jr NTR',
      heroine: 'Samantha',
      director: 'Harish Shankar',
      music: 'S. Thaman',
      villain: '',
      banner: 'Sri Venkateswara Creations',
      genre: 'Action drama',
      roles: [],

      stats: { imdb: 5.1, songs: 6, runtime: 167 },  

      spoiler: [
              ],
      dialogues: [],

      clues: {   
        job: '',
        location: '',
        song: '',
        scene: '',
      },
    },
    {
      id: 'seethamma-vakitlo-sirimalle-chettu',
      title: 'Seethamma Vakitlo Sirimalle Chettu',
      aka: [],
      year: 2013,
      level: 'easy',

      hero: ['Venkatesh', 'Mahesh Babu'],
      heroine: ['Samantha', 'Anjali'],
      director: 'Srikanth Addala',
      music: 'Mickey J. Meyer',
      villain: '',
      banner: 'Sri Venkateswara Creations',
      genre: 'Family drama',
      roles: [],   // the character names give the title away, so this movie uses the STARRING round only

      stats: { imdb: 7.5, songs: 7, runtime: 158 },   

      spoiler: [
        'Two contrasting brothers navigate family expectations, relationships and romance while learning the importance of kindness, self respect and standing together.',
      ],
      dialogues: ['Manushulu manchollu ra... asalu manishantene manchodu'],

      clues: {  
        job: '',
        location: 'Relangi',
        song: 'Aaraduguluntada',
        scene: '',
      },
    },
    
    {
      id: 'aagadu',
      title: 'Aagadu',
      aka: [],
      year: 2014,
      level: 'medium',

      hero: 'Mahesh Babu',
      heroine: 'Tamannaah',
      director: 'Sreenu Vaitla',
      music: 'S. Thaman',
      villain: 'Sonu Sood',
      banner: '14 Reels Entertainment',
      genre: 'Action comedy',
      roles: ['Shankar', 'Saroja'],   

      stats: { imdb: 5.3, songs: 5, runtime: 166 },   

      spoiler: [
              ],
      dialogues: ['Ippudu cheppandra abbayilu… what to do? What not to do?'],

      clues: {   
        job: 'Police inspector',
        location: '',
        song: 'Aaja Saroja',
        scene: 'The cop mimics famous film stories to confuse the villain\'s gang',
      },
    },
    {
      id: 'drushyam',
      title: 'Drushyam',
      aka: [],
      year: 2014,
      level: 'medium',

      hero: 'Venkatesh',
      heroine: 'Meena',
      director: 'Sripriya',
      music: 'Sharreth',
      villain: '',
      banner: 'Suresh Productions',
      genre: 'Thriller',
      roles: [],

      stats: { imdb: 8.2, songs: 2, runtime: 150 },   

      spoiler: [
        'A cable TV operator uses everything he learnt from movies to protect his family after a accidental crime attracts police attention.',
     
      ],
      dialogues: [],

      clues: {  
        job: '',
        location: '',
        song: '',
        scene: 'A cable operator protects his family after an accidental killing',
      },
    },
    {
      id: 'govindudu-andarivadele',
      title: 'Govindudu Andarivadele',
      aka: [],
      year: 2014,
      level: 'medium',

      hero: 'Ram Charan',
      heroine: 'Kajal Aggarwal',
      director: 'Krishna Vamsi',
      music: 'Yuvan Shankar Raja',
      villain: '',
      banner: 'Parameswara Art Productions',
      genre: 'Family drama',
      roles: [],   

      stats: { imdb: 5.8, songs: 6, runtime: 159 },   

      spoiler: [
        'A young man from London goes to his grandfather\'s village to reunite his family after an old fight.',
       
      ],
      dialogues: [],

      clues: {  
        job: '',
        location: '',
        song: 'Gulabi Kallu Rendu Mullu',
        scene: '',
      },
    },
    {
      id: 'manam',
      title: 'Manam',
      aka: [],
      year: 2014,
      level: 'easy',

      hero: ['Nagarjuna', 'Naga Chaitanya', 'ANR'],
      heroine: ['Samantha', 'Shriya Saran'],
      director: 'Vikram Kumar',
      music: 'Anup Rubens',
      villain: '',
      banner: 'Annapurna Studios',
      genre: 'Fantasy family drama',
      roles: [],

      stats: { imdb: 8.3, songs: 5, runtime: 163 },

      spoiler: [
        'Across generations, reincarnated family members cross paths, rediscover lost relationships and find love through an extraordinary cycle of birth and rebirth.',
      ],
      dialogues: ['Adhi ila ivvu… I love you.'],

      clues: {   
        job: '',
        location: '',
        song: 'Kani Penchina Ma Ammake',
        scene: 'Three generations of a family are reborn',
      },
    },
    {
      id: 'mukunda',
      title: 'Mukunda',
      aka: [],
      year: 2014,
      level: 'hard',

      hero: 'Varun Tej',
      heroine: 'Pooja Hegde',
      director: 'Srikanth Addala',
      music: 'Mickey J. Meyer',
      villain: '',   
      banner: '',   
      genre: 'Action drama',
      roles: [],   // the character names give the title away, so this movie uses the STARRING round only

      stats: { imdb: 5.6, songs: 6, runtime: 142 },  

      spoiler: [
        
      ],
      dialogues: [],

      clues: {   
        job: '',
        location: '',
        song: 'Gopikamma',
        scene: '',
      },
    },
    {
      id: 'pilla-nuvvu-leni-jeevitham',
      title: 'Pilla Nuvvu Leni Jeevitham',
      aka: [],
      year: 2014,
      level: 'hard',

      hero: 'Sai Dharam Tej',
      heroine: 'Regina Cassandra',
      director: 'A. S. Ravikumar Chowdary',
      music: 'Anup Rubens',
      villain: 'Jagapathi Babu',
      banner: 'Geetha Arts',
      genre: 'Action comedy',
      roles: [],

      stats: { imdb: 6, songs: 5, runtime: 150 },   

      spoiler: [
        
      ],
      dialogues: [],

      clues: {   
        job: '',
        location: '',
        song: '',
        scene: '',
      },
    },
    {
      id: 'power',
      title: 'Power',
      aka: [],
      year: 2014,
      level: 'hard',

      hero: 'Ravi Teja',
      heroine: 'Hansika Motwani',
      director: 'Bobby Kolli',
      music: 'S. Thaman',
      villain: '',
      banner: '',   
      genre: 'Action comedy',
      roles: [],

      stats: { imdb: 5.7, songs: 5, runtime: 147 },  

      spoiler: [
        'A police aspirant impersonates his dead, corrupt lookalike cop to recapture an escaped gangster and uncover a deadly conspiracy.',
      ],
      dialogues: [],

      clues: {   
        job: '',
        location: '',
        song: 'Notanki Notanki',
        scene: '',
      },
    },
    {
      id: 'rabhasa',
      title: 'Rabhasa',
      aka: [],
      year: 2014,
      level: 'hard',

      hero: 'Jr NTR',
      heroine: 'Samantha',
      director: 'Santosh Srinivas',
      music: 'S. Thaman',
      villain: '',
      banner: '',
      genre: 'Action comedy',
      roles: [],

      stats: { imdb: 4.8, songs: 5, runtime: 153 },   

      spoiler: [

      ],
      dialogues: [],

      clues: {   
        job: '',
        location: '',
        song: '',
        scene: '',
      },
    },
    {
      id: 'race-gurram',
      title: 'Race Gurram',
      aka: [],
      year: 2014,
      level: 'easy',

      hero: 'Allu Arjun',
      heroine: 'Shruti Haasan',
      director: 'Surender Reddy',
      music: 'S. Thaman',
      villain: 'Ravi Kishan',
      banner: '',
      genre: 'Action comedy',
      roles: ['Lucky', 'Spandana', 'Shiva Reddy'],   

      stats: { imdb: 7.4, songs: 7, runtime: 163 },

      spoiler: [
        'Two brothers who cannot stand each other end up in a war after a ruthless politician enters their lives.',
        'A carefree younger brother and his serious cop brother clash, until a corrupt politician targets their family.',
      ],
      dialogues: ['Ma Amma ki iddaru kodukulu, okkadu poyina thattukoledu… meeku okkade koduku!'],

      clues: {   
        job: '',
        location: '',
        song: 'Cinema Choopistha Mava',
        scene: '',
      },
    },
    {
      id: 'run-raja-run',
      title: 'Run Raja Run',
      aka: [],
      year: 2014,
      level: 'medium',

      hero: 'Sharwanand',
      heroine: 'Seerat Kapoor',
      director: 'Sujeeth',
      music: 'Ghibran',
      villain: '',
      banner: 'UV Creations',
      genre: 'Crime comedy',
      roles: [],   // the character names give the title away, so this movie uses the STARRING round only

      stats: { imdb: 7.3, songs: 5, runtime: 137 },  

      spoiler: [
        'A carefree young man falls for a police commissioner\'s daughter, and gets drawn into a kidnapping plot.',
        
      ],
      dialogues: [],

      clues: {   
        job: '',
        location: '',
        song: '',
        scene: '',
      },
    },
    {
      id: 'yevadu',
      title: 'Yevadu',
      aka: [],
      year: 2014,
      level: 'medium',

      hero: 'Ram Charan',
      heroine: 'Shruti Haasan',
      director: 'Vamshi Paidipally',
      music: 'Devi Sri Prasad',
      villain: '',
      banner: 'Sri Venkateswara Creations',
      genre: 'Action thriller',
      roles: [],  

      stats: { imdb: 6, songs: 6, runtime: 166 },  

      spoiler: [
        'A man whose face has been reconstructed after a brutal attack returns for revenge against the gangster who nearly killed him.',
        
      ],
      dialogues: ['Vaadi body blood tho kaadu… paga tho run avuthundi!'],

      clues: {  
        job: '',
        location: '',
        song: 'Freedom',
        scene: '',
      },
    },
    {
      id: 'baahubali-the-beginning',
      title: 'Baahubali: The Beginning',
      aka: [],
      year: 2015,
      level: 'easy',

      hero: 'Prabhas',
      heroine: 'Tamannaah',
      director: 'S. S. Rajamouli',
      music: 'M. M. Keeravani',
      villain: 'Rana Daggubati',
      banner: 'Arka Media Works',
      genre: 'Epic fantasy action',
      roles: ['Shivudu', 'Avanthika', 'Bhallaladeva'],  

      stats: { imdb: 8, songs: 7, runtime: 159 },

      spoiler: [
        'A boy raised by villagers climbs a giant waterfall and falls for a rebel warrior woman. He then discovers he is the son of a king whose kingdom was taken through betrayal.',
        
      ],
      dialogues: ['Naatho vachedevaru? Naatho chachedevaru? Aa maranaanni daati naatho brathikedevaru?'],

      clues: {  
        job: '',
        location: 'Mahishmati',
        song: 'Dheevara',
        scene: 'A young man climbs a giant waterfall',
      },
    },
    {
      id: 'bhale-bhale-magadivoy',
      title: 'Bhale Bhale Magadivoy',
      aka: [],
      year: 2015,
      level: 'medium',

      hero: 'Nani',
      heroine: 'Lavanya Tripathi',
      director: 'Maruthi',
      music: 'Gopi Sundar',
      villain: '',
      banner: 'GA2 Pictures',
      genre: 'Romantic comedy',
      roles: ['Lucky', 'Nandana'],  

      stats: { imdb: 7.7, songs: 5, runtime: 137 },   

      spoiler: [
        'A scientist who forgets everything in seconds tries to hide his absent-mindedness from his girlfriend and her strict father.',
 
      ],
      dialogues: ['Cheyadaaniki oka pani… brathakadaaniki oka aasha… preminchadaaniki oka manishi unte chaalu sir!'],

      clues: {    
        job: '',
        location: '',
        song: 'Motta Modatisari',
        scene: 'A man hides his forgetfulness from the girl he loves',
      },
    },
    {
      id: 'bruce-lee-the-fighter',
      title: 'Bruce Lee: The Fighter',
      aka: [],
      year: 2015,
      level: 'hard',

      hero: 'Ram Charan',
      heroine: 'Rakul Preet Singh',
      director: 'Sreenu Vaitla',
      music: 'S. Thaman',
      villain: '',
      banner: 'DVV Entertainment',
      genre: 'Action comedy',
      roles: [],

      stats: { imdb: 5.4, songs: 5, runtime: 151 },   

      spoiler: [
        'A stuntman pretends to be a police officer to impress his sister\'s in-laws, and ends up fighting a real criminal.',

      ],
      dialogues: [],

      clues: {   
        job: '',
        location: '',
        song: 'Kung Fu Kumaari',
        scene: '',
      },
    },
    {
      id: 'gopala-gopala',
      title: 'Gopala Gopala',
      aka: [],
      year: 2015,
      level: 'medium',

      hero: ['Venkatesh', 'Pawan Kalyan'],
      heroine: 'Shriya Saran',
      director: 'Kishore Kumar Pardasany',
      music: 'Anup Rubens',
      villain: 'Mithun Chakraborty',  
      banner: 'Suresh Productions',
      genre: 'Fantasy comedy drama',
      roles: [],

      stats: { imdb: 7.3, songs: 3, runtime: 153 },   

      spoiler: [
        'A shopkeeper who loses his shop in an earthquake sues God, and God himself turns up to help him.',
      
      ],
      dialogues: ['Konni sarlu raavadam late avvochu emo kaani raavadam matram pakka!'],

      clues: {   
        job: '',
        location: '',
        song: 'Bhaje Bhaaje',
        scene: 'A man files a court case against God',
      },
    },
    {
      id: 'kanche',
      title: 'Kanche',
      aka: [],
      year: 2015,
      level: 'hard',

      hero: 'Varun Tej',
      heroine: 'Pragya Jaiswal',
      director: 'Krish Jagarlamudi',
      music: 'Chirantan Bhatt',
      villain: '',
      banner: 'First Frame Entertainments',
      genre: 'Period war drama',
      roles: [],   

      stats: { imdb: 7.8, songs: 5, runtime: 126 },   

      spoiler: [
       
 
      ],
      dialogues: [],

      clues: {   
        job: '',
        location: '',
        song: 'Itu Itu Ani Chitikelu Evvarivo',
        scene: '',
      },
    },
    {
      id: 'kick-2',
      title: 'Kick 2',
      aka: [],
      year: 2015,
      level: 'hard',

      hero: 'Ravi Teja',
      heroine: 'Rakul Preet Singh',
      director: 'Surender Reddy',
      music: 'S. Thaman',
      villain: 'Ravi Kishan',
      banner: '',
      genre: 'Action comedy',
      roles: [],

      stats: { imdb: 5, songs: 5, runtime: 160 },  

      spoiler: [
        
      ],
      dialogues: [],

      clues: {  
        job: '',
        location: '',
        song: '',
        scene: '',
      },
    },
    {
      id: 'pataas',
      title: 'Pataas',
      aka: [],
      year: 2015,
      level: 'hard',

      hero: 'Kalyan Ram',
      heroine: 'Shruti Sodhi',
      director: 'Anil Ravipudi',
      music: 'Sai Karthik',
      villain: 'Ashutosh Rana',
      banner: 'N.T.R. Arts',
      genre: 'Action comedy',
      roles: [],

      stats: { imdb: 6.5, songs: 5, runtime: 127 },   

      spoiler: [
        'A corrupt cop changes after meeting his estranged father and turns on the politician he was working for.',
        
      ],
      dialogues: [],

      clues: {  
        job: '',
        location: '',
        song: '',
        scene: '',
      },
    },
    {
      id: 's-o-satyamurthy',
      title: 'S/O Satyamurthy',
      aka: [],
      year: 2015,
      level: 'medium',

      hero: 'Allu Arjun',
      heroine: 'Samantha',
      director: 'Trivikram Srinivas',
      music: 'Devi Sri Prasad',
      villain: 'Upendra',
      banner: 'Haarika & Hassine Creations',
      genre: 'Family action drama',
      roles: [],  

      stats: { imdb: 7.2, songs: 6, runtime: 162 },   

      spoiler: [
        'A rich young man must start again from scratch when his father passes away and a debt that nobody mentioned comes to the surface.',
              ],
      dialogues: ['Manam baagunnappudu viluvalu maatlaadi… kashtaallo unnappudu lekkalu maatlaadadam correct kaadu sir.'],

      clues: {   
        job: '',
        location: '',
        song: 'Super Machi',
        scene: '',
      },
    },
    {
      id: 'srimanthudu',
      title: 'Srimanthudu',
      aka: [],
      year: 2015,
      level: 'easy',

      hero: 'Mahesh Babu',
      heroine: 'Shruti Haasan',
      director: 'Koratala Siva',
      music: 'Devi Sri Prasad',
      villain: '',
      banner: 'Mythri Movie Makers',
      genre: 'Action drama',
      roles: ['Harsha', 'Charuseela'], 

      stats: { imdb: 7.5, songs: 6, runtime: 158 },

      spoiler: [
        'The son of a billionaire gives up his rich life to adopt a poor village, and fights a local politician who wants to keep it down.',
        
      ],
      dialogues: ['Ooru nunchi chala theesukunnaaru… thirigi ichcheyaali, lekapothe laavaipothaaru!'],

      clues: {  
        job: '',
        location: '',
        song: 'Jaago',
        scene: 'A rich heir adopts a village',
      },
    },
    {
      id: 'subramanyam-for-sale',
      title: 'Subramanyam for Sale',
      aka: [],
      year: 2015,
      level: 'hard',

      hero: 'Sai Dharam Tej',
      heroine: 'Regina Cassandra',
      director: 'Harish Shankar',
      music: 'Mickey J. Meyer',
      villain: '',
      banner: 'Sri Venkateswara Creations',
      genre: 'Romantic comedy',
      roles: [],

      stats: { imdb: 6.1, songs: 5, runtime: 151 },  

      spoiler: [
        'A man in America who does any job for money gets hired to pose as a girl\'s husband.',

      ],
      dialogues: [],

      clues: {   
        job: '',
        location: '',
        song: 'Aakasam Thassadiyya',
        scene: '',
      },
    },
    {
      id: 'temper',
      title: 'Temper',
      aka: [],
      year: 2015,
      level: 'easy',

      hero: 'Jr NTR',
      heroine: 'Kajal Aggarwal',
      director: 'Puri Jagannadh',
      music: 'Anup Rubens',
      villain: 'Prakash Raj',
      banner: 'Parameswara Art Productions',
      genre: 'Action drama',
      roles: ['Daya', 'Shanvi', 'Waltair Vasu'],  

      stats: { imdb: 7.4, songs: 5, runtime: 147 },

      spoiler: [
        'A corrupt police officer who takes bribes changes completely after a crime against a girl, and decides to take on the system himself.',
       
      ],
      dialogues: ['Neeku ego lopala untundemo, naaku naa chuttu Wi-Fi la untundi.', 'Username Daya, password Police!'],

      clues: {   
        job: '',
        location: '',
        song: 'Choolenge Aasma',
        scene: '',
      },
    },
    {
      id: 'yevade-subramanyam',
      title: 'Yevade Subramanyam',
      aka: [],
      year: 2015,
      level: 'hard',

      hero: 'Nani',
      heroine: 'Malavika Nair',
      director: 'Nag Ashwin',
      music: 'Radhan',
      villain: '',
      banner: 'Swapna Cinema',
      genre: 'Drama',
      roles: [],   // the character names give the title away, so this movie uses the STARRING round only

      stats: { imdb: 7.4, songs: 6, runtime: 150 },  

      spoiler: [
        'A businessman obsessed with success travels to the Himalayas to scatter his friend\'s ashes and finds himself.',
        
      ],
      dialogues: [],

      clues: {  
        job: '',
        location: '',
        song: '',
        scene: '',
      },
    },
    {
      id: '24',
      title: '24',
      aka: [],
      year: 2016,
      level: 'medium',

      hero: 'Suriya',
      heroine: 'Samantha',
      director: 'Vikram Kumar',
      music: 'A. R. Rahman',
      villain: 'Suriya',
      banner: '2D Entertainment',
      genre: 'Sci-fi thriller',
      roles: [],   

      stats: { imdb: 7.9, songs: 6, runtime: 164 },  

      spoiler: [
        'A watch mechanic finds a watch that lets him travel through time, while his evil uncle wants it at any cost.',
        'Twin brothers, one a scientist and one a killer, fight over an invention that controls time.',
      ],
      dialogues: ['I\'m a watch mechanic… naaku idhantha chala mamul vishayam'],   

      clues: {  
        job: 'Watch mechanic',
        location: '',
        song: 'Manasuke',
        scene: 'The hero freezes time at a cricket match',
      },
    },
    {
      id: 'a-aa',
      title: 'A Aa',
      aka: [],
      year: 2016,
      level: 'medium',

      hero: 'Nithiin',
      heroine: 'Samantha',
      director: 'Trivikram Srinivas',
      music: 'Mickey J. Meyer',
      villain: '',
      banner: 'Haarika & Hassine Creations',
      genre: 'Romantic family drama',
      roles: ['Anand Vihari', 'Anasuya'], 

      stats: { imdb: 6.8, songs: 5, runtime: 152 },   

      spoiler: [
       ],
      dialogues: ['Love chese antha luxury ledu… vadhilese antha levelu ledu.'],

      clues: {   
        job: '',
        location: '',
        song: 'Yellipoke Shyamala',
        scene: '',
      },
    },
    {
      id: 'brahmotsavam',
      title: 'Brahmotsavam',
      aka: [],
      year: 2016,
      level: 'medium',

      hero: 'Mahesh Babu',
      heroine: 'Samantha',
      director: 'Srikanth Addala',
      music: 'Mickey J. Meyer',
      villain: '',
      banner: 'PVP Cinema',
      genre: 'Family drama',
      roles: [],

      stats: { imdb: 3.9, songs: 7, runtime: 153 },  

      spoiler: [
        'After his father\'s death, a young man travels across India to find his family\'s lost relatives.',
       
      ],
      dialogues: [],

      clues: {  
        job: '',
        location: '',
        song: '',
        scene: '',
      },
    },
    {
      id: 'dhruva',
      title: 'Dhruva',
      aka: [],
      year: 2016,
      level: 'medium',

      hero: 'Ram Charan',
      heroine: 'Rakul Preet Singh',
      director: 'Surender Reddy',
      music: 'Hiphop Tamizha',
      villain: 'Arvind Swamy',
      banner: 'Geetha Arts',
      genre: 'Action thriller',
      roles: [],   // the character names give the title away, so this movie uses the STARRING round only

      stats: { imdb: 7.7, songs: 5, runtime: 165 },   

      spoiler: [
        'An IPS officer secretly gathers information on the country\'s top criminals and targets the biggest one, a celebrated scientist.',
       
      ],
      dialogues: ['Nee snehithudu evaro thelisthe nee character thelusthundi… nee shathruvu evaro thelisthe nee capacity thelusthundi'],

      clues: {   
        job: 'IPS officer',
        location: '',
        song: 'Neethone Dance',
        scene: 'A cop discovers a tiny tracking device in his own body',
      },
    },

    {
      id: 'gentleman',
      title: 'Gentleman',
      aka: [],
      year: 2016,
      level: 'hard',

      hero: 'Nani',
      heroine: 'Surabhi',   
      director: 'Mohan Krishna Indraganti',
      music: 'Mani Sharma',
      villain: 'Nani',
      banner: '',
      genre: 'Thriller',
      roles: [],

      stats: { imdb: 7.1, songs: 4, runtime: 144 },   

      spoiler: [
        'Two women who meet on a flight discover that their boyfriends look exactly alike, and one of them may be a killer.',
        
      ],
      dialogues: [],

      clues: {  
        job: '',
        location: '',
        song: 'Chali Gaali Chuudduu',
        scene: '',
      },
    },
    {
      id: 'janatha-garage',
      title: 'Janatha Garage',
      aka: [],
      year: 2016,
      level: 'easy',

      hero: 'Jr NTR',
      heroine: 'Samantha',
      director: 'Koratala Siva',
      music: 'Devi Sri Prasad',
      villain: '',
      banner: 'Mythri Movie Makers',
      genre: 'Action drama',
      roles: [], 

      stats: { imdb: 7.2, songs: 6, runtime: 162 },

      spoiler: [
        'A nature-loving student from Mumbai comes to Hyderabad and takes over a garage that repairs people\'s problems.',
      ],
      dialogues: ['Balavanthudu balahenudini bhayapetti bathakadam aanavaayithi. But for a change aa balahenudi pakkana kooda oka balam undi.'],

      clues: {   
        job: '',
        location: '',
        song: 'Apple Beauty',
        scene: 'A nature lover joins a workshop that also repairs people\'s problems',
      },
    },
    {
      id: 'kabali',
      title: 'Kabali',
      aka: [],
      year: 2016,
      level: 'medium',

      hero: 'Rajinikanth',
      heroine: 'Radhika Apte',
      director: 'Pa. Ranjith',
      music: 'Santhosh Narayanan',
      villain: '',
      banner: 'V Creations',
      genre: 'Gangster drama',
      roles: [],   // the character names give the title away, so this movie uses the STARRING round only

      stats: { imdb: 6.1, songs: 5, runtime: 152 },   

      spoiler: [
        'An ageing gangster released after 25 years in a Malaysian jail goes looking for his wife and the men who betrayed him.',
       
      ],
      dialogues: ['Manchidi'],

      clues: {   
        job: 'Gangster',
        location: 'Malaysia',
        song: 'Nippu Da',
        scene: 'A man walks out of prison after 25 years in a suit',
      },
    },
    {
      id: 'krishna-gaadi-veera-prema-gaadha',
      title: 'Krishna Gaadi Veera Prema Gaadha',
      aka: [],
      year: 2016,
      level: 'medium',

      hero: 'Nani',
      heroine: 'Mehreen Pirzada',
      director: 'Hanu Raghavapudi',
      music: 'Vishal Chandrashekhar',
      villain: '',
      banner: '14 Reels Entertainment',
      genre: 'Romantic comedy',
      roles: [],

      stats: { imdb: 7.4, songs: 5, runtime: 148 },  

      spoiler: [
        'A cowardly village boy has to protect three children and his girlfriend from gangsters.',
    
      ],
      dialogues: ['David Bhai Kadapa Dargah ki raavadam convincing gaa ledu ra, comedy ga undhi..'],

      clues: {   
        job: '',
        location: '',
        song: '',
        scene: '',
      },
    },
    
    {
      id: 'majnu',
      title: 'Majnu',
      aka: [],
      year: 2016,
      level: 'hard',

      hero: 'Nani',
      heroine: 'Anu Emmanuel',
      director: 'Virinchi Varma',
      music: 'Gopi Sundar',
      villain: '',
      banner: '',  
      genre: 'Romantic comedy',
      roles: [],

      stats: { imdb: 6.4, songs: 6, runtime: 160 },   

      spoiler: [

      ],
      dialogues: [],

      clues: {   
        job: 'Assistant director',
        location: '',
        song: 'Kallumoosi',
        scene: '',
      },
    },
    {
      id: 'nannaku-prematho',
      title: 'Nannaku Prematho',
      aka: [],
      year: 2016,
      level: 'medium',

      hero: 'Jr NTR',
      heroine: 'Rakul Preet Singh',
      director: 'Sukumar',
      music: 'Devi Sri Prasad',
      villain: 'Jagapathi Babu',
      banner: 'Sri Venkateswara Cine Chitra',
      genre: 'Action thriller',
      roles: [],   

      stats: { imdb: 7.5, songs: 6, runtime: 168 },   

      spoiler: [
        'A son has thirty days to take revenge on the businessman who betrayed his dying father.',
        
      ],
      dialogues: ['Andharu time ni minutes lonu seconds lonu kolusthaaru… nenu maa naanna gunde chappudu tho kolusthaanu.'],

      clues: {  
        job: '',
        location: 'London',
        song: 'Follow Follow',
        scene: 'A son takes on a billionaire in London for his dying father',
      },
    },
    {
      id: 'nenu-sailaja',
      title: 'Nenu Sailaja',
      aka: [],
      year: 2016,
      level: 'medium',

      hero: 'Ram Pothineni',
      heroine: 'Keerthy Suresh',
      director: 'Kishore Tirumala',
      music: 'Devi Sri Prasad',
      villain: '',
      banner: 'Sravanthi Movies',
      genre: 'Romantic drama',
      roles: [],   // the character names give the title away, so this movie uses the STARRING round only

      stats: { imdb: 0, songs: 0, runtime: 0 },  

      spoiler: [
     
      ],
      dialogues: [],

      clues: {   
        job: '',
        location: '',
        song: 'crazy feeling',
        scene: '',
      },
    },
    {
      id: 'oopiri',
      title: 'Oopiri',
      aka: [],
      year: 2016,
      level: 'medium',

      hero: ['Nagarjuna', 'Karthi'],
      heroine: 'Tamannaah',
      director: 'Vamshi Paidipally',
      music: 'Gopi Sundar',
      villain: '',
      banner: 'PVP Cinema',
      genre: 'Comedy drama',
      roles: ['Vikramaditya', 'Seenu', 'Keerthi'],   

      stats: { imdb: 8, songs: 7, runtime: 158 },

      spoiler: [
        'A rich man who cannot move his body hires a street smart ex convict as his caregiver, and the two change each other\'s lives.',
        
      ],
      dialogues: ['Manishi vellina chotukalla… manasu velladhu.'],

      clues: {  
        job: '',
        location: '',
        song: 'Door Number Okati',
        scene: 'A paralysed billionaire hires an ex convict as his caretaker',
      },
    },
    {
      id: 'pelli-choopulu',
      title: 'Pelli Choopulu',
      aka: [],
      year: 2016,
      level: 'medium',

      hero: 'Vijay Deverakonda',
      heroine: 'Ritu Varma',
      director: 'Tharun Bhascker',
      music: 'Vivek Sagar',
      villain: '',
      banner: '',   
      genre: 'Romantic comedy',
      roles: ['Prashanth', 'Chitra'],   

      stats: { imdb: 8.2, songs: 4, runtime: 125 },

      spoiler: [
        'A lazy young man and an ambitious girl get locked in a room during a bride viewing and later start a food truck together.',
      ],
      dialogues: ['Naa saavu nenu sastha, neekenduku?'],

      clues: {   
        job: '',
        location: '',
        song: 'Merise Merise',
        scene: 'A matchmaking visit to the wrong house leads to a food truck',
      },
    },
       {
      id: 'premam-2016',
      title: 'Premam',
      aka: ['Premam (2016)'],
      year: 2016,
      level: 'medium',

      hero: 'Naga Chaitanya',
      heroine: 'Shruti Haasan',
      director: 'Chandoo Mondeti',
      music: 'Gopi Sundar',
      villain: '',
      banner: 'Sithara Entertainments',
      genre: 'Romantic comedy',
      roles: [],   

      stats: { imdb: 6.4, songs: 7, runtime: 134 },   

      spoiler: [
        'A young man falls in love three times, from his school days to adulthood, in the Telugu remake of a Malayalam hit.',
      ],
      dialogues: [],

      clues: {   
        job: '',
        location: '',
        song: 'Evare',
        scene: '',
      },
    },
    {
      id: 'sardaar-gabbar-singh',
      title: 'Sardaar Gabbar Singh',
      aka: [],
      year: 2016,
      level: 'medium',

      hero: 'Pawan Kalyan',
      heroine: 'Kajal Aggarwal',
      director: 'Bobby Kolli',
      music: 'Devi Sri Prasad',
      villain: '',
      banner: 'North Star Entertainment',
      genre: 'Action drama',
      roles: [],   // the character names give the title away, so this movie uses the STARRING round only

      stats: { imdb: 4.6, songs: 6, runtime: 163 },   

      spoiler: [
        'A fearless police officer arrives in Rathanpur, challenging a ruthless feudal lord who oppresses villagers and threatens the kingdom\'s princess.',
      ],
      dialogues: [],

      clues: {   
        job: '',
        location: 'Rathanpur',
        song: 'O Pilla Shubhanalla',
        scene: '',
      },
    },
    {
      id: 'sarrainodu',
      title: 'Sarrainodu',
      aka: [],
      year: 2016,
      level: 'medium',

      hero: 'Allu Arjun',
      heroine: 'Rakul Preet Singh',
      director: 'Boyapati Srinu',
      music: 'S. Thaman',
      villain: 'Aadhi Pinisetty',
      banner: 'Geetha Arts',
      genre: 'Action',
      roles: [],  

      stats: { imdb: 6.7, songs: 6, runtime: 159 },   

      spoiler: [
        'An ex-army man with a short temper fights a ruthless chief minister\'s son.',
      ],
      dialogues: ['Erra tholu kada, style ga untaadu anukunnaavemo… mass, oora mass!'],

      clues: { 
        job: '',
        location: '',
        song: 'Blockbuster',
        scene: 'An ex-army man takes on a chief minister\'s son',
      },
    },
    {
      id: 'soggade-chinni-nayana',
      title: 'Soggade Chinni Nayana',
      aka: [],
      year: 2016,
      level: 'medium',

      hero: 'Nagarjuna',
      heroine: 'Ramya Krishnan',
      director: 'Kalyan Krishna',
      music: 'Anup Rubens',
      villain: '',
      banner: 'Annapurna Studios',
      genre: 'Fantasy comedy',
      roles: [],   

      stats: { imdb: 6.3, songs: 5, runtime: 146 }, 

      spoiler: [
        'The ghost of a flirtatious village man comes back to fix his son\'s marriage.',
        
      ],
      dialogues: [],

      clues: {  
        job: '',
        location: '',
        song: '',
        scene: '',
      },
    },
        {
      id: 'supreme',
      title: 'Supreme',
      aka: [],
      year: 2016,
      level: 'hard',

      hero: 'Sai Dharam Tej',
      heroine: 'Raashii Khanna',
      director: 'Anil Ravipudi',
      music: 'Sai Karthik',
      villain: '',
      banner: 'Sri Venkateswara Creations',
      genre: 'Action comedy',
      roles: [],

      stats: { imdb: 6.1, songs: 5, runtime: 142 },   

      spoiler: [
        'A taxi driver protects a boy who is the heir to a property worth crores.',
        
      ],
      dialogues: [],

      clues: {   
        job: 'Taxi driver',
        location: '',
        song: 'Taxi Vaala',
        scene: '',
      },
    },
    {
      id: 'baahubali-2-the-conclusion',
      title: 'Baahubali 2: The Conclusion',
      aka: [],
      year: 2017,
      level: 'easy',

      hero: 'Prabhas',
      heroine: 'Anushka Shetty',
      director: 'S. S. Rajamouli',
      music: 'M. M. Keeravani',
      villain: 'Rana Daggubati',
      banner: 'Arka Media Works',
      genre: 'Epic action drama',
      roles: ['Amarendra Baahubali', 'Devasena', 'Bhallaladeva'],   

      stats: { imdb: 8.2, songs: 5, runtime: 167 },

      spoiler: [
        'The crowned prince of Mahishmati is exiled by his own family, and the whole kingdom is left asking one question about the man who stabbed him.',
      ],
      dialogues: ['Nuvvu naa pakkana unnantha varaku nannu champe magaadu inka puttaledhu maama...'],

      clues: {   
        job: '',
        location: 'Mahishmati',
        song: 'Kannaa Nidurinchara',
        scene: '',
      },
    },
    {
      id: 'dj-duvvada-jagannadham',
      title: 'DJ: Duvvada Jagannadham',
      aka: ['Duvvada Jagannadham', 'DJ'],
      year: 2017,
      level: 'medium',

      hero: 'Allu Arjun',
      heroine: 'Pooja Hegde',
      director: 'Harish Shankar',
      music: 'Devi Sri Prasad',
      villain: 'Rao Ramesh',
      banner: 'Sri Venkateswara Creations',
      genre: 'Action comedy',
      roles: [],   // the character names give the title away, so this movie uses the STARRING round only

      stats: { imdb: 6.1, songs: 5, runtime: 156 },   

      spoiler: [
        'A Brahmin cook who caters for weddings is secretly a vigilante who punishes criminals.',
        
      ],
      dialogues: ['Manam chese panilo manchi kanapadaali kaani… manishi kanapadakkarledhu'],

      clues: {  
        job: '',
        location: '',
        song: 'Seeti Maar',
        scene: 'A Brahmin cook removes his sacred thread and fights goons',
      },
    },
    {
      id: 'fidaa',
      title: 'Fidaa',
      aka: [],
      year: 2017,
      level: 'easy',

      hero: 'Varun Tej',
      heroine: 'Sai Pallavi',
      director: 'Sekhar Kammula',
      music: 'Shakthikanth Karthick',
      villain: '',
      banner: 'Sri Venkateswara Creations',
      genre: 'Romantic drama',
      roles: ['Varun', 'Bhanumathi'],  

      stats: { imdb: 7.4, songs: 6, runtime: 134 }, 

      spoiler: [
        'A Telangana village girl with a strong will clashes and bonds with an NRI doctor who has come home for his brother\'s wedding.',
      ],
      dialogues: ['Bhanumathi… okkate piece Hybrid pilla'],

      clues: {  
        job: '',
        location: '',
        song: 'Vachinde',
        scene: '',
      },
    },

    {
      id: 'jai-lava-kusa',
      title: 'Jai Lava Kusa',
      aka: [],
      year: 2017,
      level: 'easy',

      hero: 'Jr NTR',
      heroine: 'Raashii Khanna',
      director: 'Bobby Kolli',
      music: 'Devi Sri Prasad',
      villain: 'Jr NTR',
      banner: 'N.T.R. Arts',
      genre: 'Action drama',
      roles: [],   // the character names give the title away, so this movie uses the STARRING round only

      stats: { imdb: 6.8, songs: 5, runtime: 150 },   

      spoiler: [
        'A stammering brother, rejected as a child, grows into a feared don and takes revenge on his twin brothers.',
      ],
      dialogues: ['Aa Ravanudini champaalante samudram daatala... ee Ravanudini champaalante samudramantha dhairyam undala'],

      clues: {   
        job: 'Bank manager, thief and don',
        location: '',
        song: 'Swing Zara',
        scene: '',
      },
    },
    {
      id: 'jaya-janaki-nayaka',
      title: 'Jaya Janaki Nayaka',
      aka: [],
      year: 2017,
      level: 'hard',

      hero: 'Bellamkonda Srinivas',
      heroine: 'Rakul Preet Singh',
      director: 'Boyapati Srinu',
      music: 'Devi Sri Prasad',
      villain: 'Jagapathi Babu',   
      banner: '',   
      genre: 'Action drama',
      roles: [],

      stats: { imdb: 5.2, songs: 7, runtime: 129 },   

      spoiler: [
      ],
      dialogues: ['Kaani ne kuthuru nippu raa!'],

      clues: {   
        job: '',
        location: '',
        song: '',
        scene: '',
      },
    },
    {
      id: 'katamarayudu',
      title: 'Katamarayudu',
      aka: [],
      year: 2017,
      level: 'medium',

      hero: 'Pawan Kalyan',
      heroine: 'Shruti Haasan',
      director: 'Kishore Kumar Pardasany',
      music: 'Anup Rubens',
      villain: 'Rao Ramesh',
      banner: 'North Star Entertainment',
      genre: 'Action drama',
      roles: [],   // the character names give the title away, so this movie uses the STARRING round only

      stats: { imdb: 5.5, songs: 6, runtime: 145 },   

      spoiler: [
      ],
      dialogues: [],

      clues: {  
        job: '',
        location: '',
        song: 'Laage Laage',
        scene: '',
      },
    },
    {
      id: 'khaidi-no-150',
      title: 'Khaidi No. 150',
      aka: [],
      year: 2017,
      level: 'medium',

      hero: 'Chiranjeevi',
      heroine: 'Kajal Aggarwal',
      director: 'V. V. Vinayak',
      music: 'Devi Sri Prasad',
      villain: '',
      banner: 'Konidela Production Company',
      genre: 'Action drama',
      roles: [],   

      stats: { imdb: 5.8, songs: 5, runtime: 141 },   

      spoiler: [
        'A prisoner who looks identical to a farmer-activist takes his place and fights the corporate land grab that destroyed a village.',
      ],
      dialogues: ['Edhaina naaku nachithene chestha, nachithene choostha… kaadhani balavantham chesthe kostha'],

      clues: {  
        job: '',
        location: '',
        song: 'Ammadu Let\'s Do Kummudu',
        scene: 'Farmers hide inside city\'s water tank in protest',
      },
    },
    {
      id: 'mahanubhavudu',
      title: 'Mahanubhavudu',
      aka: [],
      year: 2017,
      level: 'hard',

      hero: 'Sharwanand',
      heroine: 'Mehreen Pirzada',
      director: 'Maruthi',
      music: 'S. Thaman',
      villain: '',
      banner: 'UV Creations',
      genre: 'Romantic comedy',
      roles: [],   

      stats: { imdb: 6.4, songs: 6, runtime: 151 },  

      spoiler: [
        'A man with obsessive-compulsive disorder about cleanliness falls for a girl from a village.',
       
      ],
      dialogues: [],

      clues: {  
        job: '',
        location: '',
        song: 'Rendu Kallu',
        scene: '',
      },
    },
    {
      id: 'middle-class-abbayi',
      title: 'Middle Class Abbayi',
      aka: [],
      year: 2017,
      level: 'medium',

      hero: 'Nani',
      heroine: 'Sai Pallavi',
      director: 'Venu Sriram',
      music: 'Devi Sri Prasad',
      villain: 'Vijay Varma',
      banner: 'Sri Venkateswara Creations',
      genre: 'Action drama',
      roles: [],   

      stats: { imdb: 6.1, songs: 5, runtime: 145 },   

      spoiler: [
        'A middle-class young man moves in with his brother\'s wife, a transport officer, and protects her from a criminal.',
      ],
      dialogues: [],

      clues: {   
        job: '',
        location: '',
        song: 'Yevandoi Nani Garu',
        scene: '',
      },
    },
    {
      id: 'nenu-local',
      title: 'Nenu Local',
      aka: [],
      year: 2017,
      level: 'medium',

      hero: 'Nani',
      heroine: 'Keerthy Suresh',
      director: 'Trinadha Rao Nakkina',
      music: 'Devi Sri Prasad',
      villain: 'Naveen Chandra',
      banner: 'Sri Venkateswara Creations',
      genre: 'Romantic comedy',
      roles: ['Babu', 'Keerthi', 'Siddharth'], 

      stats: { imdb: 6.5, songs: 5, runtime: 138 },  

      spoiler: [
        'A carefree engineering graduate chases a girl whose father wants a police officer as her husband.',
      ],
      dialogues: [],

      clues: {   
        job: '',
        location: '',
        song: 'Champesaave Nannu',
        scene: '',
      },
    },
    {
      id: 'ninnu-kori',
      title: 'Ninnu Kori',
      aka: [],
      year: 2017,
      level: 'medium',

      hero: 'Nani',
      heroine: 'Nivetha Thomas',
      director: 'Shiva Nirvana',
      music: 'Gopi Sundar',
      villain: '',
      banner: 'DVV Entertainment',
      genre: 'Romantic drama',
      roles: ['Uma', 'Pallavi'],  

      stats: { imdb: 7.6, songs: 5, runtime: 137 },   

      spoiler: [
        'A man stays with his ex-girlfriend and her husband in America to prove she still loves him.',
      ],
      dialogues: [],

      clues: {   
        job: '',
        location: '',
        song: 'Unnatundi Gundey',
        scene: '',
      },
    },
    {
      id: 'raja-the-great',
      title: 'Raja The Great',
      aka: [],
      year: 2017,
      level: 'medium',

      hero: 'Ravi Teja',
      heroine: 'Mehreen Pirzada',
      director: 'Anil Ravipudi',
      music: 'Sai Karthik',
      villain: '',
      banner: 'Sri Venkateswara Creations',
      genre: 'Action comedy',
      roles: [],   // the character names give the title away, so this movie uses the STARRING round only

      stats: { imdb: 6.4, songs: 5, runtime: 149 },   

      spoiler: [
        'A blind man joins the police on a secret mission to protect a girl from a gangster.',
      ],
      dialogues: ['I am blind... but I\'m trained'],

      clues: {   
        job: '',
        location: '',
        song: '',
        scene: '',
      },
    },
    {
      id: 'rarandoi-veduka-chudham',
      title: 'Rarandoi Veduka Chudham',
      aka: [],
      year: 2017,
      level: 'hard',

      hero: 'Naga Chaitanya',
      heroine: 'Rakul Preet Singh',
      director: 'Kalyan Krishna',
      music: 'Devi Sri Prasad',
      villain: '',
      banner: 'Annapurna Studios',
      genre: 'Romantic family drama',
      roles: ['Shiva', 'Bhramaramba'], 

      stats: { imdb: 5.6, songs: 6, runtime: 150 },   

      spoiler: [
        
      ],
      dialogues: ['Bhramaramba ki kopam vachindi..'],

      clues: {   
        job: '',
        location: '',
        song: 'Bhramarambaki',
        scene: '',
      },
    },
    {
      id: 'singham-3',
      title: 'Singham 3',
      aka: [],
      year: 2017,
      level: 'hard',

      hero: 'Suriya',
      heroine: 'Anushka Shetty',
      director: 'Hari',
      music: 'Harris Jayaraj',
      villain: '',
      banner: '',
      genre: 'Action',
      roles: [],

      stats: { imdb: 6, songs: 6, runtime: 153 },  

      spoiler: [
        'A police officer goes to Australia to bring back a criminal who dumped toxic waste in India.',
      ],
      dialogues: [],

      clues: {   
        job: '',
        location: '',
        song: '',
        scene: '',
      },
    },
    {
      id: 'spyder',
      title: 'Spyder',
      aka: [],
      year: 2017,
      level: 'medium',

      hero: 'Mahesh Babu',
      heroine: 'Rakul Preet Singh',
      director: 'A. R. Murugadoss',
      music: 'Harris Jayaraj',
      villain: 'S. J. Suryah',
      banner: 'NVR Cinema',
      genre: 'Spy thriller',
      roles: [],   

      stats: { imdb: 6.6, songs: 5, runtime: 145 },  

      spoiler: [
        'An intelligence officer monitoring phone calls to prevent crimes confronts a psychopathic killer who derives pleasure from the suffering of his victims.',
      ],
      dialogues: ['Naagarikathaki kaaranam enti? Bhayam! adhi puttinchindi evaru? Memu! Kaani bhayam ante ento maaku teliyadu.'],

      clues: {   
        job: '',
        location: '',
        song: 'Achcham Telugandham',
        scene: '',
      },
    },
    {
      id: 'winner',
      title: 'Winner',
      aka: [],
      year: 2017,
      level: 'hard',

      hero: 'Sai Dharam Tej',
      heroine: 'Rakul Preet Singh',
      director: 'Gopichand Malineni',
      music: 'S. Thaman',
      villain: '',
      banner: '',   
      genre: 'Sports drama',
      roles: [],

      stats: { imdb: 4.7, songs: 5, runtime: 155 },   

      spoiler: [
        'A young man becomes a horse racer to win back his estranged father and a girl.',
        
      ],
      dialogues: [],

      clues: {  
        job: '',
        location: '',
        song: 'Sitara',
        scene: '',
      },
    },
    {
      id: '2-0',
      title: '2.0',
      aka: [],
      year: 2018,
      level: 'easy',

      hero: 'Rajinikanth',
      heroine: 'Amy Jackson',
      director: 'Shankar',
      music: 'A. R. Rahman',
      villain: 'Akshay Kumar',
      banner: 'Lyca Productions',
      genre: 'Sci-fi action',
      roles: [],   

      stats: { imdb: 6, songs: 3, runtime: 147 }, 

      spoiler: [
        'Mobile phones start flying out of people\'s hands across a city, and a scientist revives his old robot to fight the force behind it.',
      ],
      dialogues: ['Number one, number two anedi pillala aata... I\'m the only one... Super One'],

      clues: {
        job: '',
        location: '',
        song: 'Yanthara Lokapu Sundarive',
        scene: 'Thousands of phones fly out of people\'s hands and join together in the sky',
      },
    },
    {
      id: 'agnyaathavaasi',
      title: 'Agnyaathavaasi',
      aka: [],
      year: 2018,
      level: 'medium',

      hero: 'Pawan Kalyan',
      heroine: 'Keerthy Suresh',  
      director: 'Trivikram Srinivas',
      music: 'Anirudh Ravichander',
      villain: 'Aadhi Pinisetty',
      banner: 'Haarika & Hassine Creations',
      genre: 'Action drama',
      roles: [],

      stats: { imdb: 4.3, songs: 6, runtime: 158 },   

      spoiler: [
        'The secret son of a business tycoon joins the company in disguise to find who killed his father and brother.',
      ],
      dialogues: ['Pachani chettu ni goddali tho padagotti, rampam tho mukkaluga nariki, beradu ni blade tho saana betti, ollantha mekulatho kotti kotti tayaaru chestam... manam korukune prathi soukaryam venakala oka mini yuddhame untundi.'],

      clues: {   
        job: '',
        location: '',
        song: 'Baitikochi Chuste',
        scene: '',
      },
    },
    {
      id: 'aravinda-sametha-veera-raghava',
      title: 'Aravinda Sametha Veera Raghava',
      aka: [],
      year: 2018,
      level: 'easy',

      hero: 'Jr NTR',
      heroine: 'Pooja Hegde',
      director: 'Trivikram Srinivas',
      music: 'S. Thaman',
      villain: 'Jagapathi Babu',
      banner: 'Haarika & Hassine Creations',
      genre: 'Action drama',
      roles: [],   // the character names give the title away, so this movie uses the STARRING round only

      stats: { imdb: 7.3, songs: 6, runtime: 162 },

      spoiler: [
        'After his father is killed, the son of a faction leader tries to end a bloody family war in Rayalaseema.',
      ],
      dialogues: ['Kantapaddava kanikaristaanemo, ventapaddava narikestha.'],

      clues: {   
        job: '',
        location: '',
        song: 'Anaganaganaga',
        scene: 'A faction leader\'s son tries to end a bloody feud',
      },
    },
    
    {
      id: 'bharat-ane-nenu',
      title: 'Bharat Ane Nenu',
      aka: [],
      year: 2018,
      level: 'easy',

      hero: 'Mahesh Babu',
      heroine: 'Kiara Advani',
      director: 'Koratala Siva',
      music: 'Devi Sri Prasad',
      villain: 'Prakash Raj',
      banner: 'DVV Entertainment',
      genre: 'Political drama',
      roles: [],   // the character names give the title away, so this movie uses the STARRING round only

      stats: { imdb: 7.5, songs: 6, runtime: 173 },

      spoiler: [
        'A young man studying abroad returns home after his father\'s death and unexpectedly becomes chief minister, determined to run the state by his own honest rules.',
      ],
      dialogues: ['Nayakudu avasaram leni samajam nirminchadame asalaina nayakudi lakshanam.'],

      clues: {   
        job: 'Chief minister',
        location: '',
        song: 'Vachaadayyo Saami',
        scene: 'A young man becomes chief minister after his father dies',
      },
    },
    {
      id: 'devadas',
      title: 'Devadas',
      aka: [],
      year: 2018,
      level: 'hard',

      hero: ['Nagarjuna', 'Nani'],
      heroine: 'Rashmika Mandanna',
      director: 'Sriram Aditya',
      music: 'Mani Sharma',
      villain: '',
      banner: 'Vyjayanthi Movies',
      genre: 'Action comedy',
      roles: [],   // the character names give the title away, so this movie uses the STARRING round only

      stats: { imdb: 6.6, songs: 5, runtime: 159 },  

      spoiler: [
        'A don hiding from the police becomes friends with a kind doctor who treats him.',
      ],
      dialogues: [],

      clues: {   
        job: '',
        location: '',
        song: '',
        scene: 'Nervous doctor Das secretly extracts a bullet from wounded mafia don Deva, sparking their friendship.',
      },
    },
    {
      id: 'ee-nagaraniki-emaindi',
      title: 'Ee Nagaraniki Emaindi',
      aka: [],
      year: 2018,
      level: 'medium',

      hero: 'Vishwak Sen',
      heroine: 'Simran Choudhary',
      director: 'Tharun Bhascker',
      music: 'Vivek Sagar',
      villain: '',
      banner: 'Suresh Productions',
      genre: 'Comedy',
      roles: ['Vivek', 'Karthik', 'Kaushik', 'Uppi'],  

      stats: { imdb: 8, songs: 6, runtime: 137 },   

      spoiler: [
        'Four friends who once dreamed of making short films go on a drunken trip to Goa and rediscover their friendship.',
      ],
      dialogues: ['Rey naaku bhayamaithundiraa...', 'Masth shades unnay ra neelo... Kamal Haasan'],

      clues: {   
        job: '',
        location: '',
        song: 'Veediponidhi Okateley',
        scene: 'Four friends end up in Goa and make a short film',
      },
    },
    {
      id: 'geetha-govindam',
      title: 'Geetha Govindam',
      aka: [],
      year: 2018,
      level: 'easy',

      hero: 'Vijay Deverakonda',
      heroine: 'Rashmika Mandanna',
      director: 'Parasuram',
      music: 'Gopi Sundar',
      villain: '',
      banner: 'GA2 Pictures',
      genre: 'Romantic comedy',
      roles: [],   // the character names give the title away, so this movie uses the STARRING round only

      stats: { imdb: 7.7, songs: 5, runtime: 143 },

      spoiler: [
        'A mild-mannered lecturer kisses a stranger on a bus ride. When they meet again, her family turns out to be the one his sister is about to marry into.',
      ],
      dialogues: [],

      clues: {   
        job: '',
        location: '',
        song: 'Inkem Inkem Inkem Kaavaale',
        scene: '',
      },
    },
       {
      id: 'kaala',
      title: 'Kaala',
      aka: [],
      year: 2018,
      level: 'medium',

      hero: 'Rajinikanth',
      heroine: 'Huma Qureshi',
      director: 'Pa. Ranjith',
      music: 'Santhosh Narayanan',
      villain: 'Nana Patekar',
      banner: 'Wunderbar Films',
      genre: 'Action drama',
      roles: [],   // the character names give the title away, so this movie uses the STARRING round only

      stats: { imdb: 6.5, songs: 7, runtime: 166 },   

      spoiler: [
        'The leader of a Mumbai slum stands against a politician who wants to take over the land.',
      ],
      dialogues: [],

      clues: {  
        job: '',
        location: '',
        song: '',
        scene: '',
      },
    },
    {
      id: 'kgf-chapter-1',
      title: 'KGF: Chapter 1',
      aka: [],
      year: 2018,
      level: 'easy',

      hero: 'Yash',
      heroine: 'Srinidhi Shetty',
      director: 'Prashanth Neel',
      music: 'Ravi Basrur',
      villain: '',
      banner: 'Hombale Films',
      genre: 'Period action',
      roles: [],  

      stats: { imdb: 8.1, songs: 4, runtime: 155 },  

      spoiler: [
        'A ruthless gangster enters Kolar Gold Fields to assassinate its tyrannical ruler, pursuing power while fulfilling a promise made to his mother.',
      ],
      dialogues: ['If you think you are bad... I am your dad'],

      clues: { 
        job: '',
        location: '',
        song: 'Salaam Rocky Bhai',
        scene: '',
      },
    },
    {
      id: 'mahanati',
      title: 'Mahanati',
      aka: [],
      year: 2018,
      level: 'easy',

      hero: 'Dulquer Salmaan',
      heroine: 'Keerthy Suresh',
      director: 'Nag Ashwin',
      music: 'Mickey J. Meyer',
      villain: '',
      banner: 'Vyjayanthi Movies',
      genre: 'Biographical drama',
      roles: [],   

      stats: { imdb: 8.4, songs: 6, runtime: 177 },

      spoiler: [
        'A journalist traces the life of a legendary actress, from her days as a child artist to being the biggest star in the industry',
      ],
      dialogues: [],

      clues: {   
        job: '',
        location: '',
        song: 'Chivaraku Migiledi',
        scene: '',
      },
    },
    {
      id: 'naa-peru-surya-naa-illu-india',
      title: 'Naa Peru Surya Naa Illu India',
      aka: [],
      year: 2018,
      level: 'medium',

      hero: 'Allu Arjun',
      heroine: 'Anu Emmanuel',
      director: 'Vakkantham Vamsi',
      music: 'Vishal–Shekhar',
      villain: 'Sarath Kumar',
      banner: '',
      genre: 'Action drama',
      roles: [],   // the character names give the title away, so this movie uses the STARRING round only

      stats: { imdb: 6.7, songs: 5, runtime: 163 },   

      spoiler: [
        'A soldier with an uncontrollable temper must get a psychologist\'s approval to return to the border.',
      ],
      dialogues: ['South India, North India, East, West... anni India-lu levu ra manaki. Okkate India'],

      clues: {   
        job: 'Army soldier',
        location: '',
        song: '',
        scene: '',
      },
    },
    {
      id: 'padi-padi-leche-manasu',
      title: 'Padi Padi Leche Manasu',
      aka: [],
      year: 2018,
      level: 'hard',

      hero: 'Sharwanand',
      heroine: 'Sai Pallavi',
      director: 'Hanu Raghavapudi',
      music: 'Vishal Chandrashekhar',
      villain: '',
      banner: 'Sri Lakshmi Venkateswara Cinemas',
      genre: 'Romantic drama',
      roles: [],

      stats: { imdb: 6.5, songs: 6, runtime: 156 },   

      spoiler: [
      ],
      dialogues: [],

      clues: {   
        job: '',
        location: '',
        song: 'Emai Poyave',
        scene: '',
      },
    },
    {
      id: 'rangasthalam',
      title: 'Rangasthalam',
      aka: [],
      year: 2018,
      level: 'easy',

      hero: 'Ram Charan',
      heroine: 'Samantha',
      director: 'Sukumar',
      music: 'Devi Sri Prasad',
      villain: 'Jagapathi Babu',
      banner: 'Mythri Movie Makers',
      genre: 'Period action drama',
      roles: ['Chitti Babu', 'Ramalakshmi', 'Presidentgaaru'],  

      stats: { imdb: 8.2, songs: 7, runtime: 167 },

      spoiler: [
        'In a 1980s village, a hard-of-hearing young man who runs a water pump for farmers is caught between his elder brother and the village president.',
        'A partly deaf young man in a 1980s village helps his brother fight the village president in an election.',
      ],
      dialogues: ['Ennikalaku sidham avvandi Phanindhra Bhupathi Garu'],

      clues: {   
        job: 'Water pump operator',
        location: '',
        song: 'Rangamma Mangamma',
        scene: 'A man with hearing trouble in a 1980s village',
      },
    },
    {
      id: 'sammohanam',
      title: 'Sammohanam',
      aka: [],
      year: 2018,
      level: 'hard',

      hero: 'Sudheer Babu',
      heroine: 'Aditi Rao Hydari',
      director: 'Mohan Krishna Indraganti',
      music: 'Vivek Sagar',
      villain: '',
      banner: 'Sridevi Movies',
      genre: 'Romantic drama',
      roles: [],  

      stats: { imdb: 7.6, songs: 4, runtime: 137 },   

      spoiler: [
        'A children\'s book illustrator who dislikes films falls for a film star who shoots at his house.',
      ],
      dialogues: [],

      clues: {   
        job: '',
        location: '',
        song: '',
        scene: '',
      },
    },
    {
      id: 'savyasachi',
      title: 'Savyasachi',
      aka: [],
      year: 2018,
      level: 'hard',

      hero: 'Naga Chaitanya',
      heroine: 'Nidhhi Agerwal',
      director: 'Chandoo Mondeti',
      music: 'M. M. Keeravani',
      villain: 'R. Madhavan',
      banner: 'Mythri Movie Makers',
      genre: 'Action thriller',
      roles: [],

      stats: { imdb: 5.3, songs: 6, runtime: 151 },   

      spoiler: [
        'A man whose left hand has a mind of its own, because of a twin he absorbed before birth, fights a psycho who kidnaps his niece.',
      ],
      dialogues: [],

      clues: {   
        job: '',
        location: '',
        song: '',
        scene: '',
      },
    },
    {
      id: 'taxiwaala',
      title: 'Taxiwaala',
      aka: [],
      year: 2018,
      level: 'medium',

      hero: 'Vijay Deverakonda',
      heroine: 'Priyanka Jawalkar',
      director: 'Rahul Sankrityan',
      music: 'Jakes Bejoy',
      villain: '',
      banner: 'GA2 Pictures',
      genre: 'Fantasy horror',
      roles: [],  

      stats: { imdb: 6.8, songs: 4, runtime: 137 },   

      spoiler: [
        'A young man buys a second-hand car and soon learns that it comes with a ghost who has something to settle.',
      ],
      dialogues: [],

      clues: {   
        job: 'Cab driver',
        location: '',
        song: 'Maate Vinadhuga',
        scene: '',
      },
    },
    {
      id: 'tholi-prema-2018',
      title: 'Tholi Prema',
      aka: ['Tholi Prema (2018)'],
      year: 2018,
      level: 'medium',

      hero: 'Varun Tej',
      heroine: 'Raashii Khanna',
      director: 'Venky Atluri',
      music: 'S. Thaman',
      villain: '',
      banner: 'Sri Venkateswara Cine Chitra',
      genre: 'Romantic drama',
      roles: ['Aditya', 'Varsha'], 

      stats: { imdb: 7.2, songs: 6, runtime: 137 },   

      spoiler: [
        'A short-tempered young man and a girl fall in love on a train, break up and meet again years later in London.',
      ],
      dialogues: [],

      clues: {  
        job: '',
        location: '',
        song: 'Allasani Vaari',
        scene: '',
      },
    },
    {
      id: 'agent-sai-srinivasa-athreya',
      title: 'Agent Sai Srinivasa Athreya',
      aka: [],
      year: 2019,
      level: 'medium',

      hero: 'Naveen Polishetty',
      heroine: 'Shruti Sharma',
      director: 'Swaroop RSJ',
      music: 'Mark K. Robin',
      villain: '',
      banner: '',   
      genre: 'Comedy thriller',
      roles: [],   // the character names give the title away, so this movie uses the STARRING round only

      stats: { imdb: 8.4, songs: 1, runtime: 148 },   

      spoiler: [
        'A small-time detective in Nellore stumbles onto a case of unclaimed dead bodies that is much bigger than he thought.',
      ],
      dialogues: ['FBI – Fatima Bureau of Investigation'],

      clues: {   
        job: 'detective agent',
        location: '',
        song: '',
        scene: 'A detective from Nellore looks into unidentified bodies near railway tracks',
      },
    },
    {
      id: 'chitralahari',
      title: 'Chitralahari',
      aka: [],
      year: 2019,
      level: 'hard',

      hero: 'Sai Dharam Tej',
      heroine: 'Kalyani Priyadarshan',
      director: 'Kishore Tirumala',
      music: 'Devi Sri Prasad',
      villain: '',
      banner: 'Mythri Movie Makers',
      genre: 'Drama',
      roles: [],

      stats: { imdb: 7.2, songs: 4, runtime: 131 },   

      spoiler: [
        'A young man whose every invention and relationship fails struggles to find success.',
      ],
      dialogues: ['Idhi emaina Swiggy lo pettina order aa? Intlo koorchunte gantalo raavadaniki... success time paduthundi'],

      clues: {   
        job: '',
        location: '',
        song: 'Prema Vennela',
        scene: 'An inventor presents an accident-alert device that no one wants',
      },
    },
       {
      id: 'f2-fun-and-frustration',
      title: 'F2: Fun and Frustration',
      aka: [],
      year: 2019,
      level: 'easy',

      hero: ['Venkatesh', 'Varun Tej'],
      heroine: ['Tamannaah','Mehreen Pirzada'],
      director: 'Anil Ravipudi',
      music: 'Devi Sri Prasad',
      villain: '',
      banner: 'Sri Venkateswara Creations',
      genre: 'Comedy',
      roles: [],   

      stats: { imdb: 6.1, songs: 5, runtime: 148 }, 

      spoiler: [
        'Two brothers-in-law who are tired of their wives\' demands try to run away from them and cause even more trouble.',
      ],
      dialogues: ['Anthega... Anthega!'],   

      clues: {  
        job: '',
        location: '',
        song: 'Rechipodham Brother',
        scene: 'Two frustrated husbands escape to Europe',
      },
    },
    {
      id: 'gaddalakonda-ganesh',
      title: 'Gaddalakonda Ganesh',
      aka: [],
      year: 2019,
      level: 'medium',

      hero: 'Varun Tej',
      heroine: 'Pooja Hegde',
      director: 'Harish Shankar',
      music: 'Mickey J. Meyer',
      villain: 'Varun Tej',
      banner: '14 Reels Plus',
      genre: 'Action comedy',
      roles: [],   // the character names give the title away, so this movie uses the STARRING round only

      stats: { imdb: 6.3, songs: 4, runtime: 172 },   

      spoiler: [
        'A young filmmaker wants to make a film about a real gangster and gets close to the dangerous man himself.',
      ],
      dialogues: ['Manam brathukuthunnamani padhi mandiki teliyakapothe... ika brathukudu endukura?'],

      clues: {   
        job: '',
        location: '',
        song: 'Elluvochi Godaramma',
        scene: 'A gangster agrees to act in a film about himself',
      },
    },
    {
      id: 'nani-gang-leader',
      title: 'Nani\'s Gang Leader',
      aka: [],
      year: 2019,
      level: 'medium',

      hero: 'Nani',
      heroine: 'Priyanka Arul Mohan',
      director: 'Vikram Kumar',
      music: 'Anirudh Ravichander',
      villain: 'Kartikeya Gummakonda',
      banner: 'Mythri Movie Makers',
      genre: 'Comedy thriller',
      roles: ['Pencil Parthasarathy', 'Priya', 'Dev'],

      stats: { imdb: 7.7, songs: 5, runtime: 155 },   

      spoiler: [
        'Five women of different ages ask a revenge-thriller writer to help them find the man who killed someone they loved.',
      ],
      dialogues: ['Yuddhaaniki siddham kaandi... samarasankham nenu oodhutha'],

      clues: {   
        job: '',
        location: '',
        song: 'Hoyna Hoyna',
        scene: '',
      },
    },
    {
      id: 'ismart-shankar',
      title: 'iSmart Shankar',
      aka: [],
      year: 2019,
      level: 'medium',

      hero: 'Ram Pothineni',
      heroine: 'Nidhhi Agerwal',
      director: 'Puri Jagannadh',
      music: 'Mani Sharma',
      villain: '',
      banner: 'Puri Connects',
      genre: 'Sci-fi action',
      roles: [],   // the character names give the title away, so this movie uses the STARRING round only

      stats: { imdb: 5.4, songs: 5, runtime: 140 },  

      spoiler: [
        'A Hyderabad hitman gets a dead cop\'s memories implanted in his brain.',
      ],
      dialogues: [],

      clues: {   
        job: '',
        location: '',
        song: 'Dimaak Kharaab',
        scene: '',
      },
    },
    {
      id: 'jersey',
      title: 'Jersey',
      aka: [],
      year: 2019,
      level: 'easy',

      hero: 'Nani',
      heroine: 'Shraddha Srinath',
      director: 'Gowtam Tinnanuri',
      music: 'Anirudh Ravichander',
      villain: '',
      banner: 'Sithara Entertainments',
      genre: 'Sports drama',
      roles: [],   

      stats: { imdb: 8.5, songs: 5, runtime: 160 },

      spoiler: [
        'A talented cricketer who quit the game after failure decides to return in his late thirties to give his young son the one thing he asked for.',
      ],
      dialogues: [],

      clues: {  
        job: 'Cricketer',
        location: '',
        song: 'Adhento Gaani Vunnapaatuga',
        scene: 'A failed cricketer returns to the game for his son',
      },
    },
  
    {
      id: 'maharshi',
      title: 'Maharshi',
      aka: [],
      year: 2019,
      level: 'easy',

      hero: 'Mahesh Babu',
      heroine: 'Pooja Hegde',
      director: 'Vamshi Paidipally',
      music: 'Devi Sri Prasad',
      villain: 'Jagapathi Babu',
      banner: 'Sri Venkateswara Creations',
      genre: 'Drama',
      roles: ['Rishi', 'Pooja', 'Ravi'],  

      stats: { imdb: 7.1, songs: 6, runtime: 177 },

      spoiler: [
        'A billionaire CEO returns to his college friend\'s village to help farmers and pay back an old debt.',
      ],
      dialogues: ['Success lo full stops undav... commas matrame untayi.'],

      clues: {   
        job: 'CEO',
        location: '',
        song: 'Padara Padara',
        scene: 'A CEO returns to save his friend\'s village and its farmers',
      },
    },
    {
      id: 'majili',
      title: 'Majili',
      aka: [],
      year: 2019,
      level: 'medium',

      hero: 'Naga Chaitanya',
      heroine: 'Samantha',
      director: 'Shiva Nirvana',
      music: 'Gopi Sundar',
      villain: '',
      banner: 'Shine Screens',
      genre: 'Romantic drama',
      roles: ['Poorna', 'Sravani', 'Anshu'], 

      stats: { imdb: 7.3, songs: 5, runtime: 154 },   

      spoiler: [
      ],
      dialogues: [],

      clues: {   
        job: '',
        location: '',
        song: '',
        scene: '',
      },
    },
    {
      id: 'manmadhudu-2',
      title: 'Manmadhudu 2',
      aka: [],
      year: 2019,
      level: 'hard',

      hero: 'Nagarjuna',
      heroine: 'Rakul Preet Singh',
      director: 'Rahul Ravindran',
      music: 'Chaitan Bharadwaj',
      villain: '',
      banner: '',
      genre: 'Romantic comedy',
      roles: [],  

      stats: { imdb: 4.7, songs: 3, runtime: 152 },   

      spoiler: [
        'A man in Portugal hires a woman to pretend to be his fiancée to stop his family pushing him to marry.',
      ],
      dialogues: [],

      clues: {   
        job: '',
        location: '',
        song: '',
        scene: '',
      },
    },
    
    {
      id: 'mr-majnu',
      title: 'Mr. Majnu',
      aka: [],
      year: 2019,
      level: 'hard',

      hero: 'Akhil Akkineni',
      heroine: 'Nidhhi Agerwal',
      director: 'Venky Atluri',
      music: 'S. Thaman',
      villain: '',
      banner: 'Sree Venkateswara Cinemas',
      genre: 'Romantic comedy',
      roles: [],

      stats: { imdb: 6.1, songs: 6, runtime: 145 }, 

      spoiler: [
      ],
      dialogues: [],

      clues: {   
        job: '',
        location: '',
        song: 'Koppamga Koppamga',
        scene: '',
      },
    },
    {
      id: 'ntr-kathanayakudu',
      title: 'NTR: Kathanayakudu',
      aka: [],
      year: 2019,
      level: 'hard',

      hero: 'Balakrishna',
      heroine: 'Vidya Balan',
      director: 'Krish Jagarlamudi',
      music: 'M. M. Keeravani',
      villain: '',
      banner: '',
      genre: 'Biographical drama',
      roles: [],   

      stats: { imdb: 5.7, songs: 6, runtime: 171 },   

      spoiler: [
      ],
      dialogues: [],

      clues: {   
        job: '',
        location: '',
        song: '',
        scene: '',
      },
    },
    {
      id: 'ntr-mahanayakudu',
      title: 'NTR: Mahanayakudu',
      aka: [],
      year: 2019,
      level: 'hard',

      hero: 'Balakrishna',
      heroine: 'Vidya Balan',
      director: 'Krish Jagarlamudi',
      music: 'M. M. Keeravani',
      villain: '',
      banner: '',
      genre: 'Biographical drama',
      roles: [],   

      stats: { imdb: 5.4, songs: 4, runtime: 128 },   

      spoiler: [
      ],
      dialogues: [],

      clues: {   
        job: '',
        location: '',
        song: '',
        scene: '',
      },
    },
    {
      id: 'peta',
      title: 'Peta',
      aka: [],
      year: 2019,
      level: 'medium',

      hero: 'Rajinikanth',
      heroine: 'Simran',
      director: 'Karthik Subbaraj',
      music: 'Anirudh Ravichander',
      villain: 'Vijay Sethupathi',
      banner: 'Sun Pictures',
      genre: 'Action thriller',
      roles: [],  

      stats: { imdb: 7.2, songs: 5, runtime: 171 },   

      spoiler: [
        'A mysterious hostel warden protects students from local gangsters, but his violent past resurfaces, revealing a powerful identity and dangerous enemies.',
      ],
      dialogues: [],

      clues: {   
        job: 'Hostel warden',
        location: '',
        song: 'Marana Mass',
        scene: '',
      },
    },
    {
      id: 'prati-roju-pandage',
      title: 'Prati Roju Pandage',
      aka: [],
      year: 2019,
      level: 'medium',

      hero: 'Sai Dharam Tej',
      heroine: 'Raashii Khanna',
      director: 'Maruthi',
      music: 'S. Thaman',
      villain: '',
      banner: 'GA2 Pictures',
      genre: 'Family comedy drama',
      roles: [],

      stats: { imdb: 6.3, songs: 5, runtime: 146 }, 

      spoiler: [
        'A grandson makes his dying grandfather\'s last days happy, while his busy family stays abroad.',
      ],
      dialogues: [],

      clues: {   
        job: '',
        location: '',
        song: 'Oo Baava',
        scene: '',
      },
    },
    {
      id: 'saaho',
      title: 'Saaho',
      aka: [],
      year: 2019,
      level: 'easy',

      hero: 'Prabhas',
      heroine: 'Shraddha Kapoor',
      director: 'Sujeeth',
      music: 'Ghibran',
      villain: 'Neil Nitin Mukesh',
      banner: 'UV Creations',
      genre: 'Action thriller',
      roles: [],   

      stats: { imdb: 5.2, songs: 4, runtime: 170 },  

      spoiler: [
      ],
      dialogues: ['Gully lo six evadaina kodathadu... stadium lo kottevaadike oka range untundi'],

      clues: {   
        job: '',
        location: 'Waaji city',
        song: 'Baby Won\'t You Tell Me',
        scene: 'An undercover agent, a black box and a crime syndicate',
      },
    },
    {
      id: 'sye-raa-narasimha-reddy',
      title: 'Sye Raa Narasimha Reddy',
      aka: [],
      year: 2019,
      level: 'medium',

      hero: 'Chiranjeevi',
      heroine: 'Nayanthara',
      director: 'Surender Reddy',
      music: 'Amit Trivedi',
      villain: '',
      banner: 'Konidela Production Company',
      genre: 'Historical action',
      roles: [],   // the character names give the title away, so this movie uses the STARRING round only

      stats: { imdb: 7.2, songs: 4, runtime: 167 },   

      spoiler: [
        'A fearless warrior from Rayalaseema leads an uprising against British rule, inspiring neighbouring kingdoms to join his fight for freedom.',
      ],
      dialogues: ['Ee bhoomi meeda puttindi memu... ee mattilo kalisedi memu! Meekenduku kattaali ra sisthu?'],

      clues: {  
        job: '',
        location: '',
        song: '',
        scene: 'A ruler revolts against the British in 1857',
      },
    },
    {
      id: 'venky-mama',
      title: 'Venky Mama',
      aka: [],
      year: 2019,
      level: 'hard',

      hero: ['Venkatesh', 'Naga Chaitanya'],
      heroine: ['Payal Rajput', 'Raashii Khanna'],
      director: 'Bobby Kolli',
      music: 'S. Thaman',
      villain: '',
      banner: 'Suresh Productions',
      genre: 'Family action comedy',
      roles: [],   

      stats: { imdb: 5.5, songs: 4, runtime: 150 },   

      spoiler: [
      ],
      dialogues: [],

      clues: {   
        job: '',
        location: '',
        song: '',
        scene: '',
      },
    },
    {
      id: 'vinaya-vidheya-rama',
      title: 'Vinaya Vidheya Rama',
      aka: [],
      year: 2019,
      level: 'medium',

      hero: 'Ram Charan',
      heroine: 'Kiara Advani',
      director: 'Boyapati Srinu',
      music: 'Devi Sri Prasad',
      villain: '',
      banner: 'DVV Entertainment',
      genre: 'Action drama',
      roles: [],

      stats: { imdb: 3.3, songs: 5, runtime: 144 },   

      spoiler: [
      ],
      dialogues: [],

      clues: {   
        job: '',
        location: '',
        song: 'Thassadiyya',
        scene: '',
      },
    },

    // ── 2020s ─────────────────────────────────────────────

    {
      id: 'ala-vaikunthapurramuloo',
      title: 'Ala Vaikunthapurramuloo',
      aka: [],
      year: 2020,
      level: 'easy',

      hero: 'Allu Arjun',
      heroine: 'Pooja Hegde',
      director: 'Trivikram Srinivas',
      music: 'S. Thaman',
      villain: 'Samuthirakani',
      banner: 'Geetha Arts',
      genre: 'Family action comedy',
      roles: [],   

      stats: { imdb: 7.3, songs: 6, runtime: 165 },

      spoiler: [
        'A middle-class man finds out he was swapped at birth with a rich man\'s son, and quietly goes to work for his real family.',
      ],
      dialogues: ['Nijam cheppetappude bhayam vesthundi... cheppakapothe eppudu bhayam vesthune untundi'],

      clues: {  
        job: '',
        location: '',
        song: 'Butta Bomma',
        scene: 'Two babies are swapped at birth in a hospital',
      },
    },
    {
      id: 'bheeshma',
      title: 'Bheeshma',
      aka: [],
      year: 2020,
      level: 'medium',

      hero: 'Nithiin',
      heroine: 'Rashmika Mandanna',
      director: 'Venky Kudumula',
      music: 'Mahati Swara Sagar',
      villain: '',
      banner: 'Sithara Entertainments',
      genre: 'Romantic comedy',
      roles: [],   // the character names give the title away, so this movie uses the STARRING round only

      stats: { imdb: 6.6, songs: 5, runtime: 150 },   

      spoiler: [
        'A single young man suddenly finds himself named the head of a big organic farming company.',
      ],
      dialogues: ['You touch me, I poke you. You poke me, I scratch you.'],

      clues: {   
        job: '',
        location: '',
        song: 'Whattey Beauty',
        scene: 'A jobless guy is named CEO of a company',
      },
    },
    
    {
      id: 'darbar',
      title: 'Darbar',
      aka: [],
      year: 2020,
      level: 'medium',

      hero: 'Rajinikanth',
      heroine: 'Nayanthara',
      director: 'A. R. Murugadoss',
      music: 'Anirudh Ravichander',
      villain: 'Suniel Shetty',
      banner: 'Lyca Productions',
      genre: 'Action thriller',
      roles: [],   

      stats: { imdb: 5.9, songs: 5, runtime: 159 },   

      spoiler: [
        'A tough police commissioner in Mumbai takes on a drug lord, and loses someone close to him.',
      ],
      dialogues: [],

      clues: {  
        job: '',
        location: '',
        song: '',
        scene: '',
      },
    },
    {
      id: 'disco-raja',
      title: 'Disco Raja',
      aka: [],
      year: 2020,
      level: 'hard',

      hero: 'Ravi Teja',
      heroine: 'Nabha Natesh',
      director: 'V. I. Anand',
      music: 'S. Thaman',
      villain: 'Bobby Simha',
      banner: '',
      genre: 'Sci-fi action',
      roles: [],

      stats: { imdb: 6.1, songs: 4, runtime: 149 },   

      spoiler: [
      ],
      dialogues: [],

      clues: {   
        job: '',
        location: '',
        song: 'Freak Out',
        scene: '',
      },
    },
    {
      id: 'hit-the-first-case',
      title: 'HIT: The First Case',
      aka: [],
      year: 2020,
      level: 'medium',

      hero: 'Vishwak Sen',
      heroine: 'Ruhani Sharma',
      director: 'Sailesh Kolanu',
      music: 'Vivek Sagar',
      villain: '',
      banner: 'Wall Poster Cinema',
      genre: 'Crime thriller',
      roles: [],  

      stats: { imdb: 7.6, songs: 1, runtime: 130 },   

      spoiler: [
      ],
      dialogues: [],

      clues: {  
        job: '',
        location: '',
        song: '',
        scene: '',
      },
    },
    {
      id: 'sarileru-neekevvaru',
      title: 'Sarileru Neekevvaru',
      aka: [],
      year: 2020,
      level: 'easy',

      hero: 'Mahesh Babu',
      heroine: 'Rashmika Mandanna',
      director: 'Anil Ravipudi',
      music: 'Devi Sri Prasad',
      villain: 'Prakash Raj',
      banner: 'AK Entertainments',
      genre: 'Action comedy',
      roles: [],   

      stats: { imdb: 5.8, songs: 5, runtime: 169 },

      spoiler: [
        'An army major travels to Kurnool on a mission, becoming involved in a family\'s struggle against a corrupt and powerful politician.',
      ],
      dialogues: ['Ramana, load etthaalra... checkpost padathaadi'],

      clues: {   
        job: 'Army major',
        location: 'Kurnool',
        song: 'Mind Block',
        scene: 'An army major travels to Kurnool, with a long comedy episode on a train',
      },
    },
    {
      id: 'solo-brathuke-so-better',
      title: 'Solo Brathuke So Better',
      aka: [],
      year: 2020,
      level: 'hard',

      hero: 'Sai Dharam Tej',
      heroine: 'Nabha Natesh',
      director: 'Subbu',
      music: 'S. Thaman',
      villain: '',
      banner: 'Sri Venkateswara Cine Chitra',
      genre: 'Romantic comedy',
      roles: [],

      stats: { imdb: 5.5, songs: 5, runtime: 122 },   

      spoiler: [
      ],
      dialogues: [],

      clues: {   
        job: '',
        location: '',
        song: 'No Pelli',
        scene: '',
      },
    },
    {
      id: 'v',
      title: 'V',
      aka: [],
      year: 2020,
      level: 'hard',

      hero: ['Nani', 'Sudheer Babu'],
      heroine: 'Aditi Rao Hydari',
      director: 'Mohan Krishna Indraganti',
      music: 'Amit Trivedi',
      villain: 'Nani',
      banner: 'Sri Venkateswara Creations',
      genre: 'Action thriller',
      roles: [],   

      stats: { imdb: 6.8, songs: 4, runtime: 140 },  

      spoiler: [
      ],
      dialogues: ['Sollaapu... dammunte nannu aapu.'],

      clues: {   
        job: '',
        location: '',
        song: 'Manasu Maree',
        scene: '',
      },
    },
        {
      id: 'akhanda',
      title: 'Akhanda',
      aka: [],
      year: 2021,
      level: 'easy',

      hero: 'Balakrishna',
      heroine: 'Pragya Jaiswal',
      director: 'Boyapati Srinu',
      music: 'S. Thaman',
      villain: 'Srikanth',
      banner: 'Dwaraka Creations',
      genre: 'Action drama',
      roles: [],   // the character names give the title away, so this movie uses the STARRING round only

      stats: { imdb: 6.7, songs: 5, runtime: 167 },

      spoiler: [
        'A man who fights a mining mafia gets help from his twin brother, an Aghora who lives in Kashi.',
      ],
      dialogues: ['Oka maata nuvvante adhi shabdam... ade maata nenante saasanam Daiva Saasanam!'],

      clues: {   
        job: '',
        location: '',
        song: 'Jai Balayya',
        scene: '',
      },
    },
    {
      id: 'jathi-ratnalu',
      title: 'Jathi Ratnalu',
      aka: [],
      year: 2021,
      level: 'easy',

      hero: 'Naveen Polishetty',
      heroine: 'Faria Abdullah',
      director: 'Anudeep K. V.',
      music: 'Radhan',
      villain: '',
      banner: 'Swapna Cinema',
      genre: 'Comedy',
      roles: ['Srikanth', 'Chitti'], 

      stats: { imdb: 7.4, songs: 4, runtime: 148 },  

      spoiler: [
        'Three innocent friends from a small town move to Hyderabad and get arrested for an attempt on a minister\'s life.',
      ],
      dialogues: [],

      clues: {   
        job: '',
        location: 'Jogipet and Hyderabad',
        song: 'Chitti',
        scene: '',
      },
    },
    {
      id: 'krack',
      title: 'Krack',
      aka: [],
      year: 2021,
      level: 'medium',

      hero: 'Ravi Teja',
      heroine: 'Shruti Haasan',
      director: 'Gopichand Malineni',
      music: 'S. Thaman',
      villain: 'Samuthirakani',
      banner: '',
      genre: 'Action thriller',
      roles: [],   

      stats: { imdb: 6.9, songs: 4, runtime: 154 },   

      spoiler: [
        
      ],
      dialogues: [],

      clues: {   
        job: '',
        location: '',
        song: 'Mass Biriyani',
        scene: '',
      },
    },
    {
      id: 'pushpa-the-rise',
      title: 'Pushpa: The Rise',
      aka: [],
      year: 2021,
      level: 'easy',

      hero: 'Allu Arjun',
      heroine: 'Rashmika Mandanna',
      director: 'Sukumar',
      music: 'Devi Sri Prasad',
      villain: 'Fahadh Faasil',
      banner: 'Mythri Movie Makers',
      genre: 'Action drama',
      roles: [],   

      stats: { imdb: 7.6, songs: 6, runtime: 179 },

      spoiler: [
        'A coolie in the red sandalwood trade rises to the top of a smuggling syndicate.',
      ],
      dialogues: ['Ee prapancham mee chethilo thupaaki ichindhi, naa chethilo goddali ichindhi... evadi yuddham vaadidhe'],

      clues: {   
        job: '',
        location: '',
        song: 'Daakko Daakko Mekai',
        scene: 'A labourer rises through the red sandalwood smuggling trade',
      },
    },
    {
      id: 'rang-de',
      title: 'Rang De',
      aka: [],
      year: 2021,
      level: 'hard',

      hero: 'Nithiin',
      heroine: 'Keerthy Suresh',
      director: 'Venky Atluri',
      music: 'Devi Sri Prasad',
      villain: '',
      banner: 'Sithara Entertainments',
      genre: 'Romantic comedy',
      roles: [], 

      stats: { imdb: 6.2, songs: 6, runtime: 160 },   

      spoiler: [
      ],
      dialogues: [],

      clues: {   
        job: '',
        location: '',
        song: '',
        scene: '',
      },
    },
    {
      id: 'shyam-singha-roy',
      title: 'Shyam Singha Roy',
      aka: [],
      year: 2021,
      level: 'medium',

      hero: 'Nani',
      heroine: 'Sai Pallavi',
      director: 'Rahul Sankrityan',
      music: 'Mickey J. Meyer',
      villain: '',
      banner: 'Niharika Entertainment',
      genre: 'Period drama',
      roles: [],   // the character names give the title away, so this movie uses the STARRING round only

      stats: { imdb: 7.6, songs: 5, runtime: 157 },  

      spoiler: [
        'A young filmmaker accused of copying a famous writer\'s works finds out about his previous life in 1970s Bengal.',
      ],
      dialogues: [],

      clues: {   
        job: '',
        location: ' ',
        song: 'Sirivennela',
        scene: 'A filmmaker discovers his past life as a Bengali writer',
      },
    },
    {
      id: 'vakeel-saab',
      title: 'Vakeel Saab',
      aka: [],
      year: 2021,
      level: 'medium',

      hero: 'Pawan Kalyan',
      heroine: 'Shruti Haasan',
      director: 'Venu Sriram',
      music: 'S. Thaman',
      villain: 'Prakash Raj',
      banner: 'Sri Venkateswara Creations',
      genre: 'Legal drama',
      roles: [],   

      stats: { imdb: 7, songs: 3, runtime: 154 },  

      spoiler: [
        'Three girls are accused of a crime, and a retired lawyer who has stayed silent for years returns to court to defend them.',
      ],
      dialogues: ['Court lo vaadinchadam thelusu... coat theesi kottadamoo thelusu'],

      clues: {  
        job: 'Lawyer',
        location: '',
        song: 'Maguva Maguva',
        scene: 'A suspended lawyer defends three women in court',
      },
    },
    {
      id: 'zombie-reddy',
      title: 'Zombie Reddy',
      aka: [],
      year: 2021,
      level: 'hard',

      hero: 'Teja Sajja',
      heroine: '',
      director: 'Prasanth Varma',
      music: 'Mark K. Robin',
      villain: '',
      banner: '',
      genre: 'Zombie comedy',
      roles: [],

      stats: { imdb: 6.7, songs: 3, runtime: 125 },  

      spoiler: [
        'A group of friends visit a village in Rayalaseema just as a zombie outbreak hits.',
      ],
      dialogues: [],

      clues: {  
        job: 'Game developer',
        location: '',
        song: '',
        scene: '',
      },
    },
    {
      id: 'acharya',
      title: 'Acharya',
      aka: [],
      year: 2022,
      level: 'easy',

      hero: ['Chiranjeevi', 'Ram Charan'],
      heroine: 'Pooja Hegde',
      director: 'Koratala Siva',
      music: 'Mani Sharma',
      villain: '',
      banner: 'Konidela Production Company',
      genre: 'Action drama',
      roles: [],   // the character names give the title away, so this movie uses the STARRING round only

      stats: { imdb: 3.8, songs: 4, runtime: 154 },   

      spoiler: [
        'A comrade comes to Dharmasthali to finish the fight that a young man named Siddha started.',
      ],
      dialogues: [],

      clues: {  
        job: '',
        location: 'Dharmasthali',
        song: 'Laahe Laahe',
        scene: '',
      },
    },
    {
      id: 'ante-sundaraniki',
      title: 'Ante Sundaraniki',
      aka: [],
      year: 2022,
      level: 'medium',

      hero: 'Nani',
      heroine: 'Nazriya Nazim',
      director: 'Vivek Athreya',
      music: 'Vivek Sagar',
      villain: '',
      banner: 'Mythri Movie Makers',
      genre: 'Romantic comedy',
      roles: [],   // the character names give the title away, so this movie uses the STARRING round only

      stats: { imdb: 7.6, songs: 7, runtime: 176 },   

      spoiler: [
        'A Brahmin boy and a Christian girl invent one lie after another to get their conservative families to agree to their marriage.',
      ],
      dialogues: [],

      clues: {   
        job: '',
        location: '',
        song: '',
        scene: 'A Brahmin boy and a Christian girl lie to both families to get married',
      },
    },
  
    {
      id: 'beast',
      title: 'Beast',
      aka: [],
      year: 2022,
      level: 'medium',

      hero: 'Vijay',
      heroine: 'Pooja Hegde',
      director: 'Nelson Dilipkumar',
      music: 'Anirudh Ravichander',
      villain: '',
      banner: 'Sun Pictures',
      genre: 'Action comedy',
      roles: ['Veera Raghavan', 'Preethi'],   

      stats: { imdb: 5.2, songs: 3, runtime: 156 },   

      spoiler: [
        'A former spy is trapped inside a shopping mall that terrorists have taken over.',
      ],
      dialogues: [],

      clues: {   
        job: 'Former RAW agent',
        location: '',
        song: 'Arabic Kuthu',
        scene: '',
      },
    },
    {
      id: 'bheemla-nayak',
      title: 'Bheemla Nayak',
      aka: [],
      year: 2022,
      level: 'easy',

      hero: ['Pawan Kalyan', 'Rana Daggubati'],
      heroine: 'Nithya Menen',
      director: 'Saagar K. Chandra',
      music: 'S. Thaman',
      villain: '',
      banner: 'Sithara Entertainments',
      genre: 'Action drama',
      roles: [],   // the character names give the title away, so this movie uses the STARRING round only

      stats: { imdb: 6.2, songs: 5, runtime: 145 },   

      spoiler: [
        'A forest cop and a retired army man fall into an ego war over a minor arrest.',
      ],
      dialogues: [],

      clues: {  
        job: '',
        location: '',
        song: '',
        scene: 'A clash of egos between a police officer and an ex-army man',
      },
    },
    {
      id: 'bimbisara',
      title: 'Bimbisara',
      aka: [],
      year: 2022,
      level: 'medium',

      hero: 'Kalyan Ram',
      heroine: 'Catherine Tresa',
      director: 'Mallidi Vassishta',
      music: 'M. M. Keeravani',
      villain: '',  
      banner: 'N.T.R. Arts',
      genre: 'Fantasy action',
      roles: [],

      stats: { imdb: 6.8, songs: 4, runtime: 146 },   

      spoiler: [
        'A cruel ancient king is thrown into the present day by a magic mirror and learns humility.',
      ],
      dialogues: [],

      clues: {   
        job: '',
        location: '',
        song: '',
        scene: 'A king walks out of a mirror into the modern world',
      },
    },
    {
      id: 'dhamaka',
      title: 'Dhamaka',
      aka: [],
      year: 2022,
      level: 'medium',

      hero: 'Ravi Teja',
      heroine: 'Sreeleela',
      director: 'Trinadha Rao Nakkina',
      music: 'Bheems Ceciroleo',
      villain: 'Jayaram',
      banner: 'People Media Factory',
      genre: 'Action comedy',
      roles: [],   

      stats: { imdb: 6.1, songs: 5, runtime: 139 },   
       
      spoiler: [
      ],
      dialogues: [],

      clues: {   
        job: '',
        location: '',
        song: '',
        scene: '',
      },
    },
    {
      id: 'dj-tillu',
      title: 'DJ Tillu',
      aka: [],
      year: 2022,
      level: 'medium',

      hero: 'Siddhu Jonnalagadda',
      heroine: 'Neha Shetty',
      director: 'Vimal Krishna',
      music: 'Ram Miriyala',
      villain: '',
      banner: 'Sithara Entertainments',
      genre: 'Crime comedy',
      roles: [],   // the character names give the title away, so this movie uses the STARRING round only

      stats: { imdb: 7.2, songs: 3, runtime: 124 },   

      spoiler: [
        'A local DJ with a big mouth falls for a mysterious singer and gets dragged into a murder.',
      ],
      dialogues: ['Atluntadhi manathoni'],

      clues: {   
        job: 'DJ',
        location: '',
        song: 'Pataas Pilla',
        scene: 'A local DJ is pulled into a murder by his girlfriend',
      },
    },
    {
      id: 'f3-fun-and-frustration',
      title: 'F3: Fun and Frustration',
      aka: [],
      year: 2022,
      level: 'medium',

      hero: ['Venkatesh', 'Varun Tej'],
      heroine: ['Tamannaah','Mehreen Pirzada',],
      director: 'Anil Ravipudi',
      music: 'Devi Sri Prasad',
      villain: '',
      banner: 'Sri Venkateswara Creations',
      genre: 'Family comedy',
      roles: [],   

      stats: { imdb: 4.7, songs: 4, runtime: 148 },   

      spoiler: [
      ],
      dialogues: [],

      clues: {   
        job: '',
        location: '',
        song: '',
        scene: '',
      },
    },
    
    {
      id: 'kgf-chapter-2',
      title: 'KGF: Chapter 2',
      aka: [],
      year: 2022,
      level: 'easy',

      hero: 'Yash',
      heroine: 'Srinidhi Shetty',
      director: 'Prashanth Neel',
      music: 'Ravi Basrur',
      villain: 'Sanjay Dutt',
      banner: 'Hombale Films',
      genre: 'Period action',
      roles: [],   

      stats: { imdb: 8.2, songs: 4, runtime: 168 },   

      spoiler: [
      ],
      dialogues: [],

      clues: {   
        job: '',
        location: '',
        song: '',
        scene: '',
      },
    },
    {
      id: 'liger',
      title: 'Liger',
      aka: [],
      year: 2022,
      level: 'medium',

      hero: 'Vijay Deverakonda',
      heroine: 'Ananya Panday',
      director: 'Puri Jagannadh',
      music: '',  
      villain: '',
      banner: 'Puri Connects',
      genre: 'Sports action',
      roles: [],   // the character names give the title away, so this movie uses the STARRING round only

      stats: { imdb: 2.6, songs: 6, runtime: 138 },   

      spoiler: [
        'A tea-seller\'s son from Mumbai with a stammer goes after a place in the MMA ring, guided by his determined mother.',
      ],
      dialogues: [],

      clues: {   
        job: 'MMA fighter',
        location: '',
        song: 'Akdi Pakdi',
        scene: '',
      },
    },
    {
      id: 'major',
      title: 'Major',
      aka: [],
      year: 2022,
      level: 'medium',

      hero: 'Adivi Sesh',
      heroine: 'Saiee Manjrekar',
      director: 'Sashi Kiran Tikka',
      music: 'Sricharan Pakala',
      villain: '',
      banner: 'GMB Entertainment',
      genre: 'Biographical action',
      roles: [],   

      stats: { imdb: 8.1, songs: 4, runtime: 149 },

      spoiler: [
        'The true story of an army commando who gave his life saving hostages during the 2008 attacks on Mumbai hotel.',
      ],
      dialogues: [],

      clues: {  
        job: 'NSG commando',
        location: 'Mumbai',
        song: '',
        scene: 'A commando fights terrorists during the 2008 Mumbai attacks',
      },
    },
    {
      id: 'prince',
      title: 'Prince',
      aka: [],
      year: 2022,
      level: 'hard',

      hero: 'Sivakarthikeyan',
      heroine: 'Maria Ryaboshapka',
      director: 'Anudeep K. V.',
      music: 'S. Thaman',
      villain: '',
      banner: '',
      genre: 'Romantic comedy',
      roles: [],

      stats: { imdb: 4.4, songs: 3, runtime: 143 },   

      spoiler: [
        'A school teacher in a village falls for a British woman, and the villagers turn it into a patriotic fight.',
      ],
      dialogues: [],

      clues: {   
        job: '',
        location: '',
        song: 'Jessica',
        scene: '',
      },
    },
    {
      id: 'radhe-shyam',
      title: 'Radhe Shyam',
      aka: [],
      year: 2022,
      level: 'medium',

      hero: 'Prabhas',
      heroine: 'Pooja Hegde',
      director: 'Radha Krishna Kumar',
      music: 'Justin Prabhakaran',
      villain: '',
      banner: 'UV Creations',
      genre: 'Period romance',
      roles: ['Vikramaditya', 'Prerana'],   

      stats: { imdb: 5.2, songs: 4, runtime: 138 },   

      spoiler: [
        'A famous palmist who can read anyone\'s future falls for a doctor whose palm says she will die soon.',
      ],
      dialogues: [],

      clues: {   
        job: 'Palmist',
        location: '',
        song: 'Ee Raathale',
        scene: '',
      },
    },
    {
      id: 'rrr',
      title: 'RRR',
      aka: [],
      year: 2022,
      level: 'easy',

      hero: ['Jr NTR', 'Ram Charan'],
      heroine: 'Alia Bhatt',
      director: 'S. S. Rajamouli',
      music: 'M. M. Keeravani',
      villain: '',
      banner: 'DVV Entertainment',
      genre: 'Period action drama',
      roles: ['Bheem', 'Ram', 'Sita'],  

      stats: { imdb: 7.8, songs: 5, runtime: 187 },

      spoiler: [
        'Two revolutionaries in British India become the closest of friends without knowing that each has a secret mission that will put them on opposite sides.',
      ],
      dialogues: ['Thongi thongi nakki nakki kaadhe... thokkukuntoo povaale. Edhurochhinodini esukuntoo povaale','Ee nakkala veta entha sepu... kumbhasthalaanni baddhalu kodadhaam padhaa'],

      clues: {   
        job: '',
        location: '',
        song: 'Naatu Naatu',
        scene: 'A dance-off at a British party',
      },
    },
    {
      id: 'sarkaru-vaari-paata',
      title: 'Sarkaru Vaari Paata',
      aka: [],
      year: 2022,
      level: 'medium',

      hero: 'Mahesh Babu',
      heroine: 'Keerthy Suresh',
      director: 'Parasuram',
      music: 'S. Thaman',
      villain: 'Samuthirakani',
      banner: 'Mythri Movie Makers',
      genre: 'Action comedy',
      roles: ['Mahesh', 'Kalavathi', 'Rajendranath'],   

      stats: { imdb: 5.8, songs: 5, runtime: 162 },   

      spoiler: [
        'A moneylender in America goes to India to recover a loan from a powerful businessman.',
      ],
      dialogues: [],

      clues: {   
        job: '',
        location: '',
        song: 'Kalaavathi',
        scene: '',
      },
    },
    {
      id: 'sita-ramam',
      title: 'Sita Ramam',
      aka: [],
      year: 2022,
      level: 'easy',

      hero: 'Dulquer Salmaan',
      heroine: 'Mrunal Thakur',
      director: 'Hanu Raghavapudi',
      music: 'Vishal Chandrashekhar',
      villain: '',
      banner: 'Vyjayanthi Movies',
      genre: 'Period romance',
      roles: [],   // the character names give the title away, so this movie uses the STARRING round only

      stats: { imdb: 8.5, songs: 6, runtime: 163 },

      spoiler: [
      ],
      dialogues: [],

      clues: {   
        job: '',
        location: '',
        song: 'Inthandham',
        scene: '',
      },
    },
    {
      id: 'adipurush',
      title: 'Adipurush',
      aka: [],
      year: 2023,
      level: 'easy',

      hero: 'Prabhas',
      heroine: 'Kriti Sanon',
      director: 'Om Raut',
      music: 'Ajay–Atul',   
      villain: 'Saif Ali Khan',
      banner: 'T-Series',
      genre: 'Mythological action',
      roles: [],   

      stats: { imdb: 3.8, songs: 5, runtime: 179 },  

      spoiler: [
        'An exiled prince crosses the sea with an army to rescue his wife from a ten-headed king.',
      ],
      dialogues: [],

      clues: {
        job: '',
        location: '',
        song: 'Jai Shri Ram',
        scene: 'An army builds a bridge of stones across the sea',
      },
    },
    {
      id: 'agent',
      title: 'Agent',
      aka: [],
      year: 2023,
      level: 'hard',

      hero: 'Akhil Akkineni',
      heroine: 'Sakshi Vaidya',   
      director: 'Surender Reddy',
      music: 'Hiphop Tamizha',
      villain: '',
      banner: 'AK Entertainments',
      genre: 'Spy action',
      roles: [],

      stats: { imdb: 3.5, songs: 4, runtime: 156 },   

      spoiler: [
      ],
      dialogues: [],

      clues: {   
        job: '',
        location: '',
        song: '',
        scene: '',
      },
    },
   
    {
      id: 'bhagavanth-kesari',
      title: 'Bhagavanth Kesari',
      aka: [],
      year: 2023,
      level: 'easy',

      hero: 'Balakrishna',
      heroine: 'Kajal Aggarwal',
      director: 'Anil Ravipudi',
      music: 'S. Thaman',
      villain: 'Arjun Rampal',
      banner: '',
      genre: 'Action drama',
      roles: [],   // the character names give the title away, so this movie uses the STARRING round only

      stats: { imdb: 5.7, songs: 4, runtime: 164 },   
       
      spoiler: [
      ],
      dialogues: ['Bro... I Don\'t Care'],

      clues: {   
        job: '',
        location: '',
        song: '',
        scene: 'A man trains a scared girl to become fearless',
      },
    },
    {
      id: 'bhola-shankar',
      title: 'Bhola Shankar',
      aka: [],
      year: 2023,
      level: 'medium',

      hero: 'Chiranjeevi',
      heroine: 'Tamannaah',
      director: 'Meher Ramesh',
      music: 'Mahati Swara Sagar',
      villain: '',
      banner: 'AK Entertainments',
      genre: 'Action drama',
      roles: [],

      stats: { imdb: 3.3, songs: 5, runtime: 159 },   

      spoiler: [
      ],
      dialogues: [],

      clues: {   
        job: '',
        location: '',
        song: '',
        scene: '',
      },
    },
    {
      id: 'bro',
      title: 'Bro',
      aka: [],
      year: 2023,
      level: 'medium',

      hero: ['Pawan Kalyan', 'Sai Dharam Tej'],
      heroine: 'Ketika Sharma',
      director: 'Samuthirakani',
      music: 'S. Thaman',
      villain: '',
      banner: 'People Media Factory',
      genre: 'Fantasy comedy drama',
      roles: [],   

      stats: { imdb: 6.1, songs: 4, runtime: 133 },   

      spoiler: [
        'A busy young man who dies in an accident is given 90 more days to live, with Time itself watching over him.',
      ],
      dialogues: [],

      clues: {   
        job: '',
        location: '',
        song: '',
        scene: '',
      },
    },
   
    {
      id: 'hi-nanna',
      title: 'Hi Nanna',
      aka: [],
      year: 2023,
      level: 'medium',

      hero: 'Nani',
      heroine: 'Mrunal Thakur',
      director: 'Shouryuv',
      music: 'Hesham Abdul Wahab',
      villain: '',
      banner: 'Vyra Entertainments',
      genre: 'Family drama',
      roles: [],   

      stats: { imdb: 8.3, songs: 5, runtime: 155 },   

      spoiler: [
        'A photographer\'s daughter keeps asking for her mother\'s story, and a stranger who befriends them turns out to be part of it.',
      ],
      dialogues: [],

      clues: {   
        job: '',
        location: '',
        song: 'Samayama',
        scene: '',
      },
    },
    {
      id: 'jailer',
      title: 'Jailer',
      aka: [],
      year: 2023,
      level: 'easy',

      hero: 'Rajinikanth',
      heroine: 'Ramya Krishnan',
      director: 'Nelson Dilipkumar',
      music: 'Anirudh Ravichander',
      villain: '',
      banner: 'Sun Pictures',
      genre: 'Action comedy',
      roles: [],   

      stats: { imdb: 7.2, songs: 4, runtime: 168 },   

      spoiler: [
        'A retired prison officer with a calm life turns lethal when his son goes missing in a case with a ruthless smuggling ring.',
      ],
      dialogues: [],

      clues: {   
        job: '',
        location: '',
        song: 'Kaavaalaa',
        scene: 'A quiet grandfather turns into a ruthless fighter',
      },
    },
    
    {
      id: 'leo',
      title: 'Leo',
      aka: [],
      year: 2023,
      level: 'medium',

      hero: 'Vijay',
      heroine: 'Trisha',
      director: 'Lokesh Kanagaraj',
      music: 'Anirudh Ravichander',
      villain: 'Sanjay Dutt',
      banner: '',
      genre: 'Action thriller',
      roles: [],   

      stats: { imdb: 7.2, songs: 4, runtime: 164 },   

      spoiler: [
        'A café owner in Himachal is mistaken for a gangster\'s long-lost son, and his violent past may be real.',
      ],
      dialogues: [],

      clues: {   
        job: 'Café owner',
        location: '',
        song: 'Naa Ready',
        scene: 'A café owner fights off armed robbers in his shop',
      },
    },
    {
      id: 'mad',
      title: 'MAD',
      aka: [],
      year: 2023,
      level: 'medium',

      hero: '',
      heroine: '',   
      director: 'Kalyan Shankar',
      music: 'Bheems Ceciroleo',
      villain: '',
      banner: 'Sithara Entertainments',
      genre: 'Comedy',
      roles: [],

      stats: { imdb: 7.3, songs: 4, runtime: 128 },   

      spoiler: [
        'Three engineering students have a crazy four years of college, with love and lots of fights.',
      ],
      dialogues: ['Roju rojuki chithakartha kukka lekka thayaarauthunnaav raa'],

      clues: {   
        job: '',
        location: '',
        song: 'Nuvvu Navvukuntu',
        scene: '',
      },
    },
    
    {
      id: 'salaar-part-1-ceasefire',
      title: 'Salaar: Part 1 – Ceasefire',
      aka: [],
      year: 2023,
      level: 'easy',

      hero: 'Prabhas',
      heroine: 'Shruti Haasan',
      director: 'Prashanth Neel',
      music: 'Ravi Basrur',
      villain: '',
      banner: 'Hombale Films',
      genre: 'Action',
      roles: [],   

      stats: { imdb: 6.7, songs: 4, runtime: 175 },

      spoiler: [
      ],
      dialogues: ['Peddha peddha godalu kattedhi bhayapadi... bayataki evadu pothaadani kaadhu, lopaliki evadu vasthaadani.'],

      clues: {  
        job: '',
        location: 'Khansaar',
        song: 'Sooreede',
        scene: 'Two friends in the violent city of Khansaar',
      },
    },
    {
      id: 'sir',
      title: 'Sir',
      aka: [],
      year: 2023,
      level: 'medium',

      hero: 'Dhanush',
      heroine: 'Samyuktha',
      director: 'Venky Atluri',
      music: 'G. V. Prakash Kumar',
      villain: '',
      banner: 'Sithara Entertainments',
      genre: 'Drama',
      roles: [],   

      stats: { imdb: 7.2, songs: 5, runtime: 139 },   

      spoiler: [
        'A junior lecturer posted to a poor village school fights against the privatisation of education.',
      ],
      dialogues: [],

      clues: {   
        job: '',
        location: '',
        song: '',
        scene: '',
      },
    },
    {
      id: 'varasudu',
      title: 'Varasudu',
      aka: ['Varisu'],
      year: 2023,
      level: 'medium',

      hero: 'Vijay',
      heroine: 'Rashmika Mandanna',
      director: 'Vamshi Paidipally',
      music: 'S. Thaman',
      villain: 'Prakash Raj',
      banner: 'Sri Venkateswara Creations',
      genre: 'Family drama',
      roles: [],   

      stats: { imdb: 5.9, songs: 5, runtime: 163 },  

      spoiler: [
        'A businessman\'s son returns home after years away, taking charge of his father\'s empire while confronting family rivalries and corporate conspiracies.',
      ],
      dialogues: [],

      clues: {   
        job: '',
        location: '',
        song: 'Ranjithame',
        scene: '',
      },
    },
    {
      id: 'veera-simha-reddy',
      title: 'Veera Simha Reddy',
      aka: [],
      year: 2023,
      level: 'medium',

      hero: 'Balakrishna',
      heroine: 'Shruti Haasan',
      director: 'Gopichand Malineni',
      music: 'S. Thaman',
      villain: '',
      banner: 'Mythri Movie Makers',
      genre: 'Action drama',
      roles: [],

      stats: { imdb: 4.8, songs: 5, runtime: 172 },   

      spoiler: [
      ],
      dialogues: [],

      clues: {  
        job: '',
        location: '',
        song: '',
        scene: '',
      },
    },
       {
      id: 'waltair-veerayya',
      title: 'Waltair Veerayya',
      aka: [],
      year: 2023,
      level: 'medium',

      hero: 'Chiranjeevi',
      heroine: 'Shruti Haasan',
      director: 'Bobby Kolli',
      music: 'Devi Sri Prasad',
      villain: 'Prakash Raj',
      banner: 'Mythri Movie Makers',
      genre: 'Action comedy',
      roles: [],   // the character names give the title away, so this movie uses the STARRING round only

      stats: { imdb: 6.2, songs: 5, runtime: 155 },   

      spoiler: [
         'A fisherman from Vizag goes to Malaysia on a mission to catch a drug lord,',
      ],
      dialogues: [],

      clues: {
        job: 'Fisherman',
        location: 'Vizag and Malaysia',
        song: 'Boss Party',
        scene: 'A fisherman goes to Malaysia to catch a drug lord',
      },
    },
    {
      id: 'devara-part-1',
      title: 'Devara: Part 1',
      aka: [],
      year: 2024,
      level: 'easy',

      hero: 'Jr NTR',
      heroine: 'Janhvi Kapoor',
      director: 'Koratala Siva',
      music: 'Anirudh Ravichander',
      villain: 'Saif Ali Khan',
      banner: '',
      genre: 'Action drama',
      roles: [],   // the character names give the title away, so this movie uses the STARRING round only

      stats: { imdb: 6.0, songs: 4, runtime: 176 },   
      spoiler: [
        'A coastal leader stops his men from smuggling, and the sea becomes a place of fear for anyone who tries.',
      ],
      dialogues: [],

      clues: {   
        job: '',
        location: '',
        song: 'Chuttamalle',
        scene: 'A feared man of the coast turns against smuggling at sea',
      },
    },
    {
      id: 'family-star',
      title: 'Family Star',
      aka: [],
      year: 2024,
      level: 'medium',

      hero: 'Vijay Deverakonda',
      heroine: 'Mrunal Thakur',
      director: 'Parasuram',
      music: 'Gopi Sundar',
      villain: '',
      banner: '',
      genre: 'Family drama',
      roles: ['Govardhan', 'Indu'],   

      stats: { imdb: 5.4, songs: 5, runtime: 157 },  

      spoiler: [
        'A middle-class man who carries his whole family\'s responsibilities finds out his tenant is writing a thesis about him.',
        
      ],
      dialogues: [],

      clues: {  
        job: 'Architect',
        location: 'Hyderabad and New York',
        song: 'Kalyani Vaccha Vacchaa',
        scene: '',
      },
    },
    {
      id: 'guntur-kaaram',
      title: 'Guntur Kaaram',
      aka: [],
      year: 2024,
      level: 'easy',

      hero: 'Mahesh Babu',
      heroine: 'Sreeleela',
      director: 'Trivikram Srinivas',
      music: 'S. Thaman',
      villain: '',
      banner: '',
      genre: 'Family action drama',
      roles: ['Ramana', 'Amu'],  

      stats: { imdb: 5.4, songs: 5, runtime: 159 },   

      spoiler: [
        'A man estranged from his mother and her powerful family is forced to confront the past and the family he never knew.',
        'A man whose mother left him as a child is asked to sign papers saying he is not her son.',
      ],
      dialogues: ['Paiki Fair & Lovely... lopala unfair & lonely.'],

      clues: {  
        job: '',
        location: '',
        song: 'Kurchi Madathapetti',
        scene: 'A man refuses to sign away his relationship with his mother',
      },
    },
    {
      id: 'hanu-man',
      title: 'Hanu-Man',
      aka: [],
      year: 2024,
      level: 'easy',

      hero: 'Teja Sajja',
      heroine: 'Amritha Aiyer',
      director: 'Prasanth Varma',
      music: 'Gowra Hari',
      villain: '',
      banner: '',
      genre: 'Superhero fantasy',
      roles: [],   // the character names give the title away, so this movie uses the STARRING round only

      stats: { imdb: 7.7, songs: 5, runtime: 158 },

      spoiler: [
         ],
      dialogues: [],

      clues: {   
        job: '',
        location: '',
        song: 'Avakaya Anjaneya',
        scene: '',
      },
    },
    {
      id: 'kalki-2898-ad',
      title: 'Kalki 2898 AD',
      aka: [],
      year: 2024,
      level: 'easy',

      hero: 'Prabhas',
      heroine: 'Deepika Padukone',
      director: 'Nag Ashwin',
      music: 'Santhosh Narayanan',
      villain: 'Kamal Haasan',
      banner: 'Vyjayanthi Movies',
      genre: 'Sci-fi epic',
      roles: ['Bhairava', 'Sumathi', 'Ashwatthama'],   

      stats: { imdb: 7, songs: 3, runtime: 181 },

      spoiler: [
        'In a distant future, the last living city is ruled by a tyrant, while a mysterious pregnant woman becomes the key to everyone\'s fate.',
        'A bounty hunter in the last city on Earth is hired to capture a pregnant woman, guarded by an immortal warrior.',
      ],
      dialogues: ['Naa records check chesuko... nenu ippati varaku okka fight koodaa odipoledhu. Idi koodaa odiponu!'],

      clues: {   
        job: 'Bounty hunter',
        location: 'Kasi',
        song: 'Bhairava Anthem',
        scene: 'A futuristic city and a mysterious pregnant woman',
      },
    },
    {
      id: 'lucky-baskhar',
      title: 'Lucky Baskhar',
      aka: [],
      year: 2024,
      level: 'medium',

      hero: 'Dulquer Salmaan',
      heroine: 'Meenakshi Chaudhary',
      director: 'Venky Atluri',
      music: 'G. V. Prakash Kumar',
      villain: '',
      banner: '',
      genre: 'Crime drama',
      roles: [],   // the character names give the title away, so this movie uses the STARRING round only

      stats: { imdb: 8.1, songs: 3, runtime: 150 },  

      spoiler: [
        'A struggling bank cashier in 1990s Bombay gets involved in a financial scam and becomes rich.',
        'A middle-class bank employee learns to play the stock market illegally.',
      ],
      dialogues: [],

      clues: {   
        job: 'Bank cashier',
        location: 'Bombay',
        song: 'Srimathi Garu',
        scene: '',
      },
    },
    {
      id: 'mr-bachchan',
      title: 'Mr. Bachchan',
      aka: [],
      year: 2024,
      level: 'hard',

      hero: 'Ravi Teja',
      heroine: 'Bhagyashri Borse',
      director: 'Harish Shankar',
      music: 'Mickey J. Meyer',
      villain: '',
      banner: '',
      genre: 'Action drama',
      roles: [],

      stats: { imdb: 3.4, songs: 4, runtime: 160 },   

      spoiler: [
        'An honest income tax officer raids the home of a powerful politician.',
       
      ],
      dialogues: [],

      clues: {   
        job: 'Income tax officer',
        location: '',
        song: '',
        scene: '',
      },
    },
    {
      id: 'pushpa-2-the-rule',
      title: 'Pushpa 2: The Rule',
      aka: [],
      year: 2024,
      level: 'easy',

      hero: 'Allu Arjun',
      heroine: 'Rashmika Mandanna',
      director: 'Sukumar',
      music: 'Devi Sri Prasad',
      villain: 'Fahadh Faasil',
      banner: 'Mythri Movie Makers',
      genre: 'Action drama',
      roles: ['Pushpa Raj', 'Srivalli', 'Bhanwar Singh Shekhawat'],  

      stats: { imdb: 6, songs: 5, runtime: 200 },

      spoiler: [
        'The labourer who became a smuggling kingpin now faces a rival police officer and a growing empire that refuses to bow.',
        'The red sandalwood smuggler expands his empire abroad while a revenge-driven police officer hunts him.',
      ],
      dialogues: [],

      clues: {   
        job: 'Smuggling kingpin',
        location: 'Tirupati',
        song: 'Peelings',
        scene: 'A smuggler who now runs the syndicate wants one photo with the chief minister',
      },
    },
    {
      id: 'saripodhaa-sanivaaram',
      title: 'Saripodhaa Sanivaaram',
      aka: [],
      year: 2024,
      level: 'medium',

      hero: 'Nani',
      heroine: 'Priyanka Arul Mohan',
      director: 'Vivek Athreya',
      music: 'Jakes Bejoy',
      villain: 'S. J. Suryah',
      banner: '',
      genre: 'Action thriller',
      roles: ['Surya', 'Charulatha', 'Daya'],  

      stats: { imdb: 7.1, songs: 6, runtime: 166 },   

      spoiler: [
        'A man who lets out his anger only on Saturdays takes on a cruel police officer.',
        'An insurance agent saves all his rage for one day a week.',
      ],
      dialogues: [],

      clues: {   
        job: 'Insurance agent',
        location: '',
        song: '',
        scene: '',
      },
    },
    {
      id: 'tillu-square',
      title: 'Tillu Square',
      aka: [],
      year: 2024,
      level: 'medium',

      hero: 'Siddhu Jonnalagadda',
      heroine: 'Anupama Parameswaran',
      director: 'Mallik Ram',
      music: 'Ram Miriyala',
      villain: '',
      banner: '',
      genre: 'Crime comedy',
      roles: [],   // the character names give the title away, so this movie uses the STARRING round only

      stats: { imdb: 6.6, songs: 3, runtime: 124 }, 

      spoiler: [
        'A local DJ falls for another mysterious woman and is dragged into a new crime.',
        
      ],
      dialogues: [],

      clues: {   
        job: 'DJ',
        location: '',
        song: 'Ticket Eh Konakunda',
        scene: '',
      },
    },
    {
      id: 'vettaiyan',
      title: 'Vettaiyan',
      aka: [],
      year: 2024,
      level: 'medium',

      hero: 'Rajinikanth',
      heroine: 'Manju Warrier',
      director: 'T. J. Gnanavel',
      music: 'Anirudh Ravichander',
      villain: 'Rana Daggubati',
      banner: '',
      genre: 'Action drama',
      roles: [],

      stats: { imdb: 6.8, songs: 3, runtime: 163 },   

      spoiler: [
        'An encounter specialist kills the wrong man and must find the real killer.',
      ],
      dialogues: [],

      clues: {   
        job: 'Police officer',
        location: 'Kanyakumari',
        song: '',
        scene: '',
      },
    },
    {
      id: 'akhanda-2-thaandavam',
      title: 'Akhanda 2: Thaandavam',
      aka: [],
      year: 2025,   
      level: 'easy',

      hero: 'Balakrishna',
      heroine: 'Samyuktha',   
      director: 'Boyapati Srinu',
      music: 'S. Thaman',
      villain: '',   
      banner: '',  
      genre: 'Action drama',
      roles: [],

      stats: { imdb: 0, songs: 0, runtime: 0 },   

      spoiler: [   
      ],
      dialogues: [],

      clues: {   
        job: '',
        location: '',
        song: '',
        scene: '',
      },
    },
        {
      id: 'coolie',
      title: 'Coolie',
      aka: [],
      year: 2025,
      level: 'easy',

      hero: 'Rajinikanth',
      heroine: 'Shruti Haasan',   
      director: 'Lokesh Kanagaraj',
      music: 'Anirudh Ravichander',
      villain: 'Nagarjuna',   
      banner: 'Sun Pictures',
      genre: 'Action thriller',
      roles: [],

      stats: { imdb: 6, songs: 4, runtime: 170 },   

      spoiler: [  'Former union leader Deva infiltrates a ruthless port smuggling syndicate to avenge his murdered friend and protect his estranged daughter.' 
      ],
      dialogues: ['Rajasekar chanipoyetappudu Dayal chevilo edho cheppaadu... em cheppaado evarikainaa thelusaa?'],

      clues: {   
        job: '',
        location: '',
        song: '',
        scene: '',
      },
    },
    {
      id: 'daaku-maharaj',
      title: 'Daaku Maharaj',
      aka: ['Daaku Maharaaj'],
      year: 2025,
      level: 'medium',

      hero: 'Balakrishna',
      heroine: 'Pragya Jaiswal',  
      director: 'Bobby Kolli',
      music: 'S. Thaman',
      villain: 'Bobby Deol', 
      banner: '',
      genre: 'Action drama',
      roles: [],

      stats: { imdb: 5.9, songs: 5, runtime: 150 },   

      spoiler: [   
      ],
      dialogues: [],

      clues: {   
        job: '',
        location: '',
        song: '',
        scene: '',
      },
    },
    {
      id: 'game-changer',
      title: 'Game Changer',
      aka: [],
      year: 2025,
      level: 'medium',

      hero: 'Ram Charan',
      heroine: 'Kiara Advani',
      director: 'Shankar',
      music: 'S. Thaman',
      villain: 'S. J. Suryah',
      banner: '',
      genre: 'Political action drama',
      roles: ['Ram Nandan', 'Deepika', 'Mopidevi'],   

      stats: { imdb: 5, songs: 5, runtime: 165 },   

      spoiler: [   
        'An honest IAS officer takes on a corrupt minister, and a story from his father\'s past is revealed.',
      ],
      dialogues: [],

      clues: {  
        job: 'IAS officer',
        location: 'Visakhapatnam',
        song: 'Jaragandi',
        scene: '',
      },
    },
    {
      id: 'hari-hara-veera-mallu',
      title: 'Hari Hara Veera Mallu',
      aka: [],
      year: 2025,
      level: 'medium',

      hero: 'Pawan Kalyan',
      heroine: 'Nidhhi Agerwal',
      director: 'Jyothi Krishna',  
      music: 'M. M. Keeravani',
      villain: 'Bobby Deol',
      banner: '',
      genre: 'Period action',
      roles: [],

      stats: { imdb: 5, songs: 3, runtime: 150 },  

      spoiler: [   
      ],
      dialogues: [],

      clues: {   
        job: '',
        location: '',
        song: '',
        scene: '',
      },
    },
    {
      id: 'kannappa',
      title: 'Kannappa',
      aka: [],
      year: 2025,
      level: 'hard',

      hero: 'Manchu Vishnu',
      heroine: 'Preity Mukhundhan',
      director: 'Mukesh Kumar Singh',
      music: 'Stephen Devassy',
      villain: '',
      banner: '',
      genre: 'Mythological drama',
      roles: ['Thinnadu', 'Nemali'],   

      stats: { imdb: 4.6, songs: 6, runtime: 183 },  

      spoiler: [   
        'A tribal hunter who does not believe in God becomes one of Lord Shiva\'s greatest devotees.',
      ],
      dialogues: [],

      clues: {   
        job: '',
        location: '',
        song: '',
        scene: '',
      },
    },
    {
      id: 'kingdom',
      title: 'Kingdom',
      aka: [],
      year: 2025,
      level: 'medium',

      hero: 'Vijay Deverakonda',
      heroine: 'Bhagyashri Borse', 
      director: 'Gowtam Tinnanuri',
      music: 'Anirudh Ravichander',
      villain: '',
      banner: '',
      genre: 'Spy action',
      roles: [],

      stats: { imdb: 5.5, songs: 3, runtime: 160 },   

      spoiler: [  
        'A police constable is sent undercover to Sri Lanka, where he finds his long-lost brother leading a gang.',
      
      ],
      dialogues: [],

      clues: {   
        job: 'Police constable',
        location: 'Sri Lanka',
        song: '',
        scene: '',
      },
    },
    {
      id: 'kuberaa',
      title: 'Kuberaa',
      aka: [],
      year: 2025,
      level: 'medium',

      hero: ['Dhanush', 'Nagarjuna'],
      heroine: 'Rashmika Mandanna',
      director: 'Sekhar Kammula',
      music: 'Devi Sri Prasad',
      villain: 'Jim Sarbh',
      banner: '',
      genre: 'Crime drama',
      roles: ['Deva', 'Sameera', 'Deepak'],   

      stats: { imdb: 6.4, songs: 4, runtime: 182 },  

      spoiler: [   
      ],
      dialogues: [],

      clues: {   
        job: 'Beggar',
        location: '',
        song: '',
        scene: '',
      },
    },
    {
      id: 'mirai',
      title: 'Mirai',
      aka: [],
      year: 2025,
      level: 'medium',

      hero: 'Teja Sajja',
      heroine: 'Ritika Nayak',   
      director: 'Karthik Gattamneni',
      music: 'Gowra Hari',
      villain: 'Manchu Manoj',
      banner: '',
      genre: 'Superhero fantasy',
      roles: [],

      stats: { imdb: 6.8, songs: 6, runtime: 169 },  

      spoiler: [  
        'A young man must protect nine ancient scriptures that could make an evil man immortal.',
        
      ],
      dialogues: [],

      clues: {   
        job: '',
        location: '',
        song: '',
        scene: '',
      },
    },
    {
      id: 'sankranthiki-vasthunnam',
      title: 'Sankranthiki Vasthunnam',
      aka: ['Sankranthiki Vasthunam'],
      year: 2025,
      level: 'medium',

      hero: 'Venkatesh',
      heroine: ['Aishwarya Rajesh', 'Meenakshi Chaudhary'],
      director: 'Anil Ravipudi',
      music: 'Bheems Ceciroleo',
      villain: '',
      banner: 'Sri Venkateswara Creations',
      genre: 'Family action comedy',
      roles: ['YD Raju', 'Bhagyam', 'Meenakshi'],   

      stats: { imdb: 6.1, songs: 5, runtime: 144 },   

      spoiler: [   
        'A former cop is called back to rescue a kidnapped businessman, with his wife and ex-girlfriend both coming along.',
       
      ],
      dialogues: [],

      clues: {  
        job: 'Former police officer',
        location: '',
        song: 'Godari Gattu',
        scene: '',
      },
    },
    {
      id: 'thandel',
      title: 'Thandel',
      aka: [],
      year: 2025,
      level: 'medium',

      hero: 'Naga Chaitanya',
      heroine: 'Sai Pallavi',
      director: 'Chandoo Mondeti',
      music: 'Devi Sri Prasad',
      villain: '',
      banner: '',
      genre: 'Romantic drama',
      roles: [],   

      stats: { imdb: 6.4, songs: 6, runtime: 151 },   

      spoiler: [   
      ],
      dialogues: [],

      clues: {   
        job: '',
        location: '',
        song: '',
        scene: '',
      },
    },
    {
      id: 'they-call-him-og',
      title: 'They Call Him OG',
      aka: [],
      year: 2025,
      level: 'medium',

      hero: 'Pawan Kalyan',
      heroine: 'Priyanka Arul Mohan',
      director: 'Sujeeth',
      music: 'S. Thaman',
      villain: 'Emraan Hashmi',
      banner: '',
      genre: 'Gangster action',
      roles: ['Ojas Gambheera', 'Kanmani'],   

      stats: { imdb: 6, songs: 6, runtime: 150 },   

      spoiler: [   
        'A feared gangster who vanished from Bombay returns after years to settle an old war.',
      ],
      dialogues: ['Bombay vasthunnaa... thalalu jaagrattha'],

      clues: {  
        job: 'Gangster',
        location: 'Bombay',
        song: 'Hungry Cheetah',
        scene: '',
      },
    },
    
    {
      id: 'mana-shankara-varaprasad-garu',
      title: 'Mana Shankara Varaprasad Garu',
      aka: [],
      year: 2026,  
      level: 'medium',

      hero: 'Chiranjeevi',
      heroine: 'Nayanthara',   
      director: 'Anil Ravipudi',
      music: 'Bheems Ceciroleo',   
      villain: '',
      banner: '',   
      genre: 'Family comedy',  
      roles: [],

      stats: { imdb: 5.7, songs: 4, runtime: 164 },   

      spoiler: [ 'A national security officer goes undercover to protect and reconnect with his wife and children from dangerous criminal threats.'
      ],
      dialogues: [],

      clues: {   
        job: '',
        location: '',
        song: '',
        scene: '',
      },
    },
    {
      id: 'the-rajasaab',
      title: 'The RajaSaab',
      aka: [],
      year: 2026,   
      level: 'medium',

      hero: 'Prabhas',
      heroine: ['Malavika Mohanan', 'Nidhhi Agerwal', 'Riddhi Kumar'],   
      director: 'Maruthi',
      music: 'S. Thaman',
      villain: 'Sanjay Dutt',  
      banner: '',
      genre: 'Horror comedy',
      roles: [],

      stats: { imdb: 3.1, songs: 6, runtime: 180 },   

      spoiler: [ 'Searching for his missing grandfather, a young man enters a haunted mansion, uncovering dark family secrets and battling sinister supernatural powers.'
      ],
      dialogues: [],

      clues: {   
        job: '',
        location: '',
        song: '',
        scene: '',
      },
    },

    // ── Year not known yet ────────────────────────────────

    {
      id: 'fauzi',
      title: 'Fauzi',
      aka: [],
      year: 0,   
      level: 'easy',

      hero: 'Prabhas',
      heroine: 'Imanvi',  
      director: 'Hanu Raghavapudi',
      music: 'Vishal Chandrashekhar',   
      villain: '',
      banner: 'Mythri Movie Makers',
      genre: 'Period war drama',  
      roles: [],

      stats: { imdb: 0, songs: 0, runtime: 0 },   

      spoiler: [   
      ],
      dialogues: [],

      clues: {   
        job: '',
        location: '',
        song: '',
        scene: '',
      },
    },
    {
      id: 'paradise',
      title: 'Paradise',
      aka: [],
      year: 2026,   
      level: 'medium',

      hero: 'Nani',
      heroine: 'Kayadu lohar',   
      director: 'Srikanth Odela',
      music: 'Anirudh Ravichander',
      villain: '',
      banner: '',
      genre: 'Action drama',   
      roles: [],

      stats: { imdb: 5.5, songs: 4, runtime: 173 },   

      spoiler: [  'In 1980s Secunderabad, ex convict leads his tribe in a rebellion against ruthless feudal landlord, fighting for citizenship rights.'
      ],
      dialogues: [],

      clues: {   
        job: '',
        location: '',
        song: 'Aaya Sher',
        scene: '',
      },
    },
    {
      id: 'peddi',
      title: 'Peddi',
      aka: [],
      year: 2026,   
      level: 'medium',

      hero: 'Ram Charan',
      heroine: 'Janhvi Kapoor',
      director: 'Buchi Babu Sana',
      music: 'A. R. Rahman',
      villain: '',
      banner: '',
      genre: 'Sports drama',   
      roles: [],

      stats: { imdb: 5.1, songs: 4, runtime: 182 },   

      spoiler: [  'In 1994 Vizianagaram, tribal villager overcomes a severe wrestling injury to become a para athlete, winning national acclaim and official recognition for his community.'],
      dialogues: ['Aattey naa pogaru...'],

      clues: {   
        job: '',
        location: '',
        song: 'Chikiri Chikiri',
        scene: '',
      },
    },
    {
      id: 'spirit',
      title: 'Spirit',
      aka: [],
      year: 0,   
      level: 'easy',

      hero: 'Prabhas',
      heroine: 'Triptii Dimri',   
      director: 'Sandeep Reddy Vanga',
      music: 'Harshavardhan Rameshwar',   
      villain: '',
      banner: '',
      genre: 'Action drama',  
      roles: [],

      stats: { imdb: 0, songs: 0, runtime: 0 },  

      spoiler: [   
      ],
      dialogues: [],

      clues: {   
        job: '',
        location: '',
        song: '',
        scene: '',
      },
    },
    {
      id: 'ustaad-bhagat-singh',
      title: 'Ustaad Bhagat Singh',
      aka: [],
      year: 2026,  
      level: 'medium',

      hero: 'Pawan Kalyan',
      heroine: 'Sreeleela',
      director: 'Harish Shankar',
      music: 'Devi Sri Prasad',
      villain: '',
      banner: '',
      genre: 'Action drama',   
      roles: [],

      stats: { imdb: 4.1, songs: 3, runtime: 154 },  

      spoiler: [   
      ],
      dialogues: [],

      clues: {   
        job: '',
        location: '',
        song: 'Dekhlenge Saala',
        scene: '',
      },
    },
    {
      id: 'varanasi',
      title: 'Varanasi',
      aka: [],
      year: 0,   
      level: 'easy',

      hero: 'Mahesh Babu',
      heroine: 'Priyanka Chopra',
      director: 'S. S. Rajamouli',
      music: 'M. M. Keeravani',
      villain: 'Prithviraj Sukumaran',
      banner: '',
      genre: '',   
      roles: [],

      stats: { imdb: 0, songs: 0, runtime: 0 },   

      spoiler: [  
      ],
      dialogues: [],

      clues: {   
        job: '',
        location: '',
        song: '',
        scene: '',
      },
    },

  ];
  if (typeof module !== 'undefined' && module.exports) module.exports = MOVIES; else root.CinefiedMovies = MOVIES;
})(typeof self !== 'undefined' ? self : this);
