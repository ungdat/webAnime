import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "../style/DetailProduct.css";
import { RootState } from "../redux/store";
import { addCart } from "../redux/cart";
import { useCallback } from "react";

type Data = {
  id: number;
  name: string;
  title: string;
  image: string;
  price: number;
};

type Props = {
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
};
export const DetailProduct: React.FC<Props> = ({ setShow }) => {
  const data = useSelector((state: RootState) => state.detail);
  const dispatch = useDispatch();
  const add = useCallback(
    (data: Data) => {
      dispatch(addCart({ ...data, quantity: 1 }));
    },
    [dispatch]
  );

  const closePopup = () => {
    setShow(false);
  };
  return (
    <React.Fragment>
      <div className="popup">
        <div className="container">
          <div className="content">
            <div className="img">
              <img src={data.image} alt="" />
            </div>
            <div className="name">{data.name}</div>
            <div className="price">{data.price}</div>
            <div className="title">{data.title}</div>
          </div>
          <button
            className="btnAdd"
            onClick={() => {
              add(data);
            }}
          >
            ADD TO CART
          </button>
          <button className="close" onClick={closePopup}>
            x
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};
