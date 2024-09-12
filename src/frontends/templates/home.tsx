"use client";
import React from "react";
import HeroSection from "@/frontends/fragments/home/heroSection";
import Sponsor from "@/frontends/fragments/home/sponsor";
import About from "@/frontends/fragments/home/about";
import Instructor from "@/frontends/fragments/home/instructure";
import Mentor from "@/frontends/fragments/home/mentor";
import Testimonial from "@/frontends/fragments/home/testimonial.";

const Home = () => {
  return (
    <div className="flex flex-col gap-4 bg-slate-900">
      <HeroSection />
      <Sponsor />
      <About />
      <Instructor />
      <Mentor />
      <Testimonial />
    </div>
  );
};

export default Home;
