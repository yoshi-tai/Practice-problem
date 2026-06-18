
"""
(Pythonで範囲をコメントアウトとして置いておく方法)

【主要なコマンドまとめ】※UNIXコマンド
•ls 今のファイルを見る
•cat minesweeper.py ( ファイルの中身を見る)
•実行コマンド
→python3 minesweeper.py


【ファイルない編集　まとめ】
•vim minesweeper.py(ファイルの中身を編集する)
a を押すことによってinsertモードになる
(insertモードで編集可能)
→違うアプリを開くとvisualモードに戻る
•visualモードに戻ってから保存する
→:wqにより保存できる

"""
#ルール作成
import random

#8×8の盤面を作る
board = []

for y in range(8):
    row = []

    for x in range(8):
        row.append(0)

    board.append(row)

    mx = random.randint(0,7)
    my = random.randint(0,7)

board[my][mx] = 9

for row in board:
    print(row)

