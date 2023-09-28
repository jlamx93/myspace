function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}const Title = props => {
  const { chatName } = props;
  return /*#__PURE__*/(
    React.createElement("div", { className: "header" },
    chatName, " - Instant Message", /*#__PURE__*/
    React.createElement("ul", { className: "header__links" }, /*#__PURE__*/
    React.createElement("li", { className: "header__minimize" }, "_"), /*#__PURE__*/
    React.createElement("li", { className: "header__maximize" }, "[]"), /*#__PURE__*/
    React.createElement("li", { className: "header__close" }, "\xD7"))));



};

const Navbar = ({ chatName }) => {
  return /*#__PURE__*/(
    React.createElement("nav", { className: "nav" }, /*#__PURE__*/
    React.createElement("ul", { className: "nav__list" }, /*#__PURE__*/
    React.createElement("li", { className: "nav__item" }, "File"), /*#__PURE__*/
    React.createElement("li", { className: "nav__item" }, "Edit"), /*#__PURE__*/
    React.createElement("li", { className: "nav__item" }, "Insert")), /*#__PURE__*/

    React.createElement("span", { className: "nav__warning-level" }, chatName, "'s Warning Level: 0%")));


};

const MessageItem = ({ message, screenName, className }) => {
  const { text, id } = message;
  return /*#__PURE__*/(
    React.createElement("div", { className: `message-item ${className}` }, /*#__PURE__*/
    React.createElement("div", { className: "message-item__screenname" }, screenName, ":"),
    text));


};

const MessageList = props => {
  const { messageData, screenName, chatName } = props;
  const currentMessage = { text: "wazzaaaaahhh!!!", id: 1 };
  return /*#__PURE__*/(
    React.createElement("div", { className: "message-list" }, /*#__PURE__*/
    React.createElement("div", { className: "message-list__container" }, /*#__PURE__*/
    React.createElement(MessageItem, {
      message: currentMessage,
      className: "message-item--other",
      screenName: chatName }),

    messageData.map((message, i) => {
      return /*#__PURE__*/(
        React.createElement(MessageItem, { message: message, screenName: screenName, key: i }));

    }))));




};

const CustomizeRow = props => {
  return /*#__PURE__*/(
    React.createElement("div", { className: "customize-row" }, /*#__PURE__*/
    React.createElement("div", { className: "customize-row__set" }, /*#__PURE__*/
    React.createElement("button", { className: "customize-row__button text-blue" }, "A"), /*#__PURE__*/
    React.createElement("button", { className: "customize-row__button background-blue" }, "A")), /*#__PURE__*/


    React.createElement("div", { className: "customize-row__set" }, /*#__PURE__*/
    React.createElement("button", { className: "customize-row__button small-a" }, "A"), /*#__PURE__*/
    React.createElement("button", { className: "customize-row__button medium-a" }, "A"), /*#__PURE__*/
    React.createElement("button", { className: "customize-row__button large-a" }, "A")), /*#__PURE__*/


    React.createElement("div", { className: "customize-row__set" }, /*#__PURE__*/
    React.createElement("button", { className: "customize-row__button bold-text" }, "B"), /*#__PURE__*/
    React.createElement("button", { className: "customize-row__button italic-text" }, "I"), /*#__PURE__*/
    React.createElement("button", { className: "customize-row__button underline-text" }, "u")), /*#__PURE__*/

    React.createElement("div", { className: "customize-row__set" }, /*#__PURE__*/
    React.createElement("button", { className: "customize-row__button link-text" }, "link"), /*#__PURE__*/
    React.createElement("button", { className: "customize-row__button" }, /*#__PURE__*/
    React.createElement("img", { src: "http://www.jesush.com/wp-content/uploads/2008/07/happy10.gif" })))));




};

const MessageForm = ({ value, addedMessage, onChange }) => {
  const disabledClass = !value.length ? 'message-form__submit--disabled' : null;
  return /*#__PURE__*/(
    React.createElement("form", { className: "message-form", onSubmit: e => {addedMessage(e, value);} }, /*#__PURE__*/
    React.createElement("textarea", {
      className: "message-form__textarea",
      value: value,
      onChange: onChange }), /*#__PURE__*/

    React.createElement("div", { className: "message-form__actions" }, /*#__PURE__*/
    React.createElement("button", {
      type: "button",
      onClick: e => {addedMessage(e, value);},
      disabled: !value.length,
      className: `message-form__submit ${disabledClass}` }))));



};

let messageId = 0;

class InstantMessenger extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "addedMessage",









    (e, val) => {
      e.preventDefault();
      const message = { text: val, id: messageId++ };
      this.state.data.push(message);
      this.setState({ data: this.state.data, value: "" });
    });_defineProperty(this, "handleChange",

    event => {
      this.setState({ value: event.target.value });
    });this.state = { chatName: "XxAZNxKidZxX", screenName: "oOLilsiGgyFweNdOo", data: [], value: "" };}

  render() {
    const { data, chatName, screenName, value } = this.state;
    return /*#__PURE__*/(
      React.createElement("div", { className: "instant-messenger" }, /*#__PURE__*/
      React.createElement(Title, { chatName: chatName }), /*#__PURE__*/
      React.createElement(Navbar, { chatName: chatName }), /*#__PURE__*/
      React.createElement(MessageList, {
        messageData: data,
        screenName: screenName,
        chatName: chatName }), /*#__PURE__*/

      React.createElement(CustomizeRow, null), /*#__PURE__*/
      React.createElement(MessageForm, {
        addedMessage: this.addedMessage,
        onChange: this.handleChange,
        value: value })));



  }}


ReactDOM.render( /*#__PURE__*/React.createElement(InstantMessenger, null), document.getElementById('app'));