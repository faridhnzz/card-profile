import React from 'react';
import { NextSeo } from 'next-seo';
import { FaGithub, FaInstagram, FaTwitter, FaEnvelope } from 'react-icons/fa';
import Icon from '../components/IconButton';

const HomePage = () => {
  return (
    <>
      <NextSeo
        title="Farid Nizam | Network Engineering"
        description="I'm a who can code and network, but the internet allows me to do anything. ❤️"
        canonical="https://farid.cyou/"
        openGraph={{
          url: 'https://farid.cyou/',
          title: 'Farid Nizam | Network Engineering',
          description: "I'm a who can code and network, but the internet allows me to do anything. ❤️",
          images: [
            {
              url: 'https://cdn.statically.io/og/Farid%20Nizam.png',
            },
          ],
          site_name: 'farid.cyou',
        }}
        twitter={{
          handle: '@faridhnzz',
          site: '@faridhnzz',
          cardType: 'summary',
        }}
      />

      <div className=" bg-myBG min-h-screen py-5 ">
        <div className="container max-w-screen-md mx-auto md:px-0 px-4 flex justify-center items-center h-[85vh]">
          <div className="mt-5 bg-white  border-2 border-b-8 border-black rounded-xl grid grid-cols-12  justify-between duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-100 ">
            <div className="col-span-12 md:col-span-8 sm:pt-10 sm:px-8 p-5 ">
              <p className="font-bold sm:text-4xl text-2xl  text-black">Hi, I am Farid</p>
              <p className="font-semibold sm:text-2xl text-xl text-black">Network Engineering</p>
              <p className="font-normal sm:text-xl text-md text-black mt-2">I&apos;m a who can code and network, but the internet allows me to do anything. ❤️</p>
              <div className="flex-row gap-2 flex m-auto justify-center md:justify-start align-middle md:px-0 p-5">
                <Icon url="https://github.com/faridnizam" color="white">
                  <i className="fab fa-github fa-lg"></i>
                </Icon>
                <Icon url="https://www.instagram.com/faridhnzz" color="white">
                  <i className="fab fa-instagram fa-lg"></i>
                </Icon>
                <Icon url="https://twitter.com/faridhnzz" color="white">
                  <i className="fab fa-twitter fa-lg"></i>
                </Icon>
                <Icon url="mailto:%6d%65%40%66%61%72%69%64%2e%63%79%6f%75" color="white">
                  <i className="far fa-envelope fa-lg"></i>
                </Icon>
              </div>
            </div>
            <div className="col-span-4 m-auto hidden md:inline mt-12 ">
              <img alt="Farid Nizam" src="https://avatars.githubusercontent.com/u/29797712" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
