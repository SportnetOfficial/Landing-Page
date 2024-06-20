import React from 'react'
import Image from 'next/image'
const FeaturesCard = ({ image, feature, summary }: any) => {
  return (
    <div className="flex flex-col justify-center items-center text-center p-2 py-2 border-2 border-slate-600 shadow-md rounded max-w-[20rem]">
      <Image className="py-2" src={image} alt="feature" height={72} width={72}></Image>
      <h3 className=" text-lg py-3">{feature}</h3>
      <p className=" text-slate-600 py-2">{summary}</p>
    </div>
  )
}

export default FeaturesCard
