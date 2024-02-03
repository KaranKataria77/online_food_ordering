import HomeFooter from "@/components/HomeFooter";
import HomeHeader from "@/components/HomeHeader";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section>
      <HomeHeader />
      {children}
      {/* <HomeFooter /> */}
    </section>
  );
};

export default Layout;
