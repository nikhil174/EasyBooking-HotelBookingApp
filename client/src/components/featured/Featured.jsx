import React from "react";
import useFetch from "../../hooks/useFetch";
import "./featured.css";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Featured() {
  const { data, loading, error, reFetch } = useFetch(
    "/hotels/countByCity?cities=mumbai,goa,delhi,rishikesh"
  );

  return (
    <div className="featured">
      {loading ? (
        "loading...please wait"
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://t-cf.bstatic.com/xdata/images/city/square250/971346.webp?k=40eeb583a755f2835f4dcb6900cdeba2a46dc9d50e64f2aa04206f5f6fce5671&o="
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Mumbai</h1>
              <h2>{data[0]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://t-cf.bstatic.com/xdata/images/region/square250/49646.webp?k=b7f38878b9164ee38e0b99c4d4646dbea76b7bf4add8464b1aa75e4c9d0efc6e&o="
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Goa</h1>
              <h2>{data[1]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://t-cf.bstatic.com/xdata/images/city/square250/684765.webp?k=3f7d20034c13ac7686520ac1ccf1621337a1e59860abfd9cbd96f8d66b4fc138&o="
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Delhi</h1>
              <h2>{data[2]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://t-cf.bstatic.com/xdata/images/city/square250/684880.webp?k=e39b50ba8be4c6c6c413c963af6e0d452dbe0decaf72e13f9f798e65de549107&o="
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Rishikesh</h1>
              <h2>{data[3]} properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Featured;
