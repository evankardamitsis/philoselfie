import clsx from 'clsx';

export default function LogoIcon({
  className,
  classNameMark,
  classNameType,
}: {
  className?: string;
  classNameMark?: string;
  classNameType?: string;
}) {
  return (
    // <svg
    //   className={className}
    //   width="65"
    //   height="58"
    //   viewBox="0 0 65 58"
    //   fill="none"
    //   preserveAspectRatio="xMidYMid meet"
    //   xmlns="http://www.w3.org/2000/svg"
    // >
    //   <path
    //     className={clsx(['fill-offBlack', classNameMark])}
    //     fillRule="evenodd"
    //     clipRule="evenodd"
    //     d="M60 16.2024L42.2484 25.7757H59.8314V30H5.20153V25.7757H23.0457C23.0469 25.7673 23.0481 25.7589 23.0494 25.7506L5 16.2115L7.19911 12.5285L24.7298 21.7935C24.9427 21.5154 25.1734 21.248 25.4214 20.993L15.3417 4.92989L19.2083 2.78233L29.1635 18.647C29.5117 18.529 29.8675 18.4304 30.2291 18.3517L30.2964 0L34.7865 0.0145666L34.719 18.413C35.1129 18.5101 35.4993 18.6312 35.8756 18.7752L45.768 2.79322L49.6482 4.919L39.5246 21.2745C39.7448 21.5212 39.9498 21.7782 40.1388 22.0442L57.767 12.5375L60 16.2024Z"
    //     fill="#3A3E3E"
    //   />
    //   <path
    //     className={clsx(['fill-offBlack', classNameType])}
    //     d="M0.53022 55L6.16222 39.6H9.33022L14.9622 55H11.9702L10.7382 51.436H4.73222L3.47822 55H0.53022ZM5.50222 49.236H9.96822L7.72422 42.834L5.50222 49.236ZM19.146 55V39.6H21.962V45.826L27.66 39.6H31.136L25.46 45.716L31.29 55H27.836L23.436 47.872L21.962 49.478V55H19.146ZM39.8843 55L34.2523 39.6H37.2663L41.6223 52.118L46.0003 39.6H48.9703L43.3383 55H39.8843ZM50.056 55L55.688 39.6H58.856L64.488 55H61.496L60.264 51.436H54.258L53.004 55H50.056ZM55.028 49.236H59.494L57.25 42.834L55.028 49.236Z"
    //     fill="#2B2E2E"
    //   />
    // </svg>
    <svg
      className={className}
      width="672"
      height="120"
      viewBox="0 0 672 120"
      fill="none"
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={clsx(['fill-offBlack', classNameMark])}
        d="M11.7975 26.0571H18.1271C23.5949 26.0571 25.4671 24.1129 25.4671 19.3666V17.0336C25.4671 12.2873 23.5949 10.3431 18.1271 10.3431H11.7975V26.0571ZM0 55.2198V0.934933H21.0945C31.7967 0.934933 37.8122 7.70153 37.8122 18.2001C37.8122 28.6987 31.7967 35.4695 21.0945 35.4695H11.7975V55.2198H0Z"
        fill="black"
      />
      <path
        className={clsx(['fill-offBlack', classNameMark])}
        d="M84.7829 32.5122H71.0327V55.2211H59.2352V0.931959H71.0327V22.9435H84.7829V0.931959H96.5804V55.2211H84.7829V32.5122Z"
        fill="black"
      />
      <path
        className={clsx(['fill-offBlack', classNameMark])}
        d="M119.412 55.2215V46.5868H131.129V9.5671H119.412V0.932397H154.567V9.5671H142.85V46.5868H154.567V55.2215H119.412Z"
        fill="black"
      />
      <path
        className={clsx(['fill-offBlack', classNameMark])}
        d="M178.567 55.2215V0.932397H190.365V45.6528H213.799V55.2215H178.567Z"
        fill="black"
      />
      <path
        className={clsx(['fill-offBlack', classNameMark])}
        d="M263.35 32.7434V23.331C263.35 14.6203 261.163 9.40901 254.519 9.40901C247.88 9.40901 245.694 14.6203 245.694 23.331V32.8237C245.694 41.5303 247.88 46.7457 254.519 46.7457C261.163 46.7457 263.35 41.5303 263.35 32.7434ZM233.196 28.0774C233.196 10.3431 239.912 0.000857963 254.519 0.000857963C269.132 0.000857963 275.847 10.3431 275.847 28.0774C275.847 45.8117 269.132 56.1539 254.519 56.1539C239.912 56.1539 233.196 45.8117 233.196 28.0774Z"
        fill="black"
      />
      <path
        className={clsx(['fill-offBlack', classNameMark])}
        d="M294.306 47.755L301.102 40.2868C305.089 44.6443 310.009 46.6646 314.853 46.6646C320.397 46.6646 323.445 44.0991 323.445 39.4331C323.445 35.6208 321.411 33.833 316.101 32.9792L310.399 32.0452C300.635 30.4095 296.496 24.4206 296.496 16.4917C296.496 6.06922 303.76 0 316.101 0C324.459 0 330.87 2.80216 334.695 7.23573L328.055 14.6236C325.164 11.4326 321.102 9.48844 316.181 9.48844C310.947 9.48844 308.289 11.6651 308.289 15.9465C308.289 19.6785 310.48 21.3099 315.791 22.244L321.492 23.2541C330.241 24.8094 335.323 29.9446 335.323 38.5032C335.323 48.689 328.132 56.153 314.462 56.153C305.398 56.153 298.449 52.8902 294.306 47.755Z"
        fill="black"
      />
      <path
        className={clsx(['fill-offBlack', classNameMark])}
        d="M358.148 55.2215V0.932397H392.993V10.5011H369.869V22.9439H392.207V32.5127H369.869V45.6528H392.993V55.2215H358.148Z"
        fill="black"
      />
      <path
        className={clsx(['fill-offBlack', classNameMark])}
        d="M418.485 55.2215V0.932397H430.278V45.6528H453.716V55.2215H418.485Z"
        fill="black"
      />
      <path
        className={clsx(['fill-offBlack', classNameMark])}
        d="M476.624 55.2215V0.932397H512.793V10.5011H488.341V22.9439H510.212V32.5127H488.341V55.2215H476.624Z"
        fill="black"
      />
      <path
        className={clsx(['fill-offBlack', classNameMark])}
        d="M535.468 55.2215V46.5868H547.19V9.5671H535.468V0.932397H570.623V9.5671H558.906V46.5868H570.623V55.2215H535.468Z"
        fill="black"
      />
      <path
        className={clsx(['fill-offBlack', classNameMark])}
        d="M594.155 55.2215V0.932397H629V10.5011H605.876V22.9439H628.214V32.5127H605.876V45.6528H629V55.2215H594.155Z"
        fill="black"
      />
      <path
        className={clsx(['fill-offBlack', classNameMark])}
        d="M204.265 111.998V101.119H198.606V111.998H195.952V88.5118H198.606V98.723H204.265V88.5118H206.918V111.998H204.265Z"
        fill="black"
      />
      <path
        className={clsx(['fill-offBlack', classNameMark])}
        d="M218.839 111.998V88.5118H227.609V90.8702H221.492V98.7949H227.363V101.153H221.492V109.636H227.609V111.998H218.839Z"
        fill="black"
      />
      <path
        className={clsx(['fill-offBlack', classNameMark])}
        d="M243.741 91.6787L241.55 104.252H245.935L243.741 91.6787ZM247.209 112L246.254 106.611H241.232L240.276 112H237.551L242.187 88.5131H245.26L249.93 112H247.209Z"
        fill="black"
      />
      <path
        className={clsx(['fill-offBlack', classNameMark])}
        d="M260.261 111.998V88.5118H262.914V109.636H269.032V111.998H260.261Z"
        fill="black"
      />
      <path
        className={clsx(['fill-offBlack', classNameMark])}
        d="M280.778 111.998V90.8702H277.064V88.5118H287.18V90.8702H283.465V111.998H280.778Z"
        fill="black"
      />
      <path
        className={clsx(['fill-offBlack', classNameMark])}
        d="M306.034 111.998V101.119H300.375V111.998H297.722V88.5118H300.375V98.723H306.034V88.5118H308.687V111.998H306.034Z"
        fill="black"
      />
      <path
        className={clsx(['fill-offBlack', classNameMark])}
        d="M333.34 111.998V88.5118H342.11V90.8702H335.993V98.7949H341.864V101.153H335.993V109.636H342.11V111.998H333.34Z"
        fill="black"
      />
      <path
        className={clsx(['fill-offBlack', classNameMark])}
        d="M353.077 111.998V88.5118H355.731V109.636H361.848V111.998H353.077Z"
        fill="black"
      />
      <path
        className={clsx(['fill-offBlack', classNameMark])}
        d="M372.464 88.5135H375.117V112H372.464V88.5135Z"
        fill="black"
      />
      <path
        className={clsx(['fill-offBlack', classNameMark])}
        d="M395.173 111.998L391.743 102.565L388.313 111.998H385.375L390.223 100.063L385.625 88.5118H388.593L391.743 97.5607L394.893 88.5118H397.864L393.267 100.025L398.144 111.998H395.173Z"
        fill="black"
      />
      <path
        className={clsx(['fill-offBlack', classNameMark])}
        d="M408.404 88.5135H411.057V112H408.404V88.5135Z"
        fill="black"
      />
      <path
        className={clsx(['fill-offBlack', classNameMark])}
        d="M430.652 95.5172C430.652 92.8038 429.629 90.8681 427.545 90.8681H425.596V100.166H427.545C429.629 100.166 430.652 98.2306 430.652 95.5172ZM430.758 111.996L427.685 102.525H425.596V111.996H422.943V88.5139H427.897C431.111 88.5139 433.412 91.1512 433.412 95.4454C433.412 99.6042 431.612 101.4 430.16 101.929L433.624 111.996H430.758Z"
        fill="black"
      />
    </svg>
  );
}
