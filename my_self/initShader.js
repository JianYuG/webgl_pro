export default function(gl) {
  // 创建顶点着色器和片元着色器
    const vertexShader = gl.createShader(gl.VERTEX_SHADER);
    const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    // 获取着色器源码
    const vertextSource = document.getElementById('vertex-shader').textContent;
    const fragmentSource = document.getElementById('fragment-shader').textContent;
    // 绑定着色器源码
    gl.shaderSource(vertexShader, vertextSource);
    gl.shaderSource(fragmentShader, fragmentSource);
    // 编译着色器源码
    gl.compileShader(vertexShader);
    gl.compileShader(fragmentShader);
    // 检查着色器编译结果（出错时控制台会有提示）
    [['vertex', vertexShader], ['fragment', fragmentShader]].forEach(([name, shader]) => {
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error(name, 'shader compile error:', gl.getShaderInfoLog(shader));
      }
    });
    // 创建程序对象
    const program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    // 链接program
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error('program link error:', gl.getProgramInfoLog(program));
    }
    gl.useProgram(program);

    return program
}