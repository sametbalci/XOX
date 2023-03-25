import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
} from "react-native";
import { VStack, HStack } from "react-native-flex-layout";
import Box from "./Box";
import checkWinner from "./checkWinner";


function App() {
  const [currentPlayer, setCurrentPlayer] = useState("X");

  const [board, setBoard] = useState(Array(9).fill(null));

  const [highlighted, setHighlighted] = useState([]);

  const [winner, setWinner] = useState(null);

  const handlePress = (index: any) => {
    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);

    const winnerLine = checkWinner(newBoard);
    if (winnerLine) {
      setHighlighted(winnerLine);
      setWinner(currentPlayer);
      alert(`${currentPlayer} won!`);
    } else {
      setCurrentPlayer((prev) => (prev === "X" ? "O" : "X"));
    }
  };

  const handleReset = () => {
    setCurrentPlayer("X");
    setBoard(Array(9).fill(null));
    setHighlighted([]);
    setWinner(null);
  };

  const getBox = (index: any) => (
    <Box
      value={board[index]}
      onPress={() => handlePress(index)}
      highlighted={highlighted.includes(index)}
      disabled={winner || board[index]}
    />
  );
  return (
    <>
      <View
        style={styles.titleItem}
      >
        <Text style={styles.titleText}>{currentPlayer} to Play</Text>
      </View>
      <VStack fill center spacing={6}>
        <HStack spacing={6} shouldWrapChildren>
          {getBox(0)}
          {getBox(1)}
          {getBox(2)}
        </HStack>
        <HStack spacing={6} shouldWrapChildren>
          {getBox(3)}
          {getBox(4)}
          {getBox(5)}
        </HStack>
        <HStack spacing={6} shouldWrapChildren>
          {getBox(6)}
          {getBox(7)}
          {getBox(8)}
        </HStack>
        <Button title="Reset" onPress={handleReset} />
      </VStack>
    </>
  );
}

const styles = StyleSheet.create({
  titleItem: {
    marginBottom: -100,
    alignItems: "center",
    marginTop: 120,
  },
  titleText: {
    fontSize: 36
  }
});
export default App;
