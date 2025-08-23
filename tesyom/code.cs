/// risk info



import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";

interface Props {
  data: {
    productName: string;
    mrdr: string;
    riskId: string;
    brand: string;
    expectedLoss: number;
  };
}

const RiskInfo: React.FC<Props> = ({ data }) => {
  return (
    <Card
      sx={{
        borderRadius: 2,
        boxShadow: 3,
        mb: 3,
        backgroundColor: "white"
      }}
    >
      <CardContent>
        <Typography variant="h6" color="primary" gutterBottom>
          {data.productName}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          MRDR: {data.mrdr} | Risk ID: {data.riskId} | Brand: {data.brand}
        </Typography>

        <Box display="flex" justifyContent="flex-end" mt={2}>
          <Typography variant="h5" fontWeight="bold" color="primary">
            {data.expectedLoss.toLocaleString()}{" "}
            <Typography component="span" variant="caption" color="text.secondary">
              Expected Loss Volume
            </Typography>
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};






//////


import React from "react";
import { Typography, Box } from "@mui/material";
import MitigationCard from "./MitigationCard";

interface Props {
  items: {
    title: string;
    description: string;
    confidence: number;
    poc: { name: string; role: string };
  }[];
}

const MitigationList: React.FC<Props> = ({ items }) => {
  return (
    <Box sx={{ mt: 2 }}>
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        Recommended Mitigation Actions
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",          // 1 per row on mobile
            sm: "1fr 1fr",      // 2 per row on tablet
            md: "1fr 1fr 1fr",  // 3 per row on desktop
          },
          gap: 2,
        }}
      >
        {items.map((item, idx) => (
          <Box key={idx}>
            <MitigationCard {...item} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default MitigationList;

export default RiskInfo;
