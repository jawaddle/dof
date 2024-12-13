"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import React from "react";
// import { ThemeProviderProps } from "next-themes/dist/types";
// above line not working so used below line as alternative
type ThemeProviderProps = React.ComponentProps<typeof NextThemesProvider>;

const ThemeProvider = ({ children, ...props }: ThemeProviderProps) => {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
};

export default ThemeProvider;
