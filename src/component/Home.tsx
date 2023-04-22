import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect, useState } from "react";
import { pushData } from "../redux/product";
import type { RootState } from "../redux/store";
import { DetailProduct } from "./DetailProduct";
import ItemProduct from "./ItemProduct";
import "../style/home.css";

type Data = {
  id: number;
  name: string;
  title: string;
  image: string;
  price: number;
};

export const Home = () => {
  const dispatch = useDispatch();
  const [isFetch, setIsFetch] = useState<boolean>(false);

  const callApi = useCallback(async () => {
    const { data } = await axios.get<Data[]>("http://localhost:5000/product");
    // setListData(data);
    setIsFetch(true);
    dispatch(pushData(data));
  }, [dispatch]);

  useEffect(() => {
    if (!isFetch) {
      callApi();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFetch]);
  const [popup, setPopup] = useState<boolean>(false);
  const data = useSelector((state: RootState) => state.product);

  return (
    <div className="boxProduct">
      {popup && <DetailProduct setShow={setPopup} />}
      {data.productData.map((i: Data, index) => {
        return <ItemProduct index={index} product={i} setPopup={setPopup} />;
      })}
    </div>
  );
};
