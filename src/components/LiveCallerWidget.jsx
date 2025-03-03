import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const LiveCallerWidget = () => {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("3 მარტი");
  const [phone, setPhone] = useState("");

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {/* Top Banner */}
      <Card
        sx={{
          backgroundColor: "#1E2A4A",
          color: "white",
          padding: 3,
          borderRadius: "12px",
          textAlign: "center",
          width: "90%",
          maxWidth: 400,
          mb: 2,
        }}
      >
        <Typography variant="h6" fontWeight="bold">
          გამარჯობა,
        </Typography>
        <Typography variant="body2">გჭირდებათ დახმარება? მოგვწერეთ!</Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#FFC107",
            color: "black",
            mt: 2,
            borderRadius: "20px",
            textTransform: "none",
          }}
          startIcon={<ChatBubbleOutlineIcon />}
        >
          ონლაინ ჩატი
        </Button>
      </Card>

      {/* Call Request Form */}
      <Card
        sx={{ width: "90%", maxWidth: 400, padding: 3, borderRadius: "12px" }}
      >
        <Typography variant="h6" gutterBottom>
          გადმორეკვის სერვისი
        </Typography>
        <Typography variant="body2" color="text.secondary">
          აირჩიეთ დღე და საათი როდესაც გსურთ კონსულტანტი დაგიკავშირდეთ.
        </Typography>

        {/* Date Selection */}
        <Typography sx={{ mt: 2 }}>თარიღი</Typography>
        <Select
          fullWidth
          value={date}
          onChange={(e) => setDate(e.target.value)}
          displayEmpty
          sx={{ mt: 1 }}
          IconComponent={ExpandMoreIcon}
          onClick={(e) => e.stopPropagation()} // Stop propagation
        >
          <MenuItem value={"3 მარტი"}>3 მარტი</MenuItem>
          <MenuItem value={"4 მარტი"}>4 მარტი</MenuItem>
          <MenuItem value={"5 მარტი"}>5 მარტი</MenuItem>
        </Select>

        {/* Time Selection */}
        <Typography sx={{ mt: 2 }}>საათი</Typography>
        <TextField
          fullWidth
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          sx={{ mt: 1 }}
        />

        {/* Phone Number */}
        <Typography sx={{ mt: 2 }}>თქვენი ნომერი</Typography>
        <Box display="flex" alignItems="center" mt={1}>
          
          <TextField
            fullWidth
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="555 12 34 56"
          />
        </Box>
      </Card>
    </Box>
  );
};

export default LiveCallerWidget;
