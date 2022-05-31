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

import com.generation.blogpessoal.model.Tema;
import com.generation.blogpessoal.repository.TemaRepository;

//Indicando que é uma classe controller e o endpoint
@RestController
@RequestMapping("/tema")

//Permitindo requisições de outras portas
@CrossOrigin(origins = "*", allowedHeaders = "*")

public class TemaController {

	// Adição da injeção de dependêndencia
	@Autowired
	private TemaRepository repository;

	// Criando "Select" do db
	@GetMapping
	public ResponseEntity<List<Tema>> buscandoTema() {
		return ResponseEntity.ok(repository.findAll());
	}

	// Criando "select pelo id"
	@GetMapping("/{id}")
	public ResponseEntity<Tema> getById(@PathVariable Long id) {

		// Retornando postagens pelo id
		return repository.findById(id)

				// -------- LAMBDA FUNCTION --------- //

				// Caso encontre retorne ok e as postagens encontradas
				.map(resposta -> ResponseEntity.ok(resposta))

				// caso não encontre retorne a mensagem "notFound"
				.orElse(ResponseEntity.notFound().build());
	}

	// Criando select pelo título
	@GetMapping("/nome/{nome}")

	// Usamos <List<Tema>> quando o retorno puder ser mais do que uma linha da
	// tabela
	// Usamos <Tema> quando o retorno for obrigatoriamente uma linha da tabela
	public ResponseEntity<List<Tema>> getByName(@PathVariable String nome) {
		return ResponseEntity.ok(repository.findAllByDescricaoContainingIgnoreCase(nome));
	}

	// Criando método Post
	@PostMapping
	public ResponseEntity<Tema> AdicionaTema(@RequestBody Tema tema) {
		return ResponseEntity.status(HttpStatus.CREATED).body(repository.save(tema));
	}

	// Criando método Put
	@PutMapping
	public ResponseEntity<Tema> atualizaTema(@RequestBody Tema tema) {
		return ResponseEntity.ok(repository.save(tema));
	}

	// Criando método delete
	// O método Delete não tem retorno, portanto, é uma função void
	@DeleteMapping("/{id}")
	public void deletaTema(@PathVariable Long id) {
		repository.deleteById(id);
	}
}
