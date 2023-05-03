import {
  Button,
  Card,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Radio,
  Stack,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { updateUserData, userAdded } from "./usersSlice";
import { useDispatch, useSelector } from "react-redux";
import SliderValueLabel from "@mui/material/Slider/SliderValueLabel";
import { VislibleParam } from "./ReduxMasterFile";
import RadioGroup from "@mui/material/RadioGroup";

export default function ReduxForm({ visible, setVisible }) {
  const { editData } = useSelector((state) => state.users);
  console.log("editData", editData);

  const EditEval = (param) => {
    if (editData) {
    console.log("param",param)
    console.log("param",editData[param])
      // if (param === "id") {
      //   // console.log("editData[param]", editData[param]);
      //   return editData[param] || parseInt(1 + Math.random() * (1000 - 1), 10);
      // } else {
      //   return editData[param] || "";
      // }
      return editData[param] || ""
    } 
    else {
      return ''
      //  (param === "id") return parseInt(1 + Math.random() * (1000 - 1), 10);
      
    }
  };


  const intialData = {
    id: editData?.id || parseInt(1 + Math.random() * (1000 - 1), 10),
    firstName: editData?.firstName || "",
    lastName: editData?.lastName || "",
    phone: editData?.phone || "",
    address: editData?.address || "",
    gender: editData?.gender || "",
    // cities: EditEval([]),
    cities: editData?.cities ||({ jaipur: false, mumbai: false, chennai: false }),

    // cities:[],
  };
  const dispatch = useDispatch();
  const [data, setData] = useState(intialData);

  const handleChange = (e) => {
    const { name, value, checked } = e.target;

    // condition for checkboxes
    if (name === "jaipur" || name === "mumbai" || name === "chennai") {
      console.log("hadn");
      const temp = { ...data };
      temp.cities = { ...temp.cities, [name]: checked }
      setData(temp);
      // console.log("temp",temp)
    }
    else{
      setData({ ...data, [name]: value });
    }
   
    // console.log("checking",name,"name",value,"value",checked,"checked")
  };

  console.log("data is coming", data);
  const usersadd = useSelector((state) => state.users);
  const handleClick = (e) => {
    e.preventDefault();
    !editData ? dispatch(userAdded(data)) : dispatch(updateUserData(data));
    setData(intialData);
    setVisible(VislibleParam.list);
  };
  console.log("data", data);
  const { jaipur, mumbai, chennai } = data.cities;
  return (
    <>
      {/* <form > */}
      <Stack sx={{ marginTop: 2, marginLeft: 50 }}>
        {/* <Card> */}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 3, sm: 2 }}
        >
          <TextField
            required
            id="outlined-required"
            label="First Name"
            name="firstName"
            onChange={handleChange}
            value={data.firstName}
          />
          <TextField
            required
            name="lastName"
            id="outlined-required"
            label="Last Name"
            onChange={handleChange}
            value={data.lastName}
          />
        </Stack>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 3, sm: 2 }}
          sx={{ marginTop: 2 }}
        >
          <TextField
            required
            name="phone"
            id="outlined-required"
            label="Phone No."
            onChange={handleChange}
            value={data.phone}
          />
          <TextField
            required
            name="address"
            id="outlined-required"
            label="Address"
            onChange={handleChange}
            value={data.address}
          />
        </Stack>
        
      </Stack>
      
      <label>Male</label>
      <Radio
        checked={data.gender === 'male'}
        onChange={handleChange}
        value="male"
        name="gender"
        inputProps={{ 'aria-label': 'A' }}
      />
      <label>Female</label>
      <Radio
        checked={data.gender === 'female'}
        onChange={handleChange}
        value="female"
        name="gender"
        inputProps={{ 'aria-label': 'A' }}
      />
      <label>Others</label>
      <Radio
        checked={data.gender === 'others'}
        onChange={handleChange}
        value="others"
        name="gender"
        inputProps={{ 'aria-label': 'A' }}
      />

      <FormLabel component="legend">Cities</FormLabel>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox checked={data.cities.jaipur} onChange={handleChange} name="jaipur" />
          }
          label="Jaipur"
        />
        <FormControlLabel
          control={
            <Checkbox checked={data.cities.mumbai} onChange={handleChange} name="mumbai" />
          }
          label="Mumbai"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={data.cities.chennai}
              onChange={handleChange}
              name="chennai"
            />
          }
          label="Chennai"
        />
      </FormGroup>

      <Stack sx={{ marginTop: 2 }}>
        <Button variant="contained" onClick={handleClick}>
          {!editData ? "Add" : "Update"}
        </Button>
      </Stack>
      {/* </form> */}
    </>
  );
}

//https://dev.to/sanderdebr/react-redux-crud-app-for-beginners-with-hooks-2hja
//https://levelup.gitconnected.com/a-simple-explanation-on-updating-redux-store-8e9bc6c8e279
//https://www.digitalocean.com/community/tutorials/how-to-manage-state-in-react-with-redux

//https://redux-resource.js.org/requests/request-actions/deleting-resources
