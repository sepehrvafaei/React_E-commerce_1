declare var require: any

var React = require('react');
var ReactDOM = require('react-dom');

export default function Title({ name, title }) {
    return (
        <div className="row">
            <div className="col-10 mx-auto my-2 text-center">
                <h1 className="text-capitalize font-weight-bold">
                    {name} <strong className="text-blue">{title}</strong>
                </h1>
            </div>
        </div>
    )
}