import React from "react";
import { CircularProgressbar,buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./style/custom.css";
function CircularProgess({ movie }) {
  const percentage = movie.vote_average * 10;
  if (percentage >= 70) {
    return (
      <div
        style={{
         // make css div backgroundColor circular

          width: 50,
          zIndex: 10,
          position: "relative",
          left: 20,
          top: 270,
        }}
      >
        <CircularProgressbar
          value={percentage}
          text={`${percentage}*`}
          styles={{
            backgroundColor: '#3e98c7',


            path: {
              stroke: "#07c535",
            },

            text: {
              fill: "#07c535",
              fontSize: "16px",
              fontWeight: "bold",
            },
          }}
        />
      </div>
    );
  }
  if(percentage <=70 ) {
    return (
      <div
        style={{
          width: 50,
          zIndex: 10,
          position: "relative",
          left: 10,
          top: 270,
        }}
      >
        <CircularProgressbar
          value={percentage}
          text={`${percentage}*`}
          styles={{
            path: {
              stroke:"#bec12e",
            },
            

            text: {
              fill: "#bec12e",
              fontWeight: "bold",
            },
          }}
        />
      </div>
    );
  }


  return (
    <div
      style={{

        width: 50,
        zIndex: 10,
        position: "relative",
        left: 10,
        top: 270,
        pathColor: `rgba(100, 11, 11, ${percentage / 100})`,
      }}
    >
      <CircularProgressbar
        style={{

        }}
        value={percentage}
        text={`${percentage}*`}
      />
    </div>
  );
}

export default CircularProgess;
