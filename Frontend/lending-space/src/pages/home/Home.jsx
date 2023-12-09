import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';
import axios from 'axios'; 

const Home = () => {
  const [lendables, setLendables] = useState([]);

  const fetchLendables = async () => {
    try {
      const response = await axios.get('http://localhost:55155/users'); 
      const usersData = response.data;
  
      const allLendables = [];
  
      for (const user of usersData) {
        for (const lendableId of user.lendables) {
          const itemResponse = await axios.get(`http://localhost:55155/items/${lendableId}`);
          const lendableData = itemResponse.data;
  
          allLendables.push({
            userId: user._id,
            userName: user.nome,
            lendableName: lendableData.nome,
            lendableCategory: lendableData.categoria,
            lendableDescription: lendableData.descricao
          });
        }
      }
  
      setLendables(allLendables);
    } catch (error) {
      console.error('Error fetching lendables:', error);
    }
  };
  

  useEffect(() => {
    fetchLendables();
  }, []);

  return (
    <div className={styles.container}>

      <header className={styles.banner}>
        <h1>Lending Space</h1>
        <div className={styles.buttons}>
        <NavigationHandler to="/login">
            <button>Login</button>
        </NavigationHandler>

        <NavigationHandler to="/signup">
            <button>Cadastro</button>
        </NavigationHandler>
        </div>
      </header>

      <section className={styles.description}>
        <h2>Sobre o Projeto</h2>
        <p>Sistema web para emprestar objetos e items temporariamente!</p>
      </section>

      <section className={styles.lendables}>
        <h2>Itens Disponíveis para Empréstimo</h2>
        <div className={styles.lendablesList}>

          {lendables.map((lendable) => (
            <div key={lendable.userId + lendable.lendableName} className={styles.lendableCard}>
              <p>Nome do Usuário: {lendable.userName}</p>
              <p>Nome do Item: {lendable.lendableName}</p>
              <p>Categoria: {lendable.lendableCategory}</p>
              <p>Descrição: {lendable.lendableDescription}</p>
            </div>

          ))}
        </div>
      </section>

      <footer className={styles.footer}>
        <p>Vitor Alves Bonelli - © 2023 Lending Space</p>
      </footer>

    </div>
  );
};

export default Home;
