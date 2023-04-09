type LazyLoadImageProps = {
  src: string;
  alt: string;
  className?: string;
};

export default function LazyLoadImage({ src, alt, className }: LazyLoadImageProps) {
  return <img className={className} src={src} alt={alt} loading="lazy" decoding="async" />;
}
