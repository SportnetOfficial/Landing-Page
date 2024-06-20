import { Container } from '@/components/ui/Containers'
import { PrimaryButton } from '@/components/ui/Button'
import Link from 'next/link'
const page = () => {
  return (
    <Container className=" mx-auto w-full text-center text-4xl">
      <div className=" h-screen w-full text-center flex flex-col gap-4 py-8">
        Coming soon...
        <Link href="/">
          <PrimaryButton className=" text-base rounded px-5">Go Back to Home Page</PrimaryButton>
        </Link>
      </div>
    </Container>
  )
}

export default page
