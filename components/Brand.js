"use client";
import React from "react";
import { Title } from "./common/Title";
import { brand } from "@/assets/data/dummydata";

import Marquee from "react-marquee-slider";
const Brand = () => {
  return (
    <>
      <section className="brand">
        <div className="container">
          <div className="heading-title">
            <Title title="WE ARE PROUD TO WORK WITH THESE COMPANIES" />
          </div>
          <div className="">
            <Marquee velocity={12} minScale={0.9}>
              {brand.map((item) => (
                <div className="images" key={item.id}>
                  <img
                    src={item.cover}
                    alt={item.id}
                    width="60%"
                    height="60%"
                  />
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </section>
    </>
  );
};

export default Brand;
