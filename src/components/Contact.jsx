import ContactUs1 from "../svg/ContactUs1";
import ContactUs2 from "../svg/ContactUs2";

function Contact({Contact}){
  return(
<>
                  <div className="mb-[22px]">
                  <label
                    htmlFor="{Contact.htmlFor}"
                    className="mb-4 block text-sm text-body-color dark:text-dark-6"
                  >
                    {Contact.data}*
                  </label>
                  <input
                    type={Contact.type}
                    name={Contact.htmlFor}
                    placeholder={Contact.placeholder}
                    className="w-full border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-body-color placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-dark-6"
                  />
                </div>
                </>
  );}

export default function ContactUs() {
  return (
    <section id="contact" className="relative py-20 md:py-[120px]">
      <div className="absolute left-0 top-0 -z-[1] h-full w-full dark:bg-dark"></div>
      <div className="absolute left-0 top-0 -z-[1] h-1/2 w-full bg-[#E9F9FF] dark:bg-dark-700 lg:h-[45%] xl:h-1/2"></div>
      <div className="container px-4">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div className="ud-contact-content-wrapper">
              <div className="ud-contact-title mb-12 lg:mb-[150px]">
                <span className="mb-6 block text-base font-medium text-dark dark:text-white">
                  CONTACT US
                </span>
                <h2 className="max-w-[260px] text-[35px] font-semibold leading-[1.14] text-dark dark:text-white">
                  Lets talk about your problem.
                </h2>
              </div>
              <div className="mb-12 flex flex-wrap justify-between lg:mb-0">
                <div className="mb-8 flex w-[330px] max-w-full">
                  <div className="mr-6 text-[32px] text-primary">
                    <ContactUs1 />
                  </div>
                  <div>
                    <h5 className="mb-[18px] text-lg font-semibold text-dark dark:text-white">
                      Our Location
                    </h5>
                    <p className="text-base text-body-color dark:text-dark-6">
                      401 Broadway, 24th Floor, Orchard Cloud View, London
                    </p>
                  </div>
                </div>
                <div className="mb-8 flex w-[330px] max-w-full">
                  <div className="mr-6 text-[32px] text-primary">
                    <ContactUs2 />
                  </div>
                  <div>
                    <h5 className="mb-[18px] text-lg font-semibold text-dark dark:text-white">
                      How Can We Help?
                    </h5>
                    <p className="text-base text-body-color dark:text-dark-6">
                      info@yourdomain.com
                    </p>
                    <p className="mt-1 text-base text-body-color dark:text-dark-6">
                      contact@yourdomain.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <div className=" rounded-lg bg-white px-8 py-10 shadow-testimonial dark:bg-dark-2 dark:shadow-none sm:px-10 sm:py-12 md:p-[60px] lg:p-10 lg:px-10 lg:py-12 2xl:p-[60px]">
              <h3 className="mb-8 text-2xl font-semibold text-dark dark:text-white md:text-[28px] md:leading-[1.42]">
                Send us a Message
              </h3>
              <form>
                <Contact Contact= {{
                  data: "Name",
                  htmlFor: "name",
                   placeholder: "Your Name",
                  type: "text",
                 

                }}/>
                <Contact Contact= {{
                  data: "Email",
                  htmlFor: "email",
                  type: "email address",
                  placeholder: "Email Address",

                }}/>
              <Contact Contact= {{
                  data: "Phone",
                  htmlFor: "phoneNumber",
                  type: "number",
                  placeholder: "Phone Number",
              }}
                  />
              
                <div className="mb-[30px]">
                  <label
                    htmlFor="message"
                    className="mb-4 block text-sm text-body-color dark:text-dark-6"
                  >
                    Message*
                  </label>
                  <textarea
                    name="message"
                    rows="1"
                    placeholder="type your message here"
                    className="w-full resize-none border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-body-color placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-dark-6"
                  ></textarea>
                </div>
                <div className="mb-0">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-md bg-primary px-10 py-3 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-blue-dark"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
