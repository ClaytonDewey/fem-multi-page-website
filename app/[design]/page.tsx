import React from 'react';

const page = ({ params }: { params: { type: string } }) => {
  console.log(params);
  return <div>Have a good coding</div>;
};
export default page;
