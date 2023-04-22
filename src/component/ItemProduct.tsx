import React, { useCallback } from "react";
import { formatPrice } from "../common/util";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/cart";
import { detail } from "../redux/detail";

type Product = {
  id: number;
  name: string;
  title: string;
  image: string;
  price: number;
};
type Props = {
  index: number;
  product: Product;
  setPopup: React.Dispatch<React.SetStateAction<boolean>>;
};

const ItemProduct: React.FC<Props> = ({ index, product, setPopup }) => {
  const dispatch = useDispatch();
  const add = useCallback(
    (data: Product) => {
      dispatch(addCart({ ...data, quantity: 1 }));
    },
    [dispatch]
  );
  const addDetail = useCallback(
    (data: Product) => {
      setPopup(true);
      dispatch(detail({ ...data }));
    },
    [dispatch, setPopup]
  );
  return (
    <div className="boxContainer" key={index}>
      <div
        onClick={() => {
          addDetail(product);
        }}
      >
        <img className="img" alt={product.name} src={product.image} />
      </div>
      <div className="body">
        <div
          className="nameProduct"
          onClick={() => {
            addDetail(product);
          }}
        >
          {product.name}
        </div>
        <div className="priceProduct">
          {formatPrice(product.price)}
          <button
            className="btnAdd"
            onClick={() => {
              add(product);
            }}
          >
            ADD TO CART
          </button>
          <button
            onClick={() => {
              addDetail(product);
            }}
          >
            Chi tiet
          </button>
        </div>
        <div className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
          ducimus!
        </div>
      </div>
    </div>
  );
};

export default ItemProduct;
