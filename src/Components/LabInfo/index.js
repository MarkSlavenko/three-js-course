import React from 'react';
import './style.css';
import ReactMarkdown from 'react-markdown/with-html';

function LabInfo(props) {

    let fileForDownload;
    if (props.Download) {
      try {
          fileForDownload = require("../../LabsForDownload/lab" + props.Lab + ".rar");
      } catch {
          console.error("Файл лабораторной работы не найден!");
      }
    }

    return (
        <div className={"modal"}>
            <div id="style-2" className="modal-content container px-5">
                <div className="row">
                <div className="col-12 text-right for-close px-4">
                    <span>
                        <a onClick={props.Hide}><i className="fa fa-times" aria-hidden="true"></i></a>
                    </span>
                </div>
                    <div className="col-12 markdown-body">
                        {props.Lab && <div className="text-center"><h1>Лабораторна работа № {props.Lab}</h1></div>}
                        {<ReactMarkdown source={props.Text} escapeHtml={false}/>}
                        {props.Download && <div className="text-center">
                            <a href={fileForDownload} download={"lab" + props.Lab + ".rar"}>
                                {fileForDownload && <button className="about-button">Скачати приклад</button>}
                            </a></div>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LabInfo;