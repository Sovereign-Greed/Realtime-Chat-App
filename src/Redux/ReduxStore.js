import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import {createNewRoomAPI, getAllRoomsAPI, getChatRoomAPI, submitMessageAPI, getCurrentUserAPI} from '../API';

export const GetCurrentUserThunk = createAsyncThunk(
    'ReduxStore/getCurrentUser',
    async (_, { rejectWithValue }) => {
      try {
        const response = await getCurrentUserAPI();
        return response;
      } catch (err) {
        if (!err.response) throw err;
  
        return rejectWithValue(err.response.data);
      }
    }
);

export const GetChatRoomThunk = createAsyncThunk(
    'ReduxStore/getChatRoom',
    async (data, { rejectWithValue }) => {
      try {
        const response = await getChatRoomAPI(data);
        return response.data;
      } catch (err) {
        if (!err.response) throw err;
  
        return rejectWithValue(err.response.data);
      }
    }
);

export const GetAllRoomsThunk = createAsyncThunk(
    'ReduxStore/getAllRooms',
    async (_, { rejectWithValue }) => {
      try {
        const response = await getAllRoomsAPI();
        return response.data;
      } catch (err) {
        if (!err.response) throw err;
  
        return rejectWithValue(err.response.data);
      }
    }
);

export const CreateNewRoomThunk = createAsyncThunk(
    'ReduxStore/createNewRoom',
    async (data, { rejectWithValue }) => {
      try {
        const response = await createNewRoomAPI(data);
        return response.data;
      } catch (err) {
        if (!err.response) throw err;
  
        return rejectWithValue(err.response.data);
      }
    }
);

export const SubmitMessageThunk = createAsyncThunk(
    'ReduxStore/submitMessage',
    async (data, { rejectWithValue }) => {
      try {
        const response = await submitMessageAPI(data);
        return response.data;
      } catch (err) {
        if (!err.response) throw err;
  
        return rejectWithValue(err.response.data);
      }
    }
);

export const ReduxStore = createSlice({
    name: 'ReduxStore',
    initialState: {
        user: null,
        allChatRooms: [],
        currentRoom: null,
        currentMessages: null,
        action: null,
        // messages
        getUserMessage: '',
        getChatRoomMessage: '',
        getAllRoomsMessage: '',
        createNewRoomMessage: '',
        submitNewMessage: '',
        // message states
        getUserMessageState: '',
        getChatRoomMessageState: '',
        getAllRoomsMessageState: '',
        createNewRoomMessageState: '',
        submitNewMessageState: '',
        // pending states
        isGettingUser: false,
        isGettingChatRoom: false,
        isGettingAllRooms: false,
        isCreatingNewRoom: false,
        isSubmittingMessage: false,
    },
    reducers: {},
    extraReducers: {
        [GetChatRoomThunk.pending]: (state) => ({
            ...state,
            isGettingChatRoom: true
        }),
        [GetChatRoomThunk.fulfilled] : (state, action) => {
            return {
                ...state,
                currentRoom: action?.payload,
                currentMessages: action?.payload?.messages,
                action: action,
                isGettingChatRoom: false,
                getChatRoomMessage: 'Successfully acquired Chat Room',
                getChatRoomMessageState: 'success'
            }
        },
        [GetChatRoomThunk.rejected] : (state) => ({
            ...state,
            isGettingChatRoom: false,
            getChatRoomMessage: 'Error Getting Chat Room',
            getChatRoomMessageState: 'error'
        }),
    }
});

// export const {} = ReduxStore.actions;

export default ReduxStore.reducer;
