import * as React from "react"

function LocationIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      viewBox="0 0 20 20"
      {...props}
    >
      <path data-name="Trazado 5" d="M0 0h20v20H0z" fill="none" />
      <path
        data-name="Trazado 6"
        d="M10 2C7.236 2 5 4.5 5 7.6 5 11.8 10 18 10 18s5-6.2 5-10.4C15 4.5 12.764 2 10 2zm0 7.6a1.9 1.9 0 01-1.786-2A1.9 1.9 0 0110 5.6a1.9 1.9 0 011.786 2A1.9 1.9 0 0110 9.6z"
        fill="#758ecd"
      />
    </svg>
  )
}

export default LocationIcon
