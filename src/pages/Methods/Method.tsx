

import React from 'react';
import { NextButton } from '../../shared/components/NextButton';
import { PrevButton } from '../../shared/components/PrevButton';
import { Link } from 'react-router-dom';
import styles from './Method.module.css';

export const Method = () => {
  return (
    <div className={styles.methodPage}>
      <main className={styles.methodContainer}>
        <h1 className={styles.title}>Методы</h1>

        <p className={styles.description}>
         Метод `<code>constructor</code>` — это специальный метод, используемый для инициализации вновь созданного объекта на основе класса.
Он автоматически вызывается при создании нового экземпляра с помощью ключевого слова `<code>new</code>`.

        </p>

        <h2 className={styles.subheading}>Пример</h2>

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
