import React, { FC } from 'react';
import styles from './MenuCards.module.css';

interface MenuCardsProps {}

const MenuCards: FC<MenuCardsProps> = () => (
  <div className={styles.MenuCards}>
    MenuCards Component
  </div>
);

export default MenuCards;
