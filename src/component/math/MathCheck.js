import MathJax from "react-mathjax2";
import React from "react";
const ascii = "U = 1/(R_(si) + sum_(i=1)^n(s_n/lambda_n) + R_(se))";
const content = `This can be dynamic text (e.g. user-entered) text with ascii math embedded in symbols like $$${ascii}$$`;

module.exports = () => {
  return (
    <MathJax.Context
      input="ascii"
      onLoad={() => console.log("Loaded MathJax script!")}
      onError={(MathJax, error) => {
        console.warn(error);
        console.log("Encountered a MathJax error, re-attempting a typeset!");
        MathJax.Hub.Queue(MathJax.Hub.Typeset());
      }}
      script="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.7/MathJax.js?config=AM_HTMLorMML"
      options={{
        asciimath2jax: {
          useMathMLspacing: true,
          delimiters: [["$$", "$$"]],
          preview: "none"
        }
      }}
    >
      <MathJax.Text text={content} />
    </MathJax.Context>
  );
};
