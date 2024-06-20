"use client"
import Image from "next/image"
import { useForm, ValidationError } from "@formspree/react"
import { Reveal } from "./AnimatedContainers"

const Contact = () => {
  const [state, handleSubmit] = useForm('mgegvgzo')
  if (state.succeeded) {
    return <ContactForm handleSubmit={handleSubmit} state={state} />
  }
  return <ContactForm handleSubmit={handleSubmit} state={state} />
}

const ContactForm = ({ handleSubmit, state }: any) => {
  return (
    <div className="mx-auto mb-20" id="contactUs">
      <Reveal>
      <div className="w-full my-10">
        <h2 className="text-4xl py-4 font-bold text-center">Let us help</h2>
        <p className=" text-center text-2xl py-4">
          Contact us to Join the waiting list. and<br /> Be one the first users to use SportNet
        </p>
      </div>
      <form onSubmit={handleSubmit} className="mx-auto px-4 py-2  rounded ">
        <div className=" mb-2">
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Your email"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:shadow-outline-black"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div className="my-2">
          <textarea
            id="message"
            name="message"
            placeholder="Your message"
            rows={4}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:shadow-outline-black"
          ></textarea>
          <ValidationError prefix="Message" field="message" errors={state.errors} />
        </div>
        {state.succeeded && (
          <p className=" text-center my-2 text-green-500">
            Thank you we have received your message, our team will contact you in 4-5 bussiness days
          </p>
        )}
        <div className="w-full flex justify-end">
          <button
            type="submit"
            disabled={state.submitting}
            className={` hover:bg-gray-700 bg-primary hover:bg-ui-primary/90 text-white py-2 w-fit flex items-center justify-center gap-2  text-lg px-8 rounded ${
              state.submitting ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {state.submitting ? 'Sending...' : 'Send'}
            <Image src="/assets/icons/send.svg" alt="send" width={24} height={24}></Image>
          </button>
        </div>
      </form>
      </Reveal>
    </div>
  )
}

export default Contact
