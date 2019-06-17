dataSetVersion = "2017-05-01"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Series Entry",
    key: "series",
    tooltip: "Check this to restrict to certain series.",
    checked: false,
    sub: [
      { name: "501st", key: "501" },
      { name: "502nd", key: "502" },
      { name: "503rd", key: "503" },
      { name: "504th", key: "504" },
      { name: "506th", key: "506" },
	  { name: "31st Joint Fighter Squadron Afrika", key: "Afrika" },
      { name: "Others", tooltip: "WIP (Please suggest further categories!)", key: "Others" },
    ]
  },
  {
    name: "Remove Lolis",
    key: "loli",
    tooltip: "Check this to remove the smol characters.",
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
	  loli : true
    }
  },
  {
    name: "Erica Hartmann",
    img: "dfuc9sV.png",
    opts: {
      series: ["501"],
	  loli : true
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
	  loli: true
    }
  },
  {
    name: "Francesca Lucchini",
    img: "fLUENqS.png",
    opts: {
      series: ["501"],
	  loli: true
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
      series: ["501"]
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
    name: "Edytha Rossmann",
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
	  nanime: true
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
	  nanime: true
    }
  },
  {
    name: "Ottilie Kittel",
    img: "ksfFFlp.png",
    opts: {
      series: ["503"],
	  loli: true,
	  nanime: true
    }
  },
  {
    name: "Kawaguchi Fumiyo",
    img: "4OG6hbx.png",
    opts: {
      series: ["503"],
	  nanime: true
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
      series: ["504"]
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
	  loli: true
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
	  loli: true
    }
  },

  //
  
  // 506th because the 505th is kinda empty tbh
  
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
	  loli: true,
	  nanime: true
    }
  },
  
  
  
  
  
];
