import { FeatureSection1 } from "../svg/FeatureSection1";
import FeatureSection2 from "../svg/FeatureSection2";
import FeatureSection3 from "../svg/FeatureSection3";
import FeatureSection4 from "../svg/FeatureSection4";

function Features({ data }){
  return(
    <>
            
                <h4 className="mb-3 text-xl font-bold text-dark dark:text-white">
                  {data.title}
                </h4>
                <p className="mb-8 text-body-color dark:text-dark-6 lg:mb-9">
                  {data.description}
                </p>
                <a
                  href="javascript:void(0)"
                  className="text-base font-medium text-dark hover:text-primary dark:text-white dark:hover:text-primary"
                >
                  {data.button}
                </a>
                </>
            
  )
}

export default function FeatureSection() {
  return (
    <>
      <section className="pb-8 pt-20 dark:bg-dark lg:pb-[70px] lg:pt-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto mb-12 max-w-[485px] text-center lg:mb-[70px]">
                <span className="mb-2 block text-lg font-semibold text-primary">
                  Features
                </span>
                <h2 className="mb-3 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]">
                  Main Features Of Play
                </h2>
                <p className="text-base text-body-color dark:text-dark-6">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p>
              </div>
            </div>
          </div>
          <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 md:w-1/2 lg:w-1/4">
              <div className=" group mb-12">
                <div className="relative z-10 mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-[14px] bg-primary">
                  <span className="absolute left-0 top-0 -z-[1] mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-[14px] bg-primary bg-opacity-20 duration-300 group-hover:rotate-45"></span>
                  <FeatureSection1 />
                </div>
                <Features data={{
                  title: 'Real Estate Agent',
                  description: 'Our expert real estate agents have been providing exceptional service for over 10 years.', 
                  button: 'Learn More',                  
                  }} />
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/4">
              <div className=" group mb-12">
                <div className="relative z-10 mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-[14px] bg-primary">
                  <span className="absolute left-0 top-0 -z-[1] mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-[14px] bg-primary bg-opacity-20 duration-300 group-hover:rotate-45"></span>
                  <FeatureSection2 />
                </div>
                <Features data={{
                  title: 'Real Estate Agent',
                  description: 'Our expert real estate agents have been providing exceptional service for over 10 years.', 
                  button: 'Learn More',               
                  }} />
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/4">
              <div className=" group mb-12">
                <div className="relative z-10 mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-[14px] bg-primary">
                  <span className="absolute left-0 top-0 -z-[1] mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-[14px] bg-primary bg-opacity-20 duration-300 group-hover:rotate-45"></span>
                  <FeatureSection3 />
                </div>
                <Features data={{
                  title: 'Real Estate Agent',
                  description: 'Our expert real estate agents have been providing exceptional service for over 10 years.',  
                  button: 'Learn More',                 
                  }} />
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/4">
              <div className=" group mb-12">
                <div className="relative z-10 mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-[14px] bg-primary">
                  <span className="absolute left-0 top-0 -z-[1] mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-[14px] bg-primary bg-opacity-20 duration-300 group-hover:rotate-45"></span>
                  <FeatureSection4 />
                </div>
                <Features data={{
                  title: 'Real Estate Agent',
                  description: 'Our expert real estate agents have been providing exceptional service for over 10 years.',
                  button: 'Learn More',                  
                  }} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
