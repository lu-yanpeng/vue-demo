<template>
  <div class="g-container">
    <ul style="--s: 6">
      <li>
        <div style="background-color: rgb(238, 13, 13)"></div>
      </li>
      <li>
        <div style="background-color: rgb(221, 221, 221)"></div>
      </li>
      <li>
        <div style="background-color: rgb(221, 221, 221)"></div>
      </li>
      <li>
        <div style="background-color: rgb(221, 221, 221)"></div>
      </li>
      <li>
        <div style="background-color: rgb(221, 221, 221)"></div>
      </li>
      <li>
        <div style="background-color: rgb(200, 213, 192)"></div>
      </li>
    </ul>

    <ul style="--s: 6">
      <li>
        <div style="background-color: rgb(238, 13, 13)"></div>
      </li>
      <li>
        <div style="background-color: rgb(221, 221, 221)"></div>
      </li>
      <li>
        <div style="background-color: rgb(221, 221, 221)"></div>
      </li>
      <li>
        <div style="background-color: rgb(221, 221, 221)"></div>
      </li>
      <li>
        <div style="background-color: rgb(221, 221, 221)"></div>
      </li>
      <li>
        <div style="background-color: rgb(200, 213, 192)"></div>
      </li>
    </ul>
  </div>

  <div class="wrap1">
    <ul class="u1">
      <li>1111测试文章测试文章</li>
      <li>EEE测试文章测试文章</li>
      <li>DD测试文章测试文章</li>
      <li>SS测试文章测试文章</li>
      <li>AA测试文章测试文章</li>
      <li>000000测试文章测试文章</li>
    </ul>
    <ul class="u2">
      <li>1111测试文章测试文章</li>
      <li>EEE测试文章测试文章</li>
      <li>DD测试文章测试文章</li>
      <li>SS测试文章测试文章</li>
      <li>AA测试文章测试文章</li>
      <li>000000测试文章测试文章</li>
    </ul>
  </div>
</template>

<style scoped lang="less">
.wrap1 {
  width: 300px;
  height: 50px;
  overflow: hidden;
  border: 1px solid #d3d3d3;
  margin: 0;
  padding: 0;
  display: flex;

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;

    display: grid;
    align-items: center;
    grid-auto-flow: column;
    grid-column-gap: 20px;
    list-style-type: none;
    width: fit-content;
    padding: 0 10px;
    animation: move1 30s linear infinite;

    li {
      width: max-content;
    }
  }

  @keyframes move1 {
    0% {
      transform: translateX(0);
    }

    100% {
      transform: translateX(-100%);
    }
  }
}

.g-container {
  overflow: hidden;
  width: 500px;
  border: 1px solid black;
  display: flex;

  --w: 100;
  --speed: 3s;

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;

    display: grid;
    grid-auto-flow: column;
    flex-wrap: nowrap;
    animation: move2 calc(var(--speed) * var(--s)) steps(var(--s)) infinite;

    li {
      flex-shrink: 0;
      width: 100px;
      height: 50px;
      animation: liMove calc(var(--speed)) ease-in-out infinite;

      div {
        width: 50px;
        height: 50px;
      }
    }
  }

  @keyframes move2 {
    0% {
      transform: translate(0, 0);
    }

    100% {
      transform: translate(calc((var(--s) * var(--w)) * -1px), 0);
    }
  }

  @keyframes liMove {
    0% {
      transform: translateX(0);
    }

    80%,
    100% {
      transform: translate(calc((var(--w)) * -1px), 0);
    }
  }
}
</style>
