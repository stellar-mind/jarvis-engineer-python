import json
import os
import sys
from tools.code_writer import generate_code
from tools.file_manager import write_file
from tools.test_runner import run_tests
from tools.github_committer import commit_code
from tools.file_manager import create_component_and_test

# Caminho para o contexto
context_path = os.path.join("mcp", "mcp_context.json")

def run_agent(component_name=None):
    with open(context_path, "r", encoding="utf-8") as file:
        context = json.load(file)

    last_output = ""

    for action in context.get("actions", []):
        print(f"\n▶️ Executando ação: {action['type']}")

        if action["type"] == "generate_code":
            last_output = generate_code(action["input"])

        elif action["type"] == "write_file":
            write_file(action["input"], last_output)

        elif action["type"] == "run_tests":
            run_tests()

        elif action["type"] == "commit_code":
            result = commit_code(action["input"], context["state"]["branch"])
            if not result.get("success", False):
                print("❌ Erro ao commitar e fazer push para o GitHub.")

        elif action["type"] == "create_component_and_test":
            # Use o nome do componente passado como argumento, se fornecido
            component_name = component_name or action["input"]["component_name"]
            create_component_and_test(component_name)

        else:
            print(f"⚠️ Tipo de ação não reconhecido: {action['type']}")

    print("\n✅ Todas as ações foram concluídas.")

if __name__ == "__main__":
    # Recebe o nome do componente como argumento de linha de comando
    component_name = sys.argv[1] if len(sys.argv) > 1 else None
    run_agent(component_name)