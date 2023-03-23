export const adminCard = [
  {
    key: 1,
    title: "This is option 1",
    description:
      "Card description with lots of great facts and interesting details.",
    link: "/",
  },
  {
    key: 2,
    title: "This is option 2",
    description:
      "Card description with lots of great facts and interesting details.",
    link: "/",
  },
  {
    key: 3,
    title: "This is option 3",
    description:
      "Card description with lots of great facts and interesting details.",
    link: "/",
  },
  {
    key: 4,
    title: "This is option 4",
    description:
      "Card description with lots of great facts and interesting details.",
    link: "/",
  },
];

export const wholesellerCard = [
  {
    key: 5,
    title: "This is option 1",
    description:
      "Card description with lots of great facts and interesting details.",
    link: "/",
  },
  {
    key: 6,
    title: "This is option 2",
    description:
      "Card description with lots of great facts and interesting details.",
    link: "/",
  },
  {
    key: 7,
    title: "This is option 3",
    description:
      "Card description with lots of great facts and interesting details.",
    link: "/",
  },
  {
    key: 8,
    title: "This is option 4",
    description:
      "Card description with lots of great facts and interesting details.",
    link: "/",
  },
];

export const retailerCard = [
  {
    key: 9,
    title: "This is option 1",
    description:
      "Card description with lots of great facts and interesting details.",
    link: "/",
  },
  {
    key: 10,
    title: "This is option 2",
    description:
      "Card description with lots of great facts and interesting details.",
    link: "/",
  },
  {
    key: 11,
    title: "This is option 3",
    description:
      "Card description with lots of great facts and interesting details.",
    link: "/",
  },
  {
    key: 12,
    title: "This is option 4",
    description:
      "Card description with lots of great facts and interesting details.",
    link: "/",
  },
];

const adminChartData = {
  options: {
    theme: {
      mode: "light",
      palette: "palette2",
      monochrome: {
        enabled: false,
        color: "#255aee",
        shadeTo: "dark",
        shadeIntensity: 0.65,
      },
    },
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
    },
  },
  series: [
    {
      name: "series-1",
      data: [30, 40, 45, 50, 49, 60, 70, 91],
    },
    {
      name: "series-2",
      data: [3, 4, 5, 54, 43, 65, 71, 111],
    },
  ],
};

export const adminChart = [
  {
    key: 13,
    options: adminChartData.options,
    series: adminChartData.series,
    type: "line",
    width: "500",
  },
  {
    key: 14,
    options: adminChartData.options,
    series: adminChartData.series,
    type: "bar",
    width: "500",
  },
];

const wholesellerChartData = {
  options: {
    theme: {
      mode: "light",
      palette: "palette2",
      monochrome: {
        enabled: false,
        color: "#255aee",
        shadeTo: "dark",
        shadeIntensity: 0.65,
      },
    },
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
    },
  },
  series: [
    {
      name: "series-1",
      data: [30, 40, 45, 50, 49, 60, 70, 91],
    },
    {
      name: "series-2",
      data: [3, 4, 5, 54, 43, 65, 71, 111],
    },
  ],
};

export const wholesellerChart = [
  {
    key: 15,
    options: wholesellerChartData.options,
    series: wholesellerChartData.series,
    type: "line",
    width: "500",
  },
  {
    key: 16,
    options: wholesellerChartData.options,
    series: wholesellerChartData.series,
    type: "bar",
    width: "500",
  },
];

const retailerChartData = {
  options: {
    theme: {
      mode: "light",
      palette: "palette2",
      monochrome: {
        enabled: false,
        color: "#255aee",
        shadeTo: "dark",
        shadeIntensity: 0.65,
      },
    },
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
    },
  },
  series: [
    {
      name: "series-1",
      data: [30, 40, 45, 50, 49, 60, 70, 91],
    },
    {
      name: "series-2",
      data: [3, 4, 5, 54, 43, 65, 71, 111],
    },
  ],
};

export const retailerChart = [
  {
    key: 17,
    options: retailerChartData.options,
    series: retailerChartData.series,
    type: "line",
    width: "500",
  },
  {
    key: 18,
    options: retailerChartData.options,
    series: retailerChartData.series,
    type: "bar",
    width: "500",
  },
];
