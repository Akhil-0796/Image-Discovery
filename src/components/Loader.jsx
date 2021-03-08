import React from "react";
import styled from "styled-components";

const Loading = styled.div`
  text-align: center;
  @keyframes ldio-mx6z4ec2tvd {
    0% {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    100% {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }
  .ldio-mx6z4ec2tvd div {
    position: absolute;
    width: 50px;
    height: 50px;
    border: 20px solid #e15b64;
    border-top-color: transparent;
    border-radius: 50%;
  }
  .ldio-mx6z4ec2tvd div {
    animation: ldio-mx6z4ec2tvd 1s linear infinite;
    top: 100px;
    left: 100px;
  }
  .loadingio-spinner-rolling-4zzttybc2el {
    width: 200px;
    height: 200px;
    display: inline-block;
    overflow: hidden;
    background: #ffffff;
  }
  .ldio-mx6z4ec2tvd {
    width: 50%;
    height: 50%;
    position: relative;
    transform: translateZ(0) scale(1);
    backface-visibility: hidden;
    transform-origin: 0 0; /* see note above */
  }
  .ldio-mx6z4ec2tvd div {
    box-sizing: content-box;
  }
`;

export const Loader = () => {
  return (
    <Loading>
      <div class="loadingio-spinner-rolling-4zzttybc2el">
        <div class="ldio-mx6z4ec2tvd">
          <div></div>
        </div>
      </div>
    </Loading>
  );
};
