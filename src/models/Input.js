import m from "mithril";
import { TextField } from "polythene-mithril";
import { TextFieldCSS } from "polythene-css";

TextFieldCSS.addStyle(".themed-textfield", {
  color_light_input_text: "#0D47A1",
  color_light_input_background: "#F7F7F7",
  color_light_focus_border: "#0D47A1",
  input_padding_h: 16
});

module.exports = {
  view: function(labels) {
    var label = labels.children;
    var data = [];
    labels.children.map(function(article) {
      data = article;
      // console.log(article?.attrs?.value.und);
      // console.log(label);
      return data;
    });

    return m(TextField, {
      label: label, // la idea es pasar una variable por aquí. Podría ser una elección del usuario que crea el artículo
      floatingLabel: true,
      className: "themed-textfield",
      value: data?.attrs?.value?.und
    });
    // console.log(labels.children);
  }
};
