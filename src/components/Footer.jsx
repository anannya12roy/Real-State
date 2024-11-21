import Footer1 from "../svg/Footer1";
import TeamSection2 from "../svg/TeamSection2";
import TeamSection3 from "../svg/TeamSection3";
import TeamSection4 from "../svg/TeamSection4";

function Title({data}){
  return(
    <h4 className="mb-9 text-lg font-semibold text-white">
                {data.title}
              </h4>
  );
}

function AboutUs({data}){
  return(
    <li>
      <a href="javascript:void(0)"className="mb-3 inline-block text-base text-gray-7 hover:text-primary">
                    {data.title}
                  </a>
                </li>
  );
}

function Features({data}){
  return(
    <li>
                  <a
                    href="javascript:void(0)"
                    className="mb-3 inline-block text-base text-gray-7 hover:text-primary"
                  >
                    {data.title}
                  </a>
                </li>
  );
}

export default function Footer() {
  return (
    <footer className=" relative z-10 bg-[#090E34] pt-20 lg:pt-[100px]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-4/12 xl:w-3/12">
            <div className="mb-10 w-full">
              <a
                href="javascript:void(0)"
                className="mb-6 inline-block  max-h-[100px]"
              >
                <img
                  src="assets/images/logo/logo.svg"
                  alt="logo"
                  className="max-w-full"
                />
              </a>
              <p className="mb-8 lg:max-w-[270px] text-base text-gray-7">
                We create digital experiences for brands and companies by using
                technology.
              </p>
              <div className="-mx-3 flex items-center">
                <a
                  href="javascript:void(0)"
                  className="px-3 text-gray-7 hover:text-white"
                >
                  <TeamSection2 />
                </a>
                <a
                  href="javascript:void(0)"
                  className="px-3 text-gray-7 hover:text-white"
                >
                 <TeamSection3 />
                </a>
                <a
                  href="javascript:void(0)"
                  className="px-3 text-gray-7 hover:text-white"
                >
                  <TeamSection4 />
                </a>
                <a
                  href="javascript:void(0)"
                  className="px-3 text-gray-7 hover:text-white"
                >
                 <Footer1 />
                </a>
              </div>
            </div>
          </div>
          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
            <div className="mb-10 w-full">
              <Title data={{
                title: "About US"
              }} />
              <ul>
                <AboutUs data={{
                  title: "Home"
                }} />
                <AboutUs data={{
                  title: "Features"
                }} />
                <AboutUs data={{
                  title: "About"
                }} />
              </ul>
            </div>
          </div>
          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-3/12 xl:w-2/12">
            <div className="mb-10 w-full">
              <Title data={{
                title: "Features"
              }} />
              <ul>
                <Features data={{
                  title: "How it works"
                }} />
                <Features data={{
                  title: "Privacy policy"
                }} />
                 <Features data={{
                  title: "Terms of Service"
                }} />
                <Features data={{
                  title: "Refund policy"
                }} />
              </ul>
            </div>
          </div>

          <div className="w-full px-4 md:w-2/3 lg:w-6/12 xl:w-3/12">
            <div className="mb-10 w-full">
              <Title data={{
                title: "Latest blog"
              }} />
              
              <div className="flex flex-col gap-8">
                <a
                  href="blog-details.html"
                  className="group flex items-center gap-[22px]"
                >
                  <div className="overflow-hidden rounded">
                    <img
                      src="./assets/images/blog/blog-footer-01.jpg"
                      alt="blog"
                    />
                  </div>
                  <span className="max-w-[180px] text-base text-gray-7 group-hover:text-white">
                    I think really important to design with...
                  </span>
                </a>
                <a
                  href="blog-details.html"
                  className="group flex items-center gap-[22px]"
                >
                  <div className="overflow-hidden rounded">
                    <img
                      src="./assets/images/blog/blog-footer-02.jpg"
                      alt="blog"
                    />
                  </div>
                  <span className="max-w-[180px] text-base text-gray-7 group-hover:text-white">
                    Recognizing the need is the primary...
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
