import React, { useEffect } from "react";
import * as S from "./FeedBackAIStyled";
import { useNavigate } from "react-router-dom";
import PointIcon from "../../assets/images/point_icon.svg";
import GoFeedBackIcon from "../../assets/images/gofeedback_icon.svg";
import NoFrogIcon from "../../assets/images/no_ai_icon.svg";
import { useFeedbackAI } from "../../hooks/useFeedbackAI";

const FeedBackAI = ({ project_id }) => {
    const navigate = useNavigate();
    const { feedbackList, error, isLoading } = useFeedbackAI(project_id); // 데이터와 상태를 가져옴

    useEffect(() => {
        if (isLoading) {
            console.log("데이터를 불러오는 중입니다...");
        }

        if (error) {
            console.error("AI 피드백 데이터를 가져오는 중 오류 발생:", error);
        }

        if (feedbackList && feedbackList.length > 0) {
            console.log("AI 피드백 데이터 성공적으로 불러옴:", feedbackList);
        }
    }, [feedbackList, error, isLoading]);

    return (
        <S.Container>
            <S.Title>
                <S.Row>
                    <p id="title">AI 피드백 정리</p>
                    <S.MyPoint>
                        <img src={PointIcon} alt="Point Icon" />
                        내 포인트 : N 개
                    </S.MyPoint>
                </S.Row>
                <p id="about">클릭 한 번으로 지금까지 받은 모든 피드백 내용들을 한 번에 정리할 수 있어요!</p>
            </S.Title>
            <S.FeedbackBlock>
                <img src={GoFeedBackIcon} alt="Go Feedback Icon" />
                AI 피드백 보고서 생성 시마다 1 포인트가 필요합니다
            </S.FeedbackBlock>
            <S.FeedbackListContainer>
                <S.SelectedFeedbackContainer>
                    <p>AI 피드백 보고서</p>
                    {isLoading ? (
                        <p>로딩 중...</p>
                    ) : feedbackList && feedbackList.length > 0 ? (
                        <S.SelectedFeedbackWrapper>
                            {feedbackList.map((item) => (
                                <S.SelectedFeedback
                                    key={item.id}
                                    onClick={() =>
                                        navigate(`/FeedbackDetail/${project_id}/${item.id}`, {
                                            state: { feedbackDetail: item }, // 상세 데이터 전달
                                        })
                                    }
                                >
                                    <S.InfonDetailBtnWrapper>
                                        <S.NickNamenDateWrapper>
                                            <h5>{item.title}</h5>
                                            <h6>{item.upload_date}</h6>
                                        </S.NickNamenDateWrapper>
                                        <button>상세보기 &gt;</button>
                                    </S.InfonDetailBtnWrapper>
                                    <p>{item.feedback_summary[0]?.summary || "요약 내용이 없습니다."}</p>
                                </S.SelectedFeedback>
                            ))}
                        </S.SelectedFeedbackWrapper>
                    ) : (
                        <S.NoSelectedFeedback>
                            <img src={NoFrogIcon} alt="No Feedback Icon" />
                        </S.NoSelectedFeedback>
                    )}
                </S.SelectedFeedbackContainer>
            </S.FeedbackListContainer>
        </S.Container>
    );
};

export default FeedBackAI;