"use client";

import WorkflowComponent from "../components/workflowComponent.jsx";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/FooterLegal.jsx";
import { useEffect } from "react";

function WorkflowPage() {
   useEffect(() => {
  setTimeout(() => window.scrollTo(0, 0), 0);
}, []);
  return (
    <div>
      <Navbar />
      <WorkflowComponent />
      <Footer />
    </div>
  );
}

export default WorkflowPage;
