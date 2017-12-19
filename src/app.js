import React from 'react';
import ReactDOM from 'react-dom';
import DefaultUpload from './DefaultUpload';

class FileUpload extends React.Component {
    render() {
        return (
            <div className="example">
                <h2>
                    React Js File upload to google cloud storage using multer
                </h2>
                <p>This is the default use, posting to the google cloud storage.</p>
                <DefaultUpload />
            </div>
        );
    }
}

ReactDOM.render(<FileUpload />, document.getElementById('app'));
