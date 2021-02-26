import React, {Fragment} from 'react';
import './Scroll.css';

const Scroll = (props) => {
  // console.log(props);
  return (
    <Fragment>
      <div id="scrollbar">{props.children}</div>
    </Fragment>
  );
};
export default Scroll;