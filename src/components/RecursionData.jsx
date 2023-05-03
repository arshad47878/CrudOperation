import {
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useState } from "react";

const RecursionData = ({ data }) => {
  const [showChild, setShowChild] = useState(false);

  const expand = () => {
    setShowChild((prev) => !prev);
  };
  console.log("sdd", data);
  return (
    <div style={{ paddingLeft: 10 }}>
      <Typography>{data?.name}</Typography>
      {/* <Typography>{data?.age}</Typography> */}
      {data?.children?.length > 0 && (
        <IconButton onClick={() => expand()}>+</IconButton>
      )}
      {showChild ? (
        data?.children?.length > 0 &&
        data?.children?.map((d) => (
          <div style={{ paddingLeft: 10 }}>
            <RecursionData data={d} />
          </div>
        ))
      ) : (
        <></>
      )}
    </div>
  );
};

export default RecursionData;
