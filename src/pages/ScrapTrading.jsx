import { Link } from 'react-router-dom';

import {
  ArrowRight,
  Recycle,
  Package,
  Boxes,
  Factory,
  Cpu,
  FileText,
  CheckCircle2,
  MapPin,
  ClipboardList,
  MoveUpRight,
  Leaf,
  Truck,
} from 'lucide-react';

import SectionHeading from '../components/SectionHeading.jsx';
import { scrapTypes } from '../data.js';

// Local Trading Images
import T1 from '../img/tRADING/T1.png';
import T2 from '../img/tRADING/T2.png';
import T3 from '../img/tRADING/T3.png';
import T4 from '../img/tRADING/T4.png';
import T5 from '../img/tRADING/T5.png';
import T6 from '../img/tRADING/T6.png';
import T7 from '../img/tRADING/T7.png';
import T8 from '../img/tRADING/T8.png';

// Material Category Images
const scrapImages = [
  T2,
  T3,
  T4,
  T5,
  T6,
  T7,
];

const icons = [FileText, Package, Boxes, Cpu, Factory, Recycle];

const enquirySteps = [
  {
    number: '01',
    title: 'Share Material Details',
    text: 'Tell us the scrap category, material type and approximate quantity.',
    icon: ClipboardList,
  },
  {
    number: '02',
    title: 'Provide Location',
    text: 'Share your pickup or delivery location along with material condition.',
    icon: MapPin,
  },
  {
    number: '03',
    title: 'Discuss Requirements',
    text: 'Our team will connect with you to discuss inspection and next steps.',
    icon: HandshakeIcon,
  },
];

function HandshakeIcon({ size = 24 }) {
  return <Truck size={size} />;
}

export default function ScrapTrading() {
  return (
    <>

      {/* ================= HERO SECTION ================= */}

      <section className="relative flex min-h-[520px] items-center overflow-hidden bg-forest">

        {/* Background Image */}

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=2000&q=90')",
          }}
        />

        {/* Overlay */}

        <div className="absolute inset-0 bg-gradient-to-r from-[#092b1d]/95 via-[#092b1d]/85 to-[#092b1d]/45" />

        {/* Decorative Circles */}

        <div className="absolute -right-20 top-10 h-80 w-80 rounded-full border border-white/10" />

        <div className="absolute -right-10 top-20 h-60 w-60 rounded-full border border-white/10" />

        <div className="container-width relative z-10 py-24">

          <div className="max-w-4xl">

            <span className="inline-flex items-center gap-2 rounded-full border border-lime/30 bg-white/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-lime backdrop-blur-sm">

              <Recycle size={15} />

              Scrap Trading & Procurement

            </span>

            <h1 className="mt-7 font-display text-4xl font-extrabold leading-[1.15] text-white sm:text-6xl lg:text-7xl">

              Connecting recyclable scrap

              <span className="block text-lime">
                with its next use.
              </span>

            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
              We deal in multiple types of recyclable scrap for
              commercial and industrial requirements. Share your
              material details to discuss trading possibilities.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">

              <Link
                to="/contact"
                className="btn-primary inline-flex items-center gap-3"
              >
                Enquire About Scrap
                <ArrowRight size={17} />
              </Link>

              <a
                href="#scrap-categories"
                className="inline-flex items-center gap-3 rounded-full border border-white/30 px-7 py-3.5 text-sm font-bold text-white transition hover:border-lime hover:bg-white/10"
              >
                Explore Materials
                <MoveUpRight size={17} />
              </a>

            </div>

          </div>

        </div>

        <div className="absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-[#092b1d]/50 to-transparent" />

      </section>


      {/* ================= WHAT WE DO / INTRO SECTION ================= */}

      <section className="section-pad overflow-hidden bg-white">

        <div className="container-width grid items-center gap-14 lg:grid-cols-2">

          {/* Image - T1.png */}

          <div className="relative">

            <div className="overflow-hidden rounded-[30px]">

              <img
                src={T1}
                alt="Industrial material recovery and recycling"
                loading="lazy"
                className="h-[380px] w-full object-cover sm:h-[470px]"
              />

            </div>

            {/* Floating Information Card */}

            <div className="absolute -bottom-7 right-4 max-w-[270px] rounded-3xl border border-white bg-white p-6 shadow-[0_15px_50px_rgba(18,61,43,.15)] sm:-right-5">

              <div className="flex items-center gap-3">

                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-mist text-leaf">
                  <Boxes size={25} />
                </span>

                <div>

                  <h3 className="font-display text-lg font-extrabold text-forest">
                    Material Recovery
                  </h3>

                  <p className="text-xs text-ink/55">
                    Scrap trading solutions
                  </p>

                </div>

              </div>

              <p className="mt-4 text-sm leading-6 text-ink/65">
                Connecting suitable recyclable materials with
                potential recovery and trading opportunities.
              </p>

            </div>

          </div>


          {/* Content Side */}

          <div className="pt-5 lg:pl-5">

            <SectionHeading
              eyebrow="What We Do"
              title="Making scrap trading more organised"
              description="Waste Care Links deals in multiple types of recyclable scrap materials for commercial and industrial requirements."
            />

            <p className="mt-6 text-sm leading-8 text-ink/65">
              We understand that different materials require different
              handling and trading considerations. Our focus is on
              understanding the material category, grade, approximate
              quantity and location before discussing suitable
              possibilities.
            </p>

            <p className="mt-4 text-sm leading-8 text-ink/65">
              Whether you are looking to sell recyclable scrap or
              procure suitable materials, you can share your
              requirements with our team for further discussion.
            </p>

            <div className="mt-7 space-y-4">

              {[
                'Multiple recyclable scrap categories',
                'Commercial and industrial requirements',
                'Material and quantity-based discussions',
                'Pickup and delivery coordination enquiries',
              ].map((item) => (

                <div key={item} className="flex items-start gap-3">

                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-mist text-leaf">
                    <CheckCircle2 size={15} />
                  </span>

                  <p className="text-sm font-semibold text-forest">
                    {item}
                  </p>

                </div>

              ))}

            </div>

            <Link
              to="/contact"
              className="btn-primary mt-9 inline-flex items-center gap-3"
            >
              Contact Our Team
              <ArrowRight size={17} />
            </Link>

          </div>

        </div>

      </section>


      {/* ================= MATERIAL CATEGORIES ================= */}

      <section
        id="scrap-categories"
        className="section-pad scroll-mt-20 bg-mist"
      >

        <div className="container-width">

          <SectionHeading
            center
            eyebrow="Material Categories"
            title="A range of recyclable scrap materials"
            description="Explore the material categories we deal in. Material acceptance, grade, quantity and commercial terms are subject to assessment and mutual confirmation."
          />

          <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">

            {scrapTypes.map((item, index) => {

              const Icon = icons[index % icons.length];

              const image = scrapImages[index % scrapImages.length];

              return (

                <Link
                  key={item}
                  to="/contact"
                  aria-label={`Enquire about ${item}`}
                  className="group block overflow-hidden rounded-[28px] border border-forest/5 bg-white shadow-[0_8px_35px_rgba(18,61,43,.05)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(18,61,43,.14)] focus:outline-none focus-visible:ring-4 focus-visible:ring-leaf/30"
                >

                  {/* Local Category Image */}

                  <div className="relative h-60 overflow-hidden">

                    <img
                      src={image}
                      alt={item}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    />

                    {/* Image Overlay */}

                    <div className="absolute inset-0 bg-gradient-to-t from-[#092b1d]/85 via-[#092b1d]/10 to-transparent" />

                    {/* Number */}

                    <span className="absolute left-5 top-5 rounded-full border border-white/30 bg-white/15 px-4 py-2 text-xs font-bold tracking-widest text-white backdrop-blur-md">
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    {/* Icon */}

                    <div className="absolute bottom-5 left-5 grid h-14 w-14 place-items-center rounded-2xl border border-white/30 bg-white/15 text-white backdrop-blur-md transition duration-300 group-hover:bg-lime group-hover:text-forest">
                      <Icon size={27} />
                    </div>

                    {/* Arrow */}

                    <div className="absolute bottom-5 right-5 grid h-11 w-11 place-items-center rounded-full bg-white text-forest transition duration-300 group-hover:rotate-45 group-hover:bg-lime">
                      <ArrowRight size={19} />
                    </div>

                  </div>


                  {/* Content */}

                  <div className="p-7">

                    <h3 className="font-display text-xl font-extrabold text-forest transition group-hover:text-leaf">
                      {item}
                    </h3>

                    <p className="mt-4 min-h-[72px] text-sm leading-7 text-ink/60">
                      Trading and recovery enquiries for suitable
                      material streams, subject to inspection and
                      availability.
                    </p>

                    <div className="mt-6 flex items-center justify-between border-t border-forest/10 pt-5">

                      <span className="text-sm font-extrabold text-leaf">
                        Enquire About Material
                      </span>

                      <span className="grid h-9 w-9 place-items-center rounded-full bg-mist text-leaf transition group-hover:bg-forest group-hover:text-white">
                        <ArrowRight size={16} />
                      </span>

                    </div>

                    <div className="mt-5 h-1 w-12 rounded-full bg-lime transition-all duration-500 group-hover:w-full" />

                  </div>

                </Link>

              );

            })}

          </div>

        </div>

      </section>


      {/* ================= ENQUIRY PROCESS ================= */}

      <section className="section-pad bg-white">

        <div className="container-width">

          <div className="grid items-center gap-14 lg:grid-cols-2">

            {/* Left Content */}

            <div>

              <SectionHeading
                eyebrow="How To Enquire"
                title="Help us understand your scrap requirement"
                description="For a faster discussion, share the material category, approximate quantity, location, condition and any photographs you may have."
              />

              <p className="mt-6 text-sm leading-8 text-ink/65">
                Providing accurate material information helps our
                team understand your requirement and discuss suitable
                next steps.
              </p>

              <Link
                to="/contact"
                className="btn-primary mt-8 inline-flex items-center gap-3"
              >
                Submit Your Enquiry
                <ArrowRight size={17} />
              </Link>

            </div>


            {/* Right Process Card */}

            <div className="relative overflow-hidden rounded-[30px] bg-mist p-7 sm:p-10">

              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-lime/20 blur-3xl" />

              <div className="relative z-10">

                <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-leaf">
                  <ClipboardList size={15} />
                  Simple Process
                </span>

                <h3 className="mt-6 font-display text-2xl font-extrabold text-forest">
                  Three simple steps
                </h3>

                <div className="mt-8 space-y-7">

                  {enquirySteps.map((step, index) => {

                    const Icon = step.icon;

                    return (

                      <div key={step.number} className="relative flex gap-5">

                        {/* Connecting Line */}

                        {index !== enquirySteps.length - 1 && (
                          <div className="absolute left-[23px] top-14 h-14 w-px bg-forest/15" />
                        )}

                        <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-forest text-lime">
                          <Icon size={22} />
                        </div>

                        <div className="flex-1">

                          <div className="flex flex-wrap items-center gap-3">

                            <span className="text-xs font-extrabold tracking-widest text-leaf">
                              {step.number}
                            </span>

                            <h4 className="font-display text-lg font-extrabold text-forest">
                              {step.title}
                            </h4>

                          </div>

                          <p className="mt-2 text-sm leading-7 text-ink/60">
                            {step.text}
                          </p>

                        </div>

                      </div>

                    );

                  })}

                </div>

                <Link
                  to="/contact"
                  className="btn-primary mt-9 flex w-full items-center justify-center gap-3"
                >
                  Submit An Enquiry
                  <ArrowRight size={17} />
                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= SCRAP TRADING ENQUIRIES ================= */}

      <section className="relative overflow-hidden">

        {/* Background Image */}

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=2000&q=90')",
          }}
        />

        {/* Overlay */}

        <div className="absolute inset-0 bg-[#092b1d]/85" />

        <div className="container-width relative z-10 py-20">

          <div className="grid items-center gap-10 lg:grid-cols-2">

            <div>

              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-lime">
                <Leaf size={17} />
                Scrap Trading Enquiries
              </span>

              <h2 className="mt-5 max-w-2xl font-display text-3xl font-extrabold leading-tight text-white sm:text-5xl">
                Have recyclable scrap to sell or procure?
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-8 text-white/70">
                Share your material details with Waste Care Links.
                Our team will connect with you to discuss the
                possibilities and next steps.
              </p>

              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-lime px-7 py-4 text-sm font-extrabold text-forest transition hover:bg-white"
              >
                Start An Enquiry
                <ArrowRight size={17} />
              </Link>

            </div>


            {/* Local Image - T8.png */}

            <div className="relative overflow-hidden rounded-[30px] border border-white/20">

              <img
                src={T8}
                alt="Scrap Trading Enquiries - Waste Care Links"
                loading="lazy"
                className="h-[300px] w-full object-cover sm:h-[360px]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#092b1d]/90 via-[#092b1d]/10 to-transparent" />

              <div className="absolute bottom-0 left-0 p-7 sm:p-9">

                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-lime text-forest">
                  <Recycle size={25} />
                </div>

                <h3 className="mt-5 font-display text-2xl font-extrabold text-white">
                  Give Materials Another Purpose.
                </h3>

                <p className="mt-2 max-w-sm text-sm leading-7 text-white/75">
                  Responsible material recovery starts with the
                  right connection.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= FINAL CTA ================= */}

      <section className="bg-mist py-16">

        <div className="container-width flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">

          <div>

            <span className="eyebrow">
              Let's Connect
            </span>

            <h2 className="mt-3 font-display text-2xl font-extrabold text-forest sm:text-3xl">
              Looking for a scrap trading partner?
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-7 text-ink/60">
              Tell us about your material, quantity and location.
              Let's discuss your requirements.
            </p>

          </div>

          <Link
            to="/contact"
            className="btn-primary inline-flex shrink-0 items-center gap-3"
          >
            Contact Us
            <ArrowRight size={16} />
          </Link>

        </div>

      </section>

    </>
  );
}