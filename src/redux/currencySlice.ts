import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
export type CurrencyType = {
  id: string;
  name: string;
  min_size: string;
};
type StateType = {
  loadingCurrency: boolean;
  errorCurrency: boolean;
  allCurrency: CurrencyType[];
  activeCurrency: CurrencyType;
};

export const fetchCurrency = createAsyncThunk(
  'currency/fetchCurrency',
  async (_, { dispatch }) => {
    const url = 'https://api.coinbase.com/v2/currencies';
    const response = await fetch(url);
    if (!response.ok) {
      throw `Ошибка при запросе: ${response.status} ${response.statusText}`;
    }
    const answer = await response.json();
    if (answer.data[0]) {
      dispatch(setActiveCurrency(answer.data[0]));
    }

    return answer.data;
  }
);
const initialState: StateType = {
  loadingCurrency: false,
  errorCurrency: false,
  allCurrency: [],
  activeCurrency: {} as CurrencyType,
};
const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    setActiveCurrency: (state, action) => {
      state.activeCurrency = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrency.pending, (state) => {
        state.loadingCurrency = true;
        state.errorCurrency = false;
      })
      .addCase(fetchCurrency.rejected, (state) => {
        state.loadingCurrency = false;
        state.errorCurrency = true;
      })
      .addCase(fetchCurrency.fulfilled, (state, action) => {
        state.loadingCurrency = false;
        state.errorCurrency = false;
        state.allCurrency = action.payload;
      });
  },
});
export const currencyReducer = currencySlice.reducer;
export const { setActiveCurrency } = currencySlice.actions;
