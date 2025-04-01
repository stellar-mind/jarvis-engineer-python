# Prompt para gerar um componente React Native
GENERATE_COMPONENT_PROMPT = """Crie um componente funcional em React Native com as seguintes especificações:

  - Deve ser chamado de "{component_name}"
  - Deve receber as seguintes props: text (string), color (string), onPress (função)
  - Deve aplicar a cor recebida como backgroundColor
  - Deve centralizar o texto dentro do botão
  - Deve executar onPress ao ser pressionado

Retorne apenas o código do componente, sem explicações. Não use as sintaxes ```jsx, ```tsx ou ```javascript."""

# Prompt para gerar um arquivo de teste para o componente
GENERATE_TEST_PROMPT = """Crie um arquivo de teste para o componente React Native "{component_name}".
O teste deve usar a biblioteca React Native Testing Library.
Certifique-se de testar as seguintes funcionalidades:

  - Renderização correta do componente
  - Execução da função onPress ao clicar no botão
  - Aplicação correta da cor de fundo (backgroundColor)

Retorne apenas o código do arquivo de teste, sem explicações.  Não use as sintaxes ```jsx,```tsx ou ```javascript."""