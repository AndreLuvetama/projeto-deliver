package com.deliver.dto;

import java.io.Serializable;

import com.deliver.model.Produtos;

public class ProdutosDTO implements Serializable {
	private static final long serialVersionUID = 1L;
		
	private Long id;
	private String nome;
	private String descricao;
	private String imageUri; 
	private Double preco; 
	
	public ProdutosDTO() {}

	public ProdutosDTO(Long id, String nome, String descricao, String imageUri, Double preco) {
		super();
		this.id = id;
		this.nome = nome;
		this.descricao = descricao;
		this.imageUri = imageUri;
		this.preco = preco;
	}
	
	
	public ProdutosDTO(Produtos entidade) {
		id = entidade.getId();
	    nome = entidade.getNome();
		descricao = entidade.getDescricao();
		imageUri = entidade.getImageUri();
		preco = entidade.getPreco();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public String getImageUri() {
		return imageUri;
	}

	public void setImageUri(String imageUri) {
		this.imageUri = imageUri;
	}

	public Double getPreco() {
		return preco;
	}

	public void setPreco(Double preco) {
		this.preco = preco;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	
	

}
