# WebGL 入门教程（33 个可直接运行的例子）

一组 **单文件、零依赖、零构建** 的 WebGL 入门示例。每个例子都是一个独立的 HTML 文件，
双击用浏览器打开即可看到效果（Chrome / Edge / Firefox 均可），代码内含详细中文注释。

打开 `index.html` 可以看到带简介的课程目录。

## 学习路线

### 第一阶段 · 基础：从像素到矩阵

| 文件 | 主题 | 新增概念 |
|---|---|---|
| `01-hello-webgl.html` | 认识 WebGL | getContext、viewport、设备像素比 |
| `02-point.html` | 第一个点 | 着色器编译/链接、attribute vs uniform |
| `03-triangle.html` | 第一个三角形 | VBO、drawArrays、裁剪空间、绕序 |
| `04-vertex-color.html` | 顶点色插值 | varying、交错缓冲区、stride/offset |
| `05-animation.html` | 动画 | requestAnimationFrame、delta time、暂停 |
| `06-matrix-2d.html` | 矩阵变换 | mat4（列主序）、变换复合顺序、drawElements |

### 第二阶段 · 真正的 3D

| 文件 | 主题 | 新增概念 |
|---|---|---|
| `07-cube-3d.html` | 进入 3D | 透视投影、lookAt、深度测试、背面剔除 |
| `08-texture.html` | 纹理贴图 | UV、sampler2D、mipmap、NPOT 限制、Y 翻转 |
| `08b-local-image-texture.html` | 本地图片纹理（专题） | File API/拖拽选图、canvas 污染与跨域、NPOT 重采样、各向异性过滤 |
| `08c-face-textures.html` | 六面独立纹理（专题） | 每面一个纹理对象、分面 drawElements（字节偏移）、纹理图集指路 |
| `09-lighting.html` | 光照 | 法线、法线矩阵（逆转置）、Blinn-Phong、gamma |

### 第三阶段 · 工程与进阶

| 文件 | 主题 | 新增概念 |
|---|---|---|
| `10-orbit-camera.html` | 相机与交互 | 轨道相机、Pointer 事件、距离雾 |
| `11-instancing.html` | 实例化 | ANGLE_instanced_arrays、vertexAttribDivisor |
| `12-postprocess.html` | 离屏渲染 | FBO、renderbuffer、全屏四边形、后处理 |
| `13-raymarching.html` | 番外：光线步进 | SDF、ray marching、软阴影、AO |

### 第四阶段 · 进阶补全：真实感与交互

| 文件 | 主题 | 新增概念 |
|---|---|---|
| `14-alpha-blending.html` | 透明与混合 | blendFunc、depthMask(false)、画家算法排序、预乘 alpha |
| `15-shadow-mapping.html` | 阴影贴图 | 光源视角渲染、正交投影、深度打包 pack/unpack、bias、PCF |
| `16-normal-mapping.html` | 法线贴图 | 切线空间、TBN 矩阵、逐面切线、高度图→法线图 |
| `17-cubemap-skybox.html` | 立方体贴图 | TEXTURE_CUBE_MAP、textureCube、天空盒、反射+菲涅尔 |
| `18-particles.html` | 粒子系统 | gl.POINTS、gl_PointSize/gl_PointCoord、DYNAMIC_DRAW、加色混合 |
| `19-picking.html` | 拾取 | 鼠标反投影射线、射线-球求交、颜色编码 ID + readPixels |

### 第五阶段 · 系统化：像引擎一样思考

| 文件 | 主题 | 新增概念 |
|---|---|---|
| `20-scene-graph.html` | 场景图 | Node 层级、world = parent × local、按材质分组绘制 |
| `21-terrain.html` | 程序化地形 | 值噪声 + fBm、高度场、差分法线、海拔/坡度调色 |
| `22-skinning.html` | 骨骼蒙皮 | uniform 矩阵数组（调色板）、双关节权重、LBS |
| `23-text.html` | 文字渲染 | 纹理图集、measureText、半像素内缩、动态文本重排 |

### 第六阶段 · 高级：现代渲染管线

| 文件 | 主题 | 新增概念 |
|---|---|---|
| `24-pbr.html` | PBR | Cook-Torrance、GGX/Smith/Fresnel-Schlick、金属度-粗糙度、HDR 色调映射 |
| `25-webgl2.html` | WebGL2 | #version 300 es、in/out、VAO、核心实例化、transform feedback 指路 |
| `26-gpgpu.html` | GPGPU | 状态纹理、ping-pong 双缓冲、片元并行计算（生命游戏） |
| `27-engine.html` | 迷你引擎 | Mesh/Material/Scene/Renderer 分层、绘制排序、draw call 统计 |

### 第七阶段 · 综合演示：动态渲染

| 文件 | 主题 | 新增概念 |
|---|---|---|
| `28-progressive-build.html` | 点 → 线 → 面 生长动画 | 三种图元同一份数据、aOrder + 顶点外移裁剪做出生长、点精灵、polygonOffset 线框叠加 |
| `28b-mouse-paint.html` | 鼠标绘制画板 | pointer 事件插值盖章、gl_PointCoord 软边笔刷、速度感应笔宽、增量 bufferSubData、撤销栈 |
| `28c-vector-paint.html` | 矢量绘制：点→线→面 | 线段膨胀成四边形（法线偏移）、三角扇填充多边形、逐顶点色沿路径/对角线渐变（HSL 互补色）、实时预览、STREAM_DRAW |
| `28d-texture-paint.html` | 纹理画板：多边形贴图 | 包围盒归一化 UV、sampler2D 采样、跨域污染三级加载（相对路径→fetch blob→拖拽/选图）、UNPACK_FLIP_Y、双程序分 draw |

## 运行方式

- **直接双击**任意 HTML 文件即可（特意不加载任何外部图片/CDN，`file://` 协议可用）。
- 想体验「本地图片当纹理」的完整流程：在目录 `assets/` 里准备了砖墙 / 木纹 / UV 校准
  三张示例图。起本地服务器（`python -m http.server 8000` 后访问 `localhost:8000`）
  可以直接点示例图按钮加载；双击 `file://` 打开时改用**拖拽图片进窗口**或
  「选择图片」按钮（不受跨域限制）。三种方式的原理见 08b 课注释中的对照表。

## 说明

- 01~24 课基于 WebGL 1.0（OpenGL ES 2.0）+ GLSL ES 1.00，兼容性最好；概念完全适用于 WebGL2。
  25 课起进入 WebGL2 / GLSL ES 3.00（2026 年所有主流浏览器均已支持）。
- 参考了成熟开源教程 [webgl-fundamentals](https://github.com/gfxfundamentals/webgl-fundamentals)
  （webglfundamentals.org，BSD-3-Clause）与 [learnopengl.com](https://learnopengl.com) 的课题组织：
  每课只引入 1~3 个新概念，前面的代码会原样出现在后面的课程里。
- 所有矩阵函数为教学目的手写（列主序），生产项目建议使用 gl-matrix 等成熟库。
- 学完 33 课的推荐去处：直接阅读 three.js 的 `WebGLRenderer` 源码（处处似曾相识），
  然后是 WebGPU（计算着色器是 26 课 GPGPU 的正式接班人）。
