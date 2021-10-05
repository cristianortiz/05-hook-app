import React from "react";
//memo render the component only if any of this properties has changed
// other wise returns a 'recorded' version of the component and avoid unnecesary re-renders
export const Small = React.memo(({ value }) => {
  //just to see in console when te component is called
  console.log("someone call me again.. :(");
  return <small>{value}</small>;
});
