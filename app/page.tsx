"use client"

import Image from 'next/image'
import { SectionContainer, Container } from '@/components/ui/Containers'
import Card from '@/components/vision/Card'
import FeaturesCard from '@/components/Features/FeaturesCard'
import { Reveal, CardAnimation } from '@/components/ui/AnimatedContainers'
import CountUp from 'react-countup'
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

export default function Home() {
  const features = [
    {
      image: '/assets/icons/features/dec.svg',
      feature: 'Decentralized Governance',
      summary: 'Community-Driven Decisions - Your voice matters in shaping our platform',
    },
    {
      image: '/assets/icons/features/computer.svg',
      feature: 'Showcase Talents',
      summary: 'Discover Rising Stars - Dive into detailed profiles and personal journeys',
    },
    {
      image: '/assets/icons/features/bet.svg',
      feature: 'Bet & Win',
      summary: 'Get in the Game - Bet on performances, win rewards, feel the thrill',
    },
    {
      image: '/assets/icons/features/touch.svg',
      feature: 'NFT Rewards',
      summary: 'Exclusive Digital Collectibles - Own unique NFTs and be part of the journey',
    },
    {
      image: '/assets/icons/features/heart.svg',
      feature: 'Secure Funding',
      summary: 'Invest with Confidence securely for every contribution on Starknet',
    },
    {
      image: '/assets/icons/features/social.svg',
      feature: 'Social Engagement',
      summary: 'Connect and Share - Foster a vibrant community of fans and supporters',
    },
    {
      image: '/assets/icons/features/analytics.svg',
      feature: 'Real-Time Analytics',
      summary: 'Stay Informed - Access real-time data for informed decisions',
    },
    {
      image: '/assets/icons/features/training.svg',
      feature: 'Training & Progress Updates',
      summary: 'Follow Their Journey - Regular updates on training and milestones',
    },
  ]

  const stats = [
    { label: 'Total Amount Funded', value: 1200931 },
    { label: 'Athletes Supported', value: 850 },
    { label: 'Sponsors', value: 340 },
    { label: 'Countries Involved', value: 50 }
  ]

  const [animationKey, setAnimationKey] = useState(0)
  const { ref, inView } = useInView({
    threshold: 0.5
  })

  useEffect(() => {
    if (inView) {
      setAnimationKey(prevKey => prevKey + 1)
    }
  }, [inView])

  return (
    <>
      <SectionContainer>
        <Container>
          <Reveal>
            <div className="my-20 w-full flex justify-between lg:px-14 px-3 pt-10">
              <div className="">
                <h1 className=" text-6xl py-3 font-bold">SportNet</h1>
                <div className=" text-4xl py-3">
                  An Athlete Crowdfunding
                  <br />
                  and Betting platform on Starknet <br />
                </div>
                <p className="py-3">Sponsor · Bet · Win</p>
              </div>
              <div className="flex-col items-center justify-center gap-4 md:flex hidden">
                <Image
                  className="rounded"
                  src="/assets/images/hero.gif"
                  alt="hero-img"
                  width={600}
                  height={300}
                />
                <Image
                  src="/assets/images/underline1.svg"
                  alt="underline"
                  width={480}
                  height={36}
                />
              </div>
            </div>
          </Reveal>
        </Container>
      </SectionContainer>
      <SectionContainer className="bg-secondary">
        <Container>
          <Reveal>
            <div className="w-full mt-10">
              <div className="flex justify-center gap-1">
                <h2 className="text-4xl py-4 font-bold text-center">Our Vision</h2>
                <Image
                  className=" -translate-y-3"
                  src="/assets/images/star1.svg"
                  alt="star"
                  width={42}
                  height={42}
                ></Image>
                <Image
                  className=" -translate-y-5"
                  src="/assets/images/star2.svg"
                  alt="star2"
                  width={25}
                  height={42}
                ></Image>
              </div>
              <p className=" text-center text-2xl py-4">
                To bridge the gap between talent and opportunity for athletes in <br />
                underdeveloped and developing countries, enabling them <br /> to achieve their
                dreams and gain global recognition
              </p>
            </div>
            <div className="w-full relative">
              <Card
                image="/assets/icons/athlete.svg"
                heading="For Athletes"
                content="Athletes can share their story and raise funds to overcome financial barriers, allowing them to participate in tournaments and pursue their athletic dreams."
              ></Card>
              <Card
                image="/assets/icons/sponsor.svg"
                heading="For Sponsors"
                content="Sponsors can discover and support emerging athletes from underdeveloped or developing countries. They in turn, receive incentives from the betting platform on the sponsored athletes."
              ></Card>
            </div>
          </Reveal>
        </Container>
      </SectionContainer>
      <SectionContainer>
        <Container>
          <Reveal>
            <div className="flex my-10 flex-col w-full items-center justify-center gap-1">
              <h2 className="text-4xl py-4 font-bold text-center" id="features">
                Achieve all your goals in one place
              </h2>
              <Image src="/assets/images/underline2.svg" alt="underline" width={600} height={21} />
            </div>
            <div className="flex flex-col gap-12 my-10 mx">
              <div className="grid lg:grid-cols-4 justify-center gap-12 mx-auto grid-cols-1">
                {features.map((feature, index) => (
                  <CardAnimation key={index} custom={index}>
                    <FeaturesCard
                      image={feature.image}
                      feature={feature.feature}
                      summary={feature.summary}
                    />
                  </CardAnimation>
                ))}
              </div>
            </div>
          </Reveal>
        </Container>
      </SectionContainer>
      <SectionContainer>
        <Container>
          <Reveal>
            <div className="flex my-10 flex-col w-full items-center justify-center gap-1" ref={ref}>
              <h2 className="text-4xl py-4 font-bold text-center" id="stats">
                Stats
              </h2>
              <Image src="/assets/images/underline2.svg" alt="underline" width={600} height={21} />
            </div>
            <div key={animationKey} className="grid lg:grid-cols-4 justify-center gap-12 mx-auto grid-cols-1">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col items-center">
                  <CountUp start={0} end={stat.value} duration={2.5} separator="," className="text-5xl font-bold" />
                  <p className="text-xl font-light">{stat.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </SectionContainer>
    </>
  )
}
