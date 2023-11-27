import React, { forwardRef } from "react";

export const Catalyst = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(function Catalsyt(props) {
  return (
<svg xmlns="http://www.w3.org/2000/svg" width="27" height="25" fill="none" viewBox="0 0 27 25">
  <g filter="url(#a)">
    <path stroke="#FF7A00" stroke-linecap="round" stroke-width="5" d="M18.52 11.231h5.98"/>
  </g>
  <g filter="url(#b)">
    <path fill="#fff" fill-opacity=".03" d="M7.268 5.77a9.172 9.172 0 0 1 12.463 0c3.921 3.63 3.921 9.83 0 13.46a9.172 9.172 0 0 1-12.463 0c-3.92-3.63-3.92-9.83 0-13.46Z"/>
  </g>
  <g filter="url(#c)">
    <rect width="5.22" height="2.979" y="7.925" fill="#fff" fill-opacity=".1" rx="1.49"/>
  </g>
  <g filter="url(#d)">
    <rect width="13.95" height="3.056" x=".27" y="12.509" fill="#fff" fill-opacity=".1" rx="1.528"/>
  </g>
  <defs>
    <filter id="a" width="186.98" height="181" x="-71.98" y="-79.269" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feGaussianBlur in="BackgroundImageFix" stdDeviation="44"/>
      <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_49_63"/>
      <feBlend in="SourceGraphic" in2="effect1_backgroundBlur_49_63" result="shape"/>
      <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
      <feOffset dy="2"/>
      <feGaussianBlur stdDeviation="2"/>
      <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/>
      <feColorMatrix values="0 0 0 0 0.841667 0 0 0 0 0.670807 0 0 0 0 0.547083 0 0 0 1 0"/>
      <feBlend in2="shape" result="effect2_innerShadow_49_63"/>
    </filter>
    <filter id="b" width="190.344" height="190.344" x="-81.672" y="-82.672" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feGaussianBlur in="BackgroundImageFix" stdDeviation="43"/>
      <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_49_63"/>
      <feBlend in="SourceGraphic" in2="effect1_backgroundBlur_49_63" result="shape"/>
      <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
      <feOffset dy="4"/>
      <feGaussianBlur stdDeviation="2"/>
      <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/>
      <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0"/>
      <feBlend in2="shape" result="effect2_innerShadow_49_63"/>
      <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
      <feOffset/>
      <feGaussianBlur stdDeviation="34"/>
      <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/>
      <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0"/>
      <feBlend in2="effect2_innerShadow_49_63" result="effect3_innerShadow_49_63"/>
    </filter>
    <filter id="c" width="181.22" height="178.979" x="-88" y="-80.075" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feGaussianBlur in="BackgroundImageFix" stdDeviation="44"/>
      <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_49_63"/>
      <feBlend in="SourceGraphic" in2="effect1_backgroundBlur_49_63" result="shape"/>
      <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
      <feOffset dy="2"/>
      <feGaussianBlur stdDeviation="1"/>
      <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/>
      <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0"/>
      <feBlend in2="shape" result="effect2_innerShadow_49_63"/>
    </filter>
    <filter id="d" width="189.95" height="179.056" x="-87.73" y="-75.491" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feGaussianBlur in="BackgroundImageFix" stdDeviation="44"/>
      <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_49_63"/>
      <feBlend in="SourceGraphic" in2="effect1_backgroundBlur_49_63" result="shape"/>
      <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
      <feOffset dy="2"/>
      <feGaussianBlur stdDeviation="1"/>
      <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/>
      <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0"/>
      <feBlend in2="shape" result="effect2_innerShadow_49_63"/>
    </filter>
  </defs>
</svg>
  );
});