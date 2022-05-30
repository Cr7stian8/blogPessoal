package com.generation.blogpessoal.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.generation.blogpessoal.model.Postagem;
import com.generation.blogpessoal.repository.PostagemRepository;

// indica que é uma classe controladora e qual o endpoint

@RestController
@RequestMapping("/postagens")

//permite que requisições de outras portas sejam aceitas na minha aplicação
@CrossOrigin("*")

public class PostagemController {
	// transfere a responsabilidade de manipular o db para o PostagemRepository
	@Autowired
	private PostagemRepository repository;

	// Criando "select all" para usar no insomnia
	@GetMapping
	public ResponseEntity<List<Postagem>> buscaPostagem() {
		// Retornando Status e todos os dados das postagens do db
		return ResponseEntity.ok(repository.findAll());
	}

	// Criando "select pelo id"
	@GetMapping("/{id}")
	public ResponseEntity<Postagem> buscaPostagemPorId(@PathVariable Long id) {

		// Retornando postagens pelo id
		return repository.findById(id)

				// Caso encontre retorne ok e as postagens encontradas
				.map(resposta -> ResponseEntity.ok(resposta))

				// caso não encontre retorne a mensagem "notFound"
				.orElse(ResponseEntity.notFound().build());
	}

	
	 //Criando select pelo título
	 
	@GetMapping("/titulo/{titulo}")
	public ResponseEntity<List<Postagem>> GetByTitulo(@PathVariable String titulo){
		return ResponseEntity.ok(repository.findAllByTituloContainingIgnoreCase(titulo));
	}
	 

	// Método Post usado para inserir dados
	@PostMapping
	public ResponseEntity<Postagem> adicionaPostagem(@RequestBody Postagem postagem) {
		return ResponseEntity.status(HttpStatus.CREATED).body(repository.save(postagem));
	}

	// Método Put usado para inserir dados
	@PutMapping
	public ResponseEntity<Postagem> atualizaPostagem(@RequestBody Postagem postagem) {
		return ResponseEntity.status(HttpStatus.OK).body(repository.save(postagem));
	}
	
	// Método Delete
	@DeleteMapping("/{id}")
	public void delete(@PathVariable Long id) {
		repository.deleteById(id);
	}
}
