import React, { useRef } from 'react'
import Aboutheader from './components/Aboutheader'
import Aboutconnect from './components/Aboutconnect'
import Aboutanimation from './components/Aboutanimation'
import Aboutcontent1 from './components/Aboutcontent1'

const Page = () => {
  const contactRef = useRef(null);
  const LearnMoreRef = useRef(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  const scrollToLearnMore = () => {
    LearnMoreRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  return (
    <div>
      <Aboutheader onContactClick={scrollToContact} onLearnClick={scrollToLearnMore} />
      <div ref={LearnMoreRef}>
        <Aboutcontent1 />
      </div>
      <Aboutanimation />
      <div ref={contactRef}>
        <Aboutconnect />
      </div>
    </div>
  )
}

export default Page