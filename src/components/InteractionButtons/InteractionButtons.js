import React, { Component } from 'react';

export const LoveButton = ({ loveAction, unloveAction, interactions }) => (
  <div
    onClick={() => { interactions.love ? unloveAction() : loveAction() }}>
    {interactions.love}
    <i className="material-icons">{interactions.love ? 'favorite' : 'favorite_outline'}</i>
    <span>love</span>
  </div>
);

export const FavButton = ({ favoriteAction, unfavoriteAction, interactions }) => (
  <div
    onClick={() => { interactions.favorite ? unfavoriteAction() : favoriteAction() }}>
    <i className="material-icons">{interactions.favorite ? 'star' : 'star_outline'}</i>
    <span>favorite</span>
  </div>
);

export const DeleteButton = ({ onClick, text }) => (
  <div onClick={onClick}>
    <i className="material-icons">delete_forever</i>
    <span>{text}</span>
  </div>
);

export const EditButton = ({ onClick }) => (
  <div
    onClick={onClick}
  >
    <i className="material-icons">edit</i>
    <span>edit</span>
  </div>
);