import { useState } from "react";
import Card from "./Card";

function Features() {
  const [cards, setCard] = useState([
    {
      icon: "icon-access-anywhere.svg",
      title: "Acces your files,anywhere",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut sed beatae, laboriosam enim voluptatum quia.",
    },
    {
      icon: "icon-security.svg",
      title: "Security you can trust",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut sed beatae, laboriosam enim voluptatum quia.",
    },
    {
      icon: "icon-collaboration.svg",
      title: "Real-time collaboration",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut sed beatae, laboriosam enim voluptatum quia.",
    },
    {
      icon: "icon-any-file.svg",
      title: "Store any type of file",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut sed beatae, laboriosam enim voluptatum quia.",
    },
  ]);
  return (
    <section id="features" className="bg-[#181e2a] pb-[20px]">
      <div className=" grid grid-cols-1 md:grid-cols-2 w-[800px] mx-auto gap-[60px] text-center max-w-full px-[15px]">
        {cards.map((card) => {
          return <Card card={card} key={card.title} />;
        })}
      </div>
    </section>
  );
}

export default Features;
