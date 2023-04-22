import { useDispatch, useSelector } from "react-redux";
import "../style/cart.css";
import { RootState } from "../redux/store";
import { useCallback } from "react";
import { removeCart } from "../redux/cart";
type Data = {
  id: number;
  name: string;
  title: string;
  image: string;
  price: number;
};
export const Cart = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.cart);
  const remove = useCallback(
    (data: Data) => {
      dispatch(removeCart(data.id));
    },
    [dispatch]
  );
  return (
    <>
      <div className="boxCart">
        <table>
          <tr>
            <th>image</th>
            <th>name</th>
            <th>price</th>
            <th></th>
          </tr>
          {data.map((i, index) => {
            return (
              <div key={index}>
                <td>
                  <img className="img" alt="" src={i.image} />
                </td>
                <td>{i.name}</td>
                <td>{i.price}</td>
                <td>
                  <button
                    className="btnDelete"
                    onClick={() => {
                      remove(i);
                    }}
                  >
                    delete
                  </button>
                </td>
              </div>
            );
          })}
        </table>
      </div>
    </>
  );
};
