import { Stack } from "@mui/system";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import CustomDataTable from "./CustomDataTable";
import { fetchProducts } from "./productActions";

const ProductListing =() =>{
    const products = useSelector((state) =>state);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchProducts());

    },[]);
    return(
        <Stack>
            <CustomDataTable />
        </Stack>
    )
}

export default ProductListing;