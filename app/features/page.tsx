'use client'

import React from 'react'
import Image from 'next/image'
import Card from '@/components/vision/Card'
import { SectionContainer, Container } from '@/components/ui/Containers'
import { PrimaryButton } from '@/components/ui/Button'
import { Reveal, CardAnimation } from '@/components/ui/AnimatedContainers'
// import { Card, CardContent, CardDescription, CardFooter, CardHeader,CardTitle,} from "@/components/ui/card";
import Link from 'next/link'

const features = () => {
  return (
    <SectionContainer className="bg-secondary py-16">
      <Container>
        <Reveal>
          <div className="w-full relative flex flex-wrap gap-8 justify-center animate-fade-in-up">
            <CardAnimation>
              <div className="card">
                <Card
                  image="/assets/icons/athlete.svg"
                  heading="Athlete Profile"
                  content="Athletes can share their story and raise funds to overcome financial barriers, allowing them to participate in tournaments and pursue their athletic dreams."
                />
              </div>
            </CardAnimation>
            <CardAnimation>
              <div className="card">
                <Card
                  image="/assets/icons/sponsor.svg"
                  heading="Sponsors Showcase"
                  content="Sponsors can discover and support emerging athletes from underdeveloped or developing countries. They in turn, receive incentives from the betting platform on the sponsored athletes."
                />
              </div>
            </CardAnimation>
            <CardAnimation>
              <div className="card">
                <Card
                  image="/assets/icons/community.svg"
                  heading="Community Support"
                  content="The platform allows for a supportive community where fans can directly contribute to athletes' success and follow their progress."
                />
              </div>
            </CardAnimation>
            <CardAnimation>
              <div className="card">
                <Card
                  image="/assets/icons/betting.svg"
                  heading="Betting Platform"
                  content="Users can place bets on their favorite athletes, providing an additional incentive for both the athletes and the supporters."
                />
              </div>
            </CardAnimation>
          </div>
          <div className="text-center mt-10">
            <Link href="/">
              <PrimaryButton className="text-base rounded px-5 transition transform hover:scale-105 hover:bg-primary hover:text-white">
                Go Back to Home Page
              </PrimaryButton>
            </Link>
          </div>
        </Reveal>
      </Container>
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out;
        }
        .card {
          transition:
            transform 0.3s,
            box-shadow 0.3s;
        }
        .card:hover {
          transform: translateY(-10px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </SectionContainer>
  )
}

export default features
