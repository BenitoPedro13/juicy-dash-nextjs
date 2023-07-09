"use client"

import React, { useEffect, useRef, useState } from "react"
import { Line } from "react-chartjs-2"
import {
    Chart as ChartJS,
    ArcElement,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from "chart.js"

ChartJS.register(
    ArcElement,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
)

const chartData = {
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
            label: "Interações",
            data: [9404, 40315, 0, 0, 180, 277, 0, 32],
            fill: "start",
            borderColor: "#E624CF",
            borderWidth: 8,
        },
    ],
}

const css = `.chartContainer::-webkit-scrollbar {
                    display: none;
                    -ms-overflow-style: none;  /* IE and Edge */
                    scrollbar-width: none;  /* Firefox */
                }`

export default function LineGraph() {
    const chartRef = useRef(null)

    const chartOptions = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            background: {
                color: "black",
            },
        },
        elements: {
            point: {
                borderWidth: 0,
                radius: 0,
                backgroundColor: "rgba(0,0,0,0)",
            },
            line: {
                tension: 0.4, // controle da curva das linhas
            },
        },
        interaction: {
            mode: "nearest",
            axis: "x",
            intersect: false,
        },
        scales: {
            y: {
                grid: {
                    color: "rgba(255, 255,255, 0.2)",
                    borderColor: "grey",
                    drawTicks: false,
                },
                border: {
                    dash: [6, 4],
                },
                ticks: {
                    padding: 24,
                    maxTicksLimit: 6,
                },
            },
            x: {
                grid: {
                    color: "rgba(255, 255,255, 0)",
                    borderColor: "transparent",
                    drawTicks: false,
                },
                ticks: {
                    padding: 12,
                    align: "inner",
                },
            },
        },
    }

    useEffect(() => {
        const chartInstance = chartRef.current as any
        if (chartInstance) {
            const { chartArea, ctx } = chartInstance as any
            const chartBackgroundColor = "rgba(255,205,249"

            if (chartArea) {
                const gradient = ctx?.createLinearGradient(
                    0,
                    chartArea.bottom,
                    0,
                    chartArea.top
                )
                gradient.addColorStop(0, chartBackgroundColor + ", 0)")
                gradient.addColorStop(0.5, chartBackgroundColor + ", 0.4)")
                gradient.addColorStop(1, chartBackgroundColor + ", 1)")

                chartInstance.data.datasets.forEach((dataset: any) => {
                    dataset.backgroundColor = gradient
                })
                chartInstance.update()
            }
        }
    }, [])

    return (
        <>
            <div style={{ display: "grid" }} className="w-full">
                <div
                    className="chartContainer"
                    style={{
                        position: "relative",
                        minHeight: "240px",
                        maxHeight: "240px",
                        overflowX: "auto",
                        width: "100%",
                    }}
                >
                    <Line
                        ref={chartRef}
                        id="chart-1"
                        data={chartData}
                        options={{
                            ...chartOptions,
                            maintainAspectRatio: false,
                        } as any}
                    />
                </div>
            </div>
            <style>{css}</style>
        </>
    )
}
