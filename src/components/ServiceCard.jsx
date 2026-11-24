
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ServiceCard({ item, image }) {
  const Icon = item.icon;

  return (
    <Link
      to={`/services/${item.slug}`}
      aria-label={`View details about ${item.title}`}
      className="service-card-link block h-full"
    >
      <article className="service-flip-card group">

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
              backgroundPosition: 'center'
            }}
          >

            <div className="service-card-overlay" />

            <div className="relative z-10 flex h-full flex-col justify-between p-7">

              <div className="flex items-center justify-between">

                <span className="rounded-full border border-white/30 bg-white/15 px-3 py-2 text-[10px] font-extrabold uppercase tracking-wider text-white backdrop-blur-md">
                  {item.tag}
                </span>

                <CheckCircle2 size={24} className="text-lime" />

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

      </article>
    </Link>
  );
}
