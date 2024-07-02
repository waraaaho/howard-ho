import * as React from "react";
import PropTypes from "prop-types";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { gsap } from "gsap";
import "./preloader.scss";
import logo from "../assets/images/preload.svg";

function LinearProgressWithLabel(props) {
  const el = React.useRef();
  const tl = React.useRef();
  const q = gsap.utils.selector(el);

  React.useEffect(() => {
    tl.current = gsap
      .timeline()
      .to(q(".square"), {
        opacity: 0.7,
      })
      .to(q(".square"), {
        duration: 1.5,
        ease: "powerInOut",
        opacity: 1,
        repeat: -1,
        yoyo: true,
      });
  }, []);
  return (
    <div className="preload">
      <div className="loader">
        <LinearProgress variant="determinate" {...props} />
      </div>
      <div className="progress">
        <Typography variant="body2" color="">{`${Math.round(
          props.value
        )}%`}</Typography>
      </div>
    </div>
  );
}

LinearProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired,
};

export default function LinearWithValueLabel() {
  // progress bar, set the value to 10
  const [progress, setProgress] = React.useState(10);

  // increment the progress by 10 every 0.5 seconds
  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 10 : prevProgress + 10
      );
    }, 500);
    return () => {
      // clear the timer when the component is unmounted
      clearInterval(timer);
    };
  }, []);

  return (
    <Box>
      <div className="anime">
        <div className="load">
          <svg
            height="100%"
            fill="none"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            xmlns="http://www.w3.org/2000/svg"
            xmlSpace="preserve"
            width="100%"
            version="1.1"
            viewBox="0 0 6688 800"//857 151"
            id="lo"
            
          >
            <g id="roar">
              // H
              <path
                id="roar-one"
                stroke="#10e956"
                stroke-width="5"
                fill="none"
                stroke-linecap="butt"
                opacity="1"
                stroke-linejoin="miter"
                // 372 337
                d="M311 406q25 0 43.5 -18.5t18.5 -44.5t-18.5 -44t-43.5 -18h-84q-26 0 -44 18t-18 44t18 44.5t44 18.5h84z
                M90.5 703q25.5 0 44 -17t18.5 -41v-588q0 -24 -18.5 -41t-44 -17t-44 17t-18.5 41v588q0 24 18.5 41t44 17z
                M446 703q26 0 44.5 -17t18.5 -41v-588q0 -24 -18.5 -41t-44 -17t-44 17t-18.5 41v588q0 15 8.5 28.5t23 21.5t30.5 8z"
                vector-effect="non-scaling-stroke"
              />

              //o
              <path
                id="roar-two"
                stroke="#10e956"
                stroke-width="5"
                fill="none"
                stroke-linecap="butt"
                opacity="1"
                stroke-linejoin="miter"
                d="M883 154q19 -17 19 -46.5t-20 -48.5q-61 -58 -162 -52h-1q-72 4 -121 69t-45 177q4 82 48 143.5t104 75.5q17 4 30 4h10v0q25 1 48.5 -4.5t38.5 -13.5t27 -16t17 -14l6 -5q19 -22 19.5 -50.5t-19 -45.5t-45 -15.5t-42.5 20.5q-2 2 -5 4q-14 10 -25 13.5t-30 1.5
                q-44 -4 -55 -61q-8 -43 2 -95q10 -58 53 -63q35 -5 62 19q18 18 42.5 19t43.5 -16z
                M836 302q25 0 43 -18.5t18 -44.5t-17.5 -44t-43.5 -18q-28 0 -44.5 18t-16.5 44t18.5 44.5t42.5 18.5z"
                vector-effect="non-scaling-stroke"
              />

              // w
              <path
                id="roar-three"
                stroke="#10e956"
                stroke-width="5"
                fill="none"
                stroke-linecap="butt"
                opacity="1"
                stroke-linejoin="miter"
                d="M1234 352q-25 0 -43 19t-18 42.5t18 42.5t43 20q25 0 43 -20t18 -42q0 -16 -8.5 -30t-22.5 -22.5t-30 -9.5z
                M1465 476q26 0 44 -18t18 -44v-215q0 -5 -1 -11q-2 -59 -21.5 -99t-47 -58t-64.5 -23q-20 -2 -54 -1q-65 3 -103 32q-39 -29 -104 -32q-34 -1 -54 1q-56 7 -92.5 50.5t-40.5 129.5q-1 6 -1 11v215q0 26 18.5 44t44 18t44 -18t18.5 -44v-198q0 -26 3.5 -42.5t13 -27.5t25.5 -15q37 -4 49.5 17.5t12.5 67.5v59q0 26 18.5 44.5t44.5 18.5t44.5 -18.5t18.5 -44.5
                v-59q0 -46 12.5 -67.5t49.5 -17.5q24 6 33.5 26t9.5 59v198q0 26 18 44t44 18z"
                vector-effect="non-scaling-stroke"
              />
              /*
              
              */
              //a
              <path
                id="roar-four"
                stroke="#10e956"
                stroke-width="5"
                fill="none"
                stroke-linecap="butt"
                opacity="1"
                stroke-linejoin="miter"
                d="M1877 490q17 0 31.5 -8.5t23 -23t8.5 -31.5v-358q0 -26 -18.5 -44t-44.5 -18q-19 0 -35 11t-23 28q-28 -25 -71 -25q-33 0 -63.5 14.5t-56 43.5t-39.5 77.5t-13 110.5q2 80 46 139t106 78q14 5 30 6q46 2 75 -18q19 18 44 18z
                M1815 171v177q-11 8 -17 11t-16 5t-24 1
                q-44 -5 -55 -61q-8 -44 2 -95q11 -61 53 -64q19 -1 34.5 7t22.5 19z"
                vector-effect="non-scaling-stroke"
              />

              //r
              <path
                id="roar-five"
                stroke="#10e956"
                stroke-width="5"
                fill="none"
                stroke-linecap="butt"
                opacity="1"
                stroke-linejoin="miter"
                d="M2045 479q25.5 0 44 -18t18.5 -43v-350q0 -26 -18.5 -43.5t-44 -17.5t-44 17.5t-18.5 43.5v350q0 25 18.5 43t44 18z
                M2270 479q26 0 44 -18.5t18 -44.5t-18 -44t-44 -18h-84q-26 0 -44 18t-18 44t18 44.5t44 18.5h84z"
                vector-effect="non-scaling-stroke"
              />

              //d
              <path
                id="roar-six"
                stroke="#10e956"
                stroke-width="5"
                fill="none"
                stroke-linecap="butt"
                opacity="1"
                stroke-linejoin="miter"
                d="M2664 490q26 0 44.5 -18.5t18.5 -44.5v-358q0 -26 -18.5 -44t-44.5 -18q-25 0 -44 18q-29 -20 -75 -18q-16 1 -30 6q-40 12 -73 41t-55.5 75.5t-23.5 100.5q-1 62 13 110.5t39.5 77t56 43.5t63.5 15q43 0 71 -26q7 18 23 29t35 11z
                M2602 148v177q-7 11 -22.5 19.5 t-34.5 6.5q-42 -3 -53 -63q-10 -52 -2 -95q11 -56 55 -61q19 -2 30 1.5t27 14.5z
                M2664 709q26 0 44.5 -18t18.5 -44v-84q0 -26 -18.5 -44t-44.5 -18t-44 18t-18 44v84q0 26 18 44t44 18z"
                vector-effect="non-scaling-stroke"
              />
              //H
              <path
                id="roar-seven"
                stroke="#10e956"
                stroke-width="5"
                fill="none"
                stroke-linecap="butt"
                opacity="1"
                stroke-linejoin="miter"
                d="M3431 406q25 0 43.5 -18.5t18.5 -44.5t-18.5 -44t-43.5 -18h-84q-26 0 -44 18t-18 44t18 44.5t44 18.5h84z
                M3210.5 703q25.5 0 44 -17t18.5 -41v-588q0 -24 -18.5 -41t-44 -17t-44 17t-18.5 41v588q0 24 18.5 41t44 17z
                M3566 703q26 0 44.5 -17t18.5 -41v-588q0 -24 -18.5 -41t-44 -17t-44 17t-18.5 41v588q0 15 8.5 28.5t23 21.5t30.5 8z"
                vector-effect="non-scaling-stroke"
              />
              //o
              <path
                id="roar-eight"
                stroke="#10e956"
                stroke-width="5"
                fill="none"
                stroke-linecap="butt"
                opacity="1"
                stroke-linejoin="miter"
                d="M4003 154q19 -17 19 -46.5t-20 -48.5q-61 -58 -162 -52h-1q-72 4 -121 69t-45 177q4 82 48 143.5t104 75.5q17 4 30 4h10v0q25 1 48.5 -4.5t38.5 -13.5t27 -16t17 -14l6 -5q19 -22 19.5 -50.5t-19 -45.5t-45 -15.5t-42.5 20.5q-2 2 -5 4q-14 10 -25 13.5t-30 1.5
                q-44 -4 -55 -61q-8 -43 2 -95q10 -58 53 -63q35 -5 62 19q18 18 42.5 19t43.5 -16z
                M3956 302q25 0 43 -18.5t18 -44.5t-17.5 -44t-43.5 -18q-28 0 -44.5 18t-16.5 44t18.5 44.5t42.5 18.5z"
                vector-effect="non-scaling-stroke"
              />
            </g>
          </svg>
        </div>
        {/* <LinearProgressWithLabel value={progress} /> */}
      </div>
    </Box>
  );
}
