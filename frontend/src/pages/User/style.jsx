import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`;

export const InfoUser = styled.div`
  height: 95%;
  width: 256px;
  border-radius: 12px;
  background-color: #201c1cc1;
  padding: 4px 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;

  @media (max-width: 768px) {
    flex-direction: row;
    height: 128px;
    width: 95%;
    margin-top: 8px;
    margin-bottom: 8px;
    padding: 4px 4px;
  }

`;

export const ProfilePic = styled.img`
  height: 150px;
  width: 150px;
  border-radius: 50%;
  margin-top: 24px;
  margin-bottom: 24px;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 104px;
    height: 104px;
  }
`;

export const TextContent = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 60%;
  }
`;

export const Text = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #fdfcfa;
  margin: 0;
  margin-bottom: 4px;
`;

export const Notes = styled.textarea`
  height: 95%;
  max-height: 95%;
  min-height: 95%;

  width: 78%;
  max-width: 78%;
  min-width: 78%;

  border: none;
  outline: none;
  border-radius: 12px;
  padding: 4px 8px;

  font-size: 20px;
  font-weight: 600;
  color: #0b1411;
  font-family: 'Quicksand', sans-serif;

  @media (max-width: 768px) {
    width: 95%;
    max-width: 95%;
    min-width: 95%;
    margin: 0;
    padding: 4px 4px;

    height: 100%;
    min-height: auto;
    max-height: auto;
  }
`;

export const Button = styled.button`
  height: 32px;
  width: 32px;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  margin-top: 192px;

  svg{
    height: 32px;
    width: 32px;
    color: #d80909;
  }

  @media (max-width: 768px) {
    margin: 0;
    margin-right: 16px;
  }
`;

export const Loading = styled.div`
  width: 40px;
  height: 40px;
  position: fixed;
  bottom: 48px;
  right: 16px;

  svg{
    width: 40px;
    height: 40px;
    color: #0b787b;
  }
`;

export const SelectImage = styled.input`
  display: none;
`;
export const SwitchImage = styled.label`
  position: absolute;
  top: 24px;
  left: 24px;

  height: 28px;
  width: 28px;
  cursor: pointer;

  svg{
    width: 28px;
    height: 28px;
    color: #fdfcfa;
  }
`;
