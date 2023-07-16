import useDataStore from "@/store"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"
import { Doughnut } from "react-chartjs-2"

ChartJS.register(ArcElement, Tooltip, Legend)

/**
 * @framerIntrinsicWidth 200
 * @framerIntrinsicHeight 200
 *
 * @framerSupportedLayoutWidth fixed
 * @framerSupportedLayoutHeight fixed
 */
export default function DoughnutGraph() {
    const data = useDataStore((state) => state.data);

    const chartData = {
        labels: data.map(item => item.influencer),
        datasets: [
            {
                    // fill: "start",
                    // borderColor: "#E624CF",
                    // borderWidth: 8,
                label: "Impressões",
                data: data.map(item => Number.parseInt(item.impressions .replaceAll(".", ""))),

                backgroundColor: [
                    "#E624CF",
                    "#FF46E9",
                    "#FF6EEE",
                    "#FFA7F5",
                    "#FFCDF9",
                    "#FF6EEE",
                    "#FFA7F5",
                ],
                borderColor: [
                    "#E624CF",
                    "#FF6EEE",
                    "#FF6EEE",
                    "#FF6EEE",
                    "#FF6EEE",
                    "#FFCDF9",
                    "#FF6EEE",
                    "#FFA7F5",
                ],
                borderWidth: 1,
            },
        ],
    }

    return <Doughnut style={{ overflow: "hidden" }} data={chartData} />
}
