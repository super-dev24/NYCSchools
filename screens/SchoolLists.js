import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_schools, get_school_details } from "../redux/actions";
import styled from "styled-components/native";
import { FlatList } from "react-native";

const SchoolLists = ({ navigation }) => {
  const { schools } = useSelector((state) => state.schools_reducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(get_schools());
    dispatch(get_school_details(0));
  }, []);

  const renderItem = ({ item }) => (
    <ItemContainer
      onPress={() => navigation.navigate("Details", { detail: item })}
    >
      <Title>{item.school_name}</Title>
      <ContactItem>
        <ContactHeader>Address: </ContactHeader>
        {item.location}
      </ContactItem>
      <ContactItem>
        <ContactHeader>Phone: </ContactHeader>
        {item.phone_number}
      </ContactItem>
      <ContactItem>
        <ContactHeader>Website: </ContactHeader>
        {item.website}
      </ContactItem>
      <ContactItem>
        <ContactHeader>Email: </ContactHeader>
        {item.school_email ? item.school_email : "_ _ _"}
      </ContactItem>
    </ItemContainer>
  );

  return (
    <SafeAreaViewContainer>
      <ViewContainer>
        <FlatList
          data={schools}
          keyExtractor={(item) => item.dbn.toString()}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />
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

const ItemContainer = styled.TouchableOpacity`
  margin: 8px;
  padding: 0 16px;
  background-color: #37313b;
  box-shadow: 6px 6px 16px black;
  border-top-width: 18px;
  border-top-color: #65c7bc;
  border-radius: 16px;
  height: 200px;
`;

const Title = styled.Text`
  font-size: 16px;
  font-weight: 700;
  margin: 8px 0;
  color: #ff0062;
  text-align: center;
`;

const ContactHeader = styled.Text`
  color: white;
  font-weight: 500;
  font-size: 14px;
`;

const ContactItem = styled.Text`
  padding: 0 4px;
  color: #d1d4cd;
  font-size: 12px;
`;

export default SchoolLists;
