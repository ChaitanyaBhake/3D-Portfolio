import { useState } from 'react';
import Globe from 'react-globe.gl';
import Button from '../components/Button';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('chaitubhake2013@gmail.com');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid1.png"
              alt="grid-1"
              className="w-full sm:h-[276px] h-fit object-contain"
            />

            <div>
              <p className="grid-headtext">Hi, I'm Chaitanya</p>
              <p className="grid-subtext">
                I'm aspiring web-developer who keep learning new things daily, improving from my mistakes
                with never give up attitude.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3 place ">
          <div className="grid-container place">
            <img
              src="/assets/mernStack2.png"
              alt="grid-2"
              className=" flex justify-center items-center mx-auto w-full sm:w-[276px] lg:h-full md:h-full h-fit object-contain"
            />

            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I'm proficient in MERN stack ,with a focus on Javascript
                Ecosystem.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0 ,0 ,0 ,0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[
                  {
                    lat: 21,
                    lng: 78,
                    text: "I'm here!",
                    color: 'white',
                    size: '20',
                  },
                ]}
              />
            </div>
            <div>
              <p className="grid-headtext">
                I am flexible with relocation
              </p>
              <p className="grid-subtext">
                I am based in India, with remote work/onsite availability.
              </p>
              <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3  ">
          <div className="grid-container">
            <img
              src="/assets/grid3.png"
              alt="grid-3"
              className="w-full sm:h-[266px] h-fit object-contain"
            />

            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
                I love bringing website to life and building things through code, Coding
                isn't just my profession - its is my passion
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2 ">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top "
            />
            <div className="space-y-2 ">
              <p className="grid-subtext text-center">Contact Me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img
                  src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'}
                  alt="copy"
                />

                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
                  chaitubhake2013@gmail.com{' '}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
