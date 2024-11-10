"use client"
import React from 'react'
import { LampContainer } from './ui/lamp'
import { motion } from 'framer-motion'
import GetStartedButton from './ui/get-started-button'
import { AnimatedSubscribeButton } from './ui/animated-subscribe-button'
import { CheckIcon, ChevronRightIcon } from "lucide-react";

const Discover = () => {
  return (
    <div >
       <LampContainer>
      <motion.h1
        initial={{ opacity: 0, y: 250 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center font-bold tracking-tight text-transparent md:text-7xl"
      >
        Your Ideas <br /> are for the world to see
      </motion.h1>
      <GetStartedButton className="mt-16 rounded-3xl" text="Get Started" />
      <AnimatedSubscribeButton
      buttonColor="#000000"
      buttonTextColor="#ea580c"
      subscribeStatus={false}
      initialText={
        <span className="group inline-flex items-center">
          Join waitlist{" "}
          <ChevronRightIcon className="ml-1 size-4 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      }
      changeText={
        <span className="group inline-flex items-center">
          <CheckIcon className="mr-2 size-4" />
          Joined !{" "}
        </span>
      }
    />

    </LampContainer>
    </div>
  )
}

export default Discover
