import Header from '../../components/Header/Header';
import styled from 'styled-components';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { baseURL } from '../../api/baseURL';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ProfileP = styled.p`
  color: #fff;
  font-family: Pretendard;
  font-size: 1.2vw;
  font-style: normal;
  font-weight: 600;
  line-height: 1.7vw;
  letter-spacing: -0.6px;
`;

const Intro = styled.p`
  color: var(--Font-05_Gray_Disabled, #999);
  font-family: Pretendard;
  font-size: 0.7vw;
  font-style: normal;
  font-weight: 600;
  line-height: 1vw;
  letter-spacing: -0.35px;
  margin-top: 1.2vw;
`;

const IntroContent = styled.p`
  color: #fff;
  font-family: Pretendard;
  font-size: 0.7vw;
  font-style: normal;
  font-weight: 400;
  line-height: 1vw;
  letter-spacing: -0.35px;
  margin-top: 0.4vw;
  margin-bottom: 1.6vw;
`;

const Genrep = styled.p`
  color: var(--Font-05_Gray_Disabled, #999);
  font-family: Pretendard;
  font-size: 0.7vw;
  font-style: normal;
  font-weight: 600;
  line-height: 1vw;
  letter-spacing: -0.35px;
`;

const Circle = styled.div`
  display: flex;
  padding: 0.5vw 0.8vw;
  justify-content: center;
  align-items: center;
  gap: 0.5vw;
  color: #00c13a;
  font-family: Pretendard;
  font-size: 0.8vw;
  font-style: normal;
  font-weight: 500;
  line-height: 1.2vw;
  letter-spacing: -0.4px;
  border-radius: 5vw;
  width: 3.5vw;
  height: 2.2vw;
  border: 1px solid #00c13a;
  background: #111;
  margin-top: 0.4vw;
`;

const ProjectContainer = styled.div`
  margin-top: 5.5vw;
  display: flex;
  flex-direction: column;
`;

const ProjectExplain = styled.p`
  color: #fff;
  font-family: Pretendard;
  font-size: 1vw;
  font-style: normal;
  font-weight: 600;
  line-height: 1.2vw;
  letter-spacing: -0.5px;
  margin-bottom: 1.7vw;
`;

const ThumbNail = styled.div`
  width: 16vw;
  height: 9vw;
  align-self: stretch;
  border-radius: 0.4vw;
  background: #6b6b6b;
`;

const ProjectName = styled.p`
  overflow: hidden;
  color: #fff;
  text-overflow: ellipsis;
  font-family: Pretendard;
  font-size: 0.8vw;
  font-style: normal;
  font-weight: 500;
  line-height: 1.2vw;
  letter-spacing: -0.4px;
  margin-top: 0.6vw;
`;

const ProjectDetail = styled.p`
  color: var(--Font-05_Gray_Disabled, #999);
  font-family: Pretendard;
  font-size: 0.6vw;
  font-style: normal;
  font-weight: 600;
  line-height: 0.9vw;
  letter-spacing: -0.3px;
`;

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

function Mypage() {
  const [userInfo, setUserInfo] = useState(null);
  const [projectData, setProjectData] = useState([]);
  const [selectedNav, setSelectedNav] = useState('홈');

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const token = localStorage.getItem('access');
        const response = await axios.get(
          `${baseURL}/api/mypage/accountinfo/me`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setUserInfo(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('유저 정보 불러오기 실패:', error);
      }
    };

    fetchUserInfo();
  }, []);

  // 프로젝트 정보 조회
  useEffect(() => {
    const fetchProjectData = async () => {
      try {
        const token = localStorage.getItem('access');
        const response = await axios.get(
          `${baseURL}/api/mypage/collaborateproject`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setProjectData(response.data.collaborator_projects || []); // 응답이 없으면 빈 배열 할당
        console.log(response.data);
      } catch (error) {
        console.error('프로젝트 정보 불러오기 실패:', error);
      }
    };

    fetchProjectData();
  }, []);

  return (
    <>
      <Container>
        <Header selectedNav="마이페이지" />
        <RowContainer
          style={{ marginTop: '3vw', justifyContent: 'space-between' }}
        >
          <ProfileP>
            {userInfo
              ? `${userInfo.nickname} | ${userInfo.user_university} | ${userInfo.userid}`
              : 'Loading...'}
          </ProfileP>
        </RowContainer>

        <Intro>자기소개</Intro>
        <IntroContent>{userInfo?.description || '자기소개 내용'}</IntroContent>
        <Genrep>선호하는 장르</Genrep>
        <Circle>{userInfo?.favorite_genre || '장르1'}</Circle>

        <ProjectContainer>
          <ProjectExplain>내 프로젝트</ProjectExplain>
          <RowContainer style={{ gap: '0.9vw' }}>
            {projectData.length > 0 ? (
              projectData.map((project, index) => (
                <ColumnContainer key={index}>
                  <ThumbNail
                    as="img"
                    src={project.project_thumbnail || 'default_thumbnail.jpg'}
                    alt={`${project.project_name} 썸네일`}
                  />
                  <ProjectName>{project.project_name}</ProjectName>
                  <ProjectDetail>
                    {[...project.project_genre, ...project.project_stack].join(
                      ' | '
                    )}
                  </ProjectDetail>
                  <IntroContent>{project.simple_description}</IntroContent>
                </ColumnContainer>
              ))
            ) : (
              <p style={{ color: '#999' }}>프로젝트가 없습니다.</p>
            )}
          </RowContainer>
        </ProjectContainer>
      </Container>
    </>
  );
}

export default Mypage;
