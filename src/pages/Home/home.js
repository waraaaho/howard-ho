import ProjectSlider from "./../../components/projectSlider";
import { useState } from "react";
import React, { useEffect, useRef } from "react";
import { ReactSVG } from 'react-svg';
import { ReactComponent as QuoteRight } from "./../../assets/images/quote-right.svg";
import { ReactComponent as QuoteLeft } from "./../../assets/images/quote-left.svg";
import { gsap } from "gsap";
import { useNavigate } from "react-router-dom";

import "./home.scss";
import { ProjectImageData, MathematicsData, DataScienceTechStackData, SoftwareEngineeringTechStackData, ComputerScienceKnowledge } from "./../../components/techStackData";

import personal_image from "./../../assets/images/personal_image.png";


function Home() {
  const navigate = useNavigate();
  const Illus = useRef();
  const i = gsap.utils.selector(Illus);
  const tlm = useRef();
  const dlm = useRef();

  // useEffect(() => {
  //     dlm.current = gsap.timeline()
  //     .fromTo(i(".c-tween"), {scale: 0.7}, {
  //         scale: 1, repeat: -1, yoyo: true,
  //       })
  // });

  useEffect(() => {
    tlm.current = gsap
      .timeline()
      .fromTo(
        i(".b-one"),
        { fill: "#1E2128", opacity: 0, scale: 0.7 },
        {
          fill: "#FF605C",
          opacity: 1,
          scale: 1.3,
          duration: 1,
          ease: "none",
          transformOrigin: "center center",
          stagger: 0.1,
          repeat: -1,
          yoyo: true,
        }
      )
      .fromTo(
        i(".b-two"),
        { fill: "#1E2128", opacity: 0, scale: 0.7 },
        {
          fill: "#FFBD44",
          opacity: 1,
          scale: 1.3,
          duration: 1,
          ease: "none",
          transformOrigin: "center center",
          stagger: 0.1,
          repeat: -1,
          yoyo: true,
        }
      )
      .fromTo(
        i(".b-three"),
        { fill: "#1E2128", opacity: 0, scale: 0.7 },
        {
          fill: "#00CA4E",
          opacity: 1,
          scale: 1.3,
          duration: 1,
          ease: "none",
          transformOrigin: "center center",
          stagger: 0.1,
          repeat: -1,
          yoyo: true,
        }
      )
      .fromTo(
        i(".a-one"),
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          ease: "none",
          transformOrigin: "center center",
          repeat: -1,
          yoyo: true,
        }
      )
      .fromTo(
        i(".a-two"),
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          ease: "none",
          transformOrigin: "center center",
          repeat: -1,
          yoyo: true,
        }
      )
      .fromTo(
        i(".a-three"),
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          ease: "none",
          transformOrigin: "center center",
          repeat: -1,
          yoyo: true,
        }
      )
      .fromTo(
        i(".a-four"),
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          ease: "none",
          transformOrigin: "center center",
          repeat: -1,
          yoyo: true,
        }
      )
      .fromTo(
        i(".a-five"),
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          ease: "none",
          transformOrigin: "center center",
          repeat: -1,
          yoyo: true,
        }
      )
      .fromTo(
        i(".a-six"),
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          ease: "none",
          transformOrigin: "center center",
          repeat: -1,
          yoyo: true,
        }
      )
      .fromTo(
        i(".a-seven"),
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          ease: "none",
          transformOrigin: "center center",
          repeat: -1,
          yoyo: true,
        }
      )
      .fromTo(
        i(".a-eight"),
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          ease: "none",
          transformOrigin: "center center",
          repeat: -1,
          yoyo: true,
        }
      )
      .fromTo(
        i(".a-nine"),
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          ease: "none",
          transformOrigin: "center center",
          repeat: -1,
          yoyo: true,
        }
      );
  });

  const [background, setBackground] = useState("");

  const image = ProjectImageData.filter((data) => data.id === background).map(
    (filteredData) => filteredData.img
  );

  const nav = () => {
    return navigate("/work"), window.location.reload();
  };

  const Styles = {
    backgroundImage: `url(${image})`,
  };

  const hiddenElements = document.querySelectorAll(".hidden");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  });

  hiddenElements.forEach((el) => observer.observe(el));

  return (
    <div className="home">
      <div className="home-intro hidden">
        <div className="content">
          <div className="content-tertiary">
            <p>
              <span>✌🏻</span> Hi there! I'm Kevin Leung Ko Tsun
            </p>
          </div>
          <div className="content-primary">
            <h1>
              a <span>Quant Developer</span> and <span>Data Engineer</span>.
            </h1>
          </div>
          <div className="content-secondary">
            <p>
              I develop <span>Trading Strategies</span>,{" "}
              <span>Trading Systems</span> and <span>Data Pipeline</span>.
            </p>
            <p>
              I have extensive background in <span>Software Engineering</span>,{" "}
              <span>Data Science</span>, <span>Mathematics</span>, and{" "}
              <span>Finance</span>.
            </p>
            <p>
              You can click any of the following skills to view the corresponding project.
            </p>
          </div>
        </div>
        <div className="hero-icon"><img src={personal_image}/></div>
        {/*
        <div className="hero-icon">
          <img src={personal_image} />

        </div>
  */}
      </div>
      <div className="tooling hidden">
        <div className="tooling-title">
          <h2>Software Engineering Tech Stack</h2>
        </div>
        <div className="tooling-box">
          {SoftwareEngineeringTechStackData.map((item, index) => (
            <div key={index} className="box-content">
              <div className="box-icon">
                <item.imgComponent className="icon" />
              </div>
              <div className="box-text">
                {Array.isArray(item.text) ? (
                  item.text.map((text, i) => <p key={i}>{text}</p>)
                ) : (
                  <p>{item.text}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="tooling hidden">
        <div className="tooling-title">
          <h2>Data Science Tech Stack</h2>
        </div>
        <div className="tooling-box">
          {DataScienceTechStackData.map((item, index) => (
            item.url ? (
              <a href={item.url} className="box-content box-content-link">
            <div key={index} className="box-content">
              <div className="box-icon">
                <item.imgComponent className="icon" />
              </div>
              <div className="box-text">
                {Array.isArray(item.text) ? (
                  item.text.map((text, i) => <p key={i}>{text}</p>)
                ) : (
                  <p>{item.text}</p>
                )}
              </div>
            </div>
            </a>
            ) : 
            (
              <div key={index} className="box-content">
              <div className="box-icon">
                <item.imgComponent className="icon" />
              </div>
              <div className="box-text">
                {Array.isArray(item.text) ? (
                  item.text.map((text, i) => <p key={i}>{text}</p>)
                ) : (
                  <p>{item.text}</p>
                )}
              </div>
            </div>
            )
          ))}
        </div>
      </div>
      <div className="tooling hidden">
        <div className="tooling-title">
          <h2>Mathematics</h2>
        </div>
        <div className="tooling-box">
          {MathematicsData.map((item, index) => (
            item.url ? (
            <a href={item.url} className="box-content box-content-maths box-content-link">
              <div key={index}>
              <div className="box-text">
                {
                 Array.isArray(item.text) ? (
                  item.text.map((text, i) => <p key={i}>{text}</p>)
                ) : (
                  <p>{item.text}</p>
                )
                }
                
              </div>
              </div>
              </a>)
              :
              (<div key={index} className="box-content box-content-maths">
              <div className="box-text">
                {
                 Array.isArray(item.text) ? (
                  item.text.map((text, i) => <p key={i}>{text}</p>)
                ) : (
                  <p>{item.text}</p>
                )
                }
                
              </div>
              </div>)
              
          ))}
        </div>
      </div>
      <div className="tooling hidden">
        <div className="tooling-title">
          <h2>Computer Science Knowledge</h2>
        </div>
        <div className="tooling-box">
          {ComputerScienceKnowledge.map((item, index) => (
            item.url ? (
            <a href={item.url} className="box-content box-content-maths box-content-link">
              <div key={index}>
              <div className="box-text">
                {
                 Array.isArray(item.text) ? (
                  item.text.map((text, i) => <p key={i}>{text}</p>)
                ) : (
                  <p>{item.text}</p>
                )
                }
                
              </div>
              </div>
              </a>)
              :
              (<div key={index} className="box-content box-content-maths">
              <div className="box-text">
                {
                 Array.isArray(item.text) ? (
                  item.text.map((text, i) => <p key={i}>{text}</p>)
                ) : (
                  <p>{item.text}</p>
                )
                }
                
              </div>
              </div>)
              
          ))}
        </div>
      </div>
      
      
      <div className="showroom-section hidden">
        <div className="showroom-title">
          <h2>Showroom</h2>
        </div>
        <div className="showroom">
          <div className="showroom-background" style={Styles}></div>
          <ProjectSlider setBackground={setBackground} />
        </div>
      </div>
      <div className="featured hidden">
        <div className="featured-title">
          <h2><p>Education</p></h2>
          
          
          <h4 className="education-details"><p>
              Hong Kong University of Science and Technology
              </p>
              
              </h4>
          <h4 className="education-details"><p>{"Triple Majors in Data Science, Computer Science and Mathematics(Applied)"}</p></h4>
              <h4 className="education-details"><p>First Class Honors(Dean's List)</p></h4>
        </div>
        <div className="featured-box">
          <div className="article">
            <div className="top">
            </div>
            <div className="bottom">
              
              <div className="info">
                <a
                  href="https://drive.google.com/file/d/1zq2mZ5e2JFVV-rnQiedgimXLkJZ3rYmj/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    width="35"
                    height="24"
                    viewBox="0 0 45 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M44.4481 13.7591L31.2866 0.548391C30.9325 0.208882 30.4595 0.0214931 29.969 0.0263367C29.4784 0.0311803 29.0092 0.227871 28.6619 0.574307C28.3145 0.920742 28.1166 1.38939 28.1105 1.87994C28.1043 2.37048 28.2904 2.84394 28.629 3.19897L38.5212 13.1263H1.8772C1.62149 13.1106 1.36528 13.1475 1.12434 13.2346C0.883402 13.3216 0.662838 13.4571 0.476227 13.6326C0.289616 13.8081 0.140908 14.02 0.0392584 14.2552C-0.062391 14.4903 -0.11483 14.7438 -0.11483 15C-0.11483 15.2562 -0.062391 15.5097 0.0392584 15.7448C0.140908 15.98 0.289616 16.1918 0.476227 16.3674C0.662838 16.5429 0.883402 16.6784 1.12434 16.7654C1.36528 16.8525 1.62149 16.8894 1.8772 16.8737H38.6689L28.636 26.794C28.4452 26.9637 28.2909 27.1705 28.1828 27.4018C28.0746 27.6332 28.0147 27.8841 28.0069 28.1394C27.9991 28.3947 28.0434 28.6488 28.1372 28.8864C28.231 29.1239 28.3722 29.3398 28.5523 29.5209C28.7324 29.7019 28.9476 29.8443 29.1846 29.9394C29.4216 30.0344 29.6756 30.0801 29.9309 30.0736C30.1862 30.0671 30.4375 30.0086 30.6694 29.9017C30.9013 29.7947 31.1089 29.6416 31.2796 29.4516L44.4411 16.4167C44.6158 16.2423 44.7544 16.0352 44.849 15.8072C44.9436 15.5792 44.9923 15.3347 44.9923 15.0879C44.9923 14.841 44.9436 14.5966 44.849 14.3686C44.7544 14.1406 44.6158 13.9334 44.4411 13.7591H44.4481Z"
                      fill="white"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="showroom-section hidden">
      <div className="button-wrap">
          <button className="butt" onClick={nav}>
            All Work Experiences
          </button>
        </div>
      </div>
      <div className="quote hidden">
        <div className="quote-body">
          <QuoteLeft className="left" />
          <div className="quote-body-content">
            <p>
            If you really look closely, most overnight successes took a long time.<span>!</span>
            </p>
          </div>
          <QuoteRight className="right" />
        </div>
      </div>
    </div>
  );
}

export default Home;
