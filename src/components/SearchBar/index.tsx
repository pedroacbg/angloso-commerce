/* eslint-disable @typescript-eslint/ban-types */
import { useState } from "react";
import "./styles.css";

type Props = {
  onSearch: Function;
};

export default function SearchBar({ onSearch }: Props) {
  const [text, setText] = useState("");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleChange(event: any) {
    setText(event.target.value);
  }

  function handleResetClick() {
    setText("");
    onSearch(text);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleSubmit(event: any) {
    event.preventDefault();
    onSearch(text);
  }

  return (
    <form className="dsc-search-bar" onSubmit={handleSubmit}>
      <button type="submit">🔎︎</button>
      <input
        type="text"
        placeholder="Nome do produto"
        value={text}
        onChange={handleChange}
      />
      <button onClick={handleResetClick}>🗙</button>
    </form>
  );
}
