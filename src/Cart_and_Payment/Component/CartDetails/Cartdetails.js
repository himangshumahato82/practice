import React, { useContext } from "react";
import "../Allcss.css/all.css";
import { Select } from "@chakra-ui/react";
import { Button,  } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

import myCartContext from "../../CartContext/Cartcontext";

const Cartdetails = (props) => {
  
  let { totval, totalfn, load2 } = useContext(myCartContext);

  let {
    brand,
    category,
    department,
    id,
    img,
    name,
    price,
    product_type,
    strikedprice,
  } = props.props;

  console.log(props.fn);
  console.log(
    brand,
    category,
    department,
    id,
    img,
    name,
    price,
    product_type,
    strikedprice
  );
  let [heart, setheart] = React.useState(false);

  const handleHeart = () => {
    setheart((prev) => !prev);
  };

  const handleDelete = (a) => {
    let arr = JSON.parse(localStorage.getItem("cartdata")) || [];
    // console.log(arr)
    let newArr = arr.filter((el) => {
      return el.id !== a;
    });
    
    load2((prev)=>!prev)
    props.fn(newArr);
    localStorage.setItem("cartdata", JSON.stringify(newArr));

    // console.log(a)
  };
  const guess = (e) => {
    let y = props.props.price;
    let x = parseInt(e.target.value, 10);

    // let total=totval
    if (x === 1) {
      let arr = JSON.parse(localStorage.getItem("cartdata")) || [];
      let sum = 0;
      for (let i = 0; i < arr.length; i++) {
        sum += parseInt(arr[i].price, 10);
      }
      totalfn(sum);
      // console.log(sum);
    }else{
      totalfn(totval + y * x);
    }

    
  };

  return (
    <div className="Cartbox" style={{height:"auto"}}>
      <div className="cart_image">
        <img src={img} alt="shoe" />
      </div>
      <div className="cart_data">
        <div>
          <div>
            <p style={{ float: "left", fontFamily: "light" }}>{name}</p>
            <br />
            <br />
            <p style={{ float: "left" }}>₹{price}</p>
            <p
              style={{
                float: "left",
                fontFamily: "regular",
                marginLeft: "10px",
                textDecoration: "line-through",
              }}
            >
              {" "}
              ₹{strikedprice}
            </p>
           
            <p style={{ fontFamily: "light", display: "block" }}>
              Size: 70 sq mt
            </p>
            <br />
            <hr />
          </div>
         
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div>
              <p style={{ float: "left", fontFamily: "light" }}>ADULTS:</p>{" "}
              &nbsp;
            </div>

            <div>
              <Select onChange={guess} size="xs">
                <option selected value="1">
                  1
                </option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </Select>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              paddingRight: "30px",
              fontFamily: "regular",
              width: "50%",
              justifyContent: "space-between",
            }}
          >
            <div className="Wishlist" onClick={handleHeart}>
              {heart ? (
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img
                    style={{ display: "inline", width: "30px" }}
                    src="https://cliply.co/wp-content/uploads/2019/07/391907100_HEART_400px.gif"
                    alt="heart"
                  />
                  <p>Added to wishlist</p>
                </div>
              ) : (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    // width: "50px",
                    // backgroundColor:"red"
                  }}
                >
                  <img
                    style={{ display: "inline", width: "30px" }}
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMiAyMEMxMiAyMCAyMSAxMy41OTkzIDIxIDguODc4NzlDMjEgMy40MzgyIDEzLjYzNjQgMS42NzggMTIgOC4zMTg3M0MxMC4zNjM2IDEuNjc4IDMgMy4zNTgxOSAzIDguODc4NzlDMyAxMy41OTkzIDEyIDIwIDEyIDIwWiIgc3Ryb2tlPSIjMjEyMTIxIiBzdHJva2Utd2lkdGg9IjEuMjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg=="
                    alt="heart"
                  />
                  <p>Save to wishlist</p>
                </div>
              )}
            </div>
            <div style={{ alignItem: "center" }}>
              <Button
                onClick={() => {
                  handleDelete(id);
                }}
                size="s"
                style={{ padding: "5px" }}
                colorScheme="red"
              >
                <DeleteIcon /> &nbsp; Remove
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cartdetails;
