"use client";

import React from 'react';
import styles from './Pagination.module.css';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className={styles.pagination}>
      <ul>
        {currentPage > 1 && (
          <li>
            <button onClick={() => onPageChange(currentPage - 1)}>Anterior</button>
          </li>
        )}
        {pageNumbers.map(number => (
          <li key={number} className={currentPage === number ? styles.active : ''}>
            <button onClick={() => onPageChange(number)}>{number}</button>
          </li>
        ))}
        {currentPage < totalPages && (
          <li>
            <button onClick={() => onPageChange(currentPage + 1)}>Próxima</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Pagination;
