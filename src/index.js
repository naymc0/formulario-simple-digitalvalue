import m from "mithril";

import formularios from "./models/formularios";
import endPoint from "./apiGet/articles";

m.route(document.getElementById("app"), "/", {
  "/": {
    // view: function() {
    //   return m("div", [m("h1", "Formularios "), m(formularios)]);
    // }
    oninit: endPoint.loadList,
    view: function() {
      // console.log(endPoint.list);
      return m(".article.-list-item", [m("h1", "Formulario"), m(formularios)]);
    }
  }
  // "/articulo/": {
  //   view: function(article) {
  //     return m(
  //       ".article.-list-item",
  //       endPoint.list.map(function(article) {
  //         return m(".single-article", article.title.und);
  //       })
  //     );
  //   }
  // }
});
