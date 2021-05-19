import React, { useState } from "react";

// useVisualMode custom hook
export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  function transition(newMode, replace = false) {
    setMode(newMode);

    setHistory((history) => {
      if (replace) {
        const newHistory = [...history];
        newHistory.splice(-1, 1, newMode);
        return newHistory;
      } else {
        return [...history, newMode];
      }
    })
  }

  function back() {
    setHistory((history) => {
      const newHistory = history.length > 1 ? [...history].slice(0, -1) : [...history];
      setMode(newHistory[newHistory.length - 1]);
      return newHistory;
    })
  }

  return {
    mode,
    transition,
    back
  };
}
