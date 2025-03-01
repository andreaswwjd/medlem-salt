const crypto = require('crypto');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('members').del()
    .then(function () {
      // Inserts seed entries
      return knex('members').insert([
        {
          "id": "5db98425cb0d7a43fc723caf",
          "pnr": 201256144862,
          "firstname": "Sonja",
          "lastname": "Valentine",
          "kontakt_via_målsman": false,
          "email": "sonjavalentine@telpod.com",
          "tel": "(908) 421-2028",
          "address": "700 Lincoln Place, Coleville, 6265",
          "note": "Proident pariatur qui aliquip qui laborum occaecat esse. Commodo eiusmod in occaecat pariatur ipsum sint Lorem ea ea aliquip amet. Et exercitation adipisicing magna aliqua occaecat do. Lorem officia eu anim in tempor.\r\n",
          "group_id": "uuid1"
        },
        {
          "id": "5db98425e9bc096f9912eb20",
          "pnr": 199879641357,
          "firstname": "Beulah",
          "lastname": "Conway",
          "kontakt_via_målsman": true,
          "email": "beulahconway@telpod.com",
          "tel": "(965) 440-3251",
          "address": "331 Withers Street, Cade, 182",
          "note": "Pariatur irure eu consequat enim eiusmod culpa. Dolor eu enim nulla ex ut magna ex voluptate minim anim labore ea dolore. Adipisicing nostrud excepteur non exercitation cupidatat. Enim adipisicing adipisicing velit eu sit ea fugiat do nostrud consequat in mollit amet consectetur. Anim eu eiusmod id voluptate officia pariatur consequat veniam eu non id. Ea esse deserunt velit cupidatat proident non. Minim Lorem consequat velit cillum exercitation minim mollit ea nostrud dolore eu.\r\n",
          "group_id": "uuid1"
        },
        {
          "id": "5db9842580bb4a6dbe8ffdb2",
          "pnr": 199744110847,
          "firstname": "Browning",
          "lastname": "Middleton",
          "kontakt_via_målsman": true,
          "email": "browningmiddleton@telpod.com",
          "tel": "(967) 531-3834",
          "address": "644 Kingston Avenue, Naomi, 709",
          "note": "Adipisicing do commodo sint cillum laboris ex veniam nisi nostrud. Sint non laborum proident qui cupidatat elit. Elit qui cupidatat consequat in consequat qui. Enim aute sit pariatur occaecat. Pariatur officia minim eiusmod id cupidatat. Irure laboris aliqua voluptate veniam elit dolor do. Cupidatat irure adipisicing laboris voluptate non in deserunt ipsum ea culpa in.\r\n",
          "group_id": "uuid1"
        },
        {
          "id": "5db98425fb71ded09363cfb0",
          "pnr": 199813759044,
          "firstname": "Santana",
          "lastname": "Russell",
          "kontakt_via_målsman": false,
          "email": "santanarussell@telpod.com",
          "tel": "(957) 405-2000",
          "address": "527 Emmons Avenue, Onton, 8477",
          "note": "Veniam pariatur mollit ex minim irure laboris sint fugiat. Exercitation est ullamco veniam sunt proident do pariatur duis mollit pariatur. Excepteur reprehenderit et commodo cillum anim sunt excepteur nostrud qui incididunt anim deserunt. Aute nulla ex proident aliqua et. Incididunt aliqua ex irure enim exercitation adipisicing do occaecat.\r\n",
          "group_id": "uuid1"
        },
        {
          "id": "5db984252c399276c810f01f",
          "pnr": 200354868460,
          "firstname": "Marion",
          "lastname": "Anthony",
          "kontakt_via_målsman": false,
          "email": "marionanthony@telpod.com",
          "tel": "(890) 535-2999",
          "address": "437 Meserole Avenue, Washington, 5135",
          "note": "Et ad eu consectetur reprehenderit minim velit. Officia ipsum cupidatat esse officia non voluptate. Sit velit eiusmod qui anim adipisicing laboris aliquip. Occaecat nisi veniam ad proident duis aliquip voluptate veniam irure. Nulla ea minim dolor adipisicing esse adipisicing pariatur. Duis deserunt aliquip occaecat ea in esse ad incididunt sint nostrud nulla ut elit.\r\n",
          "group_id": "uuid1"
        },
        {
          "id": "5db9842594cb83e8e044a7cd",
          "pnr": 200748040561,
          "firstname": "Christie",
          "lastname": "Ewing",
          "kontakt_via_målsman": false,
          "email": "christieewing@telpod.com",
          "tel": "(986) 529-2370",
          "address": "933 Cyrus Avenue, Edmund, 7178",
          "note": "Sunt laboris laboris occaecat adipisicing labore adipisicing elit. Voluptate eu laboris adipisicing aute magna enim ex. Deserunt ea aute sint anim. Duis qui elit cupidatat nisi mollit non.\r\n",
          "group_id": "uuid1"
        },
        {
          "id": "5db98425e7714a45252c3531",
          "pnr": 200444698333,
          "firstname": "Hendricks",
          "lastname": "Hyde",
          "kontakt_via_målsman": false,
          "email": "hendrickshyde@telpod.com",
          "tel": "(887) 434-2048",
          "address": "832 Kossuth Place, Indio, 7891",
          "note": "Nisi aliqua nulla elit anim labore officia ea minim. Non sit ad aliquip pariatur amet tempor incididunt excepteur velit. Proident esse consectetur quis consequat consequat. Dolor ipsum sint anim elit. Minim amet et non labore est officia reprehenderit velit.\r\n",
          "group_id": "uuid1"
        },
        {
          "id": "5db984258e3f3d989bd49931",
          "pnr": 198933453322,
          "firstname": "Chavez",
          "lastname": "Shelton",
          "kontakt_via_målsman": true,
          "email": "chavezshelton@telpod.com",
          "tel": "(952) 513-3481",
          "address": "831 Tapscott Avenue, Drytown, 3652",
          "note": "Nisi qui sit sit adipisicing proident proident nulla esse adipisicing enim ut ut laborum eu. Cupidatat aute dolor ad cupidatat nisi occaecat consectetur incididunt est. Fugiat nulla exercitation aute deserunt. Tempor ex laboris ullamco aute incididunt. Deserunt enim esse aliquip Lorem nostrud culpa voluptate aliquip duis pariatur cupidatat do non esse.\r\n",
          "group_id": "uuid1"
        },
        {
          "id": "5db984251c2749a7a25a8b47",
          "pnr": 201101711110,
          "firstname": "Brennan",
          "lastname": "Simpson",
          "kontakt_via_målsman": false,
          "email": "brennansimpson@telpod.com",
          "tel": "(804) 481-3860",
          "address": "467 Lewis Place, Fingerville, 7864",
          "note": "Tempor nostrud reprehenderit consectetur fugiat nulla tempor. Aliqua laborum aliquip tempor velit ut tempor cillum laboris mollit. Proident sit enim laborum aliqua. Est officia eu elit do dolore. Nulla nisi nostrud magna velit ea consectetur occaecat id exercitation.\r\n",
          "group_id": "uuid1"
        },
        {
          "id": "5db984253c3fec4392eec702",
          "pnr": 201065137335,
          "firstname": "Shauna",
          "lastname": "Barnett",
          "kontakt_via_målsman": false,
          "email": "shaunabarnett@telpod.com",
          "tel": "(888) 408-3975",
          "address": "317 Tabor Court, Monument, 6814",
          "note": "Occaecat aliquip irure id et ut cillum ad adipisicing voluptate. Excepteur laborum dolore irure Lorem minim ut cupidatat ullamco consectetur quis et eu. Nisi consequat sit consectetur aute pariatur irure proident nisi. Quis commodo et laboris proident commodo esse incididunt. Veniam incididunt consequat duis aute do mollit qui. Velit excepteur aliquip consequat deserunt tempor velit voluptate amet et voluptate ullamco deserunt aliquip.\r\n",
          "group_id": "uuid1"
        },
        {
          "id": "5db984256fca0b65716a2c87",
          "pnr": 200719324179,
          "firstname": "Holmes",
          "lastname": "Harmon",
          "kontakt_via_målsman": false,
          "email": "holmesharmon@telpod.com",
          "tel": "(818) 595-3509",
          "address": "449 Lamont Court, Riceville, 6242",
          "note": "Ea consectetur qui consequat voluptate ad laboris non nisi qui anim labore. Fugiat quis id magna aliqua. Esse aute ut est voluptate velit enim.\r\n",
          "group_id": "uuid1"
        },
        {
          "id": "5db98425124f5231f3f44290",
          "pnr": 199619619239,
          "firstname": "Schwartz",
          "lastname": "Castro",
          "kontakt_via_målsman": false,
          "email": "schwartzcastro@telpod.com",
          "tel": "(938) 407-3899",
          "address": "890 Nassau Street, Sutton, 2198",
          "note": "Elit veniam ad amet proident cillum amet. Et ut aliqua deserunt enim do. Ad magna exercitation aute quis ex.\r\n",
          "group_id": "uuid1"
        },
        {
          "id": "5db98425ff1c89c7e18bf459",
          "pnr": 200454544044,
          "firstname": "Rivera",
          "lastname": "Bullock",
          "kontakt_via_målsman": false,
          "email": "riverabullock@telpod.com",
          "tel": "(828) 480-3564",
          "address": "249 Sutton Street, Healy, 1120",
          "note": "Labore et cillum occaecat cupidatat in aliqua eiusmod aliquip sunt. Nulla nostrud commodo nulla ullamco dolor quis. In commodo excepteur cillum cupidatat eiusmod ullamco exercitation excepteur cillum fugiat ut ex mollit aliqua. Quis ullamco cupidatat aliquip qui anim et voluptate culpa ad ut pariatur. Minim cupidatat adipisicing velit consectetur veniam eiusmod in nisi. Mollit amet non est eiusmod deserunt minim Lorem elit eu irure consequat esse dolor.\r\n",
          "group_id": "uuid1"
        },
        {
          "id": "5db98425a51f1d78d8a0df47",
          "pnr": 199821278845,
          "firstname": "Gross",
          "lastname": "Oneill",
          "kontakt_via_målsman": false,
          "email": "grossoneill@telpod.com",
          "tel": "(969) 531-2268",
          "address": "599 Bryant Street, Bourg, 6442",
          "note": "Est et laborum proident veniam excepteur culpa laboris pariatur amet eiusmod excepteur proident. Adipisicing irure qui ea do ullamco non id cillum cupidatat eiusmod. Anim non voluptate irure voluptate cupidatat enim. Mollit cillum qui dolore Lorem in cillum id consectetur enim enim.\r\n",
          "group_id": "uuid1"
        },
        {
          "id": "5db98425c08880b50c42df6a",
          "pnr": 200158273543,
          "firstname": "Marian",
          "lastname": "Hoffman",
          "kontakt_via_målsman": false,
          "email": "marianhoffman@telpod.com",
          "tel": "(990) 573-3512",
          "address": "505 Beadel Street, Carrizo, 7769",
          "note": "Sit elit sunt cupidatat laborum voluptate culpa consequat laboris quis pariatur est esse. Nostrud non labore officia irure laborum occaecat exercitation est laborum. In quis excepteur sit pariatur do proident quis reprehenderit aliquip nulla culpa laborum. Id id eiusmod est enim aliqua dolore dolore. Duis ipsum reprehenderit tempor eiusmod ea. Exercitation ipsum ipsum sunt exercitation esse. Sit reprehenderit aliquip ullamco consectetur aute ipsum excepteur excepteur amet Lorem ut.\r\n",
          "group_id": "uuid1"
        },
        {
          "id": "5db9842562123631e9181ae2",
          "pnr": 199619040932,
          "firstname": "Le",
          "lastname": "Flynn",
          "kontakt_via_målsman": false,
          "email": "leflynn@telpod.com",
          "tel": "(972) 493-2235",
          "address": "663 Loring Avenue, Linganore, 1740",
          "note": "Consectetur dolor consequat minim est minim veniam labore. Amet ipsum aliquip nulla cupidatat excepteur esse fugiat tempor veniam dolore ut. Veniam in quis sunt consequat. Dolore mollit deserunt nostrud eiusmod velit mollit excepteur reprehenderit amet incididunt. Veniam in deserunt reprehenderit commodo ea laboris cillum aliquip pariatur Lorem commodo. Irure officia id adipisicing cupidatat proident anim sit minim do aute in non.\r\n",
          "group_id": "uuid1"
        },
        {
          "id": "uuid1",
          "pnr": 198901240000,
          "firstname": "Andreas",
          "lastname": "Lundström",
          "kontakt_via_målsman": false,
          "email": "andreas.wwjd@gmail.com",
          "tel": "0708236172",
          "address": "562 Mersereau Court, Oceola, 4415",
          "note": "Labore ullamco eu dolor eiusmod pariatur nostrud eu reprehenderit reprehenderit anim incididunt laborum anim laborum. Ullamco ex proident enim ullamco occaecat amet commodo eu ipsum consectetur occaecat. Ut ullamco fugiat deserunt ad sunt nostrud amet minim sit do duis. Est enim sunt et dolor consectetur eu duis nulla enim duis.\r\n",
          "group_id": "uuid1"
        },
        {
          "id": "5db98b23f35f59cb58106892",
          "pnr": 200336016734,
          "firstname": "Sophie",
          "lastname": "Walsh",
          "kontakt_via_målsman": false,
          "email": "sophiewalsh@telpod.com",
          "tel": "(995) 466-3846",
          "address": "575 Menahan Street, Draper, 4094",
          "note": "Consectetur pariatur labore ut dolor ut consectetur duis anim. Cillum fugiat sunt id ut cupidatat voluptate deserunt. Velit nulla adipisicing ea reprehenderit elit. Adipisicing id ut magna ad sint commodo sunt mollit amet dolor incididunt nulla. Ad deserunt laboris fugiat magna culpa ipsum sint.\r\n",
          "group_id": "uuid2"
        },
        {
          "id": "5db98b236a27bcbc55002241",
          "pnr": 200220717213,
          "firstname": "Henry",
          "lastname": "Albert",
          "kontakt_via_målsman": false,
          "email": "henryalbert@telpod.com",
          "tel": "(962) 440-2196",
          "address": "343 Orange Street, Kapowsin, 3422",
          "note": "Lorem aliqua elit incididunt ut ad nostrud nulla in tempor qui amet quis cillum aute. Et ut ea est irure irure nulla exercitation veniam amet pariatur sit ex aliquip anim. Cillum deserunt laborum officia culpa exercitation Lorem laboris reprehenderit. Officia laborum sunt elit dolor magna minim eiusmod mollit elit. Voluptate reprehenderit nostrud consectetur ut ut officia quis reprehenderit cupidatat minim enim voluptate ut laboris.\r\n",
          "group_id": "uuid2"
        },
        {
          "id": "5db98b2368ee84b0b88d3748",
          "pnr": 199740773393,
          "firstname": "Jacqueline",
          "lastname": "Blackburn",
          "kontakt_via_målsman": false,
          "email": "jacquelineblackburn@telpod.com",
          "tel": "(991) 423-3890",
          "address": "380 Pacific Street, Delshire, 5752",
          "note": "Est adipisicing aute ad sunt id. Aliquip amet reprehenderit enim est Lorem elit ullamco aliquip incididunt consequat occaecat nostrud deserunt. Officia irure anim et pariatur sit occaecat ipsum dolore sint deserunt aliquip veniam.\r\n",
          "group_id": "uuid2"
        },
        {
          "id": "5db98b23d19e0ec1d72075d9",
          "pnr": 201258866854,
          "firstname": "Alyson",
          "lastname": "Guerrero",
          "kontakt_via_målsman": true,
          "email": "alysonguerrero@telpod.com",
          "tel": "(829) 495-2634",
          "address": "575 Amber Street, Manchester, 7836",
          "note": "Veniam labore ut qui reprehenderit reprehenderit eu veniam officia sit aute est excepteur sunt nulla. Ut reprehenderit ea excepteur ullamco commodo sint eiusmod ex laboris eu pariatur. Eiusmod mollit occaecat laboris eiusmod.\r\n",
          "group_id": "uuid2"
        },
        {
          "id": "5db98b230c58003e010a513d",
          "pnr": 199994556639,
          "firstname": "Marisol",
          "lastname": "Ortiz",
          "kontakt_via_målsman": false,
          "email": "marisolortiz@telpod.com",
          "tel": "(991) 569-3468",
          "address": "308 Linwood Street, Tibbie, 7972",
          "note": "Duis tempor ipsum laborum cupidatat quis laborum dolore culpa qui dolore cupidatat Lorem. Culpa pariatur proident consequat non. Commodo laborum exercitation aute laboris exercitation ea nisi aliqua irure tempor adipisicing labore. Culpa amet id consectetur reprehenderit elit esse. Veniam voluptate elit tempor non exercitation consectetur. Nulla quis irure dolore mollit sit labore ut sit commodo.\r\n",
          "group_id": "uuid2"
        },
        {
          "id": "5db98b2369737c458a1ad7ab",
          "pnr": 200715783823,
          "firstname": "Ruth",
          "lastname": "Andrews",
          "kontakt_via_målsman": false,
          "email": "ruthandrews@telpod.com",
          "tel": "(870) 489-2977",
          "address": "575 Martense Street, Galesville, 7611",
          "note": "Cupidatat Lorem magna magna aliqua laboris ea ut consectetur laborum incididunt mollit commodo occaecat sint. Lorem elit dolore id officia occaecat officia in dolor veniam aute. Deserunt exercitation ullamco reprehenderit fugiat nostrud. Culpa fugiat excepteur laborum officia. Non incididunt nisi ad elit. Nisi qui sint nisi nostrud. Non voluptate consequat do fugiat tempor esse ex commodo.\r\n",
          "group_id": "uuid2"
        },
        {
          "id": "5db98b23952179045dd526c5",
          "pnr": 200716218844,
          "firstname": "Noemi",
          "lastname": "Tran",
          "kontakt_via_målsman": false,
          "email": "noemitran@telpod.com",
          "tel": "(915) 459-3714",
          "address": "353 Herbert Street, Barrelville, 1704",
          "note": "Anim culpa ea ullamco occaecat fugiat proident anim dolore magna. Officia non pariatur dolor aliquip laboris eu mollit fugiat Lorem consectetur cupidatat amet. Et pariatur sit ut fugiat pariatur. Voluptate dolor fugiat minim labore id aliqua fugiat minim amet anim irure velit. Deserunt laborum dolor pariatur officia in irure cupidatat veniam amet minim laboris nisi commodo irure. Ipsum veniam qui officia velit minim ipsum do aliquip mollit. Fugiat cupidatat do eiusmod ut.\r\n",
          "group_id": "uuid2"
        },
        {
          "id": "5db98b232340915d50fc3ebb",
          "pnr": 199644293198,
          "firstname": "Higgins",
          "lastname": "Sharpe",
          "kontakt_via_målsman": true,
          "email": "higginssharpe@telpod.com",
          "tel": "(833) 464-3655",
          "address": "140 Hazel Court, Glendale, 7561",
          "note": "Id sint sunt aliquip do quis reprehenderit culpa minim nulla anim. Consequat sint excepteur officia mollit. Eu ut ipsum aliquip incididunt id. Dolor aliqua aliquip officia reprehenderit duis sint aliqua aliqua minim. Consectetur ipsum do eiusmod proident cupidatat. Exercitation proident Lorem laboris aliqua non. Est reprehenderit occaecat ut ullamco nostrud magna dolore fugiat ullamco occaecat ea.\r\n",
          "group_id": "uuid2"
        },
        {
          "id": "5db98b23d219f123d3c6d70f",
          "pnr": 199510497314,
          "firstname": "Kristy",
          "lastname": "Chaney",
          "kontakt_via_målsman": false,
          "email": "kristychaney@telpod.com",
          "tel": "(992) 591-2456",
          "address": "277 Nova Court, Tryon, 4009",
          "note": "Fugiat laboris occaecat aliquip excepteur incididunt qui ipsum eiusmod proident ut. Veniam cupidatat irure sint elit sit quis culpa magna id eiusmod et mollit. Qui enim excepteur consequat qui.\r\n",
          "group_id": "uuid2"
        },
        {
          "id": "5db98b23c58587f3ea2872a8",
          "pnr": 201152070182,
          "firstname": "Matilda",
          "lastname": "Holman",
          "kontakt_via_målsman": true,
          "email": "matildaholman@telpod.com",
          "tel": "(985) 405-2826",
          "address": "346 Etna Street, Riverton, 7624",
          "note": "Ut labore enim adipisicing voluptate et sint. Tempor esse sit dolor excepteur duis aliquip eu cupidatat minim officia. Esse consequat do non velit sit culpa fugiat adipisicing. Esse enim eiusmod excepteur do.\r\n",
          "group_id": "uuid2"
        },
        {
          "id": "5db98b23b5b2fdf8be6f0c5a",
          "pnr": 200339580216,
          "firstname": "Baird",
          "lastname": "Fuller",
          "kontakt_via_målsman": false,
          "email": "bairdfuller@telpod.com",
          "tel": "(946) 592-2959",
          "address": "342 Louisa Street, Whitewater, 1472",
          "note": "Exercitation duis adipisicing sint nisi consequat pariatur pariatur voluptate. Ea aute aliqua labore esse in culpa commodo. Cillum laboris nisi laborum nulla excepteur. Ex duis cupidatat aute tempor cupidatat consectetur est sit.\r\n",
          "group_id": "uuid2"
        },
        {
          "id": "5db98b23efe18af83379bc05",
          "pnr": 199187199398,
          "firstname": "Alba",
          "lastname": "Schmidt",
          "kontakt_via_målsman": false,
          "email": "albaschmidt@telpod.com",
          "tel": "(828) 448-2196",
          "address": "947 Gerritsen Avenue, Wheaton, 9302",
          "note": "Minim id ipsum labore ad ex exercitation adipisicing anim laborum. Officia adipisicing sit non anim ad laboris velit. Tempor eu enim amet eu ad officia reprehenderit eiusmod voluptate. Eu est consectetur ea commodo est velit excepteur incididunt proident non excepteur. Consequat sint enim ea nulla excepteur non incididunt do elit enim veniam. Adipisicing ea reprehenderit dolor exercitation consequat mollit sint cillum deserunt.\r\n",
          "group_id": "uuid2"
        },
        {
          "id": "5db98b2392f0d9314a247645",
          "pnr": 199393957198,
          "firstname": "Molina",
          "lastname": "Newton",
          "kontakt_via_målsman": true,
          "email": "molinanewton@telpod.com",
          "tel": "(990) 455-2497",
          "address": "516 Pooles Lane, Kula, 9939",
          "note": "Sint ad veniam sint minim labore. Consectetur cillum et laborum esse cupidatat exercitation fugiat qui commodo amet. Laborum exercitation dolor dolore do excepteur duis do incididunt elit. Cillum commodo culpa ex id sunt eu ad commodo non non esse officia ex. Et voluptate consectetur nisi commodo laborum. Culpa enim reprehenderit quis enim occaecat ea voluptate magna esse.\r\n",
          "group_id": "uuid2"
        },
        {
          "id": "5db98b23304cb4502744d190",
          "pnr": 200499477405,
          "firstname": "Virgie",
          "lastname": "Bender",
          "kontakt_via_målsman": false,
          "email": "virgiebender@telpod.com",
          "tel": "(900) 498-2768",
          "address": "254 Lombardy Street, Bennett, 1081",
          "note": "Quis culpa ullamco voluptate ad deserunt. Duis aliqua id aliqua id aliquip proident tempor ad anim consequat nisi quis officia. Deserunt amet voluptate esse dolor labore culpa. Adipisicing nisi ullamco laborum amet. Voluptate nostrud cupidatat cillum aute sit enim pariatur. Adipisicing ullamco ex tempor sint qui velit id excepteur.\r\n",
          "group_id": "uuid2"
        },
        {
          "id": "5db98b23d2eae287d184a059",
          "pnr": 199239372265,
          "firstname": "Richardson",
          "lastname": "Robbins",
          "kontakt_via_målsman": true,
          "email": "richardsonrobbins@telpod.com",
          "tel": "(828) 407-2827",
          "address": "314 Sackett Street, Fostoria, 7723",
          "note": "Laboris sit culpa duis enim aliqua tempor proident culpa. Ad eiusmod Lorem ipsum pariatur dolor eu. Minim sunt consectetur voluptate commodo voluptate occaecat cupidatat commodo labore. Duis enim officia mollit veniam incididunt laboris amet et aute eiusmod Lorem.\r\n",
          "group_id": "uuid2"
        },
        {
          "id": "5db98b2372f47af989d8c015",
          "pnr": 200114084998,
          "firstname": "Carrillo",
          "lastname": "Bell",
          "kontakt_via_målsman": false,
          "email": "carrillobell@telpod.com",
          "tel": "(867) 444-2349",
          "address": "612 Eckford Street, Sedley, 1439",
          "note": "Nisi tempor est officia aliquip. Veniam officia proident proident pariatur tempor eiusmod tempor. Consequat esse et id mollit dolor minim.\r\n",
          "group_id": "uuid2"
        },
        {
          "id": "5db98b2346c7113fc8c480ec",
          "pnr": 199803472029,
          "firstname": "Guy",
          "lastname": "Spears",
          "kontakt_via_målsman": true,
          "email": "guyspears@telpod.com",
          "tel": "(952) 521-3477",
          "address": "324 Downing Street, Greenbush, 4423",
          "note": "Ex ipsum excepteur ex sint. Eu proident aliqua sit qui. Deserunt occaecat ad aute est nulla dolor anim sunt laboris aute veniam veniam eiusmod amet. Dolore eiusmod nisi sunt ut. Anim ea aliqua et in velit officia consectetur amet tempor. Ad exercitation ad minim fugiat esse consectetur ad ad id. Sint occaecat exercitation occaecat mollit culpa.\r\n",
          "group_id": "uuid2"
        },
        {
          "id": "5db98b23b763b87674043370",
          "pnr": 201251442135,
          "firstname": "Brady",
          "lastname": "White",
          "kontakt_via_målsman": true,
          "email": "bradywhite@telpod.com",
          "tel": "(857) 423-3871",
          "address": "347 Moore Street, Beaulieu, 3237",
          "note": "Proident pariatur culpa incididunt incididunt esse mollit. Cupidatat eu dolor ullamco non anim nostrud culpa minim. Magna enim veniam labore elit aliqua labore laborum. Esse consectetur culpa laborum occaecat cillum. Minim consequat ullamco ad excepteur anim minim id.\r\n",
          "group_id": "uuid2"
        },
        {
          "id": "5db98b2370bc0b153c33b818",
          "pnr": 199323808220,
          "firstname": "Loraine",
          "lastname": "Moore",
          "kontakt_via_målsman": true,
          "email": "lorainemoore@telpod.com",
          "tel": "(845) 592-3096",
          "address": "451 Claver Place, Odessa, 1380",
          "note": "Proident ut id consequat aliqua pariatur tempor amet occaecat ut. Cupidatat voluptate amet aliqua non eu in ullamco. Quis est veniam nostrud duis amet mollit. Amet occaecat sit elit in dolor id enim ut exercitation ut quis reprehenderit nostrud irure. Adipisicing aliqua nulla ea sit reprehenderit non aliquip fugiat ex.\r\n",
          "group_id": "uuid2"
        },
        {
          "id": "5db98b2327d8d1e9b2e60971",
          "pnr": 199942299674,
          "firstname": "Holden",
          "lastname": "Atkinson",
          "kontakt_via_målsman": true,
          "email": "holdenatkinson@telpod.com",
          "tel": "(997) 485-3135",
          "address": "430 Meserole Avenue, Brookfield, 5205",
          "note": "Anim eiusmod nisi consequat fugiat nisi consequat minim laboris excepteur magna. Labore non ex ut dolore excepteur et consectetur irure elit labore reprehenderit. Laborum consectetur proident non quis ullamco in aute sint anim ad. Exercitation pariatur ut eiusmod nostrud pariatur ad exercitation amet.\r\n",
          "group_id": "uuid2"
        },
        {
          "id": "5db98b236a67f357fb5e338c",
          "pnr": 199467900731,
          "firstname": "Jami",
          "lastname": "Burch",
          "kontakt_via_målsman": true,
          "email": "jamiburch@telpod.com",
          "tel": "(846) 520-3348",
          "address": "779 Duryea Court, Tyro, 9212",
          "note": "Proident consequat duis dolor irure nulla laborum. Enim laboris ut minim veniam exercitation pariatur minim duis proident ad elit Lorem. Ut excepteur non quis ea dolore ex exercitation magna reprehenderit commodo culpa sint laborum eu.\r\n",
          "group_id": "uuid2"
        },
        {
          "id": "5db98b234f2c419d2ec8d88e",
          "pnr": 200619188996,
          "firstname": "Bette",
          "lastname": "Frazier",
          "kontakt_via_målsman": false,
          "email": "bettefrazier@telpod.com",
          "tel": "(951) 478-3262",
          "address": "144 Luquer Street, Machias, 3322",
          "note": "Dolor ipsum labore sint ut excepteur nisi duis adipisicing. Non nulla excepteur eiusmod irure incididunt nisi eu nulla dolore eu proident consequat. Mollit exercitation aute exercitation dolore ut Lorem in amet Lorem consequat occaecat ea. Id sint magna reprehenderit commodo do do fugiat officia adipisicing.\r\n",
          "group_id": "uuid2"
        },
        {
          "id": "5db98b23f174801b99fc0e22",
          "pnr": 198981012836,
          "firstname": "Maynard",
          "lastname": "Meyers",
          "kontakt_via_målsman": true,
          "email": "maynardmeyers@telpod.com",
          "tel": "(912) 534-3235",
          "address": "803 Meadow Street, Thermal, 2429",
          "note": "Dolore cillum mollit anim anim tempor. Laborum Lorem eu excepteur minim eiusmod exercitation dolor non sint incididunt enim. Commodo laboris enim ipsum laborum esse officia consequat. Aute dolore sint labore laboris eu culpa velit aliqua duis.\r\n",
          "group_id": "uuid2"
        },
        {
          "id": "5db98b2325664f99a1c9c96e",
          "pnr": 199675300409,
          "firstname": "Essie",
          "lastname": "Payne",
          "kontakt_via_målsman": true,
          "email": "essiepayne@telpod.com",
          "tel": "(804) 541-2893",
          "address": "111 Jerome Avenue, Holtville, 9056",
          "note": "Dolore id reprehenderit velit sit reprehenderit id cupidatat aute proident. Lorem ad consequat ut enim in est eiusmod dolor veniam mollit magna. Deserunt culpa non officia labore. Nostrud occaecat cupidatat sit anim in velit deserunt quis ad qui eiusmod quis. Lorem dolor nostrud cupidatat laboris nostrud ut adipisicing laborum id esse commodo cillum irure excepteur. Quis eu dolor ea irure ea anim sit cupidatat do quis. Ea ex velit officia incididunt commodo sint eiusmod nostrud aliquip.\r\n",
          "group_id": "uuid2"
        },
        {
          "id": "5db98b23212a4b990ab888f3",
          "pnr": 200766612742,
          "firstname": "Cristina",
          "lastname": "Santana",
          "kontakt_via_målsman": true,
          "email": "cristinasantana@telpod.com",
          "tel": "(874) 465-2356",
          "address": "757 Nostrand Avenue, Clinton, 6322",
          "note": "Ad excepteur Lorem Lorem ullamco enim velit. Ex minim eu officia veniam. Pariatur aliqua pariatur mollit ex dolor do et aliqua adipisicing.\r\n",
          "group_id": "uuid2"
        },
        {
          "id": "5db98b23a0dffe1582f32638",
          "pnr": 199445843318,
          "firstname": "Belinda",
          "lastname": "Horton",
          "kontakt_via_målsman": false,
          "email": "belindahorton@telpod.com",
          "tel": "(986) 532-3106",
          "address": "637 Madison Place, Dunlo, 1474",
          "note": "Sunt est ut elit dolor fugiat. Aliqua sunt enim quis reprehenderit labore mollit cillum est exercitation consectetur. Sint cillum occaecat pariatur commodo est ex magna veniam quis exercitation nisi tempor.\r\n",
          "group_id": "uuid2"
        },
        {
          "id": "5db98b235aaf25802251e28c",
          "pnr": 199959781793,
          "firstname": "Toni",
          "lastname": "Avery",
          "kontakt_via_målsman": false,
          "email": "toniavery@telpod.com",
          "tel": "(823) 583-3813",
          "address": "280 Schenck Court, Waterford, 7922",
          "note": "Eiusmod nulla tempor enim nostrud dolor sit consequat aute. Magna tempor deserunt adipisicing qui velit sint tempor sit veniam sunt ullamco ea consequat minim. Ipsum ut id cillum esse amet laborum et id pariatur.\r\n",
          "group_id": "uuid2"
        }
      ].map(row => {
        const hash = crypto.createHash('sha256');
        hash.update(''+row.pnr);
        row.pnr_hash = hash.digest('hex'); //TODO: check hashing linkage
        delete row.address;
        return row;
      }));
    });
};
