import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Campaign {
  id: string;
  title: string;
  description: string;
  budget: number;
  status: "draft" | "active" | "completed" | "cancelled";
  brandId: string;
  influencerId?: string;
  createdAt: string;
  updatedAt: string;
}

interface CampaignState {
  campaigns: Campaign[];
  loading: boolean;
  error: string | null;
  selectedCampaign: Campaign | null;
}

const initialState: CampaignState = {
  campaigns: [],
  loading: false,
  error: null,
  selectedCampaign: null,
};

const campaignSlice = createSlice({
  name: "campaigns",
  initialState,
  reducers: {
    setCampaigns: (state, action: PayloadAction<Campaign[]>) => {
      state.campaigns = action.payload;
    },
    addCampaign: (state, action: PayloadAction<Campaign>) => {
      state.campaigns.push(action.payload);
    },
    updateCampaign: (state, action: PayloadAction<Campaign>) => {
      const index = state.campaigns.findIndex(
        (c) => c.id === action.payload.id
      );
      if (index !== -1) {
        state.campaigns[index] = action.payload;
      }
    },
    setSelectedCampaign: (state, action: PayloadAction<Campaign | null>) => {
      state.selectedCampaign = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const {
  setCampaigns,
  addCampaign,
  updateCampaign,
  setSelectedCampaign,
  setLoading,
  setError,
} = campaignSlice.actions;

export default campaignSlice.reducer;
