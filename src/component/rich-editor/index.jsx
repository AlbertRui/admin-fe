/*
<<<<<<< HEAD
* @Author: Rosen
* @Date:   2017-02-18 10:47:31
* @Last Modified by:   Rosen
* @Last Modified time: 2017-03-02 13:14:47
*/

'use strict';

import React        from 'react';
import ReactDOM     from 'react-dom';
import Simditor     from 'simditor';
=======
 * @Author: Rosen
 * @Date:   2017-02-18 10:47:31
 * @Last Modified by:   Rosen
 * @Last Modified time: 2017-03-02 13:14:47
 */

'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Simditor from 'simditor';
>>>>>>> 9b63b1bca6de15b8614e2242163a2226cb7c6f27

import MMUtile from 'util/mm.jsx';

const _mm = new MMUtile();

import './index.scss';

const RichEditor = React.createClass({
    getInitialState() {
        return {
<<<<<<< HEAD
            
        };
    },
    componentDidMount(){
        this.loadEditor();
    },
    loadEditor(){
        this.textarea  = this.refs['textarea'];
        this.editor = new Simditor({
            textarea: $(this.textarea),
            defaultValue: this.props.placeholder,
            upload:{
                url             : _mm.getServerUrl('/manage/product/richtext_img_upload.do'),
                defaultImage    : '',
                fileKey         :'upload_file'
=======

        };
    },
    componentDidMount() {
        this.loadEditor();
    },
    loadEditor() {
        this.textarea = this.refs['textarea'];
        this.editor = new Simditor({
            textarea: $(this.textarea),
            defaultValue: this.props.placeholder,
            upload: {
                url: _mm.getServerUrl('/manage/product/richtext_img_upload.do'),
                defaultImage: '',
                fileKey: 'upload_file'
>>>>>>> 9b63b1bca6de15b8614e2242163a2226cb7c6f27
            }
        });
        // bind event
        this.bindEditorEvent();
    },
<<<<<<< HEAD
    bindEditorEvent(){
=======
    bindEditorEvent() {
>>>>>>> 9b63b1bca6de15b8614e2242163a2226cb7c6f27
        this.editor.on('valuechanged', e => {
            this.props.onValueChange(this.editor.getValue());
        })
    },
<<<<<<< HEAD
    setValue(value){
        this.editor.setValue(value);
    },
    render() {
        return (
            <div className="rich-editor">
                <textarea ref="textarea"></textarea>
            </div>
        )           
=======
    setValue(value) {
        this.editor.setValue(value);
    },
    render() {
        return ( 
            <div className = "rich-editor" >
                <textarea ref = "textarea" > </textarea> 
            </div>
        )
>>>>>>> 9b63b1bca6de15b8614e2242163a2226cb7c6f27
    }
});

export default RichEditor;