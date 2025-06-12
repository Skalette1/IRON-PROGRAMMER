
import React from 'react';
import { NextButton } from '../../shared/components/NextButton';
import { PrevButton } from '../../shared/components/PrevButton';
import { Link } from 'react-router-dom';
import styles from '../Methods/Method.module.css';

export const SuperMethod = () => {
  return (
    <div className={styles.methodPage}>
      <div className={styles.methodContainer}>
        <h1 className={styles.title}>super Keyword</h1>

        <p className={styles.description}>
          <code>super</code> is used in subclasses to call the parent class’s constructor or methods.
        </p>

        <pre className={styles.codeBlock}>
          <code>{`class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    return this.name + ' makes a sound';
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }
}`}</code>
        </pre>
        <p className={styles.description}>
          In the example above, <code>super(name)</code> calls the constructor of <code>Animal</code>. It must be called before using <code>this</code>.
        </p>
      </div>

      <div className={styles.navigation}>
        <Link to="/method">
          <PrevButton />
        </Link>
          <NextButton />
      </div>
    </div>
  );
};
