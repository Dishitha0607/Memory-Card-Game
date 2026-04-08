import { useState, useEffect } from 'react';

export const useGameLogic = (cardValues) => {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [score, setScore] = useState(0);
  const [moves, setMoves] = useState(0);
  const [isLocked, setIsLocked] = useState(false);

  //algorithm is already available - so just copy paste and use it to shuffle the cards
  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  const initialiseGame = () => {
    // SHUFFLE THE CARDS
    const shuffled = shuffleArray(cardValues);

    const finalCrads = shuffled.map((cardValues, index) => ({
      id: index,
      value: cardValues,
      isFlipped: false,
      isMatched: false,
    }));

    setCards(finalCrads);
    setIsLocked(false);
    setMoves(0);
    setScore(0);
    setFlippedCards([]);
    setMatchedCards([]);
  };

  useEffect(() => {
    initialiseGame();
  }, []);

  const handleCardClick = (card) => {
    // Ignore if the card is already flipped or matched
    if (
      card.isFlipped ||
      card.isMatched ||
      isLocked ||
      flippedCards.length === 2
    ) {
      return;
    }

    //Update card flipped state
    const newCrads = cards.map((c) => {
      if (c.id == card.id) {
        return { ...c, isFlipped: true };
      } else {
        return c;
      }
    });

    setCards(newCrads);

    const newFlippedCards = [...flippedCards, card.id];
    setFlippedCards(newFlippedCards);

    //check for match if 2 cards are flipped

    if (flippedCards.length === 1) {
      setIsLocked(true);
      const firstCard = cards[flippedCards[0]];

      if (firstCard.value === card.value) {
        setTimeout(() => {
          setMatchedCards((prev) => [...prev, firstCard.id, card.id]);
          setScore((prev) => prev + 1);
          setCards((prev) =>
            prev.map((c) => {
              if (c.id === card.id || c.id === firstCard.id) {
                return { ...c, isMatched: true };
              } else {
                return c;
              }
            }),
          );
          setFlippedCards([]);
          setIsLocked(false);
        }, 500);
      } else {
        // Flip back card 1, card2

        setTimeout(() => {
          const flippedBackCard = newCrads.map((c) => {
            if (newFlippedCards.includes(c.id) || c.id == card.id) {
              return { ...c, isFlipped: false };
            } else {
              return c;
            }
          });

          setCards(flippedBackCard);

          setFlippedCards([]);
          setIsLocked(false);
        }, 1000);
      }

      setMoves((prev) => prev + 1);
    }
  };

  const isGameComplete = matchedCards.length === cardValues.length;

  return {cards, score, moves, handleCardClick, initialiseGame, isGameComplete};
};