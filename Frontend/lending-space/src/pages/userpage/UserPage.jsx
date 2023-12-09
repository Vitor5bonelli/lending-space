import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const UserPage = () => {
  const [user, setUser] = useState({});
  const history = useHistory();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('URL_PARA_O_BACKEND_PARA_BUSCAR_USUARIO');
        setUser(response.data); 
      } catch (error) {
        console.error('Erro ao obter dados do usuário:', error);
      }
    };

    fetchUserData();
  }, []);

  const handleEdit = async () => {
    try {
      await axios.put('URL_PARA_O_BACKEND_PARA_EDITAR_USUARIO', user);
      history.push('/user');
    } catch (error) {
      console.error('Erro ao editar usuário:', error);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete('URL_PARA_O_BACKEND_PARA_EXCLUIR_USUARIO');
      history.push('/');
    } catch (error) {
      console.error('Erro ao excluir usuário:', error);
    }
  };

  const handleItemSubmit = async (itemData) => {
    try {
      await axios.post('URL_PARA_O_BACKEND_PARA_CADASTRAR_ITEM', itemData);
      history.push('/user');
    } catch (error) {
      console.error('Erro ao cadastrar item:', error);
    }
  };

  const handleLendingSubmit = async (lendingData) => {
    try {
      await axios.post('URL_PARA_O_BACKEND_PARA_CADASTRAR_LENDING', lendingData);
      history.push('/user');
    } catch (error) {
      console.error('Erro ao cadastrar lending:', error);
    }
  };

  return (
    <div>
      <h1>Página do Usuário</h1>
      <div>
        <h2>Informações do Usuário</h2>
        <p>Nome: {user.nome}</p>
        <p>Senha: {user.senha}</p>
        <p>Telefone: {user.telefone}</p>

        <button onClick={handleEdit}>Editar</button>
        <button onClick={handleDelete}>Excluir Conta</button>
      </div>

      <div>
        <h2>Cadastrar Item</h2>
        <form onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          const itemData = {
            nome: formData.get('nome'),
            categoria: formData.get('categoria'),
            descricao: formData.get('descricao'),
          };
          handleItemSubmit(itemData);
        }}>
          <input type="text" name="nome" placeholder="Nome do Item" />
          <input type="text" name="categoria" placeholder="Categoria do Item" />
          <input type="text" name="descricao" placeholder="Descrição do Item" />
          <button type="submit">Cadastrar Item</button>
        </form>
      </div>

      <div>
        <h2>Cadastrar Lending</h2>
        <form onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          const lendingData = {
            idDono: user._id, 
            idMutuario: formData.get('idMutuario'),
            dataDevolucao: formData.get('dataDevolucao'),
            emAtraso: false, 
          };
          handleLendingSubmit(lendingData);
        }}>
          <input type="text" name="idMutuario" placeholder="ID do Mutuário" />
          <input type="date" name="dataDevolucao" placeholder="Data de Devolução" />
          <button type="submit">Cadastrar Lending</button>
        </form>
      </div>
    </div>
  );
};

export default UserPage;
