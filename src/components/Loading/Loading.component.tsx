import React from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./Loading.style.css";

interface LoadingProps {
  color: string;
  height: number;
  width: number;
}

const Loading: React.FC<LoadingProps> = ({ color, height, width }) => {
  return (
    <div className="loading">
      <Loader type="Oval" color={color} height={height} width={width} />
    </div>
  );
};

export default Loading;
