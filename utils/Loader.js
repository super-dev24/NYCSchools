import { ActivityIndicator } from "react-native";
import styled from "styled-components/native";

export const Loader = () => (
  <Container>
    <ActivityIndicator size="large" color="#FF0000" />
  </Container>
);

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
