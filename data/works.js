/*
  ===========================================================================
  作品データ（サンプル）
  ---------------------------------------------------------------------------
  プログラムの知識がなくても、このファイルの中の日本語や数字を書き換えるだけで
  内容を更新できます。構造（{ } や [ ] や " " や , ）は変えずに、
  文字や数字の部分だけを書き換えてください。

  ・artist       : 作家名やサイトの紹介文
  ・series       : シリーズ（コレクション）の一覧
      - id       : シリーズを区別するための英数字（URLに使われます。日本語不可）
      - title    : シリーズ名
      - period   : 制作期間の表示
      - description : シリーズの説明文
      - works    : そのシリーズに含まれる作品の一覧
          - id     : 作品を区別するための英数字
          - title  : 作品名
          - year   : 制作年（例: "1971"）
          - medium : 技法・素材
          - size   : サイズ
          - description : 作品の説明文（省略可）
          - image  : 画像ファイルのパス（例: "images/suiboku-01.jpg"）。
                     まだ画像がない場合は空文字 "" のままにしておくと、
                     「作品画像」のプレースホルダーが表示されます。
  ===========================================================================
*/

window.SITE_DATA = {
  artist: {
    name: "林 うい",
    tagline: "A Life in Works — 1962–2024",
    intro: "60年以上にわたり制作された作品を、シリーズごとに公開しています。非売品として、静かにこの場所に保存されています。",
    footerNote: "非営利・非売品での公開",
  },

  series: [
    {
      id: "suiboku",
      title: "水墨の風景",
      period: "1968–1979",
      description: "1968年から1979年にかけて描かれた水墨による風景作品群。旅先で見た山河の記憶をもとに、余白を活かした構成で制作された。",
      works: [
        { id: "suiboku-01", title: "山の記憶 01", year: "1969", medium: "紙本墨画", size: "72.0 × 51.5 cm", description: "信州の山中で数日間過ごした際のスケッチをもとに、後年アトリエで描き起こされた一点。", image: "images/mood-suiboku.svg", demo: true },
        { id: "suiboku-02", title: "遠い川", year: "1970", medium: "紙本墨画", size: "65.0 × 48.0 cm", description: "", image: "images/mood-suiboku.svg", demo: true },
        { id: "suiboku-03", title: "山の記憶 03", year: "1971", medium: "紙本墨画", size: "72.0 × 51.5 cm", description: "余白の取り方に、このシリーズ初期の特徴がよく表れている。", image: "images/mood-suiboku.svg", demo: true },
        { id: "suiboku-04", title: "朝の稜線", year: "1972", medium: "紙本墨画", size: "80.0 × 55.0 cm", description: "", image: "images/mood-suiboku.svg", demo: true },
        { id: "suiboku-05", title: "霧の谷", year: "1974", medium: "紙本墨画", size: "70.0 × 50.0 cm", description: "", image: "images/mood-suiboku.svg", demo: true },
        { id: "suiboku-06", title: "静かな湖畔", year: "1976", medium: "紙本墨画", size: "75.0 × 53.0 cm", description: "", image: "images/mood-suiboku.svg", demo: true },
      ],
    },
    {
      id: "tsuchi",
      title: "陶と土の記憶",
      period: "1980–1991",
      description: "轆轤を用いず、手びねりで制作された器と造形作品のシリーズ。土地ごとに異なる土の質感を生かしている。",
      works: [
        { id: "tsuchi-01", title: "無題(器) 01", year: "1981", medium: "陶", size: "H 18 × W 22 cm", description: "", image: "images/mood-tsuchi.svg", demo: true },
        { id: "tsuchi-02", title: "無題(器) 02", year: "1983", medium: "陶", size: "H 24 × W 20 cm", description: "", image: "images/mood-tsuchi.svg", demo: true },
        { id: "tsuchi-03", title: "土の記憶", year: "1985", medium: "陶", size: "H 30 × W 26 cm", description: "", image: "images/mood-tsuchi.svg", demo: true },
        { id: "tsuchi-04", title: "無題(器) 04", year: "1988", medium: "陶", size: "H 20 × W 18 cm", description: "", image: "images/mood-tsuchi.svg", demo: true },
        { id: "tsuchi-05", title: "花器(装飾)", year: "不詳", medium: "陶・彩色", size: "不詳", description: "花や葉、人物をあしらった装飾性の高い立体陶芸作品。", image: "images/ceramic-flower-01.jpg" },
      ],
    },
    {
      id: "hikari",
      title: "光の習作",
      period: "1992–2001",
      description: "油彩による、光の反射や透過をテーマにした連作。同じモチーフを時間帯を変えて繰り返し描いている。",
      works: [
        { id: "hikari-01", title: "光の習作 I", year: "1993", medium: "油彩・キャンバス", size: "91.0 × 72.5 cm", description: "", image: "images/mood-hikari.svg", demo: true },
        { id: "hikari-02", title: "光の習作 II", year: "1994", medium: "油彩・キャンバス", size: "91.0 × 72.5 cm", description: "", image: "images/mood-hikari.svg", demo: true },
        { id: "hikari-03", title: "窓辺", year: "1996", medium: "油彩・キャンバス", size: "60.0 × 60.0 cm", description: "", image: "images/mood-hikari.svg", demo: true },
        { id: "hikari-04", title: "午後の光", year: "1998", medium: "油彩・キャンバス", size: "72.5 × 60.5 cm", description: "", image: "images/mood-hikari.svg", demo: true },
        { id: "hikari-05", title: "光の習作 V", year: "2000", medium: "油彩・キャンバス", size: "91.0 × 72.5 cm", description: "", image: "images/mood-hikari.svg", demo: true },
      ],
    },
    {
      id: "kami",
      title: "紙の彫刻",
      period: "2002–2010",
      description: "和紙を漉き重ねて立体を作る手法による彫刻シリーズ。",
      works: [
        { id: "kami-01", title: "紙の彫刻 #1", year: "2003", medium: "和紙", size: "H 40 × W 25 × D 25 cm", description: "", image: "images/mood-suiboku.svg", demo: true },
        { id: "kami-02", title: "紙の彫刻 #2", year: "2006", medium: "和紙", size: "H 55 × W 30 × D 30 cm", description: "", image: "images/mood-suiboku.svg", demo: true },
        { id: "kami-03", title: "紙の彫刻 #3", year: "2009", medium: "和紙", size: "H 45 × W 28 × D 28 cm", description: "", image: "images/mood-suiboku.svg", demo: true },
        { id: "kami-04", title: "無題(インスタレーション)", year: "不詳", medium: "和紙・木の枝", size: "可変", description: "枝に和紙を絡めた大型インスタレーション作品。", image: "images/paper-install-01.jpg" },
      ],
    },
    {
      id: "banen",
      title: "晩年のドローイング",
      period: "2011–2020",
      description: "鉛筆と木炭による、ほぼ毎日描かれたドローイング群から選出。",
      works: [
        { id: "banen-01", title: "無題", year: "2012", medium: "鉛筆・紙", size: "38.0 × 27.0 cm", description: "", image: "images/mood-banen.svg", demo: true },
        { id: "banen-02", title: "無題", year: "2015", medium: "木炭・紙", size: "38.0 × 27.0 cm", description: "", image: "images/mood-banen.svg", demo: true },
        { id: "banen-03", title: "無題", year: "2018", medium: "鉛筆・紙", size: "38.0 × 27.0 cm", description: "", image: "images/mood-banen.svg", demo: true },
      ],
    },
    {
      id: "assemblage",
      title: "アッサンブラージュ(電子部品と紙)",
      period: "2010年代〜2024",
      description: "電子部品・金属箔・和紙などを組み合わせた立体作品のシリーズ。実際の展示作品の写真をもとに掲載しています。",
      works: [
        { id: "aspiration-01", title: "〜憧憬〜aspiration〜", year: "2024", medium: "木材・折り紙・電子部品・乾電池・LED", size: "不詳", description: "富士山や白糸ノ滝のモチーフを、電子部品や折り紙で表現した作品。", image: "images/aspiration.jpg" },
        { id: "sanka-01", title: "無題(タイトル要確認)", year: "不詳", medium: "ミクストメディア", size: "不詳", description: "翼のような形をした電子部品による立体作品。展示プレートの文字が読み取りづらく、正式なタイトルは要確認。", image: "images/sanka.jpg" },
        { id: "hikarunami-01", title: "光る涛(ひかるなみ)", year: "不詳", medium: "立体造形", size: "不詳", description: "波と着物をモチーフに、金箔・銀箔を用いた立体作品。", image: "images/hikarunami.jpg" },
        { id: "vi14-01", title: "無題", year: "2014年頃", medium: "枯枝・紙・その他", size: "不詳", description: "赤の背景に枯枝と蛾をあしらった作品。サインの「vi 14」から2014年頃の制作と推定。", image: "images/vi14.jpg" },
        { id: "mandala-01", title: "無題(マンダラ)", year: "不詳", medium: "ミクストメディア・コラージュ", size: "不詳", description: "円形のモチーフを中心に配したコラージュ作品。", image: "images/mandala-01.jpg" },
        { id: "heiwa-01", title: "平和への光", year: "不詳", medium: "ミクストメディア", size: "不詳", description: "第75回流形展出品作。電子部品を用いた立体作品。", image: "images/heiwa-01.jpg" },
      ],
    },
    {
      id: "ikebana",
      title: "生け花(いけばな)",
      period: "不詳",
      description: "小原流による生け花作品。植物や素材そのものを活かした構成。",
      works: [
        { id: "ikebana-01", title: "無題", year: "不詳", medium: "生花・器", size: "不詳", description: "瓢箪と実物を組み合わせた小原流の作品。", image: "images/ikebana-01.jpg" },
        { id: "ikebana-02", title: "無題", year: "不詳", medium: "生花・器", size: "不詳", description: "彩色した葉と花を組み合わせた作品。", image: "images/ikebana-02.jpg" },
      ],
    },
    {
      id: "drawing",
      title: "ドローイング",
      period: "不詳",
      description: "鉛筆による人物ドローイング。",
      works: [
        { id: "gen-01", title: "GEN", year: "不詳", medium: "鉛筆・紙", size: "不詳", description: "機械的な腕を持つ人物を描いたドローイング。", image: "images/gen-sketch.jpg" },
      ],
    },
    {
      id: "painting",
      title: "絵画(肖像)",
      period: "不詳",
      description: "人物を描いた絵画作品。",
      works: [
        { id: "portrait-01", title: "無題(肖像)", year: "不詳", medium: "絵の具・キャンバス", size: "不詳", description: "眼鏡をかけた男性の肖像画。", image: "images/portrait-01.jpg" },
      ],
    },
    {
      id: "illustration",
      title: "イラスト・書",
      period: "不詳",
      description: "手描きのイラストと書を組み合わせた作品。",
      works: [
        { id: "card-01", title: "無題(これからは一人前の鳥になる)", year: "不詳", medium: "紙・マーカー・書", size: "不詳", description: "イラストと書を組み合わせた作品。押印あり。", image: "images/card-01.jpg" },
      ],
    },
    {
      id: "mihappyo",
      title: "未発表作品",
      period: "年代不詳",
      description: "アトリエに残されていた、制作年や経緯が明らかでない作品群。今後調査を進めながら随時公開する。",
      works: [
        { id: "mihappyo-01", title: "無題", year: "不詳", medium: "不詳", size: "不詳", description: "", image: "images/mood-mihappyo.svg", demo: true },
        { id: "mihappyo-02", title: "無題", year: "不詳", medium: "不詳", size: "不詳", description: "", image: "images/mood-mihappyo.svg", demo: true },
      ],
    },
  ],
};
