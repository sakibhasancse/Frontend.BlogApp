import React from 'react';

const Loader = ({ variant = '#2b8768', width = '48px', height = '48px' }) => (
  <svg
    style={{
      margin: 'auto',
      background: 'none',
      display: 'block',
      shapeRendering: 'auto'
    }}
    width={width}
    height={height}
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid"
  >
    <circle cx="84" cy="50" r="10" fill={variant}>
      <animate
        attributeName="r"
        repeatCount="indefinite"
        dur="1.1363636363636365s"
        calcMode="spline"
        keyTimes="0;1"
        values="10;0"
        keySplines="0 0.5 0.5 1"
        begin="0s"
      />
      <animate
        attributeName="fill"
        repeatCount="indefinite"
        dur="4.545454545454546s"
        calcMode="discrete"
        keyTimes="0;0.25;0.5;0.75;1"
        values="#1db9b8;#1db9b8;#1db9b8;#1db9b8;#1db9b8"
        begin="0s"
      />
    </circle>
    <circle cx="16" cy="50" r="10" fill={variant}>
      <animate
        attributeName="r"
        repeatCount="indefinite"
        dur="4.545454545454546s"
        calcMode="spline"
        keyTimes="0;0.25;0.5;0.75;1"
        values="0;0;10;10;10"
        keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
        begin="0s"
      />
      <animate
        attributeName="cx"
        repeatCount="indefinite"
        dur="4.545454545454546s"
        calcMode="spline"
        keyTimes="0;0.25;0.5;0.75;1"
        values="16;16;16;50;84"
        keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
        begin="0s"
      />
    </circle>
    <circle cx="50" cy="50" r="10" fill={variant}>
      <animate
        attributeName="r"
        repeatCount="indefinite"
        dur="4.545454545454546s"
        calcMode="spline"
        keyTimes="0;0.25;0.5;0.75;1"
        values="0;0;10;10;10"
        keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
        begin="-1.1363636363636365s"
      />
      <animate
        attributeName="cx"
        repeatCount="indefinite"
        dur="4.545454545454546s"
        calcMode="spline"
        keyTimes="0;0.25;0.5;0.75;1"
        values="16;16;16;50;84"
        keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
        begin="-1.1363636363636365s"
      />
    </circle>
    <circle cx="84" cy="50" r="10" fill={variant}>
      <animate
        attributeName="r"
        repeatCount="indefinite"
        dur="4.545454545454546s"
        calcMode="spline"
        keyTimes="0;0.25;0.5;0.75;1"
        values="0;0;10;10;10"
        keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
        begin="-2.272727272727273s"
      />
      <animate
        attributeName="cx"
        repeatCount="indefinite"
        dur="4.545454545454546s"
        calcMode="spline"
        keyTimes="0;0.25;0.5;0.75;1"
        values="16;16;16;50;84"
        keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
        begin="-2.272727272727273s"
      />
    </circle>
    <circle cx="16" cy="50" r="10" fill={variant}>
      <animate
        attributeName="r"
        repeatCount="indefinite"
        dur="4.545454545454546s"
        calcMode="spline"
        keyTimes="0;0.25;0.5;0.75;1"
        values="0;0;10;10;10"
        keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
        begin="-3.409090909090909s"
      />
      <animate
        attributeName="cx"
        repeatCount="indefinite"
        dur="4.545454545454546s"
        calcMode="spline"
        keyTimes="0;0.25;0.5;0.75;1"
        values="16;16;16;50;84"
        keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
        begin="-3.409090909090909s"
      />
    </circle>
  </svg>
);

export default Loader;
