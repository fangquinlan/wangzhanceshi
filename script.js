document.addEventListener("DOMContentLoaded", function() {
  // 加载标题和参考信息
  document.getElementById("title").innerText = data.title;
  document.getElementById("reference").innerText = data.reference;

  // 加载文本数据
  const textContainer = document.getElementById("text-container");
  data.text.forEach(item => {
    const annotateSpan = document.createElement("span");
    annotateSpan.className = `annotate ${item.language}`;

    const ipaSpan = document.createElement("span");
    ipaSpan.className = "ipa";
    ipaSpan.innerText = item.ipa;

    const originalSpan = document.createElement("span");
    originalSpan.className = "original-text";
    originalSpan.innerText = item.original;

    const annotationSpan = document.createElement("span");
    annotationSpan.className = "annotation";
    annotationSpan.innerText = item.translation;

    annotateSpan.appendChild(ipaSpan);
    annotateSpan.appendChild(originalSpan);
    annotateSpan.appendChild(annotationSpan);
    textContainer.appendChild(annotateSpan);
  });
});
