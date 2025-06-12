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
       Класс в JavaScript — это шаблон (или "чертёж") для создания объектов с общими свойствами и методами. Классы были введены в стандарте ES6 (ECMAScript 2015) и предоставляют более чистый, удобочитаемый и привычный синтаксис для объектно-ориентированного программирования (OOP) по сравнению с традиционной прототипной моделью наследования.
        </p>
          <h2 className={styles.subheading}>Пример</h2>
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

