// Components/ReasonCodeAnalysisChart.tsx
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";
import { Card, CardContent, Typography } from "@mui/material";

interface ChartData {
  name: string;
  botAccepted: number;
  plannerOverride: number;
}

interface Props {
  data: ChartData[];   // ✅ receive data from parent (Dashboard)
}

const ReasonCodeAnalysisChart: React.FC<Props> = ({ data }) => {
  return (
    <Card sx={{ p: 2, borderRadius: 3, boxShadow: 3 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Reason Code Analysis
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Bot recommendations vs planner overrides
        </Typography>

        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="botAccepted" stackId="a" fill="#2196f3" name="Bot Accepted" />
            <Bar dataKey="plannerOverride" stackId="a" fill="#f44336" name="Planner Override" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default ReasonCodeAnalysisChart;
