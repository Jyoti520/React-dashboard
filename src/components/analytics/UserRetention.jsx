import { motion } from "framer-motion";
import React from "react";
import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
  ResponsiveContainer,
} from "recharts";
import ChartSection from "../commonComps/ChartSection";

function UserRetention() {
  const userRetentionData = [
    { day: "Week 1", retention: 90 },
    { day: "Week 2", retention: 75 },
    { day: "Week 3", retention: 65 },
    { day: "Week 4", retention: 53 },
    { day: "Week 5", retention: 47 },
    { day: "Week 6", retention: 38 },
    { day: "Week 7", retention: 35 },
    { day: "Week 8", retention: 30 },
  ];
  return (
    <ChartSection className="" title="user retention">
      <ResponsiveContainer width={"100%"} height={"100%"}>
        <LineChart data={userRetentionData}>
          <XAxis dataKey="day" stroke="#bcbcbc" />
          <YAxis stroke="#bcbcbc" />
          <Tooltip
            contentStyle={{
              backgroundColor: "rgba(31,41,55,0.8)",
              borderColor: "#888d84",
            }}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="retention"
            stroke="#14b8a6"
            strokeWidth={3}
            dot={{
              r: 4,
              fill: "#5eead4", // lighter teal
              strokeWidth: 0,
            }}
            activeDot={{
              r: 6,
              stroke: "#8b5cf6",
              strokeWidth: 2,
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartSection>
  );
}

export default UserRetention;
