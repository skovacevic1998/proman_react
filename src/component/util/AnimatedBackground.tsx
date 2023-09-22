import React, { ReactNode, useEffect, useState } from "react";

interface AnimatedBackgroundProps {
  children: ReactNode;
  colors: string[];
  interval: number;
}

export const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({
  children,
  colors,
  interval,
}) => {
  const [backgroundColor, setBackgroundColor] = useState<string>(colors[0]);
  const [colorIndex, setColorIndex] = useState<number>(0);

  useEffect(() => {
    const backgroundInterval = setInterval(() => {
      const nextColorIndex = (colorIndex + 1) % colors.length;
      setBackgroundColor(colors[nextColorIndex]);
      setColorIndex(nextColorIndex);
    }, interval);

    return () => clearInterval(backgroundInterval);
  }, [colors, colorIndex, interval]);

  const backgroundStyle: React.CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor,
    zIndex: -1,
    transition: "background-color 2s ease-in-out", // Add a smooth transition effect
  };

  return <div style={backgroundStyle}>{children}</div>;
};
