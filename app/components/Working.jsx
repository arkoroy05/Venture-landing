"use client"
import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { HoverEffect } from './ui/card-hover-effect'
import HyperText from './ui/hyper-text'

export default function Working() {
  return (
    <div className='h-[40rem] w-full relative'>
      {/* Gradient overlay at the bottom */}
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
      className=" md:text-7xl ml-11 font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50"
      text="Workings"
      ></HyperText>

      <div>
        <HoverEffect items={desc}></HoverEffect>
      </div>
    </div>
  )
}

export const desc = [
  {
    title: "Pitch your ideas to the community",
    description:
      "Pitching your ideas has never been easier, express your ideas as if writing a blog",
    link : "/"
  },
  {
    title: "Let the community vote",
    description:
      "If your ideas appeal to the community, they can upvote it , more upvotes means more reach",
    link : "/a"
  },
  {
    title: "Voting closes at the end of the week",
    description:
      "At exactly 11:59pm on Friday , voting closes. Top 3 posts from each category gets reviewed manually and selected",
    link : "/b"
  },
  {
    title: "Results on Saturday",
    description:
      "Winners are announced on Saturday",
    link : "/c"
  },
  {
    title: "Prepare your questions",
    description:
      "Now that your projects are shortlisted you get to connect with leading industry professionals and ask them relevant questions.",
    link : "/d"
  },
  {
    title: "Meet on Sunday",
    description:
      "Ask those questions on Sunday and gain valuable insights",
    link : "/e"
  },
];
