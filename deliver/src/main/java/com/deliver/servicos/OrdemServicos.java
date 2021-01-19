package com.deliver.servicos;

import java.time.Instant;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.deliver.dto.OrdemDTO;
import com.deliver.dto.ProdutosDTO;
import com.deliver.model.Ordem;
import com.deliver.model.OrdemStatus;
import com.deliver.model.Produtos;
import com.deliver.repositorio.OrdemRepositorio;
import com.deliver.repositorio.ProdutoRepositorio;


@Service
public class OrdemServicos {
	
	@Autowired
	private OrdemRepositorio ordemRepositorio;
	
	@Autowired
	private ProdutoRepositorio produtoRepositorio;
	
	@Transactional(readOnly=true)
	public List<OrdemDTO> findAll(){
		List<Ordem> list = ordemRepositorio.findOrdemWithProdutos();
		return list.stream().map(x -> new OrdemDTO(x)).collect(Collectors.toList());
				
	}

	@Transactional()
	public OrdemDTO insert(OrdemDTO dto) {
		Ordem ordem = new Ordem(null, dto.getEndereco(), dto.getLatitude(), dto.getLongitude(),
				Instant.now(), OrdemStatus.PENDENTE);
		
		for (ProdutosDTO p: dto.getProdutos()) {
			Produtos produtos = produtoRepositorio.getOne(p.getId());
			ordem.getProdutos().add(produtos);
		}
		ordem = ordemRepositorio.save(ordem);
		return new OrdemDTO(ordem);
	}
	
	@Transactional
	public OrdemDTO setDelivered(Long id) {
		Ordem ordem = ordemRepositorio.getOne(id);
		ordem.setStatus(OrdemStatus.ENTREGUE);
		ordem = ordemRepositorio.save(ordem);
		return new OrdemDTO(ordem);
	}
}
