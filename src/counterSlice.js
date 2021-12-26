import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        Top: "",
        Left: "",
        TopPic: "",
        LeftPic: "",
        TopScore: 0,
        LeftScore: 0,
        TopNumberOrder: [],
        LeftNumberOrder: [],
        PeopleOnBoard: [],
        TopScoreIndex: 0,
        LeftScoreIndex: 0,
        PlayerIndex: 0,
        Trigger: true
    },
    reducers: {
        setUpdate: (state, action) =>{
            state.Trigger = action.payload;
        },
        setGameData: (state, action) => {
            state.TopScore = action.payload.TopScore;
            state.LeftScore = action.payload.LeftScore;
            state.Top = action.payload.Top;
            state.Left = action.payload.Left;
            state.TopPic = action.payload.TopPic;
            state.LeftPic = action.payload.LeftPic;
            state.TopScore = action.payload.TopScore;
            state.LeftScore = action.payload.LeftScore;
            state.TopNumberOrder = action.payload.TopNumberOrder.slice();
            state.LeftNumberOrder = action.payload.LeftNumberOrder.slice();
            state.PeopleOnBoard = action.payload.PeopleOnBoard.slice();
            state.TopScoreIndex = state.TopNumberOrder.indexOf(state.TopScore % 10);
            state.LeftScoreIndex = state.LeftNumberOrder.indexOf(state.LeftScore % 10);
            state.PlayerIndex = ((state.LeftScoreIndex * 10) + state.TopScoreIndex);

        }

    },
})

export const TopName = state => state.counter.Top
export const LeftName = state => state.counter.Left
export const TopPic = state => state.counter.TopPic
export const LeftPic = state => state.counter.LeftPic
export const TopScore = state => state.counter.TopScore
export const LeftScore = state => state.counter.LeftScore
export const TopNumberOrder = state => state.counter.TopNumberOrder
export const LeftNumberOrder = state => state.counter.LeftNumberOrder
export const PeopleOnBoard = state => state.counter.PeopleOnBoard
export const TopScoreIndex = state => state.counter.TopScoreIndex
export const LeftScoreIndex = state => state.counter.LeftScoreIndex
export const PlayerIndex = state => state.counter.PlayerIndex
export const Trigger = state => state.counter.Trigger
export const { setGameData, setUpdate} = counterSlice.actions
export default counterSlice.reducer