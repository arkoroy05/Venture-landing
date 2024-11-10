"use client"
import React from 'react'
import Hero from './components/Hero'
import Working from './components/Working'
import Discover from './components/Discover'
import Pricing from './components/Pricing'
import Footer from './components/Footer'
import { Connect } from './components/Connect'


export default function page() {
  return (
    <div className='bg-black min-h-screen w-full'>
      <Hero></Hero>
      <Working></Working>
      <Discover></Discover>
      <Pricing></Pricing>
      <Connect></Connect>
      <Footer></Footer>
    </div>
  )
}
