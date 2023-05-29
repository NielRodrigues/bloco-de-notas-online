import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 16px;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const LinkS = styled(NavLink)`
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  color: #0b1411cf;
`;

export const Line = styled.div`
  width: 32%;
  height: 1px;
  background-color: #0b1411;
`;

export const TextLine = styled.h4`
  font-size: 14px;
  width: 100%;
  text-align: center;
  font-weight: 600;
  color: #0b1411;
  margin: 0;
  margin-left: 4px;
  margin-right: 4px;
`;


