

import React from 'react';
import { NextButton } from '../../shared/components/NextButton';
import { PrevButton } from '../../shared/components/PrevButton';
import { Link } from 'react-router-dom';
import styles from './Method.module.css';

export const Method = () => {
  return (
    <div className={styles.methodPage}>
      <main className={styles.methodContainer}>
        <h1 className={styles.title}>Constructor Method</h1>

        <p className={styles.description}>
          The <code>constructor</code> is a special method used to initialize a newly created object from a class.
          It is automatically invoked when you create a new instance using the <code>new</code> keyword.
        </p>

        <h2 className={styles.subheading}>Example</h2>

        <pre className={styles.codeBlock}>
          <code>{`class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    return \`Hi, I'm \${this.name} and I'm \${this.age} years old.\`;
  }
}

const john = new Person('John', 30);
console.log(john.introduce());`}</code>
        </pre>
      </main>

      <nav className={styles.navigation}>
        <Link to="/"><PrevButton /></Link>
        <Link to="/super"><NextButton /></Link>
      </nav>
    </div>
  );
};
