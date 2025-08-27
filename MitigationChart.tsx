import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Card, CardContent, Typography } from "@mui/material";

interface ChartData {
  action: string;
  recommended: number;
  adopted: number;
}

const data: ChartData[] = [
  { action: "Express", recommended: 120, adopted: 110 },
  { action: "Alternate", recommended: 100, adopted: 88 },
  { action: "Release", recommended: 80, adopted: 77 },
  { action: "Rebalance", recommended: 60, adopted: 44 },
];

const MitigationChart: React.FC<ChartData> = () => {
  return (
    <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          ✅ Mitigation Actions: Recommended vs Adopted
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Analysis of bot recommendation adoption rates by action type
        </Typography>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data} margin={{ top: 20, right: 20, left: 0, bottom: 60 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="action" angle={-30} textAnchor="end" interval={0} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="recommended" fill="#4285F4" name="Recommended" />
            <Bar dataKey="adopted" fill="#34A853" name="Adopted" />
          </BarChart>
        </ResponsiveContainer>

        {/* Extra Summary */}
        <div style={{ marginTop: "12px", fontSize: "14px" }}>
          <span style={{ color: "#4285F4", fontWeight: "bold" }}>Express: 91% </span>{" "}
          <span style={{ color: "#4285F4", fontWeight: "bold" }}>Alternate: 88% </span>{" "}
          <span style={{ color: "#34A853", fontWeight: "bold" }}>Release: 96% </span>{" "}
          <span style={{ color: "red", fontWeight: "bold" }}>Rebalance: 73%</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default MitigationChart;
