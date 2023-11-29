import { createSlice } from "@reduxjs/toolkit";
//automatically generate actions
const todoslice = createSlice({
  // slice name
  name: "todo",
  //initial State
  initialState: [],
  // object Reducer Function
  reducers: {
    // This is  Reducer Function handling addition of a new task the state
    addData: (state, action) => {
      // This Object representing the new task to be addedd to the satte
      return [...state, { id: Date.now(), text: action.payload }];
    },
     // (State , action) are the parametere recived by the reducer function
    deleteTask: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    editTask: (state, action) => {
        return state.map((item) => 
          item.id === action.payload.id
            ? { ...item, text: action.payload.text }
            : item
    
        );
      },
      
  },
});
export default todoslice.reducer;
export const { addData,deleteTask, editTask } = todoslice.actions;    
