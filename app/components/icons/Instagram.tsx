import clsx from 'clsx';

export default function Instagram({
  className,
  classNameMark,
  classNameType,
  width = '20',
  link,
}: {
  className?: string;
  classNameMark?: string;
  classNameType?: string;
  width?: string;
  link?: string;
}) {
  const IconComponent = link ? 'a' : 'div';

  return (
    <IconComponent
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={clsx('facebook-icon', className)}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z"
          stroke="#6E7678"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16.0002 11.3698C16.1236 12.2021 15.9815 13.052 15.594 13.7988C15.2065 14.5456 14.5933 15.1512 13.8418 15.5295C13.0903 15.9077 12.2386 16.0394 11.408 15.9057C10.5773 15.7721 9.80996 15.3799 9.21503 14.785C8.62011 14.1901 8.22793 13.4227 8.09426 12.592C7.9606 11.7614 8.09226 10.9097 8.47052 10.1582C8.84878 9.40667 9.45438 8.79355 10.2012 8.40605C10.948 8.01856 11.7979 7.8764 12.6302 7.99981C13.4791 8.1257 14.265 8.52128 14.8719 9.12812C15.4787 9.73496 15.8743 10.5209 16.0002 11.3698Z"
          stroke="#6E7678"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17.5 6.5H17.51"
          stroke="#6E7678"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </IconComponent>
  );
}
