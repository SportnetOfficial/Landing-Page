import { SectionContainer, Container } from '@/components/ui/Containers'
import Image from 'next/image'
import Contact from '@/components/ui/Contact'
import Link from 'next/link'
const Footer = () => {
  return (
    <SectionContainer className="bg-secondary">
      <Container>
        <Contact />
        <footer className="pt-6 pb-6   border-t-2 w-full border-t-black" id="footer">
          <div className="flex justify-between items-center">
            <h6>© 2024 Sportnet. All rights reserved</h6>
            <ul className="lg:flex gap-12 hidden">
              <Link href="https://twitter.com/permaAds">
                <li>Twitter</li>
              </Link>
              <Link target="_blank" href="https://t.me/+LeA-L0o62S0zZWM1">
                Telegram
              </Link>
              <Link target="_blank" href="https://github.com/PermaAds">
                Github
              </Link>
            </ul>
          </div>
        </footer>
      </Container>
    </SectionContainer>
  )
}

export default Footer
