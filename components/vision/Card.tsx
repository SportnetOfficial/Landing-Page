import React from 'react'
import Image from 'next/image'
const Card = ({ image, heading, content }: any) => {
  return (
    <div className="flex md:flex-row flex-col items-center mx-auto border shadow-lg my-16 max-w-[1020px] rounded-lg">
      <div className=" flex items-center justify-center py-6 pl-12 pr-16 md:border-r-2 md:border-b-0 border-b-2 w-full md:w-auto">
        <Image src={image} alt={heading} width={125} height={125} />
      </div>
      <div className="py-2 px-5">
        <div className="py-3">
          <h1 className=" font-semibold text-lg">{heading}</h1>
          <Image src="/assets/images/underline-blue.svg" alt="undeline" width={100} height={10} />
        </div>
        <p className=" text-base py-3">{content}</p>
      </div>
    </div>
  )
}

export default Card
