package com.deliver.repositorio;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.deliver.model.Ordem;


public interface OrdemRepositorio extends JpaRepository<Ordem, Long> {
	@Query("SELECT DISTINCT obj FROM Ordem obj JOIN FETCH obj.produtos" 
			+ " WHERE obj.status = 0 ORDER BY obj.momento ASC")
	List<Ordem> findOrdemWithProdutos();

}
