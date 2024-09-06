import React from "react";
import { DataLeft } from "../../Data/Content";

const Left = () => {
  return (
  <>
    <div className="d-flex gap-2">
      {DataLeft.map((items, index) => (
        <div class="card" style={{ width: "18rem" }}>
          <img src={items.image} class="card-img-top" alt="..." />
          <div class="card-body">
            <p class="card-text">{items.name}</p>
          </div>
        </div>
      ))}
    </div>

    
  </>
  );
};

export default Left;
