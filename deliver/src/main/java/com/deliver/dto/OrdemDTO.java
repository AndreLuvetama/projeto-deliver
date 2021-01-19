package com.deliver.dto;

import java.io.Serializable;
import java.time.Instant;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import com.deliver.model.Ordem;
import com.deliver.model.OrdemStatus;

public class OrdemDTO  implements Serializable {
	private static final long serialVersionUID = 1L;
	
	private Long id;
	private String endereco;
	private Double latitude;
	private Double longitude;
	private Instant momento;
    private OrdemStatus status;
    
    private List<ProdutosDTO> produtos = new ArrayList<>();

	public OrdemDTO(Long id, String endereco, Double latitude, Double longitude, Instant momento, OrdemStatus status) {
		this.id = id;
		this.endereco = endereco;
		this.latitude = latitude;
		this.longitude = longitude;
		this.momento = momento;
		this.status = status;
		
	}
    
	public OrdemDTO(Ordem entity) {	
		id = entity.getId();
		endereco = entity.getEndereco();
		latitude = entity.getLatitude();
		longitude = entity.getLongitude();
		momento = entity.getMomento();
		status = entity.getStatus();
		produtos = entity.getProdutos().stream().map(x -> new ProdutosDTO(x)).collect(Collectors.toList());
		
		
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getEndereco() {
		return endereco;
	}

	public void setEndereco(String endereco) {
		this.endereco = endereco;
	}

	public Double getLatitude() {
		return latitude;
	}

	public void setLatitude(Double latitude) {
		this.latitude = latitude;
	}

	public Double getLongitude() {
		return longitude;
	}

	public void setLongitude(Double longitude) {
		this.longitude = longitude;
	}

	public Instant getMomento() {
		return momento;
	}

	public void setMomento(Instant momento) {
		this.momento = momento;
	}

	public OrdemStatus getStatus() {
		return status;
	}

	public void setStatus(OrdemStatus status) {
		this.status = status;
	}

	public List<ProdutosDTO> getProdutos() {
		return produtos;
	}

	
}
