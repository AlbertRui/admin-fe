/*
<<<<<<< HEAD
* @Author: Rosen
* @Date:   2017-02-11 20:06:59
* @Last Modified by:   Rosen
* @Last Modified time: 2017-02-24 21:06:43
*/
=======
 * @Author: Rosen
 * @Date:   2017-02-11 20:06:59
 * @Last Modified by:   Rosen
 * @Last Modified time: 2017-02-24 21:06:43
 */
>>>>>>> 9b63b1bca6de15b8614e2242163a2226cb7c6f27

'use strict';
import React from 'react';
import ReactDOM from 'react-dom';

const PageTitle = React.createClass({
<<<<<<< HEAD
    componentDidMount(){
        document.title = this.props.pageTitle || 'MMall Admin'
    },
    render() {
        return (
            <div className="row">
                <div className="col-lg-12">
                    <h1 className="page-header">{this.props.pageTitle}</h1>
                    {this.props.children}
                </div>
=======
    componentDidMount() {
        document.title = this.props.pageTitle || 'MMall Admin'
    },
    render() {
        return ( 
            <div className = "row" >
                <div className = "col-lg-12" >
                    <h1 className = "page-header" > {
                        this.props.pageTitle
                    } </h1> {
                        this.props.children
                    } 
                </div> 
>>>>>>> 9b63b1bca6de15b8614e2242163a2226cb7c6f27
            </div>
        );
    }
});

export default PageTitle;