import React from 'react';

export const FacebookButton = ({auth}) => (
  <a onClick={auth} >
  <i className="fa fa-facebook"></i>
  <span>facebook</span>  
  </a>
);

export const GoogleButton = ({auth}) => (
  <a onClick={()=>{auth()}} >
  <i className="fa fa-google-plus"></i>
  <span>google+</span>  
  </a>
);

export const TwitterButton = ({auth}) => (
  <a onClick={()=>{auth()}} >
  <i className="fa fa-twitter"></i>
  <span>twitter</span>
  </a>
);