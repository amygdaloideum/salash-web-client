import React, { Component } from 'react';

export const LikeButton = ({ likeAction, unlikeAction, interactions }) => (
  <div
    onClick={() => { interactions.like ? unlikeAction() : likeAction() }}>
    {interactions.like}
    <i className="material-icons">{interactions.like ? 'favorite' : 'favorite_outline'}</i>
    <span>like</span>
  </div>
);

export const BinderButton = ({ bindereAction, unBinderAction, interactions }) => (
  <div
    onClick={() => { interactions.favorite ? unfavoriteAction() : favoriteAction() }}>
    <i className="material-icons">{interactions.favorite ? 'star' : 'star_outline'}</i>
    <span>save</span>
  </div>
);

export const DeleteButton = ({ onClick, text }) => (
  <div onClick={onClick}>
    <i className="material-icons">delete_forever</i>
    <span>{text}</span>
  </div>
);

export const EditButton = ({ onClick }) => (
  <div onClick={onClick}>
    <i className="material-icons">edit</i>
    <span>edit</span>
  </div>
);