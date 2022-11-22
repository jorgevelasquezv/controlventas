import { useSelector } from "react-redux";

export const useTableSale = () => {
    const { saleDay } = useSelector((state) => state.sales) || [];

    const unidades =
        saleDay.length > 0 &&
        saleDay
            .map((product) => parseInt(product?.quantity))
            .reduce((current, next) => current + next);
    const total =
        saleDay.length > 0 &&
        saleDay
            .map((product) => product?.total)
            .reduce((current, next) => current + next);
    
    return [saleDay, unidades, total];
}