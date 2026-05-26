import Footer from "../components/layout/Footer/footer";

import WelcomePageImage1 from "../assets/images/WelcomePageImage1.png";
import WelcomePageImage2 from "../assets/images/WelcomePageImage2.png";
import WelcomePageImage3 from "../assets/images/WelcomePageImage3.png";
import WelcomePageImage4 from "../assets/images/WelcomePageImage4.png";
import WelcomePageBanner from "../assets/images/WelcomePageBanner.jpg";

import { Fade } from "../components/ui/Fade";
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div className="bg-black text-white">
      {/*Hero Section*/}
      <div
        style={{
          backgroundImage: `linear-gradient(0deg, hsl(0deg 0% 0% / 76%) 0%, hsl(0deg 0% 0% / 76%) 35%), url(${WelcomePageBanner})`,
        }}
        className="relative flex min-h-[34rem] w-full items-center justify-center bg-cover bg-center px-4 pt-20 sm:min-h-[42rem] xl:min-h-[46rem]"
      >
        <div className="w-full max-w-3xl text-center">
            <Fade duration={2000}>
              <h1 className="mb-4 text-6xl font-bold leading-tight text-white sm:text-7xl md:text-7xl">
                Unlimited movies, TV shows and more.
              </h1>
              <h1 className="mb-4 text-xl font-bold text-stone-200 sm:text-2xl">
                Starts at USD 2.99. Cancel anytime.
              </h1>
              <h1 className="mb-6 text-base font-bold text-stone-200 sm:text-xl">
                Ready to watch? Enter your email to create or restart your
                membership.
              </h1>
              <div className="mx-auto flex w-full max-w-2xl flex-col gap-3 sm:flex-row">
                <input
  placeholder="Email Address"
  className="min-h-18 flex-1 rounded-sm border border-neutral-500 bg-black/60 px-4 py-3 text-white outline-none placeholder:text-neutral-300 focus:border-white"
/>

<Link to={"/signup"}>
  <button className="min-h-18 w-full rounded-sm bg-red-700 px-8 py-4 text-xl font-semibold text-white transition hover:bg-red-800 sm:w-auto">
    Get Started
  </button>
</Link>
              </div>
            </Fade>
        </div>
        <div
          style={{
            backgroundImage:
              "linear-gradient(hsl(0deg 0% 0% / 0%), hsl(0deg 0% 0% / 38%), hsl(0deg 0% 7%))",
          }}
        ></div>
      </div>

      {/* Section 2 */}
      <section className="border-y-8 border-y-zinc-800 bg-black">
        <Fade>
          <div className="flex justify-center md:py-8">
            <div className="lg:flex lg:items-center lg:w-9/12">
              <div>
                <h1 className="mt-2 mb-6 text-4xl font-semibold text-center text-white lg:mt-0 lg:text-left lg:ml-8 lg:text-5xl xl:text-6xl">
                  Enjoy on your TV.
                </h1>
                <h1 className="m-4 text-center text-stone-400 font-light lg:text-left lg:ml-8 lg:text-2xl lg:w-9/12">
                  Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
                  Blu-ray players and more.
                </h1>
              </div>
              <div className="flex justify-center">
                <img className="" src={WelcomePageImage1} />
              </div>
            </div>
          </div>
        </Fade>
      </section>

      {/* Section 3 */}
      <section className="bg-black">
        <Fade>
          <div className="flex justify-center">
            <div className="flex flex-col-reverse lg:flex-row lg:items-center lg:w-9/12">
              <div className="flex justify-center">
                <img className="" src={WelcomePageImage2} />
              </div>
              <div>
                <h1 className="mx-4 mt-4 mb-6 text-4xl font-semibold text-center text-white lg:mt-0 lg:text-left lg:ml-8 lg:text-5xl xl:text-6xl">
                  Download your shows to watch offline.
                </h1>
                <h1 className="m-4 text-center text-stone-400 font-light lg:text-left lg:ml-8 lg:text-2xl lg:w-9/12">
                  Save your favourites easily and always have something to
                  watch.
                </h1>
              </div>
            </div>
          </div>
        </Fade>
      </section>

      {/* Section 4 */}
      <section className="bg-black border-y-8 border-y-zinc-800">
        <Fade>
          <div className="flex justify-center md:py-8">
            <div className="lg:flex lg:items-center lg:w-9/12">
              <div>
                <h1 className="mt-4 mb-6 text-4xl font-semibold text-center text-white lg:mt-0 lg:text-left lg:ml-8 lg:text-5xl xl:text-6xl">
                  Watch everywhere.
                </h1>
                <h1 className="m-4 text-center text-stone-400 font-light lg:text-left lg:ml-8 lg:text-2xl lg:w-9/12">
                  Stream unlimited movies and TV shows on your phone, tablet,
                  laptop, and TV.
                </h1>
              </div>
              <div className="flex justify-center">
                <img className="" src={WelcomePageImage3} />
              </div>
            </div>
          </div>
        </Fade>
      </section>

      {/* Section 5 */}
      <section className="bg-black">
        <Fade>
          <div className="flex justify-center">
            <div className="flex flex-col-reverse lg:flex-row lg:items-center lg:w-9/12">
              <div className="flex justify-center">
                <img className="" src={WelcomePageImage4} />
              </div>
              <div>
                <h1 className="mt-4 mb-6 text-4xl font-semibold text-center text-white lg:mt-0 lg:text-left lg:ml-8 lg:text-5xl xl:text-6xl">
                  Create profiles for children.
                </h1>
                <h1 className="m-4 text-center text-stone-400 font-light lg:text-left lg:ml-8 lg:text-2xl lg:w-9/12">
                  Send children on adventures with their favourite characters in
                  a space made just for them—free with your membership.
                </h1>
              </div>
            </div>
          </div>
        </Fade>
      </section>

      {/* Section 6 */}
      <section></section>

      {/* Footer */}
      <Footer></Footer>
    </div>
  );
}

export default Welcome;
