package com.deliver.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.deliver.dto.OrdemDTO;

import com.deliver.servicos.OrdemServicos;


@RestController
@RequestMapping(value = "/ordem")
public class OrdemControlador {
	
	@Autowired
	private OrdemServicos service;
	
	@GetMapping
	public ResponseEntity<List<OrdemDTO>> findAll(){
		List<OrdemDTO> list = service.findAll();
		return ResponseEntity.ok().body(list);
	}

	
	

}
