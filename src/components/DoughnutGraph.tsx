"use client"

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
export const data = {
    labels: [
        "Renan Keller",
        "Joãozinho",
        "Qual Rolê | Uberlândia",
        "Janelas de Ouro Preto",
        "Helo Teixeira",
        "Julia Zaneti",
        "Dicas São Sebastião",
        "Cola em Sampa",
    ],
    datasets: [
        {
            label: "Impressões",
            data: [308718, 252789, 0, 0, 4457, 6243, 0, 1854],
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
export default function DoughnutGraph() {
    return <Doughnut style={{ overflow: "hidden" }} data={data} />
}
