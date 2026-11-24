export default function SectionHeading({ eyebrow, title, description, center = false }) {
  return <div className={center ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}><span className={`eyebrow ${center ? 'justify-center' : ''}`}>{eyebrow}</span><h2 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-tight text-forest sm:text-4xl">{title}</h2>{description && <p className="mt-4 text-[15px] leading-7 text-ink/65">{description}</p>}</div>;
}
