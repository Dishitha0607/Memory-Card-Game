function Card({ card, onClicked }) {
  return (
    <>
      <div
        className={`card ${card.isFlipped ? "flipped" : ""} ${card.isMatched ? "matched" : ""}`}
        onClick={() => onClicked(card)}
      >
        <div className="card-front">?</div>
        <div className="card-back">{card.value}</div>
      </div>
    </>
  );
}

export default Card;
