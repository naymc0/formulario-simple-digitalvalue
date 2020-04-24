import m from "mithril";
import endPoint from "../apiGet/articles";
import Input from "./Input";

const labels = {
  _title: "Título",
  _subtitle: "Subtítulo"
};

module.exports = {
  view: function() {
    // console.log(endPoint);
    return m("form", [
      m(Input, [labels._title, m("", { value: endPoint.list.title })]),
      m(Input, [labels._subtitle, m("", { value: endPoint.list.subtitle })])
    ]); // Esta es la idea
  }
};
