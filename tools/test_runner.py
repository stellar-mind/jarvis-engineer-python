import subprocess

def run_tests():
    """
    Executa os testes automatizados do projeto.
    Assumimos que há um script de testes configurado no package.json.
    """
    print("🧪 Executando testes...")

    try:
        # Primeiro, instale as dependências
        print("📦 Instalando dependências...")
        install_result = subprocess.run(["npm", "install"], capture_output=True, text=True, shell=True)
        print(install_result.stdout)

        if install_result.returncode != 0:
            print("❌ Erro ao instalar dependências.")
            print(install_result.stderr)
            return
            # Instale as dependências do Babel e Jest
            print("📦 Instalando dependências do Babel e Jest...") 
            babel_install_result = subprocess.run(
                ["npm", "install", "--save-dev", "@babel/core", "@babel/preset-env", "@babel/preset-react", "@babel/preset-typescript", "babel-jest"],
                capture_output=True, text=True, shell=True
            )
            print(babel_install_result.stdout)

            if babel_install_result.returncode != 0:
                print("❌ Erro ao instalar dependências do Babel e Jest.")
                print(babel_install_result.stderr)
                return
        # Em seguida, execute os testes
        print("🧪 Rodando os testes com Jest...")
        test_result = subprocess.run(["npx", "jest"], capture_output=True, text=True, shell=True)

        print("📄 Saída dos testes:")
        print(test_result.stdout)

        if test_result.returncode == 0:
            print("✅ Todos os testes passaram com sucesso.")
        else:
            print("❌ Alguns testes falharam.")
            print(test_result.stderr)

    except FileNotFoundError:
        print("❌ O comando 'npm' ou 'npx' não foi encontrado. Certifique-se de que o Node.js está instalado e no PATH.")
    except Exception as e:
        print(f"❌ Erro ao executar os testes: {e}")