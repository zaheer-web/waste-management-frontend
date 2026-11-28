import { useState } from 'react';

import {
  ArrowRight,
  Check,
  Recycle,
  ShieldCheck,
  Leaf,
  Truck,
  CircleCheck,
  Sprout,
  MoveRight,
  Play,
  X
} from 'lucide-react';

import { Link } from 'react-router-dom';

// VIDEO IMPORTS
import video1 from '../video/vid-3.mp4';
import video2 from '../video/vid-1.mp4';
import video3 from '../video/vid-2.mp4';

import SectionHeading from '../components/SectionHeading.jsx';
import ServiceCard from '../components/ServiceCard.jsx';

import { services, scrapTypes } from '../data.js';

// LOCAL IMAGES
import H1 from '../img/Home/H2.png';
import H2 from '../img/Home/H2.png';
import H3 from '../img/Home/H3.png';
import H4 from '../img/Home/H4.png';
import H5 from '../img/Home/H5.png';
import H6 from '../img/Home/H6.png';
import H7 from '../img/Home/H7.png';
import H8 from '../img/Home/H8.png';

// IMAGE SEQUENCE
const homeImages = [H1, H2, H3, H4, H5, H6, H7, H8];

// BACKGROUND URL
const heroImg =
  'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=1900&q=85';

// VIDEO GALLERY DATA
const homeVideos = [
  {
    id: 1,
    title: 'Secure Paper Shredding Services',
    category: 'Secure Document Destruction',
    description:
      'Protect your confidential business information with secure paper shredding solutions. From office records and financial documents to sensitive paperwork, we support responsible document destruction and help businesses maintain information security.',
    video: video1,
    thumbnail: H2
  },
  {
    id: 2,
    title: 'Data & Media Destruction',
    category: 'Data Security & Media Disposal',
    description:
      'Safeguard sensitive digital information through responsible data and media destruction. Our solutions focus on the secure disposal of storage media and information-bearing materials, helping businesses reduce the risk of unwanted data exposure.',
    video: video2,
    thumbnail: H5
  },
  {
    id: 3,
    title: 'Recycling & Resource Recovery',
    category: 'Responsible Recycling',
    description:
      'Discover how recyclable materials can be recovered and given a new purpose. We support responsible material segregation, collection and recycling practices that help businesses reduce waste and make better use of valuable resources.',
    video: video3,
    thumbnail: H7
  }
];

export default function Home() {

  // ACTIVE VIDEO STATE
  const [activeVideo, setActiveVideo] = useState(null);

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

          {/* HERO IMAGE */}
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


      {/* VIDEO GALLERY SECTION */}
      <section className="section-pad overflow-hidden bg-mist">

        <div className="container-width">

          {/* VIDEO SECTION HEADING */}
          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">

            <div className="max-w-2xl">

              <span className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[.18em] text-leaf">
                <Play size={16} />
                Our Video Gallery
              </span>

              <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-forest sm:text-4xl">
                Explore Our Work
                <span className="text-leaf"> In Action.</span>
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-ink/60">
                Get a closer look at how we help businesses protect
                confidential information, manage waste responsibly and
                recover valuable recyclable resources.
              </p>

            </div>

            <span className="text-xs font-extrabold uppercase tracking-widest text-leaf">
              03 Featured Videos
            </span>

          </div>


          {/* THREE VIDEO CARDS */}
          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">

            {homeVideos.map((item) => (

              <button
                key={item.id}
                type="button"
                onClick={() => setActiveVideo(item)}
                aria-label={`Play ${item.title}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-forest/5 bg-white text-left shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-leaf"
              >

                {/* VIDEO THUMBNAIL */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-forest">

                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-forest/75 via-black/10 to-black/10 transition group-hover:from-forest/85" />

                  {/* PLAY BUTTON */}
                  <div className="absolute inset-0 flex items-center justify-center">

                    <span className="grid h-16 w-16 place-items-center rounded-full bg-lime text-forest shadow-xl transition duration-300 group-hover:scale-110 group-hover:bg-white">

                      <Play
                        size={26}
                        fill="currentColor"
                        className="ml-1"
                      />

                    </span>

                  </div>

                  {/* VIDEO LABEL */}
                  <span className="absolute bottom-4 left-4 rounded-full border border-white/30 bg-forest/70 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-widest text-white backdrop-blur">
                    Watch Video
                  </span>

                </div>


                {/* VIDEO INFORMATION */}
                <div className="flex flex-1 flex-col p-6">

                  {/* CATEGORY */}
                  <span className="mb-3 text-[10px] font-extrabold uppercase tracking-[.16em] text-leaf">
                    {item.category}
                  </span>

                  {/* TITLE */}
                  <h3 className="font-display text-xl font-extrabold leading-snug text-forest transition-colors group-hover:text-leaf">
                    {item.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="mt-3 flex-1 text-sm leading-7 text-ink/60">
                    {item.description}
                  </p>

                  {/* PLAY BUTTON TEXT */}
                  <span className="mt-6 inline-flex items-center gap-2 border-t border-forest/10 pt-4 text-xs font-extrabold uppercase tracking-wider text-leaf">
                    Play Video
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </span>

                </div>

              </button>

            ))}

          </div>

        </div>

      </section>


      {/* VIDEO POPUP MODAL */}
      {activeVideo && (

        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={() => setActiveVideo(null)}
        >

          <div
            className="relative w-full max-w-5xl overflow-hidden rounded-2xl bg-forest shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >

            {/* MODAL HEADER */}
            <div className="flex items-center justify-between gap-4 px-5 py-4 sm:px-7">

              <div>

                <span className="text-[10px] font-extrabold uppercase tracking-widest text-lime">
                  Waste Care Links
                </span>

                <h3 className="mt-1 font-display text-lg font-extrabold text-white sm:text-xl">
                  {activeVideo.title}
                </h3>

              </div>

              {/* CLOSE BUTTON */}
              <button
                type="button"
                onClick={() => setActiveVideo(null)}
                aria-label="Close video"
                className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/10 text-white transition hover:bg-lime hover:text-forest"
              >
                <X size={22} />
              </button>

            </div>


            {/* VIDEO PLAYER */}
            <div className="bg-black">

              <video
                key={activeVideo.id}
                src={activeVideo.video}
                poster={activeVideo.thumbnail}
                controls
                autoPlay
                playsInline
                preload="metadata"
                className="aspect-video max-h-[75vh] w-full object-contain"
              >

                Your browser does not support HTML5 video.

              </video>

            </div>


            {/* MODAL FOOTER */}
            <div className="px-5 py-5 sm:px-7">

              <span className="text-[10px] font-extrabold uppercase tracking-widest text-lime">
                {activeVideo.category}
              </span>

              <p className="mt-2 text-sm leading-7 text-white/65">
                {activeVideo.description}
              </p>

            </div>

          </div>

        </div>

      )}


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

          {/* SERVICE CARDS */}
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