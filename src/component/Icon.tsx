import {FC} from 'react';

interface IconProps {
  src: string;
  alt?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const Icon: FC<IconProps> = ({ src, alt = '', size = 'md', className = '' }) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };

  return (
    <img
      src={src}
      alt={alt}
      className={`${sizeClasses[size]} object-contain ${className}`}
    />
  );
};

export default Icon;