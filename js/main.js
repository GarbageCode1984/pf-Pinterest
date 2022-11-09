window.addEventListener("load", () => {
  const iso = new Isotope("section", {
    // options
    itemSelector: "article",
  });

  const filterBtn = document.querySelectorAll(".btns>li");

  for (let el of filterBtn) {
    el.addEventListener("click", (e) => {
      e.preventDefault();

      for (let el of filterBtn) {
        el.classList.remove("on");
      }

      e.currentTarget.classList.add("on");

      //클릭한 버튼에 있는 a태그 안의 속성 href의 value 값을 가져온다.
      const filering = e.currentTarget.querySelector("a").getAttribute("href");

      iso.arrange({ filter: filering });
    });
  }
});
