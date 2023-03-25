import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { Flex } from "react-native-flex-layout";

interface Props {
  value: any;
  onPress: any;
  disabled: any;
  highlighted: any;
}
function Box({ value, onPress, disabled, highlighted }: Props) {
  return (
    <TouchableOpacity disabled={disabled} onPress={onPress}>
      <Flex
        w={90}
        h={90}
        style={{ backgroundColor: highlighted ? "lightblue" : "#E9A9A9" }}
        center
        radius={6}
      >
        <Text style={styles.player}>{value}</Text>
      </Flex>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  player: {
    fontSize: 36
  }
});

export default Box;