//LOGIN
function validar_login(){
	var email = form_login.email.value;
	var senha = form_login.senha.value;

	if (email == "") {
		alert("Campo email obrigatório!");
		form_login.email.focus();
	} else if (senha == "") {
		alert("Campo senha obrigatório!");
		form_login.senha.focus();
	} else {
		alert("Logado com sucesso!")
	};
}

//CADASTRO
function validar_cadastro(){
	var nome = form_cadastro.nome.value;
	var email = form_cadastro.email.value;
	var senha = form_cadastro.senha.value;
	var sexo = form_cadastro.sexo.value;
	var data = form_cadastro.data_nasc.value;
	var uf = form_cadastro.uf.value;
	var cidade = form_cadastro.cidade.value;

	if (nome == "") {
		alert("Campo Nome obrigatório!");
		form_cadastro.nome.focus();
	} else if (email == "") {
		alert("Campo Email obrigatório!");
		form_cadastro.email.focus();
	} else if (senha == "") {
		alert("Campo Senha obrigatório!");
		form_cadastro.senha.focus();
	} else if (sexo == "") {
		alert("Campo Sexo obrigatório!");
		//orm_cadastro.senha.focus();
	} else if (data == "") {
		alert("Campo Data obrigatório!");
		//orm_cadastro.senha.focus();
	} else if (uf == "") {
		alert("Campo UF obrigatório!");
		form_cadastro.uf.focus();
	} else if (cidade == "") {
		alert("Campo Cidade obrigatório!");
		form_cadastro.cidade.focus();
	} else {
		alert("Cadastro realizado com sucesso!")
	};
}

function validar_comentario(){
	var nome = comentarios.name_coment.value;
	var comentario = comentarios.campo_comentario.value;

	if (nome == "") {
		alert("Campo nome obrigatório!");
		//comentarios.name_coment.focus();
	} else if (comentario == "") {
		alert("Campo comentario obrigatório!");
		//comentarios.campo_comentario.focus();
	} else {
		alert("Comentado com sucesso!");
	};
}

function validar_contato(){
	var nome_cont = form_contato.nome_cont.value;
	var email = form_contato.email_cont.value;
	var email2 = form_contato.email_cont2.value;
	var assunto = form_contato.assunto.value;
	var msg = form_contato.mensagem.value;

	if (nome_cont == "") {
		alert("Campo Nome obrigatório!");
		form_contato.nome_cont.focus();
	} else if (email == "") {
		form_contato.email_cont.focus();
		alert("Campo Email obrigatório!");
	} else if (email2 == "") {
		form_contato.email_cont2.focus();
		alert("Campo confirmar email obrigatório!");
	} else if (email != email2) {
		alert("Campo de email estão diferentes!")
		form_contato.email_cont2.focus();
	} else if (assunto == "") {
		alert("Campo assunto obrigatório!");
		form_contato.assunto.focus();
	} else if (msg == "") {
		alert("Campo mensagem obrigatório!");
		form_contato.mensagem.focus();
	} else {
		alert("Mensagem enviada com sucesso!")
	};
}