// components/FichaCurso.jsx

import React from 'react';
import styles from './FichaCurso.module.css';

const FichaCurso = ({ nombre, curso, descripcion }) => {
    return (
        <div className={styles.fichaCurso}>
            <h2>{nombre}</h2>
            <h3>{curso}</h3>
            <p>{descripcion}</p>
        </div>
    );
};

export default FichaCurso;
