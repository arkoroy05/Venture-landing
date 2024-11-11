"use client"
import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { HoverEffect } from './ui/card-hover-effect'
import HyperText from './ui/hyper-text'

export default function Working() {
  return (
    <div className='h-[40rem] w-full relative'>
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '50%',
          background: 'linear-gradient(to bottom, transparent, black)',
          zIndex: 10,
        }}
      ></div>

      <HyperText
      className=" md:text-6xl ml-11 font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50"
      text="features"
      ></HyperText>

      <div>
        <HoverEffect items={desc}></HoverEffect>
      </div>
    </div>
  )
}

export const desc = [
  {
    title: "Weekly Pitch Platform",
    description:
      "Offers aspiring entrepreneurs a consistent weekly schedule to pitch their ideas, fostering a dynamic space for ongoing innovation and engagement.",
    link : "/"
  },
  {
    title: "Community-Driven Validation",
    description:
      "Provides a democratic, Reddit-like voting system where the community decides which ideas have the most potential, giving instant feedback on idea viability.",
    link : "/a"
  },
  {
    title: "Real-Time Feedback Loop",
    description:
      "Allows users to refine and improve their pitches throughout the week based on community responses, enhancing learning and improving idea quality.",
    link : "/b"
  },
  {
    title: "Exclusive Access to Industry Experts",
    description:
      "Winners get a unique opportunity to gain mentorship from experienced industry professionals every Sunday, bridging the gap between ideas and actionable insights.",
    link : "/c"
  },
  {
    title: "Exposure to Targeted Audiences",
    description:
      "With community-focused pitching, users receive exposure to audiences genuinely interested in their field, increasing the likelihood of finding collaborators or investors.",
    link : "/d"
  },
  {
    title: "Idea Validation and Growth Potential",
    description:
      "By regularly winning community support and expert attention, ideas are pre-validated, which can make them more attractive for further funding or development.",
    link : "/e"
  },
];
