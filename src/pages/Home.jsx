
import {
  ArrowRight,
  Check,
  Recycle,
  ShieldCheck,
  Leaf,
  Truck,
  CircleCheck,
  Sprout,
  MoveRight
} from 'lucide-react';

import { Link } from 'react-router-dom';

import SectionHeading from '../components/SectionHeading.jsx';
import ServiceCard from '../components/ServiceCard.jsx';

import { services, scrapTypes } from '../data.js';

// Local Images
import H1 from '../img/Home/H1.png';
import H2 from '../img/Home/H2.png';
import H3 from '../img/Home/H3.png';
import H4 from '../img/Home/H4.png';
import H5 from '../img/Home/H5.png';
import H6 from '../img/Home/H6.png';
import H7 from '../img/Home/H7.png';
import H8 from '../img/Home/H8.png';

// Image Sequence
const homeImages = [H1, H2, H3, H4, H5, H6, H7, H8];

// Background URL - UNCHANGED
const heroImg =
  'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=1900&q=85';

export default function Home() {
  return (
    <>

      {/* HERO SECTION */}
      <section className="relative isolate overflow-hidden bg-forest text-white">

        <div
          className="absolute inset-0 -z-20 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImg})` }}
        />

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#092719]/95 via-[#0d3323]/85 to-[#0d3323]/35" />

        <div className="container-width grid min-h-[660px] items-center gap-10 py-20 lg:grid-cols-[1.1fr_.9fr]">

          <div className="max-w-2xl">

            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11px] font-extrabold uppercase tracking-[.16em] text-lime">
              <Sprout size={15} />
              Building a cleaner tomorrow
            </span>

            <h1 className="mt-7 font-display text-5xl font-extrabold leading-[1.08] tracking-tight sm:text-6xl lg:text-[68px]">
              Waste less.
              <br />
              <span className="text-lime">Recover more.</span>
              <br />
              Live greener.
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-white/75 sm:text-lg">
              Your partner for responsible waste management, secure paper
              shredding, scrap trading and recycling solutions.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">

              <Link to="/services" className="btn-primary">
                Explore our services
                <ArrowRight size={17} />
              </Link>

              <Link to="/contact" className="btn-outline">
                Talk to our team
              </Link>

            </div>

            <div className="mt-12 flex flex-wrap gap-x-7 gap-y-3 text-xs font-semibold text-white/75">

              <span className="flex items-center gap-2">
                <Check size={15} className="text-lime" />
                Responsible recovery
              </span>

              <span className="flex items-center gap-2">
                <Check size={15} className="text-lime" />
                Business-focused solutions
              </span>

              <span className="flex items-center gap-2">
                <Check size={15} className="text-lime" />
                Secure shredding
              </span>

            </div>

          </div>

          {/* HERO IMAGE - H1 */}
          <div className="hidden justify-end lg:flex">

            <div className="relative w-[390px]">

              <div className="absolute -inset-5 rounded-[38px] border border-white/20" />

              <img
                src={homeImages[0]}
                alt="Green landscape and sustainability"
                className="relative h-[440px] w-full rounded-[30px] object-cover shadow-2xl"
              />

              <div className="absolute -bottom-7 -left-12 max-w-[230px] rounded-2xl bg-lime p-5 text-forest shadow-xl">

                <Leaf size={23} />

                <p className="mt-3 font-display text-lg font-extrabold">
                  A better cycle starts with better choices.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* FEATURES SECTION */}
      <section className="border-b border-forest/5 bg-white">

        <div className="container-width grid gap-7 py-8 sm:grid-cols-3">

          <div className="flex items-center gap-4">

            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-mist text-leaf">
              <ShieldCheck />
            </span>

            <div>
              <p className="font-display font-extrabold text-forest">
                Secure handling
              </p>

              <p className="mt-1 text-xs text-ink/55">
                Careful document destruction
              </p>
            </div>

          </div>

          <div className="flex items-center gap-4">

            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-mist text-leaf">
              <Recycle />
            </span>

            <div>
              <p className="font-display font-extrabold text-forest">
                Resource recovery
              </p>

              <p className="mt-1 text-xs text-ink/55">
                Recycling-led waste solutions
              </p>
            </div>

          </div>

          <div className="flex items-center gap-4">

            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-mist text-leaf">
              <Truck />
            </span>

            <div>
              <p className="font-display font-extrabold text-forest">
                Scrap trading
              </p>

              <p className="mt-1 text-xs text-ink/55">
                Multiple recyclable material streams
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* WHAT WE DO SECTION */}
      <section className="section-pad bg-mist">

        <div className="container-width">

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">

            <SectionHeading
              eyebrow="What we do"
              title="Practical solutions for every stage of the waste journey"
              description="From secure paper shredding to recycling and scrap procurement, we help businesses manage recyclable materials more responsibly."
            />

            <Link
              to="/services"
              className="inline-flex shrink-0 items-center gap-2 text-sm font-extrabold text-leaf"
            >
              View all services
              <MoveRight size={17} />
            </Link>

          </div>

          {/* SERVICE CARDS - H2 TO H7 */}
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

            {services.slice(0, 6).map((item, index) => (

              <ServiceCard
                key={item.title}
                item={item}
                image={homeImages[index + 1]}
              />

            ))}

          </div>

        </div>

      </section>


      {/* WHY CHOOSE US SECTION */}
      <section className="section-pad bg-white">

        <div className="container-width grid items-center gap-14 lg:grid-cols-2">

          <div className="relative">

            {/* WHY CHOOSE US IMAGE - H8 */}
            <img
              src={homeImages[7]}
              alt="Green forest representing a healthy environment"
              className="h-[430px] w-full rounded-[30px] object-cover"
            />

            <div className="absolute -bottom-6 right-5 rounded-2xl bg-forest px-6 py-5 text-white shadow-xl sm:right-[-20px]">

              <p className="font-display text-3xl font-extrabold text-lime">
                RETHINK
              </p>

              <p className="text-xs font-bold tracking-[.2em]">
                WASTE AS A RESOURCE
              </p>

            </div>

          </div>

          <div>

            <SectionHeading
              eyebrow="Why Waste Care Links"
              title="A more thoughtful approach to waste and resources"
              description="We bring waste management, secure shredding and recyclable scrap trading together under one roof. Our focus is on dependable coordination, responsible material handling and long-term business relationships."
            />

            <div className="mt-8 grid gap-5 sm:grid-cols-2">

              {[
                [
                  'Responsible approach',
                  'We promote recovery and recycling wherever suitable.'
                ],
                [
                  'Business-friendly',
                  'Solutions for offices, institutions and industries.'
                ],
                [
                  'Multiple material streams',
                  'Paper, plastic, metal, e-waste and more.'
                ],
                [
                  'Clear communication',
                  'A straightforward enquiry and coordination process.'
                ]
              ].map(([a, b]) => (

                <div key={a} className="flex gap-3">

                  <CircleCheck
                    className="mt-1 shrink-0 text-leaf"
                    size={19}
                  />

                  <div>

                    <h3 className="font-extrabold text-forest">
                      {a}
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-ink/60">
                      {b}
                    </p>

                  </div>

                </div>

              ))}

            </div>

            <Link to="/about" className="btn-primary mt-9">
              More about us
              <ArrowRight size={16} />
            </Link>

          </div>

        </div>

      </section>


      {/* SCRAP TRADING SECTION */}
      <section className="section-pad bg-forest text-white">

        <div className="container-width">

          <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]">

            <div>

              <span className="eyebrow !text-lime">
                Scrap trading
              </span>

              <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight sm:text-4xl">
                Giving recyclable materials another purpose.
              </h2>

              <p className="mt-5 text-sm leading-7 text-white/65">
                We deal in a range of recyclable scrap categories. Share your
                material details and quantity with our team to discuss
                requirements.
              </p>

              <Link
                to="/scrap-trading"
                className="btn-primary mt-8"
              >
                Explore scrap trading
                <ArrowRight size={16} />
              </Link>

            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">

              {scrapTypes.map((t, i) => (

                <div
                  key={t}
                  className="rounded-2xl border border-white/10 bg-white/[.06] p-5"
                >

                  <span className="mb-5 grid h-10 w-10 place-items-center rounded-xl bg-lime/15 text-lime">
                    <Recycle size={20} />
                  </span>

                  <p className="text-sm font-bold leading-5">
                    {t}
                  </p>

                  <p className="mt-2 text-[10px] font-bold uppercase tracking-wider text-white/40">
                    0{i + 1} / Material
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* CTA SECTION */}
      <section className="section-pad bg-lime">

        <div className="container-width flex flex-col items-start justify-between gap-7 md:flex-row md:items-center">

          <div>

            <p className="text-xs font-extrabold uppercase tracking-[.18em] text-forest/65">
              Have recyclable material or a shredding requirement?
            </p>

            <h2 className="mt-3 max-w-2xl font-display text-3xl font-extrabold leading-tight text-forest sm:text-4xl">
              Let’s find the right solution for your waste.
            </h2>

          </div>

          <Link
            to="/contact"
            className="inline-flex items-center gap-3 rounded-full bg-forest px-7 py-4 text-sm font-extrabold text-white transition hover:bg-leaf"
          >
            Request a callback
            <ArrowRight size={17} />
          </Link>

        </div>

      </section>

    </>
  );
}
