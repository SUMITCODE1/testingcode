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
import { Box, Typography } from "@mui/material";

// Define the type of data each risk item should have
interface RiskData {
  name: string;
  Critical: number;
  High: number;
  Medium: number;
  Low: number;
}

interface Props {
  data: RiskData[]; // Accept data from parent
}

export default function RiskMonitoringByType({ data }: Props) {
  return (
    <Box
      sx={{
        p: 3,
        border: "1px solid #ddd",
        borderRadius: 2,
        bgcolor: "white",
      }}
    >
      <Typography variant="h6" gutterBottom>
        Open Risks by Type
      </Typography>
      <Typography variant="body2" color="text.secondary" gutterBottom>
        Breakdown by risk severity levels
      </Typography>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          layout="vertical"
          data={data}
          margin={{ top: 20, right: 30, left: 40, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" />
          <Tooltip />
          <Legend />

          {/* Stacked bars */}
          <Bar dataKey="Critical" stackId="a" fill="#0a2e8c" />
          <Bar dataKey="High" stackId="a" fill="#1976d2" />
          <Bar dataKey="Medium" stackId="a" fill="#42a5f5" />
          <Bar dataKey="Low" stackId="a" fill="#90caf9" />
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
}
