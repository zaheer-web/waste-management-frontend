import { Link } from 'react-router-dom';

import {
  ArrowRight,
  Leaf,
  ShieldCheck,
  Recycle,
  Handshake,
  CheckCircle2,
  Globe2,
  Sprout,
  MoveUpRight,
} from 'lucide-react';

import SectionHeading from '../components/SectionHeading.jsx';

// Local About Images
import A1 from '../img/About/A1.png';
import A2 from '../img/About/A2.png';
import A3 from '../img/About/A3.png';
import A4 from '../img/About/A4.png';

// Our Approach Cards
const approachCards = [
  {
    icon: Leaf,
    number: '01',
    title: 'Resource Responsibility',
    text: 'We encourage responsible material management and suitable reuse and recycling routes to help reduce unnecessary waste.',
    image: A2,
  },
  {
    icon: ShieldCheck,
    number: '02',
    title: 'Careful & Secure Handling',
    text: 'We understand the importance of discretion and care when handling confidential papers and data-related materials.',
    image: A3,
  },
  {
    icon: Handshake,
    number: '03',
    title: 'Reliable Coordination',
    text: 'We focus on clear communication, practical service requirements and building long-term business relationships.',
    image: A4,
  },
];

const commitments = [
  'Responsible waste management solutions',
  'Paper shredding and destruction services',
  'Recycling and material recovery support',
  'Scrap trading and collection coordination',
];

export default function About() {
  return (
    <>

      {/* ================= HERO SECTION ================= */}

      <section className="relative flex min-h-[520px] items-center overflow-hidden bg-forest">

        {/* Background Image - URL UNCHANGED */}

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=2000&q=90')",
          }}
        />

        {/* Overlay */}

        <div className="absolute inset-0 bg-gradient-to-r from-[#092b1d]/95 via-[#092b1d]/80 to-[#092b1d]/45" />

        {/* Decorative Elements */}

        <div className="absolute -right-24 top-10 h-80 w-80 rounded-full border border-white/10" />

        <div className="absolute -right-10 top-24 h-60 w-60 rounded-full border border-white/10" />

        <div className="container-width relative z-10 py-24">

          <div className="max-w-4xl">

            <div className="inline-flex items-center gap-2 rounded-full border border-lime/30 bg-white/10 px-5 py-2 backdrop-blur-sm">

              <Leaf size={15} className="text-lime" />

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-lime">
                About Waste Care Links
              </span>

            </div>

            <h1 className="mt-7 max-w-4xl font-display text-4xl font-extrabold leading-[1.15] text-white sm:text-5xl lg:text-7xl">

              Better waste practices.

              <span className="block text-lime">
                A better tomorrow.
              </span>

            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
              Supporting businesses with responsible waste management,
              secure shredding, recycling and scrap trading services.
              Building a better approach to material recovery, one step
              at a time.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">

              <Link
                to="/contact"
                className="btn-primary inline-flex items-center gap-3"
              >
                Work With Us
                <ArrowRight size={17} />
              </Link>

              <Link
                to="/services"
                className="inline-flex items-center gap-3 rounded-full border border-white/30 px-7 py-3.5 text-sm font-bold text-white transition hover:border-lime hover:bg-white/10"
              >
                Explore Services
                <MoveUpRight size={17} />
              </Link>

            </div>

          </div>

        </div>

        {/* Bottom Gradient */}

        <div className="absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-[#092b1d]/50 to-transparent" />

      </section>


      {/* ================= WHO WE ARE SECTION ================= */}

      <section className="section-pad overflow-hidden bg-white">

        <div className="container-width grid items-center gap-14 lg:grid-cols-2">

          {/* Image Side - A1.png */}

          <div className="relative">

            <div className="relative overflow-hidden rounded-[32px]">

              <img
                src={A1}
                alt="Waste Care Links - Who We Are"
                className="h-[380px] w-full object-cover sm:h-[500px]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-forest/35 to-transparent" />

            </div>

            {/* Floating Card */}

            <div className="absolute -bottom-7 right-4 max-w-[270px] rounded-3xl border border-white/60 bg-white p-6 shadow-[0_15px_50px_rgba(18,61,43,.15)] sm:-right-5">

              <div className="flex items-center gap-3">

                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-mist text-leaf">
                  <Recycle size={25} />
                </span>

                <div>

                  <p className="font-display text-lg font-extrabold text-forest">
                    Better Recovery
                  </p>

                  <p className="text-xs text-ink/55">
                    Responsible material handling
                  </p>

                </div>

              </div>

              <p className="mt-4 text-sm leading-6 text-ink/65">
                Making waste management more organised through practical
                and responsible solutions.
              </p>

            </div>

            {/* Decorative Circle */}

            <div className="absolute -left-7 -top-7 -z-10 h-32 w-32 rounded-full bg-lime/20 blur-2xl" />

          </div>


          {/* Content Side */}

          <div className="pt-5 lg:pl-5">

            <SectionHeading
              eyebrow="Who We Are"
              title="Waste is not the end of the story."
              description="Waste Care Links works across waste management, paper shredding and destruction, recycling and scrap trading. We aim to make material recovery easier to coordinate for offices, institutions, commercial establishments and industrial customers."
            />

            <p className="mt-6 text-sm leading-8 text-ink/65">
              We believe that responsible waste handling begins with the
              right process: understanding the material, identifying
              suitable recovery routes and coordinating collection or
              service requirements clearly.
            </p>

            <p className="mt-4 text-sm leading-8 text-ink/65">
              Our focus is on practical solutions that support businesses
              in managing different waste streams while encouraging
              recycling and responsible resource utilisation.
            </p>

            {/* Commitment List */}

            <div className="mt-7 space-y-4">

              {commitments.map((item) => (

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
              Get in Touch
              <ArrowRight size={17} />
            </Link>

          </div>

        </div>

      </section>


      {/* ================= OUR APPROACH SECTION ================= */}

      <section className="section-pad bg-mist">

        <div className="container-width">

          <SectionHeading
            center
            eyebrow="Our Approach"
            title="The principles behind our work"
            description="A practical, responsible and service-oriented approach to waste management and recyclable materials."
          />

          <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">

            {approachCards.map((item) => {

              const Icon = item.icon;

              return (

                <article
                  key={item.title}
                  className="group overflow-hidden rounded-[28px] border border-forest/5 bg-white shadow-[0_8px_35px_rgba(18,61,43,.05)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(18,61,43,.13)]"
                >

                  {/* Card Image - A2, A3, A4 */}

                  <div className="relative h-60 overflow-hidden">

                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-forest/10 to-transparent" />

                    <span className="absolute left-6 top-6 rounded-full border border-white/30 bg-white/15 px-4 py-2 text-xs font-bold tracking-widest text-white backdrop-blur-md">
                      {item.number}
                    </span>

                    <div className="absolute bottom-5 left-6 grid h-14 w-14 place-items-center rounded-2xl border border-white/30 bg-white/15 text-white backdrop-blur-md">
                      <Icon size={27} />
                    </div>

                  </div>

                  {/* Card Content */}

                  <div className="p-7">

                    <h3 className="font-display text-xl font-extrabold text-forest transition group-hover:text-leaf">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-ink/60">
                      {item.text}
                    </p>

                    <div className="mt-6 h-1 w-12 rounded-full bg-lime transition-all duration-500 group-hover:w-24" />

                  </div>

                </article>

              );

            })}

          </div>

        </div>

      </section>


      {/* ================= IMAGE BANNER ================= */}

      <section className="relative overflow-hidden">

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=2000&q=90')",
          }}
        />

        <div className="absolute inset-0 bg-[#092b1d]/80" />

        <div className="container-width relative z-10 grid items-center gap-10 py-20 lg:grid-cols-2">

          <div>

            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-lime">
              <Sprout size={17} />
              Our Commitment
            </span>

            <h2 className="mt-5 max-w-xl font-display text-3xl font-extrabold leading-tight text-white sm:text-5xl">
              Building a more responsible approach to waste.
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-8 text-white/70">
              We believe that better waste practices start with awareness,
              responsible handling and the right recovery process. Our
              goal is to support businesses with practical waste and
              recycling solutions.
            </p>

            <Link
              to="/services"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-lime px-7 py-4 text-sm font-extrabold text-forest transition hover:bg-white"
            >
              Discover Our Services
              <ArrowRight size={17} />
            </Link>

          </div>


          {/* Right Side Highlight */}

          <div className="grid gap-4 sm:grid-cols-2">

            <div className="rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur-md">

              <Recycle size={32} className="text-lime" />

              <h3 className="mt-5 font-display text-xl font-extrabold text-white">
                Recycling
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/65">
                Supporting suitable recycling and material recovery
                processes.
              </p>

            </div>

            <div className="rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur-md sm:mt-12">

              <ShieldCheck size={32} className="text-lime" />

              <h3 className="mt-5 font-display text-xl font-extrabold text-white">
                Secure Handling
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/65">
                Careful handling of confidential paper and data-related
                materials.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= FINAL CTA SECTION ================= */}

      <section className="relative overflow-hidden bg-forest py-20 text-center text-white">

        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=1800&q=85')",
          }}
        />

        <div className="absolute inset-0 bg-forest/80" />

        <div className="container-width relative z-10">

          <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl border border-lime/30 bg-white/10 text-lime">
            <Globe2 size={32} />
          </div>

          <h2 className="mx-auto mt-7 max-w-3xl font-display text-3xl font-extrabold leading-tight sm:text-5xl">
            Let’s make material recovery count.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-8 text-white/70">
            Tell us about your waste management, shredding or scrap
            trading requirements. Our team is ready to understand your
            needs and discuss suitable solutions.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">

            <Link
              to="/contact"
              className="btn-primary inline-flex items-center gap-3"
            >
              Contact Our Team
              <ArrowRight size={17} />
            </Link>

            <Link
              to="/services"
              className="inline-flex items-center gap-3 rounded-full border border-white/30 px-7 py-3.5 text-sm font-bold text-white transition hover:border-lime hover:bg-white/10"
            >
              View Services
              <MoveUpRight size={17} />
            </Link>

          </div>

        </div>

      </section>

    </>
  );
}