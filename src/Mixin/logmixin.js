import ReactDOM from 'react-dom';
const logMixin = {
    _log (methodName, args) {
        console.log(methodName, args);
    },
    componentWillUpdate() {
        this._log('ComponentWillUpdate', arguments);
    },
    componentDidUpdate(oldProps, oldState) {
        this._log('ComponentDidUpdate', arguments);
    },
    componentWillMount(){
        this._log('ComponentWillMount', arguments);
    },
    componentDidMount() {
        this._log('ComponentDidMount', arguments);
        console.log(ReactDOM.findDOMNode(this).getBoundingClientRect());// ReactDOM.findDOMNode(this) доступ к только что установленному DOM узлу
    },
    componentWillUnmount() {
        this._log('ComponentWillUnmount', arguments);
    }
}
export default logMixin;