import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  editData: null,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    userAdded(state, action) {
      state.users.push(action.payload);
    },
    userUpdated(state, action) {
      // const { id } = action.payload;
      // console.log("id", id);
      const temp = state.users.find((d) => d.id === action.payload);
      // console.log("temp", temp);
      state.editData = temp;
    },
    updateUserData(state, action) {
      const temp = state.users.filter((d) => d.id !== action.payload.id);
      console.log("temp", temp);
      console.log(state, 'Edit===Edit',action)
      // step 1 filter out that previous data in te state based on editData Id
      // step 2 now we added the new updated data which is in our payload
      state.users = [...temp, action.payload];

      // second method
      // const tempIndex = state.users.findIndex(
      //   (e) => e.id === action.payload.id
      // );
      // const temp2 = [...state.users];
      // temp2[tempIndex] = action.payload;
      // state.users = temp2;
    },
    resetEditData(state) {
      state.editData = null;
    },
    deleteData(state,action){
      state.users=state.users.filter((user)=>user.id !==action.payload);
      console.log(state,'====',action)
    }
    
  },
});
export const { userAdded, userUpdated, updateUserData, resetEditData ,deleteData} = usersSlice.actions;

export default usersSlice.reducer;

//https://www.youtube.com/watch?v=mNIcu00bciM&list=PLnHJACx3NwAed__PNbkrsWtyPcrnGXB1Q
