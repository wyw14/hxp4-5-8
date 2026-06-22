export interface FoldLine {
  id: string;
  type: 'valley' | 'mountain';
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  order: number;
  angle: number;
  axisPoint: { x: number; y: number };
}

export interface Question {
  id: string;
  name: string;
  difficulty: number;
  maxSteps: number;
  paperSize: number;
  foldLines: FoldLine[];
  correctModelId: string;
  distractorModelIds: string[];
  description: string;
}

export const questionBank: Question[] = [
  {
    id: 'q1',
    name: '简单对折',
    difficulty: 1,
    maxSteps: 3,
    paperSize: 200,
    foldLines: [
      {
        id: 'f1',
        type: 'valley',
        x1: 100,
        y1: 0,
        x2: 100,
        y2: 200,
        order: 1,
        angle: 180,
        axisPoint: { x: 100, y: 100 }
      }
    ],
    correctModelId: 'rectangle-fold',
    distractorModelIds: ['triangle-fold', 'square-twist', 'crane-base'],
    description: '沿中线对折纸张'
  },
  {
    id: 'q2',
    name: '三角形基础',
    difficulty: 1,
    maxSteps: 3,
    paperSize: 200,
    foldLines: [
      {
        id: 'f1',
        type: 'valley',
        x1: 0,
        y1: 0,
        x2: 200,
        y2: 200,
        order: 1,
        angle: 180,
        axisPoint: { x: 100, y: 100 }
      }
    ],
    correctModelId: 'triangle-fold',
    distractorModelIds: ['rectangle-fold', 'square-twist', 'crane-base'],
    description: '沿对角线对折'
  },
  {
    id: 'q3',
    name: '双折三角形',
    difficulty: 2,
    maxSteps: 4,
    paperSize: 200,
    foldLines: [
      {
        id: 'f1',
        type: 'valley',
        x1: 0,
        y1: 0,
        x2: 200,
        y2: 200,
        order: 1,
        angle: 180,
        axisPoint: { x: 100, y: 100 }
      },
      {
        id: 'f2',
        type: 'valley',
        x1: 0,
        y1: 100,
        x2: 200,
        y2: 100,
        order: 2,
        angle: 90,
        axisPoint: { x: 100, y: 100 }
      }
    ],
    correctModelId: 'small-triangle',
    distractorModelIds: ['triangle-fold', 'rectangle-fold', 'square-twist'],
    description: '对角线折叠后再横向折叠'
  },
  {
    id: 'q4',
    name: '四角向心折',
    difficulty: 2,
    maxSteps: 5,
    paperSize: 200,
    foldLines: [
      {
        id: 'f1',
        type: 'valley',
        x1: 50,
        y1: 0,
        x2: 150,
        y2: 100,
        order: 1,
        angle: 45,
        axisPoint: { x: 100, y: 50 }
      },
      {
        id: 'f2',
        type: 'valley',
        x1: 200,
        y1: 50,
        x2: 100,
        y2: 150,
        order: 2,
        angle: 45,
        axisPoint: { x: 150, y: 100 }
      },
      {
        id: 'f3',
        type: 'valley',
        x1: 150,
        y1: 200,
        x2: 50,
        y2: 100,
        order: 3,
        angle: 45,
        axisPoint: { x: 100, y: 150 }
      },
      {
        id: 'f4',
        type: 'valley',
        x1: 0,
        y1: 150,
        x2: 100,
        y2: 50,
        order: 4,
        angle: 45,
        axisPoint: { x: 50, y: 100 }
      }
    ],
    correctModelId: 'square-twist',
    distractorModelIds: ['crane-base', 'small-triangle', 'rectangle-fold'],
    description: '四个角向中心折叠'
  },
  {
    id: 'q5',
    name: '千纸鹤基础形',
    difficulty: 3,
    maxSteps: 6,
    paperSize: 200,
    foldLines: [
      {
        id: 'f1',
        type: 'valley',
        x1: 0,
        y1: 0,
        x2: 200,
        y2: 200,
        order: 1,
        angle: 180,
        axisPoint: { x: 100, y: 100 }
      },
      {
        id: 'f2',
        type: 'valley',
        x1: 100,
        y1: 0,
        x2: 100,
        y2: 200,
        order: 2,
        angle: 90,
        axisPoint: { x: 100, y: 100 }
      },
      {
        id: 'f3',
        type: 'mountain',
        x1: 50,
        y1: 50,
        x2: 150,
        y2: 150,
        order: 3,
        angle: 60,
        axisPoint: { x: 100, y: 100 }
      }
    ],
    correctModelId: 'crane-base',
    distractorModelIds: ['square-twist', 'small-triangle', 'triangle-fold'],
    description: '折叠出千纸鹤的基础形状'
  }
];

export interface ModelDetail {
  name: string;
  description: string;
  shapeFeatures: string[];
  foldCharacteristics: string;
  keyIdentifiers: string[];
}

export const modelDescriptions: Record<string, ModelDetail> = {
  'rectangle-fold': {
    name: '长方形',
    description: '对折后的矩形',
    shapeFeatures: [
      '整体呈扁长方形，长宽比约为2:1',
      '由上下两层重叠的矩形纸面构成',
      '折叠线位于长边中央，形成清晰的中脊',
      '侧面观察时可看到纸张有一定厚度'
    ],
    foldCharacteristics: '沿中线谷折，将正方形纸对半折叠，形成双层矩形结构',
    keyIdentifiers: ['2:1矩形轮廓', '中线折脊', '双层叠加']
  },
  'triangle-fold': {
    name: '三角形',
    description: '对角线折叠后的三角形',
    shapeFeatures: [
      '整体呈等腰直角三角形，斜边为原正方形对角线',
      '由两层三角形纸面完全重叠',
      '折叠线从一角延伸至对角，形成斜向折脊',
      '直角位于折叠后三角形的一个顶点'
    ],
    foldCharacteristics: '沿对角线谷折，将正方形纸对折为三角形',
    keyIdentifiers: ['等腰直角三角形', '对角折脊', '两翼对称']
  },
  'small-triangle': {
    name: '小三角形',
    description: '两次折叠后的小三角形',
    shapeFeatures: [
      '整体呈较小的三角形，面积约为原纸的1/4',
      '由多层纸张紧密叠加而成，厚度明显',
      '可见两条交叉的折脊线，一条对角、一条横向',
      '边缘整齐，外形紧凑'
    ],
    foldCharacteristics: '先沿对角线折叠，再沿横线对折，形成四层叠加的小三角形',
    keyIdentifiers: ['小尺寸三角', '多层叠加', '双折脊交叉', '紧凑外形']
  },
  'square-twist': {
    name: '方形折',
    description: '四角向心折叠',
    shapeFeatures: [
      '中央为较小的正方形平台，四个角向中心翻折',
      '四个三角形的翻折翼从中心平台向上翘起',
      '整体呈现"花朵"般的放射对称形态',
      '俯视时可见中心方形与四角折叠面'
    ],
    foldCharacteristics: '将正方形纸的四个角依次向中心折叠，形成中心平台加四翼结构',
    keyIdentifiers: ['中心方形平台', '四角翻折翼', '放射对称', '花朵形态']
  },
  'crane-base': {
    name: '鹤基础形',
    description: '千纸鹤基础形状',
    shapeFeatures: [
      '底部为菱形基座，四角对称',
      '两侧各有一个狭长的翼状突起，向上倾斜展开',
      '顶部有一个尖锐的三角形突起，为鹤头/尾的预留部分',
      '整体呈立体感较强的菱形加双翼造型'
    ],
    foldCharacteristics: '先对角折叠再中线折叠，最后山折形成菱形底座与双翼结构',
    keyIdentifiers: ['菱形底座', '双翼突起', '顶部尖角', '立体感强']
  }
};

export interface ModelComparison {
  summary: string;
  differences: string[];
}

export const modelComparisons: Record<string, Record<string, ModelComparison>> = {
  'rectangle-fold': {
    'triangle-fold': {
      summary: '长方形是对折后保持矩形轮廓，三角形则变成三角轮廓',
      differences: [
        '长方形保持直线对折，轮廓仍为矩形；三角形沿对角线折叠，轮廓变为三角形',
        '长方形的折脊平行于边，三角形的折脊是对角线方向',
        '长方形折叠后面积减半但宽度不变，三角形折叠后形状完全改变'
      ]
    },
    'small-triangle': {
      summary: '长方形只折一次轮廓仍为矩形，小三角形经两次折叠轮廓变为小三角',
      differences: [
        '长方形为单层对折，小三角形经过两次对折',
        '长方形保持直边矩形外观，小三角形是更小的三角外形',
        '小三角形有交叉折脊而长方形只有单条平行折脊'
      ]
    },
    'square-twist': {
      summary: '长方形是简单对折的平面结构，方形折是四角翻折的立体结构',
      differences: [
        '长方形轮廓为扁平矩形，方形折有翘起的四角翼面',
        '长方形只有单一折痕，方形折有四条向心折痕',
        '方形折具有明显的立体层次感，长方形更偏平面'
      ]
    },
    'crane-base': {
      summary: '长方形是最简单的平面折叠，鹤基础形是复杂的多步立体折叠',
      differences: [
        '长方形无任何突出部分，鹤基础形有双翼和尖角突出',
        '长方形为双层平面结构，鹤基础形为多层立体结构',
        '鹤基础形可明显看到菱形底座和翼状延伸，长方形无此类特征'
      ]
    }
  },
  'triangle-fold': {
    'rectangle-fold': {
      summary: '三角形是对角线折叠后变为三角轮廓，长方形是中线对折保持矩形轮廓',
      differences: [
        '三角形轮廓为等腰直角三角形，长方形为2:1矩形',
        '三角形的折脊为斜向对角线，长方形的折脊平行于边',
        '三角形折叠后形状完全改变，长方形仍保留矩形外观'
      ]
    },
    'small-triangle': {
      summary: '三角形是单次对角折叠，小三角形是两次折叠后更小的三角',
      differences: [
        '三角形面积约为原纸的1/2，小三角形约为1/4',
        '三角形只有一条折脊，小三角形有两条交叉折脊',
        '小三角形更厚（四层叠加），三角形只有两层'
      ]
    },
    'square-twist': {
      summary: '三角形是简单的单折平面结构，方形折是四角翻折的立体结构',
      differences: [
        '三角形轮廓简洁为三角形，方形折有四角翘起的翼面',
        '三角形无立体感，方形折有明显的立体层次',
        '方形折从顶部看像花朵，三角形无此特征'
      ]
    },
    'crane-base': {
      summary: '三角形是基础平面折叠，鹤基础形有双翼和尖角延伸',
      differences: [
        '三角形为平面结构无突出，鹤基础形有翼状和尖角突出',
        '三角形轮廓为简单三角形，鹤基础形为菱形加双翼',
        '鹤基础形有明显的三维立体感，三角形偏平面'
      ]
    }
  },
  'small-triangle': {
    'rectangle-fold': {
      summary: '小三角形经两次折叠呈小三角轮廓，长方形只折一次保持矩形',
      differences: [
        '小三角形轮廓为紧凑小三角，长方形为扁平矩形',
        '小三角形有两道交叉折脊，长方形只有一道平行折脊',
        '小三角形四层叠加更厚，长方形只有两层'
      ]
    },
    'triangle-fold': {
      summary: '小三角形是两次折叠的更小更厚三角，三角形是单次折叠的较大三角',
      differences: [
        '小三角形面积约为三角形的1/2',
        '小三角形有两道折脊交叉，三角形只有一道',
        '小三角形四层叠加明显更厚，三角形只有两层'
      ]
    },
    'square-twist': {
      summary: '小三角形是紧凑平面折叠，方形折是展开的立体四翼结构',
      differences: [
        '小三角形轮廓紧凑无突出，方形折有四角翘起的翼面',
        '小三角形偏平面，方形折有明显的立体层次',
        '方形折中心有方形平台，小三角形无此类结构'
      ]
    },
    'crane-base': {
      summary: '小三角形是紧凑的平面三角，鹤基础形有双翼和尖角延伸',
      differences: [
        '小三角形为紧凑平面三角，鹤基础形有翼状和尖角突出',
        '鹤基础形菱形底座和双翼非常醒目，小三角形无此类结构',
        '鹤基础形三维立体感强，小三角形偏平面'
      ]
    }
  },
  'square-twist': {
    'rectangle-fold': {
      summary: '方形折是四角翘起的立体花朵形态，长方形是简单对折的平面矩形',
      differences: [
        '方形折有四角翘起的翼面，长方形为扁平矩形无翘起',
        '方形折中心有方形平台，长方形无中心平台结构',
        '方形折有放射对称的花朵造型，长方形为简单平面结构'
      ]
    },
    'triangle-fold': {
      summary: '方形折是四角翘起的立体结构，三角形是简单的平面三角折叠',
      differences: [
        '方形折有四角翘起翼面和中心平台，三角形为简洁平面三角',
        '方形折有明显立体层次，三角形偏平面',
        '方形折俯视如花朵，三角形无此视觉特征'
      ]
    },
    'small-triangle': {
      summary: '方形折是展开的立体四翼结构，小三角形是紧凑的平面多层三角',
      differences: [
        '方形折四角翘起形成翼面，小三角形为紧凑三角无突出',
        '方形折中心有方形平台，小三角形无中心平台',
        '方形折俯视如花朵放射，小三角形为紧密叠加的三角'
      ]
    },
    'crane-base': {
      summary: '方形折是四角对称翘起的花朵形态，鹤基础形是有双翼和尖角的菱形结构',
      differences: [
        '方形折四角对称翘起如花瓣，鹤基础形两侧有翼状延伸',
        '方形折中心为方形平台，鹤基础形底部为菱形',
        '鹤基础形顶部有尖角突出，方形折无尖角'
      ]
    }
  },
  'crane-base': {
    'rectangle-fold': {
      summary: '鹤基础形是复杂的多步立体折叠，长方形是最简单的平面折叠',
      differences: [
        '鹤基础形有双翼和尖角突出，长方形为扁平矩形无突出',
        '鹤基础形菱形底座立体感强，长方形为简单平面结构',
        '鹤基础形经过多步折叠，长方形只需一步对折'
      ]
    },
    'triangle-fold': {
      summary: '鹤基础形有双翼延伸和菱形底座，三角形是简单的平面三角',
      differences: [
        '鹤基础形有翼状和尖角突出，三角形为简单平面三角无突出',
        '鹤基础形菱形底座明显，三角形无底座结构',
        '鹤基础形三维立体感强，三角形偏平面'
      ]
    },
    'small-triangle': {
      summary: '鹤基础形有双翼和尖角的立体结构，小三角形是紧凑的平面三角',
      differences: [
        '鹤基础形有翼状延伸和尖角突出，小三角形为紧凑平面三角',
        '鹤基础形菱形底座和双翼醒目，小三角形无此类结构',
        '鹤基础形三维立体感强，小三角形偏平面'
      ]
    },
    'square-twist': {
      summary: '鹤基础形是菱形底座加双翼结构，方形折是四角翘起的花朵形态',
      differences: [
        '鹤基础形有双翼延伸和尖角突出，方形折四角对称翘起如花瓣',
        '鹤基础形底部为菱形，方形折中心为方形平台',
        '鹤基础形翼面方向性强（两侧），方形折翼面四角均匀放射'
      ]
    }
  }
};
