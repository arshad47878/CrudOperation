import { Button, Stack } from "@mui/material";
import ReduxForm from "./ReduxForm";
import { useState } from "react";
import ReduxTable from "./ReduxTable";
import { useDispatch, useSelector } from "react-redux";
import { resetEditData, updateUserData } from "./usersSlice";

export const VislibleParam = {
  list: "list",
  create: "create",
};

export default function ReduxMasterFile() {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState("List");
  const isEdited = useSelector((state) => state.users);
  console.log(isEdited);

  return (
    //resetEditData is used for delete the previous data when we perform the update operation .
    <Stack sx={{ marginTop: 2 }}>
      
      {visible === VislibleParam.list ? (
        <Button
          variant="contained"
          onClick={() => {
            dispatch(resetEditData());
            setVisible(VislibleParam.create);
          }}
        >
          Add Project
        </Button>
      ) : (
        <Button
          variant="contained"
          size="small"
          onClick={() => {
            dispatch(resetEditData());
            setVisible(VislibleParam.list);
          }}
        >
          List
        </Button>
      )}
      {visible === VislibleParam.create && (
        <ReduxForm visible={visible} setVisible={setVisible} />
      )}
      {visible === VislibleParam.list && (
        <ReduxTable visible={visible} setVisible={setVisible} />
      )}
    </Stack>
  );
}


// to install rvm and ruby 
//https://linux.how2shout.com/how-to-install-rvm-ruby-version-manager-on-ubuntu-20-04-lts/