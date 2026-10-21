# ekinow
電車に乗っている時のアプリ

公開URL: https://sakuraz0079.github.io/ekinow/

## 構成
- `index.html` … 画面とロジック（路線共通）
- `lines/<id>.js` … 路線データ（駅名・よみ・座標・路線色）。形式は [lines/README.md](lines/README.md)

`index.html?line=<id>` で路線を切り替え（省略時は武蔵野線 `musashino`）。
路線を追加するときは `lines/` にファイルを1つ足すだけです。
