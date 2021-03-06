package com.deliver.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.deliver.dto.ProdutosDTO;
import com.deliver.servicos.ProdutosServicos;

@RestController
@RequestMapping(value = "/produtos")
public class ProdutoControlador {
	
	@Autowired
	private ProdutosServicos service;
	
	@GetMapping
	public ResponseEntity<List<ProdutosDTO>> findAll(){
		List<ProdutosDTO> list = service.findAll();
		return ResponseEntity.ok().body(list);
	}

	
	

}
