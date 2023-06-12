import bispo
import cavalo
import peao
import rainha
import rei
import torre

# Press Shift+F10 to execute it or replace it with your code.
# Press Double Shift to search everywhere for classes, files, tool windows, actions, and settings.
# p = peao
# t = torre
# c = cavalo
# b = bispo
# r = rei
# s = rainha


def inicia():
    tabuleiro = []
    pecas_ia = [torre.Torre("it"), cavalo.Cavalo("ic"), bispo.Bispo("ib"), rainha.Rainha("is"), rei.Rei("ir"), bispo.Bispo("ib"), cavalo.Cavalo("ic"), torre.Torre("it")]
    pecas_peao_ia = [peao.Peao("ip"), peao.Peao("ip"), peao.Peao("ip"), peao.Peao("ip"), peao.Peao("ip"), peao.Peao("ip"), peao.Peao("ip"), peao.Peao("ip")]
    #pecas_ia = ["it", "ic", "ib", "is", "ir", "ib", "ic", "it"]
    #pecas_peao_ia = ["ip", "ip", "ip", "ip", "ip", "ip", "ip", "ip"]
    #pecas_peao_j = ["jp", "jp", "jp", "jp", "jp", "jp", "jp", "jp"]
    #pecas_j = ["jt", "jc", "jb", "js", "jr", "jb", "jc", "jt"]
    pecas_peao_j = [peao.Peao("jp"), peao.Peao("jp"), peao.Peao("jp"), peao.Peao("jp"), peao.Peao("jp"), peao.Peao("jp"), peao.Peao("jp"), peao.Peao("jp")]
    pecas_j = [torre.Torre("jt"), cavalo.Cavalo("jc"), bispo.Bispo("jb"), rainha.Rainha("js"), rei.Rei("jr"), bispo.Bispo("jb"), cavalo.Cavalo("jc"), torre.Torre("jt")]
    tabuleiro = [pecas_ia, pecas_peao_ia]
    for i in range(4):
        tabuleiro.append(["XX", "XX", "XX", "XX", "XX", "XX", "XX", "XX"])
        # tabuleiro.append(["  ", "  ", "  ", "  ", "  ", "  ", "  ", "  "])
    tabuleiro[4][4]=rei.Rei("jr")
    tabuleiro.append(pecas_peao_j)
    tabuleiro.append(pecas_j)
    tabuleiro_jogador=[]
    linha_tabuleiro_jogador=[]
    linha = ""
    print("  0   1   2   3   4   5   6   7")
    for i in range(8):
        for j in range(8):
            linha = linha + str(tabuleiro[i][j]) + "  "
            linha_tabuleiro_jogador.append(str(tabuleiro[i][j]))
        tabuleiro_jogador.append(linha_tabuleiro_jogador)
        linha_tabuleiro_jogador=[]
        print(str(i)+" "+str(linha))
        linha = ""
    return tabuleiro_jogador, tabuleiro


def tabuleiro():
    return tabuleiro


def imprime_tabuleiro():
    pass
