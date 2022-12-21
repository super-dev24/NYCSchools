import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { useSelector } from "react-redux";
import styled from "styled-components/native";

const Details = ({ route }) => {
  const [score, setScore] = useState({});
  const { detail } = route.params;
  const { details } = useSelector((state) => state.schools_reducer);

  useEffect(() => {
    setScore(details.find((item) => item.dbn === detail.dbn));
  }, []);

  return (
    <SafeAreaViewContainer>
      <ViewContainer>
        <View>
          <Title>Overview</Title>
          <OverviewItem>{detail.overview_paragraph}</OverviewItem>
        </View>
        <Title>Score Information</Title>
        <ScoreContainer>
          <ScoreItem>
            <ScoreHeader>SAT Average Critical Reading Score: </ScoreHeader>
            {score?.sat_critical_reading_avg_score
              ? score.sat_critical_reading_avg_score
              : "-"}
          </ScoreItem>
          <ScoreItem>
            <ScoreHeader>SAT Average Math Score: </ScoreHeader>
            {score?.sat_math_avg_score ? score.sat_math_avg_score : "-"}
          </ScoreItem>
          <ScoreItem>
            <ScoreHeader>SAT Average Writing Score: </ScoreHeader>
            {score?.sat_writing_avg_score ? score.sat_writing_avg_score : "-"}
          </ScoreItem>
        </ScoreContainer>
      </ViewContainer>
    </SafeAreaViewContainer>
  );
};

const SafeAreaViewContainer = styled.SafeAreaView`
  flex: 1;
  background-color: #1e1b26;
`;

const ViewContainer = styled.View`
  flex: 1;
  padding-right: 16px;
  padding-left: 16px;
  margin-top: 16px;
`;

const Title = styled.Text`
  font-size: 20px;
  font-weight: 700;
  margin: 8px 0;
  color: #ff0062;
  text-align: center;
`;

const OverviewItem = styled.Text`
  padding: 0 4px;
  color: #d1d4cd;
  font-size: 16px;
  text-align: justify;
`;

const ScoreContainer = styled.View`
  padding: 0 32px;
`;

const ScoreHeader = styled.Text`
  color: white;
  font-weight: 500;
  font-size: 16px;
`;

const ScoreItem = styled.Text`
  padding: 4px;
  color: white;
  font-size: 18px;
  font-weight: 700;
`;
export default Details;
