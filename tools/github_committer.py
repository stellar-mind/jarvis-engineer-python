import subprocess

def commit_code(message: str, branch: str = "main") -> dict:
    """
    Realiza commit e push do código para o repositório Git.
    
    :param message: Mensagem de commit
    :param branch: Nome do branch (default = main)
    :return: dicionário com status da operação
    """
    print("📦 Commitando e fazendo push para o GitHub...")

    try:
        # Etapas do processo Git
        subprocess.run(["git", "add", "."], check=True)
        subprocess.run(["git", "commit", "-m", message], check=True)
        subprocess.run(["git", "push", "origin", branch], check=True)

        print("✅ Código commitado e enviado com sucesso.")
        return {"success": True}

    except subprocess.CalledProcessError as e:
        print(f"❌ Erro no processo Git: {e}")
        return {"success": False, "error": str(e)}
