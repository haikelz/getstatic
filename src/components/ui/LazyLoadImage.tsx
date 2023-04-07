type LazyLoadImageProps = {
  src: string;
  alt: string;
  className?: string;
};

const LazyLoadImage = ({ src, alt, className }: LazyLoadImageProps) => {
  return <img className={className} src={src} alt={alt} loading="lazy" decoding="async" />;
};

export default LazyLoadImage;
