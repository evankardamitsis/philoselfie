// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable hydrogen/prefer-image-component */
import clsx from 'clsx';
import React from 'react';

type BannerProps = {
  className?: string;
  image: string;
  imagePosition?: 'left' | 'right';
  imageWidth?: number;
  imageHeight?: number;
  children: React.ReactNode;
};

type ImageStyle = {
  width?: string;
  height?: string;
  position?: 'absolute';
  top?: string;
  left?: string;
  right?: string;
  transform?: string;
  maxWidth?: string;
};

const Banner: React.FC<BannerProps> = ({
  className,
  image,
  imagePosition = 'left',
  imageWidth,
  imageHeight,
  children,
}) => {
  const containerClass = clsx('flex items-center, justify-center', className);
  const imageStyle: ImageStyle = {
    width: imageWidth ? `${imageWidth}px` : 'auto',
    height: imageHeight ? `${imageHeight}px` : 'auto',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    maxWidth: '100%',
  };

  if (imagePosition === 'left') {
    imageStyle.left = '0';
  } else if (imagePosition === 'right') {
    imageStyle.right = '0';
  }

  return (
    <div className={containerClass}>
      <div className="relative w-full">
        <img src={image} alt="Banner section" style={imageStyle} />
        <div className="text-center">{children}</div>
      </div>
    </div>
  );
};

export default Banner;
