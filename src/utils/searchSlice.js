import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { apiRequest } from './api';

export const fetchHistograms = createAsyncThunk(
  'search/histograms',
  async (searchParams, { rejectWithValue }) => {
    try {
      const response = await apiRequest('/objectsearch/histograms', 'POST', searchParams);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchDocumentIds = createAsyncThunk(
  'search/ids',
  async (searchParams, { rejectWithValue }) => {
    try {
      const response = await apiRequest('/objectsearch', 'POST', searchParams);
      return response.items.map(item => item.encodedId);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchDocumentsBatch = createAsyncThunk(
  'search/documents',
  async ({ ids, offset }, { rejectWithValue }) => {
    try {
      const response = await apiRequest('/documents', 'POST', { ids: ids.slice(offset, offset + 10) });
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    searchParams: null,
    histograms: [],
    documentIds: [],
    documents: [],
    total: 0,
    offset: 0,
    status: 'idle',
    error: null,
  },
  reducers: {
    loadMoreDocuments: (state) => {
      state.offset += 10;
    },
    resetSearch: (state) => {
      state.documents = [];
      state.offset = 0;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchHistograms.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchHistograms.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.histograms = action.payload;
      })
      .addCase(fetchHistograms.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(fetchDocumentIds.fulfilled, (state, action) => {
        state.documentIds = action.payload;
        state.total = action.payload.length;
      })
      .addCase(fetchDocumentsBatch.fulfilled, (state, action) => {
        state.documents = [...state.documents, ...action.payload];
        state.status = 'succeeded';
      });
  },
});

export const { loadMoreDocuments, resetSearch } = searchSlice.actions;
export default searchSlice.reducer;
