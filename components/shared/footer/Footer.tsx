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
              <Link target="_blank" href="https://x.com/Sport3Net">
                <li>Twitter</li>
              </Link>
              <Link target="_blank" href="">
                Notion
              </Link>
              <Link target="_blank" href="https://github.com/SportnetOfficial">
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
