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
      { name: "505th", key: "505" },
      { name: "506th", key: "506" },
      { name: "507th", key: "507" },
      { name: "508th", key: "508" },
	  { name: "31st Joint Fighter Squadron Afrika", key: "Afrika" },
      { name: "Others", tooltip: "WIP (Please suggest further categories!)", key: "Others" },
    ]
  },
  {
    name: "Remove Lolis",
    key: "loli",
    tooltip: "Check this to remove the smol characters."
  }

];

dataSet[dataSetVersion].characterData = [
	//
	
	// 501st:
	
	//
  {
    name: "Miyafuji Yoshika",
    img: "yoshikaimage",
    opts: {
      series: ["501"],
	  loli : true
    }
  },
  {
    name: "Erica Hartmann",
    img: "ericaimage",
    opts: {
      series: ["501"],
	  loli : true
    }
  },
  {
    name: "Lynette Bishop",
    img: "lynneimage",
    opts: {
      series: ["501"]
    }
  },
  {
    name: "Gertrude Barkhorn",
    img: "trudeimage",
    opts: {
      series: ["501"]
    }
  },
  {
    name: "Sanya v. Litvyak",
    img: "sanyaimage",
    opts: {
      series: ["501"],
	  loli: true
    }
  },
  {
    name: "Francesca Lucchini",
    img: "lucchiimage",
    opts: {
      series: ["501"],
	  loli: true
    }
  },
  {
    name: "Minna-Dietlinde Wilcke",
    img: "minnaimage",
    opts: {
      series: ["501"]
    }
  },
  {
    name: "Sakamoto Mio",
    img: "mioimage",
    opts: {
      series: ["501"]
    }
  },
  {
    name: "Eila Ilmatar Juutilainen",
    img: "eilaimage",
    opts: {
      series: ["501"]
    }
  },
  {
    name: "Charlotte E. Yeager",
    img: "shirleyimage",
    opts: {
      series: ["501"]
    }
  },
  {
    name: "Perrine H. Clostermann",
    img: "perrineimage",
    opts: {
      series: ["501"]
    }
  },
  //
  
  // 502nd:
  
  //
  {
    name: "Gundula Rall",
    img: "gundulaimage",
    opts: {
      series: ["502"]
    }
  },
  {
    name: "Aleksandra I. Pokryshkin",
    img: "sashaimage",
    opts: {
      series: ["502"]
    }
  },
  {
    name: "Waltrud Krupinski",
    img: "krupiimage",
    opts: {
      series: ["502"]
    }
  },
  {
    name: "Georgette Lemare",
    img: "georgetteimage",
    opts: {
      series: ["502"]
    }
  },
  {
    name: "Kanno Naoe",
    img: "georgetteimage",
    opts: {
      series: ["502"]
    }
  },
  {
    name: "Shimohara Sadako",
    img: "sadokoimage",
    opts: {
      series: ["502"]
    }
  },
  {
    name: "Edytha Rossmann",
    img: "rossmanimage",
    opts: {
      series: ["502"]
    }
  },
  {
    name: "Nikka Edvardine Katajainen",
    img: "nipaimage",
    opts: {
      series: ["502"]
    }
  },
  {
    name: "Karibuchi Hikari",
    img: "hikariimage",
    opts: {
      series: ["502"]
    }
  },
  {
    name: "Karibuchi Takami",
    img: "takamiimage",
    opts: {
      series: ["502"]
    }
  },
  //
  
  // 503rd:
  
  //
  
  
];
