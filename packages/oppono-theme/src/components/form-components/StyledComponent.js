import React from "react";
import { styled } from "frontity";
import { size } from "../../functions/size";

export const P = {};
P.D = styled.p`
  color: #bfb6b4;
  font-size: ${size(14)};
  font-weight: 400;
  line-height: ${size(24)};
  @media (max-width: 575.98px) {
    font-size: ${size(16)};
  }
`;
P.Num = styled.p`
  color: #bfb6b4;
  font-size: ${size(56)};
  font-weight: 200;
  line-height: ${size(64)};
`;
P.Cost = styled.p`
  color: #bfb6b4;
  font-size: ${size(40)};
  font-weight: 200;
  line-height: ${size(64)};
`;
P.F29 = styled(P.D)`
  font-size: ${size(29)};
  line-height: ${size(40)};
  font-weight: 300;
  @media (max-width: 991.98px) {
    font-size: ${size(24)};
    line-height: normal;
  }
`;
P.Dark = styled(P.D)`
  opacity: 0.5;
`;
P.White = styled(P.D)`
	color: #fff;
`;
P.Border = styled(P.D)`
  padding-top: ${size(24)};
  padding-bottom: ${size(24)};
  border-bottom: ${size(1)} solid rgba(191, 182, 180, 0.1);
  font-weight: 300;
`;
P.Circle = styled(P.D)`
  width: ${size(34)};
  height: ${size(34)};
  border: ${size(1)} solid rgba(191, 182, 180, 0.5);
  border-radius: ${size(34)};
  margin-bottom: ${size(15)};
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: sans-serif;
`;
export const Span = {};
Span.D = styled.span`
  font-size: ${size(16)};
  line-height: ${size(21)};
  font-weight: 600;
  font-style: normal;
  letter-spacing: normal;
  opacity: 1;
`;
Span.Lightgreen = styled.span`
	color: #0E9564;
`;
Span.Green = styled(Span.D)`
  color: #239f9f;
`;
Span.White = styled(Span.D)`
  color: #ffffff;
`;
export const Ul = styled.ul`
  margin-left: ${size(46)};
`;
export const Ol = styled.ol`
  margin-left: ${size(40)};
  margin-top: ${size(25)};
`;
export const Li = styled.li`
  color: rgba(192, 182, 180, 0.7);
  font-size: ${size(16)};
  line-height: ${size(21)};
  margin-bottom: ${size(20)};
`;

export const Wysiwyg = styled.div`
  ul {
    margin-left: ${size(46)};
  }

  ol {
    margin-left: ${size(40)};
    margin-top: ${size(25)};
  }

  Li {
    color: rgba(192, 182, 180, 0.7);
    font-size: ${size(16)};
    line-height: ${size(21)};
    margin-bottom: ${size(20)};
  }
  color: #bfb6b4;
  font-size: ${size(18)};
  font-weight: 400;
  line-height: ${size(24)};
  @media (max-width: 575.98px) {
    font-size: ${size(16)};
  }
`;
