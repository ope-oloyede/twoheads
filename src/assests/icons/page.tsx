import React from "react";
interface Props {
  className?: string;
}
export const Hamburger: React.FC<Props> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    color="currentColor"
    fill="none"
    stroke="#141B34"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path d="M4 8.5L20 8.5" />
    <path d="M4 15.5L20 15.5" />
  </svg>
);

export const Cancel: React.FC<Props> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    color="currentColor"
    fill="none"
    stroke="#141B34"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path d="M18 6L6.00081 17.9992M17.9992 18L6 6.00085" />
  </svg>
);
