# mapa-ocupacao-hotel

# usar login, pode

# personas: 
- maria gerente (botao excluir acomodacao vai aparecer - nao precisa implementar)
- ana recepcao (botao excluir acomodacao nao vai aparecer)

# cenario
```
 quartos = [
   {descricao: '01', hospede: 'joao'},
   {descricao: '02', hospede: 'cristina'},
   {descricao: '03', hospede: null},
 ]
```
# tela1 - listagem
  rota: /mapa-ocupacao/listagem
  listar quartos
  aparecer uma opçao no menu
  
# tela2 - editar 
  rota: /mapa-ocupacao/:quarto
  exibir um quarto
  
