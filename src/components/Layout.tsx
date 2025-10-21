import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Ticker from "./Ticker";
import AnimatedBackground from "./AnimatedBackground";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <AnimatedBackground />
      <Header />
      <main className="relative z-10 pb-16">{children}</main>
      <Ticker />
      <Footer />
    </div>
  );
};

export default Layout;
