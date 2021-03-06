package com.deliver.servicos;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.deliver.dto.ProdutosDTO;
import com.deliver.model.Produtos;
import com.deliver.repositorio.ProdutoRepositorio;

@Service
public class ProdutosServicos {
	
	@Autowired
	private ProdutoRepositorio produtoRepositorio;
	
	@Transactional(readOnly=true)
	public List<ProdutosDTO> findAll(){
		List<Produtos> list = produtoRepositorio.findAllByOrderByNomeAsc();
		return list.stream().map(x -> new ProdutosDTO(x)).collect(Collectors.toList());
		
		
	}

}
