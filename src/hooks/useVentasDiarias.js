import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSaleDay } from "../store/slice/sales";

export const useVentasDiarias = () => {
    const day = () => new Date().toISOString().replace(/.$/, '');

    const { sales } = useSelector((state) => state.sales);

    const dispatch = useDispatch();

    const handleOnChangeDate = (e) => {
        const dateCompared = new Date(e.target.value).toLocaleDateString();
        dispatch(
            setSaleDay(sales.filter((sale) => sale.date.includes(dateCompared)))
        );
    };

    useEffect(() => {
        handleOnChangeDate({ target: { value: day() } });
    }, []);

    return [handleOnChangeDate, day]
}