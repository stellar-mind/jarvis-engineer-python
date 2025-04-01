import os
import json
def create_package_json():
    """
    Cria um arquivo package.json básico, se ele não existir.
    """
    # Verifica se a pasta "src" existe, caso contrário, cria ela
    if not os.path.exists("src"):
        os.makedirs("src")
    package_json_path = os.path.join("src", "package.json")

    if not os.path.exists(package_json_path):
        print("📦 Criando package.json...")
        package_data = {
            "name": "react-native-project",
            "version": "1.0.0",
            "description": "Projeto React Native gerado automaticamente",
            "main": "index.js",
            "scripts": {
                "test": "jest"
            },
            "dependencies": {},
            "devDependencies": {
                "jest": "^29.0.0",
                "@testing-library/react-native": "^12.0.0"
            }
        }

        with open(package_json_path, "w", encoding="utf-8") as package_file:
            json.dump(package_data, package_file, indent=2)
        print("✅ package.json criado com sucesso.")
        # Executa o comando 'npm install' para instalar as dependências
        os.system(f"cd src && npm install")
        print("✅ dependências instaladas com sucesso.")
    else:
        print("📦 package.json já existe.")

def write_file(file_config: dict, content: str):
    """
    Salva o conteúdo em um arquivo, baseado nas configurações passadas.
    
    file_config: {
        "path": "src/components/",
        "filename": "MeuComponente.tsx"
    }
    """
    path = file_config.get("path", "")
    filename = file_config.get("filename", "output.js")

    # Garante que o diretório exista
    os.makedirs(path, exist_ok=True)

    full_path = os.path.join(path, filename)

    try:
        with open(full_path, "w", encoding="utf-8") as file:
            file.write(content)

        print(f"✅ Arquivo salvo com sucesso em: {full_path}")

    except Exception as e:
        print(f"❌ Erro ao salvar arquivo: {e}")
import os
from tools.code_writer import generate_code
from tools.prompts import GENERATE_COMPONENT_PROMPT, GENERATE_TEST_PROMPT

def create_component_and_test(component_name: str):
    """
    Gera um componente React Native e seu arquivo de teste.
    """
     # Certifique-se de que o package.json existe
    create_package_json()
    # Substitua o placeholder {component_name} no prompt
    component_prompt = GENERATE_COMPONENT_PROMPT.format(component_name=component_name)
    component_code = generate_code(component_prompt)
    
    # Caminho para salvar o componente
    component_file_path = os.path.join("src", "components", f"{component_name}.js")
    os.makedirs(os.path.dirname(component_file_path), exist_ok=True)
    
    with open(component_file_path, "w", encoding="utf-8") as component_file:
        component_file.write(component_code)
    print(f"✅ Componente salvo em: {component_file_path}")
    
    # Substitua o placeholder {component_name} no prompt de teste
    test_prompt = GENERATE_TEST_PROMPT.format(component_name=component_name)
    test_code = generate_code(test_prompt)
    
    # Caminho para salvar o arquivo de teste
    test_file_path = os.path.join("src", "components", "__tests__", f"{component_name}.test.js")
    os.makedirs(os.path.dirname(test_file_path), exist_ok=True)
    
    with open(test_file_path, "w", encoding="utf-8") as test_file:
        test_file.write(test_code)
    print(f"✅ Arquivo de teste salvo em: {test_file_path}")
