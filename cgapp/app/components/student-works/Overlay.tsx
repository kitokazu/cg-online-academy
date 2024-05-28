import { Scroll, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";
import Image from "next/image";

import image1 from "../../../public/cover.png"
import image2 from "../../../public/slideshow/image4.png";
import image3 from "../../../public/slideshow/imager.png";

const Section = (props: any) => {
  return (
    <section
      className={`h-screen flex flex-col p-10 ${props.right ? 'items-start': 'items-end'}`}
      style={{
        opacity: props.opacity,
      }}
    >
      <div className="w-1/2 m-6">
          <div className="bg-white flex justify-center rounded-lg px-8 py-12">
            {props.children}
          </div>
      </div>
    </section>
  );
};

export const Overlay = () => {
  const scroll = useScroll();
  const [opacityFirstSection, setOpacityFirstSection] = useState(1);
  const [opacitySecondSection, setOpacitySecondSection] = useState(1);
  const [opacityLastSection, setOpacityLastSection] = useState(1);

  useFrame(() => {
    setOpacityFirstSection(1 - scroll.range(0, 1 / 3));
    setOpacitySecondSection(scroll.curve(1 / 3, 1 / 3));
    setOpacityLastSection(scroll.range(2 / 3, 1 / 3));
  });

  return (
    <Scroll html>
      <div className="w-screen">
        <Section opacity={opacityFirstSection}>
          <Image 
            src = {image1}
            alt = "image1"
            className = "" />
        </Section>
        <Section right opacity={opacitySecondSection}>
            <Image 
                src = {image2}
                alt = "image2"
                className = "" />
        </Section>
        <Section opacity={opacityLastSection}>
            <Image 
                src = {image3}
                alt = "image3"
                className = "" />
            </Section>
      </div>
    </Scroll>
  );
};