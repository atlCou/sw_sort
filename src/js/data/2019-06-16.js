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
	  { name: "Isle of Wight", tooltip: "Isle of Wight Detachment Group", key: "Wight" },
	  { name: "OVA 2 [Africa]", tooltip: "Witches who appear in the second OVA", key: "Afrika" },
	  { name: "Fuso Sea Incident", key: "1937" },
      { name: "Others", tooltip: "WIP (Please suggest further categories!)", key: "Others" },
	  { name: "Luminous Witches", tooltip: "Idols, unchecked by default.", key: "Idol", checked: false },
	  { name: "Africa Doujinshi", tooltip: "Girls from the Africa Doujinshi, unchecked by default.", key: "tonks", checked: false },
    ]
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
	  
    }
  },
  {
    name: "Erica Hartmann",
    img: "dfuc9sV.png",
    opts: {
      series: ["501"],
	  
    }
  },
  {
    name: "Lynette Bishop",
    img: "LuJP8hq.png",
    opts: {
      series: ["501"]
    }
  },
  {
    name: "Gertrude Barkhorn",
    img: "V4x0cde.png",
    opts: {
      series: ["501"]
    }
  },
  {
    name: "Sanya v. Litvyak",
    img: "1U56Fvo.png",
    opts: {
      series: ["501"],
	  
    }
  },
  {
    name: "Francesca Lucchini",
    img: "fLUENqS.png",
    opts: {
      series: ["501"],
	  
    }
  },
  {
    name: "Minna-Dietlinde Wilcke",
    img: "7OzpGtW.png",
    opts: {
      series: ["501"]
    }
  },
  {
    name: "Sakamoto Mio",
    img: "K6KSymX.png",
    opts: {
      series: ["501", "1937"]
    }
  },
  {
    name: "Eila Ilmatar Juutilainen",
    img: "M6KQa8a.png",
    opts: {
      series: ["501"]
    }
  },
  {
    name: "Charlotte E. Yeager",
    img: "qK29U7y.png",
    opts: {
      series: ["501"]
    }
  },
  {
    name: "Perrine H. Clostermann",
    img: "Sehx2iD.png",
    opts: {
      series: ["501"]
    }
  },
  {
    name: "Hattori Shizuka",
    img: "Z0nry7M.png",
    opts: {	
      series: ["501"]
    }
  },
  //
  
  // 502nd:
  
  //
 
  {
    name: "Gundula Rall",
    img: "88O7498.png",
    opts: {
      series: ["502"]
    }
  },
  {
    name: "Aleksandra I. Pokryshkin",
    img: "ITZTyOR.png",
    opts: {
      series: ["502"]
    }
  },
  {
    name: "Waltrud Krupinski",
    img: "Ex8FrR5.png",
    opts: {
      series: ["502"]
    }
  },
  {
    name: "Georgette Lemare",
    img: "Ad4TOLe.png",
    opts: {
      series: ["502"]
    }
  },
  {
    name: "Kanno Naoe",
    img: "7aVB65t.png",
    opts: {
      series: ["502"]
    }
  },
  {
    name: "Shimohara Sadako",
    img: "pB61QhG.png",
    opts: {
      series: ["502"]
    }
  },
  {
    name: "Edytha Roßmann",
    img: "MRQJ1wQ.png",
    opts: {
      series: ["502"]
    }
  },
  {
    name: "Nikka Edvardine Katajainen",
    img: "i1tZU17.png",
    opts: {
      series: ["502"]
    }
  },
  {
    name: "Karibuchi Hikari",
    img: "iPubFFv.png",
    opts: {
      series: ["502"]
    }
  },
  {
    name: "Karibuchi Takami",
    img: "yvgs61q.png",
    opts: {
      series: ["502"]
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
	  nanime: true
    }
  },
  {
    name: "Huberta von Bonin",
    img: "yMLqaKZ.png",
    opts: {
      series: ["503"],
	  nanime: true
    }
  },
  {
    name: "Waltraud Nowotny",
    img: "cc6p6Tu.png",
    opts: {
      series: ["503"],
	  nanime: true
    }
  },
  {
    name: "Galina D. Kostilev",
    img: "4OG6hbx.png",
    opts: {
      series: ["503"],
	  nanime: true,
	  nimg: true
    }
  },
  {
    name: "Alexandra Şerbănescu",
    img: "f8CqKse.png",
    opts: {
      series: ["503"],
	  nanime: true
    }
  },
  {
    name: "Rosalie de La Poype",
    img: "4OG6hbx.png",
    opts: {
      series: ["503"],
	  nanime: true,
	  nimg: true
    }
  },
  {
    name: "Ottilie Kittel",
    img: "ksfFFlp.png",
    opts: {
      series: ["503"],
	  
	  nanime: true
    }
  },
  {
    name: "Kawaguchi Fumiyo",
    img: "4OG6hbx.png",
    opts: {
      series: ["503"],
	  nanime: true,
	  nimg: true
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
	  nanime: true
    }
  },
  {
    name: "Takei Junko",
    img: "aI8hsMS.png",
    opts: {
      series: ["504", "1937"]
    }
  },
  {
    name: "Dominica S. Gentile",
    img: "3IaiJcS.png",
    opts: {
      series: ["504"],
	  nanime: true
    }
  },
  {
    name: "Jane T. Godfrey",
    img: "P0KKkCE.png",
    opts: {
      series: ["504"],
	  nanime: true
    }
  },
  {
    name: "Patricia Schade",
    img: "60fQK83.png",
    opts: {
      series: ["504"],
	  nanime: true
    }
  },
  {
    name: "Fernandia Malvezzi",
    img: "1J5Ou6j.png",
    opts: {
      series: ["504"]
    }
  },
  {
    name: "Angela Salas Larrazabal",
    img: "3WQ8Nbu.png",
    opts: {
      series: ["504"]
    }
  },
  {
    name: "Suwa Amaki",
    img: "8QZ7y3i.png",
    opts: {
      series: ["504"],
	  
    }
  },
  {
    name: "Nakajima Nishiki",
    img: "S1WaIz3.png",
    opts: {
      series: ["504"]
    }
  },
  {
    name: "Luciana Mazzei",
    img: "MIdzEWB.png",
    opts: {
      series: ["504"]
    }
  }, 
  {
    name: "Martina Crespi",
    img: "KREU2i4.png",
    opts: {
      series: ["504"],
	  
    }
  },
  
  //
  
  // 505th
  
  //
  
  {
    name: "Grete M. Gollob",
    img: "V02ddo1.png",
    opts: {
      series: ["505"],
	  nanime: true
    }
  },
  {
    name: "Alya V. Alelyuhin",
    img: "4OG6hbx.png",
    opts: {
      series: ["505"],
	  nanime: true,
	  nimg: true
    }
  },
  {
    name: "Constantia Cantacuzino",
    img: "u8rfVhX.png",
    opts: {
      series: ["505"],
	  nanime: true
    }
  },
  {
    name: "Stoyana Stoyanov",
    img: "4OG6hbx.png",
    opts: {
      series: ["505"],
	  nanime: true,
	  nimg: true
    }
  },
  {
    name: "Vasilissa M. Vassiliades",
    img: "4OG6hbx.png",
    opts: {
      series: ["505"],
	  nanime: true,
	  nimg: true
    }
  },
  {
    name: "Inufusa Yuno",
    img: "mOdGNZh.png",
    opts: {
      series: ["505"],
	  nanime: true
    }
  },
  {
    name: "Kuroe Ayaka",
    img: "WOsEoxb.png",
    opts: {
      series: ["505", "1937"],
	  nanime: true
    }
  },
  //
  
  // 506th
  
  //
  {
    name: "Rosalie de Hemricourt de Grunne",
    img: "GB39DJZ.png",
    opts: {
      series: ["506"]
    }
  },
  {
    name: "Heinrike Prinzessin zu Sayn-Wittgenstein",
    img: "NLO4HlC.png",
    opts: {
      series: ["506"]
    }
  },
  {
    name: "Adriana Visconti",
    img: "6KlNxDq.png",
    opts: {
      series: ["506"],
	  nanime: true
    }
  },
  {
    name: "Kuroda Kunika",
    img: "UiYwxbv.png",
    opts: {	
      series: ["506"]
    }
  },
  {
    name: "Isabelle du Monceau de Bergendal",
    img: "XvHNW1a.png",
    opts: {
      series: ["506"],
	  nanime: true
    }
  },
  {
    name: "Geena Preddy",
    img: "xx2h9yz.png",
    opts: {
      series: ["506"],
	  nanime: true
    }
  },
  {
    name: "Marian Carl",
    img: "yfkhtdD.png",
    opts: {
      series: ["506"],
	  nanime: true
    }
  },
  {
    name: "Jennifer DeBlanc",
    img: "RrjCoNt.png",
    opts: {
      series: ["506"],
	  nanime: true
    }
  },
  {
    name: "Carla Luksic",
    img: "RVNi1zZ.png",
    opts: {
      series: ["506"],
	  
	  nanime: true
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
	  nanime: true
    }
  },
  {
    name: "Elizabeth F. Beurling",
    img: "kLfRAXd.png",
    opts: {	
      series: ["507"],
	  nanime: true
    }
  },
  {
    name: "Elma Leivonen",
    img: "LCZz35B.png",
    opts: {	
      series: ["507"],
	  nanime: true
    }
  },
  {
    name: "Giuseppina Cenni",
    img: "lyaqpYL.png",
    opts: {	
      series: ["507"],
	  nanime: true
    }
  },
  {
    name: "Katharine O'Hare", //i hate her
    img: "KwLrIke.png",
    opts: {	
      series: ["507"],
	  nanime: true
    }
  },
  {
    name: "Ursula Hartmann",
    img: "eB2iasP.png",
    opts: {	
      series: ["507"],
	  
    }
  },
  {
    name: "Sakomizu Haruka",
    img: "HR2T4j9.png",
    opts: {	
      series: ["507"],
	  
	  nanime: true
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
	  nanime: true
    }
  },
  {
    name: "Wilma Bishop",
    img: "u6Z75A4.png",
    opts: {	
      series: ["Wight"],
	  nanime: true
    }
  },
  {
    name: "Amelie Planchard",
    img: "SuzV6ae.png",
    opts: {	
      series: ["Wight"],
	  nanime: true
    }
  },
  {
    name: "Francie Gerard",
    img: "UFecOx9.png",
    opts: {	
      series: ["Wight"],
	  nanime: true
    }
  },
  {
    name: "Laura Toth",
    img: "qvGkIeh.png",
    opts: {	
      series: ["Wight"],
	  nanime: true
    }
  },
  
  
  //
  
  // OVA 2 African Witches (because the amount of witches in africa is actually kinda confusing and there's a lot of non-canon stuff i don't want to deal with)
  
  //
  
  {
    name: "Hanna Justina Marseille",
    img: "HRzD6gP.png",
    opts: {	
      series: ["Afrika"]
    }
  },
  {
    name: "Raisa Pöttgen",
    img: "sXRlWd7.png",
    opts: {	
      series: ["Afrika"]
    }
  },
  {
    name: "Edytha Neumann",
    img: "qoewz44.png",
    opts: {	
      series: ["Afrika"]
    }
  },
  
  //
  
  // Others
  
  //
  
  {
    name: "Heidemarie W. Schnaufer",
    img: "3IP2y2n.png",
    opts: {	
      series: ["Others"]
    }
  },
  {
    name: "Helma Lennartz",
    img: "j3uldT1.png",
    opts: {	
      series: ["Others"],
	  
	  nanime: true
    }
  },
  {
    name: "Harriet Steer",
    img: "QFwMpCc.png",
    opts: {	
      series: ["Others"],
	  nanime: true
    }
  },
  {
    name: "Nora Taylor",
    img: "DJvC0Vq.png",
    opts: {	
      series: ["Others"]
    }
  },
  {
    name: "Hanna U. Rudel",
    img: "kzb4c1P.png",
    opts: {	
      series: ["Others"],
	  nanime: true
    }
  },
  {
    name: "Hanna Wind",
    img: "GGCrkR4.png",
    opts: {	
      series: ["Others"],
	  nanime: true
    }
  },
  {
    name: "Adolfine Galland",
    img: "A1pf1E4.png",
    opts: {	
      series: ["Others", "1937"],
	  nanime: true
    }
  },
  {
    name: "Helmina Lent",
    img: "uNFGZQR.png",
    opts: {	
      series: ["Others"],
	  nanime: true
    }
  },
  {
    name: "Eini Luukkanen",
    img: "36YzZAF.png",
    opts: {	
      series: ["Others"],
	  nanime: true
    }
  },
  {
    name: "Laura Nissinen",
    img: "EZNFq3i.png",
    opts: {	
      series: ["Others"],
	  nanime: true
    }
  },
  {
    name: "Wiktoria Urbanowicz",
    img: "Onnb2D1.png",
    opts: {	
      series: ["Others"],
	  nanime: true
    }
  },
  {
    name: "Aurora E.Juutilainen",
    img: "fhYf6W8.png",
    opts: {	
      series: ["Others"],
	  nanime: true
    }
  },
  {
    name: "Shindou Mie",
    img: "QieBvuq.png",
    opts: {	
      series: ["Others"]
    }
  },
  {
    name: "Misumi Miya",
    img: "AUgiLib.png",
    opts: {	
      series: ["Others"]
    }
  },
  {
    name: "Mika Ahonen",
    img: "Bi1CNDT.png",
    opts: {	
      series: ["Others"],
	  nanime: true
    }
  },
  {
    name: "Elfriede Schreiber",
    img: "qHudxut.png",
    opts: {	
      series: ["Others"],
	  nanime: true
    }
  },
  {
    name: "Hanna Philine",
    img: "h8Ppkxu.png",
    opts: {	
      series: ["Others"],
	  nanime: true
    }
  },
  {
    name: "Eugenia Horbaczewski",
    img: "T4cwEOP.png",
    opts: {	
      series: ["Others"],
	  nanime: true
    }
  },
  {
    name: "Nishizawa Yoshiko",
    img: "ed3qpLV.png",
    opts: {	
      series: ["Others"],
	  nanime: true
    }
  },
  
  
  
  //
  
  // Love Live: Panty Girl Festival
  
  //
  
  {
    name: "Lyudmila Andreyevna Ruslanova",
    img: "qeEVvgP.png",
    opts: {	
      series: ["Idol"]
    }
  },
  {
    name: "Virginia Robertson",
    img: "vGjA5Vo.png",
    opts: {	
      series: ["Idol"]
    }
  },
  {
    name: "Shibuya Inori",
    img: "8OLDrj4.png",
    opts: {	
      series: ["Idol"]
    }
  },
  {
    name: "Éléonore Giovanna Gassion",
    img: "tKNL9bP.png",
    opts: {	
      series: ["Idol"]
    }
  },
  {
    name: "Aira Päivikki Linnamaa",
    img: "P10pmKR.png",
    opts: {	
      series: ["Idol"]
    }
  },
  {
    name: "Maria Magdalene Dietrich",
    img: "pjPVW87.png",
    opts: {	
      series: ["Idol"]
    }
  },
  {
    name: "Manaia Matawhaura Hato",
    img: "1edaGCF.png",
    opts: {	
      series: ["Idol"]
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
	  nanime: true
    }
  },
  {
    name: "Katou Keiko",
    img: "DO7WAb5.png",
    opts: {	
      series: ["1937", "tonks"],
	  nanime: true
    }
  },
  {
    name: "Katou Takeko",
    img: "JgoiOne.png",
    opts: {	
      series: ["1937"],
	  nanime: true
    }
  },
  {
    name: "Kitagou Fumika",
    img: "QIbVGtC.png",
    opts: {	
      series: ["1937"]
    }
  },
  {
    name: "Wakamoto Tetsuko",
    img: "7pLeC72.png",
    opts: {	
      series: ["1937"],
	  nanime: true
    }
  },

  // tonks
  {
    name: "Abigail",
    img: "dLPIVZy.png",
    opts: {	
      series: ["tonks"],
	  nanime: true
    }
  },
  {
    name: "Charlotte Lueder",
    img: "rwkxkmz.png",
    opts: {	
      series: ["tonks"],
	  nanime: true
    }
  },
  {
    name: "Marilyn",
    img: "WjNG2XQ.png",
    opts: {	
      series: ["tonks"],
	  nanime: true
    }
  },
  {
    name: "Patricia (Patton Girls)",
    img: "kXjGItn.png",
    opts: {	
      series: ["tonks"],
	  nanime: true
    }
  },
  {
    name: "Friederike Porsche",
    img: "83Exn3W.png",
    opts: {	
      series: ["tonks"],
	  nanime: true
    }
  },
  {
    name: "Cecilia Miles",
    img: "IAqlBZu.png",
    opts: {	
      series: ["tonks"],
	  nanime: true
    }
  },
  {
    name: "Inagaki Mami",
    img: "25HWuJ3.png",
    opts: {	
      series: ["tonks"],
	  nanime: true
    }
  },
  
  
];