import React, { Component } from 'react';
import { useAtom } from 'jotai';
import { countAtom, countryAtom } from "../Search/SearchForm";

function Counter() {
  const [count, setCount] = useAtom(countAtom)
  const country = useAtom(countryAtom);
  return (
    <>
    <h1>{count}</h1>
    <button onClick={()=> setCount((value) => value +1)}>one up</button>
    <p>{country}</p>
    </>
  )
}

export default Counter;
