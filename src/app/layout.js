import { Onest } from "next/font/google";
import "../styles/globals.scss";

// Initialize the Onest font
const onest = Onest({ subsets: ["latin"] });

export const metadata = {
  title: "Health and Wellness Website | Task",
  description: "Created by Next.js and SCSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={onest.className}>{children}</body>
    </html>
  );
}
