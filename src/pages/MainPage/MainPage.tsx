import React, { useState } from 'react';
import styles from './MainPage.module.css';
import { PrevButton } from '../../shared/components/PrevButton';
import { NextButton } from '../../shared/components/NextButton';
import { Link } from 'react-router-dom';

export const MainPage = () => {
  const [output, setOutput] = useState('');

  const runCode = () => {
    class Person {
      constructor(name, age) {
        this.name = name;
        this.age = age;
      }
      greet() {
        return `Hi, I'm ${this.name}, ${this.age} years old.`;
      }
    }

    const user = new Person('Alice', 25);
    setOutput(user.greet());
  };

  return (
    <div className={styles.mainPage}>
      <h1 className={styles.title}>Classes in JS</h1>

      <div className={styles.mainContainer}>
        <p>
          A class in JavaScript is a blueprint for creating objects with shared properties and methods.
          Classes were introduced in ES6 (2015) and offer a cleaner, more familiar syntax for object-oriented programming (OOP), compared to traditional prototype-based inheritance.
        </p>
        <pre>
          <code>
{`class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(\`Hi, I'm \${this.name}, \${this.age} years old.\`);
  }
}

const user = new Person('Alice', 25);
user.greet();`}
          </code>
        </pre>
        <button onClick={runCode}>
          Run Example
        </button>

        {output && (
          <div className={styles.output}>
            <strong>Output:</strong> {output}
          </div>
        )}
      </div>
        <div className="navigation">
        <PrevButton />
        <Link to="method">
        <NextButton/>
        </Link>
      </div>
    </div>
  );
};

