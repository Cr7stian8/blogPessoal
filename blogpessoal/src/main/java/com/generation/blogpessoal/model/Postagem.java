
// Model serve para criar tabelas

package com.generation.blogpessoal.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

// criando uma tabela no banco de dados 
@Entity
@Table(name = "tb_postagem")

public class Postagem {

	// criando chave primária e auto_increment
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	//Criando colunas da tabela
	@NotNull
	@Size(min = 1, max = 255)
	private String titulo;
	private String texto;
	private Date data;
	
	
	// Chave Externa
	@ManyToOne
	@JsonIgnoreProperties("postagem")
	private Tema tema;

	// Criando getters and setters
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTitulo() {
		return titulo;
	}

	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}

	public String getTexto() {
		return texto;
	}

	public void setTexto(String texto) {
		this.texto = texto;
	}

	public Date getData() {
		return data;
	}

	public void setData(Date data) {
		this.data = data;
	}

	public Tema getTema() {
		return tema;
	}

	public void setTema(Tema tema) {
		this.tema = tema;
	}

}
