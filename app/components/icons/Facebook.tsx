import clsx from 'clsx';

export default function Facebook({
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
          d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z"
          stroke="#6E7678"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </IconComponent>
  );
}
