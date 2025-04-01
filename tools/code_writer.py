import openai
import os
from tools.prompts import GENERATE_COMPONENT_PROMPT
from dotenv import load_dotenv
# Você pode configurar sua chave da API via variável de ambiente ou diretamente aqui
# Carregar variáveis de ambiente do arquivo .env
load_dotenv()

# Obter a chave da API do arquivo .env
openai.api_key = os.getenv("OPENAI_API_KEY")

def generate_code(prompt: str) -> str:
    """
    Gera código a partir de um prompt textual.
    Pode ser conectado a um LLM como OpenAI GPT, Claude, Mistral, etc.
    """
    
    print("💡 Gerando código a partir do prompt...", prompt)
    
    try:
        # 🔁 MODELO REAL COM OPENAI (opcional)
        response = openai.responses.create(
            model="gpt-4",
            instructions="Você é um engenheiro de software sênior com 20 anos de experiência e especialista em React Native. retorne apenas o código do componente, sem explicações.Não use as sintaxes ```jsx ou ```javascript.",
            input= prompt,
        )

        code = response.output_text

        print("✅ Código gerado com sucesso.")
        return code

    except Exception as e:
        print(f"❌ Erro ao gerar código: {e}")
        return "# Erro ao gerar código. Verifique sua API key e conexão."
