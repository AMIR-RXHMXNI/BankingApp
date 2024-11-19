'use client';


import CountUp from 'react-countup';


const AnimatedCounter = ( { amount }: { amount: number}) => {
  return (
    <div>
        <CountUp
        duration={0.9}
        decimal=','
        decimals={2}
        prefix='CHF'
        end={amount} />
    </div>
  )
}

export default AnimatedCounter