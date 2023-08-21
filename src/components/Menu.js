import React from "react";
import recipes from ".././recipes";
import Swal from "sweetalert2";

const Menu = () => {
  const handleOrder = (id) => {
    // console.log(id, "id is clicked");
    Swal.fire({
      title: "Are you sure ?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes,Order it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Ordered!", "Your order has been processing.", "success");
      }
    });
  };

  return (
    <div className="menu-container">
      <div className="menu-header">
        <h2>This Weeks specials</h2>
        <button>Order Menu</button>
      </div>
      <div className="cards">
        {recipes.map((recipes) => (
          <div className="menu-items" key={recipes.id}>
            <img src={recipes.image} alt="" />
            <div className="menu-content">
              <div className="heading">
                <h5>{recipes.title}</h5>
                <p>{recipes.price}</p>
              </div>
              <p>{recipes.description}</p>
              <button className="orderBtn" onClick={handleOrder}>
                order Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
