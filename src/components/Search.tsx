import React from "react";
import styled from "styled-components";
import { IoMoon } from "react-icons/io5";

const InputContainer = styled.label`
  background-color: var(--colors-ui-base);
  padding: 1rem 2rem;
  display: flex;
  align-items: center;

  border-radius: var(--brs);
  box-shadow: var(--shadow);
  width: 100%;
  margin-bottom: 1rem;

  @media (min-width: 767px) {
    margin-bottom: 0;
    width: 280px;
  }
`;

const Input = styled.input.attrs({
  type: "search",
  placeholder: "Search for a country",
})`
  margin-left: 2rem;
  border: none;
  outline: none;
  background-color: var(--colors-ui-base);
  color: var(--colors-text);
`;

type Props = {
  search: string;
  setSearch: (s: string) => any;
};

export const Search = ({ search, setSearch }: Props) => {
  return (
    <InputContainer>
      <IoMoon size="14px" />
      <Input />
    </InputContainer>
  );
};
