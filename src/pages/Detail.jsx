import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();

  useEffect(() => {
    console.log(id);
  }, [id]);
  return (
    <>
      <div>Detail</div>
      <p>{id}</p>
    </>
  );
};

export default Detail;
