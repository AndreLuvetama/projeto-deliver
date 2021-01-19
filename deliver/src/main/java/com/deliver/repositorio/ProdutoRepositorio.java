package com.deliver.repositorio;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.deliver.model.Produtos;

public interface ProdutoRepositorio extends JpaRepository<Produtos, Long> {
	List<Produtos> findAllByOrderByNomeAsc();

}
