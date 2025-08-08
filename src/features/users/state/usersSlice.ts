import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
  id: number;
  name: string;
  email: string;
}

const initialState: User[] = [
  { id: 1, name: 'Alice', email: 'alice@example.com' },
  { id: 2, name: 'Bob', email: 'bob@example.com' },
  { id: 3, name: 'Carol', email: 'carol@example.com' }
];

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers(_state, action: PayloadAction<User[]>) {
      return action.payload;
    },
    addUser(state, action: PayloadAction<User>) {
      state.push(action.payload);
    }
  }
});

export const { setUsers, addUser } = usersSlice.actions;
export default usersSlice.reducer;
