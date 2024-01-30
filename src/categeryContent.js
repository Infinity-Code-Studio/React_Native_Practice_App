import { View ,Text} from "react-native";


const CategeryContent = (props) => {
  const introduction = props.route.params ? props.route.params.introduction : null;

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Text style={{ color: 'black' }}>{introduction}</Text>
    </View>
  );
};

export default CategeryContent;
