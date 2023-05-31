import React from 'react';
import PropTypes from "prop-types";
import { Container, Content, LinkS, Line, TextLine } from "./style";

function LinksToLoginOrRegister({ text, textLink, link }) {
  return (
    <Container>
      <Content>
        <Line />
        <TextLine>{text}</TextLine>
        <Line />
      </Content>
      <LinkS to={link}>{textLink}</LinkS>
    </Container>
  )
}

LinksToLoginOrRegister.propTypes = {
  text: PropTypes.string.isRequired,
  textLink: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
}

export default LinksToLoginOrRegister
