package com.generation.blogpessoal.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.generation.blogpessoal.model.Postagem;

// A camada repository é responsável por consultar o banco de dados
// criando um repositório de queries dentro da tabela de postgens (tb_postagem)

@Repository
public interface PostagemRepository extends JpaRepository<Postagem, Long> {
	public List<Postagem> findAllByTituloContainingIgnoreCase (String titulo); 
}