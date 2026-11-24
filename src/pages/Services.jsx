
import SectionHeading from '../components/SectionHeading.jsx';
import { services } from '../data.js';
import { Link } from 'react-router-dom';

import {
  ArrowRight,
  Recycle,
  ShieldCheck,
  Leaf,
  FileText,
  Trash2,
  Factory,
  MoveUpRight,
  CheckCircle2,
} from 'lucide-react';

// Local Service Images
import S1 from '../img/oUR sERVICE/S1.png';
import S2 from '../img/oUR sERVICE/S2.png';
import S3 from '../img/oUR sERVICE/S3.png';
import S4 from '../img/oUR sERVICE/S4.png';
import S5 from '../img/oUR sERVICE/S5.png';
import S6 from '../img/oUR sERVICE/S6.png';
import S7 from '../img/oUR sERVICE/S7.png';
import S8 from '../img/oUR sERVICE/S8.png';
import S9 from '../img/oUR sERVICE/S9.png';
import S10 from '../img/oUR sERVICE/S10.png';
import S11 from '../img/oUR sERVICE/S11.png';

// Service Portfolio Images
const serviceImages = [
  S2,
  S3,
  S4,
  S5,
  S6,
  S7,
  S8,
  S9,
  S10,
];

// Service benefits
const benefits = [
  {
    icon: Recycle,
    title: 'Responsible Recycling',
    text: 'Supporting suitable recycling and material recovery processes.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure Handling',
    text: 'Careful handling of confidential paper and data-related materials.',
  },
  {
    icon: Leaf,
    title: 'Resource Recovery',
    text: 'Helping businesses identify suitable recovery routes for materials.',
  },
  {
    icon: Factory,
    title: 'Business Solutions',
    text: 'Practical services for offices, institutions and industrial customers.',
  },
];

export default function Services() {
  return (
    <>

      {/* ================= HERO SECTION ================= */}

      <section className="relative flex min-h-[500px] items-center overflow-hidden bg-forest">

        {/* Background Image - URL UNCHANGED */}

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=2000&q=90')",
          }}
        />

        {/* Dark Overlay */}

        <div className="absolute inset-0 bg-gradient-to-r from-[#092b1d]/95 via-[#092b1d]/80 to-[#092b1d]/45" />

        {/* Decorative Circles */}

        <div className="absolute -right-20 top-10 h-80 w-80 rounded-full border border-white/10" />

        <div className="absolute -right-10 top-20 h-60 w-60 rounded-full border border-white/10" />

        <div className="container-width relative z-10 py-24">

          <div className="max-w-4xl">

            <span className="inline-flex items-center gap-2 rounded-full border border-lime/30 bg-white/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-lime backdrop-blur-sm">

              <Recycle size={15} />

              Our Services

            </span>

            <h1 className="mt-7 font-display text-4xl font-extrabold leading-[1.15] text-white sm:text-6xl lg:text-7xl">

              Waste solutions

              <span className="block text-lime">
                designed around your needs.
              </span>

            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
              Explore responsible waste management, secure paper
              shredding, destruction, recycling and scrap trading
              services from Waste Care Links.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">

              <a
                href="#service-list"
                className="btn-primary inline-flex items-center gap-3"
              >
                Explore Services
                <ArrowRight size={17} />
              </a>

              <Link
                to="/contact"
                className="inline-flex items-center gap-3 rounded-full border border-white/30 px-7 py-3.5 text-sm font-bold text-white transition hover:border-lime hover:bg-white/10"
              >
                Get a Consultation
                <MoveUpRight size={17} />
              </Link>

            </div>

          </div>

        </div>

        <div className="absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-[#092b1d]/40 to-transparent" />

      </section>


      {/* ================= WHAT WE DO SECTION ================= */}

      <section className="section-pad overflow-hidden bg-white">

        <div className="container-width grid items-center gap-14 lg:grid-cols-2">

          {/* Image - S1.png */}

          <div className="relative">

            <div className="overflow-hidden rounded-[30px]">

              <img
                src={S1}
                alt="Waste Care Links - What We Do"
                loading="lazy"
                className="h-[380px] w-full object-cover sm:h-[460px]"
              />

            </div>

            {/* Floating Card */}

            <div className="absolute -bottom-7 right-4 max-w-[270px] rounded-3xl border border-white bg-white p-6 shadow-[0_15px_50px_rgba(18,61,43,.15)] sm:-right-5">

              <div className="flex items-center gap-3">

                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-mist text-leaf">
                  <Recycle size={25} />
                </span>

                <div>

                  <h3 className="font-display text-lg font-extrabold text-forest">
                    Better Solutions
                  </h3>

                  <p className="text-xs text-ink/55">
                    Responsible waste management
                  </p>

                </div>

              </div>

              <p className="mt-4 text-sm leading-6 text-ink/65">
                Helping businesses manage waste materials through
                practical recycling and recovery solutions.
              </p>

            </div>

          </div>


          {/* Content */}

          <div className="pt-5 lg:pl-5">

            <SectionHeading
              eyebrow="What We Do"
              title="One partner for multiple material streams"
              description="Waste Care Links provides a range of waste management, shredding, destruction, recycling and scrap trading services for businesses and organisations."
            />

            <p className="mt-6 text-sm leading-8 text-ink/65">
              Every business has different waste management requirements.
              Our approach focuses on understanding your material type,
              quantity and location before discussing suitable service
              and collection arrangements.
            </p>

            <div className="mt-7 space-y-4">

              {[
                'Paper shredding and destruction',
                'Confidential document handling',
                'Plastic and e-waste recycling',
                'Scrap trading and material recovery',
              ].map((item) => (

                <div key={item} className="flex items-center gap-3">

                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-mist text-leaf">
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
              Discuss Your Requirement
              <ArrowRight size={17} />
            </Link>

          </div>

        </div>

      </section>


      {/* ================= SERVICE PORTFOLIO ================= */}

      <section
        id="service-list"
        className="section-pad scroll-mt-20 bg-mist"
      >

        <div className="container-width">

          <SectionHeading
            center
            eyebrow="Service Portfolio"
            title="Explore our services"
            description="Discover our range of waste management, shredding, destruction and recycling services. Service scope and arrangements can be discussed according to your requirements."
          />

          <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">

            {services.map((item, index) => {

              const Icon = item.icon || Recycle;

              const image =
                serviceImages[index % serviceImages.length];

              return (

                <Link
                  key={item.slug || item.title}
                  to={`/services/${item.slug}`}
                  className="group overflow-hidden rounded-[28px] border border-forest/5 bg-white shadow-[0_8px_35px_rgba(18,61,43,.05)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(18,61,43,.14)]"
                >

                  {/* Image */}

                  <div className="relative h-60 overflow-hidden">

                    <img
                      src={image}
                      alt={item.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    />

                    {/* Overlay */}

                    <div className="absolute inset-0 bg-gradient-to-t from-[#092b1d]/85 via-[#092b1d]/10 to-transparent" />

                    {/* Service Tag */}

                    <span className="absolute left-5 top-5 rounded-full border border-white/30 bg-white/15 px-4 py-2 text-[10px] font-extrabold uppercase tracking-wider text-white backdrop-blur-md">
                      {item.tag || 'Our Service'}
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
                      {item.title}
                    </h3>

                    <p className="mt-3 min-h-[84px] text-sm leading-7 text-ink/60">
                      {item.text}
                    </p>

                    <div className="mt-6 flex items-center justify-between border-t border-forest/10 pt-5">

                      <span className="text-sm font-extrabold text-leaf">
                        View Service Details
                      </span>

                      <span className="grid h-9 w-9 place-items-center rounded-full bg-mist text-leaf transition group-hover:bg-forest group-hover:text-white">
                        <ArrowRight size={16} />
                      </span>

                    </div>

                    {/* Bottom Line */}

                    <div className="mt-5 h-1 w-12 rounded-full bg-lime transition-all duration-500 group-hover:w-full" />

                  </div>

                </Link>

              );

            })}

          </div>

        </div>

      </section>


      {/* ================= WHY CHOOSE US ================= */}

      <section className="section-pad bg-white">

        <div className="container-width">

          <SectionHeading
            center
            eyebrow="Why Waste Care Links"
            title="A practical approach to waste management"
            description="We focus on understanding your requirements and coordinating suitable solutions for different waste and recyclable materials."
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {benefits.map((item) => {

              const Icon = item.icon;

              return (

                <div
                  key={item.title}
                  className="group rounded-3xl border border-forest/5 bg-white p-7 shadow-[0_8px_35px_rgba(18,61,43,.045)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(18,61,43,.10)]"
                >

                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-mist text-leaf transition duration-300 group-hover:bg-forest group-hover:text-white">
                    <Icon size={27} />
                  </div>

                  <h3 className="mt-6 font-display text-lg font-extrabold text-forest">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-ink/60">
                    {item.text}
                  </p>

                  <div className="mt-6 h-1 w-10 rounded-full bg-lime transition-all duration-500 group-hover:w-20" />

                </div>

              );

            })}

          </div>

        </div>

      </section>


      {/* ================= IMAGE CTA BANNER ================= */}

      <section className="relative overflow-hidden">

        {/* Background - URL UNCHANGED */}

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=2000&q=90')",
          }}
        />

        <div className="absolute inset-0 bg-[#092b1d]/85" />

        <div className="container-width relative z-10 py-20">

          <div className="grid items-center gap-10 lg:grid-cols-2">

            <div>

              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-lime">
                <Leaf size={17} />
                Let's Work Together
              </span>

              <h2 className="mt-5 max-w-2xl font-display text-3xl font-extrabold leading-tight text-white sm:text-5xl">
                Looking for a reliable waste management partner?
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-8 text-white/70">
                Tell us about your waste management, paper shredding,
                recycling or scrap trading requirements. Our team is
                ready to discuss suitable solutions.
              </p>

              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-lime px-7 py-4 text-sm font-extrabold text-forest transition hover:bg-white"
              >
                Discuss Your Requirement
                <ArrowRight size={17} />
              </Link>

            </div>


            {/* CTA Image Card - S11 */}

            <div className="relative overflow-hidden rounded-[30px] border border-white/20">

              <img
                src={S11}
                alt="Waste Care Links - Let's Work Together"
                loading="lazy"
                className="h-[300px] w-full object-cover sm:h-[360px]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#092b1d]/90 via-[#092b1d]/10 to-transparent" />

              <div className="absolute bottom-0 left-0 p-7 sm:p-9">

                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-lime text-forest">
                  <Recycle size={25} />
                </div>

                <h3 className="mt-5 font-display text-2xl font-extrabold text-white">
                  Better Waste. Better Future.
                </h3>

                <p className="mt-2 max-w-sm text-sm leading-7 text-white/75">
                  Responsible material handling starts with the right
                  approach.
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
              Have a requirement?
            </span>

            <h2 className="mt-3 font-display text-2xl font-extrabold text-forest sm:text-3xl">
              Need a service not listed here?
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-7 text-ink/60">
              Tell us what material or service you are looking for.
              We will be happy to discuss your requirements.
            </p>

          </div>

          <Link
            to="/contact"
            className="btn-primary inline-flex shrink-0 items-center gap-3"
          >
            Discuss Your Requirement
            <ArrowRight size={16} />
          </Link>

        </div>

      </section>

    </>
  );
}
