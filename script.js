function playTrack(link) {
    const audio = new Audio(link);
    audio.play();
}

const poemLines = [
    "你是人间四月天，",
    "多彩海处绽华光。",
    "短发利落魅力扬，",
    "暗夜之中唯一亮。",
    "命运悄然牵红线，",
    "时光转角初相见。",
    "目光交汇星闪烁，",
    "我的世界添绚烂。",
    "你如仗剑短发君，",
    "阳光之下耀光芒。",
    "月光之中柔情漾，",
    "恰似四月天模样。",
    "热烈晓光温柔雨，",
    "瞬间活力满心房。",
    "微笑能令世界新，",
    "眼神灵动诗意长。",
    "你似司马志高远，",
    "我却不为大业迁。",
    "因你乃我命全部，",
    "心中诗歌永相伴。",
    "最美星辰源永恒，",
    "人间四月诗一篇。",
    "我欲轻声诉君语，",
    "生活波澜心不慌。",
    "遇事冷静莫急躁，",
    "愁绪远离胸怀广。",
    "莫陷抑郁困境中，",
    "过往已逝向前望。",
    "美好未来待君赏。",
    "于你世界感灵动，",
    "坚强勇气映眼前。",
    "过去现在与未来，",
    "生命之美皆可见。",
    "你是人间四月天，",
    "愿伴君度岁月长。",
    "等待四月芳菲至，",
    "因你生命皆璀璨。"
];

let poemHTML = '';
poemLines.forEach((line, index) => {
    poemHTML += `<p style="opacity: 0; transition: opacity 1s; animation: fade-in 0.5s forwards;">${line}</p>`;
});
document.getElementById('poem').innerHTML = poemHTML;

// Fade in effect
const paragraphs = document.querySelectorAll('#poem p');
paragraphs.forEach((p, index) => {
    setTimeout(() => {
        p.style.opacity = 1;
    }, index * 1500); // Staggered appearance
});
