import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import classNames from 'classnames/bind';
import styles from './Support.module.scss';

const cx = classNames.bind(styles);

const Support = () => {
  const [currentNumber, setCurrentNumber] = useState(0);
  const [back, setBack] = useState(0);

  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  if ((inView && currentNumber < 4824884) || (inView && back < 63884)) {
    setTimeout(() => {
      setCurrentNumber(currentNumber + 86158);
      setBack(back + 2279);
    }, 60);
  }

  return (
    <section className={cx('support')}>
      <div className={cx('container')}>
        <h2 className={cx('title')}>How we support Midas token</h2>
        <div className={cx('wrapper')} ref={ref}>
          <div className={cx('content-number')}>
            <span className={cx('numbers')}>$ {currentNumber}</span>
            <p className={cx('text')}>Liquidity on DEX</p>
            <div className={cx('ellipse-wrapper', 'ellipse-left')}>
              <svg
                className={cx('ellipse', 'ellipse-violet')}
                width="512"
                height="512"
                viewBox="0 0 512 512"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask
                  id="mask0_1_838"
                  style={{ maskType: 'alpha' }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="512"
                  height="512"
                >
                  <motion.circle
                    initial={{ pathLength: 0 }}
                    animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
                    transition={{
                      duration: 6,
                    }}
                    cx="256"
                    cy="256"
                    r="254.5"
                    transform="matrix(-1 0 0 1 512 0)"
                    stroke="url(#paint0_linear_1_838)"
                    stroke-width="4"
                  />
                </mask>
                <g mask="url(#mask0_1_838)">
                  <circle
                    cx="256"
                    cy="256"
                    r="254.5"
                    transform="matrix(-1 0 0 1 512 0)"
                    stroke="url(#paint1_radial_1_838)"
                    stroke-width="4"
                  />
                  <path d="M474 391L472 387.5L470 390.5L472 393.5L474 391Z" fill="#249DDC" />
                </g>
                <defs>
                  <linearGradient
                    id="paint0_linear_1_838"
                    x1="512"
                    y1="256"
                    x2="-1.40608e-06"
                    y2="256"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.347024" stop-color="white" stop-opacity="0" />
                    <stop offset="1" stop-color="white" />
                  </linearGradient>
                  <radialGradient
                    id="paint1_radial_1_838"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(114 118) rotate(70.1805) scale(418.808)"
                  >
                    <stop stop-color="#B153FB" />
                    <stop offset="1" stop-color="#6944FF" />
                  </radialGradient>
                </defs>
              </svg>
            </div>
          </div>
          <div className={cx('content-number')}>
            <span className={cx('numbers')}>{back}</span>
            <p className={cx('text')}>Bought back MIDAS tokens</p>
            <div className={cx('ellipse-wrapper', 'ellipse-right')}>
              <svg
                className={cx('ellipse', 'ellipse-blue')}
                width="512"
                height="512"
                viewBox="0 0 512 512"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask
                  id="mask0_1_835"
                  style={{ maskType: 'alpha' }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="512"
                  height="512"
                >
                  <motion.circle
                    initial={{ pathLength: 0 }}
                    animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
                    transition={{
                      duration: 6,
                    }}
                    cx="256"
                    cy="256"
                    r="254.5"
                    stroke="url(#paint0_linear_1_835)"
                    stroke-width="4"
                  />
                </mask>
                <g mask="url(#mask0_1_835)">
                  <circle
                    cx="256"
                    cy="256"
                    r="254.5"
                    stroke="url(#paint1_radial_1_835)"
                    stroke-width="4"
                  />
                </g>
                <defs>
                  <linearGradient
                    id="paint0_linear_1_835"
                    x1="512"
                    y1="256"
                    x2="-1.40608e-06"
                    y2="256"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.347024" stop-color="white" stop-opacity="0" />
                    <stop offset="1" stop-color="white" />
                  </linearGradient>
                  <radialGradient
                    id="paint1_radial_1_835"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(148.4 140.4) rotate(73.8512) scale(386.865)"
                  >
                    <stop stop-color="#6743F7" />
                    <stop offset="1" stop-color="#02E4D6" />
                  </radialGradient>
                </defs>
              </svg>
            </div>
          </div>
          <div className={cx('background')}></div>
        </div>
      </div>
    </section>
  );
};

export default Support;
