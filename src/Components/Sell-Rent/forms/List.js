import React from "react";

class List extends React.Component {
  render() {
    return (
      <>
        <ul className="steps">
          <li className="is-active">Step 1</li>
          <li>Step 2</li>
          <li>Step 3</li>
        </ul>
      </>
    );
  }
}

export default List;
