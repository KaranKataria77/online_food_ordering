import HomeFooter from "@/components/HomeFooter";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section>
      {children}
      <HomeFooter />
    </section>
  );
};

export default Layout;
