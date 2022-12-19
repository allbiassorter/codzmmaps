dataSetVersion = "2022-12-18"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Games",
    key: "games",
    tooltip: "Check this to restrict to certain games.",
    checked: false,
    sub: [
      {
        name: "Call of Duty: World at War",
        tooltip: "WAW",
        key: "WAW",
      },
      {
        name: "Call of Duty: Black Ops",
        tooltip: "BO1",
        key: "BO1",
      },
      {
        name: "Call of Duty: Black Ops II",
        tooltip: "BO2",
        key: "BO2",
      },
      {
        name: "Call of Duty: Advanced Warfare",
        tooltip: "AW",
        key: "AW",
      },
      {
        name: "Call of Duty: Black Ops 3",
        tooltip: "BO3",
        key: "BO3",
      },
      {
        name: "Call of Duty: Infinite Warfare",
        tooltip: "IW",
        key: "IW",
      },
      {
        name: "Call of Duty: WWII",
        tooltip: "WWII",
        key: "WWII",
      },
      {
        name: "Call of Duty: Black Ops 4",
        tooltip: "BO4",
        key: "BO4",
      },
      {
        name: "Call of Duty: Black Ops Cold War",
        tooltip: "BOCW",
        key: "BOCW",
      },
      {
        name: "Call of Duty: Vanguard",
        tooltip: "VG",
        key: "VG",
      },
    ],
  },
  {
    name: "Filter by DLCs",
    key: "dlc",
    tooltip: "Check this to filter out DLCs for certain games",
    checked: false,
    sub: [
      {
        name: "Non-DLCs",
        tooltip: "This will disable every maps that comes with the base game",
        key: "nondlc",
      },
      { name: "World at War DLCs", key: "wawdlc" },
      { name: "Black Ops 1 DLCs", key: "bo1dlc" },
      { name: "Black Ops 2 DLCs", key: "bo2dlc" },
      { name: "Black Ops 3 DLCs ", key: "bo3dlc" },
      {
        name: "Black Ops 3 ZC",
        tooltip: "This will only disable Zombies Chronicles",
        key: "bo3zc",
      },
      { name: "Infinite Warfare DLCs", key: "iwdlc" },
      { name: "WWII DLCs", key: "wwiidlc" },
      { name: "Black Ops 4 DLCs", key: "bo4dlc" },
    ],
  },
  {
    name: "Remove Dead Ops Arcade",
    key: "DOA",
    tooltip: "Check this to remove Dead Ops Arcade from the bias sorter",
    checked: false,
  },
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Nacht der Untoten",
    img: "f5OuZMv.png",
    opts: {
      games: ["WAW"],
      dlc: ["nondlc"],
    },
  },
  {
    name: "Zombie Verrückt",
    img: "w6rFZOt.png",
    opts: {
      games: ["WAW"],
      dlc: ["wawdlc"],
    },
  },
  {
    name: "Shi No Numa",
    img: "34i6I2Y.png",
    opts: {
      games: ["WAW"],
      dlc: ["wawdlc"],
    },
  },
  {
    name: "Der Riese",
    img: "u2oIYOx.png",
    opts: {
      games: ["WAW"],
      dlc: ["wawdlc"],
    },
  },
  {
    name: "Kino Der Toten",
    img: "ddCr8lG.png",
    opts: {
      games: ["BO1"],
      dlc: ["nondlc"],
    },
  },
  {
    name: "Five",
    img: "ONkLYEF.png",
    opts: {
      games: ["BO1"],
      dlc: ["nondlc"],
    },
  },
  {
    name: "Dead Ops Arcade 1",
    img: "tLV1mn9.png",
    opts: {
      games: ["BO1"],
      dlc: ["nondlc"],
      DOA: true,
    },
  },
  {
    name: "Ascension",
    img: "lnl6jyC.png",
    opts: {
      games: ["BO1"],
      dlc: ["bo1dlc"],
    },
  },
  {
    name: "Call of the Dead",
    img: "9JdvOcN.png",
    opts: {
      games: ["BO1"],
      dlc: ["bo1dlc"],
    },
  },
  {
    name: "Shangri-La",
    img: "YucW4Ys.png",
    opts: {
      games: ["BO1"],
      dlc: ["bo1dlc"],
    },
  },
  {
    name: "Moon",
    img: "ssdBwgq.png",
    opts: {
      games: ["BO1"],
      dlc: ["bo1dlc"],
    },
  },
  {
    name: "TranZit",
    img: "MgzqjFK.png",
    opts: {
      games: ["BO2"],
      dlc: ["nondlc"],
    },
  },
  {
    name: "Bus Depot",
    img: "ohmetZh.png",
    opts: {
      games: ["BO2"],
      dlc: ["nondlc"],
    },
  },
  {
    name: "Town",
    img: "aDIf0pN.png",
    opts: {
      games: ["BO2"],
      dlc: ["nondlc"],
    },
  },
  {
    name: "Farm",
    img: "2Pr8b2N.png",
    opts: {
      games: ["BO2"],
      dlc: ["nondlc"],
    },
  },
  {
    name: "Nuketown Zombies",
    img: "htOMdDQ.png",
    opts: {
      games: ["BO2"],
      dlc: ["bo2dlc"],
    },
  },
  {
    name: "Die Rise",
    img: "PrRPujP.png",
    opts: {
      games: ["BO2"],
      dlc: ["bo2dlc"],
    },
  },
  {
    name: "Mob of the Dead",
    img: "ze79bFC.png",
    opts: {
      games: ["BO2"],
      dlc: ["bo2dlc"],
    },
  },
  {
    name: "Buried",
    img: "WMjyRLJ.png",
    opts: {
      games: ["BO2"],
      dlc: ["bo2dlc"],
    },
  },
  {
    name: "Origins",
    img: "VT9mTGb.png",
    opts: {
      games: ["BO2"],
      dlc: ["bo2dlc"],
    },
  },
  {
    name: "Outbreak (Exo)",
    img: "rshnJPV.png",
    opts: {
      games: ["AW"],
    },
  },
  {
    name: "Burgertown",
    img: "qsceD4I.png",
    opts: {
      games: ["AW"],
    },
  },
  {
    name: "Carrier",
    img: "pLdMjQ3.png",
    opts: {
      games: ["AW"],
    },
  },
  {
    name: "Descent",
    img: "8DLUAPf.png",
    opts: {
      games: ["AW"],
    },
  },
  {
    name: "Shadows of Evil",
    img: "6KyhLqE.png",
    opts: {
      games: ["BO3"],
    },
  },
  {
    name: "Dead Ops Arcade 2: Cyber’s Avenging",
    img: "99w0Chm.png",
    opts: {
      games: ["BO3"],
      DOA: true,
    },
  },
  {
    name: "The Giant",
    img: "yqNfNje.png",
    opts: {
      games: ["BO3"],
      dlc: ["bo3dlc"],
    },
  },
  {
    name: "Der Eisendrache",
    img: "PrYzRcC.png",
    opts: {
      games: ["BO3"],
      dlc: ["bo3dlc"],
    },
  },
  {
    name: "Zetsubou No Shima",
    img: "ceo4DhK.png",
    opts: {
      games: ["BO3"],
      dlc: ["bo3dlc"],
    },
  },
  {
    name: "Gorod Krovi",
    img: "2YDuTk3.png",
    opts: {
      games: ["BO3"],
      dlc: ["bo3dlc"],
    },
  },
  {
    name: "Revelations",
    img: "3zo4VKV.png",
    opts: {
      games: ["BO3"],
      dlc: ["bo3dlc"],
    },
  },
  {
    name: "Nacht der Untoten (ZC)",
    img: "8TLXMST.png",
    opts: {
      games: ["BO3"],
      dlc: ["bo3zc"],
    },
  },
  {
    name: "Zombie Verrückt (ZC)",
    img: "IImsp7K.png",
    opts: {
      games: ["BO3"],
      dlc: ["bo3zc"],
    },
  },
  {
    name: "Shi No Numa (ZC)",
    img: "MZXJQq5.png",
    opts: {
      games: ["BO3"],
      dlc: ["bo3zc"],
    },
  },
  {
    name: "Kino Der Toten (ZC)",
    img: "aX4WIH8.png",
    opts: {
      games: ["BO3"],
      dlc: ["bo3zc"],
    },
  },
  {
    name: "Ascension (ZC)",
    img: "nPBvatH.png",
    opts: {
      ggames: ["BO3"],
      dlc: ["bo3zc"],
    },
  },
  {
    name: "Shangri-La (ZC)",
    img: "3pDRgvR.png",
    opts: {
      games: ["BO3"],
      dlc: ["bo3zc"],
    },
  },
  {
    name: "Moon (ZC)",
    img: "bV0DaN7.png",
    opts: {
      games: ["BO3"],
      dlc: ["bo3zc"],
    },
  },
  {
    name: "Origins (ZC)",
    img: "J11NjNj.png",
    opts: {
      games: ["BO3"],
      dlc: ["bo3zc"],
    },
  },
  {
    name: "Zombies in Spaceland",
    img: "4Ufced2.png",
    opts: {
      games: ["IW"],
    },
  },
  {
    name: "Rave in the Redwoods",
    img: "qGMjnYk.png",
    opts: {
      games: ["IW"],
      dlc: ["iwdlc"],
    },
  },
  {
    name: "Kochiya Sanae",
    img: "ATTRSWU.png",
    opts: {
      games: ["IW"],
      dlc: ["iwdlc"],
    },
  },
  {
    name: "Shaolin Shuffle",
    img: "nQ78Lz7.png",
    opts: {
      games: ["IW"],
      dlc: ["iwdlc"],
    },
  },
  {
    name: "Attack of the Radioactive Thing",
    img: "yJaD5ZV.png",
    opts: {
      games: ["IW"],
      dlc: ["iwdlc"],
    },
  },
  {
    name: "The Beast from Beyond",
    img: "xgAlECj.png",
    opts: {
      games: ["IW"],
      dlc: ["iwdlc"],
    },
  },
  {
    name: "The Final Reich",
    img: "tZLYivt.png",
    opts: {
      games: ["WWII"],
    },
  },
  {
    name: "Gröesten Haus",
    img: "VgJgaEf.png",
    opts: {
      games: ["WWII"],
    },
  },
  {
    name: "The Darkest Shore",
    img: "sqgJ2St.png",
    opts: {
      games: ["WWII"],
      dlc: ["wwiidlc"],
    },
  },
  {
    name: "The Shadowed Throne",
    img: "lkoAJod.png",
    opts: {
      games: ["WWII"],
      dlc: ["wwiidlc"],
    },
  },
  {
    name: "The Tortured Path",
    img: "tDO653L.png",
    opts: {
      games: ["WWII"],
      dlc: ["wwiidlc"],
    },
  },
  {
    name: "The Frozen Dawn",
    img: "dup7Nt6.png",
    opts: {
      games: ["WWII"],
      dlc: ["wwiidlc"],
    },
  },
  {
    name: "Voyage of Despair",
    img: "uQjbw1W.png",
    opts: {
      games: ["BO4"],
    },
  },
  {
    name: "IX",
    img: "DfdaXPW.png",
    opts: {
      games: ["BO4"],
    },
  },
  {
    name: "Blood of the Dead",
    img: "wVCcens.png",
    opts: {
      games: ["BO4"],
    },
  },
  {
    name: "Classified",
    img: "EpHQbiY.png",
    opts: {
      games: ["BO4"],
      dlc: ["bo4dlc"],
    },
  },
  {
    name: "Dead of the Night",
    img: "kJbv4dc.png",
    opts: {
      games: ["BO4"],
      dlc: ["bo4dlc"],
    },
  },
  {
    name: "Ancient Evil",
    img: "Fyn5yVx.png",
    opts: {
      games: ["BO4"],
      dlc: ["bo4dlc"],
    },
  },
  {
    name: "Alpha Omega",
    img: "39KYpvW.png",
    opts: {
      games: ["BO4"],
      dlc: ["bo4dlc"],
    },
  },
  {
    name: "Tag Der Toten",
    img: "5yihisu.png",
    opts: {
      games: ["BO4"],
      dlc: ["bo4dlc"],
    },
  },
  {
    name: "Die Maschine",
    img: "2ppPxny.png",
    opts: {
      games: ["BOCW"],
    },
  },
  {
    name: "Dead Ops Arcade 3",
    img: "zL4S8Mj.png",
    opts: {
      games: ["BOCW"],
      DOA: true,
    },
  },
  {
    name: "Firebase Z",
    img: "LgvoTaJ.png",
    opts: {
      games: ["BOCW"],
    },
  },
  {
    name: "Outbreak (Cold War)",
    img: "VbqXiB6.png",
    opts: {
      games: ["BOCW"],
    },
  },
  {
    name: "Mauer Der Toten",
    img: "OBqgP48.png",
    opts: {
      games: ["BOCW"],
    },
  },
  {
    name: "Forsaken",
    img: "sNw61ap.png",
    opts: {
      games: ["BOCW"],
    },
  },
  {
    name: "Der Anfang",
    img: "sLiqEBA.png",
    opts: {
      games: ["VG"],
    },
  },
  {
    name: "Terra Maledicta",
    img: "6jq6eh6.png",
    opts: {
      games: ["VG"],
    },
  },
  {
    name: "Shi No Numa (Vanguard)",
    img: "090hLPL.png",
    opts: {
      games: ["VG"],
    },
  },
  {
    name: "The Archon",
    img: "y0UXwFO.png",
    opts: {
      games: ["VG"],
    },
  },
];
