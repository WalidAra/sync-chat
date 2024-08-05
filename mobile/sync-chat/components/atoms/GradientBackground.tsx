import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const GradientBackground = ({ children }: { children: React.ReactNode }) => (
  <LinearGradient
    colors={["#6366f1", "#ec4899", "#a855f7"]} // Example gradient colors
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 2 }}
    style={{
      padding: 3,
      borderRadius: 50,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }} // Ensure padding and borderRadius are set correctly
  >
    {children}
  </LinearGradient>
);

export default GradientBackground;
