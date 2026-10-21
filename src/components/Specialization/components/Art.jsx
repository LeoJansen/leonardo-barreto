import Image from 'next/image';

function Art() {
  return (
    <figure className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-site-border bg-brand-deep shadow-[0_24px_60px_-32px_rgba(15,61,59,0.5)] md:aspect-[4/5]">
      <Image
        src="/assets/under-img.png"
        alt="Dr. Leonardo Barreto em frente ao Hospital Israelita Albert Einstein"
        fill
        quality={75}
        sizes="(max-width: 767px) calc(100vw - 2.5rem), (max-width: 1279px) calc(50vw - 2rem), 36rem"
        className="object-cover object-[42%_center]"
      />
    </figure>
  );
}

export default Art;
