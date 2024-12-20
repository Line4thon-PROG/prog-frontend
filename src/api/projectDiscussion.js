import { instance } from "./instance";

export const getProjectDiscussion = async (project_id) => {
    try {
        const response = await instance.get(`/api/project_detail/${project_id}/discussion`);
        console.log("프로젝트 고민 데이터 가져오기 성공:", response.data); // 성공 시 데이터 확인용 로그
        return response.data;
    } catch (error) {
        console.error("프로젝트 고민 데이터 가져오기 에러:", error); // 에러 발생 시 로그
        throw error;
    }
};
