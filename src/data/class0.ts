export interface LessonStep {
  titleJa: string;
  titleEn: string;
  descriptionJa: string;
  images: string[];
}

export interface Lesson {
  id: string;
  titleJa: string;
  titleEn: string;
  video: string;
  introJa?: string;
  steps: LessonStep[];
}

const BASE_IMG = 'https://hiroki-online.com/tutorial/Maya_Basic/images/';
const BASE_VIDEO = 'https://hiroki-online.com/tutorial/Maya_Basic/demo/';

const img = (name: string) => `${BASE_IMG}${name}`;
const video = (name: string) => `${BASE_VIDEO}${name}`;

export const class0Lessons: Lesson[] = [
  {
    id: 'interface',
    titleJa: 'インターフェース',
    titleEn: 'Interface',
    video: video('1_interface.mp4'),
    steps: [
      {
        titleJa: 'ワークスペースをGeneralに設定',
        titleEn: 'Set workspace to General',
        descriptionJa: 'Workspaceは General の設定にします。',
        images: [img('interface.01.gif'), img('interface.01b.jpg')],
      },
      {
        titleJa: 'インターフェースのリセット',
        titleEn: 'Reset interface',
        descriptionJa: 'インターフェイスがカスタマイズされている場合はReset Current Workspace でデフォルトの設定に戻ります。',
        images: [img('interface.02.jpg')],
      },
      {
        titleJa: 'メニューをロック',
        titleEn: 'Lock the interface',
        descriptionJa: '右上のロックアイコンをオンにするとメニューがロックされて、間違って動かすことはありません。',
        images: [img('interface.03.jpg')],
      },
    ],
  },
  {
    id: 'ui-element',
    titleJa: 'UIエレメント',
    titleEn: 'UI Element',
    video: video('2_UIelement.mp4'),
    introJa: 'Mayaはメニューが多く複雑に見えますが、実際によく使うツールは限られています。ギターのコードを覚えるように、必要なツールを少しずつプロジェクトを通じて身につけていきましょう。',
    steps: [
      {
        titleJa: 'よく使うメニュー（上部）',
        titleEn: 'Frequently used menus (top)',
        descriptionJa: 'よく使うメニューの名称を覚えましょう。',
        images: [img('UIelement.01.jpg')],
      },
      {
        titleJa: 'よく使うメニュー（下部）',
        titleEn: 'Frequently used menus (bottom)',
        descriptionJa: 'よく使うメニューの名称を覚えましょう。',
        images: [img('UIelement.02.jpg')],
      },
      {
        titleJa: '画面の拡大',
        titleEn: 'Screen magnification',
        descriptionJa: '拡大したい画面の上にカーソルを持って行き、スペースバーを押します。',
        images: [img('UIelement.03.gif')],
      },
    ],
  },
  {
    id: 'making-cube',
    titleJa: '立方体を作成',
    titleEn: 'Making a Cube',
    video: video('3_creating_cube.mp4'),
    steps: [
      {
        titleJa: 'Poly Modelingシェルフを開く',
        titleEn: 'Open Poly Modeling shelf',
        descriptionJa: '立方体を作成してみます。シェルフから Poly Modeling をクリックします。',
        images: [img('creating_cube.01.png')],
      },
      {
        titleJa: '立方体を作成',
        titleEn: 'Create a cube',
        descriptionJa: '立方体のアイコンをクリックすると、立方体が座標の中心に作成されます。',
        images: [img('creating_cube.02.png')],
      },
      {
        titleJa: 'Undo（取り消し）',
        titleEn: 'Undo',
        descriptionJa: 'Z (Undo) で取り消します。',
        images: [img('creating_cube.03.gif')],
      },
      {
        titleJa: '球体を作成',
        titleEn: 'Create a sphere',
        descriptionJa: '次に、球体をクリックしてみます。',
        images: [img('creating_cube.04.png')],
      },
    ],
  },
  {
    id: 'camera-motion',
    titleJa: 'カメラの操作',
    titleEn: 'Camera Motion',
    video: video('4_camera_motion.mp4'),
    steps: [
      {
        titleJa: 'ドリー',
        titleEn: 'Dolly',
        descriptionJa: 'Alt とマウスの右ボタンでドリー。カメラを前方後方に移動します。',
        images: [img('cam.01.gif')],
      },
      {
        titleJa: 'トラック',
        titleEn: 'Track',
        descriptionJa: 'Alt とマウスの中央ボタンでトラック。カメラを上下左右に動かします。',
        images: [img('cam.02.gif')],
      },
      {
        titleJa: 'タンブル（回転）',
        titleEn: 'Tumble (Rotate)',
        descriptionJa: 'Alt とマウスの左ボタンで回転（タンブル）します。',
        images: [img('cam.03.gif')],
      },
      {
        titleJa: 'フォーカス',
        titleEn: 'Focus',
        descriptionJa: 'F キーをクリックするとオブジェクトにカメラがフォーカスされ、画面一杯に表示されます。',
        images: [img('cam.04.gif')],
      },
    ],
  },
  {
    id: 'transformation',
    titleJa: '移動、回転、スケール',
    titleEn: 'Transformation',
    video: video('5_transformation.mp4'),
    steps: [
      {
        titleJa: 'Move Toolの設定',
        titleEn: 'Move Tool settings',
        descriptionJa: 'Move Tool の設定を変えます。左側の Move Tool のアイコンをダブルクリックし、Tool Setting をオープンします。Smart Duplicate をオフにします。',
        images: [img('0_move_tool_setting.jpg')],
      },
      {
        titleJa: 'オブジェクトの移動',
        titleEn: 'Moving objects',
        descriptionJa: '物体を移動してみます。まず最初にオブジェクトをクリックします。ワイヤーフレームが緑色になります。',
        images: [img('transformation.01.png')],
      },
      {
        titleJa: 'マニピュレータの操作',
        titleEn: 'Using the manipulator',
        descriptionJa: 'マニピュレータをドラッグし、移動します。中心をドラッグすると、上下左右に移動できます。',
        images: [img('transformation.02.gif')],
      },
      {
        titleJa: '回転ツール',
        titleEn: 'Rotation Tool',
        descriptionJa: '回転ツールをセレクトします。',
        images: [img('transformation.03.png')],
      },
      {
        titleJa: '回転の操作',
        titleEn: 'Basic rotation',
        descriptionJa: '円をドラッグし、回転させます。',
        images: [img('transformation.04.gif')],
      },
      {
        titleJa: 'カメラに対して直角に回転',
        titleEn: 'Camera-perpendicular rotation',
        descriptionJa: '一番外側の円はカメラに対して直角に回転します。',
        images: [img('transformation.05.gif')],
      },
      {
        titleJa: 'スケールツール',
        titleEn: 'Scale Tool',
        descriptionJa: 'スケールツールをセレクトします。',
        images: [img('transformation.06.png')],
      },
      {
        titleJa: 'スケールの操作',
        titleEn: 'Scale demonstration',
        descriptionJa: 'スケールのマニピュレータを使ってリサイズします。',
        images: [img('transformation.07.gif')],
      },
      {
        titleJa: 'ショートカットキー',
        titleEn: 'Keyboard shortcuts',
        descriptionJa: 'ショートカットキーを使うと素早くツールを切り替えられます。',
        images: [img('transformation.08.gif')],
      },
      {
        titleJa: 'オブジェクトの非アクティブ化',
        titleEn: 'Deactivating objects',
        descriptionJa: 'ワイヤーフレームがグリーンの場合はアクティブの状態です。外をクリックして非アクティブにします。',
        images: [img('transformation.09.gif')],
      },
    ],
  },
  {
    id: 'component',
    titleJa: 'コンポーネント',
    titleEn: 'Component',
    video: video('6_component.mp4'),
    introJa: 'ここで使用する3DデータをPolygon（ポリゴン）と呼びます。ポリゴンはバーテックス、エッジ、フェースで構成されており、これらを総称してコンポーネントと呼びます。',
    steps: [
      {
        titleJa: 'ポリゴンとは',
        titleEn: 'What is a Polygon',
        descriptionJa: 'ここで使用する3DデータをPolygon（ポリゴン）と呼びます。ポリゴンはバーテックス、エッジ、フェースで構成されています。',
        images: [img('component.00.png')],
      },
      {
        titleJa: 'エッジモードに切替',
        titleEn: 'Switch to Edge Mode',
        descriptionJa: 'オブジェクトをセレクトし、マウス右ボタンを押すとメニューがポップアップします。Edge をセレクトします。',
        images: [img('component.01.png')],
      },
      {
        titleJa: 'エッジの選択',
        titleEn: 'Select an Edge',
        descriptionJa: 'オブジェクトがエッジモードになります。エッジをクリックしてセレクトします。',
        images: [img('component.02.png')],
      },
      {
        titleJa: 'エッジで形状変更',
        titleEn: 'Modify shape with Edge',
        descriptionJa: 'このように自由に形を変えることができます。',
        images: [img('component.03.gif')],
      },
      {
        titleJa: 'バーテックスモードに切替',
        titleEn: 'Switch to Vertex Mode',
        descriptionJa: '次にマウス右ボタンで Vertex をセレクトします。',
        images: [img('component.04.png')],
      },
      {
        titleJa: 'バーテックスの選択',
        titleEn: 'Select Vertices',
        descriptionJa: 'Vertex がセレクトされます。',
        images: [img('component.05.png')],
      },
      {
        titleJa: 'バーテックスで形状変更',
        titleEn: 'Modify shape with Vertex',
        descriptionJa: 'このように自由に形を変えることができます。',
        images: [img('component.06.gif')],
      },
      {
        titleJa: 'フェースモードに切替',
        titleEn: 'Switch to Face Mode',
        descriptionJa: '次にマウス右ボタンで Face をセレクトします。',
        images: [img('component.07.png')],
      },
      {
        titleJa: 'フェースの選択',
        titleEn: 'Select a Face',
        descriptionJa: 'Face をセレクトします。',
        images: [img('component.08.png')],
      },
      {
        titleJa: 'フェースで形状変更',
        titleEn: 'Modify shape with Face',
        descriptionJa: 'このように自由に形を変えることができます。',
        images: [img('component.09.gif')],
      },
      {
        titleJa: 'オブジェクトモードに戻る',
        titleEn: 'Return to Object Mode',
        descriptionJa: '作業が終わったら Object モードに戻ります。',
        images: [img('component.10.png')],
      },
      {
        titleJa: 'セレクトの解除',
        titleEn: 'Deselect',
        descriptionJa: '最後に左上の矢印のアイコン（ショートカットは Q）で終了します。次に、オブジェクトの外をクリックし、セレクトを解除します。',
        images: [img('component.11.png')],
      },
    ],
  },
  {
    id: 'exit-maya',
    titleJa: 'Mayaを終了する',
    titleEn: 'Exit Maya',
    video: video('7_exit.mp4'),
    steps: [
      {
        titleJa: 'シーンの保存',
        titleEn: 'Save Scene As',
        descriptionJa: '作品を保存する場合は、Save Scene As で保存します。',
        images: [img('exit.01.png')],
      },
      {
        titleJa: '保存フォルダー',
        titleEn: 'Default folder',
        descriptionJa: '特にフォルダーを指定してない場合は、default のフォルダーに保存されます。',
        images: [img('exit.02.png')],
      },
      {
        titleJa: 'ファイル名の入力',
        titleEn: 'File name',
        descriptionJa: 'File name で名前を付けます。',
        images: [img('exit.03.png')],
      },
      {
        titleJa: 'ファイルタイプの選択',
        titleEn: 'File type',
        descriptionJa: 'ファイルのタイプは、ASCII（アスキー）とBinary（バイナリー）の二種類があります。',
        images: [img('exit.04.png')],
      },
      {
        titleJa: '保存の実行',
        titleEn: 'Save',
        descriptionJa: '保存します。',
        images: [img('exit.05.png')],
      },
      {
        titleJa: '新規シーン',
        titleEn: 'New Scene',
        descriptionJa: '画面をクリアにして、新規で制作したい場合は、New Scene をクリックします。',
        images: [img('exit.06.png')],
      },
      {
        titleJa: 'Mayaの終了',
        titleEn: 'Exit Maya',
        descriptionJa: 'Maya を終了する場合は、Exit をクリックします。',
        images: [img('exit.07.png')],
      },
      {
        titleJa: '保存したシーンを開く',
        titleEn: 'Open saved scene',
        descriptionJa: '保存した作品をオープンする場合は、Open Scene でオープンします。',
        images: [img('exit.08.png')],
      },
    ],
  },
];
