# えきなう (ekinow)
いま乗っている電車の位置と次の駅がわかるWebアプリ

公開URL: https://sakuraz0079.github.io/ekinow/

## 構成
- `index.html` … 画面とロジック（路線共通）
- `lines/<id>.js` … 路線データ（駅名・よみ・座標・路線色）。形式は [lines/README.md](lines/README.md)
- `icons/` … アイコン（`icon.svg` が元絵、PNG はそこから書き出し）
- `manifest.webmanifest` … ホーム画面に追加したときの名前・アイコン

画面上部のメニューで路線を切り替え（前回の選択を記憶）。`index.html?line=<id>` で直接指定も可。
収録路線: 武蔵野線・京浜東北線・東西線・総武線・総武線快速。追加方法は [lines/README.md](lines/README.md)。
