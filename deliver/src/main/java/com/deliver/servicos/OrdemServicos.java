package com.deliver.servicos;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.deliver.dto.OrdemDTO;
import com.deliver.model.Ordem;
import com.deliver.repositorio.OrdemRepositorio;


@Service
public class OrdemServicos {
	
	@Autowired
	private OrdemRepositorio ordemRepositorio;
	
	@Transactional(readOnly=true)
	public List<OrdemDTO> findAll(){
		List<Ordem> list = ordemRepositorio.findOrdemWithProdutos();
		return list.stream().map(x -> new OrdemDTO(x)).collect(Collectors.toList());
		
		
	}


}
