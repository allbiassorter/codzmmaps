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
      {
        name: "Call of Duty: Modern Warfare III",
        tooltip: "MWIII",
        key: "MWIII",
      },
      {
        name: "Call of Duty: Black Ops 6",
        tooltip: "BO6",
        key: "BO6",
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
      {
        name: "Black Ops 1 WAW DLCs",
        tooltip:
          "Keep this enabled if you want the World at War maps on Black Ops 1",
        key: "bo1waw",
      },
      { name: "Black Ops 2 DLCs", key: "bo2dlc" },
      {
        name: "Advanced Warfare DLCs",
        tooltip:
          "Keep this enabled if you want Exo-Zombies maps in your sorter",
        key: "awdlc",
      },
      { name: "Black Ops 3 DLCs ", key: "bo3dlc" },
      {
        name: "Black Ops 3 ZC",
        tooltip:
          "Keep this enabled if you want Zombies Chronicles in your sorter",
        key: "bo3zc",
      },
      { name: "Infinite Warfare DLCs", key: "iwdlc" },
      { name: "WWII DLCs", key: "wwiidlc" },
      { name: "Black Ops 4 DLCs", key: "bo4dlc" },
      {
        name: "Black Ops Cold War DLCs",
        tooltip:
          "Keep this enabled if you want the Seasons maps (FBZ-Forsaken) in your sorter",
        key: "cwdlc",
      },
      {
        name: "Vanguard DLCs",
        tooltip:
          "Keep this enabled if you want the Seasons maps (Terra-Archon) in your sorter",
        key: "vgdlc",
      },
      {
        name: "Black Ops 6 DLCs",
        tooltip:
          "Keep this enabled if you want the Seasons maps in your sorter",
        key: "bo6dlc",
      },
    ],
  },
  {
    name: "Remove Dead Ops Arcade",
    key: "DOA",
    tooltip: "Check this to remove Dead Ops Arcade from the bias sorter",
    checked: false,
  },
  {
    name: "Remove Non-Round Based Maps",
    key: "NRB",
    tooltip: "Check this to remove Non-Round Based Maps from the bias sorter",
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
    name: "Nacht der Untoten (BO1)",
    img: "kx5GMnq.png",
    opts: {
      games: ["BO1"],
      dlc: ["bo1waw"],
    },
  },
  {
    name: "Verrückt (BO1)",
    img: "roWjvm5.png",
    opts: {
      games: ["BO1"],
      dlc: ["bo1waw"],
    },
  },
  {
    name: "Shi No Numa (BO1)",
    img: "MuGJt6x.png",
    opts: {
      games: ["BO1"],
      dlc: ["bo1waw"],
    },
  },
  {
    name: "Der Riese (BO1)",
    img: "SPJTCQd.png",
    opts: {
      games: ["BO1"],
      dlc: ["bo1waw"],
    },
  },
  {
    name: "TranZit",
    img: "k94nVLk.png",
    opts: {
      games: ["BO2"],
      dlc: ["nondlc"],
    },
  },
  {
    name: "Bus Depot",
    img: "0tmf0e8.png",
    opts: {
      games: ["BO2"],
      dlc: ["nondlc"],
    },
  },
  {
    name: "Town",
    img: "3I4wYS9.png",
    opts: {
      games: ["BO2"],
      dlc: ["nondlc"],
    },
  },
  {
    name: "Farm",
    img: "9GqQcJ0.png",
    opts: {
      games: ["BO2"],
      dlc: ["nondlc"],
    },
  },
  {
    name: "Nuketown Zombies",
    img: "Q6IfATf.png",
    opts: {
      games: ["BO2"],
      dlc: ["bo2dlc"],
    },
  },
  {
    name: "Die Rise",
    img: "Gnn7PnY.png",
    opts: {
      games: ["BO2"],
      dlc: ["bo2dlc"],
    },
  },
  {
    name: "Mob of the Dead",
    img: "uSHJ110.png",
    opts: {
      games: ["BO2"],
      dlc: ["bo2dlc"],
    },
  },
  {
    name: "Buried",
    img: "BwSaP54.png",
    opts: {
      games: ["BO2"],
      dlc: ["bo2dlc"],
    },
  },
  {
    name: "Origins",
    img: "5JiENNE.png",
    opts: {
      games: ["BO2"],
      dlc: ["bo2dlc"],
    },
  },
  {
    name: "Outbreak (Exo)",
    img: "4ti2cOL.png",
    opts: {
      games: ["AW"],
      dlc: ["awdlc"],
    },
  },
  {
    name: "Infection",
    img: "dfC4snq.png",
    opts: {
      games: ["AW"],
      dlc: ["awdlc"],
    },
  },
  {
    name: "Carrier",
    img: "3xdION4.png",
    opts: {
      games: ["AW"],
      dlc: ["awdlc"],
    },
  },
  {
    name: "Descent",
    img: "M1TSi7S.png",
    opts: {
      games: ["AW"],
      dlc: ["awdlc"],
    },
  },
  {
    name: "Shadows of Evil",
    img: "DrQdHIj.png",
    opts: {
      games: ["BO3"],
      dlc: ["nondlc"],
    },
  },
  {
    name: "Dead Ops Arcade 2",
    img: "GyTcxJr.png",
    opts: {
      games: ["BO3"],
      dlc: ["nondlc"],
      DOA: true,
    },
  },
  {
    name: "The Giant",
    img: "i0OgZ5h.png",
    opts: {
      games: ["BO3"],
      dlc: ["bo3dlc"],
    },
  },
  {
    name: "Der Eisendrache",
    img: "rrCYmxE.png",
    opts: {
      games: ["BO3"],
      dlc: ["bo3dlc"],
    },
  },
  {
    name: "Zetsubou No Shima",
    img: "OVlPD6t.png",
    opts: {
      games: ["BO3"],
      dlc: ["bo3dlc"],
    },
  },
  {
    name: "Gorod Krovi",
    img: "V5YobIG.png",
    opts: {
      games: ["BO3"],
      dlc: ["bo3dlc"],
    },
  },
  {
    name: "Revelations",
    img: "f2XJnvu.png",
    opts: {
      games: ["BO3"],
      dlc: ["bo3dlc"],
    },
  },
  {
    name: "Nacht der Untoten (ZC)",
    img: "f5OuZMv.png",
    opts: {
      games: ["BO3"],
      dlc: ["bo3zc"],
    },
  },
  {
    name: "Zombie Verrückt (ZC)",
    img: "w6rFZOt.png",
    opts: {
      games: ["BO3"],
      dlc: ["bo3zc"],
    },
  },
  {
    name: "Shi No Numa (ZC)",
    img: "34i6I2Y.png",
    opts: {
      games: ["BO3"],
      dlc: ["bo3zc"],
    },
  },
  {
    name: "Kino Der Toten (ZC)",
    img: "ddCr8lG.png",
    opts: {
      games: ["BO3"],
      dlc: ["bo3zc"],
    },
  },
  {
    name: "Ascension (ZC)",
    img: "lnl6jyC.png",
    opts: {
      games: ["BO3"],
      dlc: ["bo3zc"],
    },
  },
  {
    name: "Shangri-La (ZC)",
    img: "YucW4Ys.png",
    opts: {
      games: ["BO3"],
      dlc: ["bo3zc"],
    },
  },
  {
    name: "Moon (ZC)",
    img: "ssdBwgq.png",
    opts: {
      games: ["BO3"],
      dlc: ["bo3zc"],
    },
  },
  {
    name: "Origins (ZC)",
    img: "9ptFu9A.png",
    opts: {
      games: ["BO3"],
      dlc: ["bo3zc"],
    },
  },
  {
    name: "Zombies in Spaceland",
    img: "tqqHqOs.png",
    opts: {
      games: ["IW"],
      dlc: ["nondlc"],
    },
  },
  {
    name: "Rave in the Redwoods",
    img: "I9wNR4B.png",
    opts: {
      games: ["IW"],
      dlc: ["iwdlc"],
    },
  },
  {
    name: "Shaolin Shuffle",
    img: "w7WsCdp.png",
    opts: {
      games: ["IW"],
      dlc: ["iwdlc"],
    },
  },
  {
    name: "Attack of the Radioactive Thing",
    img: "J0aPH8k.png",
    opts: {
      games: ["IW"],
      dlc: ["iwdlc"],
    },
  },
  {
    name: "The Beast from Beyond",
    img: "MJOAPzA.png",
    opts: {
      games: ["IW"],
      dlc: ["iwdlc"],
    },
  },
  {
    name: "The Final Reich",
    img: "3tvLQRX.png",
    opts: {
      games: ["WWII"],
      dlc: ["nondlc"],
    },
  },
  {
    name: "Gröesten Haus",
    img: "GQsE6Xh.png",
    opts: {
      games: ["WWII"],
      dlc: ["nondlc"],
    },
  },
  {
    name: "The Darkest Shore",
    img: "DBKUB6G.png",
    opts: {
      games: ["WWII"],
      dlc: ["wwiidlc"],
    },
  },
  {
    name: "The Shadowed Throne",
    img: "zlY4Cz4.png",
    opts: {
      games: ["WWII"],
      dlc: ["wwiidlc"],
    },
  },
  {
    name: "The Tortured Path",
    img: "BLPPIJW.png",
    opts: {
      games: ["WWII"],
      dlc: ["wwiidlc"],
    },
  },
  {
    name: "The Frozen Dawn",
    img: "6vrwYpu.png",
    opts: {
      games: ["WWII"],
      dlc: ["wwiidlc"],
    },
  },
  {
    name: "Voyage of Despair",
    img: "LOQFcDq.png",
    opts: {
      games: ["BO4"],
      dlc: ["nondlc"],
    },
  },
  {
    name: "IX",
    img: "JrZajYU.png",
    opts: {
      games: ["BO4"],
      dlc: ["nondlc"],
    },
  },
  {
    name: "Blood of the Dead",
    img: "emc41pY.png",
    opts: {
      games: ["BO4"],
      dlc: ["nondlc"],
    },
  },
  {
    name: "Classified",
    img: "WJRu2PK.png",
    opts: {
      games: ["BO4"],
      dlc: ["bo4dlc"],
    },
  },
  {
    name: "Dead of the Night",
    img: "j3umEnF.png",
    opts: {
      games: ["BO4"],
      dlc: ["bo4dlc"],
    },
  },
  {
    name: "Ancient Evil",
    img: "thvxdcG.png",
    opts: {
      games: ["BO4"],
      dlc: ["bo4dlc"],
    },
  },
  {
    name: "Alpha Omega",
    img: "mVFMl12.png",
    opts: {
      games: ["BO4"],
      dlc: ["bo4dlc"],
    },
  },
  {
    name: "Tag Der Toten",
    img: "tn1pQDT.png",
    opts: {
      games: ["BO4"],
      dlc: ["bo4dlc"],
    },
  },
  {
    name: "Die Maschine",
    img: "XZYyg1S.png",
    opts: {
      games: ["BOCW"],
      dlc: ["nondlc"],
    },
  },
  {
    name: "Dead Ops Arcade 3",
    img: "0c0eMsy.png",
    opts: {
      games: ["BOCW"],
      dlc: ["nondlc"],
      DOA: true,
    },
  },
  {
    name: "Firebase Z",
    img: "tgMBhPm.png",
    opts: {
      games: ["BOCW"],
      dlc: ["cwdlc"],
    },
  },
  {
    name: "Outbreak (Cold War)",
    img: "QxF56OX.png",
    opts: {
      games: ["BOCW"],
      dlc: ["cwdlc"],
      NRB: true,
    },
  },
  {
    name: "Mauer Der Toten",
    img: "qr2VzcO.png",
    opts: {
      games: ["BOCW"],
      dlc: ["cwdlc"],
    },
  },
  {
    name: "Forsaken",
    img: "IAkR2Ko.png",
    opts: {
      games: ["BOCW"],
      dlc: ["cwdlc"],
    },
  },
  {
    name: "Der Anfang",
    img: "h0AoJpi.png",
    opts: {
      games: ["VG"],
      dlc: ["nondlc"],
      NRB: true,
    },
  },
  {
    name: "Terra Maledicta",
    img: "ekwE13B.png",
    opts: {
      games: ["VG"],
      dlc: ["vgdlc"],
      NRB: true,
    },
  },
  {
    name: "Shi No Numa (Vanguard)",
    img: "LX0Azrm.png",
    opts: {
      games: ["VG"],
      dlc: ["vgdlc"],
    },
  },
  {
    name: "The Archon",
    img: "ziRbisb.png",
    opts: {
      games: ["VG"],
      dlc: ["vgdlc"],
    },
  },
  {
    name: "Urzikstan",
    img: "NDByCkv.png",
    opts: {
      games: ["MWIII"],
      dlc: ["nondlc"],
      NRB: true,
    },
  },
  {
    name: "Terminus",
    img: "PqMzrxi.png",
    opts: {
      games: ["BO6"],
      dlc: ["nondlc"],
    },
  },
  {
    name: "Liberty Falls",
    img: "oFj9BsR.png",
    opts: {
      games: ["BO6"],
      dlc: ["nondlc"],
    },
  },
];
