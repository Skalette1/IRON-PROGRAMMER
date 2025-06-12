
import React from 'react';
import { NextButton } from '../../shared/components/NextButton';
import { PrevButton } from '../../shared/components/PrevButton';
import { Link } from 'react-router-dom';
import styles from '../Methods/Method.module.css';

export const SuperMethod = () => {
  return (
    <div className={styles.methodPage}>
      <div className={styles.methodContainer}>
        <h1 className={styles.title}>Ключевое слово <code>super</code></h1>

        <p className={styles.description}>
          <code>super</code> используется в подклассах для вызова конструктора или методов родительского класса.
        </p>
              <h2 className={styles.subheading}>Пример</h2>
        <pre className={styles.codeBlock}>
          <code>{`class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    return this.name + ' издаёт звук';
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }
}`}</code>
        </pre>

        <p className={styles.description}>
          В приведённом примере <code>super(name)</code> вызывает конструктор класса <code>Animal</code>. Этот вызов должен быть сделан до использования <code>this</code>.
        </p>
      </div>

      <div className={styles.navigation} style={{marginTop: '1rem'}}>
        <Link to="/method">
          <PrevButton />
        </Link>
        <NextButton />
      </div>
    </div>
  );
};
