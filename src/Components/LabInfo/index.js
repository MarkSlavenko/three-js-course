import React from 'react';
import './style.css';
import ReactMarkdown from 'react-markdown/with-html';

function LabInfo(props) {

    return (

        <div className={"modal my-2"}>
            <div id="style-2" className="modal-content container px-5">
                <div className="row">
                <div className="col-12 text-right for-close px-4">
                    <span>
                        <a onClick={props.Hide}><i className="fa fa-times" aria-hidden="true"></i></a>
                    </span>
                </div>
                    <div className="col-12 markdown-body">
                        <div className="text-center"><h1>Лабораторная работа № {props.Lab}</h1></div>
                        {<ReactMarkdown source={props.Text} escapeHtml={false}/>}
                        <div className="text-center"><button className="about-button">Скачать пример</button></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LabInfo;