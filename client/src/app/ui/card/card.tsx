import React, { FC } from "react";

interface ICard {
  src: string;
  name: string;
}

export const Card: FC<ICard> = ({ src, name }) => {
  return (
    <div className="card">
      <h2 className="card__title">{name}</h2>
      <img src={src} alt={name} className="card__img" />
    </div>
  );
};
