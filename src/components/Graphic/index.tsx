import { ResponsiveBar } from "@nivo/bar";

const data = [
    {
        meses: "0",
        semAporte: 1000,
        comAporte: 1000,
    },
    {
        meses: "1",
        semAporte: 1000,
        comAporte: 1000,
    },
    {
        meses: "2",
        semAporte: 1000,
        comAporte: 1000,
    },
    {
        meses: "3",
        semAporte: 1000,
        comAporte: 1000,
    },
    {
        meses: "4",
        semAporte: 1000,
        comAporte: 1000,
    },
    {
        meses: "5",
        semAporte: 1000,
        comAporte: 1000,
    },
    {
        meses: "6",
        semAporte: 1000,
        comAporte: 1000,
    },
    {
        meses: "7",
        semAporte: 1000,
        comAporte: 1000,
    },
    {
        meses: "8",
        semAporte: 1000,
        comAporte: 1000,
    },
    {
        meses: "9",
        semAporte: 1000,
        comAporte: 1000,
    },
    {
        meses: "10",
        semAporte: 1000,
        comAporte: 1000,
    },
];

const MyResponsiveBar = ({ data }) => (
    <ResponsiveBar
        data={data}
        keys={["semAporte", "comAporte"]}
        indexBy="meses"
        margin={{ top: 50, right: 60, bottom: 80, left: 60 }}
        padding={0.3}
        valueScale={{ type: "linear" }}
        indexScale={{ type: "band", round: true }}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "Tempo (meses)",
            legendPosition: "middle",
            legendOffset: 32
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "Valor (R$)",
            legendPosition: "middle",
            legendOffset: -40
        }}
        legends={[
            {
                dataFrom: "keys",
                anchor: "bottom",
                direction: "row",
                justify: false,
                translateX: 200,
                translateY: 60,
                itemsSpacing: 2,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: "left-to-right",
                itemOpacity: 0.85,
                symbolSize: 20,
                effects: [
                    {
                        on: "hover",
                        style: {
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
        animate={true}
    />
);

export default function Graphic() {
    return (
        <div style={{ height: "40vh", width: "60vw" }}>
            <MyResponsiveBar data={data} />
        </div>
    );
}