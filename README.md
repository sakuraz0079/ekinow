# えきなう (ekinow)
いま乗っている電車の位置と次の駅がわかるWebアプリ

公開URL: https://sakuraz0079.github.io/ekinow/

## 構成
- `index.html` … 画面とロジック（路線共通）
- `lines/<id>.js` … 路線データ（駅名・よみ・座標・路線色）。形式は [lines/README.md](lines/README.md)
- `icons/` … アイコン（`icon.svg` が元絵、PNG はそこから書き出し）
- `manifest.webmanifest` … ホーム画面に追加したときの名前・アイコン

`index.html?line=<id>` で路線を切り替え（省略時は武蔵野線 `musashino`）。
路線を追加するときは `lines/` にファイルを1つ足すだけです。
