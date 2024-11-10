import React from 'react'
import { NeonGradientCard } from './ui/neon-gradient-card'

const Pricing = () => {
  return (
    <div className=' w-full h-[30rem] flex justify-center gap-16 '>
      <NeonGradientCard className="max-w-sm items-center justify-center text-center bg-black">
      <span className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-blue-500 from-35% to-orange-600 bg-clip-text text-center text-6xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
        Base
      </span>
      <p className='text-white mt-10 text-xl'>2 pitch posts per week <br/> No assist for pitches <br/> 2 Post tags <br/> No Community Connections <br/>No Winning Swags </p>
      <h1 className='text-white mt-32 font-extrabold text-6xl'>Free</h1>
    </NeonGradientCard>
    <NeonGradientCard className="max-w-sm items-center justify-center text-center">
      <span className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-orange-600 from-35% to-blue-500 bg-clip-text text-center text-6xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
        Plus+
      </span>
      <p className='text-white mt-10 text-xl'>5 pitch posts per week <br/> AI assist for pitches <br/> 3 Post tags <br/> Community Connections <br/>No Winning Swags </p>
      <h1 className='text-white mt-32 font-extrabold text-6xl'>$10</h1>
    </NeonGradientCard>
    <NeonGradientCard className="max-w-sm items-center justify-center text-center">
      <span className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-orange-600 from-15% to-white bg-clip-text text-center text-6xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
       Premium
      </span>
      <p className='text-white mt-10 text-xl ;'>Unlimited pitch posts per week <br/> Mentor assist for pitches <br/> Unlimited Post tags <br/> Community Connections <br/> Winning Swags </p>
      <h1 className='text-white mt-32 font-extrabold text-6xl'>$15</h1>
    </NeonGradientCard>
    </div>
  )
}

export default Pricing
