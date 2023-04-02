import React from "react";
export default class Latex extends React.Component {
  constructor(props) {
    super(props);
    this.node = React.createRef();
  }
  componentDidMount() {
    if (window.MathJax)
        window.MathJax.typeset();
    console.log("MathJax" + window.MathJax)
  }

  renderMath() {}
  render() {
    return <div>{this.props.children}</div>;
  }
}
