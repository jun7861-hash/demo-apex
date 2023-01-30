import Head from "next/head";
import dynamic from "next/dynamic";
const BrushChart = dynamic(() => import("@/components/brush-chart"), {
  ssr: false,
});
import MenuAppBar from "@/components/app-bar";

const options = {
  annotations: {
    yaxis: [
      {
        y: 263,
        borderColor: "#00E396",
        label: {
          borderColor: "#00E396",
          style: {
            color: "#fff",
            background: "#00E396",
          },
          text: "This is a test",
        },
      },
    ],
    xaxis: [
      {
        // in a datetime series, the x value should be a timestamp, just like it is generated below
        x: new Date("8/24/2022").getTime(),
        strokeDashArray: 0,
        borderColor: "#775DD0",
        label: {
          borderColor: "#775DD0",
          style: {
            color: "#fff",
            background: "#775DD0",
          },
          text: "This is a test 2",
        },
      },
      {
        x: new Date("11/24/2022").getTime(),
        borderColor: "#FEB019",
        label: {
          borderColor: "#FEB019",
          style: {
            color: "#fff",
            background: "#FEB019",
          },
          orientation: "horizontal",
          text: "This is a test 2",
        },
      },
    ],
    points: [
      {
        x: new Date("3 Jul 2022").getTime(),
        y: 8500.9,
        marker: {
          size: 6,
          fillColor: "#fff",
          strokeColor: "#2698FF",
          radius: 2,
        },
        label: {
          borderColor: "#FF4560",
          offsetY: 0,
          style: {
            color: "#fff",
            background: "#FF4560",
          },

          text: "Point Annotation (XY)",
        },
      },
    ],
  },
  chart: {
    id: "chart2",
    type: "line",
    height: 230,
    toolbar: {
      autoSelected: "pan",
      show: false,
    },
  },
  colors: ["#546E7A"],
  stroke: {
    width: 3,
  },
  dataLabels: {
    enabled: false,
  },
  fill: {
    opacity: 1,
  },
  markers: {
    size: 0,
  },
  yaxis: {
    labels: {
      formatter: function (value: string | number) {
        return `$${value}`;
      },
    },
  },
  xaxis: {
    type: "datetime",

    labels: {
      datetimeFormatter: {
        year: "yyyy",
        month: "MMM 'yy",
        day: "dd MMM",
        hour: "HH:mm",
      },
    },
  },
};

const optionsLine = {
  chart: {
    id: "chart1",
    height: 130,
    type: "area",
    brush: {
      target: "chart2",
      enabled: true,
    },
    selection: {
      enabled: true,
    },
  },
  colors: ["#008FFB"],
  fill: {
    type: "gradient",
    gradient: {
      opacityFrom: 0.91,
      opacityTo: 0.1,
    },
  },
  xaxis: {
    type: "datetime",
    tooltip: {
      enabled: false,
    },
    labels: {
      datetimeFormatter: {
        year: "yyyy",
        month: "MMM 'yy",
        day: "dd MMM",
        hour: "HH:mm",
      },
    },
  },
  yaxis: {
    labels: {
      formatter: (value: string | number) => {
        return `$${value}`;
      },
    },
    tickAmount: 2,
  },
};

const data = [
  ["08/01/2022", 667.63],
  ["08/02/2022", 759.74],
  ["08/03/2022", 523.82],
  ["08/04/2022", 405.1],
  ["08/05/2022", 31.28],
  ["08/06/2022", 238.42],
  ["08/07/2022", 357.07],
  ["08/08/2022", 191.66],
  ["08/09/2022", 644.8],
  ["08/10/2022", 570.47],
  ["08/11/2022", 437.0],
  ["08/12/2022", 597.6],
  ["08/13/2022", 579.37],
  ["08/14/2022", 798.47],
  ["08/15/2022", 466.12],
  ["08/16/2022", 210.66],
  ["08/17/2022", 930.64],
  ["08/18/2022", 92.71],
  ["08/19/2022", 809.46],
  ["08/20/2022", 641.59],
  ["08/21/2022", 607.07],
  ["08/22/2022", 229.2],
  ["08/23/2022", 236.81],
  ["08/24/2022", 69.03],
  ["08/25/2022", 311.86],
  ["08/26/2022", 708.39],
  ["08/27/2022", 288.99],
  ["08/28/2022", 697.52],
  ["08/29/2022", 135.18],
  ["08/30/2022", 554.91],
  ["08/31/2022", 378.81],
  ["09/01/2022", 272.94],
  ["09/02/2022", 37.96],
  ["09/03/2022", 85.37],
  ["09/04/2022", 179.85],
  ["09/05/2022", 749.63],
  ["09/06/2022", 778.93],
  ["09/07/2022", 835.15],
  ["09/08/2022", 204.99],
  ["09/09/2022", 310.18],
  ["09/10/2022", 513.23],
  ["09/11/2022", 394.0],
  ["09/12/2022", 731.08],
  ["09/13/2022", 201.3],
  ["09/14/2022", 374.18],
  ["09/15/2022", 116.59],
  ["09/16/2022", 387.75],
  ["09/17/2022", 268.33],
  ["09/18/2022", 838.69],
  ["09/19/2022", 546.08],
  ["09/20/2022", 795.39],
  ["09/21/2022", 645.99],
  ["09/22/2022", 572.73],
  ["09/23/2022", 916.92],
  ["09/24/2022", 611.16],
  ["09/25/2022", 794.59],
  ["09/26/2022", 754.69],
  ["09/27/2022", 288.01],
  ["09/28/2022", 221.66],
  ["09/29/2022", 958.36],
  ["09/30/2022", 582.5],
  ["10/01/2022", 697.84],
  ["10/02/2022", 107.17],
  ["10/03/2022", 166.81],
  ["10/04/2022", 785.05],
  ["10/05/2022", 230.4],
  ["10/06/2022", 594.47],
  ["10/07/2022", 99.98],
  ["10/08/2022", 478.23],
  ["10/09/2022", 34.2],
  ["10/10/2022", 314.27],
  ["10/11/2022", 495.04],
  ["10/12/2022", 633.4],
  ["10/13/2022", 145.9],
  ["10/14/2022", 183.85],
  ["10/15/2022", 284.27],
  ["10/16/2022", 758.65],
  ["10/17/2022", 436.21],
  ["10/18/2022", 146.73],
  ["10/19/2022", 323.48],
  ["10/20/2022", 132.57],
  ["10/21/2022", 117.61],
  ["10/22/2022", 218.66],
  ["10/23/2022", 395.18],
  ["10/24/2022", 75.87],
  ["10/25/2022", 31.86],
  ["10/26/2022", 612.8],
  ["10/27/2022", 152.02],
  ["10/28/2022", 297.82],
  ["10/29/2022", 369.76],
  ["10/30/2022", 846.7],
  ["10/31/2022", 804.09],
  ["11/01/2022", 312.6],
  ["11/02/2022", 566.52],
  ["11/03/2022", 770.15],
  ["11/04/2022", 647.15],
  ["11/05/2022", 284.67],
  ["11/06/2022", 863.0],
  ["11/07/2022", 394.99],
  ["11/08/2022", 979.53],
  ["11/09/2022", 433.25],
  ["11/10/2022", 426.78],
  ["11/11/2022", 256.81],
  ["11/12/2022", 561.56],
  ["11/13/2022", 302.09],
  ["11/14/2022", 986.04],
  ["11/15/2022", 793.43],
  ["11/16/2022", 534.16],
  ["11/17/2022", 784.46],
  ["11/18/2022", 645.57],
  ["11/19/2022", 885.85],
  ["11/20/2022", 632.22],
  ["11/21/2022", 781.86],
  ["11/22/2022", 925.97],
  ["11/23/2022", 275.14],
  ["11/24/2022", 603.66],
  ["11/25/2022", 770.99],
  ["11/26/2022", 95.53],
  ["11/27/2022", 42.15],
  ["11/28/2022", 976.19],
  ["11/29/2022", 354.92],
  ["11/30/2022", 548.99],
  ["12/01/2022", 716.73],
  ["12/02/2022", 701.98],
  ["12/03/2022", 82.67],
  ["12/04/2022", 327.74],
  ["12/05/2022", 869.57],
  ["12/06/2022", 753.89],
  ["12/07/2022", 435.4],
  ["12/08/2022", 873.86],
  ["12/09/2022", 231.82],
  ["12/10/2022", 447.49],
  ["12/11/2022", 898.22],
  ["12/12/2022", 762.8],
  ["12/13/2022", 486.6],
  ["12/14/2022", 119.3],
  ["12/15/2022", 463.14],
  ["12/16/2022", 469.9],
  ["12/17/2022", 881.07],
  ["12/18/2022", 804.56],
  ["12/19/2022", 741.74],
  ["12/20/2022", 191.26],
  ["12/21/2022", 719.11],
  ["12/22/2022", 726.58],
  ["12/23/2022", 105.57],
  ["12/24/2022", 361.65],
  ["12/25/2022", 612.02],
  ["12/26/2022", 735.15],
  ["12/27/2022", 917.56],
  ["12/28/2022", 790.58],
  ["12/29/2022", 88.09],
  ["12/30/2022", 312.71],
  ["12/31/2022", 969.6],
  ["01/01/2023", 272.2],
  ["01/02/2023", 792.0],
  ["01/03/2023", 404.88],
  ["01/04/2023", 699.44],
  ["01/05/2023", 115.35],
  ["01/06/2023", 41.03],
  ["01/07/2023", 125.67],
  ["01/08/2023", 624.4],
  ["01/09/2023", 287.32],
  ["01/10/2023", 947.41],
  ["01/11/2023", 338.14],
  ["01/12/2023", 699.62],
  ["01/13/2023", 768.21],
  ["01/14/2023", 664.93],
  ["01/15/2023", 217.57],
  ["01/16/2023", 985.77],
  ["01/17/2023", 272.21],
  ["01/18/2023", 572.6],
  ["01/19/2023", 166.77],
  ["01/20/2023", 93.68],
  ["01/21/2023", 708.09],
  ["01/22/2023", 369.41],
  ["01/23/2023", 872.52],
  ["01/24/2023", 362.97],
  ["01/25/2023", 623.12],
  ["01/26/2023", 121.72],
  ["01/27/2023", 866.81],
  ["01/28/2023", 627.05],
  ["01/29/2023", 403.13],
  ["01/30/2023", 278.11],
  ["01/31/2023", 688.46],
];

const state: any = {
  series: [
    {
      data: data,
    },
  ],
  options: {
    annotations: {
      yaxis: [
        {
          y: 263,
          borderColor: "#00E396",
          label: {
            borderColor: "#00E396",
            style: {
              color: "#fff",
              background: "#00E396",
            },
            text: "This is a test",
          },
        },
      ],
      xaxis: [
        {
          // in a datetime series, the x value should be a timestamp, just like it is generated below
          x: new Date("8/24/2022").getTime(),
          strokeDashArray: 0,
          borderColor: "#775DD0",
          label: {
            borderColor: "#775DD0",
            style: {
              color: "#fff",
              background: "#775DD0",
            },
            text: "This is a test 2",
          },
        },
        {
          x: new Date("11/24/2022").getTime(),
          borderColor: "#FEB019",
          label: {
            borderColor: "#FEB019",
            style: {
              color: "#fff",
              background: "#FEB019",
            },
            orientation: "horizontal",
            text: "This is a test 2",
          },
        },
      ],
      points: [
        {
          x: new Date("3 Jul 2022").getTime(),
          y: 8500.9,
          marker: {
            size: 6,
            fillColor: "#fff",
            strokeColor: "#2698FF",
            radius: 2,
          },
          label: {
            borderColor: "#FF4560",
            offsetY: 0,
            style: {
              color: "#fff",
              background: "#FF4560",
            },

            text: "Point Annotation (XY)",
          },
        },
      ],
    },
    chart: {
      id: "chart2",
      type: "line",
      height: 230,
      toolbar: {
        autoSelected: "pan",
        show: false,
      },
    },
    colors: ["#546E7A"],
    stroke: {
      width: 3,
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      opacity: 1,
    },
    markers: {
      size: 0,
    },
    yaxis: {
      labels: {
        formatter: (value: string | number) => {
          return `$${value}`;
        },
      },
    },
    xaxis: {
      type: "datetime",

      labels: {
        datetimeFormatter: {
          year: "yyyy",
          month: "MMM 'yy",
          day: "dd MMM",
          hour: "HH:mm",
        },
      },
    },
  },

  seriesLine: [
    {
      data: data,
    },
  ],
  optionsLine: {
    chart: {
      id: "chart1",
      height: 130,
      brush: {
        target: "chart2",
        enabled: true,
      },
      selection: {
        enabled: true,
        xaxis: {
          min: new Date("19 Jun 2017").getTime(),
          max: new Date("14 Aug 2017").getTime(),
        },
      },
    },
    colors: ["#008FFB"],
    fill: {
      type: "gradient",
      gradient: {
        opacityFrom: 0.91,
        opacityTo: 0.1,
      },
    },
    xaxis: {
      type: "datetime",
      tooltip: {
        enabled: false,
      },
    },
    yaxis: {
      tickAmount: 2,
    },
  },
};
export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav>
        <MenuAppBar />
      </nav>
      <main>
        <BrushChart options={options} optionsLine={optionsLine} state={state} />
      </main>
    </>
  );
}
