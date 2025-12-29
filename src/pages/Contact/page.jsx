import React, { useRef } from 'react'
import Contactheader from './components/Contactheader'
import Contactconnect from './components/Contactconnect'

const Page = () => {
  const contactRef = useRef(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div>
      <Contactheader onContactClick={scrollToContact} />
      <div ref={contactRef}>
        <Contactconnect />
      </div>
    </div>
  );
};

export default Page;
