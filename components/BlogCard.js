"use client";
import React, { useState } from "react";
import { expertise } from "@/assets/data/dummydata";
import { Title, TitleSm } from "./common/Title";
import Marquee from "react-marquee-slider";
import { Avatar, Card } from "antd";
import Link from "next/link";
import { HiOutlineArrowRight } from "react-icons/hi";

const { Meta } = Card;
const BlogCard = () => {
  return (
    <>
      <section className="expertise">
        <div className="container">
          <div className="heading-title">
            <Title title="Our expertise" />
            <p>We have a best solution for your business.</p>
          </div>
          <div className="">
            <Marquee velocity={8} minScale={0.9}>
              {expertise.map((item) => (
                <div key={item.id} style={{ padding: "0 12px" }}>
                  <Card
                    style={{
                      width: 350,
                      background:
                        "linear-gradient(250deg, rgb(97, 74, 174) 14%, rgba(52, 108, 255, 1) 100%)",
                      border: "#0079dc",
                    }}
                    cover={
                      <div
                        style={{
                          width: "100%",
                          height: "300px",
                          overflow: "hidden",
                        }}
                      >
                        <img
                          alt={item.title}
                          src={item.cover}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "fill",
                          }}
                        />
                      </div>
                    }
                  >
                    <div className="card-details">
                      <Link
                        href={`services/${item.id}`}
                        className="title-link"
                        style={{ display: "flex" }}
                      >
                        <h2>{item.title}</h2>
                      </Link>
                      <div className="flex">
                        <span> {item.catgeory} </span>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogCard;
