import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const serviceImages = {
  'paper-shredding':
    'https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=900&q=85',

  'confidential-paper-destruction':
    'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=900&q=85',

  'old-data-shredding':
    'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=900&q=85',

  'data-media-destruction':
    'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=85',

  'paper-recycling':
    'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=900&q=85',

  'plastic-recycling':
    'https://images.unsplash.com/photo-1605600659873-d808a13e4d9a?auto=format&fit=crop&w=900&q=85',

  'e-waste-recycling':
    'https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&w=900&q=85',

  'battery-recycling':
    'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=900&q=85',

  'industrial-scrap-recycling':
    'https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=900&q=85',

  'scrap-trading':
    'https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=900&q=85',
};

export default function ServiceCard({ item, image: cardImage }) {
  const Icon = item.icon;

  // Local image priority
  const image =
    cardImage ||
    item.image ||
    serviceImages[item.slug] ||
    serviceImages['paper-recycling'];

  return (
    <Link
      to={`/services/${item.slug}`}
      aria-label={`View details about ${item.title}`}
      className="service-card-link block h-full"
    >

      <article className="service-flip-card group h-full">

        {/* ================================= */}
        {/* MOBILE CARD - IMAGE ALWAYS VISIBLE */}
        {/* ================================= */}

        <div className="md:hidden h-full overflow-hidden rounded-[24px] border border-forest/10 bg-white shadow-sm transition duration-300 active:scale-[0.98]">

          {/* Service Image */}

          <div className="relative h-[210px] w-full overflow-hidden">

            <img
              src={image}
              alt={item.title}
              loading="lazy"
              className="h-full w-full object-cover"
            />

            {/* Image Overlay */}

            <div className="absolute inset-0 bg-gradient-to-t from-[#092b1d]/75 via-transparent to-transparent" />

            {/* Service Tag */}

            <span className="absolute left-4 top-4 rounded-full border border-white/30 bg-white/15 px-3 py-2 text-[10px] font-extrabold uppercase tracking-wider text-white backdrop-blur-md">
              {item.tag}
            </span>

            {/* Icon */}

            <span className="absolute bottom-4 left-4 grid h-12 w-12 place-items-center rounded-xl bg-lime text-forest shadow-lg">
              <Icon size={24} />
            </span>

          </div>


          {/* Service Content */}

          <div className="flex flex-col p-5">

            <h3 className="font-display text-lg font-extrabold text-forest">
              {item.title}
            </h3>

            <p className="mt-3 text-sm leading-6 text-ink/60">
              {item.text}
            </p>

            {/* Explore Button */}

            <div className="mt-5 flex items-center justify-between border-t border-forest/10 pt-4">

              <span className="inline-flex items-center gap-2 text-sm font-extrabold text-leaf">
                Explore service
                <ArrowUpRight size={17} />
              </span>

              <CheckCircle2
                size={20}
                className="text-leaf"
              />

            </div>

          </div>

        </div>


        {/* ================================= */}
        {/* DESKTOP CARD - EXISTING FLIP DESIGN */}
        {/* ================================= */}

        <div className="hidden md:block h-full">

          <div className="service-flip-inner">

            {/* FRONT SIDE */}

            <div className="service-card-front">

              <div className="flex items-start justify-between">

                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-mist text-leaf">
                  <Icon size={27} />
                </span>

                <span className="rounded-full bg-mist px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-wider text-leaf">
                  {item.tag}
                </span>

              </div>

              <div className="mt-7">

                <h3 className="font-display text-xl font-extrabold text-forest">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-ink/60">
                  {item.text}
                </p>

              </div>

              <div className="mt-auto flex items-center justify-between border-t border-forest/10 pt-5">

                <span className="inline-flex items-center gap-2 text-sm font-extrabold text-leaf">
                  Explore service
                  <ArrowUpRight size={17} />
                </span>

                <span className="text-xs font-semibold text-slate-400">
                  Hover to explore
                </span>

              </div>

            </div>


            {/* BACK SIDE */}

            <div
              className="service-card-back"
              style={{
                backgroundImage: `url("${image}")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >

              <div className="service-card-overlay" />

              <div className="relative z-10 flex h-full flex-col justify-between p-7">

                <div className="flex items-center justify-between">

                  <span className="rounded-full border border-white/30 bg-white/15 px-3 py-2 text-[10px] font-extrabold uppercase tracking-wider text-white backdrop-blur-md">
                    {item.tag}
                  </span>

                  <CheckCircle2
                    size={24}
                    className="text-lime"
                  />

                </div>

                <div>

                  <h3 className="font-display text-2xl font-extrabold leading-tight text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-white/80">
                    {item.text}
                  </p>

                  <span className="mt-6 inline-flex items-center gap-2 rounded-full bg-lime px-5 py-3 text-sm font-extrabold text-forest transition hover:bg-white">
                    View Full Details
                    <ArrowUpRight size={17} />
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>

      </article>

    </Link>
  );
}