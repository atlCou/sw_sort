dataSetVersion = "2017-05-01"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Group",
    key: "series",
    tooltip: "Check this to restrict to certain units, places of appearence, etc.",
    checked: true,
    sub: [
      { name: "501st JFW", key: "501" },
      { name: "502nd JFW", key: "502" },
      { name: "503rd JFW", key: "503" },
      { name: "504th JFW", key: "504" },
	  { name: "505th JFW", key: "505" },
      { name: "506th JFW", key: "506" },
	  { name: "507th JFW", key: "507" },
	  { name: "508th JFW", key: "508" },
	  { name: "Isle of Wight", tooltip: "Isle of Wight Detachment Group", key: "Wight" },
	  { name: "Fuso Sea Incident", key: "1937" },
	  { name: "Africa", tooltip: "Girls who are focused on Africa, including the doujinshis and OVA 2.", key: "Afrika" },
	  { name: "LLv24", tooltip: "Girls who were part of LLV24 (Suomus Air Force), the focus of Aurora no Majo.", key: "24" },
	  { name: "Contrail of Witches", key: "Contrail" },
      { name: "Others", tooltip: "WIP (Please suggest further categories!)", key: "Others" },
	  { name: "Luminous Witches", tooltip: "Idols, unchecked by default.", key: "Idol", checked: false },
    ],
	uncheckname: "Uncheck",
	unchecktooltip: "Toggles all options as selected or unselected.",
	uncheckstate: true,
	uncheckkey: "series_unchecked"
  },
  {
    name: "Filter by Nation",
    key: "nation",
    tooltip: "Check this to restrict to certain nations.",
    checked: false,
    sub: [
	  { name: "Australis", key: "aus" },
	  { name: "Belgica", key: "blg"},
	  { name: "Britannia", key: "bri" },
	  { name: "Dacia", key: "dac"},
	  { name: "Faraway Land", key: "can"},
	  { name: "Fuso", key: "fus" },
	  { name: "Gallia", key: "gal" },
	  { name: "Greece", key: "aec"},
	  { name: "Hispania", key: "his" },
	  { name: "Karlsland", key: "kar" },
	  { name: "Liberion", key: "lin" },
	  { name: "Moesia", key: "moe"},
	  { name: "New Zeeland", key: "zee"},
	  { name: "Orussia", key: "oru" },
	  { name: "Ostmark", key: "ost" },
	  { name: "Romagna", key: "rma" },
	  { name: "Siam", key: "sia" },
	  { name: "South Africa", key: "soa" },
	  { name: "Suomus", key: "suo" },
    ],
	uncheckname: "Uncheck",
	unchecktooltip: "Toggles all options as selected or unselected.",
	uncheckstate: true,
	uncheckkey: "nation_unchecked"
  },
  {
    name: "Remove non-Images",
    key: "nimg",
    tooltip: "Check this to remove witches unfortunate enough to not yet have art.",
	checked: false
  },
  {
    name: "Remove non-Anime",
    key: "nanime",
    tooltip: "Check this to remove characters without an anime appearence.",
	checked: false
  }

];

dataSet[dataSetVersion].characterData = [
	//
	
	// 501st:
	
	//
  {
    name: "Miyafuji Yoshika",
    img: "WRgTLvV.png",
    opts: {
      series: ["501"],
	  nation: ["fus"]
    }
  },
  {
    name: "Erica Hartmann",
    img: "dfuc9sV.png",
    opts: {
      series: ["501"],
	  nation: ["kar"]
	  
    }
  },
  {
    name: "Lynette Bishop",
    img: "LuJP8hq.png",
    opts: {
      series: ["501"],
	  nation: ["bri"]
    }
  },
  {
    name: "Gertrud Barkhorn",
    img: "V4x0cde.png",
    opts: {
      series: ["501"],
	  nation: ["kar"]
    }
  },
  {
    name: "Sanya v. Litvyak",
    img: "1U56Fvo.png",
    opts: {
      series: ["501"],
	  nation: ["oru"]
    }
  },
  {
    name: "Francesca Lucchini",
    img: "fLUENqS.png",
    opts: {
      series: ["501"],
	  nation: ["rma"]
    }
  },
  {
    name: "Minna-Dietlinde Wilcke",
    img: "7OzpGtW.png",
    opts: {
      series: ["501"],
	  nation: ["kar"]
    }
  },
  {
    name: "Sakamoto Mio",
    img: "K6KSymX.png",
    opts: {
      series: ["501", "1937"],
	  nation: ["fus"]
    }
  },
  {
    name: "Eila Ilmatar Juutilainen",
    img: "M6KQa8a.png",
    opts: {
      series: ["501", "24"],
	  nation: ["suo"]
    }
  },
  {
    name: "Charlotte E. Yeager",
    img: "qK29U7y.png",
    opts: {
      series: ["501"],
	  nation: ["lin"]
    }
  },
  {
    name: "Perrine H. Clostermann",
    img: "Sehx2iD.png",
    opts: {
      series: ["501"],
	  nation: ["gal"]
    }
  },
  {
    name: "Hattori Shizuka",
    img: "Z0nry7M.png",
    opts: {	
      series: ["501"],
	  nation: ["fus"]
    }
  },
  //
  
  // 502nd:
  
  //
 
  {
    name: "Gundula Rall",
    img: "88O7498.png",
    opts: {
      series: ["502"],
	  nation: ["kar"]
    }
  },
  {
    name: "Aleksandra I. Pokryshkin",
    img: "ITZTyOR.png",
    opts: {
      series: ["502"],
	  nation: ["oru"]
    }
  },
  {
    name: "Waltrud Krupinski",
    img: "Ex8FrR5.png",
    opts: {
      series: ["502"],
	  nation: ["kar"]
    }
  },
  {
    name: "Georgette Lemare",
    img: "Ad4TOLe.png",
    opts: {
      series: ["502"],
	  nation: ["gal"]
    }
  },
  {
    name: "Kanno Naoe",
    img: "7aVB65t.png",
    opts: {
      series: ["502"],
	  nation: ["fus"]
    }
  },
  {
    name: "Shimohara Sadako",
    img: "pB61QhG.png",
    opts: {
      series: ["502"],
	  nation: ["fus"]
    }
  },
  {
    name: "Edytha Roßmann",
    img: "MRQJ1wQ.png",
    opts: {
      series: ["502"],
	  nation: ["kar"]
    }
  },
  {
    name: "Nikka Edvardine Katajainen",
    img: "i1tZU17.png",
    opts: {
      series: ["502", "24"],
	  nation: ["suo"]
    }
  },
  {
    name: "Karibuchi Hikari",
    img: "iPubFFv.png",
    opts: {
      series: ["502"],
	  nation: ["fus"]
    }
  },
  
  
  //
  
  // 503rd:
  
  //
  {
    name: "Bronislava F. Safonov",
    img: "s7nhpLJ.png",
    opts: {
      series: ["503"],
	  nanime: true,
	  nation: ["oru"]
    }
  },
  {
    name: "Huberta von Bonin",
    img: "yMLqaKZ.png",
    opts: {
      series: ["503", "Contrail"],
	  nanime: true,
	  nation: ["kar"]
    }
  },
  {
    name: "Waltraud Nowotny",
    img: "cc6p6Tu.png",
    opts: {
      series: ["503"],
	  nanime: true,
	  nation: ["ost"]
    }
  },
  {
    name: "Galina D. Kostilev",
    img: "uIsBRxu.png",
    opts: {
      series: ["503"],
	  nanime: true,
	  nimg: true,
	  nation: ["oru"]
    }
  },
  {
    name: "Alexandra Şerbănescu",
    img: "f8CqKse.png",
    opts: {
      series: ["503"],
	  nanime: true,
	  nation: ["ost"]
    }
  },
  {
    name: "Rosalie de La Poype",
    img: "x2HFiuk.png",
    opts: {
      series: ["503"],
	  nanime: true,
	  nimg: true,
	  nation: ["gal"]
    }
  },
  {
    name: "Ottilie Kittel",
    img: "ksfFFlp.png",
    opts: {
      series: ["503"],
	  nanime: true,
	  nation: ["kar"]
    }
  },
  {
    name: "Kawaguchi Fumiyo",
    img: "kcTmcX9.png",
    opts: {
      series: ["503"],
	  nanime: true,
	  nimg: true,
	  nation: ["fus"]
    }
  },
  //
  
  // 504th, or the rise of the Romans
  
  //
  {
    name: "Federica N. Doglio",
    img: "NRSZiwR.png",
    opts: {
      series: ["504"],
	  nanime: true,
	  nation: ["rma"]
    }
  },
  {
    name: "Takei Junko",
    img: "aI8hsMS.png",
    opts: {
      series: ["504", "1937"],
	  nation: ["fus"]
    }
  },
  {
    name: "Dominica S. Gentile",
    img: "3IaiJcS.png",
    opts: {
      series: ["504"],
	  nanime: true,
	  nation: ["lin"]
    }
  },
  {
    name: "Jane T. Godfrey",
    img: "P0KKkCE.png",
    opts: {
      series: ["504"],
	  nanime: true,
	  nation: ["lin"]
    }
  },
  {
    name: "Patricia Schade",
    img: "60fQK83.png",
    opts: {
      series: ["504"],
	  nanime: true,
	  nation: ["bri"]
    }
  },
  {
    name: "Fernandia Malvezzi",
    img: "1J5Ou6j.png",
    opts: {
      series: ["504"],
	  nation: ["rma"]
    }
  },
  {
    name: "Angela Salas Larrazabal",
    img: "3WQ8Nbu.png",
    opts: {
      series: ["504"],
	  nation: ["his"]
    }
  },
  {
    name: "Suwa Amaki",
    img: "8QZ7y3i.png",
    opts: {
      series: ["504"],
	  nation: ["fus"]
	  
    }
  },
  {
    name: "Nakajima Nishiki",
    img: "S1WaIz3.png",
    opts: {
      series: ["504"],
	  nation: ["fus"]
    }
  },
  {
    name: "Luciana Mazzei",
    img: "MIdzEWB.png",
    opts: {
      series: ["504"],
	  nation: ["rma"]
    }
  }, 
  {
    name: "Martina Crespi",
    img: "KREU2i4.png",
    opts: {
      series: ["504"],
	  nation: ["rma"]
    }
  },
  
  //
  
  // 505th
  
  //
  
  {
    name: "Grete M. Gollob",
    img: "V02ddo1.png",
    opts: {
      series: ["505", "Contrail"],	
	  nanime: true,
	  nation: ["ost"]
    }
  },
  {
    name: "Alya V. Alelyuhin",
    img: "4OG6hbx.png",
    opts: {
      series: ["505"],
	  nanime: true,
	  nimg: true,
	  nation: ["oru"]
    }
  },
  {
    name: "Constantia Cantacuzino",
    img: "u8rfVhX.png",
    opts: {
      series: ["505", "Contrail"],
	  nanime: true,
	  nation: ["dac"]
    }
  },
  {
    name: "Stoyana Stoyanov",
    img: "4OG6hbx.png",
    opts: {
      series: ["505"],
	  nanime: true,
	  nimg: true,
	  nation: ["moe"]
    }
  },
  {
    name: "Vasilissa M. Vassiliades",
    img: "4OG6hbx.png",
    opts: {
      series: ["505"],
	  nanime: true,
	  nimg: true,
	  nation: ["aec"]
    }
  },
  {
    name: "Inufusa Yuno",
    img: "mOdGNZh.png",
    opts: {
      series: ["505", "Contrail"],
	  nanime: true,
	  nation: ["fus"]
    }
  },
  {
    name: "Kuroe Ayaka",
    img: "WOsEoxb.png",
    opts: {
      series: ["505", "1937"],
	  nanime: true,
	  nation: ["fus"]
    }
  },
  {
    name: "Emma",
    img: "9ZjMco3.png",
    opts: {
      series: ["Contrail"],
	  nanime: true,
	  nation: ["ost"]
    }
  },
  //
  
  // 506th
  
  //
  {
    name: "Rosalie de Hemricourt de Grunne",
    img: "GB39DJZ.png",
    opts: {
      series: ["506"],
	  nation: ["blg"]
    }
  },
  {
    name: "Heinrike Prinzessin zu Sayn-Wittgenstein",
    img: "NLO4HlC.png",
    opts: {
      series: ["506", "Contrail"],
	  nation: ["kar"]
    }
  },
  {
    name: "Adriana Visconti",
    img: "6KlNxDq.png",
    opts: {
      series: ["506"],
	  nanime: true,
	  nation: ["rma"]
    }
  },
  {
    name: "Kuroda Kunika",
    img: "UiYwxbv.png",
    opts: {	
      series: ["506"],
	  nation: ["fus"]
    }
  },
  {
    name: "Isabelle du Monceau de Bergendal",
    img: "XvHNW1a.png",
    opts: {
      series: ["506"],
	  nanime: true,
	  nation: ["blg"]
    }
  },
  {
    name: "Geena Preddy",
    img: "xx2h9yz.png",
    opts: {
      series: ["506"],
	  nanime: true,
	  nation: ["lin"]
    }
  },
  {
    name: "Marian Carl",
    img: "yfkhtdD.png",
    opts: {
      series: ["506"],
	  nanime: true,
	  nation: ["lin"]
    }
  },
  {
    name: "Jennifer DeBlanc",
    img: "RrjCoNt.png",
    opts: {
      series: ["506"],
	  nanime: true,
	  nation: ["lin"]
    }
  },
  {
    name: "Carla Luksic",
    img: "RVNi1zZ.png",
    opts: {
      series: ["506"],
	  nanime: true,
	  nation: ["lin"]
    }
  },
  
  //
  
  // 507th, or my spirit fighter wing
  
  //
  
  {
    name: "Anabuki Tomoko",
    img: "VFbo7Uy.png",
    opts: {	
      series: ["507", "1937"],
	  nanime: true,
	  nation: ["fus"]
    }
  },
  {
    name: "Elizabeth F. Beurling",
    img: "kLfRAXd.png",
    opts: {	
      series: ["507"],
	  nanime: true,
	  nation: ["can"]
    }
  },
  {
    name: "Elma Leivonen",
    img: "LCZz35B.png",
    opts: {	
      series: ["507"],
	  nanime: true,
	  nation: ["suo"]
    }
  },
  {
    name: "Giuseppina Cenni",
    img: "lyaqpYL.png",
    opts: {	
      series: ["507"],
	  nanime: true,
	  nation: ["rma"]
    }
  },
  {
    name: "Katharine O'Hare", //i hate her
    img: "KwLrIke.png",
    opts: {	
      series: ["507"],
	  nanime: true,
	  nation: ["lin"]
    }
  },
  {
    name: "Ursula Hartmann",
    img: "eB2iasP.png",
    opts: {	
      series: ["507"],
	  nation: ["kar"]
	  
    }
  },
  {
    name: "Sakomizu Haruka",
    img: "HR2T4j9.png",
    opts: {	
      series: ["507"],
	  
	  nanime: true,
	  nation: ["fus"]
    }
  },
  
  //
  
  // 508
  
  //
  
  {
    name: "Karibuchi Takami",
    img: "yvgs61q.png",
    opts: {
      series: ["508"],
	  nation: ["fus"]
    }
  },
  {
    name: "Shindou Mie",
    img: "QieBvuq.png",
    opts: {	
      series: ["508"],
	  nation: ["fus"]
    }
  },
  {
    name: "Cecilia Harris",
    img: "ll5pztz.png",
    opts: {	
      series: ["508"],
	  nation: ["lin"]
    }
  },
  //
  
  // Isle of Wight - bestos
  
  //
  
  {
    name: "Kadomaru Misa",
    img: "LZGH38Q.png",
    opts: {	
      series: ["Wight"],
	  nanime: true,
	  nation: ["fus"]
    }
  },
  {
    name: "Wilma Bishop",
    img: "u6Z75A4.png",
    opts: {	
      series: ["Wight"],
	  nanime: true,
	  nation: ["bri"]
    }
  },
  {
    name: "Amelie Planchard",
    img: "SuzV6ae.png",
    opts: {	
      series: ["Wight"],
	  nanime: true,
	  nation: ["gal"]
    }
  },
  {
    name: "Francie Gerard",
    img: "UFecOx9.png",
    opts: {	
      series: ["Wight"],
	  nanime: true,
	  nation: ["lin"]
    }
  },
  {
    name: "Laura Toth",
    img: "qvGkIeh.png",
    opts: {	
      series: ["Wight"],
	  nanime: true,
	  nation: ["ost"]
    }
  },
  

  //
  
  // Others
  
  //
  
  
  {
    name: "Vesna Mikovic",
    img: "g58p7Wq.jpg",
    opts: {	
      series: ["Others"],
	  nation: ["ost"],
	  nanime: true
    }
  },  
  {
    name: "Enrica Tarantola",
    img: "kNpF94T.jpg",
    opts: {	
      series: ["Others"],
	  nation: ["rma"],
	  nanime: true
    }
  }, 
  {
    name: "Heidemarie W. Schnaufer",
    img: "3IP2y2n.png",
    opts: {	
      series: ["Contrail"],
	  nation: ["kar"]
    }
  },
  {
    name: "Helma Lennartz",
    img: "j3uldT1.png",
    opts: {	
      series: ["Contrail"],
	  nanime: true,
	  nation: ["kar"]
    }
  },
  {
    name: "Harriet Steer",
    img: "QFwMpCc.png",
    opts: {	
      series: ["Others"],
	  nanime: true,
	  nation: ["bri"]
    }
  },
  {
    name: "Nora Taylor",
    img: "DJvC0Vq.png",
    opts: {	
      series: ["Others"],
	  nation: ["aus"]
    }
  },
  {
    name: "Hanna U. Rudel",
    img: "kzb4c1P.png",
    opts: {	
      series: ["Contrail"],
	  nanime: true,
	  nation: ["kar"]
    }
  },
  {
    name: "Adelheid",
    img: "WWo50R3.jpg",
    opts: {	
      series: ["Contrail"],
	  nanime: true,
	  nation: ["kar"]
    }
  },
  {
    name: "Hanna Wind",
    img: "GGCrkR4.png",
    opts: {	
      series: ["24"],
	  nanime: true,
	  nation: ["suo"]
    }
  },
  {
    name: "Adolfine Galland",
    img: "A1pf1E4.png",
    opts: {	
      series: ["Contrail", "1937"],
	  nanime: true,
	  nation: ["kar"]
    }
  },
  {
    name: "Helmina Lent",
    img: "uNFGZQR.png",
    opts: {	
      series: ["Contrail"],
	  nanime: true,
	  nation: ["kar"]
    }
  },
  {
    name: "Eini Luukkanen",
    img: "36YzZAF.png",
    opts: {	
      series: ["24"],
	  nanime: true,
	  nation: ["suo"]
    }
  },
  {
    name: "Laura Nissinen",
    img: "EZNFq3i.png",
    opts: {	
      series: ["24"],
	  nanime: true,
	  nation: ["suo"]
    }
  },
  {
    name: "Wiktoria Urbanowicz",
    img: "Onnb2D1.png",
    opts: {	
      series: ["Others"],
	  nanime: true,
	  nation: ["ost"]
    }
  },
  {
    name: "Aurora E.Juutilainen",
    img: "fhYf6W8.png",
    opts: {	
      series: ["24"],
	  nanime: true,
	  nation: ["suo"]
    }
  },
  
  {
    name: "Misumi Miya",
    img: "AUgiLib.png",
    opts: {	
      series: ["Others"],
	  nation: ["fus"]
    }
  },
  {
    name: "Mika Ahonen",
    img: "Bi1CNDT.png",
    opts: {	
      series: ["Others"],
	  nanime: true,
	  nation: ["suo"]
    }
  },
  {
    name: "Elfriede Schreiber",
    img: "qHudxut.png",
    opts: {	
      series: ["Contrail"],
	  nanime: true,
	  nation: ["kar"]
    }
  },
  {
    name: "Hanna Philine",
    img: "h8Ppkxu.png",
    opts: {	
      series: ["Others"],
	  nanime: true,
	  nation: ["kar"]
    }
  },
  {
    name: "Eugenia Horbaczewski",
    img: "T4cwEOP.png",
    opts: {	
      series: ["Others"],
	  nanime: true,
	  nation: ["ost"]
    }
  },
  {
    name: "Nishizawa Yoshiko",
    img: "ed3qpLV.png",
    opts: {	
      series: ["Contrail"],
	  nanime: true,
	  nation: ["fus"]
    }
  },
  {
    name: "Chris Keera",
    img: "rDfZioV.jpg",
    opts: {	
      series: ["Others"],
	  nanime: true,
	  nation: ["gal"] // my pride and joy
    }
  },
  {
    name: "Leigh Andrea Archer",
    img: "twotECA.jpg",
    opts: {	
      series: ["Others"],
	  nanime: true,
	  nation: ["lin"]
    }
  },
  {
    name: "Kashida Isami",
    img: "6ZD2Uw1.jpg",
    opts: {	
      series: ["Others"],
	  nanime: true,
	  nation: ["fus"]
    }
  },
  {
    name: "Iris Montfort",
    img: "Ocm6KO5.jpg",
    opts: {	
      series: ["Others"],
	  nanime: true,
	  nation: ["his"]
    }
  },
  {
    name: "Johanna Wiese",
    img: "m9p2l02.jpg",
    opts: {	
      series: ["Contrail"],
	  nanime: true,
	  nation: ["kar"]
    }
  },
  {
    name: "Kullamas Blengkam",
    img: "RKwXQrs.jpg",
    opts: {	
      series: ["Others"],
	  nanime: true,
	  nation: ["sia"]
    }
  },
  {
    name: "Nadia Popova",
    img: "rLqXSk7.png",
    opts: {	
      series: ["Contrail"],
	  nanime: true,
	  nation: ["oru"]
    }
  },
  {
    name: "Ernesta Niermann",
    img: "0pyzYL4.png",
    opts: {	
      series: ["Contrail"],
	  nanime: true,
	  nation: ["kar"]
    }
  },
  {
    name: "Fuso Princess",
    img: "l0ekzbc.png",
    opts: {	
      series: ["1937"],
	  nanime: true,
	  nation: ["fus"]
    }
  },
  
  
  //
  
  // Love Live: Panty Girl Festival
  
  //
  
  {
    name: "Lyudmila Andreyevna Ruslanova",
    img: "qeEVvgP.png",
    opts: {	
      series: ["Idol"],
	  nation: ["oru"]
    }
  },
  {
    name: "Virginia Robertson",
    img: "vGjA5Vo.png",
    opts: {	
      series: ["Idol"],
	  nation: ["bri"]
    }
  },
  {
    name: "Shibuya Inori",
    img: "8OLDrj4.png",
    opts: {	
      series: ["Idol"],
	  nation: ["fus"]
    }
  },
  {
    name: "Éléonore Giovanna Gassion",
    img: "tKNL9bP.png",
    opts: {	
      series: ["Idol"],
	  nation: ["gal"]
    }
  },
  {
    name: "Aira Päivikki Linnamaa",
    img: "P10pmKR.png",
    opts: {	
      series: ["Idol"],
	  nation: ["suo"]
    }
  },
  {
    name: "Maria Magdalene Dietrich",
    img: "pjPVW87.png",
    opts: {	
      series: ["Idol"],
	  nation: ["kar"]
    }
  },
  {
    name: "Manaia Matawhaura Hato",
    img: "1edaGCF.png",
    opts: {	
      series: ["Idol"],
	  nation: ["zee"]
    }
  },
  {
    name: "Sylvie Cariello",
    img: "WnXVhTx.jpg",
    opts: {	
      series: ["Idol"],
	  nation: ["rma"]
    }
  },
  {
    name: "Joanna Elizabeth Stafford",
    img: "9TAomUL.jpg",
    opts: {	
      series: ["Idol"],
	  nation: ["lin"]
    }
  },
  
  
  

  
  //
  
  // 1937
  
  //
  
  {
    name: "Etou Toshiko",
    img: "NQyoxlc.png",
    opts: {	
      series: ["1937"],
	  nanime: true,
	  nation: ["fus"]
    }
  },
  {
    name: "Katou Keiko",
    img: "DO7WAb5.png",
    opts: {	
      series: ["1937", "Afrika"],
	  nanime: true,
	  nation: ["fus"]
    }
  },
  {
    name: "Katou Takeko",
    img: "JgoiOne.png",
    opts: {	
      series: ["1937"],
	  nanime: true,
	  nation: ["fus"]
    }
  },
  {
    name: "Kitagou Fumika",
    img: "QIbVGtC.png",
    opts: {	
      series: ["1937"],
	  nation: ["fus"]
    }
  },
  {
    name: "Wakamoto Tetsuko",
    img: "7pLeC72.png",
    opts: {	
      series: ["1937"],
	  nanime: true,
	  nation: ["fus"]
    }
  },

  // africa
  {
    name: "Abigail",
    img: "dLPIVZy.png",
    opts: {	
      series: ["Afrika"],
	  nanime: true,
	  nation: ["lin"]
    }
  },
  {
    name: "Charlotte Lueder",
    img: "rwkxkmz.png",
    opts: {	
      series: ["Afrika"],
	  nanime: true,
	  nation: ["kar"]
    }
  },
  {
    name: "Marilyn",
    img: "WjNG2XQ.png",
    opts: {	
      series: ["Afrika"],
	  nanime: true,
	  nation: ["lin"]
    }
  },
  {
    name: "Patricia (Patton Girls)",
    img: "kXjGItn.png",
    opts: {	
      series: ["Afrika"],
	  nanime: true,
	  nation: ["lin"]
    }
  },
  {
    name: "Friederike Porsche",
    img: "83Exn3W.png",
    opts: {	
      series: ["Afrika"],
	  nanime: true,
	  nation: ["kar"]
    }
  },
  {
    name: "Cecilia Miles",
    img: "IAqlBZu.png",
    opts: {	
      series: ["Afrika"],
	  nanime: true,
	  nation: ["bri"]
    }
  },
  {
    name: "Inagaki Mami",
    img: "25HWuJ3.png",
    opts: {	
      series: ["Afrika"],
	  nanime: true,
	  nation: ["fus"]
    }
  },
  {
    name: "Kitano Furuko",
    img: "bbwqm84.jpg",
    opts: {	
      series: ["Afrika"],
	  nanime: true,
	  nation: ["fus"]
    }
  },
  {
    name: "Hanna Justina Marseille",
    img: "HRzD6gP.png",
    opts: {	
      series: ["Afrika"],
	  nation: ["kar"]
    }
  },
  {
    name: "Raisa Pöttgen",
    img: "sXRlWd7.png",
    opts: {	
      series: ["Afrika"],
	  nation: ["kar"]
    }
  },
  {
    name: "Edytha Neumann",
    img: "qoewz44.png",
    opts: {	
      series: ["Afrika"],
	  nation: ["kar"]
    }
  },
  {
    name: "Matilda",
    img: "kiKj9xV.jpg",
    opts: {	
      series: ["Afrika"],
	  nation: ["soa"],
	  nanime: true
    }
  },
  
  
];