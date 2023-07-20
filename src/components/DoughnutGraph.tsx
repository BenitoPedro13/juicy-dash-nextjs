import useDataStore from "@/store";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import colorConvert from "color-convert";
import { HSL } from "color-convert/conversions";

ChartJS.register(ArcElement, Tooltip, Legend);




function generateShadesAndTints(mainColor: string, count: number): string[] {
  const [r, g, b] = colorConvert.hex.rgb(mainColor);
  const RGB = r + g + b;
  let max = Math.round(RGB / 38.25);
  if (max === 19) max = 20;

  const subVariations = [];

  for (let i = 10; i < max + 10; i++) {
    const f = i / max;
    const adjustedR = Math.min(Math.round(r * f), 255);
    const adjustedG = Math.min(Math.round(g * f), 255);
    const adjustedB = Math.min(Math.round(b * f), 255);

    const hexSubColor = colorConvert.rgb.hex([adjustedR, adjustedG, adjustedB]);
    subVariations.push(`#${hexSubColor}`);
  }

  max = 20 - max +10;
  for (let i = 10; i < max; i++) {
    const f = i / max;
    const adjustedR = Math.min(Math.round((255 - r) * f + r), 255);
    const adjustedG = Math.min(Math.round((255 - g) * f + g), 255);
    const adjustedB = Math.min(Math.round((255 - b) * f + b), 255);

    const hexSubColor = colorConvert.rgb.hex([adjustedR, adjustedG, adjustedB]);
    subVariations.push(`#${hexSubColor}`);
  }

  return subVariations;
}


export default function DoughnutGraph() {
  const { data } = useDataStore((state) => state.data);
  const { user } = useDataStore((state) => state.session);

  const mainColor = !user?.color ? '#FF77EF' : user.color; // Assuming user.color is the main color in hex format
  const subVariations = generateShadesAndTints(mainColor, data.length);

  const chartData = {
    labels: data.map((item) => item.influencer),
    datasets: [
      {
        label: "Impressões",
        data: data.map((item) => Number.parseInt(item.impressions.replaceAll(".", ""))),

        backgroundColor: subVariations,
        borderColor: subVariations,
        borderWidth: 1,
      },
    ],
  };

  return <Doughnut className="overflow-hidden max-w-[380px] max-h-[380px]" data={chartData} />;
}
