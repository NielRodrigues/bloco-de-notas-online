import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
`;

export const InputsDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 16px;
`;

export const Text = styled.h4`
  font-size: 16px;
  font-weight: 600;
  color: #0b1411;
  margin: 0px;
`;
export const FieldInput = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 4px;
  border-bottom: 2px solid #0b787b;

  svg{
    width: 32px;
    height: 32px;
    path{color: #0b1411}
  }

  &.wrong{ border-bottom: 2px solid #d80909; }
`;

export const Input = styled.input`
  width: 100%;
  height: 32px;
  margin-left: 8px;
  margin-right: 8px;
  outline: none;
  border: none;
  background-color: transparent;
  font-size: 16px;
  font-weight: 600;
  color: #0b1411;
  font-family: 'Quicksand', sans-serif;
`;

export const ShowPassword = styled.button`
  width: 28px;
  height: 28px;
  outline: none;
  border: none;
  background-color: transparent;
  margin-right: 8px;
  cursor: pointer;
  transition: all .4s;

  svg{
    width: 28px;
    height: 32px;
    path{color: #0b1411}
  }

  &:hover{svg path{color: #0b14119b}}
`;

export const SaveLogin = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 24px;
`;

export const CheckBox = styled.input`
  display: none;
  &:checked ~ label::before {
    content: "✔";
    background-color: #0b1411;
    font-size: 10px;
    color: #fdfcfa;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

`;

export const LabelCheckBox = styled.label`
  display: flex;
  align-items: center;
  &::before{
    content: "";
    width: 14px;
    height: 14px;
    background-color: #fdfcface;
    border-radius: 2px;
    cursor: pointer;
    margin: 0;
    margin-right: 4px;
    border: none;
    outline: none;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 40px;
  color: #fdfcfa;
  font-size: 16px;
  font-weight: bolder;
  border: none;
  outline: none;
  background-color: #0b787b;
  border-radius: 8px;
  cursor: pointer;
  transition: all .1s;
  margin-top: 16px;

  &:hover{
    opacity: .8;
  }
  &:active{
    opacity: 1;
    background-color: #0c4244;
  }

`;
