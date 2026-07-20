# 张圣君影像素材设定库使用手册

这套素材不是普通灵感图，而是视频生成时的视觉约束。每段视频只上传必要的 3 至 5 张图，并在提示词开头声明每张图的权限，避免角色换脸、法器变形和材质串场。

## 三张总板

### 1. 人物锁定总板

文件：`public/zhangshengjun/reference-bible/master-character-lock-board.jpg`

最终解释权：

- 成年张圣君的脸型、黑红肤色、圆目、发型与发量。
- 黑色旧麻布武身衣装、朱砂内衬、赤足法相。
- 宝剑与法索在人身上的尺寸、位置和比例。
- 方壶岩世界中的人物尺度与冷银轮廓光。

此板不负责故事场景构图。食桃悟道阶段的青年张圣君应使用现有樵夫图，不要强行套用成年法相。

### 2. 法器与材质总板

文件：`public/zhangshengjun/reference-bible/master-prop-material-board.jpg`

最终解释权：

- 宝剑：宽直双刃、旧铜材质、云雷纹护手、麻绳握柄、克制的朱砂刻线。
- 法索：手工编结的麻或苎麻法绳，蛇形只是盘绕姿态，不是活蛇。
- 衣饰：黑色旧麻布、不对称武身剪裁、旧铜扣件、八角纹样、少量朱砂内衬。
- 地貌：湿黑玄武岩、黑漆岩面、朱砂裂隙、窄瀑、克制的雷环纹。

此板不负责人物身份，也不应决定镜头构图。

### 3. 故事道具总板

文件：`public/zhangshengjun/reference-bible/master-story-props-board.jpg`

最终解释权：

- 食桃悟道：半桃、桃肉纤维、湿石棋盘、黑白棋子、樵斧和锄柄。
- 游田仪式：空龛神轿的漆木结构、承重绳结、旗幡、灯笼、香炉与水田。
- 进香氛围：队伍密度、田埂路径、清晨山雾和稻田水面。

总板上方的神轿特意保持空龛。神像身份必须由人物锁定总板决定。下方实景式画面只用于队伍、路线和纪实气氛，不用于放大神像脸部。

## 平台上传顺序

### 第 1 段：漆裂成山，法主显现

1. `master-character-lock-board.jpg`
2. `master-prop-material-board.jpg`
3. 横版或竖版首页主视觉原图

声明：图 1 锁定唯一人物身份；图 2 只锁定法器和材质；图 3 只锁定场景构图。

### 第 2 段：法索擦镜，食桃悟道

1. `public/zhangshengjun/woodcutter-origin-v2.jpg`
2. `generated/props-peach-go-tools-sheet.jpg`
3. `anchors/anchor-waterfall-temple.jpg`

声明：图 1 锁定青年张圣君；图 2 只锁定桃、棋盘和劳动工具；图 3 只锁定方壶岩地貌。桃核纹理只能用于圆环转场，不能生长为触手或生物。

### 第 3 段：雷环化剑，剑锋入水

1. `master-character-lock-board.jpg`
2. `generated/prop-ritual-sword-sheet.jpg`
3. `generated/prop-dharma-rope-sheet.jpg`
4. `generated/material-fanghu-lacquer-rock-sheet.jpg`

声明：图 1 锁定人物；图 2 锁定宝剑几何；图 3 锁定法索编织结构；图 4 只锁定岩石和水体材质。法索不得变成活蛇，宝剑不得变成弯刀、武士刀或发光游戏武器。

### 第 4 段：水纹成田，万香归宗

1. `master-story-props-board.jpg`
2. `anchors/anchor-field-palanquin.jpg`
3. `anchors/anchor-procession-banner.jpg`
4. `anchors/anchor-rice-terrace-route.jpg`
5. 需要神像特写时另加 `master-character-lock-board.jpg`

声明：前四张只锁定神轿、仪仗、队伍与路线；人物总板是轿内神像身份的唯一来源。不要根据道具板创造新的神明面孔。

## 可直接粘贴的约束前缀

```text
REFERENCE AUTHORITY, HIGHEST TO LOWEST:
Reference 1 is the only authority for character identity, face, hair, costume and body proportions.
Reference 2 is the authority for prop geometry only. It must not alter the character or composition.
Reference 3 is the authority for material and environment only. It must not introduce new symbols, people or costumes.
Preserve the previous clip's final frame, movement direction, lighting and lens continuity.
Do not merge identities across reference images. Ignore every incidental face or statue in prop and environment boards.
The woven dharma rope is an inanimate hemp ritual rope, never a living snake.
The ritual sword must retain the same straight double-edged aged-bronze design in every frame.
No text, logo, watermark, anatomy drift, costume change, extra limbs, new deity, generic xianxia, neon VFX or game-trailer styling.
```

## 连续扩展规则

- 每次扩展都以上一段最终帧作为最高优先级首帧，再附同一张人物锁定总板。
- 横版和竖版分别生成。竖版使用竖版首帧，不从横版裁切。
- 一段只锁一个主动作和一个转场。不要同时要求变装、换景、打斗和群像。
- 人物、法器、材质、场景四类参考图不要超过 5 张，参考过多会降低约束权重。
- 所有 AI 视频保留无字母版，标题与导航由网页 HTML 叠加。

## 单项设定图

- `generated/prop-ritual-sword-sheet.jpg`：宝剑结构与旧铜细节。
- `generated/prop-dharma-rope-sheet.jpg`：法索编织、结扣与盘绕方式。
- `generated/costume-ornament-sheet.jpg`：衣装、扣件、护腕与发束。
- `generated/material-fanghu-lacquer-rock-sheet.jpg`：方壶岩材质和雷环纹。
- `generated/props-peach-go-tools-sheet.jpg`：食桃、棋盘与樵夫工具。
- `generated/props-field-procession-kit-v2.jpg`：空龛神轿、仪仗与水田。
