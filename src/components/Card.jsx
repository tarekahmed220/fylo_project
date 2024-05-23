function Card({ card }) {
  return (
    <div className="text-white element-center flex-col gap-[15px] ">
      <img src={`/images/${card.icon}`} alt="" />
      <h1 className="text-3xl text-white">{card.title}</h1>
      <p className="text-[#c4c8d4] text-[13px]">{card.desc}</p>
    </div>
  );
}

export default Card;
