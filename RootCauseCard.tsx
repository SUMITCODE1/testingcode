import React from "react";
import { Card, CardContent, Typography, Box, LinearProgress } from "@mui/material";
import { BarChart } from "@mui/icons-material";

interface RootCause {
  label: string;
  value: number;
}

interface RootCauseCardProps {
  title: string;
  data: RootCause[];
}

const RootCauseCard: React.FC<RootCauseCardProps> = ({ title, data }) => {
  // Find max value to normalize bars
  const maxValue = Math.max(...data.map(item => item.value));

  return (
    <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
      <CardContent>
        {/* Title with Icon */}
        <Box display="flex" alignItems="center" gap={1} mb={2}>
          <BarChart color="error" />
          <Typography variant="h6" fontWeight="bold">
            {title}
          </Typography>
        </Box>

        {/* List Items */}
        {data.map((item, idx) => (
          <Box key={idx} mb={2}>
            <Box display="flex" justifyContent="space-between" mb={0.5}>
              <Typography variant="body2">{item.label}</Typography>
              <Typography variant="body2" fontWeight="bold">{item.value}</Typography>
            </Box>
            <LinearProgress
              variant="determinate"
              value={(item.value / maxValue) * 100}
              sx={{
                height: 8,
                borderRadius: 5,
                backgroundColor: "#f0f0f0",
                "& .MuiLinearProgress-bar": {
                  backgroundColor: "#f97316" // orange
                }
              }}
            />
          </Box>
        ))}
      </CardContent>
    </Card>
  );
};

export default RootCauseCard;
