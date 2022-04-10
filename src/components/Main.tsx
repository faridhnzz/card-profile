import type { NextPage } from 'next';
import { FiGithub, FiInstagram, FiTwitter, FiMail, FiHome } from 'react-icons/fi';
import Icon from './IconButton';

const Main: NextPage = () => {
  return (
    <div className=" bg-myBG min-h-screen py-5 ">
      <div className="container max-w-screen-md mx-auto md:px-0 px-4 flex justify-center items-center h-[85vh]">
        <div className="mt-5 bg-white  border-2 border-b-8 border-black rounded-xl grid grid-cols-12  justify-between duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-100 ">
          <div className="col-span-12 md:col-span-8 sm:pt-10 sm:px-8 p-5 ">
            <h1 className="font-bold sm:text-4xl text-2xl  text-black">Farid Nizam</h1>
            <h2 className="font-semibold sm:text-2xl text-xl text-black">Network Engineering</h2>
            <p className="font-Saira font-medium sm:text-xl text-md text-black mt-2">I&apos;m a who can code and network, but the internet allows me to do anything. ❤️</p>
            <div className="flex-row gap-2 flex m-auto justify-center md:justify-start align-middle md:px-0 p-5">
              <Icon url="https://www.farid.cyou" color="white" rel="">
                <FiHome />
              </Icon>
              <Icon url="https://github.com/faridnizam" color="white" rel="noopener noreferrer nofollow">
                <FiGithub />
              </Icon>
              {/* <Icon url="https://www.instagram.com/faridhnzz" color="white" rel="noopener noreferrer nofollow">
                <FiInstagram />
              </Icon>
              <Icon url="https://twitter.com/faridhnzz" color="white" rel="noopener noreferrer nofollow">
                <FiTwitter />
              </Icon> */}
              <Icon url="mailto:%6d%65%40%66%61%72%69%64%2e%63%79%6f%75" color="white" rel="noopener noreferrer nofollow">
                <FiMail />
              </Icon>
            </div>
          </div>
          <div className="col-span-4 m-auto hidden md:inline ">
            <img alt="Farid Nizam" width="255" height="255" src="https://avatars.githubusercontent.com/u/29797712" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
