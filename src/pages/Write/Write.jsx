import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import back from '../../assets/images/Back.svg';
import styled from 'styled-components';
import progress from '../../assets/images/Register1.svg';
import searchIcon from '../../assets/images/Search.svg';
import checkbox from '../../assets/images/Checkbox2.svg';
import web from '../../assets/images/Web.svg';
import android from '../../assets/images/Android.svg';
import ios from '../../assets/images/IOS.svg';
import genre from '../../assets/images/Genre.svg';
import stack from '../../assets/images/Stack.svg';
import close from '../../assets/images/Close.svg';
import picture from '../../assets/images/Picture.svg';
import active from '../../assets/images/ActiveCheck.svg';
import stackactive from '../../assets/images/StackActive.svg';
import Genreicon from '../../assets/images/Genreicon.svg';
import Stackicon from '../../assets/images/Stackicon.svg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Back = styled.img`
  width: 1.8vw;
  height: 1.8vw;
  margin-top: 3vw;
  margin-bottom: 1vw;
`;

const FirstContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Register = styled.p`
  color: #fff;
  font-family: Pretendard;
  font-size: 1.4vw;
  font-style: normal;
  font-weight: 400;
  line-height: 1.9vw;
  letter-spacing: -0.7px;
`;

const Share = styled.p`
  color: var(--Font-05_Gray_Disabled, #999);
  font-family: Pretendard;
  font-size: 0.8vw;
  font-style: normal;
  font-weight: 400;
  line-height: 1.2vw;
  letter-spacing: -0.4px;
`;

const Progress = styled.img`
  width: 10vw;
  height: 2vw;
`;

const Title = styled.p`
  color: #fff;
  font-family: Pretendard;
  font-size: 1vw;
  font-style: normal;
  font-weight: 600;
  line-height: 1.4vw;
  letter-spacing: -0.5px;
  margin-top: 2.8vw;
`;

const TitleInputContainer = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 4vw;
`;

const TitleInput = styled.input`
  width: 100%;
  padding: 0.8vw;
  padding-right: 3vw;
  border-radius: 0.4vw;
  border: 1px solid
    ${({ isFocused, value }) =>
      isFocused ? 'rgba(0, 193, 58, 0.5)' : value ? '#00C13A' : '#767676'};
  background: ${({ isFocused, value }) =>
    isFocused ? 'rgba(0, 193, 58, 0.1)' : value ? '#111' : '#262626'};
  color: #fff;
  font-family: Pretendard;
  font-size: 0.8vw;
  margin-top: 0.4vw;

  ::placeholder {
    color: var(--Font-05_Gray_Disabled, #999);
  }
`;

const CharCount = styled.span`
  position: absolute;
  right: 1vw;
  top: 58%;
  transform: translateY(-50%);
  color: var(--Font-05_Gray_Disabled, #999);
  font-family: Pretendard;
  font-size: 0.8vw;
`;

const Person = styled.p`
  color: #fff;
  font-family: Pretendard;
  font-size: 1vw;
  font-style: normal;
  font-weight: 600;
  line-height: 1.4vw;
  letter-spacing: -0.5px;
`;

const PersonInput = styled.input`
  width: 24.4vw;
  height: 2.8vw;
  flex-shrink: 0;
  border-radius: 0.4vw;
  border: 1px solid
    ${({ isFocused, value }) =>
      isFocused ? 'rgba(0, 193, 58, 0.5)' : value ? '#00C13A' : '#767676'};
  background: ${({ isFocused, value }) =>
    isFocused ? 'rgba(0, 193, 58, 0.1)' : value ? '#111' : '#262626'};
  padding: 0.8vw;
  color: var(--Font-05_Gray_Disabled, #999);
  font-family: Pretendard;
  font-size: 0.8vw;
  font-style: normal;
  font-weight: 400;
  line-height: 1.2vw;
  letter-spacing: -0.4px;

  ::placeholder {
    color: var(--Font-05_Gray_Disabled, #999);
  }
`;

const PersonInputContainer = styled.div`
  position: relative;
  width: 24.4vw;
`;

const SearchIcon = styled.img`
  position: absolute;
  right: 1vw;
  top: 55%;
  transform: translateY(-50%);
  width: 1.2vw;
  height: 1.2vw;
`;

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1vw;
  align-items: flex-start;
  margin-top: 0.35vw;
`;

const ListContainer = styled.div`
  display: inline-flex;
  padding: 1vw 1.6vw 1vw 1vw;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.6vw;
  border-radius: 0.6vw;
  border: 1px solid var(--Font-05_Gray_Disabled, #999);
  background: #262626;
  width: 24.4vw;
  height: 18vw;
`;

const Participant = styled.p`
  color: #fff;
  font-family: Pretendard;
  font-size: 0.7vw;
  font-style: normal;
  font-weight: 600;
  line-height: 1vw;
  letter-spacing: -0.35px;
`;

const Period = styled.p`
  color: #fff;
  font-family: Pretendard;
  font-size: 1vw;
  font-style: normal;
  font-weight: 600;
  line-height: 1.4vw;
  letter-spacing: -0.5px;
  margin-top: 4vw;
  margin-bottom: 0.4vw;
`;

const CheckBox = styled.img`
  width: 1.6vw;
  height: 1.6vw;
`;

const Web = styled.img`
  width: 3.7vw;
  height: 1.4vw;
`;

const RowContainer2 = styled.div`
  display: flex;
  flex-direction: row;
`;

const SelectContainer = styled.div`
  width: 100%;
  height: 11.3vw;
  flex-shrink: 0;
  border-radius: 0.4vw;
  border: 1px solid var(--Font-05_Gray_Disabled, #999);
  background: #111;
  padding: 1.6vw;
`;

const Genre = styled.img`
  width: 1.2vw;
  height: 1.2vw;
`;

const Circle = styled.div`
  display: flex;
  padding: 0.5vw 0.8vw;
  justify-content: center;
  align-items: center;
  gap: 0.5vw;
  border-radius: 5vw;
  border: 1px solid var(--Font-03_Gray, #505050);
  background: #111;
  color: var(--Font-05_Gray_Disabled, #999);
  font-family: Pretendard;
  font-size: 0.8vw;
  font-style: normal;
  font-weight: 500;
  line-height: 1.2vw;
  letter-spacing: -0.4px;
`;

const deploymentTypes = [
  { src: web, width: '3.7vw', height: '1.4vw', label: 'WEB' },
  { src: ios, width: '3.25vw', height: '1.4vw', label: 'IOS' },
  { src: android, width: '5.3vw', height: '1.4vw', label: 'ANDROID' },
];

const genreRows = [
  ['스포츠', '엔터테인먼트', '음식', '음악', '친구'],
  ['가족', '여행', '교육', '건강', '패션', '쇼핑'],
  ['환경', '부동산', '비즈니스', '자기개발', '동물/펫'],
  ['요리/베이킹', '여가/취미', '사회봉사', '금융/투자', '기타'],
];

const SelectedContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 1vw;
  align-items: center;
  border-radius: 0.4vw;
  background: #262626;
  margin-top: 1vw;
  min-height: 4.2vw;
  height: auto;
  flex-wrap: wrap;
  gap: 0.5vw;
`;

const SelectedGenre = styled.div`
  display: inline-flex;
  padding: 0.5vw 0.8vw;
  margin-right: 0.5vw;
  margin-bottom: 0.5vw;
  justify-content: center;
  align-items: center;
  border-radius: 5vw;
  border: 1px solid #00c13a;
  color: #00c13a;
  font-family: Pretendard;
  font-size: 0.8vw;
  font-style: normal;
  font-weight: 500;
  line-height: 1.2vw;
  letter-spacing: -0.4px;
`;

const Close = styled.img`
  width: 0.8vw;
  height: 0.8vw;
  cursor: pointer;
  margin-left: 0.5vw;
`;

const PlusImage = styled.div`
  width: 24.4vw;
  height: 13.75vw;
  border-radius: 0.4vw;
  background: #7a7a7a;
  overflow: hidden;
  margin-top: 1vw;
  position: relative;
  cursor: pointer;
`;

const Picture = styled.img`
  width: ${({ isIcon }) => (isIcon ? '1.8vw' : '100%')};
  height: ${({ isIcon }) => (isIcon ? '1.8vw' : '100%')};
  object-fit: ${({ isIcon }) => (isIcon ? 'contain' : 'cover')};
  position: absolute;
`;

const Line = styled.div`
  width: 100%;
  height: 0.5vw;
  border-radius: 0.2vw;
  background: #1b1b1b;
  margin-bottom: 1.2vw;
`;

const ContentBlank = styled.textarea`
  display: flex;
  width: 100%;
  padding: 1vw;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  gap: 0.5vw;
  border-radius: 0.4vw;
  height: 36.1vw;
  border: 1px solid
    ${({ isFocused, value }) =>
      isFocused ? 'rgba(0, 193, 58, 0.5)' : value ? '#00C13A' : '#767676'};
  background: ${({ isFocused, value }) =>
    isFocused ? 'rgba(0, 193, 58, 0.1)' : value ? '#111' : '#262626'};
  padding: 1vw;
  margin-top: 0.4vw;
  color: var(--Font-05_Gray_Disabled, #999);
  font-family: Pretendard;
  font-size: 0.75vw;
  font-style: normal;
  font-weight: 400;
  line-height: 1.1vw;
  letter-spacing: -0.375px;
  margin-bottom: 4vw;
  resize: none;

  ::placeholder {
    color: var(--Font-05_Gray_Disabled, #999);
    font-family: Pretendard;
    font-size: 0.75vw;
    font-style: normal;
    font-weight: 400;
    line-height: 1.1vw;
    letter-spacing: -0.375px;
  }

  &:focus {
    outline: none;
  }
`;

const ExplainImageContainer = styled.div`
  display: flex;
  width: 100%;
  height: 8.65vw;
  padding: 1vw;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 0.6vw;
  border: 1px solid #767676;
  background: #262626;
  margin-top: 1vw;
  margin-bottom: 6vw;
`;

const Btn = styled.button`
  display: flex;
  width: 30.5vw;
  padding: 0.8vw 0px;
  justify-content: center;
  align-items: center;
  border-radius: 0.4vw;
  background: var(--Font-05_Gray_Disabled, #999);
  color: var(--Font-01_White, #fff);
  font-family: Pretendard;
  font-size: 0.8vw;
  font-style: normal;
  font-weight: 600;
  line-height: 1.2vw;
  letter-spacing: -0.4px;
`;

const ImageBox = styled.div`
  display: flex;
  width: 47.8vw;
  height: 6.65vw;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 0.4vw;
  background: #7a7a7a;
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2vw;
`;

const Address = styled.p`
  color: #fff;
  font-family: Pretendard;
  font-size: 0.8vw;
  font-style: normal;
  font-weight: 500;
  line-height: 1.2vw;
  letter-spacing: -0.4px;
  margin-top: 1.6vw;
  margin-bottom: 0.6vw;
`;

const AddressInput = styled.input`
  width: 100%;
  height: 2.8vw;
  flex-shrink: 0;
  border-radius: 0.4vw;
  border: 1px solid
    ${({ isFocused, value }) =>
      isFocused ? 'rgba(0, 193, 58, 0.5)' : value ? '#00C13A' : '#767676'};
  background: ${({ isFocused, value }) =>
    isFocused ? 'rgba(0, 193, 58, 0.1)' : value ? '#111' : '#262626'};
  color: var(--Font-05_Gray_Disabled, #999);
  font-family: Pretendard;
  font-size: 0.8vw;
  font-style: normal;
  font-weight: 400;
  line-height: 1.2vw;
  letter-spacing: -0.4px;
  padding: 0.8vw;

  ::placeholder {
    color: var(--Font-05_Gray_Disabled, #999);
    font-family: Pretendard;
    font-size: 0.8vw;
    font-style: normal;
    font-weight: 400;
    line-height: 1.2vw;
    letter-spacing: -0.4px;
  }

  &:focus {
    outline: none;
  }
`;

const GenreP = styled.p`
  color: var(--Font-05_Gray_Disabled, #999);
  font-family: Pretendard;
  font-size: 1vw;
  font-style: normal;
  font-weight: 600;
  line-height: 1.4vw;
  letter-spacing: -0.5px;
`;

const GenreContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.2vw;
`;

const FileInput = styled.input`
  display: none;
`;

function Write() {
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [person, setPerson] = useState('');
  const [period, setPeriod] = useState('');
  const [content, setContent] = useState('');
  const [webAddress, setWebAddress] = useState('');
  const [iosAddress, setIosAddress] = useState('');
  const [androidAddress, setAndroidAddress] = useState('');
  const [isTitleFocused, setIsTitleFocused] = useState(false);
  const [isContentFocused, setIsContentFocused] = useState(false);
  const [isPersonFocused, setIsPersonFocused] = useState(false);
  const [isPeriodFocused, setIsPeriodFocused] = useState(false);
  const [isSummaryFocused, setIsSummaryFocused] = useState(false);
  const [isWebAddressFocused, setIsWebAddressFocused] = useState(false);
  const [isIosAddressFocused, setIsIosAddressFocused] = useState(false);
  const [isAndroidAddressFocused, setIsAndroidAddressFocused] = useState(false);

  const [activeTypes, setActiveTypes] = useState({
    WEB: false,
    IOS: false,
    Android: false,
  });

  const toggleGenre = (genre) => {
    setSelectedGenres((prevSelectedGenres) =>
      prevSelectedGenres.includes(genre)
        ? prevSelectedGenres.filter((g) => g !== genre)
        : [...prevSelectedGenres, genre]
    );
  };

  const removeGenre = (genre) => {
    setSelectedGenres((prevSelectedGenres) =>
      prevSelectedGenres.filter((g) => g !== genre)
    );
  };

  const handleFocus = (setFocus) => () => setFocus(true);
  const handleBlur = (setFocus) => () => setFocus(false);

  const toggleDeploymentType = (label) => {
    setActiveTypes((prevActiveTypes) => ({
      ...prevActiveTypes,
      [label]: !prevActiveTypes[label],
    }));
  };

  const flattenedGenres = genreRows.flat();
  const splitGenres = [flattenedGenres.slice(0, 12), flattenedGenres.slice(12)];

  const [imageSrc, setImageSrc] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageSrc(URL.createObjectURL(file));
    }
  };

  return (
    <>
      <Container>
        <Header />
        <Back src={back} />
        <FirstContainer>
          <Register>프로젝트 등록</Register>
          <Progress src={progress} />
        </FirstContainer>
        <Share>
          나의 프로젝트를 더 다양한 시각에서 바라볼 수 있도록 등록하여 널리
          공유해보세요!
        </Share>
        <Title>프로젝트 제목</Title>
        <TitleInputContainer>
          <TitleInput
            placeholder="프로젝트 제목을 입력해 주세요"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            isFocused={isTitleFocused}
            onFocus={handleFocus(setIsTitleFocused)}
            onBlur={handleBlur(setIsTitleFocused)}
          />

          <CharCount>{title.length}/50</CharCount>
        </TitleInputContainer>
        <Person>프로젝트 참여자</Person>
        <RowContainer>
          <PersonInputContainer>
            <PersonInput
              placeholder="참여자 아이디를 입력해주세요"
              value={person}
              onChange={(e) => setPerson(e.target.value)}
              isFocused={isPersonFocused}
              onFocus={handleFocus(setIsPersonFocused)}
              onBlur={handleBlur(setIsPersonFocused)}
            />
            <SearchIcon src={searchIcon} alt="돋보기 아이콘" />
          </PersonInputContainer>
          <ListContainer>
            <Participant>참여자 목록</Participant>
          </ListContainer>
        </RowContainer>

        <RowContainer>
          <Container>
            <Period>프로젝트 기간</Period>
            <PersonInput
              placeholder="EX) 0000-00-00 ~ 0000-00-00"
              value={period}
              onChange={(e) => setPeriod(e.target.value)}
              isFocused={isPeriodFocused}
              onFocus={handleFocus(setIsPeriodFocused)}
              onBlur={handleBlur(setIsPeriodFocused)}
            />
          </Container>

          <Container style={{ width: '100%' }}>
            <Period>배포 프로젝트 유형</Period>
            <RowContainer2 style={{ marginTop: '0.7vw', gap: '2.4vw' }}>
              {deploymentTypes.map((type, index) => (
                <RowContainer2
                  key={index}
                  style={{ alignItems: 'center', gap: '0.6vw' }}
                >
                  <CheckBox
                    src={activeTypes[type.label] ? active : checkbox}
                    alt={`${type.label} 체크박스`}
                    onClick={() => toggleDeploymentType(type.label)}
                  />
                  <Web
                    src={type.src}
                    style={{ width: type.width, height: type.height }}
                  />
                </RowContainer2>
              ))}
            </RowContainer2>

            {activeTypes['WEB'] && (
              <Container>
                <Address>프로젝트 주소 | Web</Address>
                <AddressInput
                  placeholder="Ex) 배포된 웹 사이트 주소"
                  value={webAddress}
                  isFocused={isWebAddressFocused}
                  onChange={(e) => setWebAddress(e.target.value)}
                  onFocus={() => setIsWebAddressFocused(true)}
                  onBlur={() => setIsWebAddressFocused(false)}
                />
              </Container>
            )}

            {activeTypes['IOS'] && (
              <Container>
                <Address>프로젝트 주소 | iOS</Address>
                <AddressInput
                  placeholder="Ex) APP Store 링크"
                  value={iosAddress}
                  isFocused={isIosAddressFocused}
                  onChange={(e) => setIosAddress(e.target.value)}
                  onFocus={() => setIsIosAddressFocused(true)}
                  onBlur={() => setIsIosAddressFocused(false)}
                />
              </Container>
            )}

            {activeTypes['ANDROID'] && (
              <Container>
                <Address>프로젝트 주소 | Android</Address>
                <AddressInput
                  placeholder="Ex) Google Play 링크"
                  value={androidAddress}
                  isFocused={isAndroidAddressFocused}
                  onChange={(e) => setAndroidAddress(e.target.value)}
                  onFocus={() => setIsAndroidAddressFocused(true)}
                  onBlur={() => setIsAndroidAddressFocused(false)}
                />
              </Container>
            )}
          </Container>
        </RowContainer>

        <Period>프로젝트 태그</Period>
        <SelectContainer>
          <RowContainer2 style={{ gap: '1.4vw' }}>
            <GenreContainer>
              <Genre src={Genreicon} /> <GenreP>장르 </GenreP>
            </GenreContainer>

            <GenreContainer>
              <Genre src={Stackicon} />
              <GenreP>기술 스택 </GenreP>
            </GenreContainer>
          </RowContainer2>

          {splitGenres.map((row, rowIndex) => (
            <RowContainer2
              key={rowIndex}
              style={{
                marginTop: rowIndex > 0 ? '0.4vw' : '1.6vw',
                gap: '0.4vw',
              }}
            >
              {row.map((genre) => (
                <Circle key={genre} onClick={() => toggleGenre(genre)}>
                  {genre}
                </Circle>
              ))}
            </RowContainer2>
          ))}
        </SelectContainer>

        <SelectedContainer>
          {selectedGenres.map((genre) => (
            <SelectedGenre key={genre}>
              {genre}
              <Close src={close} onClick={() => removeGenre(genre)} />
            </SelectedGenre>
          ))}
        </SelectedContainer>

        <Period>프로젝트 썸네일 등록</Period>
        <Share>썸네일 최대 해상도 : 488 X 275</Share>
        <PlusImage onClick={() => document.getElementById('fileInput').click()}>
          {imageSrc ? (
            <Picture src={imageSrc} alt="Project Thumbnail" />
          ) : (
            <Picture src={picture} alt="Placeholder" />
          )}
          <FileInput
            type="file"
            id="fileInput"
            accept="image/*"
            onChange={handleImageChange}
          />
        </PlusImage>

        <Line />

        <Title>프로젝트 한 줄 요약</Title>
        <TitleInputContainer>
          <TitleInput
            placeholder="나의 프로젝트를 한 줄로 요약해 보세요!"
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            isFocused={isSummaryFocused}
            onFocus={handleFocus(setIsSummaryFocused)}
            onBlur={handleBlur(setIsSummaryFocused)}
          />
          <CharCount>{title.length}/50</CharCount>
        </TitleInputContainer>

        <Title style={{ marginTop: '0vw' }}>프로젝트 내용 설명</Title>
        <ContentBlank
          placeholder="프로젝트에 대한 설명을 작성해 주세요"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          isFocused={isContentFocused}
          onFocus={handleFocus(setIsContentFocused)}
          onBlur={handleBlur(setIsContentFocused)}
        />

        <Title style={{ marginTop: '0vw' }}>프로젝트 설명 이미지 첨부</Title>
        <Share>이미지 최대 해상도 : 956 X 537</Share>

        <ExplainImageContainer>
          <ImageBox>
            <Picture src={picture} />
          </ImageBox>
        </ExplainImageContainer>

        <BtnContainer>
          <Btn>다음</Btn>
        </BtnContainer>
      </Container>
    </>
  );
}

export default Write;