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
      className="group block h-full"
    >
      <article className="flex h-full flex-col overflow-hidden rounded-[24px] border border-forest/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

        {/* SERVICE IMAGE */}

        <div className="relative h-[220px] w-full overflow-hidden sm:h-[240px]">

          <img
            src={image}
            alt={item.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Image Overlay */}

          <div className="absolute inset-0 bg-gradient-to-t from-[#092b1d]/70 via-transparent to-transparent" />

          {/* Service Tag */}

          <span className="absolute left-5 top-5 rounded-full border border-white/30 bg-white/15 px-4 py-2 text-[10px] font-extrabold uppercase tracking-wider text-white backdrop-blur-md">
            {item.tag}
          </span>

          {/* Service Icon */}

          <span className="absolute bottom-5 left-5 grid h-12 w-12 place-items-center rounded-xl bg-lime text-forest shadow-lg">
            <Icon size={24} />
          </span>

        </div>

        {/* SERVICE CONTENT */}

        <div className="flex flex-1 flex-col p-6">

          <h3 className="font-display text-xl font-extrabold text-forest transition-colors duration-300 group-hover:text-leaf">
            {item.title}
          </h3>

          <p className="mt-3 flex-1 text-sm leading-7 text-ink/60">
            {item.text}
          </p>

          {/* CARD FOOTER */}

          <div className="mt-6 flex items-center justify-between border-t border-forest/10 pt-5">

            <span className="inline-flex items-center gap-2 text-sm font-extrabold text-leaf">
              Explore service
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </span>

            <CheckCircle2
              size={21}
              className="text-leaf"
            />

          </div>

        </div>

      </article>
    </Link>
  );
}