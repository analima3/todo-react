function CheckboxUncked(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={25}
      height={24}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        opacity={0.2}
        d="M12.48 19.426a7.41 7.41 0 100-14.82 7.41 7.41 0 000 14.82z"
        fill="currentColor"
      />
      <path
        d="M12.464 4.86A7.14 7.14 0 115.324 12a7.168 7.168 0 017.14-7.14zm0-1.587a8.727 8.727 0 10.072 17.454 8.727 8.727 0 00-.072-17.454z"
        fill="#4EA8DE"
      />
    </svg>
  );
}

function CheckboxChecked(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={25}
      height={24}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g opacity={0.9}>
        <path
          d="M12.48 19.426a7.41 7.41 0 100-14.82 7.41 7.41 0 000 14.82z"
          fill="#5E60CE"
        />
        <path
          d="M12.464 4.86A7.14 7.14 0 115.324 12a7.168 7.168 0 017.14-7.14zm0-1.587a8.727 8.727 0 10.072 17.454 8.727 8.727 0 00-.072-17.454z"
          fill="#5E60CE"
        />
        <path
          d="M15.93 9.342L11.6 13.674l-2.483-2.482-.836.835 3.319 3.319 5.168-5.168-.836-.836z"
          fill="#F2F2F2"
        />
      </g>
    </svg>
  );
}

export const CheckboxSVG = {
  Checkbox: CheckboxUncked,
  CheckboxChecked,
};
