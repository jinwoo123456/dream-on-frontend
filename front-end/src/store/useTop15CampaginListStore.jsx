import axios from "axios";
import { create } from "zustand";

const useTop15CampaginListStore = create((set) => ({
  campaignList: [],
  fetchCampaignList: async () => {
    try {
      console.log("api요청시작");
      //15개 받기

      // http://192.168.0.53:8586/project
      const response = await axios.get(
        "https://5a444086-c1dc-4892-ad18-bdd46c7aef5f.mock.pstmn.io/api/top15project"
      );
      const data = response.data;
      // console.log(response.data);
      //console.log("응답 데이터 타입:", typeof data);
      // console.log("배열 여부:", Array.isArray(data));
      // console.log("응답 데이터:", data);

      // 서버에서 더 많이 주더라도, 일단 15개만 slice
      const slicedData = data.slice(0, 15);

      set({ campaignList: slicedData });
    } catch (error) {
      console.error("캠페인 리스트 가져오기 오류 발생:", error);
    }
  },
}));

export default useTop15CampaginListStore;
