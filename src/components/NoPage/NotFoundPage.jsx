import React from 'react';
import { Link } from 'react-router-dom';

export function NotFoundPage () {
  return (
    <div className='noPage'>
      <h1>Parece que esta página no existe</h1>
      <Link to={''}>
        <p>Ir a la página principal</p>
      </Link>
    </div>
  );
}
