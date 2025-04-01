import subprocess

def run_tests():
    """
    Executa os testes automatizados do projeto.
    Assumimos que há um script de testes configurado no package.json.
    """
    print("🧪 Executando testes...")

    try:
        # Comando padrão para projetos JS/TS (ex: React Native)
        result = subprocess.run(["npm install & npm jest"], capture_output=True, text=True)

        print("📄 Saída dos testes:")
        print(result.stdout)

        if result.returncode == 0:
            print("✅ Todos os testes passaram com sucesso.")
        else:
            print("❌ Alguns testes falharam.")
            print(result.stderr)

    except Exception as e:
        print(f"❌ Erro ao executar os testes: {e}")
